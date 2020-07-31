import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  PageBlockComponent,
  PresentationalBlockComponent,
} from "../page-block.component";
import { GlobalService } from "../../../../services/global.service";
import { Subscription, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { FetchPecaContent } from '../../../../store/actions/peca/peca.actions';
import { Store, Select } from '@ngxs/store';
import { PecaState } from 'src/app/store/states/peca/peca.state';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: "checklist-block",
  templateUrl: "./checklist-block.component.html",
  styleUrls: ["./checklist-block.component.scss"],
})
export class ChecklistBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: "presentational";
  component: string;
  prueba: any;
  flag = false;
  isSending: boolean;
  routerSubscription: Subscription;
  pecaId: string;
  UrlLapse = "";
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;
  settings: {
    infoContainer: {
      principal: {
        tema: string;
        objetivo: {
          conObjetivo: string;
        }[];
        estrategia: {
          contEstrategia: string;
        }[];
        contenido: {
          contContenido: string;
        }[];
      }[];
      datosNivel: {
        nivel: string;
        week: {
          contWeek: string;
        }[];
        time: string;
        tecnica: {
          contTecnica: string;
        }[];
        recurso: {
          contRecurso: string;
        }[];
        evaluacion: {
          contEvaluacion: string;
        }[];
        title: string;
        isFromGenericActivity?: boolean;
        isFromAnnualConvention?: boolean;
        genericActivityId?: string;
        approvedAct?: boolean;
        checkList: {
          id?: string;
          name: string;
          checked?: boolean;
        }[];
        material: {
          link: string;
        }[];
      }[];
      button: any;
      line: boolean;
      subtitle: string;
    }[];
    fetcherUrls: {
      // get: string;
      post: string;
      //put: string;
      // patch: string;
      //delete: string;
      //cancel: string;
    };
    fetcherMethod?: "get" | "post" | "put" | "patch" | "delete";
  };
  checks = [];

  activity_uneditable: boolean;
  private subscription: Subscription = new Subscription();

  constructor(
    private globals: GlobalService,
    private toastr: ToastrService,
    private fetcher: HttpFetcherService,
    private store: Store,
  ) {
    this.type = "presentational";
    this.component = "checkList";
  }

  ngOnInit() {
    this.subscription.add(
      this.globals.actionsSleeperEmitter.subscribe((bool) => {
        this.activity_uneditable = bool.activity_uneditable;
      })
    );

    this.subscription.add(
      this.pecaId$.subscribe( peca_id => {
        this.pecaId = peca_id;
      })
    );
    
  }

  ngOnDestroy() {
    this.activity_uneditable = null;
    this.subscription.unsubscribe();
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  setFetcherUrls({post }) {
    this.settings.fetcherUrls = {
   post     
    };
  }


  setData(data: any) {
    if (data["isGenericActivity"]) {
      this.settings.infoContainer[0].datosNivel[0].title = data["title"]
        ? data.title
        : null;
      this.settings.infoContainer[0].datosNivel[0].checkList = data["checklist"]
        ? data.checklist
        : null;
      this.activity_uneditable = data["activityUneditable"]
        ? data.activityUneditable
        : null;
      this.settings.infoContainer[0].datosNivel[0].genericActivityId = data[
        "genericActivityId"
      ]
        ? data.genericActivityId
        : null;
      this.settings.infoContainer[0].datosNivel[0].approvedAct = data[
        "approvedAct"
      ]
        ? data.approvedAct
        : null;

      setTimeout(() => {
        this.globals.updateGenActButtonDataUpdater({
          gaId: this.settings.infoContainer[0].datosNivel[0].genericActivityId,
          checklist: data["checklist"]
            ? this.settings.infoContainer[0].datosNivel[0].checkList
            : null,
        });
      });
    }

    if (data["checkList"]) {
      this.flag = true;
      this.settings.infoContainer[0].datosNivel[0].isFromAnnualConvention = true;
      this.settings.infoContainer[0].datosNivel[0].checkList = data.checkList;
    } else {
      this.flag = false;
      if (data["isGenericActivity"]) {
        this.flag = true;
      }
    }
  }

  toggleCheck(checked: boolean, check: any, isGenAct) {
    check.checked = checked;

    if (isGenAct) {
      // if truty, this is for generic activity
      this.globals.updateGenActButtonDataUpdater({
        gaId: this.settings.infoContainer[0].datosNivel[0].genericActivityId,
        checklist:
          this.settings.infoContainer[0].datosNivel[0].checkList.length > 0
            ? this.settings.infoContainer[0].datosNivel[0].checkList
            : null,
      });
    }
  }

  sendAnnualConvention(checklLists) {
    const body = checklLists;
   
console.log(body)
     this.isSending = true;

    const method = this.settings.fetcherMethod || "post";
    const resourcePath = this.settings.fetcherUrls[method];
console.log(resourcePath, method)
      this.fetcher[method](resourcePath, body).subscribe(
      (response) => {
        console.log("form response", response);
        //this.sleepSend = true;
        this.isSending = false;

        this.toastr.success("Solicitud enviada", "", {
          positionClass: "toast-bottom-right",
        });

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