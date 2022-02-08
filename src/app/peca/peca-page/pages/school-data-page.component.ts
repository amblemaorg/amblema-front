import {
  schoolPermissions,
  teacherPermissions,
  sectionPermissions,
  studentPermissions,
  teacherPermissionsI,
  sectionPermissionsI,
  studentPermissionsI,
  schoolPermissionsI,
} from "./../blocks/peca-permissology";
import { SetSelectedProject } from "./../../../store/actions/peca/peca.actions";
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
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserState } from "../../../store/states/e-learning/user.state";
import { gradesAndSectionsDataToSectionsFormMapper } from "../mappers/teachers-in-sections-form-mappers";
import { sectionsAndStudentsDataToSectionsFormMapper } from "../mappers/sections-and-students-form-mappers";

@Component({
  selector: "peca-school-data",
  templateUrl: "../peca-page.component.html",
})
export class SchoolDataPageComponent
  extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
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
  peca_id: string;

  currentUserId: string; // current user id on session
  requestIdToCancel: string; // if school data is in approval this holds last request id
  schoolDataStatus: number; // 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado
  permissions: any = {};

  // controlling when data from school is loaded
  isInstanciated: boolean;
  loadedData: boolean;
  teachersFormData: { hiddenButton: boolean };
  schoolFormButton: {
    action: (
      | { type: number; name: string; hidden?: undefined }
      | {
          hidden: boolean;
          type: number;
          name: string;
          margin?: string;
          direction?: string;
          removeMargin?: string;
        }
    )[];
  };

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService,
    route: ActivatedRoute,
    location: Location
  ) {
    super(factoryResolver, location, route);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );

      // if an action from a modal gets click then this view components' data don't get updated
      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
    });

    globals.blockIntancesTableRefresherEmitter.subscribe((data) => {
      if (data.tableName === "estudiantesTable") {
        this.currentStudentsGroup = data.id_string;
        this.setStudentsFormData(
          this.studentsDataTemp,
          false,
          sectionsAndStudentsDataToSectionsFormMapper,
          this.permissions
        );
        this.setBlockData("estudiantesTable", this.studentsTableData);
      }
    });

    this.instantiateComponent(config);
  }

  ngOnInit() {
    if (this.globals.isBrowser) {
      const comes_from_steps =
        (this.route.snapshot.params &&
          this.route.snapshot.params.comesFromPreviousSteps) ||
        (this.route.snapshot.children &&
          this.route.snapshot.children.length > 0 &&
          this.route.snapshot.children[this.route.snapshot.children.length - 1]
            .params &&
          this.route.snapshot.children[this.route.snapshot.children.length - 1]
            .params.comesFromPreviousSteps);

      if (comes_from_steps) this.isFromSteps = true;
      else this.isFromSteps = false;
    }

    this.schoolDataSubscription = this.schoolData$.subscribe(
      (peca) => {
        if (!isNullOrUndefined(peca)) {
          const data = {
            school: {
              ...peca.activePecaContent.school,
              id: peca.selectedProject.school.id
                ? peca.selectedProject.school.id
                : "",
              pecaId: peca.activePecaContent.id,
            },
          };
          let { permissions } = peca.user;
          if (permissions)
            this.permissions = this.managePermissions(permissions);

          if (data.school.isInApproval)
            this.setCancelRequest(data.school.approvalHistory);
          else this.unsetCancelRequest();

          this.setSchoolStatus(data.school); // sets current school status number

          this.setSchoolFormStatusData(data.school);
          this.setSchoolFormData(
            data.school,
            schoolDataToSchoolFormMapper,
            this.permissions
          );

          this.setTeachersTableData(
            data.school.teachers,
            teachersDataToTeachersTableMapper,
            this.permissions
          );

          this.setSchoolPicturesTableData(
            data.school.isInApproval
              ? data.school.approvalHistory.length > 0
                ? data.school.approvalHistory[
                    data.school.approvalHistory.length - 1
                  ].detail.slider
                : []
              : data.school.slider,
            schoolPicturesSliderDataToSchoolPicturesTableMapper
          );

          this.setGradesAndSectionsFormData(
            data.school,
            gradesAndSectionsDataToSectionsFormMapper,
            this.permissions
          );

          this.peca_id = data.school.pecaId;

          // console.log("DATA SECTIONS: ", data.school);
          this.setStudentsFormData(
            data.school.sections,
            true,
            sectionsAndStudentsDataToSectionsFormMapper,
            this.permissions
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
      // Render with new sections layout
      // School data
      this.setBlockData("schoolFormStatus", this.schoolFormStatusData); // Add Approval status text, "ver mas" button and comments to show
      this.setBlockData("schoolForm", this.schoolFormData);
      this.setBlockData("schoolFormButton", this.schoolFormButton);
      this.setBlockData("schoolPicturesTable", this.sliderPicturesData);
      // Teachers data
      this.setBlockData("teacherForm", this.teachersFormData);
      this.setBlockData("teachersTable", this.teachersTableData);
      // Grades and Sections data
      this.setBlockData(
        "gradosYSeccionesPostForm",
        this.gradesAndSectionsFormData
      );
      this.setBlockData(
        "gradosYSeccionesTable",
        this.gradesAndSectionsTableData
      );
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

  // Setting global status approval verification
  setSchoolStatus(school) {
    // this.schoolDataStatus = school.isInApproval
    //   ? 1
    //   : school.approvalHistory.length > 0
    //   ? school.approvalHistory[school.approvalHistory.length - 1].status ===
    //       "2" ||
    //     school.approvalHistory[school.approvalHistory.length - 1].status === "3"
    //     ? +school.approvalHistory[school.approvalHistory.length - 1].status
    //     : 0
    //   : 0;

    const approvalHistory = school.approvalHistory;
    const status = approvalHistory[approvalHistory.length - 1].status;

    // 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado
    this.schoolDataStatus = 1;

    if (!school.isInApproval) {
      if (approvalHistory.length === 0) {
        this.schoolDataStatus = 0;
      }

      if (approvalHistory.length > 0) {
        this.schoolDataStatus = status === "2" || "3" ? +status : 0;
      }
    }
  }

  updateStaticFetchers() {
    // send and cancel school update request
    this.setBlockFetcherUrls("schoolFormButton", {
      put: `pecaprojects/school/${this.schoolFormData.pecaId}?userId=${this.currentUserId}`,
      cancel: this.requestIdToCancel
        ? `requestscontentapproval/${this.requestIdToCancel}`
        : null,
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
        put: (teacherId) =>
          `schools/teachers/${this.schoolFormData.id}/${teacherId}`,
      },
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "teacherDeleteModal",
      {
        delete: (teacherId) =>
          `schools/teachers/${this.schoolFormData.id}/${teacherId}`,
      },
      "settings.dataFromRow.data.newData.id"
    );

    //
    // school section update and delete
    this.createAndSetBlockFetcherUrls(
      "gradesAndSectionsModalForm",
      {
        put: (sectionId) =>
          `pecaprojects/sections/${this.schoolFormData.pecaId}/${sectionId}`,
      },
      "settings.data.id"
    );

    this.createAndSetBlockFetcherUrls(
      "gradesAndSectionsDeleteModal",
      {
        delete: (sectionId) =>
          `pecaprojects/sections/${this.schoolFormData.pecaId}/${sectionId}`,
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

  setSchoolFormData(
    schoolData,
    _mapper?: Function,
    permissions?: schoolPermissionsI
  ) {
    if (_mapper) {
      this.schoolFormData = {
        ..._mapper(schoolData),
      };
      this.schoolFormButton = {
        action: [
          {
            type: 2,
            name: "Adjuntar fotos",
          },
          {
            hidden: !permissions.school_peca_edit,
            type: 4,
            name: "Enviar Solicitud",
            margin: "2",
            direction: "t",
            removeMargin: "l",
          },
        ],
      };
    } else {
      this.schoolFormData = schoolData;
    }
  }

  /**
   * @description Setting options of approval status text, actions of "ver mas" button and comments to show
   * @author Christopher Dallar Document This
   * @date 07/02/2022
   * @param {*} school
   * @memberof SchoolDataPageComponent
   */
  setSchoolFormStatusData(school) {
    const comments =
      school.approvalHistory[school.approvalHistory.length - 1].comments;
    let showComment = comments && this.schoolDataStatus ? true : false;

    this.schoolFormStatusData = {
      status: {
        text: "Estatus",
        subText: this.schoolDataStatus,
        comments: comments,
      },
      action: showComment
        ? [
            {
              type: 9,
              name: "Ver más",
            },
          ]
        : [],
    };
  }

  setTeachersTableData(
    teachersData,
    _mapper?: Function,
    permissions?: teacherPermissionsI
  ) {
    if (_mapper) {
      this.teachersFormData = {
        hiddenButton: !permissions.teacher_create,
      };
      this.teachersTableData = {
        data: _mapper(teachersData),
        isEditable: true,
        classes: {
          hideView: !permissions.teacher_view,
          hideEdit: !permissions.teacher_edit,
          hideDelete: !permissions.teacher_delete,
        },
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

  setGradesAndSectionsFormData(
    gradesAdnSectionsData,
    _mapper?: Function,
    permissions?: sectionPermissionsI & teacherPermissionsI
  ) {
    if (_mapper) {
      const mapper = _mapper(gradesAdnSectionsData);
      this.gradesAndSectionsFormData = {
        setContent: true,
        contentToSet: ["docente"],
        data: {
          docente: mapper.teachers,
        },
        hiddenButton: !permissions.section_create,
      };
      this.gradesAndSectionsTableData = {
        data: mapper.sections,
        isEditable: true,
        classes: {
          hideView: !permissions.section_view,
          hideEdit: !permissions.section_edit,
          hideDelete: !permissions.section_delete,
        },
      };
    } else {
      this.gradesAndSectionsFormData = gradesAdnSectionsData.teachers;
      this.gradesAndSectionsTableData = gradesAdnSectionsData.sections;
    }
  }

  getFetcher({ fetcher, genProps }: { fetcher: string; genProps?: string[] }) {
    const params = [...genProps];
    switch (fetcher) {
      case "post_change_students":
        return {
          method: "post",
          urlString: `students/change/section/${params[0]}`,
        };
      case "put_delete_students":
        return {
          method: "put",
          urlString: `students/change/section/${params[0]}`,
        };
    }
  }

  setStudentsFormData(
    studentsData,
    both: boolean,
    _mapper?: Function,
    permissions?: studentPermissionsI
  ) {
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
          hiddenButton: !permissions.student_create,
        };
      }

      const section_name_index = this.currentStudentsGroup
        ? mapper.sections.findIndex((s) => {
            return s.id === this.currentStudentsGroup;
          })
        : -1;

      let { theGrade, theSection, theId } = {
        ...(this.currentStudentsGroup && section_name_index >= 0
          ? {
              theGrade: mapper.sections[section_name_index].grade,
              theSection: mapper.sections[section_name_index].name,
              theId: mapper.sections[section_name_index].id,
            }
          : { theGrade: "", theSection: "", theId: "" }),
      };

      const theAllSections =
        this.currentStudentsGroup && section_name_index >= 0
          ? mapper.sections.filter(
              (s) => !(s.grade === theGrade && s.name === theSection)
            )
          : [];

      const theGrades = Object.keys(mapper.grades).map((grade) => {
        return mapper.grades[grade];
      });

      let theData = [];
      if (Array.isArray(this.currentStudentsGroup)) {
        const aux = this.currentStudentsGroup
          ? this.currentStudentsGroup.forEach((sectionId) => {
              mapper.allStudents[sectionId].forEach((student) => {
                theData.push(student);
              });
            })
          : [];
      } else {
        theData = this.currentStudentsGroup
          ? mapper.allStudents[this.currentStudentsGroup]
          : [];
      }
      if (!theSection) {
        theSection = " todas la secciones.";
      }
      // console.log("the section: ", theSection);
      // console.log("data: ", theData);
      this.studentsTableData = {
        data: theData,
        promoteData: {
          grades2P: {
            id: "grade2P",
            label: "Seleccione el grado a promover",
            items: theGrades.filter((g) =>
              theAllSections.some((s) => s.grade === g.id)
            ),
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          sections2P: {
            id: "section2P",
            label: "Seleccione la sección a promover",
            items: [],
            placeholder: "Sección",
            loadingLabel: "Cargando secciones...",
            loading: false,
          },
        },
        hasTitle: {
          ...(this.currentStudentsGroup && section_name_index >= 0
            ? {
                tableTitle: `Estudiantes de ${mapper.grades[theGrade].name}, sección ${theSection}`,
                tableTitle2: `Cantidad de estudiantes de ${mapper.grades[theGrade].name}, sección ${theSection}: ${theData.length}`,
                tableGrade: theGrade,
                tableSection: theSection,
                sectionKey: "sections",
                allSections: theAllSections,
                peca_id: this.peca_id,
                section_id: theId,
                getFetcher: (fetcher: string, ...genProps) =>
                  this.getFetcher({
                    fetcher,
                    genProps,
                  }),
              }
            : {
                tableTitle: "",
                tableTitle2: "",
                tableGrade: "",
                tableSection: "",
                sectionKey: "section",
                allSections: [],
                peca_id: "",
                section_id: "",
                getFetcher: null,
              }),
        },
        isEditable: true,
        classes: {
          hideView: !permissions.student_view,
          hideEdit: !permissions.student_edit,
          hideDelete: !permissions.student_delete,
        },
      };
    } else {
      this.studentsFormData = studentsData;
      this.studentsTableData = studentsData[0].students;
    }
    // localStorage.setItem(
    //   "stud_data",
    //   JSON.stringify(this.studentsTableData.data)
    // );
    this.studentsDataTemp = studentsData;
  }

  managePermissions(permissionsArray) {
    return [
      ...schoolPermissions.actions,
      ...teacherPermissions.actions,
      ...sectionPermissions.actions,
      ...studentPermissions.actions,
    ].reduce((permissionsObj, permission) => {
      if (permissionsArray)
        permissionsObj[permission] = permissionsArray.includes(permission);
      return permissionsObj;
    }, {});
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
    this.schoolDataSubscription.unsubscribe();
  }
}
