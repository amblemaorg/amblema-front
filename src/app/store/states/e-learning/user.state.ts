import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserStateModel, UpdateUserInfo, ClearUserInfo } from '../../actions/e-learning/user.actions';
import { ModulesService } from '../../../services/steps/modules.service';

@State<UserStateModel>({
    name: 'coordinatorinfo',
    defaults: {
      coins: 0,
      coordinator_modules: [],
      name: '',
      email: '',
      gender: '',
      user_id: '',
      image: '',
      user_projects: [],
      userType: '',
    }
  })
  export class UserState {
    // SELECTORS
    @Selector()
    static coins_total(state: UserStateModel) {
      return state.coins;
    }
    @Selector()
    static coordinator_modules_total(state: UserStateModel) {
      let only_approved = state.coordinator_modules.length>0 ? (state.coordinator_modules.filter(m=>{ return m.status=="3"}) ) : [];
      return only_approved.length;
    }
    @Selector()
    static coordinator_modules(state: UserStateModel) {
      return state.coordinator_modules;
    }
    @Selector()
    static user_projects(state: UserStateModel) {
      return state.user_projects; //! TEMPORARY
    }
    @Selector()
    static user_brief(state: UserStateModel) {
      return {name:state.name, email:state.email, gender:state.gender, image:state.image, userType:state.userType, userId:state.user_id};
    }
    @Selector()
    static user_id(state: UserStateModel) {
      return state.user_id;
    }
    @Selector()
    static user_type(state: UserStateModel) {
      return state.userType;
    }
  
    constructor(private modulesService: ModulesService) {}
  
    // ACTIONS
    /* @Action(IncreaseCoins)
    IncreaseCoins(ctx: StateContext<UserStateModel>, action: IncreaseCoins) {
      const state = ctx.getState();
      ctx.setState({
          ...state,
          coins: state.coins + action.coinsCount
      });
    } */
  
    @Action(UpdateUserInfo)
    UpdateUserInfo(ctx: StateContext<UserStateModel>, action: UpdateUserInfo) {
      return this.modulesService.getUser(action.user_id,action.user_type).pipe(
        tap(user => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            coins: user.nCoins,
            name: user.name,
            email: user.email,
            gender: user.gender? user.gender:null,
            user_id: user.id,
            image: user.image? user.image:null,
            userType: user.userType,
            // coordinator_modules: coor.learning.filter(m=>{ return m.status=="2" })
            coordinator_modules: user.learning? user.learning:[],
            user_projects: (user.userType=="0" || user.userType=="1")? [] : (user.userType=="4"? [user.project] : user.projects),
          });
        })
      );
    }

    @Action(ClearUserInfo)
    ClearUserInfo(ctx: StateContext<UserStateModel>) {
      ctx.setState({
        coins: 0,
        coordinator_modules: [],
        name: '',
        email: '',
        gender: '',
        user_id: '',
        image: '',
        user_projects: [],
        userType: '',
      });
    }

  }