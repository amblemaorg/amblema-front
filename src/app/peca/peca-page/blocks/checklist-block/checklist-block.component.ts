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
    infoContainer: {
      principal: {
        tema: string,
        objetivo: {
          conObjetivo: string
        }[],
        estrategia: {
          contEstrategia: string,
        }[],
        contenido: {
          contContenido: string,
        }[],
      }[],
      datosNivel: {
        nivel: string,
        week: {
          contWeek: string,
        }[],
        time: string,
        tecnica: {
          contTecnica: string,
        }[];
        recurso: {
          contRecurso: string,
        }[],
        evaluacion: {
          contEvaluacion: string,
        }[];
        title: string,
        checkList: {
          description: string,
        }[],
        material: {
          link: string,
        }[],
      }[],
      button: any,
      line: boolean,
      subtitle: string;
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
