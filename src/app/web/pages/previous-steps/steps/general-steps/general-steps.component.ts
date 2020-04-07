import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { Step } from '../../../../../models/steps/previous-steps.model';
import { StepsService } from '../../../../../services/steps/steps.service';

@Component({
  selector: 'app-general-steps',
  templateUrl: './general-steps.component.html',
  styleUrls: ['./general-steps.component.scss']
})
export class GeneralStepsComponent implements OnInit {
  arrow = faChevronDown;
  curriculumDone:boolean;
  currentA = ''; //to set current and open accordion item

  @Input() mode:number = 1;// 1=general, 2=coordinador, 3=padrino, 4=escuela
  @Input() steps = [];
  @Input() curriculumPending:boolean;
  @Input() user_type:string = "1";
  @Input() project_id:string;

  @Output() callUpdate:EventEmitter<string> = new EventEmitter();

  constructor(private embedService: EmbedVideoService, private sanitizer: DomSanitizer,
    private stepsService: StepsService) {}

  ngOnInit() {
    this.currentA = 0+'-'+this.mode;
  }

  getCollapsed(i,m){
    return `${i}-${m}` == this.currentA
  }

  compareMode() {
    return this.mode!=(+this.user_type);
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

  sendAttached(i) {
    console.log(this.steps[i]);
  }

  checkChange(e,item,pos) {
    this.steps[item].checklist[pos].checked = e.target.checked;
  }

  saveChecks(i) {
    console.log(this.steps[i].checklist)
  }

  fileMngr(e,i) {
    this.steps[i].uploadedFile = {  
      name: <File>e.target.files[0].name,
      file: <File>e.target.files[0]
    }
  }

  shortenName(name) {
    return name.length>16 ? (name.slice(0, 13)+'..') : name
  }

  getStatusName(num) {
    return num=="1" ? "Pendiente" : num=="2" ? "En aprobacion" : "Aprobado";
  }

  //Uploads the user's curriculum
  uploadCurriculum(step:Step,indd?,modd?) {
    step.sending = true;
    const curriculumFormData = new FormData();
    curriculumFormData.append('stepId', step.id);
    curriculumFormData.append('project', this.project_id);
    // curriculumFormData.append( 'date', this.getDateFormat( new Date() ) );    

    let getPosting = () => {
      curriculumFormData.append('status', '1');
      curriculumFormData.append('uploadedFile', step.uploadedFile.file); 
    }
    let updatingEmitting = () => {
      step.sending = false;
      this.callUpdate.emit(this.project_id);
      this.currentA = `${indd}-${modd}`;
    }

    if(step.status=="1" && step.approvalHistory && step.approvalHistory.length==0) {
      getPosting();

      this.stepsService.requestApproval(curriculumFormData).subscribe(res=>{
        step.status = "2";
        updatingEmitting();

      },(error)=>{
        step.sending = false;
      });
    } 
    else {
      if(step.status=="1") { getPosting(); } 
      else curriculumFormData.append('status', '4'); // cancels approval request

      let rqstApvId = step.approvalHistory[step.approvalHistory.length-1].id;

      this.stepsService.updateRequestApproval(rqstApvId,curriculumFormData).subscribe(res=>{
        if(step.status=="1") step.status = "2";
        else step.status = "1";

        updatingEmitting();

      },(error)=>{
        step.sending = false;
      });
    }    
  }

  getDateFormat(dateSrc:Date) {
    let numbers = [1,2,3,4,5,6,7,8,9];
    let correctMonth = numbers.includes(dateSrc.getMonth()) ? `0${dateSrc.getMonth()}` : dateSrc.getMonth().toString();
    let correctDate = numbers.includes(dateSrc.getDate()) ? `0${dateSrc.getDate()}` : dateSrc.getDate().toString();

    return `${dateSrc.getFullYear()}-${correctMonth}-${correctDate}`;
  }
}
