import { ClearSchoolActivitiesRequestData } from "./../../../store/actions/peca/peca.actions";
import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import {
  SCHOOL_PICTURES_CONFIG as config,
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
export class SchoolPicturesPageComponent extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) activePecaContent$: Observable<any>;
  isInstanciated: boolean;
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
              const newConfig = schoolActivitiesPicturesConfigMapper(activitiesSlider, this.store);
              this.instantiateComponent(newConfig);
              this.doInstantiateBlocks();
              this.store.dispatch(new ClearSchoolActivitiesRequestData({}));
            }
          }
        },
        (er) => {
          console.log(er);
        }
      );
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.instantiateBlocks(this.container);
    // });
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
    this.subscription.unsubscribe();
    this.store.dispatch(new ClearSchoolActivitiesRequestData({}));
  }
}
