import { UpdateStudentsMathOlympicsList } from "./../../../../store/actions/peca/peca.actions";
import { RespPecaProjectsOlympics } from "src/app/resp-interfaces/resp-pecaprojects-olimpics.interface";
import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
} from "@angular/core";
import {
  PageBlockComponent,
  PresentationalBlockComponent,
} from "../page-block.component";
import { NG2_SMART_TABLE_DEFAULT_SETTINGS as defaultSettings } from "./ng2-smart-table-default-settings";
import { LocalDataSource } from "ng2-smart-table";
import { GlobalService } from "../../../../services/global.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import cloneDeep from "lodash/cloneDeep";
import localeEs from "@angular/common/locales/es-VE";
import { registerLocaleData } from "@angular/common";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";
import { Store } from "@ngxs/store";
import { FetchPecaContent } from "../../../../store/actions/peca/peca.actions";
import { ToastrService } from "ngx-toastr";
registerLocaleData(localeEs, "es");
import * as $ from "jquery";
declare var $: any;

@Component({
  selector: "table-block",
  templateUrl: "./ng2-smart-table-template.html",
  styleUrls: ["./table-block.component.scss"],
})
export class TableBlockComponent
  implements
    PresentationalBlockComponent,
    OnInit,
    OnDestroy,
    DoCheck,
    AfterViewChecked
{
  type: "presentational";
  name: string;
  component: string;
  settings:
    | {
        columns: any;
        // dataTypes: {};
        tableCode: string; // specifies which table to work with
        buttonCode?: string; // to know if sending info to textsandbuttons component and specify which instance to manage
        hideImgContainer?: boolean; // if view has image adder container set this to true
        modalCode?: string; // for views with modal inside
        isFromImgContainer?: boolean; // indicates if data in table is from an image container
        classes: {
          hideView: boolean;
          hideEdit: boolean;
          hideDelete: boolean;
        };
        total?: number;
        updateTotal: (rows) => number;
        getFetcher?: (
          fetcher: string,
          ...genProps
        ) => { method: string; urlString: string };
        isImageFirstCol?: boolean;
        makesNoRequest?: boolean; // if true, this form makes no request to api
        tableTitle?: string; // to set a title for the table
        tableGrade?: string;
        tableSection?: string;
        sectionKey?: string;
        allSections?: any[];
        peca_id?: string;
        section_id?: string;
        onDelete: Function | null;
        isMulti?: boolean; // to set table as multi selectable
        selectMode?: string;
        promoteData?: {
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
        hideSubHeader?: boolean;
        extraData;
        data?;
      }
    | any;

  tableStates: any = {};
  thisLapse: string;
  allSelected: boolean;

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;

  // source: LocalDataSource | any;
  source: LocalDataSource;
  isEdited: boolean;
  isEditable: boolean = true; // to disable editing on table actions
  isContentRefreshing: boolean = false;
  selectedRows: any[] = [];

  promoteForm: FormGroup;
  promoteFields: string[] = [];
  showSelectGrades0: boolean = true;
  showSelectSections0: boolean = true;
  isPromoting: boolean;
  isDeleting: boolean;

  private subscription: Subscription = new Subscription();

  canTableSendFormDataToBtn: boolean = true;
  isTableContentEdited: boolean;

  tableInitialData: object = {};

  observer: any;

  // Math Olympic
  tableStudentsMathOlympic: tableStudentsMathOlympic;

  // Math Olympic /
  constructor(
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService
  ) {
    this.type = "presentational";
    this.component = "table";
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(
      function (entries) {
        const thEl = document.querySelector("#students-current-count");
        // no intersection with screen
        if (entries[0].intersectionRatio === 0 && thEl)
          thEl.classList.add("shadow-on");
        // fully intersects with screen
        else if (entries[0].intersectionRatio === 1 && thEl)
          thEl.classList.remove("shadow-on");
      },
      { threshold: [0, 1] }
    );

    this.subscription.add(
      // data actions (data.action): set, add, edit, delete, view
      this.globals.updateTableDataEmitter.subscribe((data) => {
        this.confsOnTable(data);
      })
    );

    this.subscription.add(
      this.globals.showImageContainerEmitter.subscribe((code) => {
        if (this.settings.buttonCode && this.settings.buttonCode == code)
          this.settings.hideImgContainer = false;
      })
    );

    this.subscription.add(
      this.globals.resetEditedEmitter.subscribe((btnCode) => {
        if (this.settings.buttonCode && this.settings.buttonCode == btnCode) {
          this.isEdited = false;
          this.isEditable = false;
        }
      })
    );

    this.subscription.add(
      this.globals.setReadonlyEmitter.subscribe((data) => {
        if (data.isBtnCode) {
          if (
            this.settings.buttonCode &&
            this.settings.buttonCode == data.buttonCode
          )
            this.isEditable = !data.setReadOnly;
        } else {
          if (
            this.settings.tableCode &&
            this.settings.tableCode == data.buttonCode
          )
            this.isEditable = !data.setReadOnly;
        }
      })
    );
  }
  ngOnDestroy() {
    this.settings[this.settings.tableCode] = null;
    this.source = null;
    this.isEdited = null;
    this.isEditable = true;
    this.canTableSendFormDataToBtn = true;
    this.isTableContentEdited = null;
    this.subscription.unsubscribe();
  }
  ngDoCheck() {
    if (
      this.thisLapse &&
      (this.settings.tableCode === "initialDiagnosticConfigLectura" ||
        this.settings.tableCode === "initialDiagnosticConfigMatematica")
    ) {
      this.tableStates[`${this.settings.tableCode}${this.thisLapse}`] = {
        ...this.source.getFilter(),
        ...this.source.getPaging(),
      };
    }
  }
  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked", this.settings);
    // console.log("ngAfterViewChecked source", this.source);
    const td_student = document.querySelector(
      '.is-multi.table-block-component tbody td[colspan="6"]'
    );
    if (td_student) td_student.setAttribute("colspan", "7");

    const el = document.querySelector("#students-current-count-top");
    if (this.observer && el) this.observer.observe(el);
  }

  async confsOnTable(data) {
    if (this.settings[data.code]) {
      let index = -1; //initial

      if (
        data.action != "add" &&
        data.action != "set" &&
        this.settings.isFromImgContainer
      ) {
        index = this.settings["dataCopy"].findIndex((obj) => {
          return obj.id === data.data.oldData.id;
        });
      }

      const actionsOTablePromise = new Promise(async (resolve) => {
        switch (data.action) {
          case "edit":
            this.source
              .find(data.data.dataToCompare)
              .then(async (value) => {
                if (index != -1)
                  this.settings["dataCopy"][index] = data.data.newData;
                this.source
                  .update(data.data.dataToCompare, data.data.newData)
                  .then((resp) => {})
                  .catch((error) => {});
                if (this.settings.updateTotal) {
                  const tableData = await this.source.getAll();
                  this.settings.total = this.settings.updateTotal(tableData);
                }
                this.source.refresh();
                if (this.settings.makesNoRequest && this.settings.buttonCode)
                  this.isEdited = true;
                resolve(null);
              })
              .catch((error) => {
                resolve(null);
              });
            break;

          case "delete":
            this.source
              .find(data.data.dataToCompare)
              .then(async (value) => {
                if (index != -1) this.settings["dataCopy"].splice(index, 1);
                this.source.remove(data.data.dataToCompare);
                if (this.settings.updateTotal) {
                  const tableData = await this.source.getAll();
                  this.settings.total = this.settings.updateTotal(tableData);
                }
                this.source.refresh();
                if (this.settings.makesNoRequest && this.settings.buttonCode)
                  this.isEdited = true;
                resolve(null);
              })
              .catch((error) => {
                resolve(null);
              });
            break;

          case "view":
            resolve(null);
            break;

          default:
            // add or set
            if (data.resetData) {
              this.settings[data.code] = data.dataArr;
              if (this.settings.isFromImgContainer)
                this.settings["dataCopy"] = [...this.settings[data.code]];
              this.source = new LocalDataSource(this.settings[data.code]);
            } else {
              if (this.settings.isFromImgContainer)
                this.settings["dataCopy"].push(data.data);
              if (this.settings.isFromImgContainer)
                this.settings[data.code] = [...this.settings["dataCopy"]];
              this.source.add(data.data);
              if (this.settings.updateTotal) {
                const tableData = await this.source.getAll();
                this.settings.total = this.settings.updateTotal(tableData);
              }
              this.source.refresh();
            }
            resolve(null);
            // if (this.settings.isFromImgContainer) this.source = new LocalDataSource(this.settings[data.code]);
            break;
        }
      });

      await actionsOTablePromise;

      this.isTableContentEdited = true;
      this.sendTableData();
    }
  }

  sendTableData() {
    //updating textAndButton button data
    if (this.settings.buttonCode) {
      let sendFormDataToBtn_ = false;

      if (
        !this.globals.getTableImgsCopy(this.settings.buttonCode) &&
        !this.isTableContentEdited
      )
        this.globals.setTableImgsCopy(
          this.settings.buttonCode,
          this.settings["dataCopy"]
        );

      if (this.settings.isFromImgContainer && this.canTableSendFormDataToBtn) {
        if (
          this.globals.getTableImgsCopy(this.settings.buttonCode) &&
          this.isTableContentEdited
        ) {
          if (
            this.settings.buttonCode !== "schoolDataConfigRegistroEscuela" ||
            this.globals.getTableImgsCopy(this.settings.buttonCode).length !==
              this.settings["dataCopy"].length ||
            this.settings["dataCopy"]
              .reverse()
              .some((tableEl) =>
                tableEl.source ? tableEl.source.includes(";base64,") : true
              ) ||
            !this.settings["dataCopy"].every(
              (tableEl, inx) =>
                tableEl.description ===
                this.globals.getTableImgsCopy(this.settings.buttonCode)[inx]
                  .description
            )
          )
            sendFormDataToBtn_ = true;
        }
      } else if (this.canTableSendFormDataToBtn) sendFormDataToBtn_ = true;

      this.globals.sendFormDataToBtn(
        this.settings.buttonCode,
        sendFormDataToBtn_
      );

      if (this.settings.isFromImgContainer) {
        this.globals.buttonDataUpdater({
          code: this.settings.buttonCode,
          whichData: "table",
          table: this.settings["dataCopy"],
          wasEdited: sendFormDataToBtn_ ? true : false,
          tableEdited: this.isTableContentEdited,
        });
      } else {
        this.source.getAll().then((value) => {
          this.globals.buttonDataUpdater({
            code: this.settings.buttonCode,
            whichData: "table",
            table: value,
            wasEdited: true,
            tableEdited: this.isTableContentEdited,
          });
        });
      }
    }
  }

  setDataOlympicMath(data) {
    this.settings["promoteData"] = data.promoteData;

    this.setFormG(data);
  }

  setSettings(settings: any) {
    this.settings = {
      ...defaultSettings,
      ...settings,
      selectMode: settings.isMulti ? "multi" : "single",
      hideSubHeader: false,
      ...(settings.isMulti
        ? {
            pager: {
              display: true,
              perPage: 50,
            },
          }
        : {}),
    };

    if (
      this.settings.extraData &&
      this.settings.extraData.purpose === "resultadoTabla"
    ) {
      // Created a class just for group the code that manage the table Students Math Olympic
      this.tableStudentsMathOlympic = new tableStudentsMathOlympic(
        {
          extraData: this.settings.extraData,
        },
        {
          toastr: this.toastr,
          fetcher: this.fetcher,
          store: this.store,
        }
      );

      this.settings = this.tableStudentsMathOlympic.getSettings(this.settings);

      const data = this.tableStudentsMathOlympic.getData();

      console.log("this.settings", this.settings);

      this.setDataOlympicMath(data);
    }
    if (this.settings.isFromImgContainer) {
      this.settings["dataCopy"] = [...this.settings[this.settings.tableCode]];
    }
    this.source = new LocalDataSource(this.settings[this.settings.tableCode]);

    console.log("this.source", this.source);
    console.log("this.source this.source.count", this.source.count());
    console.log("defaultSettings", defaultSettings);
    console.log("setSettings", settings);
  }

  setFormG(data) {
    if (data) {
      this.promoteFields = Object.keys(data.promoteData);

      this.promoteForm = new FormGroup(
        this.promoteFields.reduce((fields, prField) => {
          fields[prField] = new FormControl("", [Validators.required]);
          return fields;
        }, {})
      );

      this.promoteForm.reset();

      console.log("setFormG", data);

      console.log("this.promoteFields", this.promoteFields);
      console.log("data.promoteData", data.promoteData);
    }
  }

  setData(data: any) {
    if (data["classes"]) {
      this.settings.classes = data["classes"];
    }
    if (!this.isEdited) {
      if (this.settings.isFromImgContainer) {
        this.settings["dataCopy"] = [...data.data];
      }

      this.source = new LocalDataSource(data.data);
      this.isEditable = data.isEditable ? true : false;

      if (data.promoteData) {
        this.showSelectGrades0 = false;
        this.showSelectSections0 = false;
        this.settings["promoteData"] = data.promoteData;

        this.setFormG(data);

        setTimeout(() => {
          this.showSelectGrades0 = true;
          this.showSelectSections0 = true;
        });
      }

      if (data.hasTitle) {
        this.isContentRefreshing = true;
        this.settings["tableGrade"] = data.hasTitle.tableGrade;
        this.settings["tableSection"] = data.hasTitle.tableSection;
        this.settings["tableTitle"] =
          data?.promoteData &&
          data?.data?.length &&
          this.settings.tableGrade &&
          this.settings.tableSection
            ? data.hasTitle.tableTitle2
            : data.hasTitle.tableTitle;
        this.settings["sectionKey"] = data.hasTitle.sectionKey;
        this.settings["allSections"] = data.hasTitle.allSections;
        this.settings["peca_id"] = data.hasTitle.peca_id;
        this.settings["section_id"] = data.hasTitle.section_id;
        this.settings["getFetcher"] = data.hasTitle.getFetcher;

        setTimeout(() => {
          this.isContentRefreshing = false;
        });
      }

      this.sendTableData();

      if (
        this.settings.tableCode === "initialDiagnosticConfigLectura" ||
        this.settings.tableCode === "initialDiagnosticConfigMatematica"
      ) {
        this.thisLapse = data.lapse;
      }

      if (
        this.settings.tableCode &&
        this.tableStates[`${this.settings.tableCode}${this.thisLapse}`] &&
        (this.settings.tableCode === "initialDiagnosticConfigLectura" ||
          this.settings.tableCode === "initialDiagnosticConfigMatematica")
      ) {
        const { filters, page } =
          this.tableStates[`${this.settings.tableCode}${this.thisLapse}`];
        if (filters && filters.length) this.source.setFilter([...filters]);
        setTimeout(() => {
          if (this.settings["pager"]) {
            this.source.getFilteredAndSorted().then((data) => {
              const decs = `${data.length / this.settings["pager"].perPage}`;
              const decs_splitted = decs.split(".");
              let pages = parseInt(decs);
              if (decs_splitted.length > 1) pages++;
              if (page) this.source.setPage(page <= pages ? page : pages);
            });
          }
        });
      }
    }
  }

  onCustomActions(e) {
    let index = this.settings.isFromImgContainer
      ? this.settings["dataCopy"].findIndex((obj) => {
          return obj.id === e.data.id;
        })
      : -1;

    let obj = {
      componentName: this.name,
      code: this.settings.modalCode,
      data: {
        dataCopyData: index != -1 ? this.settings["dataCopy"][index] : e.data,
        dataToCompare: e.data,
        oldData: cloneDeep(e.data),
        newData: cloneDeep(e.data),
      },
      action: e.action.toLowerCase(),
      showBtn: false,
      component: "form",
    };

    switch (e.action) {
      case "VIEW":
        this.globals.ModalShower(obj);
        break;

      case "EDIT":
        if (this.isEditable) {
          obj.showBtn = true;
          this.globals.ModalShower(obj);
        }
        break;

      case "DELETE":
        if (this.settings.onDelete) {
          this.settings.onDelete(obj);
        }
        if (this.isEditable) {
          obj.component = "textsbuttons";
          this.globals.ModalShower(obj);
        }
        break;
    }
  }

  disabledThis(doThis: boolean = false): boolean {
    const dis = [
      this.isPromoting,
      this.isDeleting,
      ...(doThis ? [!this.promoteForm.valid] : []),
    ].some((cond) => cond);
    return dis;
  }

  onUserRowSelect(event) {
    console.log("onUserRowSelect", event);
    const selectedData = event.selected;
    localStorage.setItem("stud_data", JSON.stringify(selectedData));
    if (this.settings.isMulti) {
      const count = event?.source?.data?.length;
      this.selectedRows =
        event.selected && event.selected instanceof Array ? event.selected : [];
      this.allSelected = count ? this.selectedRows.length === count : false;
    }

    console.log("this.settings", this.settings, "this.source", this.source);
  }

  getStudents(students: any[]) {
    const studentsRes = students.map((student) => {
      const {
        id,
        name: firstName,
        lastName,
        documentGroup: { prependInput: cardId, prependSelect: cardType },
        age,
        gender,
      } = student;
      const bd = age.toLowerCase().replace("t", " ");
      return {
        id,
        firstName,
        lastName,
        ...(cardId ? { cardId, cardType } : { cardId: null, cardType: null }),
        birthdate: bd,
        gender,
      };
    });

    return studentsRes;
  }

  fetchActions(isChange: boolean, requestData: any, body) {
    const cleanAction = (clear: boolean) => {
      if (clear) this.selectedRows = [];
      this[isChange ? "isPromoting" : "isDeleting"] = false;
    };

    const errorMsg = () => {
      if (isChange) this.promoteForm.reset();
      this.toastr.error(
        this.selectedRows.length > 1
          ? `Hubo problemas al ${
              isChange ? "cambi" : "elimin"
            }ar los estudiantes`
          : `Hubo problemas al ${
              isChange ? "cambi" : "elimin"
            }ar el estudiante`,
        "",
        {
          positionClass: "toast-bottom-right",
        }
      );
      cleanAction(false);
    };

    this.fetcher[requestData.method](requestData.urlString, body).subscribe(
      (res) => {
        if (res && res.status === 201) {
          if (this.settings.peca_id)
            this.store.dispatch([new FetchPecaContent(this.settings.peca_id)]);
          if (isChange) this.promoteForm.reset();
          this.toastr.success(
            this.selectedRows.length > 1
              ? `Estudiantes ${isChange ? "cambi" : "elimin"}ados exitosamente`
              : `Estudiante ${isChange ? "cambi" : "elimin"}ado exitosamente`,
            "",
            {
              positionClass: "toast-bottom-right",
            }
          );
          cleanAction(true);
        } else errorMsg();
      },
      (error) => {
        console.log(error);
        errorMsg();
      }
    );
  }

  onSubmitAction(values: any) {
    if (values && typeof values === "object") {
      this.isPromoting = true;
      const requestData = this.settings.peca_id
        ? this.settings.getFetcher(
            "post_change_students",
            this.settings.peca_id
          )
        : null;

      const theStudents = this.getStudents(this.selectedRows);

      const body = this.settings.section_id
        ? {
            section_previus: this.settings.section_id,
            section_new: values.sections2P,
            students: theStudents,
          }
        : null;

      this.fetchActions(true, requestData, body);

      console.log(values);
    }
  }

  deleteStudents() {
    if (document.querySelector("#delete-students-modal")) {
      $("#delete-students-modal").modal("hide");
    }
    this.isDeleting = true;
    const requestData = this.settings.peca_id
      ? this.settings.getFetcher("put_delete_students", this.settings.peca_id)
      : null;

    const theStudents = this.getStudents(this.selectedRows);

    const body = this.settings.section_id
      ? { section: this.settings.section_id, students: theStudents }
      : null;

    this.fetchActions(false, requestData, body);
  }

  hasErrors(form: FormGroup, field: string): string | null {
    const errors: any = form.get(field).errors;
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE : null;
    }

    return null;
  }

  setSelect(field: string, event: any) {
    if (this.settings.promoteData[`${this.settings.sectionKey}2P`]) {
      if (!field.includes("section")) {
        this.showSelectSections0 = false;
        if (event) {
          this.settings.promoteData[`${this.settings.sectionKey}2P`].items =
            this.settings.allSections.filter((s) => {
              return s.grade == event.id;
            });
        } else if (!event) {
          this.settings.promoteData[`${this.settings.sectionKey}2P`].items = [];
        }
        this.promoteForm.get(`${this.settings.sectionKey}2P`).reset();
        setTimeout(() => {
          this.showSelectSections0 = true;
        });
      }
    }
  }
}

