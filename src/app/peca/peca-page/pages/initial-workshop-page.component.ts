import { initialWorkshopPermissions } from './../blocks/peca-permissology';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { initialWorkshopConfigMapper } from "./initial-workshop-config";
import { Router, NavigationEnd, Event } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { Select, Store } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { ClearInitialWorkshopRequestData } from "src/app/store/actions/peca/peca.actions";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
@Component({
  selector: "peca-initial-workshop",
  templateUrl: "../peca-page.component.html",
})
export class InitialWorkshopPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  //variables
  UrlLapse = "";
  peca_id: string;
  isInstantiating: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    private store: Store
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
            JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].initialWorkshop) ===
            JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].initialWorkshop)
        )
      )
      .subscribe((data) => {
        if (!this.isInstantiating) {
          if (data.activePecaContent) {
            this.peca_id = data.activePecaContent.id;
            if (!isNullOrUndefined(data)) {
              const lapseName = `lapse${this.UrlLapse}`;
              const { initialWorkshop } = data.activePecaContent[lapseName];
              const { permissions } = data.user;
              const permissionsObj = this.managePermissions(permissions);
              const newConfig = initialWorkshopConfigMapper(
                initialWorkshop,
                this.UrlLapse,
                permissionsObj,
                this.store
              );
              this.instantiateComponent(newConfig);
              this.doInstantiateBlocks();
            }
          }
        }
      });
  }

  managePermissions(permissionsArray) {
    return initialWorkshopPermissions.actions.reduce(
      (permissionsObj, permission) => {
        permissionsObj[permission] = permissionsArray.includes(permission);
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
    this.store.dispatch(new ClearInitialWorkshopRequestData({}));
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
