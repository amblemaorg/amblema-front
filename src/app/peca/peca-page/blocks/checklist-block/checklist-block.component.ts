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
      tema: string,
      objetivo: string[],
      estrategia: string[],
      contenido: string[],
    },
      datosNivel: {
        nivel: string,
        week: string,
        time: string,
        tecnica:string[];
        recurso:string[];
        evaluacion:string[];
      },
      title: string,
      checkList: {
        description: string,
      }[],
      material: string,
      button: any,
      line: boolean
    }[],
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

}
