import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../store/states/e-learning/user.state';
import { UpdateModulesTotal } from '../../../store/actions/e-learning/learning-modules.actions';
import { UpdateUserInfo } from '../../../store/actions/e-learning/user.actions';
import { CoordinatorModule, Module } from '../../../models/steps/learning-modules.model';
import { ModulesService } from '../../../services/steps/modules.service';
import { UpdateStepsProgress } from '../../../store/actions/steps/project.actions';
import { StepsService } from '../../../services/steps/steps.service';

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

  constructor(private store: Store, private modulesService: ModulesService, private route: ActivatedRoute, private stepsService: StepsService) {
  }

  ngOnInit() {
    this.modulesService.updateCoorMod.subscribe(res=>{
      this.setUserValues(res); //! THIS IS TEMPORARY
    });
  
    //! ------------------------- THIS IS TEMPORARY -----------------------------------------------------------------------------------------------------
    if (this.route.snapshot.params && this.route.snapshot.params.idUser) 
      this.setUserValues({
        type:1,
        usu: this.route.snapshot.params.idUser,
        usut: (+this.route.snapshot.params.userType),
        project: this.route.snapshot.params.idProject
      });
    else if (this.route.snapshot.children.length>0) {
      if (this.route.snapshot.children[this.route.snapshot.children.length-1].params && 
          this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser) {
            this.setUserValues({
              type:1,usu:this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser,
              usut:(+this.route.snapshot.children[this.route.snapshot.children.length-1].params.userType),
              project: this.route.snapshot.children[this.route.snapshot.children.length-1].params.idProject
            });
      }
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
    // if (user.type==0) this.store.dispatch(new UpdateModulesTotal);
    // else if (user.type==1) this.store.dispatch(new UpdateUserInfo(user.usu,user.usut));
    // else {
      this.store.dispatch(new UpdateModulesTotal);
      this.store.dispatch(new UpdateUserInfo(user.usu,user.usut));
      this.store.dispatch(new UpdateStepsProgress(user.project)).subscribe(res=>{
        this.stepsService.enableTabMethod(true);
      });
    // }
    // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));  
    
  }

}