import {
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';
// Block components
import { PageBlockComponent } from './page-block.component';
import { TabsBlockComponent } from './tabs-block/tabs-block.component';
import { TableBlockComponent } from './table-block/table-block.component';
import { AccordionBlockComponent } from './accordion-block/accordion-block.component';
import { TextsButtonsSetBlockComponent } from './texts-buttons-set-block/texts-buttons-set-block.component';
import { FormBlockComponent } from './form-block/form-block.component';

export class PageBlockFactory {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public createPageBlockFactory(type: string): ComponentFactory<PageBlockComponent> {
    switch(type) {
      case 'tabs' :
        return this.componentFactoryResolver.resolveComponentFactory(TabsBlockComponent);
      case 'table' :
        return this.componentFactoryResolver.resolveComponentFactory(TableBlockComponent);
      case 'accordion' :
        return this.componentFactoryResolver.resolveComponentFactory(AccordionBlockComponent);
      case 'buttons' :
        return this.componentFactoryResolver.resolveComponentFactory(TextsButtonsSetBlockComponent);
      case 'form' :
        return this.componentFactoryResolver.resolveComponentFactory(FormBlockComponent);
      default :
        throw Error('PageBlockTypeException: invalid page block type');
    }
  }

}
