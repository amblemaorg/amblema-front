import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { PresentationalBlockComponent } from "../page-block.component";
import { GlobalService } from "../../../../services/global.service";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";
import { ToastrService } from "ngx-toastr";
import { FetchPecaContent } from "../../../../store/actions/peca/peca.actions";
import { Subscription, Observable } from "rxjs";
import { Select, Store } from "@ngxs/store";
import { PecaState } from "../../../../store/states/peca/peca.state";
import { textsAndButtonsAdaptBody } from "./tb-body-adapter";
import { EmbedVideoService } from "ngx-embed-video";
import { FormBuilder } from "@angular/forms";
import { DatepickerOptions, NgDatepickerComponent } from "ng2-datepicker";
import { saveAs } from "file-saver";
import XLSX from "xlsx";
import { Location } from '@angular/common';

@Component({
  selector: "buttons-set-block",
  templateUrl: "./texts-buttons-set-block.component.html",
  styleUrls: ["./texts-buttons-set-block.component.scss"],
})
export class TextsButtonsSetBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy
{
  type: "presentational";
  component: string;
  showModalInfo: boolean;
  showImportModal: boolean;
  showExportModal: boolean;
  showUploadBtn: boolean;
  showExportBtn: boolean;
  studentsToImport: any[];
  gradesToExport: any[] = [];
  importingData: boolean;
  exportingData: boolean;
  lapse: number;
  settings: {
    nameDiag?: any;
    typeDiag?: any;
    modalCode?: string; // for views with modal inside
    dataFromRow?: any; // table's row data
    isFromCustomTableActions?: boolean; // indicates if button is going to take action based on custom table actions
    tableCode?: string; // to know which table to update
    buttonType?: string; // to specify what action to take on the button
    receivesFromTableOrForm?: string; // to know if make action receiving data fronm a table, form or both
    buttonCode?: string; // to check if this instance can make actions receiving data from table, form or both
    dateOrtext: {
      text?: string;
      date?: string;
      fields?: any[];
    };
    selectStatus: {
      text: string;
      placeholder: string;
      lista: any[];
      value: any;
    };
    selectGeneralStatus: {
      text: string;
      placeholder: string;
      lista: any[];
      value: any;
    };
    status: {
      text?: string;
      subText?: number; // 1 Pendiente = Amarillo, 2 Aprobado = Verde, 3 Rechazado = Rojo,
      comments: string;
    };
    genActSelectStatus?: boolean;
    // texts: {
    title: {
      aligning: string; // 'center' for center aligning, 'left' otherwise
      text: string;
    };
    addMT?: {
      // to set margin top to fields
      subtitles?: boolean;
    };
    isGenericActivity?: boolean;
    genActSavingTypes?: {
      hasDate?: boolean;
      hasUpload?: boolean;
      hasChecklist?: boolean;
    };
    genericActivityId?: string;
    isGenericActivityBtnReceptor?: boolean;
    btnApprovalType?: number;
    subtitles: {
      title?: string; // subtitle
      text: string; // paragraph
    }[];
    // }[];
    action: {
      /**
       * 1 guardar, 2 adjuntar fotos, 3 enviar,
       * 4 solicitar aprobacion, 5 ver estadisticas, 6 agregar,
       * (Para Actividad Generica) 7-8 Enviar/Guardar, 9 cancelar solicitud AG
       */
      hidden?: boolean;
      type?: number;
      name: string; // text in the button
      margin?: string;
      direction?: string;
      removeMargin?: string;
      extraData: any; // Para almacenar cualquier dato extra necesario
    }[];
    upload: any;
    uploaddown?: any;
    download: any;
    btnGeneral: any;
    inputAndBtns: {
      input: string;
      btn: string;
      //textDesc: string;
      titleInput: string;
    }[];
    fetcherUrls: {
      // get: string;
      post: string;
      put: string;
      // patch: string;
      delete: string;
      cancel: string;
    };
    fetcherMethod?: "get" | "post" | "put" | "patch" | "delete";
    makesNoRequest?: boolean; // if true, this form makes no request to api
    isDeleting?: boolean; // SI option on delete mode modal
    video?: {
      // for generic activity view
      url?: string;
      name?: string;
    };
    onSubmit: (values) => void;
    onDateChange: (date) => void;
    onStatusChange: (status) => void;
    onFileUpload: (file) => void;
    onAddTable: (data) => void | null;
    dateForSubmit?: string;
    textForSubmit?: string;
    statusForSubmit?: string;
  };

  isBeingUsedDateContr: boolean = false;

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;
  @ViewChild("inputDate", { static: false }) inputDate: NgDatepickerComponent;
  datePickerOptions: DatepickerOptions = {
    minYear: 1950,
    maxYear: 2050,
    displayFormat: "DD/MM/YYYY",
    barTitleFormat: "MMMM YYYY",
    dayNamesFormat: "dd",
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()),
    // maxDate: new Date(Date.now()),
    barTitleIfEmpty: "Haga click para seleccionar una fecha",
    placeholder: "Seleccione una fecha",
    addClass: "form-control date-picker-custom", // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: "inputDate", // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };
  pecaId: string;
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  infoGradesSubscription: Subscription;
  grades: Array<any>;
  glbls: any;

  // data from form, table or both.
  dataTorF = {
    table: null,
    form: null,
  };
  dataTorFWasEdited = {
    table: false,
    form: false,
  };

  // generic activity managing data.
  dataGenAct = {
    date: null,
    checklist: null,
    upload: null,
  };
  reloadDate: boolean;
  reloadUpload: boolean;

  sleepSend: boolean; // disables actions button meanwhile peca content gets updated
  selectorSendingEstatus: boolean;

  showThisVideo: boolean;
  timesVideoSourceCalled: number = 0;
  activity_video: any;
  activity_uneditable: boolean;

  isImgsTableShown: boolean;
  response: any;
  gradeSelected: any;
  studentsExport: Array<any>;

  constructor(
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService,
    private embedService: EmbedVideoService,
    private fb: FormBuilder,
    private location: Location
  
  ) {
    this.type = "presentational";
    this.component = "buttons";
    this.glbls = globals;
    this.showModalInfo = false;
    localStorage.setItem("stud_data", JSON.stringify([]));
  }

  currentSelected = null;
  isSending: boolean;
  id_: string;
  diagnosticsData = [];

  private subscription: Subscription = new Subscription();

  statuses = [
    { id: "1", name: "Por completar" },
    { id: "2", name: "Completado" },
  ];

  statusForm = this.fb.group({
    status: ["1"],
  });

  isTableEdited: boolean = true;
  isFormEdited: boolean = true;

