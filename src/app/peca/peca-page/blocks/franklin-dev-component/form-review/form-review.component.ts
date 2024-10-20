import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PresentationalBlockComponent } from '../../page-block.component';
import { FormGroup, FormControl } from '@angular/forms';
import smartTableImageConfig from './table-images-config.js';
import { LocalDataSource } from 'ng2-smart-table';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Select } from '@ngxs/store';
import { YearBookState } from '../../../../../store/yearbook/yearbook.action';
import { Observable } from 'rxjs';

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

  imgResultBeforeCompress: string | Object;
  sizeBeforeCompress: number | Object;
  imgResultAfterCompress: string | Object;
  sizeAfterCompress: number | Object;

  isSaving: boolean = false;

  constructor(private imageCompress: NgxImageCompressService) {}

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

  async compressFile({
    image,
    orientation = -2,
    isArray = false,
    position = 0,
  }) {
    const isB64 = image && image.length && image.includes(';base64,');
    // this.imageCompress.uploadFile().then(async ({ image, orientation }) => {
    if (isArray) {
      if (!this.imgResultBeforeCompress) this.imgResultBeforeCompress = {};
      if (!this.sizeBeforeCompress) this.sizeBeforeCompress = {};
      if (!this.imgResultAfterCompress) this.imgResultAfterCompress = {};
      if (!this.sizeAfterCompress) this.sizeAfterCompress = {};

      this.imgResultBeforeCompress[`${position}`] = image;
      this.sizeBeforeCompress[`${position}`] = isB64
        ? this.imageCompress.byteCount(image)
        : 0;
    } else {
      this.imgResultBeforeCompress = image;
      this.sizeBeforeCompress = isB64 ? this.imageCompress.byteCount(image) : 0;
    }
    // console.warn("Size in bytes was:", this.sizeBeforeCompress);

    const s_count = isArray
      ? this.sizeBeforeCompress[`${position}`]
      : this.sizeBeforeCompress;

    if (s_count > 800000)
      await this.fileCompresser({
        image,
        orientation,
        sizeBCompress: s_count,
        isArray,
        position,
        isBase64: isB64,
      });
    else {
      if (isArray) {
        this.imgResultAfterCompress[`${position}`] = image;
        this.sizeAfterCompress[`${position}`] = isB64
          ? this.imageCompress.byteCount(image)
          : 0;
      } else {
        this.imgResultAfterCompress = image;
        this.sizeAfterCompress = isB64
          ? this.imageCompress.byteCount(image)
          : 0;
      }
      // console.warn("Size in bytes is now:", this.sizeAfterCompress);
    }
    // });
  }

  async fileCompresser({
    image,
    orientation,
    sizeBCompress,
    isArray,
    position,
    isBase64,
  }) {
    const res = await this.imageCompress.compressFile(
      image,
      orientation,
      75,
      50,
    );
    if (res && typeof res === 'string') {
      if (isArray) {
        this.sizeAfterCompress[`${position}`] = isBase64
          ? this.imageCompress.byteCount(res)
          : 0;
      } else {
        this.sizeAfterCompress = isBase64
          ? this.imageCompress.byteCount(res)
          : 0;
      }

      const s_count = isArray
        ? this.sizeAfterCompress[`${position}`]
        : this.sizeAfterCompress;

      if (s_count > 800000 && s_count !== sizeBCompress)
        await this.fileCompresser({
          image: res,
          orientation,
          sizeBCompress: s_count,
          isArray,
          position,
          isBase64,
        });
      else {
        if (isArray) {
          this.imgResultAfterCompress[`${position}`] = res;
          this.sizeAfterCompress[`${position}`] = isBase64
            ? this.imageCompress.byteCount(res)
            : 0;
        } else {
          this.imgResultAfterCompress = res;
          this.sizeAfterCompress = isBase64
            ? this.imageCompress.byteCount(res)
            : 0;
        }
        // console.warn("Size in bytes is now:", this.sizeAfterCompress);
      }
    }
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };
    const { fields } = settings;
    let descriptionValue: string;
    let inputImgValue: string | string[];

    if (fields.description) {
      descriptionValue = fields.description.value
        ? fields.description.value
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

    this.form = new FormGroup({
      description: new FormControl(descriptionValue),
      inputImg: new FormControl(inputImgValue),
    });
  }

  onTableActions = (event: any) => {
    if (event.action === 'DELETE') {
      const images = this.form.get('inputImg').value;
      const readImgs =
        this.imgResultAfterCompress &&
        typeof this.imgResultAfterCompress === 'object'
          ? Object.keys(this.imgResultAfterCompress)
          : null;
      const newImages = images.filter((image) => image !== event.data.image);
      this.form.get('inputImg').setValue(newImages);
      if (readImgs) {
        const imgs_ = readImgs.reduce((theIms, currentImg) => {
          if (this.imgResultAfterCompress[currentImg] !== event.data.image)
            theIms.push(currentImg);
          return theIms;
        }, []);
        imgs_.map((img) => {
          delete this.imgResultAfterCompress[img];
        });
      }
      this.source.remove(event.data);
    }
  };

  async onClickButton(values: any) {
    this.isSaving = true;
    let doTheArray = false;

    if (values && values.inputImg) {
      if (values.inputImg instanceof Array) {
        doTheArray = true;
        if (values.inputImg.length) {
          const compressions = values.inputImg.map(
            async (image_, i) =>
              await this.compressFile({
                image: image_,
                isArray: true,
                position: i,
              }),
          );
          await Promise.all(compressions);
        }
      } else if (typeof values.inputImg === 'string')
        await this.compressFile({ image: values.inputImg });
    }
    if (doTheArray) {
      const theImages =
        this.imgResultAfterCompress &&
        typeof this.imgResultAfterCompress === 'object'
          ? Object.keys(this.imgResultAfterCompress).map(
              (img) => this.imgResultAfterCompress[img],
            )
          : [];

      this.settings.onClickButton(
        values.inputImg && values.description
          ? { ...values, inputImg: [...theImages] }
          : values,
      );
    } else
      this.settings.onClickButton(
        values.inputImg &&
          values.description &&
          this.imgResultAfterCompress &&
          typeof this.imgResultAfterCompress === 'string'
          ? { ...values, inputImg: this.imgResultAfterCompress }
          : values,
      );

    // this.isSaving = false;
  }

  async onSubmitAction(values: any) {
    this.isSaving = true;
    let doTheArray = false;

    if (values && values.inputImg) {
      if (values.inputImg instanceof Array) {
        doTheArray = true;
        if (values.inputImg.length) {
          const compressions = values.inputImg.map(
            async (image_, i) =>
              await this.compressFile({
                image: image_,
                isArray: true,
                position: i,
              }),
          );
          await Promise.all(compressions);
        }
      } else if (typeof values.inputImg === 'string')
        await this.compressFile({ image: values.inputImg });
    }
    if (doTheArray) {
      const theImages =
        this.imgResultAfterCompress &&
        typeof this.imgResultAfterCompress === 'object'
          ? Object.keys(this.imgResultAfterCompress).map(
              (img) => this.imgResultAfterCompress[img],
            )
          : [];

      this.settings.onSubmit(
        values.inputImg && values.description
          ? { ...values, inputImg: [...theImages] }
          : values,
      );
    } else
      this.settings.onSubmit(
        values.inputImg &&
          values.description &&
          this.imgResultAfterCompress &&
          typeof this.imgResultAfterCompress === 'string'
          ? { ...values, inputImg: this.imgResultAfterCompress }
          : values,
      );

    // this.isSaving = false;
  }

  onUploadImage = (event: any) => {
    // Get file
    for(var i=0; i<event.target.files.length; i++){
      const file = event.dataTransfer
        ? event.dataTransfer.files[i]
        : event.target.files[i];

      // MegaByte
      const maxImageSizeMb = this.settings.fields.inputImg['sizeLimitMb'] || -1;
      const fileSize = file.size
        ? parseFloat((file.size / 1000 / 1000).toFixed(2))
        : 0.0;
      let isOverloadingSize = false;

      if (maxImageSizeMb > -1) {
        isOverloadingSize = fileSize > maxImageSizeMb;
      }

      // Instance reader
      const reader: FileReader = new FileReader();

      if (file) {
        if (isOverloadingSize) {
          this.msgErrorFile = `La imagen pesa ${fileSize} MB, excede el limite de ${maxImageSizeMb} MB.`;
        }

        if (!this.isValidImage(file)) {
          this.msgErrorFile = 'El archivo no es una imagen.';
        }

        if (this.msgErrorFile) {
          setTimeout(() => {
            this.msgErrorFile = false;
          }, 10000);

          return false;
        }

        // Convert binary file
        reader.onload = (event) => this.convertLoad(event);
        //.bind(this);

        // Read the binary
        reader.readAsDataURL(file);

      }
    }
    return true;
    
  };

  convertLoad(event) {
    // Get target
    const reader = <FileReader>event.target;

    // Instance a object of type image
    const img = new Image();

    // Save on the source
    img.src = <string>reader.result;

    img.onload = () => {
      //  Set base 64
      // @ts-ignore
      if (this.settings.fields.inputImg.multiple) {
        let images = [...this.form.get('inputImg').value];
        images = images instanceof Array ? images : [];
        const newImg = reader.result as string;
        const isRepeated = images.some((theImg) => theImg === newImg);
        if (!isRepeated) {
          images.push(newImg);
          this.form.get('inputImg').setValue(images);
          this.source.add({ image: reader.result as string });
          this.source.refresh();
        }
      } else {
        this.form.get('inputImg').setValue(reader.result as string);
      }
      return true;
    };
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
