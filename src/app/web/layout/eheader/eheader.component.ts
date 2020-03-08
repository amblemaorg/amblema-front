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
    this.store.dispatch(new UpdateModulesTotal);
    // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));  
    this.store.dispatch(new UpdateCoins('5e60009d945835d1a73bb2f9'));
    this.approved_modules$.subscribe(res=> {
      this.modulesService.approved_modules = res;
    });
    this.modules_$.subscribe(res=> {
      this.modulesService.all_modules = res;
    });
  }

}