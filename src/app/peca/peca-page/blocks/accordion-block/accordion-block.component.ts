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

  public instantiateChildBlocks() {
    this.settings.items.map((item, i) => {
      const container = this.accordionItemBodyContainer.toArray()[i];
      item.childBlocks.map(block => {
        let settings = block.settings;
        if (block.component=="modal") settings = { settings: block.settings, factory: this.factory };
        if (block.component == "checkList") settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
      })
    })
  }
}
