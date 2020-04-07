import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../store/states/e-learning/user.state';
import { UpdateModulesTotal } from '../../../store/actions/e-learning/learning-modules.actions';
import { UpdateUserInfo } from '../../../store/actions/e-learning/user.actions';
import { CoordinatorModule, Module } from '../../../models/steps/learning-modules.model';
import { ModulesService } from '../../../services/steps/modules.service';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.scss']
})
export class EheaderComponent implements OnInit {
  isBrowser;

  @Select(ModulesState.modules_total) modules_total$: Observable<number>;
  @Select(ModulesState.modules_array) modules_$: Observable<Module[]>;
  @Select(UserState.coins_total) coins$: Observable<number>;
  @Select(UserState.coordinator_modules_total) approved_modules_total$: Observable<number>;
  @Select(UserState.coordinator_modules) approved_modules$: Observable<CoordinatorModule[]>;
  @Select(UserState.user_brief) userBrief$: Observable<any>;
  @Select(UserState.user_type) user_type$: Observable<string>;

  constructor(private store: Store, private modulesService: ModulesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.modulesService.updateCoorMod.subscribe(res=>{
      this.setUserValues(res); //! THIS IS TEMPORARY
      if (res.type!=0) this.modulesService.actualUser = {user:res.usu,type:res.usut};
    });

    //! ------------------------- THIS IS TEMPORARY -----------------------------------------------------------------------------------------------------
    if (this.route.snapshot.params && this.route.snapshot.params.user) this.setUserValues({type:1,usu:this.route.snapshot.params.user,usut:(+this.route.snapshot.params.type)});
    else {
      if (this.modulesService.actualUser.user.length==0) this.setUserValues({type:1,usu:'5e8256b83640bd4be811444a',usut:2});
      else this.setUserValues({type:1,usu:this.modulesService.actualUser.user,usut:this.modulesService.actualUser.type});
    }
    //! -------------------------------------------------------------------------------------------------------------------------------------------------

    // this.setCoordinatorModulesValues({type:0,usu:null}); //! THIS IS TEMPORARY
    this.approved_modules$.subscribe(res=> {
      this.modulesService.approved_modules = res;
    });
    this.modules_$.subscribe(res=> {
      this.modulesService.all_modules = res;
    });
  }

  setUserValues(user){ //! THIS IS TEMPORARY
    if (user.type==0) this.store.dispatch(new UpdateModulesTotal);
    else if (user.type==1) this.store.dispatch(new UpdateUserInfo(user.usu,user.usut));
    else {
      this.store.dispatch(new UpdateModulesTotal);
      this.store.dispatch(new UpdateUserInfo(user.usu,user.usut));
    }
    // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));  
    
  }

}