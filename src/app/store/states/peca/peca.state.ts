import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  SetUser,
  ClearPecaState,
  SetSelectedProject,
  FetchPecaContent,
} from '../../actions/peca/peca.actions';
import { PecaStateModel, PecaModel } from './peca.model';
import { ApiWebContentService } from 'src/app/services/web/api-web-content.service';
import { environment } from 'src/environments/environment';

@State<PecaStateModel>({
  name: 'peca',
  defaults: {
    selectedProject: null,
    content: null,
  },
})
export class PecaState {
  constructor(private apiService: ApiWebContentService) {
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

  @Action(FetchPecaContent)
  fetchPecaContent(
    { patchState, setState, getState }: StateContext<PecaStateModel>,
    { payload }: FetchPecaContent
  ) {
    this.apiService.setResourcePath('pecaprojects/' + payload);
    return this.apiService.getWebContent().subscribe((response) => {
      if (response) {
        //const prevState = getState();
        const pecaContent: PecaModel = response;
        patchState({ content: pecaContent });
        //setState({ ...prevState, content: pecaContent });
      }
    });
  }

  @Action(ClearPecaState)
  clearState({ setState }: StateContext<PecaStateModel>, {}: ClearPecaState) {
    setState({ content: null, selectedProject: null });
  }

  @Selector()
  static getUser(state: any) {
    return state.user;
  }

  @Selector()
  static getUserResume(state: any) {    
    return {
      id: state.user.id,
      type: state.user.userType
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
    return { activePecaContent: state.content };
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
        lapse3: state.content.lapse3        
      },
    };
  }

}
