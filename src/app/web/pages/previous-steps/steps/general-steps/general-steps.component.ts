import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-steps',
  templateUrl: './general-steps.component.html',
  styleUrls: ['./general-steps.component.scss']
})
export class GeneralStepsComponent implements OnInit {
  arrow = faChevronDown;

  @Input() mode:number = 1;// 1=general, 2=coordinador, 3=padrino, 4=escuela
  @Input() steps = [];

  constructor(private embedService: EmbedVideoService) {}

  ngOnInit() {
  }

  getVideo(url) {
    return this.embedService.embed(url);
  }

  clickUpload(btn) {
    
  }

  checkChange(e,item,pos) {
    this.steps[item].checks[pos].checked = e.target.checked;
    // console.log(this.steps[item].checks); 
  }

  imageMngr(e) {

  }

}
