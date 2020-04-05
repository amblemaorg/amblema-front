import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CoordinatorStateModel, UpdateCoins } from '../../actions/e-learning/coordinator-user.actions';
import { ModulesService } from '../../../services/steps/modules.service';

@State<CoordinatorStateModel>({
    name: 'coordinatorinfo',
    defaults: {
      coins: 0,
      coordinator_modules: [],
      name: '',
      gender: '',
      coor_id: '',
      image: '',
      coordinator_projects: [],
      userType: '',
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
      let only_approved = state.coordinator_modules.filter(m=>{ return m.status=="3"});
      return only_approved.length;
    }
    @Selector()
    static coordinator_modules(state: CoordinatorStateModel) {
      return state.coordinator_modules;
    }
    @Selector()
    static coordinator_projects(state: CoordinatorStateModel) {
      return state.coordinator_projects; //! TEMPORARY
    }
    @Selector()
    static coordinator_brief(state: CoordinatorStateModel) {
      return {name:state.name, gender:state.gender, image:state.image};
    }
    @Selector()
    static coordinator_id(state: CoordinatorStateModel) {
      return state.coor_id;
    }
    @Selector()
    static coordinator_type(state: CoordinatorStateModel) {
      return state.userType;
    }
  
    constructor(private modulesService: ModulesService) {}
  
    // ACTIONS
    /* @Action(IncreaseCoins)
    IncreaseCoins(ctx: StateContext<CoordinatorStateModel>, action: IncreaseCoins) {
      const state = ctx.getState();
      ctx.setState({
          ...state,
          coins: state.coins + action.coinsCount
      });
    } */
  
    @Action(UpdateCoins)
    UpdateCoins(ctx: StateContext<CoordinatorStateModel>, action: UpdateCoins) {
      return this.modulesService.getCoordinator(action.coor_id).pipe(
        tap(coor => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            coins: coor.nCoins,
            name: coor.name,
            gender: coor.gender,
            coor_id: coor.id,
            image: coor.image,
            userType: coor.userType,
            // coordinator_modules: coor.learning.filter(m=>{ return m.status=="2" })
            coordinator_modules: coor.learning,
            coordinator_projects: coor.projects,
          });
        })
      );
    }
  }