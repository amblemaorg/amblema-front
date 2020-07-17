import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  PageBlockComponent,
  StructuralBlockComponent,
  StructuralItem,
} from '../page-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'peca-tabs-block',
  template: `
    <nb-tabset fullWidth>
      <nb-tab [class.tabs-padding-escuela]="item.title === 'Docentes' || item.title === 'Grado y secciones' || item.title === 'Estudiantes'" [tabTitle]="item.title" *ngFor="let item of settings.items; index as i">
        <ng-template #tabContainer></ng-template>
      </nb-tab>
    </nb-tabset>
  `,
  styleUrls: ['./tabs-block.component.scss'],
})
export class TabsBlockComponent implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren('tabContainer', { read: ViewContainerRef }) tabContainer: QueryList<
    ViewContainerRef
  >;
  factory: PageBlockFactory;

  type: 'structural';
  component: string;
  settings: {
    items: StructuralItem[];
  };

  constructor(private globals: GlobalService) {
    this.type = 'structural';
    this.component = 'tabs';
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

  public instantiateChildBlocks() {
    let blockInstances = new Map<string, PageBlockComponent>();
    this.settings.items.map((item, i) => {
      const container = this.tabContainer.toArray()[i];
      item.childBlocks.map((block, j) => {
        let settings = block.settings;
        if (block.component == 'modal')
          settings = { settings: block.settings, factory: this.factory };
        if (block.component == 'accordion')
          settings = { settings: block.settings, factory: this.factory };
          if (block.component == 'profiles')
          settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(block.component);
        const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
        pageBlockComponent.instance.setSettings(settings);
        blockInstances.set(block.name || `tab${i}block${j}`, pageBlockComponent.instance);
      });
    });

    this.globals.createdBlockInstances(blockInstances);
  }
}
