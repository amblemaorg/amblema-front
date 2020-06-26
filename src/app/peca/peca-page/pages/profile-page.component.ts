import {
  Component,
  AfterViewInit,
  Injector,
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
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import {
  profileDataToSponsorFormMapper,
  profileDataToCordinatorFormMapper,
  profileDataToSchoolFormMapper
} from "../mappers/profile-mappers";
import { isNullOrUndefined } from "util";

@Component({
  selector: "peca-profile",
  templateUrl: "../peca-page.component.html"
})
export class ProfilePageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getUser) userData$: Observable<any>;
  userDataSubscription: Subscription;
  userFormData: any;
  idUser = "";
  userType = "";
  isInstanciated: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private httpFetcherService: HttpFetcherService
  ) {
    super(factoryResolver);
    //this.getUser();
    globals.blockIntancesEmitter.subscribe(blocks => {
      blocks.forEach((block, name) => this.blockInstances.set(name, block));
      console.log(this.blockInstances);
      if (this.loadedData) this.updateMethods();
    });
    //this.loadForm();
  }
  ngOnInit() {
    this.getUser();
    this.loadForm();
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
    this.getGeneralInformation();
    this.userDataSubscription = this.httpFetcherService
      .get(`users/${this.idUser}?userType=${this.userType}`)
      .subscribe(
        data => {
          if (!isNullOrUndefined(data)) {
            console.log(data);
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
            /*this.setUserFormData(data, profileDataToSponsorFormMapper);
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();*/
          }
        },
        err => {
          console.log(err);
        }
      );
  }
  getGeneralInformation() {
    const user = this.userData$.subscribe(
      data => {
        console.log(data);
        this.idUser = data.id;
        this.userType = data.userType;
      },
      error => console.error(error),
      () => {
        user.unsubscribe();
      }
    );
  }

  updateMethods() {
    this.updateDataToBlocks();
    //this.updateStaticFetchers();
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
    //this.setBlockData("userSponsorForm", this.userFormData);
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
    /* this.setBlockFetcherUrls("userSponsorForm", {
      put: `users/${this.userFormData.id}?userType=3`
    });*/
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
    this.isInstanciated = false;
    this.loadedData = false;
    this.userDataSubscription.unsubscribe();
  }
}
