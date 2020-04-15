import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ModuleStateModel, UpdateModulesTotal } from '../../actions/e-learning/learning-modules.actions';
import { StepsService } from '../../../services/steps/steps.service';
import { StepStateModel, UpdateStepsProgress, SetUserInfo } from '../../actions/steps/project.actions';
import { ModulesService } from '../../../services/steps/modules.service';

@State<StepStateModel>({
    name: 'stepsinfo',
    defaults: {
        sponsorInfo: null,  
        coordinatorInfo: null,
        schoolInfo: null,
        sponsor_id: '',
        school_id: '',
        coordinator_id: '',
        general: '',
        sponsor: '',
        school: '',
        coordinator: '',
        steps: [],
    }
  })
export class StepsState {
    // SELECTORS
    @Selector()
    static all_needed(state: StepStateModel) {
        return {
          coordinator_id: state.coordinator_id,
          sponsor_id: state.sponsor_id,
          school_id: state.school_id,
          general: state.general,
          sponsor: state.sponsor,
          school: state.school,
          coordinator: state.coordinator,
          steps: state.steps,
        };
    }
    @Selector()
    static sponsor_info(state: StepStateModel) {
      return state.sponsorInfo;
    }
    @Selector()
    static coordinator_info(state: StepStateModel) {
      return state.coordinatorInfo;
    }
    @Selector()
    static school_info(state: StepStateModel) {
      return state.schoolInfo;
    }

    constructor(private stepsService: StepsService, private modulesService: ModulesService) {}

    // ACTIONS
    @Action(UpdateStepsProgress)
    UpdateStepsProgress(ctx: StateContext<StepStateModel>, action: UpdateStepsProgress) {
        return this.stepsService.getSteps(action.project_id).pipe(
          tap(proj => {
            const state = ctx.getState();
            ctx.setState({
              ...state,
              sponsor_id: proj.sponsor? proj.sponsor.id:'',
              school_id: proj.school? proj.school.id:'',
              coordinator_id: proj.coordinator? proj.coordinator.id:'',
              general: proj.stepsProgress.general,
              sponsor: proj.stepsProgress.sponsor,
              school: proj.stepsProgress.school,
              coordinator: proj.stepsProgress.coordinator,
              steps: proj.stepsProgress.steps,
            });
          })
        );
    }

    @Action(SetUserInfo)
    SetUserInfo(ctx: StateContext<StepStateModel>, action: SetUserInfo) {
        return this.modulesService.getUser(action.user_id,action.user_type).pipe(
          tap(user => {
            this.setCtx(ctx, action.user_type, user);        
          })
        );
    }    

    setCtx(ctx, type, user) {
      const state = ctx.getState();
      if (type=="2") {
        ctx.setState({
          ...state,
          coordinatorInfo: user
        });
      }
      else if(type=="3") {
        ctx.setState({
          ...state,
          sponsorInfo: user
        });
      }
      else {
        ctx.setState({
          ...state,
          schoolInfo: user
        });
      }      
    }

}