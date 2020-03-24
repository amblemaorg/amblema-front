import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-general-steps',
  templateUrl: './general-steps.component.html',
  styleUrls: ['./general-steps.component.scss']
})
export class GeneralStepsComponent implements OnInit {
  // @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;  

  @Input() mode:number = 1;// 1=general, 2=coordinador, 3=padrino, 4=escuela
  @Input() steps = [];

  constructor(private embedService: EmbedVideoService) {}

  ngOnInit() {
  }

  toggleVideo(event: any) {
    // this.videoplayer.nativeElement.play();
  }

  getVideo(url) {
    return this.embedService.embed(url);
  }

  clickUpload(btn) {
    
  }

}
