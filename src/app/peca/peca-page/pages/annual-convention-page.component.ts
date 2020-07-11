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

  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService
  ) {
    super(factoryResolver);
    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
      console.log(this.blockInstances, "bloques");
    });
    //this.instantiateComponent(config);
  }
  ngOnInit() {
    this.getInfo();
    this.instantiateComponent(config);
  }
  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (!isNullOrUndefined(data)) {
          this.response =
            data.activePecaContent.lapse1.annualConvention.checklist;
          console.log(this.response);
          this.setAnnualConventionData();
          this.setBlockData(
            "AnnualConventionCheckLists",
            this.AnnualConventionInfo
          );
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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    });
  }
  ngOnDestroy() {
    this.isInstanciated = false;
    //this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
  }
}
