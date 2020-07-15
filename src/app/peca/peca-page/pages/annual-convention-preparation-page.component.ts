import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { ANNUAL_CONVENTION_PREPARATION_CONFIG as config } from "./annual-convention-preparation-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
import { Router, NavigationEnd, Event } from "@angular/router";

@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPreparationPageComponent extends PecaPageComponent
  implements AfterViewInit {
  isInstanciated: boolean;
  description1 = "";
  description2 = "";
  description3 = "";
  description4 = "";
  loadedData: boolean;
  preparationInfo: any;
  UrlLapse = "";
  routerSubscription: Subscription;

  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router
  ) {
    super(factoryResolver);
    //this.instantiateComponent(config);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
      console.log(this.blockInstances, "bloques");
      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);

    //To know if the url change
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
        console.log("el ev", this.UrlLapse);
        this.getInfo();
      }
    });
  }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          if (!isNullOrUndefined(data)) {
            if (this.UrlLapse === "1") {
              this.description1 =
                data.activePecaContent.lapse1.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse1.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse1.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse1.annualPreparation.step4Description;
            } else if (this.UrlLapse === "2") {
              this.description1 =
                data.activePecaContent.lapse2.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse2.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse2.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse2.annualPreparation.step4Description;
            } else {
              this.description1 =
                data.activePecaContent.lapse3.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse3.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse3.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse3.annualPreparation.step4Description;
            }
            this.setPreparationData();
            //3
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        }
      },

      (error) => console.error(error)
    );
  }

  setPreparationData() {
    this.preparationInfo = {
      text1: {
        content: this.description1,
      },
      text2: {
        content: this.description2,
      },
      text3: {
        content: this.description3,
      },
      text4: {
        content: this.description4,
      },
    };
  }
  //1
  updateDataToBlocks() {
    this.setBlockData("stepperAnnual", this.preparationInfo);
  }
  //2
  updateMethods() {
    this.updateDataToBlocks();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    });
  }
  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
