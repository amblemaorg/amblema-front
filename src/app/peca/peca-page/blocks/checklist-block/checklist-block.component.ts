import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'checklist-block',
  templateUrl: './checklist-block.component.html',
  styleUrls: ['./checklist-block.component.scss']
})
export class ChecklistBlockComponent implements PresentationalBlockComponent, OnInit {
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
      checkList: {
        name: string;
      }[];
      material: string;
      button: any;
      line: boolean;
      subtitle: string;
    }[];
  };

  constructor() {
    this.type = 'presentational';
    this.component = 'checkList';
  }

  ngOnInit() {
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }

  setData(data: any) {
    if (data["isGenericActivity"]) {
      this.settings.infoContainer[0].title = data["title"] ? data.title : null;
      this.settings.infoContainer[0].checkList = data["checkList"] ? data.checkList : null;
    }
  }

}