  ngOnInit() {
    this.subscription.add(
      this.globals.updateButtonDataEmitter.subscribe((data) => {
        if (this.settings.buttonCode && this.settings.buttonCode == data.code) {
          if (data.whichData == "table") {
            this.dataTorF.table = data.table;
            this.dataTorFWasEdited.table = data.wasEdited;
            this.isTableEdited = data.tableEdited;
          }
          if (data.whichData == "form") {
            this.dataTorF.form = data.form;
            this.dataTorFWasEdited.form = data.wasEdited;
            this.isFormEdited = data.formEdited;
          }
        }
      })
    );

    this.subscription.add(
      this.globals.updateGenActButtonDataEmitter.subscribe((data) => {
        if (
          this.settings.isGenericActivity &&
          (this.settings.isGenericActivityBtnReceptor ||
            this.settings.btnApprovalType === 4 ||
            this.settings.btnApprovalType === 1) &&
          this.settings.genericActivityId == data.gaId
        ) {
          if (data["date"] || data["isDate"]) this.dataGenAct.date = data.date;
          if (data["checklist"]) this.dataGenAct.checklist = data.checklist;
          if (data["upload"]) this.dataGenAct.upload = data.upload;
        }
      })
    );

    this.subscription.add(
      this.globals.actionsSleeperEmitter.subscribe((bool) => {
        this.sleepSend = bool.sleepSend;
        this.activity_uneditable = bool.activity_uneditable;
      })
    );

    this.subscription.add(
      this.pecaId$.subscribe((peca_id) => {
        this.pecaId = peca_id;
      })
    );

    this.setId();
    if(this.settings.typeDiag == "reading" || this.settings.typeDiag == "math"){
      this.getGrades();
    }
  }

  ngOnDestroy() {
    this.dataTorF = {
      table: null,
      form: null,
    };
    this.dataGenAct = {
      date: null,
      checklist: null,
      upload: null,
    };
    this.subscription.unsubscribe();
    this.sleepSend = null;
    this.showThisVideo = false;
    this.timesVideoSourceCalled = 0;
    this.activity_video = null;
    this.activity_uneditable = null;
    this.isTableEdited = true;
    this.isFormEdited = true;
    this.isImgsTableShown = null;
    this.isBeingUsedDateContr = false;
    
  }

  setDateHandlr(e, type: string) {
    if (!this.isBeingUsedDateContr) this.setDateFunc({ type, theValue: e });
  }

  private setId() {
    if (!this.id_) this.id_ = Math.random().toString(36).substring(2);
  }

  getId(field) {
    return field + "-" + this.id_;
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
    const { selectStatus, selectGeneralStatus } = settings;
    if (selectStatus) {
      const { value } = selectStatus;
      this.currentSelected = value ? value : null;
    }
    if (selectGeneralStatus) {
      const { value } = selectGeneralStatus;
      this.currentSelected = value ? value : null;
    }
    setTimeout(() => {
      if (
        !this.settings.isGenericActivity &&
        this.settings.dateOrtext &&
        this.settings.dateOrtext.fields &&
        this.settings.dateOrtext.fields[0]
      ) {
        this.setDateInputs();

        if (!this.settings.dateOrtext.fields[0].value) this.inputDate.reset();
        if (this.inputDate) {
          this.inputDate.registerOnChange((value: Date) => {
            const event = {
              target: {
                value: this.globals.dateToISOString(value).split("T")[0],
              },
            };
            this.controlDateChange(event, "greater");
          });
        }
      }
    });
  }

  setData(data: any) {
    this.settings.isGenericActivity = false;
    if (data["isGenericActivity"]) {
      this.dataGenAct = {
        date: null,
        checklist: null,
        upload: null,
      };
      this.isSending = null;

      this.settings.isGenericActivity = true;
      this.userCanEdit = data["userCanEdit"];

      // this.reloadDate = true;
      this.reloadUpload = true;
      this.settings.dateOrtext = data["dateOrtext"] ? data.dateOrtext : null;

      setTimeout(() => {
        if (
          this.settings.dateOrtext &&
          this.settings.dateOrtext.fields &&
          this.settings.dateOrtext.fields[0]
        ) {
          this.setDateInputs();

          if (!this.settings.dateOrtext.fields[0].value) this.inputDate.reset();
          if (this.inputDate) {
            this.inputDate.registerOnChange((value: Date) => {
              const event = {
                target: {
                  value: this.globals.dateToISOString(value).split("T")[0],
                },
              };
              this.controlDateChange(event, "greater");
            });
          }
        }
      });

      this.settings.upload = data["upload"] ? data.upload : null;
      setTimeout(() => {
        // this.reloadDate = false;
        this.reloadUpload = false;
      });

      this.settings.download = data["download"] ? data.download : null;
      this.settings.subtitles = data["subtitles"] ? data.subtitles : null;
      this.settings.addMT = data["addMT"] ? data.addMT : null;
      this.settings.action = data["action"] ? data.action : null;
      this.settings.genActSelectStatus = data["statusSelectorData"]
        ? data.statusSelectorData.genActSelectStatus
        : null;
      this.activity_uneditable = data["activityUneditable"]
        ? data.activityUneditable
        : null;
      this.settings.genericActivityId = data["genericActivityId"]
        ? data.genericActivityId
        : null;
      this.settings.isGenericActivityBtnReceptor = data[
        "isGenericActivityBtnReceptor"
      ]
        ? data.isGenericActivityBtnReceptor
        : null;
      this.settings.genActSavingTypes = data["genActSavingTypes"]
        ? data.genActSavingTypes
        : null;
      this.settings.btnApprovalType = data["btnApprovalType"]
        ? data.btnApprovalType
        : 0;

      if (data["statusSelectorData"]) {
        this.statusForm.setValue({ status: data.statusSelectorData.status });
      } else {
        this.statusForm.reset();
      }

      if (data["video"]) {
        this.resetTimesLoadedVideo();
        this.videoShower(data.video);
      } else {
        this.settings.video = null;
        this.showThisVideo = false;
        this.activity_video = null;
      }

      if (!this.settings.isGenericActivityBtnReceptor) {
        if (this.settings.genActSelectStatus) {
          this.dataGenAct.date =
            data["dateOrtext"] && data["dateOrtext"].fields[0].value
              ? true
              : false;
          this.dataGenAct.upload = data["upload"] ? true : false;
        } else {
          setTimeout(() => {
            this.globals.updateGenActButtonDataUpdater({
              gaId: this.settings.genericActivityId,
              date:
                data["dateOrtext"] && data["dateOrtext"].fields[0].value
                  ? true
                  : false,
              upload: data["upload"] ? true : false,
            });
          });
        }
      }
    } else {
      if (data["action"]) this.settings.action = data.action;
      if (data["contentTeacherInfo"])
        this.settings.selectStatus.lista = data.contentTeacherInfo;
      if (data["status"]) {
        let status = this.settings.status;
        this.settings.status.subText = data.status.subText;
        this.settings.status.comments = data.status.comments
          ? data.status.comments
          : status.comments;
      }
      if (data["subtitles"]) this.settings.subtitles = data.subtitles;
      if (data["dateOrtext"])
        this.settings.dateOrtext.date = data.dateOrtext.date;
      if (data["enviromentTitleLapse1"])
        this.settings.title.text = data.enviromentTitleLapse1;
      if (data["enviromentTitleLapse2"])
        this.settings.title.text = data.enviromentTitleLapse2;
      if (data["enviromentTitleLapse3"])
        this.settings.title.text = data.enviromentTitleLapse3;
      if (data["download"]) this.settings.download = data.download;
      if (data["upload"]) this.settings.upload = data.upload;
      if (data["inputAndBtns"]) this.settings.inputAndBtns = data.inputAndBtns;
    }
  }

  setFetcherUrls({ post, put, delete: deleteFn, cancel }) {
    this.settings.fetcherUrls = {
      post,
      put,
      delete: deleteFn,
      cancel, // when there's a cancel request button this can be used
    };
    if (!this.fetcher.isRequestingApi()) this.sleepSend = false;
  }

