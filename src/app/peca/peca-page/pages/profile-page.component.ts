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

  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private httpFetcherService: HttpFetcherService
  ) {
    super(factoryResolver);
    this.getUser();
    globals.blockIntancesEmitter.subscribe(blocks => {
      blocks.forEach((block, name) => this.blockInstances.set(name, block));
      console.log(this.blockInstances);
      this.updateDataToBlocks();
    });
  }
  ngOnInit() {
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
    /*this.getGeneralInformation();
    const info = this.httpFetcherService
      .get(`users/${this.idUser}?userType=${this.userType}`)
      .subscribe(
        data => {
          console.log(data);
          this.userDataSubscription = data;
          this.setUserFormData(data, profileDataToSponsorFormMapper);
        },
        error => console.error(error),
        () => {
          info.unsubscribe();
        }
      );*/
    /////////////////
    /* this.getGeneralInformation();
    this.userDataSubscription = this.httpFetcherService
      .get(`users/${this.idUser}?userType=${this.userType}`)
      .subscribe(
        data => {
          console.log(data);
          this.setUserFormData(data, profileDataToSponsorFormMapper);
        },
        err => {
          console.log(err);
        }
      );*/
    this.getGeneralInformation();
    this.userDataSubscription = this.httpFetcherService
      .get(`users/${this.idUser}?userType=${this.userType}`)
      .subscribe(
        data => {
          console.log(data);
          if (this.userType === "4") {
            this.setUserFormData(data, profileDataToSchoolFormMapper);
          }
          if (this.userType === "3") {
            this.setUserFormData(data, profileDataToSponsorFormMapper);
          }
          if (this.userType === "2") {
            this.setUserFormData(data, profileDataToCordinatorFormMapper);
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
        this.idUser = data.id;
        this.userType = data.userType;
      },
      error => console.error(error),
      () => {
        user.unsubscribe();
      }
    );
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
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

  setUserFormData(userData, _mapper?: Function) {
    if (_mapper) {
      this.userFormData = _mapper(userData);
    } else {
      this.userFormData = userData;
    }
  }
  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }
}
