import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import smartTableStudentsConfig from "./table-students-config.js";
import { LocalDataSource } from "ng2-smart-table";
import { MESSAGES } from "src/app/web/shared/forms/validation-messages";

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
      fields1?: {
        any: {
          id?: string;
          name?: string;
          label?: string;
          items?: any[];
          placeholder?: string;
          loadingLabel?: string;
          loading?: boolean;
        };
      };
      fields2?: {
        any: {
          id?: string;
          name?: string;
          label?: string;
          items?: any[];
          placeholder?: string;
          loadingLabel?: string;
          loading?: boolean;
        };
      };
      table?: {
        id?: string;
        name?: string;
        lastName?: string;
        idCard?: string;
        gender?: string;
        birthDate?: string;
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

  showTable: boolean = true;

  form1: FormGroup;
  form2: FormGroup;
  fields1: string[];
  fields2: string[];

  tableStudents: any = smartTableStudentsConfig;
  source: LocalDataSource = new LocalDataSource();
  selectedRows: any[] = [];

  isSaving: boolean = false;
  isSearching: boolean = false;
  showSelectData: boolean = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    const td = document.querySelector(
      '.is-multi.form-table-component tbody td[colspan="5"]'
    );
    if (td) td.setAttribute("colspan", "6");
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };

    this.fields1 = Object.keys(this.settings.fields.fields1);
    this.fields2 = Object.keys(this.settings.fields.fields2);

    if (this.settings.fields.table?.length) {
      this.source = new LocalDataSource(this.settings.fields.table);
      this.tableStudents = { ...this.tableStudents, hideSubHeader: false };
    }

    this.form1 = new FormGroup({
      grade: new FormControl("", [Validators.required]),
      section: new FormControl("", [Validators.required]),
    });

    this.form2 = new FormGroup({
      grade2P: new FormControl("", [Validators.required]),
      section2P: new FormControl("", [Validators.required]),
    });
  }

  disabledThis(type: number = 0): boolean {
    const dis = [
      this.isSaving,
      ...(type === 1 ? [!this.form1.valid] : []),
      ...(type === 2 ? [!this.form2.valid] : []),
      this.isSearching,
    ].some((cond) => cond);
    return dis;
  }

  onTableActions = (event: any) => {
    console.log("event.action", event.action);
  };

  onSubmitAction(type: number, values: any) {
    this[type === 1 ? "isSearching" : "isSaving"] = true;
    console.log("Submit values", values);
    setTimeout(() => {
      this[type === 1 ? "isSearching" : "isSaving"] = false;
    }, 3000);
  }

  onUserRowSelect(event) {
    this.selectedRows =
      event.selected && event.selected instanceof Array ? event.selected : [];
  }

  setSelect(field: string, type: number, event: any) {
    console.log("field, type, event", field, type, event);
    if (type === 1 && field !== "section") {
      this.showSelectData = false;
      const ind = event
        ? this.settings.fields.fields1[field].items.findIndex(
            (item) => item.id === event.id
          )
        : -1;
      if (ind >= 0) {
        const toPromoteArr = this.settings.fields.fields1[field].items.slice(
          ind
        );
        this.settings.fields.fields2[`${field}2P`].items = toPromoteArr; // 2P means => To Promote
      }
      this.form2.get(`${field}2P`).reset();
      setTimeout(() => {
        this.showSelectData = true;
      });
    }
  }

  hasErrors(form: FormGroup, field: string): string | null {
    const errors: any = form.get(field).errors;
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE : null;
    }

    return null;
  }
}
