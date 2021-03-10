import { yearbookPermissions } from './../blocks/peca-permissology';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { PecaPageComponent } from "../peca-page.component";
import { MapperYearBookWeb } from "./yearbook-config";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { amblemarioMapper } from "../mappers/amblemario-mapper";
import { PdfYearbookService } from "src/app/services/peca/pdf-yearbook.service";
import { SetYearBook, YearBookState } from "src/app/store/yearbook/yearbook.action";
import { ToastrService } from "ngx-toastr";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";

@Component({
  selector: "peca-yearbook",
  templateUrl: "../peca-page.component.html",
})
// @ts-ignore
export class YearbookPageComponent
  extends PecaPageComponent
  implements OnInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) pecaData$: Observable<any>;
  @Select(YearBookState.yearbookState) ybState$: Observable<any>;
  subscription: Subscription = new Subscription();
  ybSubscription: Subscription = new Subscription();

  pecaData: any;
  yearbookData: any;
  title: string;

  isInstantiating: boolean;

  constructor(
    private store: Store,
    toastr: ToastrService,
    factoryResolver: ComponentFactoryResolver,
    pdfYearbookService: PdfYearbookService,
  ) {
    super(factoryResolver, null, null, pdfYearbookService, toastr);
  }

  ngOnInit() {
    this.ybSubscription = this.ybState$.subscribe( ybData => {
      console.log("ybData", ybData);
      this.subscription = this.pecaData$
        .pipe(
          distinctUntilChanged(
            (prev, curr) =>
            prev && curr && prev.activePecaContent && curr.activePecaContent
              ? JSON.stringify(prev.activePecaContent.yearbook) === JSON.stringify(curr.activePecaContent.yearbook) 
              : false
          )
        )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data && data.activePecaContent) {
              // console.log("pecaData", data.activePecaContent);
              const currentYearBook = {
                ...data.activePecaContent.yearbook,
                sections: data.activePecaContent.school.sections,
                userId: data.user.id,
                pecaId: data.activePecaContent.id,
              };
              const { approvalHistory, isInApproval, pecaId, userId } = currentYearBook;
              const yearbookHasNotApprovedRequest = !isInApproval && approvalHistory.length > 0;
              const lastRequest =
                approvalHistory.length > 0 ? approvalHistory[approvalHistory.length - 1] : null;
              let currentStatus = lastRequest ? +lastRequest.status : 1;
              let newYearBook = {
                ...currentYearBook,
                status: currentStatus,
              };

              if (isInApproval || yearbookHasNotApprovedRequest) {
                const lastYearBookRequest = lastRequest.detail;

                const theSections = ybData.sections.reduce( (sections, section) => {
                  sections[section.id] = {...section};
                  return sections;
                }, {});

                // Merge data from last yearbook in approval with updated yearbook data
                newYearBook = {
                  pecaId,
                  userId,
                  status: currentStatus,
                  approvalHistory: currentYearBook.approvalHistory,
                  isInApproval: currentYearBook.isInApproval,
                  sponsor: { //todo: DONE
                    ...currentYearBook.sponsor,
                    image: (ybData.sponsor.image && ybData.sponsor.image.length ? ybData.sponsor.image : false) || lastYearBookRequest.sponsor.image,
                    content: (ybData.sponsor.content && ybData.sponsor.content.length ? ybData.sponsor.content : false) || lastYearBookRequest.sponsor.content,
                  },
                  coordinator: { //todo: DONE
                    ...currentYearBook.coordinator,
                    image: (ybData.coordinator.image && ybData.coordinator.image.length ? ybData.coordinator.image : false) || lastYearBookRequest.coordinator.image,
                    content: (ybData.coordinator.content && ybData.coordinator.content.length ? ybData.coordinator.content : false) || lastYearBookRequest.coordinator.content,
                  },
                  school: { //todo: DONE
                    ...currentYearBook.school,
                    image: (ybData.school.image && ybData.school.image.length ? ybData.school.image : false) || lastYearBookRequest.school.image,
                    content: (ybData.school.content && ybData.school.content.length ? ybData.school.content : false) || lastYearBookRequest.school.content,
                  },
                  historicalReview: { //todo: DONE
                    ...currentYearBook.historicalReview,
                    name: lastYearBookRequest.historicalReview.name,
                    image: (ybData.historicalReview.image && ybData.historicalReview.image.length ? ybData.historicalReview.image : false) || lastYearBookRequest.historicalReview.image,
                    content: (ybData.historicalReview.content && ybData.historicalReview.content.length ? ybData.historicalReview.content : false) || lastYearBookRequest.historicalReview.content,
                  },
                  lapse1: {
                    ...currentYearBook.lapse1,
                    activities: currentYearBook.lapse1.activities.map((activity) => {
                      const activityRequested = lastYearBookRequest.lapse1.activities.filter(
                        ({ id }) => activity.id === id
                      );
                      return {
                        ...activity,
                        description:
                          activityRequested.length > 0 ? activityRequested[0].description : "",
                        images: activityRequested.length > 0 ? activityRequested[0].images : [],
                      };
                    }),
                    logicDiagnosticAnalysis: lastYearBookRequest.lapse1.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis: lastYearBookRequest.lapse1.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis: lastYearBookRequest.lapse1.readingDiagnosticAnalysis,
                  },
                  lapse2: {
                    ...currentYearBook.lapse2,
                    activities: currentYearBook.lapse2.activities.map((activity) => {
                      const activityRequested = lastYearBookRequest.lapse2.activities.filter(
                        ({ id }) => activity.id === id
                      );
                      return {
                        ...activity,
                        description:
                          activityRequested.length > 0 ? activityRequested[0].description : "",
                        images: activityRequested.length > 0 ? activityRequested[0].images : [],
                      };
                    }),
                    logicDiagnosticAnalysis: lastYearBookRequest.lapse2.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis: lastYearBookRequest.lapse2.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis: lastYearBookRequest.lapse2.readingDiagnosticAnalysis,
                  },
                  lapse3: {
                    ...currentYearBook.lapse3,
                    activities: currentYearBook.lapse3.activities.map((activity) => {
                      const activityRequested = lastYearBookRequest.lapse3.activities.filter(
                        ({ id }) => activity.id === id
                      );
                      return {
                        ...activity,
                        description:
                          activityRequested.length > 0 ? activityRequested[0].description : "",
                        images: activityRequested.length > 0 ? activityRequested[0].images : [],
                      };
                    }),
                    logicDiagnosticAnalysis: lastYearBookRequest.lapse3.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis: lastYearBookRequest.lapse3.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis: lastYearBookRequest.lapse3.readingDiagnosticAnalysis,
                  },
                  //todo: DONE
                  sections: currentYearBook.sections.map((section) => {
                    const sectionRequested = lastYearBookRequest.sections.filter(
                      ({ id }) => section.id === id
                    );
                    const returnValue = sectionRequested.length > 0 ? sectionRequested[0].image : "";
                    return {
                      ...section,
                      image: (theSections[section.id] && theSections[section.id].image && theSections[section.id].image.length ? theSections[section.id].image : false) || returnValue,
                    };
                  }),
                };
              }

              const { permissions } = data.user;
              const permissionsObj = this.managePermissions(permissions)
              this.setAmblemarioData(data.activePecaContent, amblemarioMapper);
              this.setPdfData(this.pecaData);
              this.store.dispatch(new SetYearBook(newYearBook));
              const yearBookConfig = MapperYearBookWeb(newYearBook, permissionsObj, this.store);
              this.instantiateComponent(yearBookConfig);
              this.doInstantiateBlocks();
            }
          }
        },
        (error) => console.error(error)
      );
    });
  }

  setAmblemarioData(pecaData, _mapper?: Function) {
    if (_mapper) {
      this.pecaData = _mapper(pecaData);
    } else {
      this.pecaData = pecaData;
    }
  }

  managePermissions(permissionsArray) {
    return yearbookPermissions.actions.reduce(
      (permissionsObj, permission) => {
        permissionsObj[permission] = permissionsArray.includes(permission);
        return permissionsObj;
      },
      {}
    );
  }

  doInstantiateBlocks() {
    this.isInstantiating = true;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstantiating = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ybSubscription.unsubscribe();
  }

}
