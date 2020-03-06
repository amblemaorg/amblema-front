import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CoordinatorStateModel, IncreaseCoins, UpdateCoins } from '../../actions/e-learning/coordinator-user.actions';
import { ModulesService } from '../../../services/e-learning/modules.service';

@State<CoordinatorStateModel>({
    name: 'coordinatorinfo',
    defaults: {
      coins: 0,
      coordinator_modules: [],
    }
  })
  export class CoordinatorState {
    // SELECTORS
    @Selector()
    static coins_total(state: CoordinatorStateModel) {
      return state.coins;
    }
    @Selector()
    static coordinator_modules_total(state: CoordinatorStateModel) {
      return state.coordinator_modules.length;
    }
    @Selector()
    static coordinator_modules(state: CoordinatorStateModel) {
      return state.coordinator_modules;
    }
  
    constructor(private modulesService: ModulesService) {}
  
    // ACTIONS
    @Action(IncreaseCoins)
    IncreaseCoins(ctx: StateContext<CoordinatorStateModel>, action: IncreaseCoins) {
      const state = ctx.getState();
      ctx.setState({
          ...state,
          coins: state.coins + action.coinsCount
      });
    }
  
    @Action(UpdateCoins)
    UpdateCoins(ctx: StateContext<CoordinatorStateModel>, action: UpdateCoins) {
      return this.modulesService.getCoordinator(action.coor_id).pipe(
        tap(coor => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            coins: coor.nCoins,
            coordinator_modules: coor.learning.filter(m=>{ return m.status=="2" })
          });
        })
      );
    }
  }