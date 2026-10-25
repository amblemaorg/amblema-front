import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PresentationalBlockComponent } from '../../page-block.component';
import { FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import smartTableImageConfig from './table-images-config.js';
import { LocalDataSource } from 'ng2-smart-table';
import { ImgHelper } from '../../../../../helpers/img.helper';
import { Select } from '@ngxs/store';
import { YearBookState } from '../../../../../store/yearbook/yearbook.action';
import { Observable } from 'rxjs';

// Sanity limit for the original file; the configured sizeLimitMb applies after compression
const MAX_SOURCE_IMAGE_MB = 25;

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.scss'],
})
export class FormReviewComponent
  implements OnInit, PresentationalBlockComponent {
  // To validate the file
  readonly pattern = /image*/;
  public msgErrorFile: string | boolean = false;

  @Select(YearBookState.isMakingAction) makingActionSubs$: Observable<any>;

  type: 'presentational';
  name: string;
  component: string;
  settings: {
    // -- Event
    onSubmit: (values: any) => void;
    onClickButton: (values: any) => void;
    onCancel: (values: any) => void;
    // -- Properties
    fields?: {
      description?:
      | {
        label?: string;
        placeholder?: string;
        value?: any;
        disabled?: boolean;
        maxLength?: number;
        minLength?: number;
      }
      | false;
      inputImg?:
      | {
        name?: string;
        label?: string;
        placeholder?: string;
        value?: any;
        multiple?: boolean;
        disabled?: boolean;
        sizeLimitMb?: number;
      }
      | false;
      button?:
      | {
        type?: string;
        text?: string;
        ingAction?: string;
        isMainBtn?: boolean;
        hidden?: boolean;
        disabled?: boolean;
      }
      | false;
      cancelButton?:
      | {
        type?: string;
        text?: string;
        ingAction?: string;
        isMainBtn?: boolean;
        hidden?: boolean;
        disabled?: boolean;
      }
      | false;
    };
  };
  form: FormGroup;
  tableImages: any = smartTableImageConfig;
  source: LocalDataSource = new LocalDataSource();

  // Image compressions started on selection and not finished yet
  private pendingCompressions: Promise<void>[] = [];
  readonly maxSourceImageMb = MAX_SOURCE_IMAGE_MB;

  isSaving: boolean = false;
  quillEditor: any;
  private isLimitGuardAttached: boolean = false;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };

  formatInitialDescription(value: string): string {
    if (!value) return '';
    // Si ya viene con estructura de etiquetas de bloque (como <p> o <div>), lo dejamos o normalizamos
    const hasBlockTags = /<(?:p|div|ul|ol|h[1-6]|blockquote)[^>]*>/i.test(value);
    if (!hasBlockTags) {
      // Viene como texto plano con saltos de línea (\r\n o \n)
      const paragraphs = value.split(/\r?\n|\r/g);
      return paragraphs
        .map((p) => `<div>${p.trim() === '' ? '<br>' : p}</div>`)
        .join('');
    }
    return value;
  }

  cleanHtml(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  }

  cleanTextLength(html: string): number {
    if (this.quillEditor && this.quillEditor.root) {
      const text = this.quillEditor.getText();
      return text ? Math.max(0, text.length - 1) : 0;
    }
    return this.cleanHtml(html).length;
  }

  getMaxLength(): number | null {
    if (
      this.settings &&
      this.settings.fields &&
      this.settings.fields.description &&
      this.settings.fields.description.maxLength
    ) {
      return this.settings.fields.description.maxLength;
    }
    return null;
  }

  getEditorTextLength(): number {
    if (this.quillEditor) {
      const text = this.quillEditor.getText();
      return text ? Math.max(0, text.length - 1) : 0;
    }
    const val =
      this.form && this.form.get('description')
        ? this.form.get('description').value
        : '';
    return this.cleanHtml(val).length;
  }

  onEditorCreated(editor: any): void {
    this.quillEditor = editor;
    this.setupCharacterLimitGuard();
  }

  private setupCharacterLimitGuard(): void {
    if (!this.quillEditor || !this.quillEditor.root) {
      return;
    }
    if (this.isLimitGuardAttached) {
      return;
    }
    this.isLimitGuardAttached = true;

    const editorRoot = this.quillEditor.root as HTMLElement;

    // 1. Bloquear pulsaciones de teclado si ya se alcanzó el límite
    editorRoot.addEventListener('keydown', (e: KeyboardEvent) => {
      const maxLength = this.getMaxLength();
      if (!maxLength || maxLength <= 0) {
        return;
      }

      // Permitir atajos y teclas de control (Ctrl+C, Ctrl+A, Ctrl+Z, etc.)
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      // Teclas de navegación y borrado permitidas
      const allowedKeys = [
        'Backspace',
        'Delete',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
        'PageUp',
        'PageDown',
        'Tab',
        'Escape',
        'Shift',
        'Control',
        'Alt',
        'Meta',
        'CapsLock',
      ];
      if (allowedKeys.includes(e.key)) {
        return;
      }

      // Si es una tecla imprimible o Enter
      if (e.key.length === 1 || e.key === 'Enter') {
        const currentLength = this.getEditorTextLength();
        const selection = this.quillEditor.getSelection();
        const selLength = selection ? selection.length : 0;

        // Si agregar 1 carácter sobrepasa el límite, bloquear
        if (currentLength - selLength + 1 > maxLength) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    });

    // 2. Controlar pegado (paste) truncando si excede el límite
    editorRoot.addEventListener('paste', (e: ClipboardEvent) => {
      const maxLength = this.getMaxLength();
      if (!maxLength || maxLength <= 0) {
        return;
      }

      const clipboardData =
        e.clipboardData || (window as any).clipboardData;
      const pastedText = clipboardData
        ? clipboardData.getData('text/plain')
        : '';
      if (!pastedText) {
        return;
      }

      const currentLength = this.getEditorTextLength();
      const selection = this.quillEditor.getSelection();
      const selLength = selection ? selection.length : 0;
      const available = maxLength - (currentLength - selLength);

      if (available <= 0) {
        e.preventDefault();
        e.stopPropagation();
      } else if (pastedText.length > available) {
        e.preventDefault();
        e.stopPropagation();
        const truncated = pastedText.slice(0, available);
        if (selection) {
          this.quillEditor.deleteText(selection.index, selLength, 'user');
          this.quillEditor.insertText(selection.index, truncated, 'user');
          this.quillEditor.setSelection(selection.index + truncated.length, 0);
        } else {
          const end = Math.max(0, this.quillEditor.getLength() - 1);
          this.quillEditor.insertText(end, truncated, 'user');
          this.quillEditor.setSelection(end + truncated.length, 0);
        }
      }
    });

    // 3. Salvaguarda en text-change para drag-and-drop o autocompletado
    this.quillEditor.on(
      'text-change',
      (delta: any, oldDelta: any, source: string) => {
        if (source !== 'user') {
          return;
        }
        const maxLength = this.getMaxLength();
        if (!maxLength || maxLength <= 0) {
          return;
        }

        const currentLength = this.getEditorTextLength();
        if (currentLength > maxLength) {
          const excess = currentLength - maxLength;
          const sel = this.quillEditor.getSelection();
          if (sel && sel.index >= excess) {
            this.quillEditor.deleteText(sel.index - excess, excess, 'silent');
            this.quillEditor.setSelection(sel.index - excess, 0);
          } else {
            this.quillEditor.setContents(oldDelta, 'silent');
          }
          if (this.form && this.form.get('description')) {
            this.form
              .get('description')
              .setValue(this.quillEditor.root.innerHTML);
          }
        }
      },
    );
  }

  descriptionValidators(minLength?: number, maxLength?: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const val = control && control.value ? control.value : '';
      const text = this.cleanHtml(val);
      const length = text.length;

      // Empty is valid: lets the user clear a description loaded by mistake
      if (length === 0) {
        return null;
      }

      if (minLength && minLength > 0 && length < minLength) {
        return { minlength: true };
      }
      if (maxLength && maxLength > 0 && length > maxLength) {
        return { maxlength: true };
      }
      return null;
    };
  }

  constructor() { }

  ngOnInit() {
    /**
     * The format of the object that is of type image is prepared
     */
    this.makingActionSubs$.subscribe((res) => {
      if (!res.makingAction && this.isSaving) {
        this.isSaving = false;
      }
    });
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };
    const { fields } = settings;
    let descriptionValue: string;
    let inputImgValue: string | string[];

    if (fields.description) {
      descriptionValue = fields.description.value
        ? this.formatInitialDescription(fields.description.value)
        : '';
    }
    if (fields.inputImg) {
      const defaultImageValue = fields.inputImg.multiple ? [] : '';
      inputImgValue = fields.inputImg.value
        ? fields.inputImg.value
        : defaultImageValue;
      if (inputImgValue instanceof Array) {
        this.source.load(
          inputImgValue.map((image) => {
            return { image };
          }),
        );
      }
    }

    const validators = [];
    if (fields.description) {
      const minL = fields.description.minLength;
      const maxL = fields.description.maxLength;
      if (minL || maxL) {
        validators.push(this.descriptionValidators(minL, maxL));
      }
    }

    this.form = new FormGroup({
      description: new FormControl(descriptionValue, validators),
      inputImg: new FormControl(inputImgValue),
    });

    if (fields.description && fields.description.disabled) {
      this.form.get('description').disable();
    }

    if (this.quillEditor) {
      this.setupCharacterLimitGuard();
    }
  }

  onTableActions = (event: any) => {
    if (event.action === 'DELETE') {
      const images = this.form.get('inputImg').value;
      const newImages = images.filter((image) => image !== event.data.image);
      this.form.get('inputImg').setValue(newImages);
      this.source.remove(event.data);
    }
  };

  // Images are compressed when selected; waits for the ones still in progress
  // and takes them from the form, since `values` was read before they finished
  private async prepareValues(values: any) {
    if (values && values.description !== undefined) {
      values = {
        ...values,
        description: this.cleanHtml(values.description) === '' ? '' : values.description,
      };
    }
    if (this.pendingCompressions.length) {
      await Promise.all(this.pendingCompressions);
      values = { ...values, inputImg: this.form.get('inputImg').value };
    }
    return values;
  }

  async onClickButton(values: any) {
    this.isSaving = true;
    this.settings.onClickButton(await this.prepareValues(values));
    // this.isSaving = false;
  }

  async onSubmitAction(values: any) {
    this.isSaving = true;
    this.settings.onSubmit(await this.prepareValues(values));
    // this.isSaving = false;
  }

  onUploadImage = (event: any) => {
    // Get file
    for (var i = 0; i < event.target.files.length; i++) {
      const file = event.dataTransfer
        ? event.dataTransfer.files[i]
        : event.target.files[i];

      // Instance reader
      const reader: FileReader = new FileReader();

      if (file) {
        const fileSizeMb = this.toMb(file.size || 0);
        if (fileSizeMb > MAX_SOURCE_IMAGE_MB) {
          this.msgErrorFile = `La imagen pesa ${fileSizeMb} MB, excede el limite de ${MAX_SOURCE_IMAGE_MB} MB.`;
        }

        if (!this.isValidImage(file)) {
          this.msgErrorFile = 'El archivo no es una imagen.';
        }

        if (this.msgErrorFile) {
          this.showFileError(this.msgErrorFile as string);
          return false;
        }

        // Convert binary file
        reader.onload = (event) => this.trackCompression(this.convertLoad(event));
        //.bind(this);

        // Read the binary
        reader.readAsDataURL(file);

      }
    }
    return true;

  };

  private trackCompression(task: Promise<void>) {
    this.pendingCompressions.push(task);
    task.then(() => {
      this.pendingCompressions = this.pendingCompressions.filter((t) => t !== task);
    });
  }

  async convertLoad(event) {
    // Get target
    const reader = <FileReader>event.target;

    const newImg = await ImgHelper.compressDataUrl(reader.result as string);
    if (!newImg) {
      this.showFileError('El archivo no es una imagen válida.');
      return;
    }

    // The size limit applies to the image that is uploaded, after compression
    const maxImageSizeMb = this.settings.fields.inputImg['sizeLimitMb'] || -1;
    const imgSizeMb = this.toMb(ImgHelper.dataUrlBytes(newImg));
    if (maxImageSizeMb > -1 && imgSizeMb > maxImageSizeMb) {
      this.showFileError(
        `La imagen pesa ${imgSizeMb} MB después de comprimirla, excede el limite de ${maxImageSizeMb} MB.`,
      );
      return;
    }

    //  Set base 64
    // @ts-ignore
    if (this.settings.fields.inputImg.multiple) {
      let images = [...this.form.get('inputImg').value];
      images = images instanceof Array ? images : [];
      const isRepeated = images.some((theImg) => theImg === newImg);
      if (!isRepeated) {
        images.push(newImg);
        this.form.get('inputImg').setValue(images);
        this.source.add({ image: newImg });
        this.source.refresh();
      }
    } else {
      this.form.get('inputImg').setValue(newImg);
    }
  }

  private showFileError(msg: string) {
    this.msgErrorFile = msg;
    setTimeout(() => {
      this.msgErrorFile = false;
    }, 10000);
  }

  private toMb(bytes: number): number {
    return parseFloat((bytes / 1000 / 1000).toFixed(2));
  }

  isValidImage(file): boolean {
    return file.type.match(this.pattern) ? true : false;
  }

  setNullFormImg() {
    this.form.get('inputImg').setValue(null);
    // this.settings.onSubmit({...this.form.value, inputImg: null});
  }

  formControlHasError(formControlName: string, errorName: string) {
    if (
      this.form.get(formControlName).invalid &&
      this.form.get(formControlName).errors &&
      (this.form.get(formControlName).dirty ||
        this.form.get(formControlName).pristine)
    ) {
      return this.form.get(formControlName).hasError(errorName);
    }
    return false;
  }

  isFormInvalid() {
    return this.form.invalid;
  }

  getMinOrMaxLength(minOrMaxLength) {
    return minOrMaxLength ? minOrMaxLength : 0;
  }
}

interface settingsFields {
  description?:
  | {
    label?: string;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
  }
  | false;
  inputImg?:
  | {
    name?: string;
    label?: string;
    placeholder?: string;
    value?: any;
    multiple?: boolean;
    disabled?: boolean;
  }
  | false;
  button?:
  | {
    type?: string;
    text?: string;
    ingAction?: string;
    isMainBtn?: boolean;
    hidden?: boolean;
    disabled?: boolean;
  }
  | false;
  cancelButton?:
  | {
    type?: string;
    text?: string;
    ingAction?: string;
    isMainBtn?: boolean;
    hidden?: boolean;
    disabled?: boolean;
  }
  | false;
}