class tableStudentsMathOlympic {
  isDeleting = false;
  constructor(
    public defaultData: {
      extraData: { lapseNumber; students; pecaId };
    },
    public dep: {
      toastr: ToastrService;
      fetcher: HttpFetcherService;
      store: Store;
    }
  ) {}

  getData() {
    return {
      promoteData: {
        status: {
          id: "estado",
          label: "Seleccione un estado",
          loading: false,
          loadingLabel: "Cargando estado",
          placeholder: "Estado",
          items: [
            {
              id: 0,
              name: "Preescolar",
            },
          ],
        },
      },
      data: [],
      hasTitle: {
        tableTitle: "",
        tableTitle2: "",
        tableGrade: "",
        tableSection: "",
        sectionKey: "section",
        allSections: [],
        peca_id: "",
        section_id: "",
        getFetcher: null,
      },
      isEditable: true,
      classes: {
        hideDelete: false,
        hideEdit: false,
        hideView: false,
      },
    };
  }

  getSettings(settings) {
    return {
      isMulti: settings.isMulti,
      extraData: settings.extraData,
      tableTitle: settings.tableTitle,
      selectMode: "multi",
      columns: settings.columns,
      pager: {
        display: true,
        perPage: 30,
      },
      noDataMessage: "No hay registros",
      actions: {
        columnTitle: "Acciones",
        add: false,
        edit: false,
        delete: false,
        custom: [
          { name: "VIEW", title: '<i class="icon-eye"></i>' },
          { name: "EDIT", title: '<i class="icon-pencil"></i>' },
          { name: "DELETE", title: '<i class="icon-trash"></i>' },
        ],
      },
      dataResultadoEstudiante: settings.dataResultadoEstudiante,
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true,
      },
      modalCode: "dataResultadoEstudiante",
      tableCode: "dataResultadoEstudiante",
    };
  }

  async deleteStudentsMathOlympic(selectedRows) {
    if (document.querySelector("#delete-students-modal")) {
      $("#delete-students-modal").modal("hide");
    }

    this.isDeleting = true;

    const { extraData } = this.defaultData;
    const { lapseNumber, pecaId } = extraData;

    console.log("selectedRows", selectedRows);
    const body = {
      students: selectedRows.map((student) => student.id),
      lapse: lapseNumber,
    };

    try {
      const dataResp = await this.dep.fetcher
        .patch(`peca/grade/${pecaId}`, body)
        .toPromise();

      this.dep.toastr.success(dataResp.message, "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      this.dep.toastr.error("Error al eliminar estudiantes en lote", "", {
        positionClass: "toast-bottom-right",
      });
    }

    await this.updateStudentsList();

    this.isDeleting = false;
  }

  async updateStudentsList() {
    const { lapseNumber, pecaId } = this.defaultData.extraData;

    try {
      const respData: RespPecaProjectsOlympics.RootResp = await this.dep.fetcher
        .get(`pecaprojects/olympics/${pecaId}/${lapseNumber}`)
        .toPromise();

      // console.log("RespPecaProjects respData", respData);
      const data = {
        lapseNumber,
        newStudents: respData.students,
      };
      this.dep.store.dispatch(new UpdateStudentsMathOlympicsList(data));
    } catch {}
  }
}