  focusDatePicker(e) {
    e.focus();
  }

  setDateInputs() {
    const theWhD = this.settings.dateOrtext.fields[0]["theWholeDate"];
    const isSpecialDate =
      theWhD && this.settings.dateOrtext.fields[0]["specialDateForm"];
    const dNow = new Date();
    const dnSplit = dNow.toISOString().split("T")[1];

    if (isSpecialDate) {
      const dateKey = this.globals.getDateFormat(
        new Date(`${theWhD.split("T")[0]}T${dnSplit}`)
      );
      const theDate = new Date(`${dateKey}T${dnSplit}`);
      this.settings.dateOrtext.fields[0][`${isSpecialDate}Day`] =
        theDate.getDate();
      this.settings.dateOrtext.fields[0][`${isSpecialDate}Month`] =
        theDate.getMonth() + 1;
      this.settings.dateOrtext.fields[0][`${isSpecialDate}Year`] =
        theDate.getFullYear();
      this.settings.dateOrtext.fields[0][
        `${isSpecialDate}InactiveInput`
      ] = `${this.addZero(theDate.getDate())}-${this.addZero(
        theDate.getMonth() + 1
      )}-${theDate.getFullYear()}`;
    } else
      this.settings.dateOrtext.fields[0].value = dNow
        .toISOString()
        .split("T")[0];
  }

  disableThis(type: number) {
    if (
      this.settings.receivesFromTableOrForm &&
      (type == 1 || type == 3 || type == 4)
    ) {
      if (
        (this.settings.receivesFromTableOrForm == "table" &&
          (!this.dataTorF.table ||
            this.dataTorF.table.length == 0 ||
            !this.isTableEdited)) ||
        (this.settings.receivesFromTableOrForm == "form" &&
          (!this.dataTorF.form || !this.isFormEdited)) ||
        (this.settings.receivesFromTableOrForm == "both" &&
          (!this.dataTorF.table ||
            !this.isTableEdited ||
            !this.dataTorFWasEdited.table) &&
          (!this.dataTorF.form ||
            !this.isFormEdited ||
            !this.dataTorFWasEdited.form))
      )
        return true;
    } else if (
      type == 2 &&
      this.settings.fetcherUrls &&
      this.settings.fetcherUrls.cancel
    )
      return true;
    // when there's cancel request button
    else if (
      type == 7 &&
      this.settings.isGenericActivity &&
      !this.settings.genActSavingTypes.hasChecklist
    ) {
      let { date, upload } = { date: false, upload: false };
      const conditions = [];

      if (this.settings.genActSavingTypes.hasDate) {
        date =
          this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean";
        const isDateNotValid = date
          ? this.globals.validateDate(
              this.dataGenAct.date.split("T")[0],
              "greater",
              true,
              true
            )
          : false;
        const istrue = date && !isDateNotValid;
        conditions.push(istrue);
      }
      if (this.settings.genActSavingTypes.hasUpload) {
        upload =
          this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean";
        conditions.push(upload);
      }

      return !conditions.some((cond) => cond);
    }
    if (
      this.settings.dateOrtext &&
      this.settings.dateOrtext.fields &&
      this.settings.dateOrtext.fields instanceof Array &&
      this.settings.dateOrtext.fields.length
    ) {
      const { day: lDay, month: lMonth, year: lYear } = this.getDates();
      const isDateNotValid = this.globals.validateDate(
        `${this.addZero(lYear, true)}-${this.addZero(lMonth)}-${this.addZero(
          lDay
        )}`,
        "greater",
        true,
        true
      );
      return isDateNotValid;
    }
    return false;
  }

