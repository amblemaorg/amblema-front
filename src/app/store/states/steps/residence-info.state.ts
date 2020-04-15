import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ResidenceInfoStateModel, UpdateStates, UpdateMunicipalities } from '../../actions/steps/residence-info.actions';
import { StepsService } from '../../../services/steps/steps.service';

@State<ResidenceInfoStateModel>({
    name: 'residenceinfo',
    defaults: {      
      states: [],
      municipalities: [],
    }
  })
  export class ResidenceInfoState {
    // SELECTORS
    @Selector()
    static get_states(state: ResidenceInfoStateModel) {
      return state.states;
    }
    @Selector()
    static get_municipalities(state: ResidenceInfoStateModel) {
      return state.municipalities;
    }
  
    constructor(private stepsService: StepsService) {}
  
    // ACTIONS
    @Action(UpdateStates)
    UpdateStates(ctx: StateContext<ResidenceInfoStateModel>) {
      return this.stepsService.getStates().pipe(
        tap(res => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            states: res.records
          });
        })
      );
    }

    @Action(UpdateMunicipalities)
    UpdateMunicipalities(ctx: StateContext<ResidenceInfoStateModel>) {
      return this.stepsService.getMunicipalities().pipe(
        tap(res => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            municipalities: res.records
          });
        })
      );
    }

  }