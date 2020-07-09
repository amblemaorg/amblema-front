import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { INITIAL_DIAGNOSTIC_CONFIG as config } from "./initial-diagnostic-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { isNullOrUndefined } from "util";
import { GlobalService } from "src/app/services/global.service";
import {
  diagnosticDataToReadingFormMapper,
  diagnosticDataToMathFormMapper
} from "../mappers/diagnostic-mapper";
@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html"
})
export class InitialDiagnosticPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  students = [];
  section = {};
  grade = "";
  response: any;
  readingData: any;
  mathData: any;
  isInstanciated: boolean;
  loadedData: boolean;
  allStudents:any;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService
  ) {
    super(factoryResolver);
    //this.instantiateComponent(config);
   globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) =>
      this.blockInstances.set(name, block));
      console.log(this.blockInstances);

      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
    }); 
  }
  ngOnInit() {
    this.getInfo();
    this.instantiateComponent(config);
  }
  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      data => {
        this.response = data.activePecaContent.school;
      console.log(this.response.sections);
       let auxStudents = [];
        for (let i = 0; i < this.response.sections.length; i++){
        this.grade = this.response.sections[i].grade;
        this.section = {
          name:this.response.sections[i].name,
          id: this.response.sections[i].id
        } 
       // console.log(this.response.sections[i].students)
        this.response.sections[i].students.forEach(student => {
          student.grade = this.grade;
          student.section = this.section;
        });
       auxStudents =  auxStudents.concat(this.response.sections[i].students) //this.response.sections[i].students; 

       

        }
        this.students = auxStudents
        console.log(this.students);
        if (!isNullOrUndefined(data)) {
         console.log("el primer estudiante es",this.students[0]);
         this.setReadingTableData(this.students, diagnosticDataToReadingFormMapper);
         this.setMathTableData (this.students, diagnosticDataToMathFormMapper);
          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }
       // console.log(this.students);
       // console.log(this.grade);
        //console.log(this.section)
       /*  
        this.students.forEach(student => {
          student.grade = this.grade;
          student.section = this.section;
          //console.log(student);
        }); */
        
        /* for (let i = 0; i < this.response.length; i++) {
          this.grade = this.response[i].grade;
          this.section = this.response[i].name;
          this.students = this.response[i].students;
        }
        this.students.forEach(student => {
          student.grade = this.grade;
          student.section = this.section;
        });
        if (!isNullOrUndefined(data)) {
          console.log(this.students);
          /*this.setReadingTableData(
            this.students,
            diagnosticDataToReadingFormMapper
          );*/
         /*  this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        } */ 
      },

      error => console.error(error)
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
        put: () =>
          `pecaprojects/diagnostics/reading/lapse1/5ed6b7e9073310fdc86ea305/"5ef66b03bf3212aa82622562"/"5ef66d66bf3212aa82622575"`
      }/*,
      "settings.data.id"*/
    );
    //Delete reading modal
    this.createAndSetBlockFetcherUrls(
      "readingDeleteModal",
      {
        delete: () =>
        `pecaprojects/diagnostics/reading/lapse1/5ed6b7e9073310fdc86ea305/"5ef66b03bf3212aa82622562"/"5ef66d66bf3212aa82622575"`
      }/* ,
      "settings.dataFromRow.data.newData.id"  */
    );  
  }
///pecaprojects/diagnostics/reading/<string:lapse>/<string:pecaId>/<string:sectionId>/<string:studentId> 

  setReadingTableData(readingTableData, _mapper?: Function) {
    if (_mapper) {
      this.readingData = {
        data: _mapper(readingTableData),
        isEditable: true
      };
      console.log("este es el mapper de lectura", this.readingData.data)
    } else {
      this.readingData = readingTableData;
    }
  }
  setMathTableData(mathTableData, _mapper?: Function) {
    if (_mapper) {
      this.mathData = {
        data: _mapper(mathTableData),
        isEditable: true
      };
      console.log("este es el mapper de matematica", this.mathData.data)
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
  }
}
