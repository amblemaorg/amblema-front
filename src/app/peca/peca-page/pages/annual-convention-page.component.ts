import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { ANNUAL_CONVENTION_CONFIG as config } from "./annual-convention-config";
import { Subscription, Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
import { NavigationEnd, Router, Event } from "@angular/router";

@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  AnnualConventionInfo: any;
  isInstanciated: boolean;
  response = [];
  loadedData: boolean;
  UrlLapse = "";
  routerSubscription: Subscription;

  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router
  ) {
    super(factoryResolver);
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
              this.response =
                data.activePecaContent.lapse1.annualConvention.checklist;
            } else if (this.UrlLapse === "2") {
              this.response =
                data.activePecaContent.lapse2.annualConvention.checklist;
            } else {
              data.activePecaContent.lapse3.annualConvention.checklist;
            }
            console.log(this.response);
            this.setAnnualConventionData();
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        }
      },

      (error) => console.error(error)
    );
  }

  setAnnualConventionData() {
    this.AnnualConventionInfo = {
      checkList: [
        {
          description: this.response,
        },
      ],
    };
  }

  updateDataToBlocks() {
    this.setBlockData("AnnualConventionCheckLists", this.AnnualConventionInfo);
  }

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
