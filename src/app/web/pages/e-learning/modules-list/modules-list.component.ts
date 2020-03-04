import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ModulesService } from '../../../../services/e-learning/modules.service';

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

  modules = []; //! PARA PAGINADOR
  pageOfItems: Array<any>; //! PARA PAGINADOR

  canCheck = true;

  constructor(@Inject(DOCUMENT) private document: Document, private moduleService: ModulesService) { }

  ngOnInit() {
    this.moduleService.getMods().subscribe( res => {
      this.modules = res;
      // console.log(res);
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

}