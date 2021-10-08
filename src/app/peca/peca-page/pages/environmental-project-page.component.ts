import { environmentalProjectPermissions } from "./../blocks/peca-permissology";
import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { ENVIRONMENTAL_PROJECT_CONFIG as config } from "./environmental-project-config";
import { Subscription, Observable } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { EnviromentalMapper } from "../mappers/enviromental-mapper";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "peca-environmental-project",
  templateUrl: "../peca-page.component.html",
})
export class EnvironmentalProjectPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  isInstanciated: boolean;
  isInstantiating: boolean;
  loadedData: boolean;
  UrlLapse = "";

  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService
  ) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (!this.isInstantiating) {
          if (data.activePecaContent) {
            const { environmentalProject, id } = data.activePecaContent;
            const { permissions } = data.user;
            const permissionsObj = this.managePermissions(permissions);
            if (environmentalProject) {
              const configVista = EnviromentalMapper(
                environmentalProject,
                id,
                permissionsObj
              );
              this.instantiateComponent(configVista);
              this.doInstantiateBlocks();
            }
          }
        }
      },

      (error) => console.error(error)
    );
  }

  ngAfterViewInit(): void {
    this.doInstantiateBlocks();
  }

  managePermissions(permissionsArray) {
    return environmentalProjectPermissions.actions.reduce(
      (permissionsObj, permission) => {
        if (permissionsArray)
          permissionsObj[permission] = permissionsArray.includes(permission);
        return permissionsObj;
      },
      {}
    );
  }

  doInstantiateBlocks() {
    this.isInstanciated = false;
    this.isInstantiating = true;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstanciated = true;
      this.isInstantiating = false;
    });
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
  }
}
