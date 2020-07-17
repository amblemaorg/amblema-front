import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { PageBlockComponent, StructuralBlockComponent, StructuralItem } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';

@Component({
  selector: 'peca-accordion-block',
  template: `
    <nb-accordion>
        <nb-accordion-item *ngFor="let item of settings.items; index as i">
            <nb-accordion-item-header>
              <nb-icon *ngIf="item.icon" [icon]="item.icon" class="title-icon"></nb-icon>              
              {{ item.title }}
            </nb-accordion-item-header>
            <nb-accordion-item-body>
                <ng-template #accordionItemBodyContainer></ng-template>
            </nb-accordion-item-body>
        </nb-accordion-item>
    </nb-accordion>
  `,
  styleUrls: ['./accordion-block.component.scss']
})
export class AccordionBlockComponent implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren('accordionItemBodyContainer', { read: ViewContainerRef }) accordionItemBodyContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  enviromentalArray: any;
  type: 'structural';
  component: string;
  settings: {
    items: StructuralItem[];
  }

  constructor() {
    this.type = 'structural';
    this.component = 'accordion';
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateChildBlocks();
    })
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  setData(data: any) {
    //console.log("sadsdsds", this.prueba)
    if (data["topics"]) {
      this.enviromentalArray= data.topics;
/*       this.prueba = data.checkList[0].description;
      this.flag = true;
      for (let i = 0; i < this.prueba.length; i++) {
        this.settings.infoContainer[0].datosNivel[0].checkList[i].description =
          data.checkList[0].description[i].name; */
        /* console.log("no se", this.settings.infoContainer[0].checkList[i])
      console.log("checkkk",data.checkList[0]); */

      for (let i = 0; i < this.enviromentalArray.length; i++) {
        this.settings.items[i].title= data.topics[i].name;
      }
      console.log("entro", data.topics)
      console.log("aja", this.settings.items)
;      }
    else {
     // this.flag = false;

    }
  }
  public instantiateChildBlocks() {
    this.settings.items.map((item, i) => {
      const container = this.accordionItemBodyContainer.toArray()[i];
      item.childBlocks.map(block => {
        let settings = block.settings;
        if (block.component=="modal") settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
      })
    })
  }
}
