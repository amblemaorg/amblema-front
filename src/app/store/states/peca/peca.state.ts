import { ToastrService } from "ngx-toastr";
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
} from "../../actions/peca/peca.actions";
import { PecaStateModel, PecaModel } from "./peca.model";
import { ApiWebContentService } from "../../../services/web/api-web-content.service";
import { environment } from "../../../../environments/environment";

@State<PecaStateModel>({
  name: "peca",
  defaults: {
    selectedProject: null,
    content: null,
    userPermissions: null,
    pecaContentRequesting: false,
    lapsePlanningRequest: {
      attachedFile: "",
      meetingDate: "",
      status: "1",
    },
  },
})
export class PecaState {
  constructor(
    private store: Store,
    private apiService: ApiWebContentService,
    private fetcher: HttpFetcherService,
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
  async fetchProject({ patchState }: StateContext<PecaStateModel>, { payload }: FetchProject) {
    const { projectId, schoolYearId } = payload;
    this.apiService.setResourcePath("projects/" + projectId);
    const response = await this.apiService.getWebContent().toPromise();
    if (response) {
      const activePeca = response.schoolYears.reduce(
        (prevPeca, peca) => (peca.schoolYear.id === schoolYearId ? peca : prevPeca),
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
        pecas: [peca],
      };
      patchState({
        selectedProject: project,
        content: { id: activePeca.pecaId },
      });
    }
  }

  @Action(FetchPecaContent)
  fetchPecaContent(
    { patchState, setState, getState }: StateContext<PecaStateModel>,
    { payload }: FetchPecaContent
  ) {
    patchState({ pecaContentRequesting: true });
    this.apiService.setResourcePath("pecaprojects/" + payload);
    return this.apiService.getWebContent().subscribe((response) => {
      if (response) {
        const pecaContent: PecaModel = response;
        patchState({
          pecaContentRequesting: false,
          content: pecaContent,
        });
      }
    });
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
      this.toastr.error("Ha ocurrido un error", "", {
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
    const lastLapsePlanningFileRequest = approvalHistory[approvalHistory.length - 1];
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
      this.toastr.error("Ha ocurrido un error", "", {
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
      this.toastr.error("Ha ocurrido un error", "", {
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
    const response = await this.fetcher.post(url, data).toPromise();
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
      (prevPeca, peca) => (peca.schoolYear.id === activeYearId ? peca : prevPeca),
      {}
    );
    return { activePeca };
  }

  @Selector()
  static getActivePecaContent(state: any) {
    return { activePecaContent: state.content, user: state.user };
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
