import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  SetUser,
  ClearPecaState,
  SetSelectedProject,
  FetchPecaContent,
  SetUserPermissions,
} from '../../actions/peca/peca.actions';
import { PecaStateModel, PecaModel } from './peca.model';
import { ApiWebContentService } from '../../../services/web/api-web-content.service';
import { environment } from '../../../../environments/environment';

@State<PecaStateModel>({
  name: 'peca',
  defaults: {
    selectedProject: null,
    content: null,
    userPermissions: null,
    pecaContentRequesting: false,
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
  
  @Action(SetUserPermissions)
  SetUserPermissions(
    { patchState }: StateContext<PecaStateModel>,
    { payload }: SetUserPermissions
  ) {
    patchState({ userPermissions: payload });
  }

  @Action(FetchPecaContent)
  fetchPecaContent(
    { patchState, setState, getState }: StateContext<PecaStateModel>,
    { payload }: FetchPecaContent
  ) {
    patchState({ pecaContentRequesting: true });

    this.apiService.setResourcePath('pecaprojects/' + payload);
    return this.apiService.getWebContent().subscribe((response) => {
      if (response) {
        //const prevState = getState();
        const pecaContent: PecaModel = response;
        patchState({ 
          pecaContentRequesting: false,
          content: pecaContent 
        });        
        //setState({ ...prevState, content: pecaContent });
      }
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
