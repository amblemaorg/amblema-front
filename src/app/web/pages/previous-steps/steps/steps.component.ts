import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StepsService } from '../../../../services/steps/steps.service';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { Observable } from 'rxjs';
import { Step } from '../../../../models/steps/previous-steps.model';
import { UpdateStepsProgress } from '../../../../store/actions/steps/project.actions';
import { StepsState } from '../../../../store/states/steps/project.state';
import { UProject } from '../../../../models/steps/learning-modules.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  doGet:boolean = true;
  isTest:boolean = false;
  activeStep = 0;
  curriculumPending = false;
  project_id = "";
  @Select(UserState.user_projects) userProjects$: Observable<UProject[]>; //! TEMPORARY
  @Select(UserState.user_type) user_type$: Observable<string>;
  @Select(StepsState.all_needed) project_steps$: Observable<any>;

  stepsProgress = [0,0,0,0]; // general, sponsor, coordinator, school
  idsAlreadyIterated = [];

  generalSteps = [];
  sponsorSteps = [];
  coordinatorSteps = [];
  schoolSteps = [];

  constructor(private stepsService: StepsService, private store: Store) { }

  ngOnInit() {
    this.userProjects$.subscribe(projs => {
      if (this.doGet && !this.isTest) { 
        this.updateSteps(projs[0].id);
        this.project_steps$.subscribe(res => {        
          this.project_id = projs[0].id;
          if (res.steps.length>0) {
            res.steps.forEach(record => {   
              let step_:Step = {
                ...record,
                checklist: this.getChecks(record.checklist), 
                sending: false,               
              };
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
          }// else this.updateSteps(projs[0].id);          
        });

        this.doGet = false;
      }
    });
  }

  updateSteps(p_i) {
    this.store.dispatch(new UpdateStepsProgress(p_i));
  }

  swicthStep(num) {
    this.activeStep = num;
  }

  getChecks(ch) {
    let checks = []
    ch.forEach(chh => {
      checks.push({...chh});
    });

    return checks;
  }

}
