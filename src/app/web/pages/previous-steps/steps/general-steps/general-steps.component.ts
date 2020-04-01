import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-general-steps',
  templateUrl: './general-steps.component.html',
  styleUrls: ['./general-steps.component.scss']
})
export class GeneralStepsComponent implements OnInit {
  arrow = faChevronDown;

  @Input() mode:number = 1;// 1=general, 2=coordinador, 3=padrino, 4=escuela
  @Input() steps = [];

  constructor(private embedService: EmbedVideoService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  getVideo(url) {
    return this.embedService.embed(url);
  }

  sanitizeFile(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  clickUpload(btn) {
    btn.getElementsByClassName('hide-upload-btn')[0].click();
  }

  checkChange(e,item,pos) {
    if (this.steps[item].checklist[pos].checked) {
      this.steps[item].checklist[pos].checked = e.target.checked;
    } else {
      if (this.steps[item].checklist[pos].checked==false) {
        this.steps[item].checklist[pos].checked = e.target.checked;
      } else {
        this.steps[item].checklist[pos]["checked"] = e.target.checked;
      }
    }   
    // console.log(this.steps[item].checklist); 
  }

  saveChecks(i) {
    console.log(this.steps[i].checklist)
  }

  fileMngr(e,i) {
    if (this.steps[i].fileAttached) {
      this.steps[i].fileAttached = {
        name: <File>e.target.files[0].name,
        file: <File>e.target.files[0]
      }
    } else {
      this.steps[i]["fileAttached"] = {
        name: <File>e.target.files[0].name,
        file: <File>e.target.files[0]
      }
    }
  }
  /* 
  const formData = new FormData();
  formData.append('file', this.form.controls.file.value) 
  */


  shortenName(name) {
    return name.length>16 ? (name.slice(0, 13)+'..') : name
  }

}
