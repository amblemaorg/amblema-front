import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'checklist-block',
  templateUrl: './checklist-block.component.html',
  styleUrls: ['./checklist-block.component.scss']
})
export class ChecklistBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: 'presentational';
  component: string;
  settings: {
    infoContainer:{
    principal:{
      tema: string;
      objetivo: string[];
      estrategia: string[];
      contenido: string[];
    };
      datosNivel: {
        nivel: string;
        week: string;
        time: string;
        tecnica:string[];
        recurso:string[];
        evaluacion:string[];
      };
      title: string;      
      isFromGenericActivity?: boolean;
      genericActivityId?: string;
      checkList: {
        id?: string;
        name: string;
        checked?: boolean;
      }[];
      material: string;
      button: any;
      line: boolean;
      subtitle: string;
    }[];
  };

  activity_uneditable: boolean

  constructor(private globals: GlobalService) {
    this.type = 'presentational';
    this.component = 'checkList';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.activity_uneditable = null;
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  setData(data: any) {
    if (data["isGenericActivity"]) {      
      this.settings.infoContainer[0].title = data["title"] ? data.title : null;
      this.settings.infoContainer[0].checkList = data["checkList"] ? data.checkList : null;
      this.activity_uneditable = data["activityUneditable"] ? data.activityUneditable : null;
      this.settings.infoContainer[0].genericActivityId = data["genericActivityId"] ? data.genericActivityId : null;   
      
      setTimeout(() => {
        this.globals.updateGenActButtonDataUpdater({
          gaId: this.settings.infoContainer[0].genericActivityId,
          checklist: data["checkList"] ? this.settings.infoContainer[0].checkList : null,
        });
      });      
    }
  }

  toggleCheck(checked: boolean, check: any, isGenAct) {
    check.checked = checked;

    if (isGenAct) { // if truty, this is for generic activity            
      this.globals.updateGenActButtonDataUpdater({
        gaId: this.settings.infoContainer[0].genericActivityId,
        checklist: this.settings.infoContainer[0].checkList.length > 0 ? this.settings.infoContainer[0].checkList : null
      });
    }
  }

}
