import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { INITIAL_DIAGNOSTIC_CONFIG as config } from "./initial-diagnostic-config";

@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html"
})
export class InitialDiagnosticPageComponent extends PecaPageComponent
  implements AfterViewInit {
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
