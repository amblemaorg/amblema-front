import { HttpFetcherService } from "./../../../services/peca/http-fetcher.service";
import { olympicsPermissions } from "./../blocks/peca-permissology";
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { mathOlympicsConfigMapper } from "./math-olympics-config";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Select, Store } from "@ngxs/store";
import { isNullOrUndefined } from "util";
import { Router, NavigationEnd, Event } from "@angular/router";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { scan } from "rxjs/internal/operators/scan";
import { previousScholarYearStudentsConfigMapper } from "./previous-scholar-year-enrollment-config";

@Component({
  selector: "peca-maths-olympics",
  templateUrl: "../peca-page.component.html",
})
export class MathOlympicsPageComponent
  extends PecaPageComponent
  implements OnDestroy
{
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  //subscripciones
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  UrlLapse = "";
  peca_id: any;
  isInstantiating: boolean;
  formTable;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private store: Store,
    private router: Router,
    private fetcher: HttpFetcherService
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

  async getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(
              prev.activePecaContent[`lapse${this.UrlLapse}`].olympics
            ) ===
            JSON.stringify(
              curr.activePecaContent[`lapse${this.UrlLapse}`].olympics
            )
        ),
        scan(
          (prev, curr) => {
            let updatedStudents = false;
            if (prev.activePecaContent) {
              const prevStudents =
                prev.activePecaContent[`lapse${this.UrlLapse}`]["olympics"][
                  "students"
                ];
              const currStudents =
                curr.activePecaContent[`lapse${this.UrlLapse}`]["olympics"][
                  "students"
                ];
              updatedStudents =
                JSON.stringify(prevStudents) !== JSON.stringify(currStudents);
            }
            return {
              ...curr,
              updatedStudents,
            };
          },
          { activePecaContent: null, user: null, updatedStudents: false }
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              if (!isNullOrUndefined(data)) {
                this.peca_id = data.activePecaContent.id;
                const lapseName = `lapse${this.UrlLapse}`;
                const { permissions } = data.user;
                const permissionsObj = this.managePermissions(permissions);

                const config = mathOlympicsConfigMapper(
                  data.activePecaContent,
                  this.UrlLapse,
                  data.updatedStudents,
                  permissionsObj,
                  this.store
                );
                this.instantiateComponent(config);
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
    return olympicsPermissions.actions.reduce((permissionsObj, permission) => {
      if (permissionsArray)
        permissionsObj[permission] = permissionsArray.includes(permission);
      return permissionsObj;
    }, {});
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
