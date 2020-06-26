import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { SCHOOL_DATA_CONFIG as config } from "./school-data-config";
import { Select } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { schoolDataToSchoolFormMapper } from "../mappers/school-mappers";
import { teachersDataToTeachersTableMapper } from "../mappers/teacher-mappers";
import { isNullOrUndefined } from "util";

@Component({
  selector: "peca-school-data",
  templateUrl: "../peca-page.component.html"
})
export class SchoolDataPageComponent extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getPecaSchoolData) schoolData$: Observable<any>;
  schoolDataSubscription: Subscription;
  schoolFormData: any;
  teachersTableData: any;
  // controlling when data from school is loaded
  isInstanciated: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe(blocks => {
      blocks.forEach((block, name) => this.blockInstances.set(name, block));
      //console.log(this.blockInstances);
      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.schoolDataSubscription = this.schoolData$.subscribe(
      data => {
        if (!isNullOrUndefined(data)) {
          console.log("mostrando data de escuela");
          this.setSchoolFormData(data.school, schoolDataToSchoolFormMapper);
          this.setTeachersTableData(
            data.school.teachers,
            teachersDataToTeachersTableMapper
          );
          this.loadedData = true;

          if (this.isInstanciated) this.updateMethods();
        }
        // this.updateDataToBlocks();
      },
      error => console.error(error)
    );
  }

  updateMethods() {
    this.updateDataToBlocks();
    this.updateStaticFetchers();
    this.updateDynamicFetchers();
  }

  updateDataToBlocks() {
    this.setBlockData("schoolForm", this.schoolFormData);
    this.setBlockData("teachersTable", this.teachersTableData);
  }

  updateStaticFetchers() {
    this.setBlockFetcherUrls("teacherForm", {
      post: `schools/teachers/${this.schoolFormData.id}`
    });
  }

  updateDynamicFetchers() {
    this.createAndSetBlockFetcherUrls(
      "teacherModalForm",
      {
        put: teacherId =>
          `schools/teachers/${this.schoolFormData.id}/${teacherId}`
      },
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "teacherDeleteModal",
      {
        delete: teacherId =>
          `schools/teachers/${this.schoolFormData.id}/${teacherId}`
      },
      "settings.dataFromRow.data.newData.id"
    );
  }

  setSchoolFormData(schoolData, _mapper?: Function) {
    if (_mapper) {
      this.schoolFormData = _mapper(schoolData);
    } else {
      this.schoolFormData = schoolData;
    }
  }

  setTeachersTableData(teachersData, _mapper?: Function) {
    if (_mapper) {
      this.teachersTableData = _mapper(teachersData);
    } else {
      this.teachersTableData = teachersData;
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
    this.schoolDataSubscription.unsubscribe();
  }
}
