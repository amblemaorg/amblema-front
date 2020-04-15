import {
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';
// Block components
import { PageBlockComponent } from './page-block.component';
import { TabsBlockComponent } from './tabs-block/tabs-block.component';
import { TableBlockComponent } from './table-block/table-block.component';

export class PageBlockFactory {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public createPageBlockFactory(type: string): ComponentFactory<PageBlockComponent> {
    switch(type) {
      case 'tabs' :
        return this.componentFactoryResolver.resolveComponentFactory(TabsBlockComponent);
      case 'table' :
        return this.componentFactoryResolver.resolveComponentFactory(TableBlockComponent);
      default :
        throw Error('PageBlockTypeException: invalid page block type');
    }
  }

}
