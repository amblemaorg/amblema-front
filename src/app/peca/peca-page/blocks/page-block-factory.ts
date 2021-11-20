import { ComponentFactory, ComponentFactoryResolver } from "@angular/core";
// Block components
import { PageBlockComponent } from "./page-block.component";
import { TabsBlockComponent } from "./tabs-block/tabs-block.component";
import { TableBlockComponent } from "./table-block/table-block.component";
import { AccordionBlockComponent } from "./accordion-block/accordion-block.component";
import { TextsButtonsSetBlockComponent } from "./texts-buttons-set-block/texts-buttons-set-block.component";
import { FormBlockComponent } from "./form-block/form-block.component";
import { ProfileBlockComponent } from "./profile-block/profile-block.component";
import { SliderBlockComponent } from "./slider-block/slider-block.component";
import { StepperBlockComponent } from "./stepper-block/stepper-block.component";
import { ChecklistBlockComponent } from "./checklist-block/checklist-block.component";
import { ScheduleBlockComponent } from "./schedule-block/schedule-block.component";
import { ModalBlockComponent } from "./modal-block/modal-block.component";
import { GraphicsBlockComponent } from "./graphics-block/graphics-block.component";
import { GenericActivityBlockComponent } from "./generic-activity-block/generic-activity-block.component";
import { GraphicsMatheBlockComponent } from "./graphics-mathe-block/graphics-mathe-block.component";
import { GraphicsLogicComponent } from "./graphics-logic/graphics-logic.component";
import { SummaryBlockComponent } from "./franklin-dev-component/summary-block/summary-block.component";
import { FormReviewComponent } from "./franklin-dev-component/form-review/form-review.component";
import { FormTableComponent } from "./form-table-previous-students/form-table.component";
import { FormatDownloadBlock } from "./format-block/format-block.component";

export class PageBlockFactory {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createPageBlockFactory(
    type: string
  ): ComponentFactory<PageBlockComponent> {
    switch (type) {
      case "tabs":
        return this.componentFactoryResolver.resolveComponentFactory(
          TabsBlockComponent
        );
      case "table":
        return this.componentFactoryResolver.resolveComponentFactory(
          TableBlockComponent
        );
      case "accordion":
        return this.componentFactoryResolver.resolveComponentFactory(
          AccordionBlockComponent
        );
      case "textsbuttons":
        return this.componentFactoryResolver.resolveComponentFactory(
          TextsButtonsSetBlockComponent
        );
      case "form":
        return this.componentFactoryResolver.resolveComponentFactory(
          FormBlockComponent
        );
      case "profiles":
        return this.componentFactoryResolver.resolveComponentFactory(
          ProfileBlockComponent
        );
      case "slider":
        return this.componentFactoryResolver.resolveComponentFactory(
          SliderBlockComponent
        );
      case "stepper":
        return this.componentFactoryResolver.resolveComponentFactory(
          StepperBlockComponent
        );
      case "checkList":
        return this.componentFactoryResolver.resolveComponentFactory(
          ChecklistBlockComponent
        );
      case "format-download-block":
        return this.componentFactoryResolver.resolveComponentFactory(
          FormatDownloadBlock
        );
      case "agendas":
        return this.componentFactoryResolver.resolveComponentFactory(
          ScheduleBlockComponent
        );
      case "modal":
        return this.componentFactoryResolver.resolveComponentFactory(
          ModalBlockComponent
        );
      case "graphics":
        return this.componentFactoryResolver.resolveComponentFactory(
          GraphicsBlockComponent
        );
      case "genericactivity":
        return this.componentFactoryResolver.resolveComponentFactory(
          GenericActivityBlockComponent
        );
      case "graphics-mathe":
        return this.componentFactoryResolver.resolveComponentFactory(
          GraphicsMatheBlockComponent
        );
      case "graphics-logic":
        return this.componentFactoryResolver.resolveComponentFactory(
          GraphicsLogicComponent
        );
      case "form-review":
        return this.componentFactoryResolver.resolveComponentFactory(
          FormReviewComponent
        );
      case "summary":
        return this.componentFactoryResolver.resolveComponentFactory(
          SummaryBlockComponent
        );
      case "form-table":
        return this.componentFactoryResolver.resolveComponentFactory(
          FormTableComponent
        );
      default:
        throw Error("PageBlockTypeException: invalid page block type");
    }
  }
}
