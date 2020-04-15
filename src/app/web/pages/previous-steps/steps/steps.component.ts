import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StepsService } from '../../../../services/steps/steps.service';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { Observable } from 'rxjs';
import { Step } from '../../../../models/steps/previous-steps.model';
import { UpdateStepsProgress, SetUserInfo } from '../../../../store/actions/steps/project.actions';
import { StepsState } from '../../../../store/states/steps/project.state';
import { UProject } from '../../../../models/steps/learning-modules.model';
import { ActivatedRoute } from '@angular/router';
import { ResidenceInfoState } from 'src/app/store/states/steps/residence-info.state';
import { UpdateStates, UpdateMunicipalities } from 'src/app/store/actions/steps/residence-info.actions';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  fillCounter:number = 0;
  isTest:boolean = false;
  activeStep = 0;
  curriculumPending = false;
  project_id = "";

  canOrganizationConfirm:boolean = true; // approval button which confirms to create PECA

  @Select(UserState.user_projects) userProjects$: Observable<UProject[]>; //! TEMPORARY
  @Select(UserState.user_type) user_type$: Observable<string>;
  @Select(StepsState.all_needed) project_steps$: Observable<any>;
  @Select(ResidenceInfoState.get_states) states$: Observable<any>;
  @Select(ResidenceInfoState.get_municipalities) municipalities$: Observable<any>;

  stepsProgress = [0,0,0,0]; // general, sponsor, coordinator, school
  enabledTabs = false;
  formsCalled = [{id:'',called:false,hasForm:false},{id:'',called:false,hasForm:false},{id:'',called:false,hasForm:false}]; // sponsor, coordinator, school
  idsAlreadyIterated = [];

  generalSteps = [];
  sponsorSteps = [];
  coordinatorSteps = [];
  schoolSteps = [];

  constructor(private stepsService: StepsService, private store: Store,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getResidenceInfo();
    this.userProjects$.subscribe(projs => {
      if (!this.isTest) { 
        //! TEMPORARY ---------------------------------------------------------------------------------------------------------------------------------------------------
        let pjId = (this.route.snapshot.params && (this.route.snapshot.params.project || this.route.snapshot.params.type=='0' || this.route.snapshot.params.type=='1') )? 
          (this.route.snapshot.params.project? this.route.snapshot.params.project : '5e853175164bc53ac50ff5fe') : (projs && projs[0]? (projs[0].id? projs[0].id:'') : '5e853175164bc53ac50ff5fe'); 
        //!--------------------------------------------------------------------------------------------------------------------------------------------------------------
        if(pjId.length>0) this.updateSteps(pjId);
        else return 0;

        this.project_steps$.subscribe(res => {
          this.project_id = pjId;
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

              if(step_.isForm) {
                if(step_.type==3 && !this.formsCalled[0].hasForm) this.formsCalled[0].hasForm = true;
                if(step_.type==2 && !this.formsCalled[1].hasForm) this.formsCalled[1].hasForm = true;
                if(step_.type==4 && !this.formsCalled[2].hasForm) this.formsCalled[2].hasForm = true;
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

            if(this.fillCounter>=2) {
              this.enabledTabs = true;
              if(this.formsCalled[0].hasForm) this.formsCalled[0].id = res.sponsor_id.length>0? res.sponsor_id:'';
              if(this.formsCalled[1].hasForm) this.formsCalled[1].id = res.coordinator_id.length>0? res.coordinator_id:'';
              if(this.formsCalled[2].hasForm) this.formsCalled[2].id = res.school_id.length>0? res.school_id:'';
              this.getCoor();
              this.getSpon();
              this.getScho();
            }

            //Setting progress bar
            this.stepsProgress[0]= +res.general;
            this.stepsProgress[1]= +res.sponsor;
            this.stepsProgress[2]= +res.coordinator;
            this.stepsProgress[3]= +res.school;
          }// else this.updateSteps(projs[0].id);          
        });
      }
    });
  }

  updateSteps(p_i) {
    this.store.dispatch(new UpdateStepsProgress(p_i));
  }
  getResidenceInfo() {
    this.store.dispatch(new UpdateStates);
    this.store.dispatch(new UpdateMunicipalities);
  }

  swicthStep(num,e) {
    this.activeStep = num;
  }
  getSpon(){
    if(!this.formsCalled[0].called && this.formsCalled[0].hasForm && this.formsCalled[0].id.length>0) {
      this.store.dispatch(new SetUserInfo(this.formsCalled[0].id,"3"));
      this.formsCalled[0].called = true;
    }
  }
  getCoor(){
    if(!this.formsCalled[1].called && this.formsCalled[1].hasForm && this.formsCalled[1].id.length>0) {
      this.store.dispatch(new SetUserInfo(this.formsCalled[1].id,"2"));
      this.formsCalled[1].called = true;
    }
  }
  getScho(){
    if(!this.formsCalled[2].called && this.formsCalled[2].hasForm && this.formsCalled[2].id.length>0) {
      this.store.dispatch(new SetUserInfo(this.formsCalled[2].id,"4"));
      this.formsCalled[2].called = true;
    }
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

}
