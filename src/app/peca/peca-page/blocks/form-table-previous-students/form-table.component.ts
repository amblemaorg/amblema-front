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
      table?:
        | any
        | {
            id?: string;
            name?: string;
            lastName?: string;
            idCard?: string;
            gender?: string;
            birthDate?: string;
          }[];
      allSections?: any[];
      sectionKey?: string;
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
  isUpdating: boolean = false;

  showSelectSections1: boolean = true;
  showSelectGrades2: boolean = true;
  showSelectSections2: boolean = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    const td = document.querySelector(
      '.is-multi.form-table-component tbody td[colspan="5"]'
    );
    if (td) td.setAttribute("colspan", "6");
  }

  private fillTable(rows: any[] = []) {
    if (rows.length) this.settings.fields.table = rows;
    if (this.settings.fields.table?.length) {
      this.source = new LocalDataSource(this.settings.fields.table);
      this.tableStudents = { ...this.tableStudents, hideSubHeader: false };
    }
  }

  public setSettings(settings: any): void {
    this.settings = { ...settings };

    this.fields1 = Object.keys(this.settings.fields.fields1);
    this.fields2 = Object.keys(this.settings.fields.fields2);

    this.fillTable();

    ["1", "2"].forEach((num) => {
      this[`form${num}`] = new FormGroup(
        this[`fields${num}`].reduce((fields, field) => {
          fields[field] = new FormControl("", [Validators.required]);
          return fields;
        }, {})
      );
    });
  }

  disabledThis(type: number = 0): boolean {
    const dis = [
      this.isSaving,
      this.isUpdating,
      ...(type === 1 ? [!this.form1.valid] : []),
      ...(type === 2 ? [!this.form2.valid] : []),
      this.isSearching,
    ].some((cond) => cond);
    return dis;
  }

  onTableActions = (event: any) => {
    console.log("event.action", event.action);
  };

  onSubmitAction(type: number, values: any, update: boolean = false) {
    this[
      type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"
    ] = true;
    console.log("Submit values", values);
    setTimeout(() => {
      this[
        type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"
      ] = false;
      if (type === 1) {
        this.source = new LocalDataSource();
        this.selectedRows = [];
        this.fillTable([
          {
            id: "1",
            name: "Astrid",
            lastName: "Herrera",
            idCard: "1234567890",
            gender: "Femenino",
            birthDate: "22-08-2011",
          },
          {
            id: "2",
            name: "Asdrubal",
            lastName: "Querales",
            idCard: "1234567891",
            gender: "Masculino",
            birthDate: "12-05-2011",
          },
        ]);
      } else {
        this.form2.reset();
        this.onSubmitAction(1, this.form1.value, true);
      }
    }, 3000);
  }

  onUserRowSelect(event) {
    this.selectedRows =
      event.selected && event.selected instanceof Array ? event.selected : [];
  }

  // filling sections according to selected grade
  private fillSections(field: string, grade = null, type: number = 0) {
    if (type) this[`showSelectSections${type}`] = false;
    if (!grade && type) {
      this.settings.fields[`fields${type}`][
        `${field}${type === 1 ? "" : "2P"}`
      ].items = [];
    } else if (type) {
      this.settings.fields[`fields${type}`][
        `${field}${type === 1 ? "" : "2P"}`
      ].items = this.settings.fields.allSections.filter((s) => {
        return s.grade == grade;
      });
    }
    this[`form${type}`].get(`${field}${type === 1 ? "" : "2P"}`).reset();
    setTimeout(() => {
      if (type) this[`showSelectSections${type}`] = true;
    });
  }

  setSelect(field: string, type: number, event: any) {
    console.log("field, type, event", field, type, event);
    if (event && type === 1 && !field.includes("section")) {
      this.fillSections(this.settings.fields.sectionKey, event.id, type);
      this.showSelectGrades2 = false;
      this.showSelectSections2 = false;
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
        this.showSelectGrades2 = true;
        this.showSelectSections2 = true;
      });
    } else if (event && type === 2 && !field.includes("section"))
      this.fillSections(this.settings.fields.sectionKey, event.id, type);
  }

  hasErrors(form: FormGroup, field: string): string | null {
    const errors: any = form.get(field).errors;
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE : null;
    }

    return null;
  }
}
