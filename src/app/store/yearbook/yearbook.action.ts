import { State, Action, StateContext, Select, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { YearBook } from "./yearbook.model";

export class SetYearBook {
  static readonly type = "[YearBook] Set YearBook";
  constructor( public payload: any ) {}
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

    @Action(SetYearBook)
    setYearBook( ctx: StateContext<YearBook>, action: SetYearBook ) {
        ctx.setState( action.payload );
    }
}
