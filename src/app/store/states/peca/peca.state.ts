import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  SetUser,
  ClearPecaState,
  SetSelectedProject,
  FetchPecaContent,
} from '../../actions/peca/peca.actions';
import { PecaStateModel } from './peca.model';
import { ApiWebContentService } from 'src/app/services/web/api-web-content.service';
import { environment } from 'src/environments/environment';

@State<PecaStateModel>({
  name: 'peca',
  defaults: {
    selectedProject: null,
    content: {},
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
  fetchPecaContent({ patchState }: StateContext<PecaStateModel>, { payload }: FetchPecaContent) {
    this.apiService.setResourcePath('pecaprojects/' + payload);

    return this.apiService.getWebContent().subscribe((response) => {
      if (response) {
        const pecaContent: any = response;
        patchState({ content: pecaContent });
      }
    });
  }

  @Action(ClearPecaState)
  clearState({ setState }: StateContext<PecaStateModel>, {}: ClearPecaState) {
    setState({ content: {}, selectedProject: null });
  }

  @Selector()
  static getUser(state: any) {
    return state.user;
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
  static getPecaSchoolData(state: any) {
    return {
      school: {
        ...state.content.school,
        id: state.selectedProject.school.id,
      },
    };
  }
}
