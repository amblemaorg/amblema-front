import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { annualConventionPreparationConfigMapper } from "./annual-convention-preparation-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select, Store } from "@ngxs/store";
import { GlobalService } from "src/app/services/global.service";
import { Router, NavigationEnd, Event } from "@angular/router";
import { teachersDataToTeachersTableAnnualConventionMapper } from "../mappers/teacher-mappers";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { scan } from "rxjs/internal/operators/scan";
@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPreparationPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  teachers = [];
  isInstanciated: boolean;
  isInstantiating: boolean;
  description1 = "";
  description2 = "";
  description3 = "";
  description4 = "";
  idPeca = "";
  loadedData: boolean;
  preparationInfo: any;
  UrlLapse = "";
  routerSubscription: Subscription;
  teachersData: any;
  teachersInfo: any;
  allTeachers = [];

  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router,
    private store: Store
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      if (this.loadedData) this.updateMethods();
    });

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

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].annualPreparation) ===
            JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].annualPreparation)
        ),
        scan(
          (prev, curr) => {
            let updatedTeachers = false;
            if (prev.activePecaContent) {
              const prevTeachers =
                prev.activePecaContent[`lapse${this.UrlLapse}`]["annualPreparation"]["teachers"];
              const currTeachers =
                curr.activePecaContent[`lapse${this.UrlLapse}`]["annualPreparation"]["teachers"];
              updatedTeachers = JSON.stringify(prevTeachers) !== JSON.stringify(currTeachers);
            }
            return {
              ...curr,
              updatedTeachers,
            };
          },
          { activePecaContent: null, user: null, updatedTeachers: false }
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              const config = annualConventionPreparationConfigMapper(
                data.activePecaContent,
                this.UrlLapse,
                data.updatedTeachers,
                this.store
              );
              this.instantiateComponent(config);
              this.doInstantiateBlocks();
            }
          }
        },

        (error) => console.error(error)
      );
  }

  setTeachersTableData(teachersAnnualConventionTable, _mapper?: Function) {
    if (_mapper) {
      this.teachersData = {
        data: _mapper(teachersAnnualConventionTable),
        isEditable: true,
      };
    } else {
      this.teachersData = teachersAnnualConventionTable;
    }
  }
  setPreparationData() {
    this.teachersInfo = {
      contentTeacherInfo: this.allTeachers,
    };
    this.preparationInfo = {
      text1: {
        content: this.description1,
      },
      text2: {
        content: this.description2,
      },
      text3: {
        content: this.description3,
      },
      text4: {
        content: this.description4,
      },
    };
  }
  //1
  updateDataToBlocks() {
    this.setBlockData("stepperAnnual", this.preparationInfo);
    this.setBlockData("teachersAnnualConventionTable", this.teachersData);
    this.setBlockData("teachersAnnualConventionSelect", this.teachersInfo);
  }
  //2
  updateMethods() {
    this.updateDataToBlocks();
    this.updateDynamicFetchers();
  }

  updateDynamicFetchers() {
    //Delete math modal
    this.createAndSetBlockFetcherUrls(
      "annualConventionDeleteModal",
      {
        delete: (teacherId) => `pecaprojects/annualpreparation/${this.idPeca}/${teacherId}`,
      },
      "settings.dataFromRow.data.newData.id"
    );
  }
  updateStaticFetchers() {
    this.setBlockFetcherUrls("saveButtonAnnualPreparation", {
      post: `pecaprojects/students/`,
    });
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

  ngAfterViewInit(): void {
    /*     setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    }); */
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
