import { Component, OnInit } from "@angular/core";
import { PresentationalBlockComponent } from "../../page-block.component";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-form-review",
  templateUrl: "./form-review.component.html",
  styleUrls: ["./form-review.component.scss"],
})
export class FormReviewComponent
  implements OnInit, PresentationalBlockComponent {
  type: "presentational";
  component: string;
  settings: {
    fields?: {
      description?:
        | {
            label?: string;
            placeholder?: string;
            value?: any
          }
        | false;
      inputImg?:
        | {
            label?: string;
            placeholder?: string;
            value?: any
          }
        | false;
      button?:
        | {
            text?: string;
          }
        | false;
    };
  };

  constructor() {}

  ngOnInit() {
    /**
     * The format of the object that is of type image is prepared
     */
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };
  }

  onSubmit(): void {}
}
