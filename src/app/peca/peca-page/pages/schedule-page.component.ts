import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { SCHEDULE_CONFIG as config } from "./schedule-config";

@Component({
  selector: "peca-schedule",
  templateUrl: "../peca-page.component.html",
})
export class SchedulePageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  constructor(factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }
}
