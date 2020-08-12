import { Component, OnInit } from "@angular/core";
import { PresentationalBlockComponent } from "../../page-block.component";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form-review",
  templateUrl: "./form-review.component.html",
  styleUrls: ["./form-review.component.scss"],
})
export class FormReviewComponent
  implements OnInit, PresentationalBlockComponent {
  // To validate the file
  readonly pattern = /image-*/;

  public msgErrorFile:boolean = false;

  type: "presentational";
  component: string;
  settings: {
    fields?: {
      description?:
        | {
            label?: string;
            placeholder?: string;
            value?: any;
          }
        | false;
      inputImg?:
        | {
            label?: string;
            placeholder?: string;
            value?: any;
          }
        | false;
      button?:
        | {
            text?: string;
          }
        | false;
    };
  };

  public form = new FormGroup({
    description: new FormControl(""),
    inputImg: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {
    /**
     * The format of the object that is of type image is prepared
     */
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onUploadImage(event: any) {
    // Get file
    const file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];

    // Instance reader
    const reader = new FileReader();

    if (file) {
      if (!this.isValidImage(file)) {
        
        this.msgErrorFile = true;

        setTimeout(() => {
          this.msgErrorFile = false;
        }, 10000);

        return false;
      }

      // Convert binary file
      reader.onload = this.convertLoad.bind(this);

      // Read the binary
      reader.readAsDataURL(file);

      return true;
    }
  }

  convertLoad(event) {
    // Get target
    const reader = event.target;
    // Instance a object of type image
    const img = new Image();

    // Save on the source
    img.src = reader.result;

    img.onload = () => {
      //  Set base 64
      this.form.controls.inputImg.setValue(reader.result as string);
      return true;
    };
  }

  isValidImage(file): boolean {
    return file.type.match(this.pattern) ? true : false;
  }
}
