import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { SCHOOL_DATA_CONFIG as config } from "./school-data-config";
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { GlobalService } from "../../../services/global.service";
import { schoolDataToSchoolFormMapper } from "../mappers/school-mappers";
import { teachersDataToTeachersTableMapper } from "../mappers/teacher-mappers";
import { schoolPicturesSliderDataToSchoolPicturesTableMapper } from "../mappers/school-prictures-slider-mappers";
import { isNullOrUndefined } from "util";
import { UserState } from "../../../store/states/e-learning/user.state";
import { gradesAndSectionsDataToSectionsFormMapper } from "../mappers/teachers-in-sections-form-mappers";
import { sectionsAndStudentsDataToSectionsFormMapper } from "../mappers/sections-and-students-form-mappers";

@Component({
  selector: "peca-school-data",
  templateUrl: "../peca-page.component.html",
})
export class SchoolDataPageComponent
  extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getActivePecaContent) schoolData$: Observable<any>;
  @Select(UserState.user_id) userId$: Observable<string>;

  schoolDataSubscription: Subscription;
  userIdSubscription: Subscription;

  schoolFormData: any;
  schoolFormStatusData: any;
  teachersTableData: any;
  sliderPicturesData: any; // slider for school images
  gradesAndSectionsFormData: any;
  gradesAndSectionsTableData: any;
  studentsFormData: any;
  studentsTableData: any;

  currentStudentsGroup: string;
  studentsDataTemp: any;

  currentUserId: string; // current user id on session
  requestIdToCancel: string; // if school data is in approval this holds last request id
  schoolDataStatus: number; // 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado

  // controlling when data from school is loaded
  isInstanciated: boolean;
  loadedData: boolean;

  constructor(factoryResolver: ComponentFactoryResolver, globals: GlobalService) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));

      // if an action from a modal gets click then this view components' data don't get updated
      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
    });

    globals.blockIntancesTableRefresherEmitter.subscribe((data) => {
      if (data.tableName === "estudiantesTable") {
        this.currentStudentsGroup = data.id_string;

        this.setStudentsFormData(
          this.studentsDataTemp,
          false,
          sectionsAndStudentsDataToSectionsFormMapper
        );
        this.setBlockData("estudiantesTable", this.studentsTableData);
      }
    });

    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.schoolDataSubscription = this.schoolData$.subscribe(
      (peca) => {
        if (!isNullOrUndefined(peca)) {
          console.log(peca, "mostrando data de escuela");
          const data = {
            school: {
              ...peca.activePecaContent.school,
              pecaId: peca.activePecaContent.id,
            },
          };

          if (data.school.isInApproval) this.setCancelRequest(data.school.approvalHistory);
          else this.unsetCancelRequest();

          this.setSchoolStatus(data.school); // sets current school status number

          this.setSchoolFormStatusData();
          this.setSchoolFormData(data.school, schoolDataToSchoolFormMapper);

          this.setTeachersTableData(data.school.teachers, teachersDataToTeachersTableMapper);

          this.setSchoolPicturesTableData(
            data.school.isInApproval
              ? data.school.approvalHistory.length > 0
                ? data.school.approvalHistory[data.school.approvalHistory.length - 1].detail.slider
                : []
              : data.school.slider,
            schoolPicturesSliderDataToSchoolPicturesTableMapper
          );

          this.setGradesAndSectionsFormData(data.school, gradesAndSectionsDataToSectionsFormMapper);

          this.setStudentsFormData(
            data.school.sections,
            true,
            sectionsAndStudentsDataToSectionsFormMapper
          );

          this.userIdSubscription = this.userId$.subscribe(
            (user_id) => {
              this.currentUserId = user_id;
              this.loadedData = true;

              if (this.isInstanciated) this.updateMethods();
            },
            (error) => console.error(error)
          );
        }
        // this.updateDataToBlocks();
      },
      (error) => console.error(error)
    );
  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateStaticFetchers();
    this.updateDynamicFetchers();
  }

  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      // School data
      this.setBlockData("schoolFormStatus", this.schoolFormStatusData);
      this.setBlockData("schoolForm", this.schoolFormData);
      this.setBlockData("schoolPicturesTable", this.sliderPicturesData);
      // Teachers data
      this.setBlockData("teachersTable", this.teachersTableData);
      // Grades and Sections data
      this.setBlockData("gradosYSeccionesPostForm", this.gradesAndSectionsFormData);
      this.setBlockData("gradosYSeccionesTable", this.gradesAndSectionsTableData);
      //Students data
      this.setBlockData("estudiantesPostForm", this.studentsFormData);
      this.setBlockData("estudiantesTable", this.studentsTableData);
    }
  }

  setCancelRequest(approvalHistory: any[]) {
    if (approvalHistory.length > 0)
      this.requestIdToCancel = approvalHistory[approvalHistory.length - 1].id;
  }
  unsetCancelRequest() {
    this.requestIdToCancel = null;
  }

  setSchoolStatus(school) {
    // 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado
    this.schoolDataStatus = school.isInApproval
      ? 1
      : school.approvalHistory.length > 0
      ? school.approvalHistory[school.approvalHistory.length - 1].status === "2" ||
        school.approvalHistory[school.approvalHistory.length - 1].status === "3"
        ? +school.approvalHistory[school.approvalHistory.length - 1].status
        : 0
      : 0;
    // this.schoolDataStatus = school.isInApproval ? 1 : 0;
  }

  updateStaticFetchers() {
    // send and cancel school update request
    this.setBlockFetcherUrls("schoolFormButton", {
      put: `pecaprojects/school/${this.schoolFormData.pecaId}?userId=${this.currentUserId}`,
      cancel: this.requestIdToCancel ? `requestscontentapproval/${this.requestIdToCancel}` : null,
    });

    // create school teacher
    this.setBlockFetcherUrls("teacherForm", {
      post: `schools/teachers/${this.schoolFormData.id}`,
    });

    // create school section
    this.setBlockFetcherUrls("gradosYSeccionesPostForm", {
      post: `pecaprojects/sections/${this.schoolFormData.pecaId}`,
    });

    // create school student
    this.setBlockFetcherUrls("estudiantesPostForm", {
      post: `pecaprojects/students/${this.schoolFormData.pecaId}`,
    });
  }

  updateDynamicFetchers() {
    // school teacher update and delete
    this.createAndSetBlockFetcherUrls(
      "teacherModalForm",
      {
        put: (teacherId) => `schools/teachers/${this.schoolFormData.id}/${teacherId}`,
      },
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "teacherDeleteModal",
      {
        delete: (teacherId) => `schools/teachers/${this.schoolFormData.id}/${teacherId}`,
      },
      "settings.dataFromRow.data.newData.id"
    );

    //
    // school section update and delete
    this.createAndSetBlockFetcherUrls(
      "gradesAndSectionsModalForm",
      {
        put: (sectionId) => `pecaprojects/sections/${this.schoolFormData.pecaId}/${sectionId}`,
      },
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "gradesAndSectionsDeleteModal",
      {
        delete: (sectionId) => `pecaprojects/sections/${this.schoolFormData.pecaId}/${sectionId}`,
      },
      "settings.dataFromRow.data.newData.id"
    );

    //
    // school student update and delete
    this.createAndSetBlockFetcherUrls(
      "estudiantesModalForm",
      {
        put: (sectionId, studentId) =>
          `pecaprojects/students/${this.schoolFormData.pecaId}/${sectionId}/${studentId}`,
      },
      "settings.data.section",
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "estudiantesDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/students/${this.schoolFormData.pecaId}/${sectionId}/${studentId}`,
      },
      "settings.dataFromRow.data.newData.section",
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

  setSchoolFormStatusData() {
    this.schoolFormStatusData = {
      status: {
        text: "Estatus",
        subText: this.schoolDataStatus,
      },
    };
  }

  setTeachersTableData(teachersData, _mapper?: Function) {
    if (_mapper) {
      this.teachersTableData = {
        data: _mapper(teachersData),
        isEditable: true,
      };
    } else {
      this.teachersTableData = teachersData;
    }
  }

  setSchoolPicturesTableData(sliderData, _mapper?: Function) {
    if (_mapper) {
      this.sliderPicturesData = {
        data: _mapper(sliderData),
        isEditable: this.requestIdToCancel ? false : true,
      };
    } else {
      this.sliderPicturesData = sliderData;
    }
  }

  setGradesAndSectionsFormData(gradesAdnSectionsData, _mapper?: Function) {
    if (_mapper) {
      const mapper = _mapper(gradesAdnSectionsData);
      this.gradesAndSectionsFormData = {
        setContent: true,
        contentToSet: ["docente"],
        data: {
          docente: mapper.teachers,
        },
      };
      this.gradesAndSectionsTableData = {
        data: mapper.sections,
        isEditable: true,
      };
    } else {
      this.gradesAndSectionsFormData = gradesAdnSectionsData.teachers;
      this.gradesAndSectionsTableData = gradesAdnSectionsData.sections;
    }
  }

  setStudentsFormData(studentsData, both: boolean, _mapper?: Function) {
    if (_mapper) {
      const mapper = _mapper(studentsData);

      if (both) {
        this.studentsFormData = {
          setContent: true,
          contentToSet: ["section", "grades"],
          data: {
            section: mapper.sections,
            grades: Object.keys(mapper.grades).map((grade) => {
              return mapper.grades[grade];
            }),
          },
        };
      }

      const section_name_index = this.currentStudentsGroup
        ? mapper.sections.findIndex((s) => {
            return s.id === this.currentStudentsGroup;
          })
        : -1;

      this.studentsTableData = {
        data: this.currentStudentsGroup ? mapper.allStudents[this.currentStudentsGroup] : [],
        hasTitle: {
          tableTitle: this.currentStudentsGroup
            ? section_name_index >= 0
              ? `Estudiantes de ${
                  mapper.grades[mapper.sections[section_name_index].grade].name
                }, sección ${mapper.sections[section_name_index].name}`
              : ""
            : "",
        },
        isEditable: true,
      };
    } else {
      this.studentsFormData = studentsData;
      this.studentsTableData = studentsData[0].students;
    }

    this.studentsDataTemp = studentsData;
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
