import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TABLE_DEFAULT_SETTINGS as smartTableStudentsConfig } from "./table-students-config";
import { LocalDataSource } from "ng2-smart-table";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";
import { ToastrService } from "ngx-toastr";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";

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
    getFetcher?: (
      fetcher: string,
      ...genProps
    ) => { method: string; urlString: string };
    resStatus?: number;
    resMsg?: string;
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
      allSectionsPrevious?: any[];
      allSectionsCurrent?: any[];
      allGradesCurrent?: any[];
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

  constructor(
    private toastr: ToastrService,
    private fetcher: HttpFetcherService
  ) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    const td = document.querySelector(
      '.is-multi.form-table-component tbody td[colspan="5"]'
    );
    if (td) td.setAttribute("colspan", "6");
  }

  private fillTable(rows: any[] = []) {
    if (rows.length) this.settings.fields.table = rows;
    const init = this.source.count();
    if (this.settings.fields.table?.length) {
      this.tableStudents = { ...this.tableStudents, hideSubHeader: false };
      if (init) this.source.load(this.settings.fields.table);
      else this.source = new LocalDataSource(this.settings.fields.table);
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
    if (typeof values === "object") {
      this[
        type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"
      ] = true;

      console.log(values);
      const requestData = this.settings.getFetcher(
        type === 1 ? "get_students_list" : "post_promote_students",
        type === 1 ? values.section : []
      );

      const body =
        type === 1
          ? {}
          : {
              id_section_current: values.section2P,
              students: this.selectedRows.length ? this.selectedRows : [],
            };

      console.log("Hola", body, requestData);

      this.fetcher[requestData.method](
        requestData.urlString,
        type === 1 ? null : body
      ).subscribe((res) => {
        console.log("Holis", res);
        if (
          res &&
          ((requestData.method === "get" && res.status === 200) ||
            res.status === 201)
        ) {
          if (type === 1) {
            if (res.students instanceof Array && res.students.length)
              this.fillTable(res.students);
          } else {
            console.log("OK");
            this.form2.reset();
            this.toastr.success("Estudiantes promovidos exitosamente", "", {
              positionClass: "toast-bottom-right",
            });
            window.scroll(0, 0);
            this.onSubmitAction(1, this.form1.value, true);
          }
        } else {
          if (type === 1) {
            this.fillTable([]);
            this.toastr.error("Hubo problemas al buscar estudiantes", "", {
              positionClass: "toast-bottom-right",
            });
          } else {
            this.form2.reset();
            this.toastr.error("Hubo problemas al promover estudiantes", "", {
              positionClass: "toast-bottom-right",
            });
          }
        }

        if (type === 1) this.selectedRows = [];

        this[
          type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"
        ] = false;
      });
    }
  }

  onUserRowSelect(event) {
    this.selectedRows =
      event.selected && event.selected instanceof Array ? event.selected : [];
  }

  // filling sections according to selected grade
  private fillSections(field: string, grade = null, type: number = 0) {
    if (type) this[`showSelectSections${type}`] = false;
    if (grade === null && type) {
      this.settings.fields[`fields${type}`][
        `${field}${type === 1 ? "" : "2P"}`
      ].items = [];
    } else if (type) {
      this.settings.fields[`fields${type}`][
        `${field}${type === 1 ? "" : "2P"}`
      ].items = this.settings.fields[
        `${type === 1 ? "allSectionsPrevious" : "allSectionsCurrent"}`
      ].filter((s) => {
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
      const prev_id = +this.form1.get(field).value;

      if (typeof prev_id === "number") {
        const toPromoteArr = this.settings.fields.allGradesCurrent.filter(
          (grade) => {
            const id = +grade.id;
            return id >= prev_id;
          }
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
