import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { PecaPageComponent } from "../peca-page.component";
import { previousScholarYearStudentsConfigMapper } from "./previous-scholar-year-enrollment-config";

@Component({
  selector: "peca-school-pictures",
  templateUrl: "../peca-page.component.html",
})
export class PreviousScholarYearEnrollmentPageComponent
  extends PecaPageComponent
  implements OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  isInstantiating: boolean;
  subscription: Subscription;

  constructor(factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
    this.initPage();
  }

  initPage() {
    if (!this.isInstantiating) {
      const permissions = null;
      // const permissionsObj = this.managePermissions(permissions);
      const newConfig = previousScholarYearStudentsConfigMapper({}, null);
      this.instantiateComponent(newConfig);
      this.doInstantiateBlocks();
    }
  }

  // managePermissions(permissionsArray) {
  //   return THE_PERMISSIONS.actions.reduce(
  //     (permissionsObj, permission) => {
  //       if (permissionsArray)
  //         permissionsObj[permission] = permissionsArray.includes(permission);
  //       return permissionsObj;
  //     },
  //     {}
  //   );
  // }

  doInstantiateBlocks() {
    this.isInstantiating = true;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstantiating = false;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
