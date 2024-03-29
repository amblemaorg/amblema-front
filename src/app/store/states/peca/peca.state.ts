import { UpdateStudentsMathOlympicsList } from "./../../actions/peca/peca.actions";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import {
  SetUser,
  ClearPecaState,
  SetSelectedProject,
  FetchPecaContent,
  FetchProject,
  SetUserPermissions,
  SetLapsePlanningRequestData,
  UpdateInitialWorkshop,
  UpdateLapsePlanningDateAndStatus,
  UpdateLapsePlanningFile,
  CancelLapsePlanningFile,
  SetInitialWorkshopRequestData,
  RemoveImageFromInitialWorkshopRequestData,
  AddImageToInitialWorkshopRequestData,
  ClearInitialWorkshopRequestData,
  UpdateInitialWorkshopImages,
  CancelInitialWorkshopImages,
  AddImageToSchoolActivitiesRequestData,
  RemoveImageFromSchoolActivitiesRequestData,
  ClearSchoolActivitiesRequestData,
  CancelSchoolActivitiesRequest,
  UpdateSchoolActivitiesRequest,
  RegisterStudentMathOlympics,
  UpdateStudentMathOlympics,
  RemoveStudentMathOlympics,
  AddTeacherInAnnualConvention,
  RemoveTeacherInAnnualConvention,
  SetSpecialActivityRequestData,
  UpdateSpecialActivity,
  UpdateAmblecoins,
  UpdateAmblecoinsSections,
} from "../../actions/peca/peca.actions";
import { PecaStateModel, PecaModel } from "./peca.model";
import { ApiWebContentService } from "../../../services/web/api-web-content.service";
import { environment } from "../../../../environments/environment";
import { ToastrService } from "ngx-toastr";
import { Injectable } from "@angular/core";
import { SetFalseMakingAction } from "../../yearbook/yearbook.action";

@State<PecaStateModel>({
  name: "peca",
  defaults: {
    selectedProject: null,
    content: null,
    user: null,
    userPermissions: null,
    pecaContentRequesting: false,
    lapsePlanningRequest: {
      attachedFile: "",
      meetingDate: "",
      status: "1",
    },
    initialWorkshopImagesRequest: {
      description: "",
      images: [],
    },
    schoolActivitiesImagesRequest: {
      images: [],
    },
    specialActivityRequest: {
      activityDate: "",
      total: 0,
      itemsActivities: [],
    },
  },
})
@Injectable()
export class PecaState {
  constructor(
    private apiService: ApiWebContentService,
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService
  ) {
    this.apiService.setBaseUrl(environment.baseUrl);
  }

  @Action(SetUser)
  setUser({ patchState }: StateContext<PecaStateModel>, { payload }: SetUser) {
    patchState({ user: payload });
  }

  @Action(SetSelectedProject)
  setSelectedProject(
    { patchState }: StateContext<PecaStateModel>,
    { payload }: SetSelectedProject
  ) {
    // console.log("EL PROYECTO", payload);
    patchState({ selectedProject: payload });
  }

  @Action(SetUserPermissions)
  SetUserPermissions(
    { patchState }: StateContext<PecaStateModel>,
    { payload }: SetUserPermissions
  ) {
    patchState({ userPermissions: payload });
  }

  @Action(FetchProject)
  async fetchProject(
    { patchState }: StateContext<PecaStateModel>,
    { payload }: FetchProject
  ) {
    const { projectId, schoolYearId } = payload;
    this.apiService.setResourcePath("projects/" + projectId);
    const response = await this.apiService.getWebContent().toPromise();
    if (response) {
      const activePeca = response.schoolYears.reduce(
        (prevPeca, peca) =>
          peca.schoolYear.id === schoolYearId ? peca : prevPeca,
        {}
      );
      const peca = {
        id: activePeca.pecaId,
        schoolYear: {
          id: schoolYearId,
        },
      };
      const project = {
        id: projectId,
        school: response.school ? response.school : null,
        pecas: [peca],
      };
      patchState({
        selectedProject: project,
        content: { id: activePeca.pecaId },
      });
    }
  }

