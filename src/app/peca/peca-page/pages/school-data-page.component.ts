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
import { schoolPicturesSliderDataToSchoolPicturesTableMapper } from "../mappers/school-prictures-slider-mappers";
import { isNullOrUndefined } from "util";
import { UserState } from 'src/app/store/states/e-learning/user.state';

@Component({
  selector: "peca-school-data",
  templateUrl: "../peca-page.component.html"
})
export class SchoolDataPageComponent extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getPecaSchoolData) schoolData$: Observable<any>;
  @Select(UserState.user_id) userId$: Observable<string>;

  schoolDataSubscription: Subscription;
  userIdSubscription: Subscription;
  
  schoolFormData: any;
  teachersTableData: any;
  sliderPicturesData: any;
  currentUserId: string;
  requestIdToCancel: string;
  
  // controlling when data from school is loaded
  isInstanciated: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      //console.log(this.blockInstances);
      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
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
          this.setSchoolPicturesTableData(
            data.school.isInApproval 
              ? (data.school.approvalHistory.length > 0 
                  ? data.school.approvalHistory[data.school.approvalHistory.length - 1]
                      .detail.slider 
                  : [] ) 
              : data.school.slider,
            schoolPicturesSliderDataToSchoolPicturesTableMapper
          );
          if (data.school.isInApproval) this.setCancelRequest(data.school.approvalHistory);
          else this.unsetCancelRequest()

          this.userIdSubscription = this.userId$.subscribe(
            user_id => {
              this.currentUserId = user_id;
              this.loadedData = true;

              if (this.isInstanciated) this.updateMethods();
            },
            error => console.error(error)
          );          
        }
        // this.updateDataToBlocks();
      },
      error => console.error(error)
    );
  }

  updateMethods(updateTables: boolean = true) {
    this.updateDataToBlocks(updateTables);
    this.updateStaticFetchers();
    this.updateDynamicFetchers();
  }

  updateDataToBlocks(updateTables: boolean) {
    this.setBlockData("schoolForm", this.schoolFormData);
    if (updateTables) {      
      this.setBlockData("teachersTable", this.teachersTableData); 
    } else
      this.sliderPicturesData['setData'] = false;    
    this.setBlockData("schoolPicturesTable", this.sliderPicturesData);
  }

  setCancelRequest(approvalHistory: any[]) {
    if (approvalHistory.length > 0)
      this.requestIdToCancel = approvalHistory[approvalHistory.length - 1].id;
  }
  unsetCancelRequest() {
    this.requestIdToCancel = null;
  }

  updateStaticFetchers() {
    this.setBlockFetcherUrls('schoolFormButton', {
      put: `pecaprojects/school/${this.schoolFormData.pecaId}?userId=${this.currentUserId}`,
      cancel: this.requestIdToCancel 
                ? `requestscontentapproval/${this.requestIdToCancel}` 
                : null,
    });

    this.setBlockFetcherUrls('teacherForm', {
      post: `schools/teachers/${this.schoolFormData.id}`,
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

  setSchoolPicturesTableData(sliderData, _mapper?: Function) {
    if (_mapper) {
      this.sliderPicturesData = {
        setData: true,
        data: _mapper(sliderData),
        isEditable: this.requestIdToCancel ? false : true,
      };
    } else {
      this.sliderPicturesData = sliderData;
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
