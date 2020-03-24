import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ModuleStateModel, UpdateModulesTotal } from '../../actions/e-learning/learning-modules.actions';
import { ModulesService } from '../../../services/e-learning/modules.service';

@State<ModuleStateModel>({
    name: 'moduleinfo',
    defaults: {
      modulesTotal: 0,
      modules: [],
    }
  })
  export class ModulesState {
    // SELECTORS
    @Selector()
    static modules_total(state: ModuleStateModel) {
      return state.modulesTotal;
    }
    @Selector()
    static modules_array(state: ModuleStateModel) {
      return state.modules;
    }
  
    constructor(private modulesService: ModulesService) {}
  
    // ACTIONS
    @Action(UpdateModulesTotal)
    UpdateModulesTotal(ctx: StateContext<ModuleStateModel>) {
      return this.modulesService.getMods().pipe(
        tap(res => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            modulesTotal: res.records.length,
            modules: res.records
          });
        })
      );
    }
  }