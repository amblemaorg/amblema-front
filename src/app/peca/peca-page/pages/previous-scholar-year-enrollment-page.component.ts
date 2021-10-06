import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { HttpFetcherService } from "../../../services/peca/http-fetcher.service";
import { PecaPageComponent } from "../peca-page.component";
import { previousScholarYearStudentsConfigMapper } from "./previous-scholar-year-enrollment-config";
import { first } from "rxjs/internal/operators/first";

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
  school_code: string;
  peca_id: string;
  schoolDataSubscription: Subscription;

  @Select(PecaState.getPecaSchoolPromoteData) schoolData$: Observable<any>;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private fetcher: HttpFetcherService
  ) {
    super(factoryResolver);
    this.initPage();
  }

  initPage() {
    if (!this.isInstantiating) {
      const defaultConfig = previousScholarYearStudentsConfigMapper(
        { status: 400, msg: "La escuela no tiene proyecto actual" },
        null,
        this.getFetcher
      );
      this.instantiateComponent(defaultConfig);

      this.schoolDataSubscription = this.schoolData$.subscribe(
        (activePeca) => {
          if (activePeca && activePeca.school) {
            this.school_code = activePeca.school.code;
            this.peca_id = activePeca.school.pecaId;
            const permissions = null;
            // const permissionsObj = this.managePermissions(permissions);

            const initData = this.getFetcher({
              fetcher: "get_previous_sections",
              school_code: this.school_code,
            });

            this.fetcher[initData.method](initData.urlString).subscribe(
              (res) => {
                const newConfig = previousScholarYearStudentsConfigMapper(
                  res,
                  null,
                  this.getFetcher,
                  this.school_code,
                  this.peca_id
                );
                this.instantiateComponent(newConfig);
                this.doInstantiateBlocks();
              }
            );
          }
        },
        (error) => console.error(error)
      );
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

  getFetcher({
    fetcher,
    school_code,
    peca_id,
    genProps,
  }: {
    fetcher: string;
    school_code?: string;
    peca_id?: string;
    genProps?: string[];
  }) {
    const params = genProps;
    switch (fetcher) {
      case "get_previous_sections":
        return {
          method: "get",
          urlString: `init/promote/students/${school_code}`,
        };
      case "get_students_list":
        return {
          method: "get",
          urlString: `promote/students/${school_code}/${params[0]}`,
        };
      case "post_promote_students":
        return {
          method: "post",
          urlString: `promote/students/${school_code}`,
        };
    }
  }

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
