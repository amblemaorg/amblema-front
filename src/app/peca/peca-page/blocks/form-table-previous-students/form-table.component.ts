import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PresentationalBlockComponent } from "../../page-block.component";
import { FormGroup, FormControl } from "@angular/forms";
import smartTableStudentsConfig from "./table-students-config.js";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-form-table",
  templateUrl: "./form-table.component.html",
  styleUrls: ["./form-table.component.scss"],
})
export class FormTableComponent
  implements OnInit, PresentationalBlockComponent {
  type: "presentational";
  name: string;
  component: string;
  settings: {
    // -- Event
    onSubmit: (values: any) => void;
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
      button?:
        | {
            text?: string;
            hidden?: boolean;
            disabled?: boolean;
            ingAction?: string;
            // isMainBtn?: boolean;
          }
        | false;
    };
  };
  form: FormGroup;
  tableStudents: any = smartTableStudentsConfig;
  source: LocalDataSource = new LocalDataSource();

  isSaving: boolean = false;

  constructor() {}

  ngOnInit() {}

  public setSettings(settings: any): void {
    this.settings = { ...settings };
    const { fields } = settings;
    let descriptionValue: string;

    if (fields.description) {
      descriptionValue = fields.description.value
        ? fields.description.value
        : "";
    }

    this.form = new FormGroup({
      description: new FormControl(descriptionValue),
    });
  }

  onTableActions = (event: any) => {
    console.log("event.action", event.action);
  };

  onSubmitAction(values: any) {
    console.log("Submit values", values);
  }
}
