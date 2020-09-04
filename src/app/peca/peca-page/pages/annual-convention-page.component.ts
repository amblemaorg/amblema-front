import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { annualConventionConfigMapper } from "./annual-convention-config";
import { Subscription, Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { NavigationEnd, Router, Event } from "@angular/router";
import { distinctUntilChanged } from 'rxjs/operators';
import { annualConventionPermissions } from './../blocks/peca-permissology';

@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false }) container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  infoDataSubscription: Subscription;
  AnnualConventionInfo: any;
  response = [];
  UrlLapse = "";
  routerSubscription: Subscription;
  pecaId = "";
  isInstantiating: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {
    super(factoryResolver);
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
    this.infoDataSubscription = this.infoData$
    .pipe(
      distinctUntilChanged(
        (prev, curr) =>
          JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].annualConvention) ===
          JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].annualConvention)
      )
    )
    .subscribe(
      (data) => {
        if (!this.isInstantiating) {
          if (data.activePecaContent) {
              this.pecaId = data.activePecaContent.id;
              let { permissions } = data.user;
              permissions = this.managePermissions(permissions);
              const config = annualConventionConfigMapper(
                data.activePecaContent,
                this.UrlLapse,
                permissions
              );
              this.instantiateComponent(config);
              this.doInstantiateBlocks();
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
