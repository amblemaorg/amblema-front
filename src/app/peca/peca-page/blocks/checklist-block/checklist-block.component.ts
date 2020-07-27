import { Component, OnInit, OnDestroy } from '@angular/core';
import { 
  PageBlockComponent, 
  PresentationalBlockComponent 
} from '../page-block.component';
import { GlobalService } from '../../../../services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "checklist-block",
  templateUrl: "./checklist-block.component.html",
  styleUrls: ["./checklist-block.component.scss"]
})
export class ChecklistBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: "presentational";
  component: string;
  prueba: any;
  flag = false;
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
        genericActivityId?: string;
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
  };
checks=[];

  activity_uneditable: boolean
  private subscription: Subscription = new Subscription();

  constructor(private globals: GlobalService) {
    this.type = "presentational";
    this.component = "checkList";
  }

  ngOnInit() {
    this.subscription.add(
      this.globals.actionsSleeperEmitter.subscribe((bool) => {
        this.activity_uneditable = bool.activity_uneditable;
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

  setData(data: any) {
    if (data["isGenericActivity"]) {    
      this.settings.infoContainer[0].datosNivel[0].title = data["title"] ? data.title : null;      
      this.settings.infoContainer[0].datosNivel[0].checkList = data["checklist"] ? data.checklist : null;
      this.activity_uneditable = data["activityUneditable"] ? data.activityUneditable : null;
      this.settings.infoContainer[0].datosNivel[0].genericActivityId = data["genericActivityId"] ? data.genericActivityId : null;   
      
      setTimeout(() => {
        this.globals.updateGenActButtonDataUpdater({
            gaId: this.settings.infoContainer[0].datosNivel[0].genericActivityId,
            checklist: data["checklist"] ? this.settings.infoContainer[0].datosNivel[0].checkList : null,
        });
      });      
    }
  
    if (data["checkList"]) {
     // this.prueba = data.checkList[0].description;
      this.flag = true;
      /* for (let i = 0; i < this.prueba.length; i++) {
        this.settings.infoContainer[0].datosNivel[0].checkList[i].description =
          data.checkList[0].description[i].name;
      } */
      this.settings.infoContainer[0].datosNivel[0].checkList=data.checkList;
    }
    else {
      this.flag = false;
      if (data["isGenericActivity"]) {
        this.flag = true;
      }
    }
  }

  toggleCheck(checked: boolean, check: any, isGenAct) {
    check.checked = checked;

    if (isGenAct) { // if truty, this is for generic activity            
      this.globals.updateGenActButtonDataUpdater({
        gaId: this.settings.infoContainer[0].datosNivel[0].genericActivityId,
        checklist: this.settings.infoContainer[0].datosNivel[0].checkList.length > 0 
          ? this.settings.infoContainer[0].datosNivel[0].checkList : null
      });
    }
  }
  
}