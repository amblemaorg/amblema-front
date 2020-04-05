import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ModuleStateModel, UpdateModulesTotal } from '../../actions/e-learning/learning-modules.actions';
import { StepsService } from '../../../services/steps/steps.service';
import { StepStateModel, UpdateStepsProgress } from '../../actions/steps/project.actions';

@State<StepStateModel>({
    name: 'stepsinfo',
    defaults: {
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
        return state;
    }

    constructor(private stepsService: StepsService) {}

    // ACTIONS
    @Action(UpdateStepsProgress)
    UpdateStepsProgress(ctx: StateContext<StepStateModel>, action: UpdateStepsProgress) {
        return this.stepsService.getSteps(action.project_id).pipe(
          tap(proj => {
            const state = ctx.getState();
            ctx.setState({
              ...state,
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