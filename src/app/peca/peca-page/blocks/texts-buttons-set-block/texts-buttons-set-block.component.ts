import { Component, OnInit, OnDestroy } from "@angular/core";
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

@Component({
  selector: "buttons-set-block",
  templateUrl: "./texts-buttons-set-block.component.html",
  styleUrls: ["./texts-buttons-set-block.component.scss"],
})
export class TextsButtonsSetBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: "presentational";
  component: string;
  settings: {
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
      subText?: number; // 1 Pendiente = Amarillo, 2 Aprobado = Verde, 3 Rechazado = Rojo
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
      type: number;
      name: string; // text in the button
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
      // post: string;
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
    dateForSubmit?: string;
    textForSubmit?: string;
    statusForSubmit?: string;
  };

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;

  pecaId: string;
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;

  glbls: any;

  // data from form, table or both.
  dataTorF = {
    table: null,
    form: null,
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

  constructor(
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService,
    private embedService: EmbedVideoService,
    private fb: FormBuilder
  ) {
    this.type = "presentational";
    this.component = "buttons";
    this.glbls = globals;
  }

  currentSelected = null;
  isSending: boolean;
  id_: string;

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
            this.isTableEdited = data.tableEdited;
          }
          if (data.whichData == "form") {
            this.dataTorF.form = data.form;
            this.isFormEdited = data.formEdited;
          }

          // console.log(this.dataTorF);
        }
        // console.log(this.dataTorF);
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
          // console.log("activity data to update",this.dataGenAct);
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

      this.reloadDate = true;
      this.reloadUpload = true;
      this.settings.dateOrtext = data["dateOrtext"] ? data.dateOrtext : null;
      this.settings.upload = data["upload"] ? data.upload : null;
      setTimeout(() => {
        this.reloadDate = false;
        this.reloadUpload = false;
      });

      this.settings.download = data["download"] ? data.download : null;
      this.settings.subtitles = data["subtitles"] ? data.subtitles : null;
      this.settings.addMT = data["addMT"] ? data.addMT : null;
      this.settings.action = data["action"] ? data.action : null;
      this.settings.genActSelectStatus = data["statusSelectorData"]
        ? data.statusSelectorData.genActSelectStatus
        : null;
      this.activity_uneditable = data["activityUneditable"] ? data.activityUneditable : null;
      this.settings.genericActivityId = data["genericActivityId"] ? data.genericActivityId : null;
      this.settings.isGenericActivityBtnReceptor = data["isGenericActivityBtnReceptor"]
        ? data.isGenericActivityBtnReceptor
        : null;
      this.settings.genActSavingTypes = data["genActSavingTypes"] ? data.genActSavingTypes : null;
      this.settings.btnApprovalType = data["btnApprovalType"] ? data.btnApprovalType : 0;

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
            data["dateOrtext"] && data["dateOrtext"].fields[0].value ? true : false;
          this.dataGenAct.upload = data["upload"] ? true : false;
        } else {
          setTimeout(() => {
            this.globals.updateGenActButtonDataUpdater({
              gaId: this.settings.genericActivityId,
              date: data["dateOrtext"] && data["dateOrtext"].fields[0].value ? true : false,
              upload: data["upload"] ? true : false,
            });
          });
        }
      }
    } else {
      if (data["contentTeacherInfo"]) this.settings.selectStatus.lista = data.contentTeacherInfo;
      if (data["status"]) this.settings.status.subText = data.status.subText;
      if (data["subtitles"]) this.settings.subtitles = data.subtitles;
      if (data["dateOrtext"]) this.settings.dateOrtext.date = data.dateOrtext.date;
      if (data["enviromentTitleLapse1"]) this.settings.title.text = data.enviromentTitleLapse1;
      if (data["enviromentTitleLapse2"]) this.settings.title.text = data.enviromentTitleLapse2;
      if (data["enviromentTitleLapse3"]) this.settings.title.text = data.enviromentTitleLapse3;
      if (data["download"]) this.settings.download = data.download;
      if (data["upload"]) this.settings.upload = data.upload;
      if (data["inputAndBtns"]) this.settings.inputAndBtns = data.inputAndBtns;
    }
  }

  setFetcherUrls({ put, delete: deleteFn, cancel }) {
    this.settings.fetcherUrls = {
      put,
      delete: deleteFn,
      cancel, // when there's a cancel request button this can be used
    };
    if (!this.fetcher.isRequestingApi()) this.sleepSend = false;
  }

  focusDatePicker(e) {
    e.focus();
  }

  disableThis(type: number) {
    if (this.settings.receivesFromTableOrForm && (type == 1 || type == 3 || type == 4)) {
      if (
        (this.settings.receivesFromTableOrForm == "table" &&
          (!this.dataTorF.table || this.dataTorF.table.length == 0 || !this.isTableEdited)) ||
        (this.settings.receivesFromTableOrForm == "form" &&
          (!this.dataTorF.form || !this.isFormEdited)) ||
        (this.settings.receivesFromTableOrForm == "both" &&
          (!this.dataTorF.table || this.dataTorF.table.length == 0 || !this.isTableEdited) &&
          (!this.dataTorF.form || !this.isFormEdited))
      )
        return true;
    } else if (type == 2 && this.settings.fetcherUrls && this.settings.fetcherUrls.cancel)
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
        date = this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean";
        conditions.push(date);
      }
      if (this.settings.genActSavingTypes.hasUpload) {
        upload = this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean";
        conditions.push(upload);
      }

      return !conditions.some((cond) => cond);
    }
    // else if (
    //   (type == 7 || type == 8) &&
    //   this.settings.isGenericActivity
    // ) {
    //   let { date, upload, checklist } = { date: false, upload: false, checklist: false };
    //   const conditions = [];

    //   if (this.settings.genActSavingTypes.hasDate) {
    //     date = typeof this.dataGenAct.date === "boolean" && this.dataGenAct.date ? false : this.dataGenAct.date ? false : true;
    //     conditions.push(date);
    //   }
    //   if (this.settings.genActSavingTypes.hasUpload) {
    //     upload = typeof this.dataGenAct.upload === "boolean" && this.dataGenAct.upload ? false : this.dataGenAct.upload ? false : true;
    //     conditions.push(upload);
    //   }
    //   if (this.settings.genActSavingTypes.hasChecklist) {
    //     // if (this.settings.btnApprovalType === 2 || type == 7) {
    //     //   checklist = true;

    //     //   if (this.dataGenAct.checklist && type == 7)
    //     //     checklist = !this.dataGenAct.checklist.every(check => check.checked);
    //     //   else if (this.dataGenAct.checklist && this.settings.btnApprovalType === 2)
    //     //     checklist = !this.dataGenAct.checklist.some(check => check.checked);
    //     // }
    //     /* else  */checklist = typeof this.dataGenAct.checklist === "boolean" && this.dataGenAct.checklist ? false : this.dataGenAct.checklist ? false : true;
    //     conditions.push(checklist);
    //   }

    //   const forSaveMode = type == 7 ? 0
    //     : conditions.reduce((acum,cond) => {
    //       if (cond) acum++
    //       return acum
    //     },0);

    //   return type == 7
    //     ? conditions.some(cond => cond)
    //     : conditions.length > 0
    //         ? (forSaveMode == conditions.length) : false;
    // }
    return false;
  }

  addToTable(usingModal: boolean = false, isNotFromTable: boolean = false) {
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

          if (this.settings.makesNoRequest) commonTasks();
          else {
            this.isSending = true;
            const method = this.settings.fetcherMethod || "delete";
            const url = this.settings.fetcherUrls[method];

            console.log("method: ", method, "url: ", url);

            this.fetcher[method](url).subscribe(
              (data) => {
                console.log(data);
                commonTasks();

                this.isSending = false;

                this.toastr.success("Eliminado exitosamente", "", {
                  positionClass: "toast-bottom-right",
                });

                if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
                if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
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
          console.log("AQUI SIGO EL LUNES 4");

          const body = textsAndButtonsAdaptBody(this.settings.buttonCode, this.dataTorF);
          const method = this.settings.fetcherMethod || "post";
          const resourcePath = this.settings.fetcherUrls[method];

          console.log("method: ", method, "url: ", resourcePath, "body: ", body);

          if (this.settings.buttonCode) this.globals.setAsReadOnly(this.settings.buttonCode, true);

          this.fetcher[method](resourcePath, body).subscribe(
            (response) => {
              console.log("form response", response);
              this.sleepSend = true;
              this.isSending = false;

              this.toastr.success("Solicitud enviada", "", {
                positionClass: "toast-bottom-right",
              });

              if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
              if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
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
        }
        break;
      case 3:
        this.isSending = true;
        // console.log('prueba')
        break;
      case 4:
        this.isSending = true;
        if (
          // if has a date
          this.dataTorF.form &&
          (this.dataTorF.form.age || this.dataTorF.form.date)
        )
          this.dataTorF.form[
            this.dataTorF.form.age ? "age" : "date"
          ] = this.globals.dateStringToISOString(
            this.dataTorF.form[this.dataTorF.form.age ? "age" : "date"]
          ); //---------------
        const body = textsAndButtonsAdaptBody(this.settings.buttonCode, this.dataTorF);
        const method = this.settings.fetcherMethod || "post";
        const resourcePath = this.settings.fetcherUrls[method];

        if (this.settings.buttonCode) this.globals.setAsReadOnly(this.settings.buttonCode, true);

        this.fetcher[method](resourcePath, body).subscribe(
          (response) => {
            console.log("form response", response);
            this.sleepSend = true;
            this.isSending = false;

            this.toastr.success("Solicitud enviada", "", {
              positionClass: "toast-bottom-right",
            });

            if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
            if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
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
              error.error && error.error["name"] && error.error["name"][0]
                ? error.error["name"][0].msg
                : error.error && error.error["email"] && error.error["email"][0]
                ? error.error["email"][0].msg
                : error.error && error.error["cardId"] && error.error["cardId"][0]
                ? error.error["cardId"][0].msg
                : error.error && error.error["msg"]
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
        break;
      case 7:
        const num_ =
          this.setGenActBtnName() == "Guardar" || this.setGenActBtnName() == "Guardando" ? 8 : 7;
        this.activityActioned(num_);
        break;
      case 8:
        this.activityActioned(8);
        break;
      default:
        const values = {
          file: this.settings.upload ? this.settings.upload.file : null,
          date: this.settings.dateForSubmit,
          status: this.settings.statusForSubmit,
        };
        this.settings.onSubmit(values);
        break;
    }
  }

  activityActioned(case_type: number) {
    const formData = new FormData();
    console.log(case_type === 7 ? "Enviar" : "Guardar", this.dataGenAct);
    this.isSending = true;
    this.globals.actionsSleeperUpdater(true, true);

    const fetcherMethod = this.settings.fetcherMethod || "put";
    const url = this.settings.fetcherUrls[fetcherMethod];

    if (this.settings.genericActivityId && this.settings.genericActivityId.length > 0)
      formData.append("id", this.settings.genericActivityId);
    if (this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean")
      formData.append("date", this.dataGenAct.date);
    if (this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean")
      formData.append("uploadedFile", this.dataGenAct.upload);
    if (this.dataGenAct.checklist && this.dataGenAct.checklist.length > 0)
      formData.append("checklist", JSON.stringify(this.dataGenAct.checklist));

    this.fetcher[fetcherMethod](url, formData).subscribe(
      (response) => {
        console.log("activity response", response);
        this.sleepSend = true;
        this.isSending = false;

        this.toastr.success(
          case_type === 7 ? "Solicitud enviada" : "Ha sido guardado exitosamente",
          "",
          {
            positionClass: "toast-bottom-right",
          }
        );

        if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
      },
      (error) => {
        const error_msg =
          error.error && error.error instanceof ProgressEvent
            ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
            : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

        this.globals.actionsSleeperUpdater(false, false);
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

  cancelRequest() {
    this.isSending = true;

    const body = {
      status: "4",
    };
    const method = "put";
    const url = this.settings.fetcherUrls["cancel"];

    if (this.settings.isGenericActivity) this.globals.actionsSleeperUpdater(true, true);

    this.fetcher[method](url, body).subscribe(
      (response) => {
        console.log("form response", response);
        // if (this.settings.fetcherUrls.cancel) this.settings.fetcherUrls.cancel = null;
        this.sleepSend = true;
        this.isSending = false;

        this.toastr.success("Solicitud cancelada", "", {
          positionClass: "toast-bottom-right",
        });

        if (this.settings.buttonCode && !this.settings.isGenericActivity)
          this.globals.resetEdited(this.settings.buttonCode);
        if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
      },
      (error) => {
        const error_msg =
          error.error && error.error instanceof ProgressEvent
            ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
            : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";
        this.isSending = false;

        if (this.settings.isGenericActivity) this.globals.actionsSleeperUpdater(false, true);

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
    if (this.showThisVideo && this.timesVideoSourceCalled < 10 && !this.activity_video) {
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
            upload: this.settings.upload.uploadEmpty ? null : <File>e.target.files[0],
          });
        }
      }
    }
  }

  clickUpload(btn) {
    btn.getElementsByClassName("tb-upload-btn-input-file")[0].click();
  }

  shortenName(name: string) {
    return name.length > 40 ? `${name.substr(0, 10)}...${name.substr(30)}` : name;
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
      if (this.settings.genericActivityId && this.settings.genericActivityId.length > 0)
        formData.append("id", this.settings.genericActivityId);
      if (this.dataGenAct.date && typeof this.dataGenAct.date !== "boolean")
        formData.append("date", this.dataGenAct.date);
      if (this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean")
        formData.append("uploadedFile", this.dataGenAct.upload);
      if (this.dataGenAct.checklist && this.dataGenAct.checklist.length > 0)
        formData.append("checklist", JSON.stringify(this.dataGenAct.checklist));

      this.fetcher[fetcherMethod](url, formData).subscribe(
        (response) => {
          console.log("activity response", response);
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

          if (this.pecaId) this.store.dispatch([new FetchPecaContent(this.pecaId)]);
        },
        (error) => {
          const error_msg =
            error.error && error.error instanceof ProgressEvent
              ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
              : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

          this.globals.actionsSleeperUpdater(false, false);
          this.isSending = false;
          this.selectorSendingEstatus = false;

          this.statusForm.reset();
          this.statusForm.setValue({ status: e.id === "1" ? "2" : "1" });

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
  }
  statusSelectorDisabler() {
    if (this.isSending || this.sleepSend || this.selectorSendingEstatus) return true;
    else {
      let { date, upload, checklist } = { date: false, upload: false, checklist: false };
      const conditions = [];

      if (this.settings.genActSavingTypes && this.settings.genActSavingTypes.hasDate) {
        date =
          typeof this.dataGenAct.date === "boolean" && this.dataGenAct.date
            ? false
            : this.dataGenAct.date
            ? false
            : true;
        conditions.push(date);
      }
      if (this.settings.genActSavingTypes && this.settings.genActSavingTypes.hasUpload) {
        upload =
          typeof this.dataGenAct.upload === "boolean" && this.dataGenAct.upload
            ? false
            : this.dataGenAct.upload
            ? false
            : true;
        conditions.push(upload);
      }
      if (this.settings.genActSavingTypes && this.settings.genActSavingTypes.hasChecklist) {
        checklist = true;
        if (this.dataGenAct.checklist)
          checklist = this.dataGenAct.checklist.some((check) => !check.checked);
        conditions.push(checklist);
      }

      return conditions.some((cond) => cond);
    }
  }

  // FOR DATE FIELD
  controlDateChange(e, dateOrder: string) {
    const isDateNotValid = this.globals.validateDate(e, dateOrder, true);
    if (e && e.target) {
      const date =
        e.target.value && e.target.value.length > 0 && !isDateNotValid
          ? this.globals.dateStringToISOString(e.target.value)
          : null;
      this.settings.dateForSubmit = date;
      if (this.settings.onDateChange) {
        this.settings.onDateChange(date);
      }
    }

    if (this.settings.isGenericActivity && e && e.target) {
      // if truty, this is for generic activity
      if (this.settings.genActSelectStatus) {
        this.dataGenAct.date =
          e.target.value && e.target.value.length > 0 && !isDateNotValid
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
      upload = this.dataGenAct.upload && typeof this.dataGenAct.upload !== "boolean";
      conditions.push(upload);
    }

    return conditions.some((cond) => cond) || !this.settings.genActSavingTypes.hasChecklist
      ? this.isSending
        ? "Enviando solicitud"
        : "Enviar solicitud"
      : this.isSending
      ? "Guardando"
      : "Guardar";
  }
}
