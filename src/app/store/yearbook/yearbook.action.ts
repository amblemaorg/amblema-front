import { ToastrService } from "ngx-toastr";
import { State, Action, StateContext, Store, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { YearBook } from "./yearbook.model";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { FetchPecaContent } from "../actions/peca/peca.actions";

export class SetYearBook {
  static readonly type = "[YearBook] Set YearBook";
  constructor(public payload: any) {}
}

export class UpdateYearBookRequest {
  static readonly type = "[YearBook] Send Update YearBook Request";
  constructor(
    public payload: {
      pecaId: string;
      userId: string;
      section: string;
      partial: any;
      data: any;
      requestId: string;
    }
  ) {}
}

export class CancelYearBookRequest {
  static readonly type = "[YearBook] Send Cancel YearBook Request";
  constructor(public payload: any) {}
}

// export class SetHistoricalReview {
//   static readonly type = "[YearBook] Set Historical Review YearBook";
//   constructor(public payload: any) {}
// }

// export class SetSponsor {
//   static readonly type = "[YearBook] Set Sponsor YearBook";
//   constructor(public payload: any) {}
// }

// export class SetCoordinator {
//   static readonly type = "[YearBook] Set Coordinator YearBook";
//   constructor(public payload: any) {}
// }

// export class SetSchool {
//   static readonly type = "[YearBook] Set School YearBook";
//   constructor(public payload: any) {}
// }

// export class SetLapseReadingAnalysis {
//   static readonly type = "[YearBook] Set Lapse Reading Analysis YearBook";
//   constructor(public payload: { lapse: string; analysis: string }) {}
// }

// export class SetLapseMathAnalysis {
//   static readonly type = "[YearBook] Set Lapse Math Analysis YearBook";
//   constructor(public payload: { lapse: string; analysis: string }) {}
// }

// export class SetLapseLogicAnalysis {
//   static readonly type = "[YearBook] Set Lapse Logic Analysis YearBook";
//   constructor(public payload: { lapse: string; analysis: string }) {}
// }

// export class SetLapseActivity {
//   static readonly type = "[YearBook] Set Lapse Activity YearBook";
//   constructor(
//     public payload: {
//       lapse: string;
//       activityId: string;
//       description: string;
//       images: string[];
//     }
//   ) {}
// }

// export class SetSectionImage {
//   static readonly type = "[YearBook] Set Section Image YearBook";
//   constructor(
//     public payload: {
//       sectionId: string;
//       sectionGrade: string;
//       sectionName: string;
//       image: string;
//     }
//   ) {}
// }

export class ClearYearBook {
  static readonly type = "[YearBook] Clear YearBook";
  constructor() {}
}

export class SetFalseMakingAction {
  static readonly type =
    "[YearBook] Set false makingAction attribute in YearBook";
  constructor(public showToast: boolean) {}
}

@State<YearBook>({
  name: "yearbooks",
  defaults: {
    makingAction: true,
    wasSaving: true,
    // historicalReview: {
    //   image: "",
    //   content: "",
    // },
    // sponsor: {
    //   name: "",
    //   content: "",
    //   image: "",
    // },
    // school: {
    //   name: "",
    //   content: "",
    //   image: "",
    // },
    // coordinator: {
    //   name: "",
    //   content: "",
    //   image: "",
    // },
    // isInApproval: false,
    // approvalHistory: [],
    // sections: [],
    // lapse1: {
    //   activities: [],
    //   logicDiagnosticAnalysis: "",
    //   mathDiagnosticAnalysis: "",
    //   readingDiagnosticAnalysis: ""
    // },
    // lapse2: {
    //   activities: [],
    //   logicDiagnosticAnalysis: "",
    //   mathDiagnosticAnalysis: "",
    //   readingDiagnosticAnalysis: ""
    // },
    // lapse3: {
    //   activities: [],
    //   logicDiagnosticAnalysis: "",
    //   mathDiagnosticAnalysis: "",
    //   readingDiagnosticAnalysis: ""
    // },
  },
})
@Injectable()
export class YearBookState {
  constructor(
    private fetcher: HttpFetcherService,
    private store: Store,
    private toastr: ToastrService
  ) {}

  // @Selector()
  // static yearbookState(state: YearBook) {
  //   const state_ = {...state};
  //   delete state_["makingAction"];
  //   delete state_["wasSaving"];
  //   return state_;
  // }

  @Selector()
  static isMakingAction(state: YearBook) {
    return { makingAction: state.makingAction, wasSaving: state.wasSaving };
  }

  @Action(ClearYearBook)
  clearYearBook({ setState }: StateContext<YearBook>) {
    setState({
      makingAction: true,
      wasSaving: true,
      // historicalReview: {
      //   image: "",
      //   content: "",
      // },
      // sponsor: {
      //   name: "",
      //   content: "",
      //   image: "",
      // },
      // school: {
      //   name: "",
      //   content: "",
      //   image: "",
      // },
      // coordinator: {
      //   name: "",
      //   content: "",
      //   image: "",
      // },
      // isInApproval: false,
      // approvalHistory: [],
      // sections: [],
      // lapse1: {
      //   activities: [],
      //   logicDiagnosticAnalysis: "",
      //   mathDiagnosticAnalysis: "",
      //   readingDiagnosticAnalysis: ""
      // },
      // lapse2: {
      //   activities: [],
      //   logicDiagnosticAnalysis: "",
      //   mathDiagnosticAnalysis: "",
      //   readingDiagnosticAnalysis: ""
      // },
      // lapse3: {
      //   activities: [],
      //   logicDiagnosticAnalysis: "",
      //   mathDiagnosticAnalysis: "",
      //   readingDiagnosticAnalysis: ""
      // },
    });
  }

  @Action(SetYearBook)
  setYearBook(
    { patchState, getState }: StateContext<YearBook>,
    action: SetYearBook
  ) {
    // const state = getState();
    // const sections = state.sections && state.sections.length ? state.sections : [];
    // const activities = {
    //   lapse1: state.lapse1.activities && state.lapse1.activities.length ? state.lapse1.activities : [],
    //   lapse2: state.lapse2.activities && state.lapse2.activities.length ? state.lapse2.activities : [],
    //   lapse3: state.lapse3.activities && state.lapse3.activities.length ? state.lapse3.activities : []
    // };
    // const actPayl = action.payload;
    // const theSections = {};
    // sections.map( section => {
    //   theSections[section.id] = {...section};
    // });
    // if (actPayl.sections && actPayl.sections.length) {
    //   actPayl.sections.map( section_unit => {
    //     const { id: sectionId, image } = section_unit;
    //     theSections[sectionId] = {
    //       ...section_unit,
    //       image: image && image.length
    //         ? image
    //         : (theSections[sectionId] && theSections[sectionId].image && theSections[sectionId].image.length
    //             ? theSections[sectionId].image
    //             : ""
    //           )
    //     };
    //   });
    // }
    // const sections_ = Object.keys(theSections).map( section_u => theSections[section_u] );
    // const determineImgs = (imgs, savedImgs) => {
    //   const finalImgs = imgs.reduce( (theImgs, img) => {
    //     if (!theImgs.includes(img)) theImgs.push(img);
    //     return theImgs;
    //   }, [...savedImgs]);
    //   return finalImgs;
    // };
    // const theActivities = {
    //   lapse1: {},
    //   lapse2: {},
    //   lapse3: {}
    // };
    // Object.keys(activities).map( lapseActivities => {
    //   activities[lapseActivities].map( activity => {
    //     theActivities[lapseActivities][activity.id] = {...activity};
    //   });
    //   if (actPayl[lapseActivities].activities && actPayl[lapseActivities].activities.length) {
    //     actPayl[lapseActivities].activities.map( activity_unit => {
    //       const { id: activityId, images } = activity_unit;
    //       theActivities[lapseActivities][activityId] = {
    //         ...activity_unit,
    //         description: activity_unit.description &&
    //                      activity_unit.description.length
    //                       ? activity_unit.description
    //                       : (
    //                           theActivities[lapseActivities][activityId] &&
    //                           theActivities[lapseActivities][activityId].description
    //                             ? theActivities[lapseActivities][activityId].description
    //                             : ""
    //                         ),
    //         images: theActivities[lapseActivities][activityId] &&
    //                 theActivities[lapseActivities][activityId].images &&
    //                 theActivities[lapseActivities][activityId].images.length
    //                   ? (
    //                       images && images.length
    //                         ? determineImgs(images, theActivities[lapseActivities][activityId].images)
    //                         : theActivities[lapseActivities][activityId].images
    //                     )
    //                   : (images && images.length ? images : [])
    //       };
    //     });
    //   }
    // });
    // const {
    //   lapse1Activities,
    //   lapse2Activities,
    //   lapse3Activities
    // } = Object.keys(theActivities).reduce( (lapsesActivities, lapseName) => {
    //   lapsesActivities[`${lapseName}Activities`] = Object.keys(theActivities[lapseName]).map( activity_u => theActivities[lapseName][activity_u] );
    //   return lapsesActivities;
    // }, { lapse1Activities: [], lapse2Activities: [], lapse3Activities: [] });
    // const oldValues = {
    //   historicalReview: {
    //     image: actPayl.historicalReview?.image && actPayl.historicalReview?.image.length ? actPayl.historicalReview.image : state.historicalReview.image,
    //     content: actPayl.historicalReview?.content && actPayl.historicalReview?.content.length ? actPayl.historicalReview.content : state.historicalReview.content,
    //   },
    //   sponsor: {
    //     name: actPayl.sponsor?.name,
    //     content: actPayl.sponsor?.content && actPayl.sponsor?.content.length ? actPayl.sponsor.content : state.sponsor.content,
    //     image: actPayl.sponsor?.image && actPayl.sponsor?.image.length ? actPayl.sponsor.image : state.sponsor.image,
    //   },
    //   school: {
    //     name: actPayl.school?.name,
    //     content: actPayl.school?.content && actPayl.school?.content.length ? actPayl.school.content : state.school.content,
    //     image: actPayl.school?.image && actPayl.school?.image.length ? actPayl.school.image : state.school.image,
    //   },
    //   coordinator: {
    //     name: actPayl.coordinator?.name,
    //     content: actPayl.coordinator?.content && actPayl.coordinator?.content.length ? actPayl.coordinator.content : state.coordinator.content,
    //     image: actPayl.coordinator?.image && actPayl.coordinator?.image.length ? actPayl.coordinator.image : state.coordinator.image,
    //   },
    //   sections: sections_,
    //   lapse1: {
    //     activities: lapse1Activities,
    //     logicDiagnosticAnalysis: actPayl.lapse1?.logicDiagnosticAnalysis && actPayl.lapse1?.logicDiagnosticAnalysis.length ? actPayl.lapse1.logicDiagnosticAnalysis : state.lapse1.logicDiagnosticAnalysis,
    //     mathDiagnosticAnalysis: actPayl.lapse1?.mathDiagnosticAnalysis && actPayl.lapse1?.mathDiagnosticAnalysis.length ? actPayl.lapse1.mathDiagnosticAnalysis : state.lapse1.mathDiagnosticAnalysis,
    //     readingDiagnosticAnalysis: actPayl.lapse1?.readingDiagnosticAnalysis && actPayl.lapse1?.readingDiagnosticAnalysis.length ? actPayl.lapse1.readingDiagnosticAnalysis : state.lapse1.readingDiagnosticAnalysis
    //   },
    //   lapse2: {
    //     activities: lapse2Activities,
    //     logicDiagnosticAnalysis: actPayl.lapse2?.logicDiagnosticAnalysis && actPayl.lapse2?.logicDiagnosticAnalysis.length ? actPayl.lapse2.logicDiagnosticAnalysis : state.lapse2.logicDiagnosticAnalysis,
    //     mathDiagnosticAnalysis: actPayl.lapse2?.mathDiagnosticAnalysis && actPayl.lapse2?.mathDiagnosticAnalysis.length ? actPayl.lapse2.mathDiagnosticAnalysis : state.lapse2.mathDiagnosticAnalysis,
    //     readingDiagnosticAnalysis: actPayl.lapse2?.readingDiagnosticAnalysis && actPayl.lapse2?.readingDiagnosticAnalysis.length ? actPayl.lapse2.readingDiagnosticAnalysis : state.lapse2.readingDiagnosticAnalysis
    //   },
    //   lapse3: {
    //     activities: lapse3Activities,
    //     logicDiagnosticAnalysis: actPayl.lapse3?.logicDiagnosticAnalysis && actPayl.lapse3?.logicDiagnosticAnalysis.length ? actPayl.lapse3.logicDiagnosticAnalysis : state.lapse3.logicDiagnosticAnalysis,
    //     mathDiagnosticAnalysis: actPayl.lapse3?.mathDiagnosticAnalysis && actPayl.lapse3?.mathDiagnosticAnalysis.length ? actPayl.lapse3.mathDiagnosticAnalysis : state.lapse3.mathDiagnosticAnalysis,
    //     readingDiagnosticAnalysis: actPayl.lapse3?.readingDiagnosticAnalysis && actPayl.lapse3?.readingDiagnosticAnalysis.length ? actPayl.lapse3.readingDiagnosticAnalysis : state.lapse3.readingDiagnosticAnalysis
    //   },
    // };
    // patchState({ ...actPayl, ...oldValues, makingAction: state.makingAction });
  }

  @Action(SetFalseMakingAction)
  setFalseMakingAction(
    { patchState, getState }: StateContext<YearBook>,
    action: SetFalseMakingAction
  ) {
    const { wasSaving: wasItSave } = getState();
    const showToast = action.showToast;

    if (wasItSave && showToast)
      this.toastr.success("Solicitud enviada, espere por su aprobación", "", {
        positionClass: "toast-bottom-right",
        onActivateTick: true,
      });
    else if (showToast)
      this.toastr.success("Solicitud de aprobación cancelada", "", {
        positionClass: "toast-bottom-right",
        onActivateTick: true,
      });

    patchState({
      makingAction: false,
      wasSaving: true,
    });
  }

  // NEW ONE
  @Action(UpdateYearBookRequest)
  async updateYearkBookRequest(
    { patchState, getState }: StateContext<YearBook>,
    action: UpdateYearBookRequest
  ) {
    const {
      pecaId,
      userId,
      section,
      partial,
      data,
      requestId,
    } = action.payload;

    const yearBookData = {
      ...data,
      ...(requestId ? { requestId: requestId } : {}),
    };

    if (
      ["historicalReview", "sponsor", "coordinator", "school"].includes(section)
    )
      yearBookData[section] = {
        ...data[section],
        ...partial,
      };

    if (section === "sections") {
      const { sectionId, sectionGrade, sectionName, image } = partial;
      const sectionsUpdated = yearBookData.sections.map((section) => {
        const { id, grade, name } = section;
        if (
          id === sectionId ||
          (grade === sectionGrade && name === sectionName)
        ) {
          return {
            ...section,
            image,
          };
        }
        return section;
      });
      yearBookData[section] = sectionsUpdated;
    }

    if (
      [
        "readingDiagnosticAnalysis",
        "mathDiagnosticAnalysis",
        "logicDiagnosticAnalysis",
      ].includes(section)
    ) {
      const { lapse, analysis } = partial;
      const lapseName = `lapse${lapse}`;
      yearBookData[lapseName] = {
        ...data[lapseName],
        [section]: analysis,
      };
    }

    if (section === "activities") {
      const { lapse, activityId, description, images } = partial;
      const lapseName = `lapse${lapse}`;
      const lapseActivitiesUpdated = yearBookData[lapseName].activities.map(
        (activity) => {
          if (activity.id === activityId) {
            return {
              ...activity,
              description,
              images,
            };
          }
          return activity;
        }
      );
      yearBookData[lapseName] = {
        ...data[lapseName],
        [section]: lapseActivitiesUpdated,
      };
    }

    patchState({
      makingAction: true,
      wasSaving: true,
    });

    delete yearBookData.approvalHistory;
    delete yearBookData["makingAction"];
    delete yearBookData["wasSaving"];
    const url = `pecaprojects/yearbook/${pecaId}?userId=${userId}`;
    try {
      const data = await this.fetcher.post(url, yearBookData).toPromise();
      const { msgs } = data;
      if (msgs && msgs instanceof Array && msgs.length) {
        msgs.map((message) => {
          this.toastr.error(message, "", {
            positionClass: "toast-bottom-right",
            onActivateTick: true,
          });
        });
      }
      this.store.dispatch([new FetchPecaContent(`${pecaId}[:show-toast:]`)]);
    } catch (error) {
      console.error(error);
      const {
        error: { message },
      } = error;

      const errorMsg =
        message &&
        typeof message === "string" &&
        message.toLowerCase() === "invalid image format"
          ? "Ocurrió un problema al procesar la(s) imágen(es)"
          : "Ha ocurrido un error";

      patchState({
        makingAction: false,
        wasSaving: true,
      });

      this.toastr.error(errorMsg, "", {
        positionClass: "toast-bottom-right",
        onActivateTick: true,
      });
    }
  }

  // OLD ONE
  // @Action(UpdateYearBookRequest)
  // async updateYearkBookRequest({patchState, getState}: StateContext<YearBook>, action: UpdateYearBookRequest) {
  //   const { pecaId, userId } = action.payload;
  //   const yearBookData = {
  //     ...getState(),
  //   };

  //   patchState({
  //     makingAction: true,
  //   });

  //   delete yearBookData.approvalHistory;
  //   delete yearBookData["makingAction"];
  //   const url = `pecaprojects/yearbook/${pecaId}?userId=${userId}`;
  //   try {
  //     const data = await this.fetcher.post(url, yearBookData).toPromise();
  //     this.toastr.success("Solicitud enviada, espere por su aprobación", "", {
  //       positionClass: "toast-bottom-right",
  //     });
  //     this.store.dispatch([new FetchPecaContent(pecaId)]);
  //   } catch (error) {
  //     console.error(error);
  //     patchState({
  //       makingAction: false,
  //     });
  //     this.toastr.error("Ha ocurrido un error", "", {
  //       positionClass: "toast-bottom-right",
  //     });
  //   }
  // }

  // NEW ONE
  @Action(CancelYearBookRequest)
  async cancelYearkBookRequest(
    { patchState, getState }: StateContext<YearBook>,
    action: CancelYearBookRequest
  ) {
    const { approvalHistory, pecaId } = action.payload;

    patchState({
      makingAction: true,
      wasSaving: false,
    });

    const recentApprovalRequest = approvalHistory[approvalHistory.length - 1];
    const url = `requestscontentapproval/${recentApprovalRequest.id}`;
    try {
      const data = await this.fetcher
        .put(url, {
          status: "4",
        })
        .toPromise();
      this.store.dispatch([new FetchPecaContent(`${pecaId}[:show-toast:]`)]);
    } catch (error) {
      patchState({
        makingAction: false,
        wasSaving: true,
      });
      this.toastr.error("Ha ocurrido un error", "", {
        positionClass: "toast-bottom-right",
        onActivateTick: true,
      });
    }
  }

  // OLD ONE
  // @Action(CancelYearBookRequest)
  // async cancelYearkBookRequest({patchState, getState}: StateContext<YearBook>, action: CancelYearBookRequest) {
  //   const { approvalHistory } = getState();
  //   patchState({
  //     makingAction: true,
  //   });
  //   const recentApprovalRequest = approvalHistory[approvalHistory.length - 1];
  //   const url = `requestscontentapproval/${recentApprovalRequest.id}`;
  //   try {
  //     const data = await this.fetcher
  //       .put(url, {
  //         status: "4",
  //       })
  //       .toPromise();
  //     this.store.dispatch([new FetchPecaContent(action.payload.pecaId)]);
  //     this.toastr.success("Solicitud de aprobación cancelada", "", {
  //       positionClass: "toast-bottom-right",
  //     });
  //   } catch (error) {
  //     patchState({
  //       makingAction: false,
  //     });
  //     this.toastr.error("Ha ocurrido un error", "", {
  //       positionClass: "toast-bottom-right",
  //     });
  //   }
  // }

  // @Action(SetHistoricalReview)
  // setHistoricalReview({patchState, getState}: StateContext<YearBook>, action: SetHistoricalReview) {
  //   const state = getState();
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       historicalReview: {
  //         ...state.historicalReview,
  //         ...action.payload,
  //       }, // <-- Save historical review
  //     })
  //   // );
  // }

  // @Action(SetSponsor)
  // setSponsor({patchState, getState}: StateContext<YearBook>, action: SetSponsor) {
  //   const state = getState();
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       sponsor: {
  //         ...state.sponsor,
  //         ...action.payload,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetCoordinator)
  // setCoordinator({patchState, getState}: StateContext<YearBook>, action: SetCoordinator) {
  //   const state = getState();
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       coordinator: {
  //         ...state.coordinator,
  //         ...action.payload,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetSchool)
  // setSchool({patchState, getState}: StateContext<YearBook>, action: SetSchool) {
  //   const state = getState();
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       school: {
  //         ...state.school,
  //         ...action.payload,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetLapseReadingAnalysis)
  // setLapseReadingAnalysis({patchState, getState}: StateContext<YearBook>, action: SetLapseReadingAnalysis) {
  //   const state = getState();
  //   const { lapse, analysis } = action.payload;
  //   const lapseName = `lapse${lapse}`;
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       [lapseName]: {
  //         ...state[lapseName],
  //         readingDiagnosticAnalysis: analysis,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetLapseMathAnalysis)
  // setLapseMathAnalysis({patchState, getState}: StateContext<YearBook>, action: SetLapseMathAnalysis) {
  //   const state = getState();
  //   const { lapse, analysis } = action.payload;
  //   const lapseName = `lapse${lapse}`;
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       [lapseName]: {
  //         ...state[lapseName],
  //         mathDiagnosticAnalysis: analysis,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetLapseLogicAnalysis)
  // setLapseLogicAnalysis({patchState, getState}: StateContext<YearBook>, action: SetLapseLogicAnalysis) {
  //   const state = getState();
  //   const { lapse, analysis } = action.payload;
  //   const lapseName = `lapse${lapse}`;
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       [lapseName]: {
  //         ...state[lapseName],
  //         logicDiagnosticAnalysis: analysis,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetLapseActivity)
  // setLapseActivity({patchState, getState}: StateContext<YearBook>, action: SetLapseActivity) {
  //   const state = getState();
  //   const { lapse, activityId, description, images } = action.payload;
  //   const lapseName = `lapse${lapse}`;
  //   const lapseActivitiesUpdated = state[lapseName].activities.map((activity) => {
  //     if (activity.id === activityId) {
  //       return {
  //         ...activity,
  //         description,
  //         images,
  //       };
  //     }
  //     return activity;
  //   });
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       [lapseName]: {
  //         ...state[lapseName],
  //         activities: lapseActivitiesUpdated,
  //       },
  //     })
  //   // );
  // }

  // @Action(SetSectionImage)
  // setSectionImage({patchState, getState}: StateContext<YearBook>, action: SetSectionImage) {
  //   const state = getState();
  //   const { sectionId, sectionGrade, sectionName, image } = action.payload;
  //   const sectionsUpdated = state.sections.map((section) => {
  //     const { id, grade, name } = section;
  //     if (id === sectionId || (grade === sectionGrade && name === sectionName)) {
  //       return {
  //         ...section,
  //         image,
  //       };
  //     }
  //     return section;
  //   });
  //   // ctx.setState(
  //     patchState({
  //       ...state,
  //       sections: sectionsUpdated,
  //     })
  //   // );
  // }
}
