import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StepsService } from '../../../../services/steps/steps.service';
import { CoordinatorState } from '../../../../store/states/e-learning/coordinator-user.state';
import { Observable } from 'rxjs';
import { Project, Step } from '../../../../models/steps/previous-steps.model';
import { UpdateStepsProgress } from '../../../../store/actions/steps/project.actions';
import { StepsState } from '../../../../store/states/steps/project.state';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  doGet:boolean = true;
  activeStep = 0;
  curriculumPending = false;
  @Select(CoordinatorState.coordinator_projects) coordProjects$: Observable<Project[]>; //! TEMPORARY
  @Select(CoordinatorState.coordinator_type) user_type$: Observable<string>;
  @Select(StepsState.all_needed) project_steps$: Observable<any>;

  stepsProgress = [0,0,0,0]; // general, sponsor, coordinator, school

  generalSteps = [];
  sponsorSteps = [];
  coordinatorSteps = [];
  schoolSteps = [];

  constructor(private stepsService: StepsService, private store: Store) { }

  ngOnInit() {
    this.coordProjects$.subscribe(projs => {
      if (this.doGet) {        
        this.project_steps$.subscribe(res => {  
          if (res.steps.length>0) {
            res.steps.forEach(record => {   
              /** */      
              let step_:Step = {
                ...record,
                checklist: this.getChecks(record.checklist),                
              };
              step_.isForm = (step_.devName.toLowerCase().includes("fill") && step_.devName.toLowerCase().includes("form"))? true:false;
              // record.isForm = (record.name.toLowerCase().includes("planilla") && record.name.toLowerCase().includes("de"))? true:false;
              if (step_.isForm) {
                if (step_.devName=="sponsorFillCoordinatorForm" || step_.devName=="schoolFillCoordinatorForm") step_.type = 2;
                // if (record.name.toLowerCase().includes("coordinador")) record.type = 2;
                else if (step_.devName=="coordinatorFillSponsorForm" || step_.devName=="schoolFillSponsorForm") step_.type = 3;
                // else if (record.name.toLowerCase().includes("padrino")) record.type = 3;
                else step_.type = 4;
              }
              step_.send = step_.devName=="coordinatorSendCurriculum" ? true:false;
              // record.send = ((record.name.toLowerCase().includes("enviar") && record.name.toLowerCase().includes("curriculo")) || (record.name.toLowerCase().includes("enviar") && record.name.toLowerCase().includes("vitae"))) ? true:false;
              if (step_.send && !this.curriculumPending && step_.status!="3") {
                this.curriculumPending = true;
              }
              step_.goMods = step_.devName=="corrdinatorCompleteTrainingModules" ? true:false;
              // record.goMods = ((record.name.toLowerCase().includes("completar") && record.name.toLowerCase().includes("modulos")) || (record.name.toLowerCase().includes("modulos") && record.name.toLowerCase().includes("formacion"))) ? true:false;
              /** */
              switch (step_.tag) {          
                case "2":
                  this.coordinatorSteps.push(step_);
                  break;
                case "3":
                  this.sponsorSteps.push(step_);
                  break;
                case "4":
                  this.schoolSteps.push(step_);
                  break;
                default:
                  this.generalSteps.push(step_);
                  break;
              }                    
            });

            //Setting progress bar
            this.stepsProgress[0]= +res.general;
            this.stepsProgress[1]= +res.sponsor;
            this.stepsProgress[2]= +res.coordinator;
            this.stepsProgress[3]= +res.school;
          } else this.updateSteps(projs[0].id);          
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
