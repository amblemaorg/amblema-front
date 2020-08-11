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
      descripcion?:
        | {
            label?: string;
            placeholder?: string;
            formControl?: AbstractControl;
          }
        | false;
      inputImg?:
        | {
            label?: string;
            placeholder?: string;
            formControl?: AbstractControl;
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
     *
     */
  }

  setSettings(settings: any): void {
    this.settings = { ...settings };
  }

  onSubmit(): void {}
}
