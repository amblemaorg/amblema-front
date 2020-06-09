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
import { ProfileBlockComponent } from './profile-block/profile-block.component';
import { SliderBlockComponent } from './slider-block/slider-block.component';
import { StepperBlockComponent } from './stepper-block/stepper-block.component';
import { ChecklistBlockComponent } from './checklist-block/checklist-block.component';
import { ScheduleBlockComponent } from './schedule-block/schedule-block.component';

export class PageBlockFactory {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public createPageBlockFactory(type: string): ComponentFactory<PageBlockComponent> {
    switch (type) {
      case 'tabs':
        return this.componentFactoryResolver.resolveComponentFactory(TabsBlockComponent);
      case 'table':
        return this.componentFactoryResolver.resolveComponentFactory(TableBlockComponent);
      case 'accordion':
        return this.componentFactoryResolver.resolveComponentFactory(AccordionBlockComponent);
      case 'textsbuttons':
        return this.componentFactoryResolver.resolveComponentFactory(TextsButtonsSetBlockComponent);
      case 'form':
        return this.componentFactoryResolver.resolveComponentFactory(FormBlockComponent);
      case 'profiles':
        return this.componentFactoryResolver.resolveComponentFactory(ProfileBlockComponent);
      case 'slider':
        return this.componentFactoryResolver.resolveComponentFactory(SliderBlockComponent);
      case 'stepper':
        return this.componentFactoryResolver.resolveComponentFactory(StepperBlockComponent);
      case 'checkList':
        return this.componentFactoryResolver.resolveComponentFactory(ChecklistBlockComponent);
      case 'agendas':
        return this.componentFactoryResolver.resolveComponentFactory(ScheduleBlockComponent);
      default:
        throw Error('PageBlockTypeException: invalid page block type');
    }
  }

}
