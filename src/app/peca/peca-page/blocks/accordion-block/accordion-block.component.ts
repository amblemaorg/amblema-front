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
    if (data["topics1"]) {
      for (let i = 0; i < data.topics1.length; i++) {
        this.settings.items[i].title = data.topics1[i].name;
      }
      console.log("entro", data);
      console.log("aja", this.settings.items);
    } else if (data["topics2"]) {
      for (let i = 0; i < data.topics2.length; i++) {
        this.settings.items[i].title = data.topics2[i].name;
      }
    } else if (data["topics3"]) {
      for (let i = 0; i < data.topics3.length; i++) {
        this.settings.items[i].title = data.topics3[i].name;
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
