import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../store/states/e-learning/coordinator-user.state';
import { UpdateModulesTotal } from '../../../store/actions/e-learning/learning-modules.actions';
import { UpdateCoins } from '../../../store/actions/e-learning/coordinator-user.actions';
import { CoordinatorModule, Module } from '../../../models/e-learning/learning-modules.model';
import { ModulesService } from '../../../services/e-learning/modules.service';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.scss']
})
export class EheaderComponent implements OnInit {
  isBrowser;

  @Select(ModulesState.modules_total) modules_total$: Observable<number>;
  @Select(ModulesState.modules_array) modules_$: Observable<Module[]>;
  @Select(CoordinatorState.coins_total) coins$: Observable<number>;
  @Select(CoordinatorState.coordinator_modules_total) approved_modules_total$: Observable<number>;
  @Select(CoordinatorState.coordinator_modules) approved_modules$: Observable<CoordinatorModule[]>;
  @Select(CoordinatorState.coordinator_brief) coorBrief$: Observable<any>;

  constructor(private store: Store, private modulesService: ModulesService) {
  }

  ngOnInit() {
    this.modulesService.updateCoorMod.subscribe(res=>{
      this.setCoordinatorModulesValues(res); //! THIS IS TEMPORARY
      if (res.type!=0) this.modulesService.actualUser = res.usu;
    });
    this.setCoordinatorModulesValues({type:0,usu:null}); //! THIS IS TEMPORARY
    this.approved_modules$.subscribe(res=> {
      this.modulesService.approved_modules = res;
    });
    this.modules_$.subscribe(res=> {
      this.modulesService.all_modules = res;
    });
  }

  setCoordinatorModulesValues(coord){ //! THIS IS TEMPORARY
    if (coord.type==0) this.store.dispatch(new UpdateModulesTotal);
    else if (coord.type==1) this.store.dispatch(new UpdateCoins(coord.usu));
    else {
      this.store.dispatch(new UpdateModulesTotal);
      this.store.dispatch(new UpdateCoins(coord.usu));
    }
    // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));  
    
  }

}