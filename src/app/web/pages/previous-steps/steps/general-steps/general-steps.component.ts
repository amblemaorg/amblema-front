import { Component, OnInit, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EmbedVideoService } from 'ngx-embed-video';
import { FormBuilder } from '@angular/forms';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { Step } from '../../../../../models/steps/previous-steps.model';
import { StepsService } from '../../../../../services/steps/steps.service';
import * as $ from 'jquery';
import { GlobalService } from '../../../../../services/global.service';
declare var $:any;

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
  @Input() user_id:string;
  @Input() project_id:string;
  @Input() confirmable:boolean;
  @Input() enableActions:boolean;
  @Input() setStates = [];
  @Input() setMuns = [];

  @Output() callUpdate:EventEmitter<string> = new EventEmitter();  

  isBrowser;
  glbls:any;
  constructor(@Inject(PLATFORM_ID) private platformId, private embedService: EmbedVideoService, 
    private sanitizer: DomSanitizer, private stepsService: StepsService, private globals: GlobalService) {
      this.isBrowser = isPlatformBrowser(platformId);
    }

  ngOnInit() {
    this.currentA = 0+'-'+this.mode;
    this.glbls = this.globals;
  }

  getCollapsed(i,m){
    return `${i}-${m}` == this.currentA
  }

  compareMode() {
    return this.mode!=(+this.user_type) && this.mode!=1;
  }
  isSelectorReadOnly() {
    return this.compareMode() && this.mode!=1 && !this.isAdmin();
  }

  checkStatus(step_status) {
    return step_status=="3"? "2":"1";
  }

  showConditioned(step:Step) { // show approve btn when is not find school, coordinator or sponsor
    return step.devName!="findCoordinator" && step.devName!="findSponsor" && step.devName!="findSchool";
  }

  isNotConfirmable(step:Step) {
    return !this.confirmable && step.devName=="amblemaConfirmation";
  }

  isAdmin() { //usertype 0 or 1 is super and admin
    return this.user_type=='0' || this.user_type=='1'
  }

  // METHOD THAT ALLOWS THE SENDER USER TO SEE THE CANCEL BUTTON FROM REQUEST STEP
  canUserSee(step:Step) {
    if(step.approvalHistory.length>0) {
      let bool = step.approvalHistory[step.approvalHistory.length-1].data? 
                (step.approvalHistory[step.approvalHistory.length-1].data.user? 
                true : false) : false;      
      if(bool) return step.status == "1" || step.approvalHistory[step.approvalHistory.length-1].status == "4" || 
        (step.status!="1" && step.approvalHistory[step.approvalHistory.length-1].data.user.id==this.user_id);
      else return false;
    } 
    else return true;
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
      file: <File>e.target.files[0],
      url: ''
    }
  }

  shortenName(name) {
    return name.length>16 ? (name.slice(0, 13)+'..') : name
  }

  getStatusName(num) {
    return num=="1" ? "Pendiente" : num=="2" ? "En aprobación" : num=="8" ? "Procesando" : "Aprobado";
  }

  //? Sending Approval Request ----------------------------------------------------
  approvalMethodCaller(e) { // aproval method caller from status selector component
    this.approvalMethod(e.step,e.index,e.mode,e.status);
  }
  approvalMethod(step:Step,indd?,modd?,status?) {
    step.sending = true;
    let formData = new FormData();       

    let getPosting = () => {
      if (step.hasChecklist && step.approvalType!="3") {        
        formData.append('status', !this.enableChecksBtn(step,true)?"1":"2");
      } else if (step.approvalType!="3" && step.approvalType!="4") {
        formData.append('status', step.status=="1"?"3":"1");
      }
      if (step.approvalType=="4") formData.append('status', status=="1"?"1":"3");      
      formData.append(step.approvalType=="3"?'stepId':'id', step.id);
      if(step.approvalType=="3") {
        formData.append('project', this.project_id);
        formData.append('user', this.user_id);
      }
      if(step.hasDate && step.date) formData.append( step.approvalType=="3"?'stepDate':'date', step.date); 
      if(step.hasUpload && step.uploadedFile && step.uploadedFile.url.length==0) formData.append(step.approvalType=="3"?'stepUploadedFile':'uploadedFile', step.uploadedFile.file);
      if(step.hasChecklist) formData.append(step.approvalType=="3"?'stepChecklist':'checklist', JSON.stringify(step.checklist));
    }     

    if( (step.status=="1" && step.approvalHistory && step.approvalHistory.length==0) || step.approvalType!="3") {
      getPosting();
         
      if(step.approvalType=="3") this.postAR(formData,step,indd,modd); // approval request
      else this.postSA(formData,step,indd,modd,this.project_id); // step approval
    } 
    else { // when a register of this approval request already exists
      let rqstApv = step.approvalHistory.length>0? step.approvalHistory[step.approvalHistory.length-1].status : "0"; // approval request Status; located in the last item of the approval history.
      //posting
      if( (step.hasUpload && (rqstApv=="3" || rqstApv=="4") ) || 
          (step.hasChecklist && (rqstApv=="3" || step.approvalType!="3") ) ) { getPosting(); } // updating
      //putting
      if(step.hasUpload && rqstApv=="1") formData.append('status', '4'); // cancels approval request // this is not reached by checklist btn
      if(step.hasChecklist && rqstApv=="1" && step.approvalType=="3") formData.append('stepChecklist', JSON.stringify(step.checklist));
      
      //endpoint callers
      if ((step.hasUpload && (rqstApv=="3" || rqstApv=="4") ) ||
          (step.hasChecklist && (rqstApv=="3" || step.approvalType!="3") ) ) this.postAR(formData,step,indd,modd);
      else if (step.status=="1") this.postAR(formData,step,indd,modd);
      else this.putAR(formData,step,indd,modd,step.approvalHistory[step.approvalHistory.length-1].id);
    }
  }

  setCurrentAccItem(indd,modd) {
    this.currentA = `${indd}-${modd}`;
  }
  // POSTER AND PUTTER
  updatingEmitting(step,indd,modd) {
    step.sending = false;
    this.callUpdate.emit(this.project_id);
    this.setCurrentAccItem(indd,modd);
  }   
  updateEmitterFromForm(e) {
    this.callUpdate.emit(e.project_id);
    this.setCurrentAccItem(e.indd,e.modd);
  }
  postAR(formData,step:Step,indd,modd) {
    this.stepsService.requestApproval(formData).subscribe(res=>{
      step.status = (step.hasUpload && step.approvalType=="3")? "2": step.approvalType=="1"? (step.status=="1"?"2":"1"): "1";
      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
      this.toasterMeth(indd,modd);
    });
  }
  postSA(formData,step:Step,indd,modd,proj_id) {
    this.stepsService.stepApproval(proj_id,formData).subscribe(res=>{
      step.status = "8"; // status 8 --> processing
      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
      this.toasterMeth(indd,modd);
    });
  }
  putAR(formData,step:Step,indd,modd,id) {
    let formDataStatus = new FormData(); 
    let isCancel = false;
    if (step.status!="1" && step.approvalType=="3") {
      console.log('canceling');
      formDataStatus.append('status', '4');   
      isCancel = true;   
    }

    this.stepsService.updateRequestApproval(id,isCancel?formDataStatus:formData,isCancel).subscribe(res=>{
      if(step.status=="1") step.status = (step.hasUpload)? "2": step.approvalType=="1"? (step.status=="1"?"2":"1"): "1";
      else step.status = "1"; // this is not reached by checklist btn

      this.updatingEmitting(step,indd,modd);

    },(error)=>{
      step.sending = false;
      this.toasterMeth(indd,modd);
    });
  }
  //? -----------------------------------------------------------------------------------------------------------------

  toasterMeth(i,m) {
    if (this.isBrowser) {
      $(`#toast${i}-${m}`).toast({delay: 5000});
      $(`#toast${i}-${m}`).toast('show');
    }
  }

  callToaster(e) {
    this.toasterMeth(e.i,e.m);
  }

  // if there ares everal steps that send information, this method handles that
  showSeveralsButton(step:Step) {
    return (step.hasChecklist && step.hasDate && step.hasUpload) || (step.hasChecklist && step.hasDate) || (step.hasChecklist && step.hasUpload) || (step.hasDate && step.hasUpload) || (!step.hasChecklist && step.hasDate && !step.hasUpload);
  }
  disableSeveralsButton(step:Step) {
    if(step.hasChecklist && step.hasDate && step.hasUpload) return !this.enableChecksBtn(step) || !step.uploadedFile || !step.date;
    if(step.hasChecklist && step.hasDate) return !this.enableChecksBtn(step) || !step.date;
    if(step.hasChecklist && step.hasUpload) return !this.enableChecksBtn(step) || !step.uploadedFile;
    if(step.hasDate && step.hasUpload) return !step.date || !step.uploadedFile;
    if(!step.hasChecklist && step.hasDate && !step.hasUpload) return !step.date;
    return false;
  }
  //

  getDateFrmt(step:Step) {
    let date = '';
    if(step.date) date = this.globals.getDateFormat(new Date(step.date));
    return date;
  }
  controlDate(e, step:Step) {   
    // if (!this.globals.validateDate(e,'greater',true)) step.date = `${e.target.value}T00:00:00.00`;
    if (!this.globals.validateDate(e,'greater',true)) step.date = this.globals.dateStringToISOString(e.target.value);
    else step.date = null;
  }

}


