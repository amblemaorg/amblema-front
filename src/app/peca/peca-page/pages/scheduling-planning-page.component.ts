import { lapsePlanningPermissions } from './../blocks/peca-permissology';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { schedulingPlanningConfigMapper } from "./scheduling-planning-config";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Select, Store } from "@ngxs/store";
import { GlobalService } from "../../../services/global.service";
import { isNullOrUndefined } from "util";
import { Router, NavigationEnd, Event } from "@angular/router";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "peca-scheduling-planning",
  templateUrl: "../peca-page.component.html",
})
export class SchedulingPlanningPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;

  peca_id: any;
  text: string;
  upFile: any;
  url: string;
  name: string;

  UrlLapse = "";
  reunionAmblemaData: any;
  reunion: string;
  //controla cuando la data es cargada
  isInstantiating: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    private store: Store,
    globals: GlobalService
  ) {
    super(factoryResolver);
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].lapsePlanning) ===
            JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].lapsePlanning)
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            this.peca_id = data.activePecaContent.id;
            if (data.activePecaContent) {
              if (!isNullOrUndefined(data)) {
                const lapseName = `lapse${this.UrlLapse}`;
                const { lapsePlanning } = data.activePecaContent[lapseName];
                const { permissions } = data.user;
                const permissionsObj = this.managePermissions(permissions);
                const newConfig = schedulingPlanningConfigMapper(
                  lapsePlanning,
                  this.UrlLapse,
                  permissionsObj,
                  this.store
                );
                this.instantiateComponent(newConfig);
                this.doInstantiateBlocks();
              }
            }
          }
        },
        (er) => {
          console.error(er);
        }
      );
  }

  managePermissions(permissionsArray) {
    return lapsePlanningPermissions.actions.reduce(
      (permissionsObj, permission) => {
        if (permissionsArray) permissionsObj[permission] = permissionsArray.includes(permission);
        return permissionsObj;
      },
      {}
    );
  }

  doInstantiateBlocks() {
    this.isInstantiating = true;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstantiating = false;
    });
  }

  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
