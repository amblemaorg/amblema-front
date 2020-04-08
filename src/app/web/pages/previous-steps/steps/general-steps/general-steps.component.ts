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

  enableChecksBtn(step:Step,bool=false) { 
    let enable = bool;   
    for (let i = 0; i < step.checklist.length; i++) {
      if (step.checklist[i].checked==(!bool) ) {
        enable = !bool;
        break;
      }
    }

    return enable;
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

  //? Sending Approval Request ----------------------------------------------------
  uploadApprovalRequest(step:Step,action:string,indd?,modd?) {
    step.sending = true;
    let formData = new FormData();       

    let getPosting = () => {
      // let stts = step.approvalType=="3"? '1': step.approvalType=="2"? '2': '1'; // status depending on approval type      
      if (action=='checklist' && step.approvalType!="3") {        
        formData.append('status', !this.enableChecksBtn(step,true)?"1":"2");
      }
      formData.append(step.approvalType=="3"?'stepId':'id', step.id);
      if(step.approvalType=="3") formData.append('project', this.project_id);
      // if(action=='Date') formData.append( step.approvalType=="3"?'stepDate':'date', this.getDateFormat( new Date() ) ); 
      if(action=='curriculum') formData.append(step.approvalType=="3"?'stepUploadedFile':'uploadedFile', step.uploadedFile.file);
      if(action=='checklist') formData.append(step.approvalType=="3"?'stepChecklist':'checklist', JSON.stringify(step.checklist));
    }     

    if(step.status=="1" && step.approvalHistory && step.approvalHistory.length==0) {
      getPosting();

      if(step.approvalType=="3") this.postAR(formData,step,action,indd,modd); // approval request
      else this.postSA(formData,step,action,indd,modd,this.project_id); // step approval
    } 
    else { // when a register of this approval request already exists
      let rqstApv = step.approvalHistory[step.approvalHistory.length-1].status; // approval request Status; located in the last item of the approval history.
      //posting
      if( (action=='curriculum' && (rqstApv=="3" || rqstApv=="4") ) || 
          (action=='checklist' && (rqstApv=="3" || step.approvalType!="3") ) ) { getPosting(); } // updating
      //putting
      if(action=='curriculum' && rqstApv=="1") formData.append('status', '4'); // cancels approval request // this is not reached by checklist btn
      if(action=='checklist' && rqstApv=="1" && step.approvalType=="3") formData.append('stepChecklist', JSON.stringify(step.checklist));
            
      //endpoint callers
      if ((action=='curriculum' && (rqstApv=="3" || rqstApv=="4") ) ||
          (action=='checklist' && (rqstApv=="3" || step.approvalType!="3") ) ) {
            if (step.approvalType=="3") this.postAR(formData,step,action,indd,modd);
            else this.postSA(formData,step,action,indd,modd,this.project_id);
          }
      else this.putAR(formData,step,action,indd,modd,step.approvalHistory[step.approvalHistory.length-1].id);
    }
  }

  // POSTER AND PUTTER
  updatingEmitting(step,indd,modd) {
    step.sending = false;
    this.callUpdate.emit(this.project_id);
    this.currentA = `${indd}-${modd}`;
  }   
  postAR(formData,step:Step,action,indd,modd) {
    this.stepsService.requestApproval(formData).subscribe(res=>{
      step.status = (action=='curriculum')? "2": "1";
      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
    });
  }
  postSA(formData,step:Step,action,indd,modd,proj_id) {
    this.stepsService.stepApproval(proj_id,formData).subscribe(res=>{
      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
    });
  }
  putAR(formData,step:Step,action,indd,modd,id) {
    this.stepsService.updateRequestApproval(id,formData).subscribe(res=>{
      if(step.status=="1") step.status = (action=='curriculum')? "2": "1";
      else step.status = "1"; // this is not reached by checklist btn

      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
    });
  }
  //

  getDateFormat(dateSrc:Date) {
    let numbers = [1,2,3,4,5,6,7,8,9];
    let correctMonth = numbers.includes(dateSrc.getMonth()) ? `0${dateSrc.getMonth()}` : dateSrc.getMonth().toString();
    let correctDate = numbers.includes(dateSrc.getDate()) ? `0${dateSrc.getDate()}` : dateSrc.getDate().toString();

    return `${dateSrc.getFullYear()}-${correctMonth}-${correctDate}`;
  }
  //? -----------------------------------------------------------------------------------------------------------------
}
