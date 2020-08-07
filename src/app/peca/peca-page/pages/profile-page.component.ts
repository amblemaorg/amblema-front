import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { PROFILE_CONFIG_PADRINO as configPadrino } from "./profile-config";
import { PROFILE_CONFIG_ESCUELA as configEscuela } from "./profile-config";
import { PROFILE_CONFIG_COORDINADOR as configCoordinador } from "./profile-config";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { Select } from "@ngxs/store";
import { GlobalService } from "src/app/services/global.service";
import {
  profileDataToSponsorFormMapper,
  profileDataToCordinatorFormMapper,
  profileDataToSchoolFormMapper
} from "../mappers/profile-mappers";
import { isNullOrUndefined } from "util";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common"
import { first } from "rxjs/internal/operators/first";
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: "peca-profile",
  templateUrl: "../peca-page.component.html"
})
export class ProfilePageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getUser) userData$: Observable<any>;
  @Select(PecaState.getActivePeca) actPeca$: Observable<any>;

  userDataSubscription: Subscription;
  activePecaSubs: Subscription;

  userFormData: any;
  userType = "";
  isInstanciated: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService,
    route: ActivatedRoute,
    location: Location,
  ) {
    super(factoryResolver,location,route);
    globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
      if (this.loadedData) this.updateMethods();
    });
  }
  ngOnInit() {
    this.getUser();
    this.loadForm();
    
    if (this.globals.isBrowser) {
      const comes_from_steps = (this.route.snapshot.params && this.route.snapshot.params.comesFromPreviousSteps) || 
              (
                this.route.snapshot.children && this.route.snapshot.children.length>0 && 
                this.route.snapshot.children[this.route.snapshot.children.length-1].params && 
                this.route.snapshot.children[this.route.snapshot.children.length-1].params.comesFromPreviousSteps
              );

      if (comes_from_steps) {
        this.activePecaSubs = this.actPeca$.pipe(first()).subscribe(
          (activePeca) => {
            if (activePeca) {
              const activePecaId = activePeca.activePeca.id;

              activePecaId
                ? $("nb-sidebar").removeClass("is-hidden")
                : $("nb-sidebar").addClass("is-hidden");   
            }
            else {
              $("nb-sidebar").addClass("is-hidden");
            }
          },
          error => console.error(error)
        ); 
        this.isFromSteps = true;        
      } 
      else {
        $("nb-sidebar").removeClass("is-hidden");
        this.isFromSteps = false;
      } 
    }    
  }

  loadForm() {
    if (this.userType === "4") {
      this.instantiateComponent(configEscuela);
    }
    if (this.userType === "3") {
      this.instantiateComponent(configPadrino);
    }
    if (this.userType === "2") {
      this.instantiateComponent(configCoordinador);
    }
  }
  getUser() {
    this.userDataSubscription = this.userData$.subscribe(
      data => {
        this.userType = data.userType;
        if (!isNullOrUndefined(data)) {
          if (this.userType === "4") {
            this.setUserFormData(data, profileDataToSchoolFormMapper);
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
          if (this.userType === "3") {
            this.setUserFormData(data, profileDataToSponsorFormMapper);
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
          if (this.userType === "2") {
            this.setUserFormData(data, profileDataToCordinatorFormMapper);
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        }
      },
      error => console.error(error)
    );
  }

  updateMethods() {
    this.updateDataToBlocks();
    this.updateStaticFetchers();
  }
  updateDataToBlocks() {
    if (this.userType === "4") {
      this.setBlockData("userSchoolForm", this.userFormData);
    }
    if (this.userType === "3") {
      this.setBlockData("userSponsorForm", this.userFormData);
    }
    if (this.userType === "2") {
      this.setBlockData("userCordinatorForm", this.userFormData);
    }
  }
  updateStaticFetchers() {
    if (this.userType === "4") {
      this.setBlockFetcherUrls("userSchoolForm", {
        put: `users/${this.userFormData.id}?userType=4`
      });
    }
    if (this.userType === "3") {
      this.setBlockFetcherUrls("userSponsorForm", {
        put: `users/${this.userFormData.id}?userType=3`
      });
    }
    if (this.userType === "2") {
      this.setBlockFetcherUrls("userCordinatorForm", {
        put: `users/${this.userFormData.id}?userType=2`
      });
    }
  }

  setUserFormData(userData, _mapper?: Function) {
    if (_mapper) {
      this.userFormData = _mapper(userData);
    } else {
      this.userFormData = userData;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    });
  }
  ngOnDestroy() {
    this.isFromSteps = null;
    this.isInstanciated = false;
    this.loadedData = false;
    this.userDataSubscription.unsubscribe();
  }
}
