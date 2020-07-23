import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  QueryList,
  ViewChildren,
} from "@angular/core";
import {
  PageBlockComponent,
  StructuralBlockComponent,
  StructuralItem,
} from "../page-block.component";
import { PageBlockFactory } from "../page-block-factory";

@Component({
  selector: "peca-accordion-block",
  template: `
    <nb-accordion>
      <nb-accordion-item *ngFor="let item of settings.items; index as i">
        <nb-accordion-item-header>
          <nb-icon
            *ngIf="item.icon"
            [icon]="item.icon"
            class="title-icon"
          ></nb-icon>
          {{ item.title }}
        </nb-accordion-item-header>
        <nb-accordion-item-body>
          <ng-template #accordionItemBodyContainer></ng-template>
        </nb-accordion-item-body>
      </nb-accordion-item>
    </nb-accordion>
  `,
  styleUrls: ["./accordion-block.component.scss"],
})
export class AccordionBlockComponent
  implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren("accordionItemBodyContainer", { read: ViewContainerRef })
  accordionItemBodyContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: "structural";
  component: string;
  settings: {
    items: StructuralItem[];
  };
  flag = false;
  prueba: [];

  constructor() {
    this.type = "structural";
    this.component = "accordion";
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateChildBlocks();
    });
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  setData(data: any) {
    if (data["topics2"]) {
      console.log(this.settings.items);
      //  this.settings.items=data.topics2
    }

    if (data["topics3"]) {
      console.log(this.settings.items);
      //  this.settings.items=data.topics3
    }

    if (data["topics1"]) {
      this.flag = true;
      // console.log(this.settings)
      this.prueba = data.topics1;
      //console.log(data)
      for (let i = 0; i < data.topics1.length; i++) {
        console.log("hola", this.settings.items[i].childBlocks[0]);

        //Nombres de los acordeones
        this.settings.items[i].title = data.topics1[i].name;

        /* Estas lineas de codigo es para la informacion azul (Tema, Objetivos, Estrategias y Contenidos) del componente de proyecto ambiental, fue hecho
        De esta manera, con infoContainer[0] y principal[0] porque esta informacion siempre se muestra en el primer elemento de cada topico */
        //Temas
        this.settings.items[
          i
        ].childBlocks[0].settings.infoContainer[0].principal[0].tema =
          data.topics1[i].name;

        //Objetivos
        for (let j = 0; j < data.topics1[i].objectives.length; j++) {
          this.settings.items[
            i
          ].childBlocks[0].settings.infoContainer[0].principal[0].objetivo[
            j
          ].conObjetivo = data.topics1[i].objectives[j];
        }
        //Estrategias
        for (let k = 0; k < data.topics1[i].strategies.length; k++) {
          this.settings.items[
            i
          ].childBlocks[0].settings.infoContainer[0].principal[0].estrategia[
            k
          ].contEstrategia = data.topics1[i].strategies[k];
        }
        //Contenidos
        for (let l = 0; l < data.topics1[i].contents.length; l++) {
          this.settings.items[
            i
          ].childBlocks[0].settings.infoContainer[0].principal[0].contenido[
            l
          ].contContenido = data.topics1[i].contents[l];
        }

        /* Estas lineas de codigo corresponden a la informacion blanca (Nivel, Semanas, Tiempo estimado de ejecución, Técnica, Recursos, Evaluación y Actividades) del componente de proyecto ambiental */

        for (let b = 0; b < data.topics1[i].levels.length; b++) {
          // console.log("data", data.topics1[1].levels[b]);
          /* console.log("settings", this.settings.items[i].childBlocks[0].settings.infoContainer[
  b
].datosNivel[0]) */
          //Nivel
          this.settings.items[i].childBlocks[0].settings.infoContainer[
            b
          ].datosNivel[0].nivel = data.topics1[i].levels[b].target[0].label;
          //Tiempo
          this.settings.items[i].childBlocks[0].settings.infoContainer[
            b
          ].datosNivel[0].time = data.topics1[i].levels[b].duration;
          //Recursos
          for (let r = 0; r < data.topics1[i].levels[b].resources.length; r++) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].recurso[r].contRecurso =
              data.topics1[i].levels[b].resources[r];
          }
          //Semanas
          for (let s = 0; s < data.topics1[i].levels[b].week.length; s++) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].week[s].contWeek =
              data.topics1[i].levels[b].week[s];
          }

          //Tecnicas
          for (
            let t = 0;
            t < data.topics1[i].levels[b].techniques.length;
            t++
          ) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].tecnica[t].contTecnica =
              data.topics1[i].levels[b].techniques[t];
          }
          //Evaluaciones
          for (
            let e = 0;
            e < data.topics1[i].levels[b].evaluations.length;
            e++
          ) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].evaluacion[e].contEvaluacion =
              data.topics1[i].levels[b].evaluations[e];
          }

          //Materiales
          for (
            let m = 0;
            m < data.topics1[i].levels[b].supportMaterial.length;
            m++
          ) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].material[m].link =
              data.topics1[i].levels[b].supportMaterial[m];
          }
          //Actividades
          for (
            let a = 0;
            a < data.topics1[i].levels[b].activities.length;
            a++
          ) {
            this.settings.items[i].childBlocks[0].settings.infoContainer[
              b
            ].datosNivel[0].checkList[a].name =
              data.topics1[i].levels[b].activities[a];
          }
        }
      }
    }
  }
  public instantiateChildBlocks() {
    this.settings.items.map((item, i) => {
      const container = this.accordionItemBodyContainer.toArray()[i];
      item.childBlocks.map((block) => {
        let settings = block.settings;
        if (block.component == "modal")
          settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(
          block.component
        );
        const pageBlockComponent = container.createComponent(
          pageBlockComponentFactory
        );
        pageBlockComponent.instance.setSettings(settings);
      });
    });
  }
}