  addToTable(usingModal: boolean = false, isNotFromTable: boolean = false) {
    if (this.settings.onAddTable) {
      const data = this.settings.selectStatus["lista"].find((d) => {
        return d.id === this.currentSelected;
      });
      this.settings.onAddTable(data);
    }

    let obj = !usingModal
      ? {
          code: this.settings.tableCode,
          data: {},
          resetData: false,
          action: "add",
        }
      : {
          code: this.settings.modalCode,
          action: !isNotFromTable ? "add" : "view",
          showBtn: !isNotFromTable ? true : false,
          component: !isNotFromTable ? "form" : "graphics",
        };

    if (!usingModal) {
      switch (this.settings.buttonType) {
        case "agregarDocentePreinscripcion":
          obj.data = {
            id: this.settings.selectStatus["lista"]
              .find((d) => {
                return d.id === this.currentSelected;
              })
              .id.toString(),
            name: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).name,
            lastName: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).lastName,
            phone: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).phone,
            email: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).email,
          };
          break;
        case "agregarResultadoEstudiante":
          obj.data = {
            id: this.settings.selectStatus["lista"]
              .find((d) => {
                return d.id === this.currentSelected;
              })
              .id.toString(),
            name: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).name,
            lastName: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).lastName,
            gradeAndSection: {
              grade: this.settings.selectStatus["lista"].find((d) => {
                return d.id === this.currentSelected;
              }).grade,
              section: this.settings.selectStatus["lista"].find((d) => {
                return d.id === this.currentSelected;
              }).section,
            },
            status: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).status,
            result: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).result,
            grade: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).grade,
            section: this.settings.selectStatus["lista"].find((d) => {
              return d.id === this.currentSelected;
            }).section,
          };
          break;

        default:
          break;
      }
    }

    if (!usingModal) this.globals.tableDataUpdater(obj);
    else this.globals.ModalShower(obj);
  }
  exportDiagnostics(){
    let workbookBin = null;
    if(this.settings.typeDiag=="reading"){
      this.diagnosticsData = JSON.parse(localStorage.getItem("stud_data"));
      workbookBin = this.makeExcel();
    }else{
      this.diagnosticsData = JSON.parse(localStorage.getItem("stud_data"));
      workbookBin = this.makeExcelMath();
    }
    const octetStream = this.binary2octet(workbookBin);
    saveAs(
      new Blob([octetStream], { type: "application/octet-stream" }),
      `${this.settings.nameDiag}.xls`
    );
  }
  getStudentsCount() {
    const count = JSON.parse(localStorage.getItem("stud_data")).length;
    return count <= 0;
  }
  private binary2octet(binary): ArrayBuffer {
    const buffer = new ArrayBuffer(binary.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < binary.length; i++) {
      view[i] = binary.charCodeAt(i) & 0xff; // transformacion a octeto
    }
    return buffer;
  }
  makeExcel() {
    const workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: this.settings.nameDiag,
      Subject: "Data",
      Author: "Amblema",
      CreatedDate: new Date(Date.now()),
    };

    workbook.SheetNames.push(this.settings.nameDiag);
    let columns_header = []
    columns_header = [
      "Nombre",
      "Apellido",
      "Género",
      "Grado",
      "Sección",
      "Fecha de resultado",
      "Resultado",
      "Indice"
    ];
    
    let matrix = [];
    let row_aux = [];
    let genero = "";
    let fecha = "";
    let fechaLog = "";
    for (let count = 1, i = 0; count <= this.diagnosticsData.length; count++, i++) {
      if(this.diagnosticsData[i]?.grade > 0){
        genero = parseInt(this.diagnosticsData[i]?.gender) === 1 ? "Femenino" : "Masculino";
        fecha = new Date(this.diagnosticsData[i]?.date)
          .toLocaleDateString("es-VE")
          .split("/")
          .join("-");
        let data = []
        data = [
          this.diagnosticsData[i]?.name || "",
          this.diagnosticsData[i]?.lastName || "",
          genero,
          this.diagnosticsData[i]?.grade || "",
          this.diagnosticsData[i].section || "",
          fecha,
          this.diagnosticsData[i]?.result != null ? this.diagnosticsData[i]?.result : "",
          this.diagnosticsData[i]?.index != null ? this.diagnosticsData[i]?.index : "",
        ];
        
        row_aux.push(data);
      }
    }
    matrix.push(columns_header);
    row_aux.forEach((student) => matrix.push(student));

    const columns = XLSX.utils.aoa_to_sheet(matrix);
    workbook.Sheets[this.settings.nameDiag] = columns;

    /* Exportar workbook como binario para descarga */
    const workbookBinary = XLSX.write(workbook, {
      type: "binary",
      bookType: "xls",
    });
    return workbookBinary;
  }
  makeExcelMath() {
    const workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: this.settings.nameDiag,
      Subject: "Data",
      Author: "Amblema",
      CreatedDate: new Date(Date.now()),
    };
    
    workbook.SheetNames.push(this.settings.nameDiag);
    let columns_header = []
    columns_header = [
      "Nombre",
      "Apellido",
      "Género",
      "Grado",
      "Sección",
      "Fecha de resultado multiplicación",
      "Resultado multiplicación",
      "Indice multiplicación",
      "Fecha de resultado lógica matemática",
      "Resultado lógica matemática",
      "Indice lógica matemática"
    ];
    
    let matrix = [];
    let row_aux = [];
    let genero = "";
    let fecha = "";
    let fechaLog = "";
    for (let count = 1, i = 0; count <= this.diagnosticsData.length; count++, i++) {
      if(this.diagnosticsData[i]?.grade > 0){
        genero = parseInt(this.diagnosticsData[i]?.gender) === 1 ? "Femenino" : "Masculino";
        fecha = new Date(this.diagnosticsData[i]?.date)
          .toLocaleDateString("es-VE")
          .split("/")
          .join("-");
        let data = []
    
        fechaLog = new Date(this.diagnosticsData[i]?.dateLog)
        .toLocaleDateString("es-VE")
        .split("/")
        .join("-");
      
        data = [
          this.diagnosticsData[i]?.name || "",
          this.diagnosticsData[i]?.lastName || "",
          genero,
          this.diagnosticsData[i]?.grade || "",
          this.diagnosticsData[i].section || "",
          fecha,
          this.diagnosticsData[i]?.resultMul != null ? this.diagnosticsData[i]?.resultMul : "",
          this.diagnosticsData[i]?.indexMul != null ? this.diagnosticsData[i]?.indexMul : "",
          fechaLog,
          this.diagnosticsData[i]?.resultLog != null ? this.diagnosticsData[i]?.resultLog : "",
          this.diagnosticsData[i]?.indexLog != null ? this.diagnosticsData[i]?.indexLog : "",
        ];
        
        row_aux.push(data);
      }
    }
    matrix.push(columns_header);
    row_aux.forEach((student) => matrix.push(student));

    const columns = XLSX.utils.aoa_to_sheet(matrix);
    workbook.Sheets[this.settings.nameDiag] = columns;

    /* Exportar workbook como binario para descarga */
    const workbookBinary = XLSX.write(workbook, {
      type: "binary",
      bookType: "xls",
    });
    return workbookBinary;
  }
  
  takeAction(type: number, e) {
    /**
     * 1 guardar or Si (on delete action),
     * 2 adjuntar fotos or No (on delete action),
     * 3 enviar,
     * 4 solicitar aprobacion,
     * 5 ver estadisticas,
     * 6 agregar.
     * 7-8 Enviar/Guardar (Para Actividad Generica)
     * 9 cancelar solicitud AG
     */
    switch (type) {
      case 1:
        if (this.settings.isFromCustomTableActions && this.settings.modalCode) {
          const commonTasks = () => {
            this.globals.tableDataUpdater(this.settings.dataFromRow);
            this.globals.ModalHider(this.settings.modalCode);
          };

          if (this.settings.makesNoRequest) {
            commonTasks();
            if (this.settings.onSubmit) {
              this.settings.onSubmit(this.settings.dataFromRow);
            }
          } else {
            this.isSending = true;
            const method = this.settings.fetcherMethod || "delete";
            const url = this.settings.fetcherUrls[method];

            this.fetcher[method](url).subscribe(
              (data) => {
                commonTasks();

                this.isSending = false;

                this.toastr.success("Eliminado exitosamente", "", {
                  positionClass: "toast-bottom-right",
                });

                if (this.settings.buttonCode)
                  this.globals.resetEdited(this.settings.buttonCode);
                if (this.pecaId)
                  this.store.dispatch([new FetchPecaContent(this.pecaId)]);
              },
              (error) => {
                const error_msg =
                  error.error && error.error instanceof ProgressEvent
                    ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
                    : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

                this.isSending = false;
                this.toastr.error(
                  error.error && error.error["msg"]
                    ? error.error["entity"] && error.error["entity"].length > 0
                      ? `${error.error["msg"]}: ${error.error["entity"]}`
                      : error.error["msg"]
                    : error.error && error.error["message"]
                    ? error.error["message"]
                    : error_msg,
                  "",
                  { positionClass: "toast-bottom-right" }
                );
                console.error(error);
              }
            );
          }
        } else {
          const body = textsAndButtonsAdaptBody(
            this.settings.buttonCode,
            this.dataTorF
          );
          const method = this.settings.fetcherMethod || "post";
          const resourcePath = this.settings.fetcherUrls[method];

          if (this.settings.buttonCode)
            this.globals.setAsReadOnly(this.settings.buttonCode, true);

          this.fetcher[method](resourcePath, body).subscribe(
            (response) => {
              this.sleepSend = true;
              this.isSending = false;

              this.toastr.success("Solicitud enviada", "", {
                positionClass: "toast-bottom-right",
              });

              if (this.settings.buttonCode)
                this.globals.resetEdited(this.settings.buttonCode);
              if (this.pecaId)
                this.store.dispatch([new FetchPecaContent(this.pecaId)]);
            },
            (error) => {
              const error_msg =
                error.error && error.error instanceof ProgressEvent
                  ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
                  : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

              if (this.settings.buttonCode)
                this.globals.setAsReadOnly(this.settings.buttonCode, false);
              this.isSending = false;
              this.toastr.error(
                error.error && error.error["msg"]
                  ? error.error["msg"]
                  : error.error && error.error["message"]
                  ? error.error["message"]
                  : error_msg,
                "",
                { positionClass: "toast-bottom-right" }
              );
              console.error(error);
            }
          );
        }
        break;
      case 2:
        if (this.settings.isFromCustomTableActions && this.settings.modalCode)
          this.globals.ModalHider(this.settings.modalCode);
        else {
          this.globals.ImageContainerShower(this.settings.buttonCode);
          e.target.classList.add("d-none");
          this.isImgsTableShown = true;
        }
        break;
      case 3:
        this.isSending = true;
        break;
      case 4:
        this.isSending = true;
        if (
          // if has a date
          this.dataTorF.form &&
          (this.dataTorF.form.age || this.dataTorF.form.date)
        )
          this.dataTorF.form[this.dataTorF.form.age ? "age" : "date"] =
            this.globals.dateStringToISOString(
              this.dataTorF.form[this.dataTorF.form.age ? "age" : "date"]
            ); //---------------
        const body = textsAndButtonsAdaptBody(
          this.settings.buttonCode,
          this.dataTorF
        );
        const method = this.settings.fetcherMethod || "post";
        const resourcePath = this.settings.fetcherUrls[method];

        if (this.settings.buttonCode)
          this.globals.setAsReadOnly(this.settings.buttonCode, true);

        this.fetcher[method](resourcePath, body).subscribe(
          (response) => {
            this.sleepSend = true;
            this.isSending = false;

            this.toastr.success("Solicitud enviada", "", {
              positionClass: "toast-bottom-right",
            });

            if (this.settings.buttonCode)
              this.globals.resetEdited(this.settings.buttonCode);
            if (this.pecaId)
              this.store.dispatch([new FetchPecaContent(this.pecaId)]);
          },
          (error) => {
            const {
              error: { message },
            } = error;

            const error_msg =
              error.error && error.error instanceof ProgressEvent
                ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
                : message &&
                  typeof message === "string" &&
                  message.toLowerCase() === "invalid image format"
                ? "Ocurrió un problema al procesar la(s) imágen(es)"
                : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

            if (this.settings.buttonCode)
              this.globals.setAsReadOnly(this.settings.buttonCode, false);
            this.isSending = false;
            this.toastr.error(
              error.error && error.error["name"] && error.error["name"][0]
                ? error.error["name"][0].msg
                : error.error && error.error["email"] && error.error["email"][0]
                ? error.error["email"][0].msg
                : error.error &&
                  error.error["cardId"] &&
                  error.error["cardId"][0]
                ? error.error["cardId"][0].msg
                : error.error && error.error["msg"]
                ? error.error["msg"]
                : error_msg,
              "",
              { positionClass: "toast-bottom-right" }
            );
            console.error(error);
          }
        );
        break;
      case 7:
        const num_ =
          this.setGenActBtnName() == "Guardar" ||
          this.setGenActBtnName() == "Guardando"
            ? 8
            : 7;
        this.activityActioned(num_);
        break;
      case 8:
        this.activityActioned(8);
        break;

      case 9:
        this.displayModal();
        break;
      default:
        const data = textsAndButtonsAdaptBody(
          this.settings.buttonCode,
          this.dataTorF
        );
        const values = {
          file: this.settings.upload ? this.settings.upload.file : null,
          date: this.settings.dateForSubmit,
          status: this.settings.statusForSubmit,
          data,
        };
        this.settings.onSubmit(values);
        break;
    }
  }

  displayModal() {
    this.showModalInfo = !this.showModalInfo;
    this.settings.action[0].name = !this.showModalInfo ? "Ver más" : "Ocultar";
  }

  activityActioned(case_type: number) {
    const formData = new FormData();
    this.isSending = true;
    this.globals.actionsSleeperUpdater(true, true);

    const fetcherMethod = this.settings.fetcherMethod || "put";
    const url = this.settings.fetcherUrls[fetcherMethod];
    // console.log("activityActioned formData", formData, this.dataGenAct);

    if (
      this.settings.genericActivityId &&
      this.settings.genericActivityId.length > 0
    ) {
      formData.append("id", this.settings.genericActivityId);
    }

    if (this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean") {
      formData.append("date", this.dataGenAct.date);
    }

    if (this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean") {
      formData.append("uploadedFile", this.dataGenAct.upload);
    }

    if (this.dataGenAct.checklist && this.dataGenAct.checklist.length > 0) {
      formData.append("checklist", JSON.stringify(this.dataGenAct.checklist));
    }

    this.fetcher[fetcherMethod](url, formData).subscribe(
      (response) => {
        // console.log("response", response);
        this.sleepSend = true;
        this.isSending = false;

        this.toastr.success(
          case_type === 7
            ? "Solicitud enviada"
            : "Ha sido guardado exitosamente",
          "",
          {
            positionClass: "toast-bottom-right",
          }
        );

        if (this.pecaId) {
          this.store.dispatch([new FetchPecaContent(this.pecaId)]);
        }
      },
      (error) => {
        const {
          error: { message },
        } = error;

        const error_msg =
          error.error && error.error instanceof ProgressEvent
            ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
            : message &&
              typeof message === "string" &&
              message.toLowerCase() === "invalid image format"
            ? "Ocurrió un problema al procesar la(s) imágen(es)"
            : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

        this.globals.actionsSleeperUpdater(false, false);
        this.isSending = false;
        this.toastr.error(
          error.error && error.error["msg"] ? error.error["msg"] : error_msg,
          "",
          { positionClass: "toast-bottom-right" }
        );
        console.error(error);
      }
    );
  }

  cancelRequest() {
    this.isSending = true;

    const body = {
      status: "4",
    };
    const method = "put";
    const url = this.settings.fetcherUrls["cancel"];

    if (this.settings.isGenericActivity)
      this.globals.actionsSleeperUpdater(true, true);

    this.fetcher[method](url, body).subscribe(
      (response) => {
        // if (this.settings.fetcherUrls.cancel) this.settings.fetcherUrls.cancel = null;
        this.sleepSend = true;
        this.isSending = false;

        this.toastr.success("Solicitud cancelada", "", {
          positionClass: "toast-bottom-right",
        });

        if (this.settings.buttonCode && !this.settings.isGenericActivity)
          this.globals.resetEdited(this.settings.buttonCode);
        if (this.pecaId)
          this.store.dispatch([new FetchPecaContent(this.pecaId)]);
      },
      (error) => {
        const error_msg =
          error.error && error.error instanceof ProgressEvent
            ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
            : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";
        this.isSending = false;

        if (this.settings.isGenericActivity)
          this.globals.actionsSleeperUpdater(false, true);

        this.toastr.error(
          error.error && error.error["msg"]
            ? error.error["msg"]
            : error.error && error.error["message"]
            ? error.error["message"]
            : error_msg,
          "",
          { positionClass: "toast-bottom-right" }
        );
        console.error(error);
      }
    );
  }

  // For videos
  resetTimesLoadedVideo() {
    this.timesVideoSourceCalled = 0;
  }

  getVideo(url) {
    if (
      this.showThisVideo &&
      this.timesVideoSourceCalled < 10 &&
      !this.activity_video
    ) {
      this.activity_video = this.embedService.embed(url);
      if (this.activity_video) this.timesVideoSourceCalled++;
      return this.activity_video;
    } else if (this.activity_video) return this.activity_video;
  }

  videoShower(video) {
    this.showThisVideo = false;
    this.settings.video = null;
    if (video && video.url) {
      setTimeout(() => {
        this.showThisVideo = true;
        this.settings.video = video;
        this.timesVideoSourceCalled = 0;
      });
    }
  }

  // FOR UPLOAD
  fileMngr(e) {
    if (e && e.target && e.target.files && e.target.files.length > 0) {
      if (this.settings.onFileUpload)
        this.settings.onFileUpload(<File>e.target.files[0]);
      this.settings.upload = this.settings.upload
        ? {
            ...this.settings.upload,
            uploadEmpty: false,
            name: <File>e.target.files[0].name,
            file: <File>e.target.files[0],
            url: "",
          }
        : {
            uploadEmpty: true,
          };

      if (this.settings.isGenericActivity) {
        // if truty, this is for generic activity
        if (this.settings.genActSelectStatus) {
          this.dataGenAct.upload = this.settings.upload.uploadEmpty
            ? null
            : <File>e.target.files[0];
        } else {
          this.globals.updateGenActButtonDataUpdater({
            gaId: this.settings.genericActivityId,
            upload: this.settings.upload.uploadEmpty
              ? null
              : <File>e.target.files[0],
          });
        }
      }
    }
  }

  clickUpload(btn) {
    btn.getElementsByClassName("tb-upload-btn-input-file")[0].click();
  }

  shortenName(name: string) {
    return name.length > 40
      ? `${name.substr(0, 10)}...${name.substr(30)}`
      : name;
  }

  // FOR STATUS CHANGER
  changeStatus(e: any) {
    if (e && e.id) {
      this.settings.statusForSubmit = e.id;
      if (this.settings.onStatusChange) {
        this.settings.onStatusChange(e.id);
      }

      const formData = new FormData();
      this.isSending = true;
      this.selectorSendingEstatus = true;
      this.globals.actionsSleeperUpdater(true, true);

      const fetcherMethod = this.settings.fetcherMethod || "post";
      const url = this.settings.fetcherUrls[fetcherMethod];

      formData.append("status", e.id === "1" ? "1" : "3");
      if (
        this.settings.genericActivityId &&
        this.settings.genericActivityId.length > 0
      )
        formData.append("id", this.settings.genericActivityId);
      if (this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean")
        formData.append("date", this.dataGenAct.date);
      if (this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean")
        formData.append("uploadedFile", this.dataGenAct.upload);
      if (this.dataGenAct.checklist && this.dataGenAct.checklist.length > 0)
        formData.append("checklist", JSON.stringify(this.dataGenAct.checklist));

      this.fetcher[fetcherMethod](url, formData).subscribe(
        (response) => {
          this.sleepSend = true;
          this.isSending = false;
          this.selectorSendingEstatus = false;

          this.toastr.success(
            e.id === "1"
              ? "Estatus de la actividad cambiado exitosamente"
              : "Actividad completada exitosamente",
            "",
            {
              positionClass: "toast-bottom-right",
            }
          );

          if (this.pecaId)
            this.store.dispatch([new FetchPecaContent(this.pecaId)]);
        },
        (error) => {
          const {
            error: { message },
          } = error;

          const error_msg =
            error.error && error.error instanceof ProgressEvent
              ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
              : message &&
                typeof message === "string" &&
                message.toLowerCase() === "invalid image format"
              ? "Ocurrió un problema al procesar la(s) imágen(es)"
              : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

          this.globals.actionsSleeperUpdater(false, false);
          this.isSending = false;
          this.selectorSendingEstatus = false;

          this.statusForm.reset();
          this.statusForm.setValue({ status: e.id === "1" ? "2" : "1" });

          this.toastr.error(
            error.error && error.error["msg"] ? error.error["msg"] : error_msg,
            "",
            { positionClass: "toast-bottom-right" }
          );
          console.error(error);
        }
      );
    }
  }
  statusSelectorDisabler() {
    if (this.isSending || this.sleepSend || this.selectorSendingEstatus)
      return true;
    else {
      let { date, upload, checklist } = {
        date: false,
        upload: false,
        checklist: false,
      };
      const conditions = [];

      if (
        this.settings.genActSavingTypes &&
        this.settings.genActSavingTypes.hasDate
      ) {
        date =
          typeof this.dataGenAct.date === "boolean" && this.dataGenAct.date
            ? false
            : this.dataGenAct.date
            ? false
            : true;
        conditions.push(date);
      }
      if (
        this.settings.genActSavingTypes &&
        this.settings.genActSavingTypes.hasUpload
      ) {
        upload =
          typeof this.dataGenAct.upload === "boolean" && this.dataGenAct.upload
            ? false
            : this.dataGenAct.upload
            ? false
            : true;
        conditions.push(upload);
      }
      if (
        this.settings.genActSavingTypes &&
        this.settings.genActSavingTypes.hasChecklist
      ) {
        checklist = true;
        if (this.dataGenAct.checklist)
          checklist = this.dataGenAct.checklist.some((check) => !check.checked);
        conditions.push(checklist);
      }

      return conditions.some((cond) => cond);
    }
  }

  addZero(dN, isYear = false) {
    const dNlen = `${dN}`.length;
    if (isYear && dNlen < 4) {
      const yearStrArr = `${dN}`.split("").reverse();
      const second =
        yearStrArr.length == 3 ? yearStrArr[yearStrArr.length - 1] : "0";
      const third = yearStrArr.length > 1 ? yearStrArr[1] : "0";
      const fourth = yearStrArr[0];
      return "0" + second + third + fourth;
    }
    return dNlen > 1 ? `${dN}` : `0${dN}`;
  }

  getDates() {
    return {
      day: this.settings.dateOrtext.fields[0][
        `${this.settings.dateOrtext.fields[0]["specialDateForm"]}Day`
      ],
      month:
        this.settings.dateOrtext.fields[0][
          `${this.settings.dateOrtext.fields[0]["specialDateForm"]}Month`
        ],
      year: this.settings.dateOrtext.fields[0][
        `${this.settings.dateOrtext.fields[0]["specialDateForm"]}Year`
      ],
    };
  }

  isValidDay(day, month, year) {
    const now = new Date();
    const d = new Date(
      `${this.addZero(year, true)}-${this.addZero(month)}-${this.addZero(day)}`
    );
    const validDate = d instanceof Date && !isNaN(d.getTime());
    const dateChecker =
      validDate &&
      new Date(
        `${d.toISOString().split("T")[0]}T${
          now.toISOString().split("T").reverse()[0]
        }`
      );

    return dateChecker && dateChecker.getMonth() + 1 === month;
  }

  /**
   * @param type string --> calendar, day, month, year
   */
  setDateFunc({ type = "calendar", theValue = null }) {
    this.isBeingUsedDateContr = true;

    const theSpecialDate =
      this.settings.dateOrtext.fields[0]["specialDateForm"];

    const theDate =
      type === "calendar" && theValue ? new Date(theValue) : new Date();

    const { day, month, year } = {
      day: theDate.getDate(),
      month: theDate.getMonth() + 1,
      year: theDate.getFullYear(),
    };

    const { day: theDay, month: theMonth, year: theYear } = this.getDates();

    if (type !== "day" && day && (type === "calendar" || !theDay))
      this.settings.dateOrtext.fields[0][`${theSpecialDate}Day`] = day;

    if (type !== "month" && month && (type === "calendar" || !theMonth))
      this.settings.dateOrtext.fields[0][`${theSpecialDate}Month`] = month;

    if (type !== "year" && year && (type === "calendar" || !theYear))
      this.settings.dateOrtext.fields[0][`${theSpecialDate}Year`] = year;

    if (type !== "calendar") {
      const { day: tDay, month: tMonth, year: tYear } = this.getDates();

      let isValid = this.isValidDay(tDay, tMonth, tYear);

      const theWholeDate: string = `${this.addZero(tYear, true)}-${this.addZero(
        isValid
          ? tMonth
          : tMonth < 12
          ? type === "month"
            ? tMonth
            : tMonth + 1
          : type === "month"
          ? tMonth
          : 1
      )}-${this.addZero(isValid ? tDay : 1)}`;

      this.settings.dateOrtext.fields[0].value = theWholeDate;
      if (tDay && tMonth && tYear)
        this.controlDateChange({ target: { value: theWholeDate } }, "greater");
      this.settings.dateOrtext.fields[0][
        `${theSpecialDate}InactiveInput`
      ] = `${this.addZero(tDay)}-${this.addZero(tMonth)}-${tYear}`;

      if (!isValid) {
        if (tMonth && tDay)
          this.settings.dateOrtext.fields[0][`${theSpecialDate}Day`] = 1;
        if (tDay && tMonth)
          this.settings.dateOrtext.fields[0][`${theSpecialDate}Month`] =
            tMonth < 12
              ? type === "month"
                ? tMonth
                : tMonth + 1
              : type === "month"
              ? tMonth
              : 1;
      }
    } else
      this.settings.dateOrtext.fields[0][
        `${theSpecialDate}InactiveInput`
      ] = `${this.addZero(day)}-${this.addZero(month)}-${year}`;

    this.isBeingUsedDateContr = false;
  }

  dateOnBlur(e, datePart: string) {
    if (
      !e ||
      (e &&
        (!e.target ||
          (e.target && !e.target.value) ||
          (e.target && e.target.value && !e.target.value.length)))
    ) {
      this.isBeingUsedDateContr = true;

      const theSpecialDate =
        this.settings.dateOrtext.fields[0]["specialDateForm"];

      const { day: fDay, month: fMonth, year: fYear } = this.getDates();

      let isValid = this.isValidDay(fDay, fMonth, fYear);

      if (!isValid) {
        if (datePart === "day")
          this.settings.dateOrtext.fields[0][`${theSpecialDate}Day`] = 1;
        if (datePart === "month")
          this.settings.dateOrtext.fields[0][`${theSpecialDate}Month`] = 1;
      }

      if (datePart === "year") {
        const now = new Date();
        this.settings.dateOrtext.fields[0][`${theSpecialDate}Year`] =
          now.getFullYear();
      }

      const { day: lDay, month: lMonth, year: lYear } = this.getDates();

      isValid = this.isValidDay(lDay, lMonth, lYear);

      if (isValid) {
        const theWholeDate: string = `${this.addZero(
          lYear,
          true
        )}-${this.addZero(lMonth)}-${this.addZero(lDay)}`;
        this.settings.dateOrtext.fields[0].value = theWholeDate;
        if (lDay && lMonth && lYear)
          this.controlDateChange(
            { target: { value: theWholeDate } },
            "greater"
          );
        this.settings.dateOrtext.fields[0][
          `${theSpecialDate}InactiveInput`
        ] = `${this.addZero(lDay)}-${this.addZero(lMonth)}-${lYear}`;
      }

      this.isBeingUsedDateContr = false;
    }
  }

  // FOR DATE FIELD
  controlDateChange(e, dateOrder: string) {
    const isDateNotValid = this.globals.validateDate(
      e.target.value,
      dateOrder,
      true,
      true
    );
    if (e && e.target) {
      const date =
        e.target.value && e.target.value.length && !isDateNotValid
          ? this.globals.dateStringToISOString(e.target.value)
          : null;
      this.settings.dateForSubmit = date;
      if (this.settings.onDateChange) {
        this.settings.onDateChange(date);
      }
    }

    if (
      e.target.value &&
      e.target.value.length &&
      !isDateNotValid &&
      !this.isBeingUsedDateContr
    ) {
      const dNow = new Date();
      const theValue = `${e.target.value}T${dNow.toISOString().split("T")[1]}`;
      this.setDateFunc({ theValue });
    }

    if (this.settings.isGenericActivity && e && e.target) {
      // if truty, this is for generic activity
      if (this.settings.genActSelectStatus) {
        this.dataGenAct.date =
          e.target.value && e.target.value.length && !isDateNotValid
            ? this.globals.dateStringToISOString(e.target.value)
            : null;
      } else {
        this.globals.updateGenActButtonDataUpdater({
          gaId: this.settings.genericActivityId,
          isDate: true,
          date:
            e.target.value && e.target.value.length > 0 && !isDateNotValid
              ? this.globals.dateStringToISOString(e.target.value)
              : null,
        });
      }
    }
    return e.target.value;
  }

  // FOR GENERIC ACTIVITY ACTION BUTTON NAME
  setGenActBtnName() {
    let { date, upload } = { date: false, upload: false };
    const conditions = [];

    if (this.settings.genActSavingTypes.hasDate) {
      date = this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean";
      conditions.push(date);
    }
    if (this.settings.genActSavingTypes.hasUpload) {
      upload =
        this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean";
      conditions.push(upload);
    }

    return conditions.some((cond) => cond) ||
      !this.settings.genActSavingTypes.hasChecklist
      ? this.isSending
        ? "Enviando solicitud"
        : "Enviar solicitud"
      : this.isSending
      ? "Guardando"
      : "Guardar";
  }

  getStyles(action: {
    margin?: string;
    direction?: string;
    removeMargin?: string;
  }) {
    const margin = action.margin
      ? ` m${action.direction}-${action.margin} m${action.direction}-md-0`
      : "";
    const removeML = action.removeMargin
      ? ` m${action.removeMargin}-0${
          action.removeMargin.length === 1
            ? ` m${action.removeMargin}-md-2`
            : ""
        }`
      : "";
    const style = margin + removeML;

    return style;
  }
  openModal() {
    this.showImportModal = true;
  
  }
  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(files[0]);
    reader.onload = () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const studentsData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      let students = []
      const elements = [];
      let num_cols = 0;
      var valid = true;
      var column_reading = ["Nombre","Apellido","Género","Grado","Sección","Fecha de resultado","Resultado","Indice"]
      var column_math = ["Nombre","Apellido","Género","Grado","Sección","Fecha de resultado multiplicación", "Resultado multiplicación","Indice multiplicación","Fecha de resultado lógica matemática","Resultado lógica matemática","Indice lógica matemática"]
      const ref = sheet['!ref'];
      const range = XLSX.utils.decode_range(ref);
      var areColumnNamesValid = false;
      // Obtener los nombres de las columnas
      const columnNames = [];
      for (let C = range.s.c; C <= range.e.c; C++) {
          const cellAddress = { r: range.s.r, c: C };
          const cellRef = XLSX.utils.encode_cell(cellAddress);
          if (sheet[cellRef] && sheet[cellRef].v) {
            columnNames.push(sheet[cellRef].v);
          }else{
            columnNames.push("");  
          }
      }
      if(this.settings.typeDiag=="reading"){
        areColumnNamesValid = column_reading.every((name) => columnNames.includes(name));

        valid = Object.keys(studentsData[0]).length == 8 ? true : false;
        studentsData.forEach((student) => {
          elements.push(
            student["Nombre"],
            student["Apellido"],
            student["Género"],
            student["Grado"],
            student["Sección"],
            student["Fecha de resultado"],
            student["Resultado"],
            student["Indice"]          
          );
          num_cols = 8;
        });
      }else{
        areColumnNamesValid = column_math.every((name) => columnNames.includes(name));

        valid = Object.keys(studentsData[0]).length == 11 ? true : false;
        studentsData.forEach((student) => {
          elements.push(
            student["Nombre"],
            student["Apellido"],
            student["Género"],
            student["Grado"],
            student["Sección"],
            student["Fecha de resultado multiplicación"],
            student["Resultado multiplicación"],
            student["Indice multiplicación"],          
            student["Fecha de resultado lógica matemática"],
            student["Resultado lógica matemática"],
            student["Indice lógica matemática"]          
          );
        });
        num_cols = 11;
      }
      if(valid && areColumnNamesValid){
        const el_cleaned = elements;
        
        const matrix = el_cleaned.reduce(
          (rows, key, index) =>
            (index % num_cols == 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,
          []
        );
            
        if(this.settings.typeDiag=="reading"){
          students = matrix.map((registry, index) => {
            const fecha_resultado = this.parseDate(registry[5]);
            const genero = registry[2] == "Femenino" ? "1" : "2"
            return {
              nombre: registry[0] || "",
              apellido: registry[1] || "",
              genero: genero || "",
              grado: registry[3]?.toString() || "",
              seccion: registry[4]?.toString() || "",
              fecha_resultado: fecha_resultado || "",
              resultado: registry[6]?.toString() || "",
              indice: registry[7]?.toString() || "",
            };
          });
        }else{
          students = matrix.map((registry, index) => {
            const fecha_resultado_mult = this.parseDate(registry[5]);
            const fecha_resultado_log = this.parseDate(registry[8]);
            const genero = registry[2] == "Femenino" ? "1" : "2"
            return {
              nombre: registry[0] || "",
              apellido: registry[1] || "",
              genero: genero || "",
              grado: registry[3]?.toString() || "",
              seccion: registry[4]?.toString() || "",
              fecha_resultado_mult: fecha_resultado_mult || "",
              resultado_mult: registry[6] ?.toString() || "",
              indice_mult: registry[7]?.toString() || "",
              fecha_resultado_log: fecha_resultado_log || "",
              resultado_log: registry[9]?.toString() || "",
              indice_log: registry[10]?.toString() || "",
            
            };
          });
        }
        this.showUploadBtn = true;

        this.studentsToImport = students;
      }else{
        this.toastr.error("El formato es inválido para importar los "+this.settings.nameDiag, "", {
          positionClass: "toast-bottom-right",
        });
      }
    };
  }

  parseDate(date) {
    if (typeof date === "number") {
      const dateString = this.SerialDateToJSDate(date, -4);
      const dateOutput = new Date(dateString)
        .toLocaleDateString("es-VE")
        .split("/")
        .join("-");
      return dateOutput;
    } else {
      return date;
    }
  }

  SerialDateToJSDate(serialDate, offsetUTC) {
    return new Date(Date.UTC(0, 0, serialDate, offsetUTC));
  }

  async importStudents() {
    this.importingData = true;
    const resourcePath = `diagnostic/load/${this.pecaId}`;
    var valido = false;
    const body = {
      type: this.settings.typeDiag,
      students: this.studentsToImport,
      lapse: this.getLapse()
    };
    // console.log("BODY to import: ", body);
    try {
      const result = await this.fetcher.post(resourcePath, body).toPromise();
      
      if (result.error === "false") {
        this.showImportModal = false;
        this.toastr.success(result.message, "", {
          positionClass: "toast-bottom-right",
        });
        this.importingData = false;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.log("error: ", err);
      throw err;
    } finally {
    }
    
  }

  getLapse(){
    let path = this.location.path()
    let split_path = path.split("/")
    return split_path[3];
  }

  closeModal() {
    this.showImportModal = false;
    this.showExportModal = false;
  }
  showExportMultiple(){
    this.showExportModal = true;
    
  }

  getGrades() {
    this.infoGradesSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.response = data.activePecaContent.school;
          let auxStudents = [];
          this.grades = [...new Set(this.response.sections.map(item => item.grade))];    
        }
      },
      (error) => console.error(error)
    );
  }
  parseGrade(grades) {
    let grado;
    switch (grades) {
      case "0":
        grado = "Preescolar";
        break;
      case "1":
        grado = "1er grado";
        break;
      case "2":
        grado = "2do grado";
        break;
      case "3":
        grado = "3er grado";
        break;
      case "4":
        grado = "4to grado";
        break;
      case "5":
        grado = "5to grado";
        break;
      case "6":
        grado = "6to grado";
        break;
      default:
        grado = "";
    }
    return grado;
  }

  async selectGrades(grade, toExport){
    this.showExportBtn = false;        
    let nuevoArr = [];
      if(toExport){
        this.gradesToExport.push(grade);
      }else{
        nuevoArr = this.gradesToExport.filter(item => item !== grade);
        this.gradesToExport = nuevoArr;
      }
      
      nuevoArr = this.gradesToExport.sort((a, b) => +a - +b);
      this.gradesToExport = nuevoArr;
      /**/
      
    if(this.gradesToExport.length>0){
      this.showExportBtn = true;
    }
  }
  exportDiagnosticsMultiple(){
    let lapse = this.getLapse();
    let auxStudents = [];
    this.exportingData = true;
    this.infoGradesSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          for(let j=0; j<this.gradesToExport.length; j++){
            for (let i = 0; i < data.activePecaContent.school.sections.length; i++) {
              if(this.gradesToExport[j] == "all" || data.activePecaContent.school.sections[i].grade == this.gradesToExport[j]){
                const studentsWithGradeAndSection =
                data.activePecaContent.school.sections[i].students.map((student) => {
                  const student_ = {
                    name: student.firstName,
                    lastName: student.lastName,
                    gender: student.gender,
                    grade: data.activePecaContent.school.sections[i].grade,
                    section: data.activePecaContent.school.sections[i].name,
                  };
                  if(this.settings.typeDiag == "reading"){
                    student_["result"] = student[`lapse${lapse}`]["wordsPerMin"];
                    student_["index"] = student[`lapse${lapse}`]["wordsPerMinIndex"];
                    student_["date"] = student[`lapse${lapse}`]["readingDate"];
                    
                  }else{
                    student_["resultMul"] = student[`lapse${lapse}`]["multiplicationsPerMin"];
                    student_["indexMul"] = student[`lapse${lapse}`]["multiplicationsPerMinIndex"];
                    student_["date"] = student[`lapse${lapse}`]["mathDate"];
                    student_["resultLog"] = student[`lapse${lapse}`]["operationsPerMin"];
                    student_["indexLog"] = student[`lapse${lapse}`]["operationsPerMinIndex"];
                    student_["dateLog"] = student[`lapse${lapse}`]["logicDate"];
                  }
                  return student_;
                });
                auxStudents = auxStudents.concat(studentsWithGradeAndSection);
              }
            }
          }

          if(auxStudents){
            this.diagnosticsData = auxStudents;
            let workbookBin = null;
    
            if(this.settings.typeDiag=="reading"){
              workbookBin = this.makeExcel();
            }else{
              workbookBin = this.makeExcelMath();  
            }

            const octetStream = this.binary2octet(workbookBin);
            saveAs(
              new Blob([octetStream], { type: "application/octet-stream" }),
              `${this.settings.nameDiag}.xls`
            );
            this.gradesToExport = [];
          }
          this.exportingData = false;
    
        }
      }
    );
  }

  // myConsoleLog(data) {
  //   console.log("myConsoleLog: ", data);
  // }
}
