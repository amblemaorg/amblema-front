import { State, Action, StateContext, Selector } from "@ngxs/store";
import { SetIsLoadingPage } from "../../actions/web/web.actions";

export interface WebStateModel {
  isLoadingPage: Boolean;
}

@State<WebStateModel>({
  name: "web",
  defaults: {
    isLoadingPage: true,
  },
})
export class WebState {
  @Action(SetIsLoadingPage)
  setIsLoadingPage({ patchState }: StateContext<WebStateModel>, { payload }: SetIsLoadingPage) {
    patchState({ isLoadingPage: payload });
  }

  @Selector()
  static getIsLoadingPage(state: WebStateModel) {
    return state.isLoadingPage;
  }
}
