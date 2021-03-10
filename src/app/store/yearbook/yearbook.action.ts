import { ToastrService } from "ngx-toastr";
import { State, Action, StateContext, Store, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { YearBook } from "./yearbook.model";
import { patch } from "@ngxs/store/operators";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { FetchPecaContent } from "../actions/peca/peca.actions";

/**
 * @author Franklin Perdomo
 */

export class SetYearBook {
  static readonly type = "[YearBook] Set YearBook";
  constructor(public payload: any) {}
}

export class UpdateYearBookRequest {
  static readonly type = "[YearBook] Send Update YearBook Request";
  constructor(public payload: { pecaId: string; userId: string }) {}
}

export class CancelYearBookRequest {
  static readonly type = "[YearBook] Send Cancel YearBook Request";
  constructor(public payload: any) {}
}

export class SetHistoricalReview {
  static readonly type = "[YearBook] Set Historical Review YearBook";
  constructor(public payload: any) {}
}

export class SetSponsor {
  static readonly type = "[YearBook] Set Sponsor YearBook";
  constructor(public payload: any) {}
}

export class SetCoordinator {
  static readonly type = "[YearBook] Set Coordinator YearBook";
  constructor(public payload: any) {}
}

export class SetSchool {
  static readonly type = "[YearBook] Set School YearBook";
  constructor(public payload: any) {}
}

export class SetLapseReadingAnalysis {
  static readonly type = "[YearBook] Set Lapse Reading Analysis YearBook";
  constructor(public payload: { lapse: string; analysis: string }) {}
}

export class SetLapseMathAnalysis {
  static readonly type = "[YearBook] Set Lapse Math Analysis YearBook";
  constructor(public payload: { lapse: string; analysis: string }) {}
}

export class SetLapseLogicAnalysis {
  static readonly type = "[YearBook] Set Lapse Logic Analysis YearBook";
  constructor(public payload: { lapse: string; analysis: string }) {}
}

export class SetLapseActivity {
  static readonly type = "[YearBook] Set Lapse Activity YearBook";
  constructor(
    public payload: {
      lapse: string;
      activityId: string;
      description: string;
      images: string[];
    }
  ) {}
}

export class SetSectionImage {
  static readonly type = "[YearBook] Set Section Image YearBook";
  constructor(
    public payload: {
      sectionId: string;
      sectionGrade: string;
      sectionName: string;
      image: string;
    }
  ) {}
}

export class ClearYearBook {
  static readonly type = "[YearBook] Clear YearBook";
  constructor() {}
}

@State<YearBook>({
  name: "yearbooks",
  defaults: {
    historicalReview: {
      image: "",
      content: "",
    },
    sponsor: {
      name: "",
      content: "",
      image: "",
    },
    school: {
      name: "",
      content: "",
      image: "",
    },
    coordinator: {
      name: "",
      content: "",
      image: "",
    },
    isInApproval: false,
    approvalHistory: [],
    sections: [],
    lapse1: { activities: [], diagnosticAnalysis: "" },
    lapse2: { activities: [], diagnosticAnalysis: "" },
    lapse3: { activities: [], diagnosticAnalysis: "" },
  },
})
@Injectable()
export class YearBookState {
  constructor(
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService
  ) {}

  @Selector()
  static yearbookState(state: YearBook) {
    return state;
  }

  @Action(ClearYearBook)
  clearYearBook(ctx: StateContext<YearBook>) {
    ctx.setState({
      historicalReview: {
        image: "",
        content: "",
      },
      sponsor: {
        name: "",
        content: "",
        image: "",
      },
      school: {
        name: "",
        content: "",
        image: "",
      },
      coordinator: {
        name: "",
        content: "",
        image: "",
      },
      isInApproval: false,
      approvalHistory: [],
      sections: [],
      lapse1: { activities: [], diagnosticAnalysis: "" },
      lapse2: { activities: [], diagnosticAnalysis: "" },
      lapse3: { activities: [], diagnosticAnalysis: "" },
    });
  }

  @Action(SetYearBook)
  setYearBook(ctx: StateContext<YearBook>, action: SetYearBook) {
    const state = ctx.getState();
    const sections = state.sections ? state.sections : [];
    console.log("HYL", action.payload);

    const theSections = {};
    sections.map( section => {
      theSections[section.id] = {...section};
    });
    if (action.payload.sections && action.payload.sections.length) {
      action.payload.sections.map( section_unit => {
        const { id: sectionId, image } = section_unit;
        theSections[sectionId] = {
          ...section_unit,
          image: image && image.length ? image : (theSections[sectionId] ? theSections[sectionId].image : "")
        };
      });
    }

    const sections_ = Object.keys(theSections).map( section_u => theSections[section_u] );

    const oldValues = {
      historicalReview: {
        image: action.payload.historicalReview?.image ? action.payload.historicalReview.image : state.historicalReview.image,
        content: action.payload.historicalReview?.content ? action.payload.historicalReview.content : state.historicalReview.content,
      },
      sponsor: {
        name: action.payload.sponsor?.name,
        content: action.payload.sponsor?.content ? action.payload.sponsor.content : state.sponsor.content,
        image: action.payload.sponsor?.image ? action.payload.sponsor.image : state.sponsor.image,
      },
      school: {
        name: action.payload.school?.name,
        content: action.payload.school?.content ? action.payload.school.content : state.school.content,
        image: action.payload.school?.image ? action.payload.school.image : state.school.image,
      },
      coordinator: {
        name: action.payload.coordinator?.name,
        content: action.payload.coordinator?.content ? action.payload.coordinator.content : state.coordinator.content,
        image: action.payload.coordinator?.image ? action.payload.coordinator.image : state.coordinator.image,
      },
      sections: sections_,
      // lapse1: { activities: [], diagnosticAnalysis: "" },
      // lapse2: { activities: [], diagnosticAnalysis: "" },
      // lapse3: { activities: [], diagnosticAnalysis: "" },
    };
    ctx.setState({ /* sections,  */...action.payload, ...oldValues });
  }

  @Action(UpdateYearBookRequest)
  async updateYearkBookRequest(ctx: StateContext<YearBook>, action: UpdateYearBookRequest) {
    const { pecaId, userId } = action.payload;
    const yearBookData = {
      ...ctx.getState(),
    };
    delete yearBookData.approvalHistory;
    const url = `pecaprojects/yearbook/${pecaId}?userId=${userId}`;
    // console.log("yearbook data", yearBookData);
    try {
      const data = await this.fetcher.post(url, yearBookData).toPromise();
      this.toastr.success("Solicitud enviada, espere por su aprobación", "", {
        positionClass: "toast-bottom-right",
      });
      this.store.dispatch([new FetchPecaContent(pecaId)]);
    } catch (error) {
      console.error(error);
      this.toastr.error("Ha ocurrido un error", "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(CancelYearBookRequest)
  async cancelYearkBookRequest(ctx: StateContext<YearBook>, action: CancelYearBookRequest) {
    const { approvalHistory } = ctx.getState();
    const recentApprovalRequest = approvalHistory[approvalHistory.length - 1];
    const url = `requestscontentapproval/${recentApprovalRequest.id}`;
    try {
      const data = await this.fetcher
        .put(url, {
          status: "4",
        })
        .toPromise();
      this.store.dispatch([new FetchPecaContent(action.payload.pecaId)]);
      this.toastr.success("Solicitud de aprobación cancelada", "", {
        positionClass: "toast-bottom-right",
      });
    } catch (error) {
      this.toastr.error("Ha ocurrido un error", "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  @Action(SetHistoricalReview)
  setHistoricalReview(ctx: StateContext<YearBook>, action: SetHistoricalReview) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        ...state,
        historicalReview: {
          ...state.historicalReview,
          ...action.payload,
        }, // <-- Save historical review
      })
    );
  }

  @Action(SetSponsor)
  setSponsor(ctx: StateContext<YearBook>, action: SetSponsor) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        ...state,
        sponsor: {
          ...state.sponsor,
          ...action.payload,
        },
      })
    );
  }

  @Action(SetCoordinator)
  setCoordinator(ctx: StateContext<YearBook>, action: SetCoordinator) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        ...state,
        coordinator: {
          ...state.coordinator,
          ...action.payload,
        },
      })
    );
  }

  @Action(SetSchool)
  setSchool(ctx: StateContext<YearBook>, action: SetSchool) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        ...state,
        school: {
          ...state.school,
          ...action.payload,
        },
      })
    );
  }

  @Action(SetLapseReadingAnalysis)
  setLapseReadingAnalysis(ctx: StateContext<YearBook>, action: SetLapseReadingAnalysis) {
    const state = ctx.getState();
    const { lapse, analysis } = action.payload;
    const lapseName = `lapse${lapse}`;
    ctx.setState(
      patch({
        ...state,
        [lapseName]: {
          ...state[lapseName],
          readingDiagnosticAnalysis: analysis,
        },
      })
    );
  }

  @Action(SetLapseMathAnalysis)
  setLapseMathAnalysis(ctx: StateContext<YearBook>, action: SetLapseMathAnalysis) {
    const state = ctx.getState();
    const { lapse, analysis } = action.payload;
    const lapseName = `lapse${lapse}`;
    ctx.setState(
      patch({
        ...state,
        [lapseName]: {
          ...state[lapseName],
          mathDiagnosticAnalysis: analysis,
        },
      })
    );
  }

  @Action(SetLapseLogicAnalysis)
  setLapseLogicAnalysis(ctx: StateContext<YearBook>, action: SetLapseLogicAnalysis) {
    const state = ctx.getState();
    const { lapse, analysis } = action.payload;
    const lapseName = `lapse${lapse}`;
    ctx.setState(
      patch({
        ...state,
        [lapseName]: {
          ...state[lapseName],
          logicDiagnosticAnalysis: analysis,
        },
      })
    );
  }

  @Action(SetLapseActivity)
  setLapseActivity(ctx: StateContext<YearBook>, action: SetLapseActivity) {
    const state = ctx.getState();
    const { lapse, activityId, description, images } = action.payload;
    const lapseName = `lapse${lapse}`;
    const lapseActivitiesUpdated = state[lapseName].activities.map((activity) => {
      if (activity.id === activityId) {
        return {
          ...activity,
          description,
          images,
        };
      }
      return activity;
    });
    ctx.setState(
      patch({
        ...state,
        [lapseName]: {
          ...state[lapseName],
          activities: lapseActivitiesUpdated,
        },
      })
    );
  }

  @Action(SetSectionImage)
  setSectionImage(ctx: StateContext<YearBook>, action: SetSectionImage) {
    const state = ctx.getState();
    const { sectionId, sectionGrade, sectionName, image } = action.payload;
    const sectionsUpdated = state.sections.map((section) => {
      const { id, grade, name } = section;
      if (id === sectionId || (grade === sectionGrade && name === sectionName)) {
        return {
          ...section,
          image,
        };
      }
      return section;
    });
    ctx.setState(
      patch({
        ...state,
        sections: sectionsUpdated,
      })
    );
  }
}
