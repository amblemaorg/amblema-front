import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormGroup, FormControl } from "@angular/forms";
import smartTableStudentsConfig from "./table-students-config.js";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-form-table",
  templateUrl: "./form-table.component.html",
  styleUrls: ["./form-table.component.scss"],
})
export class FormTableComponent
  implements OnInit, AfterViewChecked, PresentationalBlockComponent {
  type: "presentational";
  name: string;
  component: string;
  settings: {
    // -- Event
    onSubmit: (values: any) => void;
    // -- Properties
    fields?: {
      table?: {
        name?: string;
      }[];
      button?: {
        text?: string;
        hidden?: boolean;
        disabled?: boolean;
        ingAction?: string;
        // isMainBtn?: boolean;
      };
    };
  };

  form: FormGroup;
  tableStudents: any = smartTableStudentsConfig;
  source: LocalDataSource = new LocalDataSource();
  selectedRows: any;
  isSaving: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    const td = document.querySelector('.is-multi tbody td[colspan="5"]');
    if (td) td.setAttribute("colspan", "6");
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };

    if (this.settings.fields.table?.length) {
      this.source = new LocalDataSource(this.settings.fields.table);
      this.tableStudents = { ...this.tableStudents, hideSubHeader: false };
    }

    this.form = new FormGroup({
      description: new FormControl(""),
    });
  }

  onTableActions = (event: any) => {
    console.log("event.action", event.action);
  };

  onSubmitAction(values: any) {
    console.log("Submit values", values);
  }

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log("HOLA LU", event, this.selectedRows);
  }
}