@Component({
  selector: 'status-selector',
  template: `
    <div class="form-group" [formGroup]="statusForm">
    <label [for]="step.devName">Modificar estatus:</label>
      <ng-select
        class="form-control"  
        [class.readonly]="isReadOnly"
        [items]="statuses"
        bindValue="id"
        bindLabel="name"
        [labelForId]="step.devName"
        formControlName="status"
        [virtualScroll]="true"
        [id]="step.devName"  
        [clearable]="false" 
        [searchable]="false"  
        [loading]="step.sending"
        [readonly]="shouldReadonly()"
        (change)="changeStatus()"         
      >
        <ng-template ng-option-tmp let-item="item" let-search="searchTerm">
          <small>{{item.name}}</small>
        </ng-template>
        
      </ng-select>
    </div>
  `,
  styleUrls: ['./general-steps.component.scss']
})
export class StatusSelectorComponent implements OnInit {
  @Input() step:Step;
  @Input() index:number;
  @Input() mode:number;
  @Input() isReadOnly:boolean;
  @Output() approvalMethodCallerEmitter:EventEmitter<any> = new EventEmitter();

  statuses = [
    {id:'1',name:'Por completar'},
    {id:'2',name:'Completado'},
  ];

  statusForm = this.fb.group({
    status: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formFiller();
  }

  formFiller() {
    this.statusForm.setValue({
      status: this.step.status=="3"? "2":"1"
    });
  }

  shouldReadonly() {
    return this.step.sending || (this.step.status!="1" && this.step.status!="3") || this.isReadOnly;
  }

  changeStatus() {
    this.approvalMethodCallerEmitter.emit({
      step: this.step,
      index: this.index,
      mode: this.mode,
      status: this.statusForm.controls['status'].value
    });
  }
}