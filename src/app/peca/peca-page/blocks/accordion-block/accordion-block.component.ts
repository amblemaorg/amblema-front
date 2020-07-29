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
  templateUrl: "./accordion-block.component.html",
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
