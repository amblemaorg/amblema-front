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
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html"
})
export class InitialDiagnosticPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  userDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) userData$: Observable<any>;
  @Select(PecaState.getPecaSchoolData) user2Data$: Observable<any>;

  constructor(factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    //this.userDataSubscription = this.userData$.subscribe(
    this.userDataSubscription = this.userData$.subscribe(
      data => {
        // console.log("vamos a ver qlq" + JSON.stringify(data));
        //console.log(data.activePecaContent.lapse1.lapsePlanning); //planificacion de lapso (1)
        // console.log(data.activePecaContent.yearbook.lapse1);
        //console.log(data.activePecaContent.school.sections); //active peca para diagnostico (2)
      },

      error => console.error(error)
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }
}
