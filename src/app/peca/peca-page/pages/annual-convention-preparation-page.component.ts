import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { ANNUAL_CONVENTION_PREPARATION_CONFIG as config } from "./annual-convention-preparation-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
import { Router, NavigationEnd, Event } from "@angular/router";
import { teachersDataToTeachersTableAnnualConventionMapper } from '../mappers/teacher-mappers';
@Component({
  selector: "peca-annual-convention",
  templateUrl: "../peca-page.component.html",
})
export class AnnualConventionPreparationPageComponent extends PecaPageComponent
  implements AfterViewInit {
  teachers=[];
  isInstanciated: boolean;
  description1 = "";
  description2 = "";
  description3 = "";
  description4 = "";
  idPeca = "";
  loadedData: boolean;
  preparationInfo: any;
  UrlLapse = "";
  routerSubscription: Subscription;
  teachersData:any;

  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router
  ) {
    super(factoryResolver);
    //this.instantiateComponent(config);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
      console.log(this.blockInstances, "bloques");
      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);

    //To know if the url change
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
       // console.log("el ev", this.UrlLapse);
        this.getInfo();
      }
    });
  }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
         // this.teachers= data.activePecaContent.lapse1.annualPreparation.teachers;
          //console.log("esto es", data.activePecaContent.lapse1.annualPreparation.teachers)
          console.log("esto es", data.activePecaContent.school.teachers)
          this.idPeca = data.activePecaContent.id;
          if (!isNullOrUndefined(data)) {
            if (this.UrlLapse === "1") {
             this.teachers= data.activePecaContent.lapse1.annualPreparation.teachers;
              this.description1 =
                data.activePecaContent.lapse1.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse1.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse1.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse1.annualPreparation.step4Description;
            } else if (this.UrlLapse === "2") {
            this.teachers= data.activePecaContent.lapse2.annualPreparation.teachers;
              this.description1 =
                data.activePecaContent.lapse2.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse2.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse2.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse2.annualPreparation.step4Description;
            } else {
              this.teachers= data.activePecaContent.lapse3.annualPreparation.teachers;
              this.description1 =
                data.activePecaContent.lapse3.annualPreparation.step1Description;
              this.description2 =
                data.activePecaContent.lapse3.annualPreparation.step2Description;
              this.description3 =
                data.activePecaContent.lapse3.annualPreparation.step3Description;
              this.description4 =
                data.activePecaContent.lapse3.annualPreparation.step4Description;
            }
            console.log('docentes', this.teachers)
            this.setTeachersTableData(
              this.teachers,
              teachersDataToTeachersTableAnnualConventionMapper
            );
            this.setPreparationData();
            //3
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
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
      //console.log("este es el mapper de lectura", this.teachersData.data);
    } else {
      this.teachersData = teachersAnnualConventionTable;
    }
  }
  setPreparationData() {
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
        delete: (teacherId) =>
          `pecaprojects/annualpreparation/${this.idPeca}/${teacherId}`,
      },
      "settings.dataFromRow.data.newData.id"
    );
  }
  
  ///pecaprojects/annualpreparation/<string:pecaId>/<string:teacherId>
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    });
  }
  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
