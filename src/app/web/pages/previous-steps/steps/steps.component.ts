import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  OnDestroy
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StepsService } from '../../../../services/steps/steps.service';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { Observable, Subscription } from 'rxjs';
import { Step } from '../../../../models/steps/previous-steps.model';
import { UpdateStepsProgress } from '../../../../store/actions/steps/project.actions';
import { StepsState } from '../../../../store/states/steps/project.state';
import { UProject } from '../../../../models/steps/learning-modules.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceInfoState } from 'src/app/store/states/steps/residence-info.state';
import { GeneralStepsComponent } from './general-steps/general-steps.component';
import { UpdateModulesTotal } from 'src/app/store/actions/e-learning/learning-modules.actions';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, OnDestroy {
  @ViewChildren('generalStep', { read: GeneralStepsComponent }) generalStepsRef: QueryList<
  GeneralStepsComponent
  >;

  fillCounter:number = 0;
  isTest:boolean = false;
  activeStep = 0;
  curriculumPending = false;
  project_id = "";
  user_id = "";
  user_type = "";

  canOrganizationConfirm:boolean = true; // approval button which confirms to create PECA

  @Select(UserState.user_projects) userProjects$: Observable<UProject[]>; //! TEMPORARY
  @Select(UserState.user_type) user_type$: Observable<string>;
  @Select(UserState.user_id) user_id$: Observable<string>;
  @Select(StepsState.selected_proj_id) selected_project_id$: Observable<string>;
  @Select(StepsState.all_needed) project_steps$: Observable<any>;
  @Select(ResidenceInfoState.get_states) states$: Observable<any>;
  @Select(ResidenceInfoState.get_municipalities) municipalities$: Observable<any>;

  stepsProgress = [0,0,0,0]; // general, sponsor, coordinator, school
  enabledTabs = false;
  idsAlreadyIterated = [];

  generalSteps = [];
  sponsorSteps = [];
  coordinatorSteps = [];
  schoolSteps = [];

  fetchingSteps: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    private stepsService: StepsService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.stepsService.enableTab.subscribe(res => {
        this.enabledTabs = res;
      })
    );
    this.subscription.add(
      this.stepsService.goToMods.subscribe(res => {
        this.goToModules();
      })
    );

    if (!this.isTest) {
      this.subscription.add(
        this.selected_project_id$.subscribe(res => {
          if (res) {
            this.project_id = res;
            if ( !this.stepsService.areStepsCalled() ) {
              this.fetchingSteps = true;
              this.subscription.add(
                this.store.dispatch( new UpdateStepsProgress(this.project_id) ).subscribe(res => {
                  this.stepsService.callSteps(true);
                  this.enabledTabs = true;
                  this.fetchingSteps = false;
                })
              );
              this.store.dispatch( new UpdateModulesTotal );
            }
          }
        })
      );

      this.subscription.add(
        this.user_id$.subscribe(res => {
          if (res) this.user_id = res
        })
      );
      this.subscription.add(
        this.user_type$.subscribe(res => {
          if (res) this.user_type = res
        })
      );

      this.subscription.add(
        this.project_steps$.subscribe(res => {
          if (res.steps.length>0) {
            this.fillCounter++;
            if(this.fillCounter==2){ // updating steps to be shown if case one of them got deleted in bds
              this.generalSteps = [];
              this.sponsorSteps = [];
              this.coordinatorSteps = [];
              this.schoolSteps = [];
            }

            res.steps.forEach(record => {
              let step_:Step = {
                ...record,
                checklist: this.getChecks(record.checklist),
                sending: false,
              };
              const stepRequireApproval = step_.approvalType === "3";
              const stepIsNotApproved = step_.status !== "3";
              if (stepRequireApproval && stepIsNotApproved) {
                const { approvalHistory, hasDate, hasChecklist, hasUpload } = step_;
                if (approvalHistory.length > 0) {
                  const { stepDate, stepChecklist, stepUploadedFile } = approvalHistory[approvalHistory.length - 1].data;
                  step_ = {
                    ...step_,
                    date: hasDate && stepDate ? stepDate : null,
                    checklist: hasChecklist && stepChecklist ? stepChecklist : [],
                    uploadedFile: hasUpload && stepUploadedFile && stepUploadedFile.url ? stepUploadedFile : null,
                  }
                }
              }

              step_.isForm = (step_.devName.toLowerCase().includes("fill") && step_.devName.toLowerCase().includes("form"))? true:false;

              if (step_.isForm) {
                if (step_.devName=="sponsorFillCoordinatorForm" || step_.devName=="schoolFillCoordinatorForm") step_.type = 2;
                else if (step_.devName=="coordinatorFillSponsorForm" || step_.devName=="schoolFillSponsorForm") step_.type = 3;
                else step_.type = 4;
              }
              step_.send = step_.devName=="coordinatorSendCurriculum" ? true:false;
              if (step_.send && !this.curriculumPending && step_.status!="3") {
                this.curriculumPending = true;
              }
              step_.goMods = step_.devName=="corrdinatorCompleteTrainingModules" ? true:false;

              if (step_.status!="3" && step_.devName!="amblemaConfirmation") {
                this.canOrganizationConfirm = false;
              }

              switch (step_.tag) {
                case "2":
                  let ind2 = this.coordinatorSteps.findIndex(st => {return st.id === step_.id});
                  if (ind2>=0) this.coordinatorSteps[ind2] = step_;
                  else this.coordinatorSteps.push(step_);
                  break;
                case "3":
                  let ind3 = this.sponsorSteps.findIndex(st => {return st.id === step_.id});
                  if (ind3>=0) this.sponsorSteps[ind3] = step_;
                  else this.sponsorSteps.push(step_);
                  break;
                case "4":
                  let ind4 = this.schoolSteps.findIndex(st => {return st.id === step_.id});
                  if (ind4>=0) this.schoolSteps[ind4] = step_;
                  else this.schoolSteps.push(step_);
                  break;
                default:
                  let ind1 = this.generalSteps.findIndex(st => {return st.id === step_.id});
                  if (ind1>=0) this.generalSteps[ind1] = step_;
                  else this.generalSteps.push(step_);
                  break;
              }
            });

            //Setting progress bar
            this.stepsProgress[0]= +res.general;
            this.stepsProgress[1]= +res.sponsor;
            this.stepsProgress[2]= +res.coordinator;
            this.stepsProgress[3]= +res.school;
          }
        })
      );

    }
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateSteps(p_i) {
    this.store.dispatch(new UpdateStepsProgress(p_i)).subscribe(res=>{
      this.enabledTabs = true;
    });
  }

  switchStep(num,e) {
    this.activeStep = num;

    this.generalStepsRef.toArray().map(tab => {
      tab.resetTimesLoadedVideo();
    });
  }

  getChecks(ch) {
    let checks = []
    ch.forEach(chh => {
      checks.push({...chh});
    });

    return checks;
  }

  enablingModsBtn() {
    let enable = false;

    this.user_type$.subscribe(res => {
      enable = res == '0' || res == '1' || res == '2';
    });

    return enable;
  }

  goToModules() {
    this.router.navigate(["previous-steps/modules"]);
  }

  goToPECA() {
    this.router.navigate(["peca/datos-escuela"]);
  }

}
