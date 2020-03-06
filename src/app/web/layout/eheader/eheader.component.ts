import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../store/states/e-learning/coordinator-user.state';
import { UpdateModulesTotal } from '../../../store/actions/e-learning/learning-modules.actions';
import { UpdateCoins } from '../../../store/actions/e-learning/coordinator-user.actions';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.scss']
})
export class EheaderComponent implements OnInit {
  isBrowser;

  @Select(ModulesState.modules_total) modules_total$: Observable<number>;
  @Select(CoordinatorState.coins_total) coins$: Observable<number>;
  @Select(CoordinatorState.coordinator_modules_total) approved_modules_total$: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new UpdateModulesTotal);
    // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));  
    this.store.dispatch(new UpdateCoins('5e60009d945835d1a73bb2f9'));
  }

}