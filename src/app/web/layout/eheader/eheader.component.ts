import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModulesService } from '../../../services/e-learning/modules.service';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.scss']
})
export class EheaderComponent implements OnInit {
  isBrowser;

  constructor(private moduleService: ModulesService) { 
    this.isBrowser = moduleService.isBrowser;
  }

  ngOnInit() {
    if (this.isBrowser) {
      $(document).scroll(function(){
        let doc = $(this).scrollTop();
        let header = $('.header-elearning').outerHeight();
  
        if (doc > 0) {
          $('.header-elearning').addClass('header-fixed');
          $('body').css('padding-top',header+'px');
        } else {
          $('.header-elearning').removeClass('header-fixed');
          $('body').css('padding-top','0');
        }
      }); 
    } 
  }

}