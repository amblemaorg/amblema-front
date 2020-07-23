import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { faAngleLeft, faAngleRight, faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ModulesService } from '../../../../../services/steps/modules.service';
import { Select } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Module } from '../../../../../models/steps/learning-modules.model';
import { ModulesState } from '../../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../../store/states/steps/project.state';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit, DoCheck {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlay = faPlay;
  faEye = faEye;
  faCheck = faCheck;

  forAdminSetFalse:boolean = false;

  modules = []; //! PARA PAGINADOR
  isLoading = [];
  pageOfItems: Array<any>; //! PARA PAGINADOR

  canCheck = true;

  project_id = '';
  user_type = '';
  user_id = '';

  @Select(ModulesState.modules_array) modules$: Observable<Module[]>;
  @Select(UserState.user_brief) coorBrf$: Observable<any>;
  @Select(StepsState.selected_proj_id) selected_proj_id$: Observable<string>;

  constructor(@Inject(DOCUMENT) private document: Document, private moduleService: ModulesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.modules$.subscribe(res => {
      this.modules = res;    
      this.isLoading = this.modules.map(m => { return false }); 
    });    

    this.selected_proj_id$.subscribe(res => {
      if (res) this.project_id = res;
    });

    this.coorBrf$.subscribe(res => {
      if (res.userId) this.user_id = res.userId;
      if (res.userType) this.user_type = res.userType;
      this.forAdminSetFalse = (res.userType=="0" || res.userType=="1") ? false : true;
    });
  }
  ngDoCheck() {    
    if (this.document.querySelectorAll('jw-pagination .page-item.next-item .page-link').length>0 && this.canCheck) {      
      this.document.querySelectorAll('jw-pagination .page-item.previous-item .page-link').item(0).innerHTML = this.document.getElementsByClassName('icon-back').item(0).innerHTML;
      this.document.querySelectorAll('jw-pagination .page-item.next-item .page-link').item(0).innerHTML = this.document.getElementsByClassName('icon-forward').item(0).innerHTML;
      this.canCheck = false;
    }    
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;      
  }

  checkApprove(id){
    if (!this.forAdminSetFalse) return true;
    else {
      let thereIsMod = this.moduleService.checkApprove(id);
      return thereIsMod ? (thereIsMod.status=="3"? true:false) : false
    }  
  }

  canEnable(mod:Module) { //? temporarly unused
    return this.moduleService.isPrevModuleDone(mod.id)
  }
  
  loadMod(i,modId) {
    this.isLoading[i] = true;
    this.router.navigate([`previous-steps/module-detail/${modId}`]);
  }

  goToSteps() {
    this.router.navigate(["previous-steps"]);
  }

  getModuleNum(module_id) {
    return this.moduleService.all_modules.map(function(e) { return e.id; }).indexOf(module_id) + 1;
  }

}