import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PresentationalBlockComponent } from "../../page-block.component";
import { FormGroup, FormControl } from "@angular/forms";
import smartTableImageConfig from "./table-images-config.js";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-form-review",
  templateUrl: "./form-review.component.html",
  styleUrls: ["./form-review.component.scss"],
})
export class FormReviewComponent implements OnInit, PresentationalBlockComponent {
  // To validate the file
  readonly pattern = /image*/;
  public msgErrorFile: boolean = false;

  type: "presentational";
  name: string;
  component: string;
  settings: {
    // -- Event
    onSubmit: (values: any) => void;
    onCancel: (values: any) => void;
    // -- Properties
    fields?: {
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
            text?: string;
            hidden?: boolean;
            disabled?: boolean;
          }
        | false;
      cancelButton?:
        | {
            text?: string;
            hidden?: boolean;
            disabled?: boolean;
          }
        | false;
    };
  };
  form: FormGroup;
  tableImages: any = smartTableImageConfig;
  source: LocalDataSource = new LocalDataSource();

  constructor() {}

  ngOnInit() {
    /**
     * The format of the object that is of type image is prepared
     */
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };
    const { fields } = settings;
    let descriptionValue: string;
    let inputImgValue: string | string[];

    if (fields.description) {
      descriptionValue = fields.description.value ? fields.description.value : "";
    }
    if (fields.inputImg) {
      const defaultImageValue = fields.inputImg.multiple ? [] : "";
      inputImgValue = fields.inputImg.value ? fields.inputImg.value : defaultImageValue;
      if (inputImgValue instanceof Array) {
        this.source.load(
          inputImgValue.map((image) => {
            return { image };
          })
        );
      }
    }

    this.form = new FormGroup({
      description: new FormControl(descriptionValue),
      inputImg: new FormControl(inputImgValue),
    });
  }

  onTableActions = (event: any) => {
    if (event.action === "DELETE") {
      const images = this.form.get("inputImg").value;
      const newImages = images.filter((image) => image !== event.data.image);
      this.form.get("inputImg").setValue(newImages);
      this.source.remove(event.data);
    }
  };

  onUploadImage = (event: any) => {
    // Get file
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];

    // Instance reader
    const reader: FileReader = new FileReader();

    if (file) {
      if (!this.isValidImage(file)) {
        this.msgErrorFile = true;

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

      return true;
    }
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
        let images = this.form.get("inputImg").value;
        images = images instanceof Array ? images : [];
        images.push(reader.result as string);
        this.form.get("inputImg").setValue(images);
        this.source.add({ image: reader.result as string });
        this.source.refresh();
      } else {
        this.form.get("inputImg").setValue(reader.result as string);
      }
      return true;
    };
  }

  isValidImage(file): boolean {
    return file.type.match(this.pattern) ? true : false;
  }
}
