import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { PageBlockComponent, StructuralBlockComponent, StructuralItem } from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';

@Component({
  selector: 'peca-tabs-block',
  template: `
    <nb-tabset fullWidth>
      <nb-tab [tabTitle]="item.title" *ngFor="let item of settings.items; index as i">
        <ng-template #tabContainer></ng-template>
      </nb-tab>
    </nb-tabset>
  `,
  styleUrls: ['./tabs-block.component.scss']
})
export class TabsBlockComponent implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren('tabContainer', { read: ViewContainerRef }) tabContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: 'structural';
  component: string;
  settings: {
    items: StructuralItem[];
  }

  constructor() {
    this.type = 'structural';
    this.component = 'tabs';
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
      const container = this.tabContainer.toArray()[i];
      item.childBlocks.map(block => {
        let settings = block.settings;
        if (block.component=="modal") settings = { settings: block.settings, factory: this.factory };
        if (block.component=="accordion") settings = { settings: block.settings, factory: this.factory };

        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
      })
    })
  }
}
