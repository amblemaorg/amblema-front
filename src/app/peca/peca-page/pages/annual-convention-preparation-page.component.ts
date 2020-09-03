import { annualPreparationPermissions } from './../blocks/peca-permissology';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { annualConventionPreparationConfigMapper } from "./annual-convention-preparation-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select, Store } from "@ngxs/store";
import { Router, NavigationEnd, Event } from "@angular/router";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { scan } from "rxjs/internal/operators/scan";

@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPreparationPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  idPeca = "";
  UrlLapse = "";
  routerSubscription: Subscription;
  isInstantiating: boolean;

  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false }) container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  infoDataSubscription: Subscription;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    private store: Store
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
            JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].annualPreparation) ===
            JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].annualPreparation)
        ),
        scan(
          (prev, curr) => {
            let updatedTeachers = false;
            if (prev.activePecaContent) {
              const prevTeachers =
                prev.activePecaContent[`lapse${this.UrlLapse}`]["annualPreparation"]["teachers"];
              const currTeachers =
                curr.activePecaContent[`lapse${this.UrlLapse}`]["annualPreparation"]["teachers"];
              updatedTeachers = JSON.stringify(prevTeachers) !== JSON.stringify(currTeachers);
            }
            return {
              ...curr,
              updatedTeachers,
            };
          },
          { activePecaContent: null, user: null, updatedTeachers: false }
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              let { permissions } = data.user;
              permissions = this.managePermissions(permissions);
              const config = annualConventionPreparationConfigMapper(
                data.activePecaContent,
                this.UrlLapse,
                data.updatedTeachers,
                permissions,
                this.store
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
    return annualPreparationPermissions.actions.reduce(
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
