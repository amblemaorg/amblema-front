import { Component, OnInit, OnDestroy } from '@angular/core';
import { PresentationalBlockComponent } from '../page-block.component';
import { GlobalService } from '../../../../services/global.service';
import { HttpFetcherService } from '../../../../services/peca/http-fetcher.service';
import { ToastrService } from "ngx-toastr";
import { FetchPecaContent } from '../../../../store/actions/peca/peca.actions';
import { Subscription, Observable } from "rxjs";
import { Select, Store } from "@ngxs/store";
import { PecaState } from '../../../../store/states/peca/peca.state';
import { textsAndButtonsAdaptBody } from './tb-body-adapter';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'buttons-set-block',
  templateUrl: './texts-buttons-set-block.component.html',
  styleUrls: ['./texts-buttons-set-block.component.scss'],
})
export class TextsButtonsSetBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: 'presentational';
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
      text: string;
      date: string;
      fields: any[];
    };
    selectStatus: {
      text: string;
      placeholder: string;
      lista: any[];
    };
    selectGeneralStatus: {
      text: string;
      placeholder: string;
      lista: any[];
    };
    status: {
      text: string;
      subText: number; // 1 Pendiente = Amarillo, 2 Aprobado = Verde, 3 Rechazado = Rojo
    };
    // texts: {
    title: {
      aligning: string; // 'center' for center aligning, 'left' otherwise
      text: string;
    };
    addMT?: { // to set margin top to fields
      subtitles?: boolean;
    };
    isGenericActivity?: boolean;
    subtitles: {
      title?: string; // subtitle
      text: string; // paragraph
    };
    // }[];
    action: {
      /**
       * 1 guardar, 2 adjuntar fotos, 3 enviar, 
       * 4 solicitar aprobacion, 5 ver estadisticas, 6 agregar, 
       * (Para Actividad Generica) 7 Enviar/Guardar
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
    fetcherMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete';
    makesNoRequest?: boolean; // if true, this form makes no request to api
    isDeleting?: boolean; // SI option on delete mode modal
    video?: { // for generic activity view
      url?: string;
      name?: string;
    }
  };

  pecaId: string;
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;

  glbls: any;

  // data from form, table or both.
  dataTorF = {
    table: null,
    form: null,
  };

  sleepSend: boolean; // disables actions button meanwhile peca content gets updated

  showThisVideo: boolean;
  timesVideoSourceCalled: number = 0;
  activity_video: any;

  constructor(
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService,
    private embedService: EmbedVideoService
  ) {
    this.type = 'presentational';
    this.component = 'buttons';
    this.glbls = globals;
  }

  currentSelected = null;
  isSending: boolean;

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      this.globals.updateButtonDataEmitter.subscribe((data) => {
        if (this.settings.buttonCode && this.settings.buttonCode == data.code) {
          if (data.whichData == 'table') this.dataTorF.table = data.table;
          if (data.whichData == 'form') this.dataTorF.form = data.form;

          // console.log(this.dataTorF);
        }
        // console.log(this.dataTorF);
      })
    );

    this.subscription.add(
      this.pecaId$.subscribe(peca_id => {
        this.pecaId = peca_id;
      })
    );
  }
  ngOnDestroy() {
    this.dataTorF = {
      table: null,
      form: null,
    };
    this.subscription.unsubscribe();
    this.sleepSend = null;
    this.showThisVideo = false;
    this.timesVideoSourceCalled = 0;
    this.activity_video = null;
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  setData(data: any) {
    this.settings.isGenericActivity = false;

    if (data["isGenericActivity"]) {
      this.settings.isGenericActivity = true;
      this.settings.dateOrtext = data["dateOrtext"] ? data.dateOrtext : null;
      this.settings.download = data["download"] ? data.download : null;
      this.settings.subtitles = data["subtitles"] ? data.subtitles : null;
      this.settings.addMT = data["addMT"] ? data.addMT : null;
      this.settings.upload = data["upload"] ? data.upload : null;
      this.settings.action = data["action"] ? data.action : null;

      if (data["video"]) {
        this.resetTimesLoadedVideo();
        this.videoShower(data.video);
      } else {
        this.settings.video = null;
        this.showThisVideo = false;
        this.activity_video = null;
      }
    }
    else {
      if (data["status"]) this.settings.status.subText = data.status.subText;
      if (data["subtitles"]) this.settings.subtitles.text = data.subtitles.text;
      if (data["dateOrtext"]) this.settings.dateOrtext.date = data.dateOrtext.date;
    }
  }

  setFetcherUrls({ put, delete: deleteFn, cancel }) {
    this.settings.fetcherUrls = {
      put,
      delete: deleteFn,
      cancel // when there's a cancel request button this can be used
    };
    this.sleepSend = false;
  }

  focusDatePicker(e) {
    e.focus();
  }

  disableThis(type: number) {
    if (this.settings.receivesFromTableOrForm && (type == 1 || type == 3 || type == 4)) {
      if (
        (this.settings.receivesFromTableOrForm == 'table' && !this.dataTorF.table) ||
        (this.settings.receivesFromTableOrForm == 'form' && !this.dataTorF.form) ||
        (this.settings.receivesFromTableOrForm == 'both' &&
          /* !this.dataTorF.table ||  */ !this.dataTorF.form)
      )
        return true;
    } else if (type == 2 && this.settings.fetcherUrls && this.settings.fetcherUrls.cancel) return true; // when there's cancel request button
    return false;
  }

  addToTable(usingModal: boolean = false, isNotFromTable: boolean = false) {
    let obj = !usingModal ? {
      code: this.settings.tableCode,
      data: {},
      resetData: false,
      action: 'add',
    } : {
        code: this.settings.modalCode,
        action: !isNotFromTable ? 'add' : 'view',
        showBtn: !isNotFromTable ? true : false,
        component: !isNotFromTable ? 'form' : 'graphics',
      };

    if (!usingModal) {
      switch (this.settings.buttonType) {
        case 'agregarDocentePreinscripcion':
          obj.data = {
            id: this.settings.selectStatus['lista']
              .find((d) => {
                return d.id === this.currentSelected;
              })
              .id.toString(),
            name: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).name,
            lastName: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).lastName,
            phone: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).phone,
            email: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).email,
          };
          break;
        case 'agregarResultadoEstudiante':
          obj.data = {
            id: this.settings.selectStatus['lista']
              .find((d) => {
                return d.id === this.currentSelected;
              })
              .id.toString(),
            name: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).name,
            lastName: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).lastName,
            gradeAndSection: {
              grade: this.settings.selectStatus['lista'].find((d) => {
                return d.id === this.currentSelected;
              }).grade,
              section: this.settings.selectStatus['lista'].find((d) => {
                return d.id === this.currentSelected;
              }).section,
            },
            status: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).status,
            result: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).result,
            grade: this.settings.selectStatus['lista'].find((d) => {
              return d.id === this.currentSelected;
            }).grade,
            section: this.settings.selectStatus['lista'].find((d) => {
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
            const method = this.settings.fetcherMethod || 'delete';
            const url = this.settings.fetcherUrls[method];

            console.log(
              'method: ', method,
              'url: ', url
            );

            this.fetcher[method](url).subscribe((data) => {
              console.log(data);
              commonTasks();

              this.isSending = false;

              this.toastr.success("Eliminado exitosamente", "", {
                positionClass: "toast-bottom-right"
              });

              if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
              this.store.dispatch([new FetchPecaContent(this.pecaId)]);
            }, (error) => {
              const error_msg = (error.error && error.error instanceof ProgressEvent)
                ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
                : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

              this.isSending = false;
              this.toastr.error(
                error.error && error.error["msg"]
                  ? (
                    error.error["entity"] && error.error["entity"].length > 0
                      ? `${error.error["msg"]}: ${error.error["entity"]}`
                      : error.error["msg"]
                  )
                  : error_msg,
                "",
                { positionClass: "toast-bottom-right" }
              );
              console.error(error);
            });
          }
        }
        break;
      case 2:
        if (this.settings.isFromCustomTableActions && this.settings.modalCode)
          this.globals.ModalHider(this.settings.modalCode);
        else {
          this.globals.ImageContainerShower(this.settings.buttonCode);
          e.target.classList.add('d-none');
        }
        break;
      case 4:
        this.isSending = true;
        if ( // if has a date
          this.dataTorF.form
          && (
            this.dataTorF.form.age
            || this.dataTorF.form.date
          )
        ) this.dataTorF.form[this.dataTorF.form.age ? 'age' : 'date']
          = this.globals.dateStringToISOString(
            this.dataTorF.form[this.dataTorF.form.age ? 'age' : 'date']
          );//---------------
        const body = textsAndButtonsAdaptBody(this.settings.buttonCode, this.dataTorF);
        const method = this.settings.fetcherMethod || "post";
        const resourcePath = this.settings.fetcherUrls[method];

        if (this.settings.buttonCode) this.globals.setAsReadOnly(this.settings.buttonCode, true);

        this.fetcher[method](resourcePath, body).subscribe(
          response => {
            console.log("form response", response);
            this.sleepSend = true;
            this.isSending = false;

            this.toastr.success("Solicitud enviada", "", {
              positionClass: "toast-bottom-right"
            });

            if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
            this.store.dispatch([new FetchPecaContent(this.pecaId)]);
          },
          error => {
            const error_msg = (error.error && error.error instanceof ProgressEvent)
              ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
              : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

            if (this.settings.buttonCode) this.globals.setAsReadOnly(this.settings.buttonCode, false);
            this.isSending = false;
            this.toastr.error(
              (error.error && error.error["name"] && error.error["name"][0])
                ? error.error["name"][0].msg
                : error.error && error.error["email"] && error.error["email"][0]
                  ? error.error["email"][0].msg
                  : error.error && error.error["cardId"] && error.error["cardId"][0]
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

      default:
        break;
    }
  }

  cancelRequest() {
    this.isSending = true;

    const body = {
      status: '4'
    };
    const method = 'put';
    const url = this.settings.fetcherUrls['cancel'];

    this.fetcher[method](url, body).subscribe(
      response => {
        console.log("form response", response);
        // if (this.settings.fetcherUrls.cancel) this.settings.fetcherUrls.cancel = null;
        this.sleepSend = true;
        this.isSending = false;

        this.toastr.success("Solicitud cancelada", "", {
          positionClass: "toast-bottom-right"
        });

        if (this.settings.buttonCode) this.globals.resetEdited(this.settings.buttonCode);
        this.store.dispatch([new FetchPecaContent(this.pecaId)]);
      },
      error => {
        const error_msg = (error.error && error.error instanceof ProgressEvent)
          ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
          : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";
        this.isSending = false;
        this.toastr.error(
          error.error && error.error["msg"]
            ? error.error["msg"]
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
    }
    else if (this.activity_video)
      return this.activity_video;
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
    if (
      e && e.target && e.target.files
      && e.target.files.length > 0
    ) {
      this.settings.upload = this.settings.upload ? {
        ...this.settings.upload,
        uploadEmpty: false,
        name: <File>e.target.files[0].name,
        file: <File>e.target.files[0],
        url: ''
      } : {
          uploadEmpty: true,
        };
    }
  }

  clickUpload(btn) {
    btn.getElementsByClassName('tb-upload-btn-input-file')[0].click();
  }

  shortenName(name: string) {
    return name.length > 40 ? `${name.substr(0, 10)}...${name.substr(30)}` : name;
  }

}
