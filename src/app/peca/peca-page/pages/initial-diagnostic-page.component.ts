import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { PecaPageComponent } from "../peca-page.component";
import { INITIAL_DIAGNOSTIC_CONFIG as config } from "./initial-diagnostic-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { isNullOrUndefined } from "util";
import { GlobalService } from "src/app/services/global.service";
import {
  diagnosticDataToReadingFormMapper,
  diagnosticDataToMathFormMapper,
} from "../mappers/diagnostic-mapper";
@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html",
})
export class InitialDiagnosticPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  students = [];
  section = {};
  grade = "";
  idPeca = "";
  response: any;
  readingData: any;
  mathData: any;
  isInstanciated: boolean;
  loadedData: boolean;
  allStudents: any;
  UrlLapse = "";
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
    //  console.log(this.blockInstances);

      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
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
    this.UrlLapse = this.router.url.substr(12, 1);
    this.getInfo();
  //  console.log("la ruta es;", this.UrlLapse);
  }
  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
       if (data.activePecaContent){
         // console.log("resp necesaria", data);
        this.idPeca = data.activePecaContent.id;
        this.response = data.activePecaContent.school;
      //  console.log(this.response.sections);
        let auxStudents = [];
        for (let i = 0; i < this.response.sections.length; i++) {
          this.grade = this.response.sections[i].grade;
          this.section = {
            name: this.response.sections[i].name,
            idSection: this.response.sections[i].id,
          };
        //  console.log(this.response.sections[i].students)
          this.response.sections[i].students.forEach((student) => {
            student.grade = this.grade;
            student.section = this.section;
          });
          auxStudents = auxStudents.concat(this.response.sections[i].students); 
        }
        this.students = auxStudents;
        console.log(this.students);
        if (!isNullOrUndefined(data)) {
          this.setReadingTableData(
            this.students,
            this.UrlLapse,
            diagnosticDataToReadingFormMapper
          );
          this.setMathTableData(
            this.students,
            this.UrlLapse,
            diagnosticDataToMathFormMapper
          );
          
          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }
       }
      },

      (error) => console.error(error)
    );
  }
  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateDynamicFetchers();
  }
  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("readingTable", this.readingData);
      this.setBlockData("mathTable", this.mathData);
    }
  }

  updateDynamicFetchers() {
    //Update reading modal
    this.createAndSetBlockFetcherUrls(
      "readingModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );

    //Update math modal
    this.createAndSetBlockFetcherUrls(
      "mathModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/math/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );
    //Delete reading modal
    this.createAndSetBlockFetcherUrls(
      "readingDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      }  ,
      "settings.dataFromRow.data.newData.sectionId", "settings.dataFromRow.data.newData.id"  
    );

    //Delete math modal
    this.createAndSetBlockFetcherUrls(
      "mathDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/diagnostics/math/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      }  ,
      "settings.dataFromRow.data.newData.sectionId", "settings.dataFromRow.data.newData.id"  
    );
  }

  setReadingTableData(readingTableData, number, _mapper?: Function) {
    if (_mapper) {
      this.readingData = {
        data: _mapper(readingTableData, number),
        isEditable: true,
      };
     // console.log("este es el mapper de lectura", this.readingData.data);
    } else {
      this.readingData = readingTableData;
    }
  }
  setMathTableData(mathTableData, number, _mapper?: Function) {
    if (_mapper) {
      this.mathData = {
        data: _mapper(mathTableData, number),
        isEditable: true,
      };
     // console.log("este es el mapper de matematica", this.mathData.data);
    } else {
      this.mathData = mathTableData;
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
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
