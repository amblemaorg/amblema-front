import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { StepsService } from '../../../services/steps/steps.service';
import { StepStateModel, UpdateStepsProgress, ClearStepsProgress, UpdateStepsSelectedProject } from '../../actions/steps/project.actions';
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
        project_id: null,
        has_peca: false,
    }
  })
export class StepsState {
    // SELECTORS
    @Selector()
    static selected_proj_id(state: StepStateModel) {
      return state.project_id
    }

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
          has_peca: state.has_peca,
        };
    }   

    constructor(private stepsService: StepsService, private modulesService: ModulesService) {}

    // ACTIONS
    @Action(UpdateStepsSelectedProject)
    UpdateStepsSelectedProject(ctx: StateContext<StepStateModel>, action: UpdateStepsSelectedProject) {
      ctx.patchState({ project_id: action.proj_id });
    }

    @Action(UpdateStepsProgress)
    UpdateStepsProgress(ctx: StateContext<StepStateModel>, action: UpdateStepsProgress) {
        return this.stepsService.getSteps(action.project_id).pipe(
          tap(proj => {
            ctx.patchState({
              has_peca: proj.phase === "2" && proj.schoolYears.some((sy) => (
                  sy.schoolYear && 
                  sy.schoolYear.status && 
                  sy.schoolYear.status === "1"
                ) 
              )
            });

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
    
    @Action(ClearStepsProgress)
    ClearStepsProgress(ctx: StateContext<StepStateModel>) {
      ctx.setState({
        sponsor_id: '',
        school_id: '',
        coordinator_id: '',
        general: '',
        sponsor: '',
        school: '',
        coordinator: '',
        steps: [],
        project_id: null,
        has_peca: false,
      });
    }
    
}