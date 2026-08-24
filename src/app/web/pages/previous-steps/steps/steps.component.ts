import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  NgZone,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Select, Store } from "@ngxs/store";
import { StepsService } from "../../../../services/steps/steps.service";
import { UserState } from "../../../../store/states/e-learning/user.state";
import { Observable, Subscription } from "rxjs";
import { Step } from "../../../../models/steps/previous-steps.model";
import { UpdateStepsProgress } from "../../../../store/actions/steps/project.actions";
import { StepsState } from "../../../../store/states/steps/project.state";
import { UProject } from "../../../../models/steps/learning-modules.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ResidenceInfoState } from "src/app/store/states/steps/residence-info.state";
import { GeneralStepsComponent } from "./general-steps/general-steps.component";
import { UpdateModulesTotal } from "src/app/store/actions/e-learning/learning-modules.actions";
import { ConvenioPdfService } from "./convenio-pdf.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.scss"],
})
export class StepsComponent implements OnInit, OnDestroy {
  @ViewChildren("generalStep", { read: GeneralStepsComponent })
  generalStepsRef: QueryList<GeneralStepsComponent>;

  @ViewChild("sigCanvas", { static: false })
  sigCanvas: ElementRef<HTMLCanvasElement>;

  fillCounter: number = 0;
  isTest: boolean = false;
  curriculumPending: boolean = false;
  activeStep = 0;
  project_id: string;
  user_id: string;
  user_type: string;

  canOrganizationConfirm: boolean = true; // approval button which confirms to create PECA

  @Select(UserState.user_projects) userProjects$: Observable<UProject[]>; //! TEMPORARY
  @Select(UserState.user_type) user_type$: Observable<string>;
  @Select(UserState.user_id) user_id$: Observable<string>;
  @Select(StepsState.selected_proj_id) selected_project_id$: Observable<string>;
  @Select(StepsState.all_needed) project_steps$: Observable<any>;
  // @Select(ResidenceInfoState.get_states) states$: Observable<any>;
  theStates: any;
  // @Select(ResidenceInfoState.get_municipalities) municipalities$: Observable<any>;
  theMunicialities: any;
  statesLoaded: boolean = false;
  munsLoaded: boolean = false;

  stepsProgress = [0, 0, 0, 0]; // general, sponsor, coordinator, school
  enabledTabs = false;
  idsAlreadyIterated = [];

  generalSteps = [];
  sponsorSteps = [];
  coordinatorSteps = [];
  schoolSteps = [];

  fetchingSteps: boolean;

  showSignatureModal: boolean = false;
  isDrawing: boolean = false;
  isSavingSignature: boolean = false;
  signerRoleName: string = "";
  projectRecordData: any = null;
  private ctx: CanvasRenderingContext2D = null;

  private subscription: Subscription = new Subscription();

  constructor(
    private stepsService: StepsService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private convenioPdfService: ConvenioPdfService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    (window as any).triggerSignatureFromPreview = () => {
      this.ngZone.run(() => {
        try {
          window.focus();
        } catch (e) {}
        this.openSignatureModal();
      });
    };
  }