  @Action(FetchPecaContent)
  async fetchPecaContent(
    { patchState }: StateContext<PecaStateModel>,
    { payload }: FetchPecaContent
  ) {
    patchState({ pecaContentRequesting: true });
    let payload_ = payload;
    const showToast = payload_.includes("[:show-toast:]");
    if (showToast) payload_ = payload_.replace("[:show-toast:]", "");
    this.apiService.setResourcePath("pecaprojects/" + payload_);
    await this.apiService.getWebContent().toPromise();
    const response = await this.apiService.getWebContent().toPromise();

    if (response) {
      const pecaContent: PecaModel = response;
      patchState({ content: pecaContent, pecaContentRequesting: false });
    }
    this.store.dispatch([new SetFalseMakingAction(showToast)]);
  }

  @Action(UpdateLapsePlanningFile)
  async updateLapsePlanning(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateLapsePlanningFile
  ) {
    const state = getState();
    const userId = state.user.id;
    const pecaId = state.content.id;
    const { file, lapseNumber } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const url = `pecaprojects/lapseplanning/${pecaId}/${lapseNumber}?userId=${userId}`;
    const formData = new FormData();
    if (file) {
      formData.append("attachedFile", file);
    }
    this.toastr.info("Guardando, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.post(url, formData).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            lapsePlanning: response,
          },
        },
      });
      this.toastr.success("Guardado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(CancelLapsePlanningFile)
  async cancelLapsePlanning(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: CancelLapsePlanningFile
  ) {
    const { content: pecaContent } = getState();
    const { lapseNumber } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const { approvalHistory } = pecaContent[lapseName].lapsePlanning;
    const lastLapsePlanningFileRequest =
      approvalHistory[approvalHistory.length - 1];
    const url = `requestscontentapproval/${lastLapsePlanningFileRequest.id}`;
    const data = {
      status: "4",
    };

    this.toastr.info("Cancelando, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.put(url, data).toPromise();
      this.store.dispatch([new FetchPecaContent(pecaContent.id)]);
      this.toastr.success("Solicitud cancelada", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateLapsePlanningDateAndStatus)
  async updateLapsePlanningDateAndStatus(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateLapsePlanningDateAndStatus
  ) {
    const state = getState();
    const userId = state.user.id;
    const pecaId = state.content.id;
    const { lapseNumber } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const url = `pecaprojects/lapseplanning/${pecaId}/${lapseNumber}?userId=${userId}`;
    const formData = new FormData();
    formData.append("meetingDate", state.lapsePlanningRequest.meetingDate);
    formData.append("status", state.lapsePlanningRequest.status);
    this.toastr.info("Guardando, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.post(url, formData).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            lapsePlanning: response,
          },
        },
      });
      this.toastr.success("Guardado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateInitialWorkshop)
  async updateInitialWorkshop(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateInitialWorkshop
  ) {
    const state = getState();
    const userId = state.user.id;
    const pecaId = state.content.id;
    const { lapseNumber, workshopPlace, workshopDate } = payload;
    const url = `pecaprojects/initialworkshop/${pecaId}/${lapseNumber}?userId=${userId}`;
    const data = {
      workshopPlace,
      workshopDate,
    };
    try {
      this.toastr.success("Guardando, espere por favor...", "", {
        positionClass: "toast-bottom-right",
      });
      const response = await this.fetcher.post(url, data).toPromise();
      this.toastr.success("Guardado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateInitialWorkshopImages)
  async updateInitialWorkshopImages(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateInitialWorkshopImages
  ) {
    const state = getState();
    const userId = state.user.id;
    const pecaId = state.content.id;
    const { lapseNumber } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const url = `pecaprojects/initialworkshop/${pecaId}/${lapseNumber}?userId=${userId}`;
    const { initialWorkshopImagesRequest } = state;
    this.toastr.info("Enviando solicitud, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher
        .post(url, initialWorkshopImagesRequest)
        .toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            initialWorkshop: response,
          },
        },
      });
      this.toastr.success("Solicitud enviada, espere por su aprobación", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(CancelInitialWorkshopImages)
  async cancelInitialWorkshopImages(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: CancelInitialWorkshopImages
  ) {
    const { content: pecaContent } = getState();
    const { lapseNumber } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const { approvalHistory } = pecaContent[lapseName].initialWorkshop;
    const lastInitialWorkshopImagesRequest =
      approvalHistory[approvalHistory.length - 1];
    const url = `requestscontentapproval/${lastInitialWorkshopImagesRequest.id}`;
    const data = {
      status: "4",
    };

    this.toastr.info("Cancelando, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.put(url, data).toPromise();
      this.store.dispatch([new FetchPecaContent(pecaContent.id)]);
      this.toastr.success("Solicitud cancelada", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateSchoolActivitiesRequest)
  async updateSchoolActivitiesImages(
    { patchState, getState }: StateContext<PecaStateModel>,
    {}: UpdateSchoolActivitiesRequest
  ) {
    const state = getState();
    const userId = state.user.id;
    const pecaId = state.content.id;
    const url = `pecaprojects/activitiesslider/${pecaId}?userId=${userId}`;
    const { schoolActivitiesImagesRequest } = state;
    const data = {
      slider: schoolActivitiesImagesRequest.images.map((image) => image.image),
    };
    this.toastr.info("Enviando solicitud, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.put(url, data).toPromise();
      patchState({
        content: {
          ...state.content,
          school: {
            ...state.content.school,
            activitiesSlider: response,
          },
        },
      });
      this.toastr.success("Solicitud enviada, espere por su aprobación", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(CancelSchoolActivitiesRequest)
  async cancelSchoolActivitiesRequest(
    { patchState, getState }: StateContext<PecaStateModel>,
    {}: CancelSchoolActivitiesRequest
  ) {
    const { content: pecaContent } = getState();
    //@ts-ignore
    const { approvalHistory } = pecaContent.school.activitiesSlider;
    const lastActivitiesImagesRequest =
      approvalHistory[approvalHistory.length - 1];
    const url = `requestscontentapproval/${lastActivitiesImagesRequest.id}`;
    const data = {
      status: "4",
    };

    this.toastr.info("Cancelando, espere por favor...", "", {
      positionClass: "toast-bottom-right",
    });
    try {
      const response = await this.fetcher.put(url, data).toPromise();
      this.store.dispatch([new FetchPecaContent(pecaContent.id)]);
      this.toastr.success("Solicitud cancelada", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(SetLapsePlanningRequestData)
  setLapsePlanningRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: SetLapsePlanningRequestData
  ) {
    const { file, date, status } = payload;
    const { lapsePlanningRequest } = getState();
    patchState({
      lapsePlanningRequest: {
        attachedFile: file ? file : lapsePlanningRequest.attachedFile,
        meetingDate: date ? date : lapsePlanningRequest.meetingDate,
        status: status ? status : lapsePlanningRequest.status,
      },
    });
  }

  @Action(SetInitialWorkshopRequestData)
  setInitialWorkshopRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: SetInitialWorkshopRequestData
  ) {
    const { description, images } = payload;
    const { initialWorkshopImagesRequest } = getState();
    patchState({
      initialWorkshopImagesRequest: {
        ...initialWorkshopImagesRequest,
        description: description
          ? description
          : initialWorkshopImagesRequest.description,
        images:
          images instanceof Array && images.length > 0
            ? images
            : initialWorkshopImagesRequest.images,
      },
    });
  }

  @Action(AddImageToInitialWorkshopRequestData)
  addImageToInitialWorkshopRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: AddImageToInitialWorkshopRequestData
  ) {
    const { initialWorkshopImagesRequest } = getState();
    const newImages = [...initialWorkshopImagesRequest.images, payload];
    patchState({
      initialWorkshopImagesRequest: {
        ...initialWorkshopImagesRequest,
        images: newImages,
      },
    });
  }

  @Action(RemoveImageFromInitialWorkshopRequestData)
  removeImageFromInitialWorkshopRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: RemoveImageFromInitialWorkshopRequestData
  ) {
    const { imageSource } = payload;
    const { initialWorkshopImagesRequest } = getState();
    const newImages = initialWorkshopImagesRequest.images.filter(
      (image) => image.image !== imageSource
    );
    patchState({
      initialWorkshopImagesRequest: {
        ...initialWorkshopImagesRequest,
        images: newImages,
      },
    });
  }

  @Action(ClearInitialWorkshopRequestData)
  clearInitialWorkshopRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: ClearInitialWorkshopRequestData
  ) {
    patchState({
      initialWorkshopImagesRequest: {
        description: "",
        images: [],
      },
    });
  }

  @Action(AddImageToSchoolActivitiesRequestData)
  addImageToSchoolActivitiesRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: AddImageToSchoolActivitiesRequestData
  ) {
    const { schoolActivitiesImagesRequest } = getState();
    const newImages = [...schoolActivitiesImagesRequest.images, payload];
    patchState({
      schoolActivitiesImagesRequest: {
        images: newImages,
      },
    });
  }

  @Action(RemoveImageFromSchoolActivitiesRequestData)
  removeImageFromSchoolActivitiesRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: RemoveImageFromSchoolActivitiesRequestData
  ) {
    const { imageSource } = payload;
    const { schoolActivitiesImagesRequest } = getState();
    const newImages = schoolActivitiesImagesRequest.images.filter(
      (image) => image.image !== imageSource
    );
    patchState({
      schoolActivitiesImagesRequest: {
        images: newImages,
      },
    });
  }

  @Action(ClearSchoolActivitiesRequestData)
  clearSchoolActivitiesRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: ClearSchoolActivitiesRequestData
  ) {
    patchState({
      schoolActivitiesImagesRequest: {
        images: [],
      },
    });
  }

  @Action(RegisterStudentMathOlympics)
  async registerStudentMathOlympics(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: RegisterStudentMathOlympics
  ) {
    const { lapseNumber, sectionId, studentId } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const state = getState();
    const pecaId = state.content.id;
    const url = `pecaprojects/olympics/${pecaId}/${lapseNumber}`;
    const data = {
      section: sectionId,
      student: studentId,
    };
    try {
      const newStudent = await this.fetcher.post(url, data).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            olympics: {
              ...state.content[lapseName].olympics,
              students: [
                ...state.content[lapseName].olympics.students,
                newStudent,
              ],
            },
          },
        },
      });
      this.toastr.success("Estudiante registrado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      // const errorMsg =
      //   message &&
      //   typeof message === "string" &&
      //   message.toLowerCase() === "invalid image format"
      //     ? "Ocurrió un problema al procesar la(s) imágen(es)"
      //     : "Ha ocurrido un error";

      if (
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
      ) {
        this.toastr.error(
          "Ocurrió un problema al procesar la(s) imágen(es)",
          "",
          {
            positionClass: "toast-bottom-right",
          }
        );
      }

      // this.toastr.error(errorMsg, "", {
      //   positionClass: "toast-bottom-right",
      // });
    }
  }

  @Action(UpdateStudentsMathOlympicsList)
  async UpdateStudentsMathOlympicsList(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateStudentsMathOlympicsList
  ) {
    const { lapseNumber, newStudents } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const state = getState();

    patchState({
      content: {
        ...state.content,
        [lapseName]: {
          ...state.content[lapseName],
          olympics: {
            ...state.content[lapseName].olympics,
            students: newStudents,
          },
        },
      },
    });
  }

  @Action(UpdateStudentMathOlympics)
  async updateStudentMathOlympics(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateStudentMathOlympics
  ) {
    const { lapseNumber, studentId, status, result } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const state = getState();
    const pecaId = state.content.id;
    const url = `pecaprojects/olympics/${pecaId}/${lapseNumber}/${studentId}`;
    const data = {
      status,
      result,
    };
    try {
      const updatedStudent = await this.fetcher.put(url, data).toPromise();
      const students = state.content[lapseName].olympics.students;
      const updatedStudents = students.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        } else {
          return student;
        }
      });

      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            olympics: {
              ...state.content[lapseName].olympics,
              students: updatedStudents,
            },
          },
        },
      });
      this.toastr.success("Estudiante actualizado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(RemoveStudentMathOlympics)
  async removeStudentMathOlympics(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: RemoveStudentMathOlympics
  ) {
    const { lapseNumber, studentId } = payload;
    const lapseName = `lapse${lapseNumber}`;
    const state = getState();
    const pecaId = state.content.id;
    const url = `pecaprojects/olympics/${pecaId}/${lapseNumber}/${studentId}`;
    try {
      const response = await this.fetcher.delete(url).toPromise();
      const students = state.content[lapseName].olympics.students;
      const updatedStudents = students.filter(
        (student) => student.id !== studentId
      );
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            olympics: {
              ...state.content[lapseName].olympics,
              students: updatedStudents,
            },
          },
        },
      });
      this.toastr.success("Estudiante eliminado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      this.toastr.error("Ha ocurrido un error", "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(AddTeacherInAnnualConvention)
  async addTeacherInAnnualConvention(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: AddTeacherInAnnualConvention
  ) {
    const { teacherId, lapseNumber } = payload;
    const state = getState();
    const lapseName = `lapse${lapseNumber}`;
    const pecaId = state.content.id;
    const url = `pecaprojects/annualpreparation/${pecaId}`;
    // @ts-ignore
    const teachersIds = state.content[lapseName].annualPreparation.teachers.map(
      ({ id }) => id
    );
    const data = {
      teachersIds: [...teachersIds, teacherId],
    };
    try {
      const response = await this.fetcher.post(url, data).toPromise();

      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            annualPreparation: {
              // @ts-ignore
              ...state.content[lapseName].annualPreparation,
              teachers: response,
            },
          },
        },
      });
      this.toastr.success("Docentes actualizados satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(RemoveTeacherInAnnualConvention)
  async removeTeacherInAnnualConvention(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: RemoveTeacherInAnnualConvention
  ) {
    const { teacherId, lapseNumber } = payload;
    const state = getState();
    const lapseName = `lapse${lapseNumber}`;
    const pecaId = state.content.id;
    const url = `pecaprojects/annualpreparation/${pecaId}`;
    // @ts-ignore
    const teachersIds = state.content[lapseName].annualPreparation.teachers.map(
      ({ id }) => id
    );
    const data = {
      teachersIds: teachersIds.filter((id) => id !== teacherId),
    };
    try {
      const response = await this.fetcher.post(url, data).toPromise();

      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            annualPreparation: {
              // @ts-ignore
              ...state.content[lapseName].annualPreparation,
              teachers: response,
            },
          },
        },
      });
      this.toastr.success("Docentes actualizados satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(SetSpecialActivityRequestData)
  setSpecialActivityRequestData(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: SetSpecialActivityRequestData
  ) {
    const { specialActivityRequest } = getState();
    patchState({
      specialActivityRequest: {
        ...specialActivityRequest,
        ...payload,
      },
    });
  }

  @Action(UpdateSpecialActivity)
  async updateSpecialActivity(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateSpecialActivity
  ) {
    const { itemsActivities, total, lapseNumber } = payload;
    const { specialActivityRequest } = getState();
    const state = getState();
    const lapseName = `lapse${lapseNumber}`;
    const userId = state.user.id;
    const pecaId = state.content.id;
    const url = `pecaprojects/specialsactivities/${pecaId}/${lapseNumber}?userId=${userId}`;
    const data = {
      ...specialActivityRequest,
      itemsActivities,
      total,
    };
    try {
      const response = await this.fetcher.post(url, data).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            specialActivity: {
              ...response,
            },
          },
        },
      });
      this.toastr.success("Solicitud enviada", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateAmblecoins)
  async updateAmblecoins(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateAmblecoins
  ) {
    const { lapseNumber } = payload;
    const state = getState();
    const lapseName = `lapse${lapseNumber}`;
    const pecaId = state.content.id;
    const url = `pecaprojects/amblecoins/${pecaId}/${lapseNumber}`;

    try {
      this.toastr.info("Guardando, por favor espere...", "", {
        positionClass: "toast-bottom-right",
      });
      const response = await this.fetcher.put(url, payload).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            ambleCoins: {
              ...response,
            },
          },
        },
      });
      this.toastr.success("Guardado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(UpdateAmblecoinsSections)
  async updateAmblecoinsSections(
    { patchState, getState }: StateContext<PecaStateModel>,
    { payload }: UpdateAmblecoinsSections
  ) {
    const { section: updatedSection, lapseNumber } = payload;
    const state = getState();
    const lapseName = `lapse${lapseNumber}`;
    const pecaId = state.content.id;
    const url = `pecaprojects/amblecoins/${pecaId}/${lapseNumber}`;
    const sections = state.content[lapseName].ambleCoins.sections.map(
      (section) => {
        if (section.id === updatedSection.id) {
          return updatedSection;
        }
        return section;
      }
    );
    try {
      this.toastr.info("Guardando, por favor espere...", "", {
        positionClass: "toast-bottom-right",
      });
      const response = await this.fetcher.put(url, { sections }).toPromise();
      patchState({
        content: {
          ...state.content,
          [lapseName]: {
            ...state.content[lapseName],
            ambleCoins: {
              ...response,
            },
          },
        },
      });
      this.toastr.success("Guardado satisfactoriamente", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(ClearPecaState)
  clearState({ setState }: StateContext<PecaStateModel>, {}: ClearPecaState) {
    setState({
      content: null,
      selectedProject: null,
      user: null,
      userPermissions: null,
      pecaContentRequesting: false,
      lapsePlanningRequest: {
        attachedFile: "",
        meetingDate: "",
        status: "1",
      },
      initialWorkshopImagesRequest: {
        description: "",
        images: [],
      },
      schoolActivitiesImagesRequest: {
        images: [],
      },
      specialActivityRequest: {
        activityDate: "",
        total: 0,
        itemsActivities: [],
      },
    });
  }

  @Selector()
  static isPecaContentRequesting(state: PecaStateModel) {
    return state.pecaContentRequesting;
  }

  @Selector()
  static getUser(state: any) {
    return state.user;
  }

  @Selector()
  static getUserPermissions(state: any) {
    return state.userPermissions;
  }

  @Selector()
  static getUserResume(state: any) {
    return {
      id: state.user.id,
      type: state.user.userType,
    };
  }

  @Selector()
  static getActivePeca(state: any) {
    const activeYearId = state.user.activeSchoolYear.id;
    const activePeca = state.selectedProject.pecas.reduce(
      (prevPeca, peca) =>
        peca.schoolYear.id === activeYearId ? peca : prevPeca,
      {}
    );
    return { activePeca };
  }

  @Selector()
  static getActivePecaContent(state: any) {
    return {
      activePecaContent: state.content,
      selectedProject: state.selectedProject,
      user: state.user,
    };
  }

  @Selector()
  static getPecaId(state: any) {
    return state.content.id;
  }

  @Selector()
  static getPecaSchoolData(state: any) {
    return {
      school: {
        ...state.content.school,
        id: state.selectedProject.school.id,
        pecaId: state.content.id,
      },
    };
  }

  @Selector()
  static getPecaSchoolPromoteData(state: any) {
    return {
      school: {
        code: state.content.school.code,
        pecaId: state.content.id,
      },
    };
  }

  @Selector()
  static getPecaLapsesData(state: any) {
    return {
      lapses: {
        pecaId: state.content.id,
        lapse1: state.content.lapse1,
        lapse2: state.content.lapse2,
        lapse3: state.content.lapse3,
      },
    };
  }
}
