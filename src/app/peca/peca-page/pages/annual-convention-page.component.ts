import { annualConventionPermissions } from './../blocks/peca-permissology';
import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
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
export class AnnualConventionPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  AnnualConventionInfo: any;
  isInstanciated: boolean;
  response = [];
  loadedData: boolean;
  UrlLapse = "";
  routerSubscription: Subscription;
  pecaId = "";

  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router
  ) {
    super(factoryResolver);
    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      if (this.loadedData) this.updateMethods();
    });
    this.instantiateComponent(config);

    //To know if the url change
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
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
            this.pecaId = data.activePecaContent.id;
            const lapseName = `lapse${this.UrlLapse}`;
            let { permissions } = data.user;
            permissions = this.managePermissions(permissions);
            const checklist = data.activePecaContent[lapseName].annualConvention.checklist;
            /*
            if (this.UrlLapse === "1") {
              this.response = data.activePecaContent.lapse1.annualConvention.checklist;
            } else if (this.UrlLapse === "2") {
              this.response = data.activePecaContent.lapse2.annualConvention.checklist;
            } else {
              this.response = data.activePecaContent.lapse3.annualConvention.checklist;
            }
            */
            this.setAnnualConventionData(checklist, permissions);
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        }
      },

      (error) => console.error(error)
    );
  }

  managePermissions(permissionsArray) {
    return annualConventionPermissions.actions.reduce(
      (permissionsObj, permission) => {
        permissionsObj[permission] = permissionsArray.includes(permission);
        return permissionsObj;
      },
      {}
    );
  }

  setAnnualConventionData(checklist, permissions) {
    const { annual_convention_peca_edit } = permissions
    this.AnnualConventionInfo = {
      checkList: checklist,
      button: {
        hidden: !annual_convention_peca_edit,
      }
    };
  }

  updateDataToBlocks() {
    this.setBlockData("AnnualConventionCheckLists", this.AnnualConventionInfo);
  }

  updateMethods() {
    this.updateDataToBlocks();
    this.updateStaticFetchers();
  }

  updateStaticFetchers() {
    this.setBlockFetcherUrls("AnnualConventionCheckLists", {
      post: `pecaprojects/annualconvention/${this.pecaId}`,
    });
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
