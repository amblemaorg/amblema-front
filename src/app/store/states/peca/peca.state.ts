import { State, Action, StateContext, Selector } from "@ngxs/store";
import { SetUser, ClearPecaState, SetSelectedProject } from "../../actions/peca/peca.actions";
import { PecaStateModel } from "./peca.model";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";

@State<PecaStateModel>({
  name: "peca",
  defaults: {
    selectedProject: null,
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

  @Action(ClearPecaState)
  clearState({ setState }: StateContext<PecaStateModel>, {}: ClearPecaState) {
    setState({ content: {}, selectedProject: null });
  }

  @Selector()
  static getUser(state: any) {
    return state.user;
  }
}
