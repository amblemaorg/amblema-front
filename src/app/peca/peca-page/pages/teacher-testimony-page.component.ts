import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { teacherTestimoniesConfigMapper } from "./teacher-testimony-config";
import { Observable, Subscription } from "rxjs";
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { teacherTestimonialPermissions } from './../blocks/peca-permissology';

@Component({
  selector: "peca-teacher-testimony",
  templateUrl: "../peca-page.component.html",
})
export class TeacherTestimonyPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  //subscripciones
  infoDataSubscription: Subscription;
  isInstantiating: boolean;
  schoolId: any;
  userId: any;

  constructor(
    factoryResolver: ComponentFactoryResolver,
  ) {
    super(factoryResolver);
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent.school.teachersTestimonials) ===
            JSON.stringify(curr.activePecaContent.school.teachersTestimonials)
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              if (!isNullOrUndefined(data)) {
                this.schoolId = data.activePecaContent.project.school.id;
                this.userId = data.user.id;
                const { permissions } = data.user;
                const permissionsObj = this.managePermissions(permissions);
                const config = teacherTestimoniesConfigMapper(
                  data.activePecaContent,
                  data.user.id,
                  permissionsObj,
                  null
                );
                this.instantiateComponent(config);
                this.doInstantiateBlocks();
            }
            }
          }
        },
        (er) => {
          console.log(er);
        }
      );
  }

  managePermissions(permissionsArray) {
    return teacherTestimonialPermissions.actions.reduce(
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
  }
}
