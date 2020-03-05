import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ModulesService } from '../services/e-learning/modules.service';

export class IncreaseModules {
    static readonly type = '[ELearning] IncreaseModules';
    constructor(public modulesCount: number) {}
}
export class UpdateModules {
    static readonly type = '[ELearning] UpdateModules';
}

export interface ModuleStateModel {
    modulesTotal: number;
}

@State<ModuleStateModel>({
  name: 'moduleinfo',
  defaults: {
    modulesTotal: 0
  }
})
export class ModulesState {
  constructor(private modulesService: ModulesService) {}

  @Action(UpdateModules)
  UpdateModules(ctx: StateContext<ModuleStateModel>) {
    return this.modulesService.getMods().pipe(
      tap(res => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          modulesTotal: res.records.length
        });
      })
    );
  }

  @Action(IncreaseModules)
  IncreaseModules(ctx: StateContext<ModuleStateModel>, action: IncreaseModules) {
    const state = ctx.getState();
    ctx.setState({
        ...state,
        modulesTotal: state.modulesTotal + action.modulesCount
    });
  }
  
}