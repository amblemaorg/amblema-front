import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TABLE_DEFAULT_SETTINGS as smartTableStudentsConfig } from "./table-students-config";
import { LocalDataSource } from "ng2-smart-table";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";
import { ToastrService } from "ngx-toastr";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";
import { Store } from "@ngxs/store";
import { FetchPecaContent } from "../../../../store/actions/peca/peca.actions";

@Component({
  selector: "app-form-table",
  templateUrl: "./form-table.component.html",
  styleUrls: ["./form-table.component.scss"],
})
export class FormTableComponent
  implements OnInit, AfterViewChecked, PresentationalBlockComponent
{
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
      pecaId?: string;
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
  allSelected: boolean;

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

  observer: any;
  studentsCount: string = "";

  constructor(
    private toastr: ToastrService,
    private fetcher: HttpFetcherService,
    private store: Store
  ) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      function (entries) {
        const theEl = document.querySelector("#students-count");
        // no intersection with screen
        if (entries[0].intersectionRatio === 0 && theEl)
          theEl.classList.add("shadow-on");
        // fully intersects with screen
        else if (entries[0].intersectionRatio === 1 && theEl)
          theEl.classList.remove("shadow-on");
      },
      { threshold: [0, 1] }
    );
  }

  ngAfterViewChecked() {
    const td = document.querySelector(
      '.is-multi.form-table-component tbody td[colspan="5"]'
    );
    if (td) td.setAttribute("colspan", "6");

    const el = document.querySelector("#students-count-top");
    if (this.observer && el) this.observer.observe(el);
  }

  private fillTable(rows: any[] = []) {
    this.settings.fields.table = rows;

    this.tableStudents = { ...this.tableStudents, hideSubHeader: false };
    this.source = new LocalDataSource(this.settings.fields.table);
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
      this[type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"] =
        true;

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

      const cleanAction = () => {
        if (type === 1) this.selectedRows = [];

        this[
          type === 1 ? (update ? "isUpdating" : "isSearching") : "isSaving"
        ] = false;
      };

      const errorMsg = () => {
        if (type === 1) {
          this.fillTable([]);
          this.toastr.error("Hubo problemas al buscar estudiantes", "", {
            positionClass: "toast-bottom-right",
          });
        } else {
          this.form2.reset();
          this.toastr.error(
            this.selectedRows.length > 1
              ? "Hubo problemas al promover estudiantes"
              : "Hubo problemas al promover al estudiante",
            "",
            {
              positionClass: "toast-bottom-right",
            }
          );
        }
        cleanAction();
      };

      this.fetcher[requestData.method](
        requestData.urlString,
        type === 1 ? null : body
      ).subscribe(
        (res) => {
          if (
            res &&
            ((requestData.method === "get" && res.status === 200) ||
              res.status === 201)
          ) {
            if (type === 1) {
              if (res.students instanceof Array) {
                const { grade: currentGrade, section: currentSection } = [
                  "grade",
                  "section",
                ].reduce(
                  (currents, key) => {
                    const itm = this.settings.fields.fields1[key].items.find(
                      (item) => item.id === values[key]
                    );
                    if (itm) currents[key] = itm;
                    return currents;
                  },
                  { grade: null, section: null }
                );
                this.studentsCount =
                  res.students.length && currentGrade && currentSection
                    ? `Cantidad de estudiantes de ${currentGrade.name}, sección ${currentSection.name}: <b>${res.students.length}</b>`
                    : "";
                this.fillTable(res.students.length ? res.students : []);
              }
            } else {
              if (this.settings.fields.pecaId)
                this.store.dispatch([
                  new FetchPecaContent(this.settings.fields.pecaId),
                ]);
              this.form2.reset();
              this.toastr.success(
                this.selectedRows.length > 1
                  ? "Estudiantes promovidos exitosamente"
                  : "Estudiante promovido exitosamente",
                "",
                {
                  positionClass: "toast-bottom-right",
                }
              );
              window.scroll(0, 0);
              this.onSubmitAction(1, this.form1.value, true);
            }
            cleanAction();
          } else errorMsg();
        },
        (error) => {
          console.log(error);
          errorMsg();
        }
      );
    }
  }

  onUserRowSelect(event) {
    const count = event?.source?.data?.length;
    this.selectedRows =
      event?.selected && event.selected instanceof Array ? event.selected : [];
    this.allSelected = count ? this.selectedRows.length === count : false;
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
