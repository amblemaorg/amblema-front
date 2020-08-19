import {
  Component,
  AfterViewInit,
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
import { GlobalService } from "../../../services/global.service";
import { amblemarioMapper } from "../mappers/amblemario-mapper";
import { PdfYearbookService } from "src/app/services/peca/pdf-yearbook.service";
import { SetYearBook } from "src/app/store/yearbook/yearbook.action";
import { ToastrService } from "ngx-toastr";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";

@Component({
  selector: "peca-yearbook",
  templateUrl: "../peca-page.component.html",
})
// @ts-ignore
export class YearbookPageComponent extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getActivePecaContent) pecaData$: Observable<any>;

  subscription: Subscription = new Subscription();

  pecaData: any;

  isInstanciated: boolean;
  isInstantiating: boolean;
  loadedData: boolean;

  yearbookData: any;
  title: string;

  constructor(
    private store: Store,
    toastr: ToastrService,
    factoryResolver: ComponentFactoryResolver,
    pdfYearbookService: PdfYearbookService,
    globals: GlobalService
  ) {
    super(factoryResolver, null, null, pdfYearbookService, toastr);
    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      if (this.loadedData) this.updateMethods();
    });
    //this.instantiateComponent(config);
  }

  ngOnInit() {
    this.subscription = this.pecaData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent.yearbook) ===
            JSON.stringify(curr.activePecaContent.yearbook)
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data && data.activePecaContent) {
              const currentYearBook = {
                ...data.activePecaContent.yearbook,
                sections: data.activePecaContent.school.sections,
                userId: data.user.id,
                pecaId: data.activePecaContent.id,
              };
              let newYearBook = currentYearBook;
              const { approvalHistory, isInApproval, pecaId, userId } = currentYearBook;
              const yearbookHasNotApprovedRequest = !isInApproval && approvalHistory.length > 0;

              if (isInApproval || yearbookHasNotApprovedRequest) {
                const lastYearBookRequest = approvalHistory[approvalHistory.length - 1].detail;
                // Merge data from last yearbook in approval with updated yearbook data
                newYearBook = {
                  pecaId,
                  userId,
                  isInApproval: currentYearBook.isInApproval,
                  approvalHistory: approvalHistory,
                  sponsor: {
                    ...currentYearBook.sponsor,
                    image: lastYearBookRequest.sponsor.image,
                    content: lastYearBookRequest.sponsor.content,
                  },
                  coordinator: {
                    ...currentYearBook.coordinator,
                    image: lastYearBookRequest.coordinator.image,
                    content: lastYearBookRequest.coordinator.content,
                  },
                  school: {
                    ...currentYearBook.school,
                    image: lastYearBookRequest.school.image,
                    content: lastYearBookRequest.school.content,
                  },
                  historicalReview: {
                    ...currentYearBook.historicalReview,
                    name: lastYearBookRequest.historicalReview.name,
                    image: lastYearBookRequest.historicalReview.image,
                    content: lastYearBookRequest.historicalReview.content,
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
                  sections: currentYearBook.sections.map((section) => {
                    const sectionRequested = lastYearBookRequest.sections.filter(
                      ({ id }) => section.id === id
                    );
                    return {
                      ...section,
                      image: sectionRequested.length > 0 ? sectionRequested[0].image : "",
                    };
                  }),
                };
              }

              this.setAmblemarioData(data.activePecaContent, amblemarioMapper);
              this.setPdfData(this.pecaData);
              //this.setYearbook(data);
              //this.setYearbookData();
              this.store.dispatch(new SetYearBook(newYearBook));

              const yearBookConfig = MapperYearBookWeb(newYearBook, this.store, this.toastr);
              this.instantiateComponent(yearBookConfig);
              this.doInstantiateBlocks();

              this.loadedData = true;
              //if (this.isInstanciated) this.updateMethods();
            }
          }
        },
        (error) => console.error(error)
      );
  }

  updateMethods() {
    this.updateDataToBlocks();
  }

  updateDataToBlocks() {
    this.setBlockData("titleYearbook", this.yearbookData);
  }

  updateStaticFetchers() {
    //
  }

  updateDynamicFetchers() {
    //
  }

  setYearbook(data) {
    this.title = data.activePecaContent.yearBook.lapse1.activities[0].name;
    console.log(this.title, "nombre");
  }

  setYearbookData() {
    this.yearbookData = {
      inputAndBtns: [
        {
          titleInput: this.title,
        },
      ],
    };
    console.log(this.yearbookData, "aqui titulo");
  }

  setAmblemarioData(pecaData, _mapper?: Function) {
    if (_mapper) {
      this.pecaData = _mapper(pecaData);
    } else {
      this.pecaData = pecaData;
    }
  }

  ngAfterViewInit(): void {
    //this.doInstantiateBlocks();
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.subscription.unsubscribe();
  }

  doInstantiateBlocks() {
    this.isInstanciated = false;
    this.isInstantiating = true;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstanciated = true;
      this.isInstantiating = false;
    });
  }
}
