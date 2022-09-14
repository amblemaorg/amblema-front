import { yearbookPermissions } from './../blocks/peca-permissology';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PecaPageComponent } from '../peca-page.component';
import { MapperYearBookWeb } from './yearbook-config';
import { PecaState } from '../../../store/states/peca/peca.state';
import { Observable, Subscription } from 'rxjs';
import { amblemarioMapper } from '../mappers/amblemario-mapper';
import { PdfYearbookService } from 'src/app/services/peca/pdf-yearbook.service';
import {
  SetYearBook,
  YearBookState,
} from 'src/app/store/yearbook/yearbook.action';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
// import { SetFalseMakingAction } from "../../../store/yearbook/yearbook.action";

@Component({
  selector: 'peca-yearbook',
  templateUrl: '../peca-page.component.html',
})
// @ts-ignore
export class YearbookPageComponent extends PecaPageComponent
  implements OnInit, OnDestroy {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Select(PecaState.getActivePecaContent) pecaData$: Observable<any>;
  // @Select(YearBookState.yearbookState) ybState$: Observable<any>;
  ybData: any;
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
    // this.ybSubscription = this.ybState$.subscribe( ybData_ => {
    //   this.ybData = ybData_;
    // });

    this.subscription = this.pecaData$
      .pipe(
        distinctUntilChanged((prev, curr) =>
          prev && curr && prev.activePecaContent && curr.activePecaContent
            ? JSON.stringify(prev.activePecaContent.yearbook) ===
              JSON.stringify(curr.activePecaContent.yearbook)
            : false,
        ),
      )
      .subscribe(
        async (data) => {
          // console.log("DATAAA: ", data);
          if (!this.isInstantiating) {
            if (data && data.activePecaContent) {
              // console.log('YearbookPageComponent', data);

              // this.store.dispatch(new SetFalseMakingAction());
              const currentYearBook = {
                ...data.activePecaContent.yearbook,
                sections: data.activePecaContent.school.sections,
                userId: data.user.id,
                pecaId: data.activePecaContent.id,
              };
              const {
                approvalHistory,
                isInApproval,
                pecaId,
                userId,
              } = currentYearBook;
              const yearbookHasNotApprovedRequest =
                !isInApproval && approvalHistory.length > 0;
              const lastRequest =
                approvalHistory.length > 0
                  ? approvalHistory[approvalHistory.length - 1]
                  : null;
              let currentStatus = lastRequest ? +lastRequest.status : 1;
              let comments = lastRequest ? lastRequest.comments : null;
              let newYearBook = {
                ...currentYearBook,
                status: currentStatus,
                comments,
              };

              if (isInApproval || yearbookHasNotApprovedRequest) {
                const lastYearBookRequest = lastRequest.detail;

                // const theSections = this.ybData ? this.ybData.sections.reduce( (sections, section) => {
                //   sections[section.id] = {...section};
                //   return sections;
                // }, {}) : {};

                // const {
                //   lapse1Activities,
                //   lapse2Activities,
                //   lapse3Activities
                // } = this.ybData ? [
                //   "lapse1",
                //   "lapse2",
                //   "lapse3"
                // ].reduce( (lapsesActivities, lapseName) => {
                //   this.ybData[lapseName].activities.map( activity => {
                //     lapsesActivities[`${lapseName}Activities`][activity.id] = {...activity};
                //   });
                //   return lapsesActivities;
                // }, { lapse1Activities: {}, lapse2Activities: {}, lapse3Activities: {} })
                // : { lapse1Activities: {}, lapse2Activities: {}, lapse3Activities: {} };

                // const determineImgs = (imgs, savedImgs) => {
                //   const finalImgs = imgs.reduce( (theImgs, img) => {
                //     if (!theImgs.includes(img)) theImgs.push(img);
                //     return theImgs;
                //   }, [...savedImgs]);
                //   return finalImgs;
                // };

                // Merge data from last yearbook in approval with updated yearbook data
                newYearBook = {
                  pecaId,
                  userId,
                  status: currentStatus,
                  comments: comments,
                  approvalHistory: currentYearBook.approvalHistory,
                  isInApproval: currentYearBook.isInApproval,
                  sponsor: {
                    ...currentYearBook.sponsor,
                    image:
                      /* (this.ybData && this.ybData.sponsor.image && this.ybData.sponsor.image.length ? this.ybData.sponsor.image : false) ||  */ lastYearBookRequest
                        .sponsor.image,
                    content:
                      /* (this.ybData && this.ybData.sponsor.content && this.ybData.sponsor.content.length ? this.ybData.sponsor.content : false) ||  */ lastYearBookRequest
                        .sponsor.content,
                  },
                  coordinator: {
                    ...currentYearBook.coordinator,
                    image:
                      /* (this.ybData && this.ybData.coordinator.image && this.ybData.coordinator.image.length ? this.ybData.coordinator.image : false) ||  */ lastYearBookRequest
                        .coordinator.image,
                    content:
                      /* (this.ybData && this.ybData.coordinator.content && this.ybData.coordinator.content.length ? this.ybData.coordinator.content : false) ||  */ lastYearBookRequest
                        .coordinator.content,
                  },
                  school: {
                    ...currentYearBook.school,
                    image:
                      /* (this.ybData && this.ybData.school.image && this.ybData.school.image.length ? this.ybData.school.image : false) ||  */ lastYearBookRequest
                        .school.image,
                    content:
                      /* (this.ybData && this.ybData.school.content && this.ybData.school.content.length ? this.ybData.school.content : false) ||  */ lastYearBookRequest
                        .school.content,
                  },
                  historicalReview: {
                    ...currentYearBook.historicalReview,
                    name: lastYearBookRequest.historicalReview.name,
                    image:
                      /* (this.ybData && this.ybData.historicalReview.image && this.ybData.historicalReview.image.length ? this.ybData.historicalReview.image : false) ||  */ lastYearBookRequest
                        .historicalReview.image,
                    content:
                      /* (this.ybData && this.ybData.historicalReview.content && this.ybData.historicalReview.content.length ? this.ybData.historicalReview.content : false) ||  */ lastYearBookRequest
                        .historicalReview.content,
                  },
                  lapse1: {
                    ...currentYearBook.lapse1,
                    activities: currentYearBook.lapse1.activities.map(
                      (activity) => {
                        const activityRequested = lastYearBookRequest.lapse1.activities.filter(
                          ({ id }) => activity.id === id,
                        );

                        const descriptionReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].description
                            : '';
                        const imagesReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].images
                            : [];

                        return {
                          ...activity,
                          description: /* (this.ybData && lapse1Activities[activity.id] && lapse1Activities[activity.id].description && lapse1Activities[activity.id].description.length ? lapse1Activities[activity.id].description : false)
                          ||  */ descriptionReturnValue,
                          images: /* (this.ybData && lapse1Activities[activity.id] && lapse1Activities[activity.id].images && lapse1Activities[activity.id].images.length ? determineImgs(imagesReturnValue, lapse1Activities[activity.id].images) : false)
                          ||  */ imagesReturnValue,
                        };
                      },
                    ),
                    logicDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse1.logicDiagnosticAnalysis && this.ybData.lapse1.logicDiagnosticAnalysis.length ? this.ybData.lapse1.logicDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse1.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse1.mathDiagnosticAnalysis && this.ybData.lapse1.mathDiagnosticAnalysis.length ? this.ybData.lapse1.mathDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse1.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse1.readingDiagnosticAnalysis && this.ybData.lapse1.readingDiagnosticAnalysis.length ? this.ybData.lapse1.readingDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse1.readingDiagnosticAnalysis,
                  },
                  lapse2: {
                    ...currentYearBook.lapse2,
                    activities: currentYearBook.lapse2.activities.map(
                      (activity) => {
                        const activityRequested = lastYearBookRequest.lapse2.activities.filter(
                          ({ id }) => activity.id === id,
                        );

                        const descriptionReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].description
                            : '';
                        const imagesReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].images
                            : [];

                        return {
                          ...activity,
                          description: /* (this.ybData && lapse2Activities[activity.id] && lapse2Activities[activity.id].description && lapse2Activities[activity.id].description.length ? lapse2Activities[activity.id].description : false)
                          ||  */ descriptionReturnValue,
                          images: /* (this.ybData && lapse2Activities[activity.id] && lapse2Activities[activity.id].images && lapse2Activities[activity.id].images.length ? determineImgs(imagesReturnValue, lapse2Activities[activity.id].images) : false)
                          ||  */ imagesReturnValue,
                        };
                      },
                    ),
                    logicDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse2.logicDiagnosticAnalysis && this.ybData.lapse2.logicDiagnosticAnalysis.length ? this.ybData.lapse2.logicDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse2.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse2.mathDiagnosticAnalysis && this.ybData.lapse2.mathDiagnosticAnalysis.length ? this.ybData.lapse2.mathDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse2.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse2.readingDiagnosticAnalysis && this.ybData.lapse2.readingDiagnosticAnalysis.length ? this.ybData.lapse2.readingDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse2.readingDiagnosticAnalysis,
                  },
                  lapse3: {
                    ...currentYearBook.lapse3,
                    activities: currentYearBook.lapse3.activities.map(
                      (activity) => {
                        const activityRequested = lastYearBookRequest.lapse3.activities.filter(
                          ({ id }) => activity.id === id,
                        );

                        const descriptionReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].description
                            : '';
                        const imagesReturnValue =
                          activityRequested.length > 0
                            ? activityRequested[0].images
                            : [];

                        return {
                          ...activity,
                          description: /* (this.ybData && lapse3Activities[activity.id] && lapse3Activities[activity.id].description && lapse3Activities[activity.id].description.length ? lapse3Activities[activity.id].description : false)
                          ||  */ descriptionReturnValue,
                          images: /* (this.ybData && lapse3Activities[activity.id] && lapse3Activities[activity.id].images && lapse3Activities[activity.id].images.length ? determineImgs(imagesReturnValue, lapse3Activities[activity.id].images) : false)
                          ||  */ imagesReturnValue,
                        };
                      },
                    ),
                    logicDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse3.logicDiagnosticAnalysis && this.ybData.lapse3.logicDiagnosticAnalysis.length ? this.ybData.lapse3.logicDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse3.logicDiagnosticAnalysis,
                    mathDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse3.mathDiagnosticAnalysis && this.ybData.lapse3.mathDiagnosticAnalysis.length ? this.ybData.lapse3.mathDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse3.mathDiagnosticAnalysis,
                    readingDiagnosticAnalysis:
                      /* (this.ybData && this.ybData.lapse3.readingDiagnosticAnalysis && this.ybData.lapse3.readingDiagnosticAnalysis.length ? this.ybData.lapse3.readingDiagnosticAnalysis : false) ||  */ lastYearBookRequest
                        .lapse3.readingDiagnosticAnalysis,
                  },
                  sections: currentYearBook.sections.map((section) => {
                    const sectionRequested = lastYearBookRequest.sections.filter(
                      ({ id }) => section.id === id,
                    );
                    const returnValue =
                      sectionRequested.length > 0
                        ? sectionRequested[0].image
                        : '';
                    return {
                      ...section,
                      image: /* (this.ybData && theSections[section.id] && theSections[section.id].image && theSections[section.id].image.length ? theSections[section.id].image : false) ||  */ returnValue,
                    };
                  }),
                };
              }

              const { permissions } = data.user;
              const permissionsObj = this.managePermissions(permissions);

              this.setAmblemarioData(data.activePecaContent, amblemarioMapper);
              // console.log('data.activePecaContent', data.activePecaContent);

              // console.log('yearbook - this.pecaData', this.pecaData);

              this.setPdfData(this.pecaData);

              const diagnosticGoalTableData = await this.pdfYearbookService.getGoalSettingsTable();
              // this.store.dispatch(new SetYearBook(newYearBook));
              const yearBookConfig = await MapperYearBookWeb(
                newYearBook,
                diagnosticGoalTableData,
                this.pdfYearbookService,
                permissionsObj,
                this.store,
              );
              this.instantiateComponent(yearBookConfig);
              this.doInstantiateBlocks();
            }
          }
        },
        (error) => console.error(error),
      );
  }

  setAmblemarioData(pecaData, _mapper?: Function) {
    // console.log('setAmblemarioData', pecaData);

    if (_mapper) {
      this.pecaData = _mapper(pecaData);
    } else {
      this.pecaData = pecaData;
    }
  }

  managePermissions(permissionsArray) {
    return yearbookPermissions.actions.reduce((permissionsObj, permission) => {
      if (permissionsArray)
        permissionsObj[permission] = permissionsArray.includes(permission);
      return permissionsObj;
    }, {});
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
    this.ybData = null;
  }
}
