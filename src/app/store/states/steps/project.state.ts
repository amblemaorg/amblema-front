import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { StepsService } from '../../../services/steps/steps.service';
import { StepStateModel, UpdateStepsProgress } from '../../actions/steps/project.actions';
import { ModulesService } from '../../../services/steps/modules.service';

@State<StepStateModel>({
    name: 'stepsinfo',
    defaults: {  
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
}