import { sliderActivitiesPermissions, sliderActivitiesPermissionsI } from './../blocks/peca-permissology';
import { ClearSchoolActivitiesRequestData } from "./../../../store/actions/peca/peca.actions";
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import {
  schoolActivitiesPicturesConfigMapper,
} from "./school-pictures-config";
import { Select, Store } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";

@Component({
  selector: "peca-school-pictures",
  templateUrl: "../peca-page.component.html",
})
export class SchoolPicturesPageComponent extends PecaPageComponent implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) activePecaContent$: Observable<any>;
  isInstantiating: boolean;
  subscription: Subscription;

  constructor(factoryResolver: ComponentFactoryResolver, private store: Store) {
    super(factoryResolver);
    this.initPage();
  }

  initPage() {
    this.subscription = this.activePecaContent$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent.school.activitiesSlider) ===
            JSON.stringify(curr.activePecaContent.school.activitiesSlider)
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              const { activitiesSlider } = data.activePecaContent.school;
              const { permissions } = data.user;
              const permissionsObj = this.managePermissions(permissions);
              const newConfig = schoolActivitiesPicturesConfigMapper(
                activitiesSlider,
                permissionsObj,
                this.store
              );
              this.instantiateComponent(newConfig);
              this.doInstantiateBlocks();
            }
          }
        },
        (er) => {
          console.log(er);
        }
      );
  }

  managePermissions(permissionsArray) {
    return sliderActivitiesPermissions.actions.reduce(
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
    this.subscription.unsubscribe();
    this.store.dispatch(new ClearSchoolActivitiesRequestData({}));
  }
}
