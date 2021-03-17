import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { SetIsLoadingPage } from "../../actions/web/web.actions";

export interface WebStateModel {
  isLoadingPage: Boolean;
  schoolMarkersLoading: Boolean;
}

@State<WebStateModel>({
  name: "web",
  defaults: {
    isLoadingPage: true,
    schoolMarkersLoading: false,
  },
})
@Injectable()
export class WebState {
  @Action(SetIsLoadingPage)
  setIsLoadingPage({ patchState }: StateContext<WebStateModel>, { payload }: SetIsLoadingPage) {
    if (typeof payload === "boolean") patchState({ isLoadingPage: payload });  
    else patchState({ schoolMarkersLoading: payload === "true" });
  }

  @Selector()
  static getIsLoadingPage(state: WebStateModel) {
    return state.isLoadingPage;
  }

  @Selector()
  static getIsLoadingSchoolMarkers(state: WebStateModel) {
    return state.schoolMarkersLoading;
  }
}