  ngOnInit() {
    if (!this.munsLoaded)
      this.subscription.add(
        this.stepsService.getMunicipalities().subscribe(({ records: res }) => {
          this.theMunicialities = res;
          this.munsLoaded = true;
          // const theStates_ = /* this.theStates && this.theStates.length ? [...this.theStates] :  */null;
          // setTimeout(() => {
          //   this.theStates = theStates_;
          // });
          this.callStates();
        })
      );

    this.subscription.add(
      this.stepsService.enableTab.subscribe((res) => {
        this.enabledTabs = res;
      })
    );
    this.subscription.add(
      this.stepsService.goToMods.subscribe((res) => {
        this.goToModules();
      })
    );

    if (!this.isTest) {
      this.subscription.add(
        this.selected_project_id$.subscribe((res) => {
          if (res) {
            this.project_id = res;
            if (!this.stepsService.areStepsCalled()) {
              this.fetchingSteps = true;
              this.subscription.add(
                this.store
                  .dispatch(new UpdateStepsProgress(this.project_id))
                  .subscribe((res) => {
                    this.stepsService.callSteps(true);
                    this.enabledTabs = true;
                    this.fetchingSteps = false;
                  })
              );
              this.store.dispatch(new UpdateModulesTotal());
            }
          }
        })
      );

      this.subscription.add(
        this.user_id$.subscribe((res) => {
          if (res) this.user_id = res;
        })
      );
      this.subscription.add(
        this.user_type$.subscribe((res) => {
          if (res) {
            this.user_type = res;
            this.setDefaultActiveStep();
          }
        })
      );

      this.subscription.add(
        this.project_steps$.subscribe((res) => {
          if (res.steps.length > 0) {
            this.fillCounter++;
            if (this.fillCounter == 2) {
              // updating steps to be shown if case one of them got deleted in bds
              this.generalSteps = [];
              this.sponsorSteps = [];
              this.coordinatorSteps = [];
              this.schoolSteps = [];
            }

            res.steps.forEach((record) => {
              let step_: Step = {
                ...record,
                checklist: this.getChecks(record.checklist),
                sending: false,
              };
              const stepRequireApproval = step_.approvalType === "3";
              const stepIsNotApproved = step_.status !== "3";
              if (stepRequireApproval && stepIsNotApproved) {
                const { approvalHistory, hasDate, hasChecklist, hasUpload } =
                  step_;
                if (approvalHistory.length > 0) {
                  const { stepDate, stepChecklist, stepUploadedFile } =
                    approvalHistory[approvalHistory.length - 1].data;
                  step_ = {
                    ...step_,
                    date: hasDate && stepDate ? stepDate : null,
                    checklist:
                      hasChecklist && stepChecklist ? stepChecklist : [],
                    uploadedFile:
                      hasUpload && stepUploadedFile && stepUploadedFile.url
                        ? stepUploadedFile
                        : null,
                  };
                }
              }

              step_.isForm =
                step_.devName.toLowerCase().includes("fill") &&
                step_.devName.toLowerCase().includes("form")
                  ? true
                  : false;

              if (step_.isForm) {
                if (
                  step_.devName == "sponsorFillCoordinatorForm" ||
                  step_.devName == "schoolFillCoordinatorForm"
                )
                  step_.type = 2;
                else if (
                  step_.devName == "coordinatorFillSponsorForm" ||
                  step_.devName == "schoolFillSponsorForm"
                )
                  step_.type = 3;
                else step_.type = 4;
              }
              step_.send =
                step_.devName == "coordinatorSendCurriculum" ? true : false;
              if (
                step_.send &&
                !this.curriculumPending &&
                step_.status != "3"
              ) {
                this.curriculumPending = true;
              }
              step_.goMods = false;

              if (
                step_.status != "3" &&
                step_.devName != "amblemaConfirmation"
              ) {
                this.canOrganizationConfirm = false;
              }

              switch (step_.tag) {
                case "2":
                  let ind2 = this.coordinatorSteps.findIndex((st) => {
                    return st.id === step_.id;
                  });
                  if (ind2 >= 0) this.coordinatorSteps[ind2] = step_;
                  else this.coordinatorSteps.push(step_);
                  break;
                case "3":
                  let ind3 = this.sponsorSteps.findIndex((st) => {
                    return st.id === step_.id;
                  });
                  if (ind3 >= 0) this.sponsorSteps[ind3] = step_;
                  else this.sponsorSteps.push(step_);
                  break;
                case "4":
                  let ind4 = this.schoolSteps.findIndex((st) => {
                    return st.id === step_.id;
                  });
                  if (ind4 >= 0) this.schoolSteps[ind4] = step_;
                  else this.schoolSteps.push(step_);
                  break;
                default:
                  let ind1 = this.generalSteps.findIndex((st) => {
                    return st.id === step_.id;
                  });
                  if (ind1 >= 0) this.generalSteps[ind1] = step_;
                  else this.generalSteps.push(step_);
                  break;
              }
            });

            //Setting progress bar
            const calcProgress = (stepsArr: any[]) => {
              if (!stepsArr || stepsArr.length === 0) return 0;
              const approved = stepsArr.filter((s) => s.status === "3").length;
              return Math.round((approved / stepsArr.length) * 100);
            };

            this.stepsProgress[0] = calcProgress(this.generalSteps);
            this.stepsProgress[1] = calcProgress(this.sponsorSteps);
            this.stepsProgress[2] = calcProgress(this.coordinatorSteps);
            this.stepsProgress[3] = calcProgress(this.schoolSteps);
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.theStates = null;
    this.theMunicialities = null;
  }

  callStates() {
    if (!this.statesLoaded)
      this.subscription.add(
        this.stepsService.getStates().subscribe(({ records: res }) => {
          this.theStates = null;
          setTimeout(() => {
            this.theStates = res;
            this.statesLoaded = true;
            this.generalStepsRef.toArray().map((tab) => {
              tab.fillResidenceInfo({
                states: [...this.theStates],
                municipalities: [...this.theMunicialities],
              });
            });
          });
        })
      );
  }

  updateSteps(p_i) {
    this.store.dispatch(new UpdateStepsProgress(p_i)).subscribe((res) => {
      this.enabledTabs = true;
    });
  }

  switchStep(num, e) {
    this.activeStep = num;

    this.generalStepsRef.toArray().map((tab) => {
      tab.resetTimesLoadedVideo();
    });
  }

  getChecks(ch) {
    let checks = [];
    ch.forEach((chh) => {
      checks.push({ ...chh });
    });

    return checks;
  }

  enablingModsBtn() {
    return this.user_type === "0" || this.user_type === "1";
  }

  goToModules() {
    this.router.navigate(["previous-steps/modules"]);
  }

  goToPECA() {
    this.router.navigate([
      "peca/datos-escuela",
      {
        comesFromPreviousSteps: true,
      },
    ]);
  }

  isAdmin(): boolean {
    return this.user_type === "0" || this.user_type === "1";
  }

  setDefaultActiveStep() {
    if (this.user_type === "2") {
      this.activeStep = 2;
    } else if (this.user_type === "3") {
      this.activeStep = 1;
    } else if (this.user_type === "4") {
      this.activeStep = 3;
    } else {
      this.activeStep =
        this.generalSteps && this.generalSteps.length > 0 ? 0 : 1;
    }
  }

  shouldShowTab(tabNum: number): boolean {
    const uType = this.user_type;
    if (uType === "0" || uType === "1") {
      if (tabNum === 0) return this.generalSteps && this.generalSteps.length > 0;
      return true;
    }
    if (tabNum === 0) {
      return this.generalSteps && this.generalSteps.length > 0;
    }
    if (tabNum === 1) return uType === "3"; // Padrino
    if (tabNum === 2) return uType === "2"; // Coordinador
    if (tabNum === 3) return uType === "4"; // Escuela
    return false;
  }

  openTripartiteAgreementModal() {
    if (!this.project_id) return;
    this.http.get<any>(`${environment.baseUrl}projects/${this.project_id}`).subscribe(
      (project) => {
        this.projectRecordData = project;
        this.convenioPdfService.generateTripartiteAgreementPdf(project);
      },
      (error) => {
        console.error("Error fetching project data for agreement preview:", error);
      }
    );
  }

  openSignatureModal() {
    if (!this.projectRecordData && this.project_id) {
      this.http.get<any>(`${environment.baseUrl}projects/${this.project_id}`).subscribe(
        (project) => {
          this.projectRecordData = project;
          this.doOpenSignatureModal();
        },
        () => {
          this.doOpenSignatureModal();
        }
      );
    } else {
      this.doOpenSignatureModal();
    }
  }

  doOpenSignatureModal() {
    if (this.user_type === "4") {
      this.signerRoleName = "Director(a) de la Escuela";
    } else if (this.user_type === "3") {
      this.signerRoleName = "Representante del Padrino";
    } else {
      this.signerRoleName = "Fundación AmbLeMa";
    }
    this.showSignatureModal = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.initCanvas();
    }, 100);
  }

  closeSignatureModal() {
    this.showSignatureModal = false;
    this.isDrawing = false;
  }

  initCanvas() {
    if (!this.sigCanvas) return;
    const canvas = this.sigCanvas.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000000';
    this.clearCanvas();
  }

  clearCanvas() {
    if (!this.ctx || !this.sigCanvas) return;
    const canvas = this.sigCanvas.nativeElement;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  startDrawing(event: any) {
    this.isDrawing = true;
    const pos = this.getCanvasPos(event);
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    }
  }

  draw(event: any) {
    if (!this.isDrawing || !this.ctx) return;
    event.preventDefault();
    const pos = this.getCanvasPos(event);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  getCanvasPos(event: any) {
    const canvas = this.sigCanvas.nativeElement;
    const rect = canvas.getBoundingClientRect();
    let clientX = event.clientX;
    let clientY = event.clientY;

    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  saveSignature() {
    if (!this.sigCanvas || !this.project_id) return;
    const canvas = this.sigCanvas.nativeElement;
    const signatureData = canvas.toDataURL('image/png');

    let role = 'school';
    let signerName = '';
    let signerTitle = '';

    if (this.user_type === '3') {
      role = 'sponsor';
      signerName = this.projectRecordData?.sponsor?.name || 'Representante del Padrino';
      signerTitle = 'Representante del Padrino';
    } else if (this.user_type === '4') {
      role = 'school';
      signerName = this.projectRecordData?.school?.name || 'Director(a)';
      signerTitle = 'Director(a) del Plantel Educativo';
    } else {
      role = 'amblema';
      signerName = 'Tomás Linares';
      signerTitle = 'Vice-Presidente de la Fundación AmbLeMa';
    }

    this.isSavingSignature = true;

    this.http.post<any>(`${environment.baseUrl}projects/signature/${this.project_id}`, {
      role,
      signerName,
      signerTitle,
      signatureData
    }).subscribe(
      (updatedProject) => {
        this.isSavingSignature = false;
        this.projectRecordData = updatedProject;
        this.closeSignatureModal();
        this.openTripartiteAgreementModal();
      },
      (err) => {
        this.isSavingSignature = false;
        console.error("Error saving signature:", err);
        alert("Ocurrió un error al guardar la firma digital.");
      }
    );
  }
}
