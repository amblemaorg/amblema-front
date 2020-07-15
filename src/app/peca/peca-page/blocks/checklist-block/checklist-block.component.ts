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
  pruebaaaaa: any;
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

  setData(data: any) {
    this.pruebaaaaa= data.checkList[0].description;
    console.log("sadsdsds", this.pruebaaaaa)
    if (data["checkList"]) for (let i = 0; i < data.checkList[0].description.length; i++) {
      this.settings.infoContainer[0].checkList[i].description = data.checkList[0].description[i].name;
      /* console.log("no se", this.settings.infoContainer[0].checkList[i])
      console.log("checkkk",data.checkList[0]); */
    }
    }
    //if (data["checkList"]) this.settings.infoContainer[0].checkList[i].description = data.checkList[0].description.name;
/*     console.log("checkkk",data.checkList[0].description.name);
 */  
//console.log("checkkk",data.checkList[0].description);
//console.log("no se", this.settings.infoContainer[0].checkList );
  }

