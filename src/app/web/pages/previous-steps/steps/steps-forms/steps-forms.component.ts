import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StateInfo, MunicipalityInfo } from '../../../../../models/steps/previous-steps.model';
import { ModulesService } from '../../../../../services/steps/modules.service';
import { Select } from '@ngxs/store';
import { StepsState } from '../../../../../store/states/steps/project.state';
import { Observable } from 'rxjs';
import { UserData } from '../../../../../models/steps/learning-modules.model';
import { GlobalService } from '../../../../../services/global.service';
import { StepsService } from '../../../../../services/steps/steps.service';

export const EMAIL_PTTRN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
export const LETTERS_PTTRN = /^[a-z A-Zá-úÁ-Ú]*$/;
export const LETTERS_NUMBERS_PTTRN = '^[a-z A-Zá-úÁ-Ú0-9]*$';
export const TEXT_PTTRN = /^[a-z A-Zá-úÁ-Ú0-9._~:/?#\[\]@!\$&'"\(\)\*\+,;=]*$/;
export const NUMBER_PTTRN = /^[0-9]*$/;
export const VIDEO_PTTRN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

@Component({
  selector: 'app-steps-forms',
  templateUrl: './steps-forms.component.html',
  styleUrls: ['./steps-forms.component.scss']
})
export class StepsFormsComponent implements OnInit {
  @Input() who:string;
  @Input() disable:boolean= false;
  @Input() setStates = [];
  @Input() setMuns = [];
  @Input() index:any;
  @Input() mode:any;
  @Input() status:string;
  @Input() project_id:string;
  @Input() has_sponsor:boolean = false;
  @Input() approvalHistory:any = [];

  @Output() emitMessage:EventEmitter<any> = new EventEmitter();

  @Select(StepsState.sponsor_info) sponsor$: Observable<UserData>;
  @Select(StepsState.coordinator_info) coordinator$: Observable<UserData>;
  @Select(StepsState.school_info) school$: Observable<UserData>;

  sendingForm:boolean;  

  doc_type = [
    {id:'1',name:'J'},
    // {name:'V'},
  ];  

  statesExample:StateInfo[] = [
    // {id:'1',name:'Yaracuy'},
    // {id:'2',name:'Lara'},
    // {id:'3',name:'Zulia'},
  ];
  municipalitiesExample:MunicipalityInfo[] = [
    // {id:'1',name:'Iribaren'},
    // {id:'2',name:'Cocorote'},
    // {id:'3',name:'Sucre'},
  ];
  companyTypes = [
    {id:'1',name:'Fabrica'},
    {id:'2',name:'Tienda'},
    {id:'3',name:'Negocio personal'},
    {id:'4',name:'Otro'},
  ];

  genders = [
    {id:'1',name:'Femenino'},
    {id:'2',name:'Masculino'},
  ];
  cardTypes = [
    {id:'1',name:'V'},
    {id:'2',name:'J'},
    {id:'3',name:'E'},
  ];

  schoolTypes = [
    {id:'1',name:'Nacional'},
    {id:'2',name:'Estadal'},
    {id:'3',name:'Municipal'},
  ];
  schoolShifts = [
    {id:'1',name:'Mañana'},
    {id:'2',name:'Tarde'},
    {id:'3',name:'Ambos'},
  ];

  sponsorForm = this.fb.group({
    selectedDoc: ['J'],
    name: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PTTRN)]],
    rif: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],
    addressState: ['', [Validators.required]],
    addressMunicipality: ['', [Validators.required]],
    addressStreet: ['', [Validators.required]],
    addressCity: ['', [Validators.required]],  
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]], 
    companyType: ['', [Validators.required]], //'1'=fabrica,'2'='tienda',3='negocio personal', 4='otro'
    contactFirstName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],
    contactLastName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],
    contactPhone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],
  });

  coordinatorForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]], //str,
    lastName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]], //str,
    birthdate: ['', [Validators.required]], //str isoformat,
    gender: ['', [Validators.required]], //str (1=femenino, 2=masculino),
    cardType: ['1', [Validators.required]], //str (1=v, 2=j, 3=e),
    cardId: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]], //str solo numeros,
    homePhone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]], //str(solo numeros),
    addressState: ['', [Validators.required]], //str stateID,
    addressMunicipality: ['', [Validators.required]], //str municipalityID, 
    addressStreet: ['', [Validators.required]],
    addressCity: ['', [Validators.required]], //str,
    addressHome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]], //str,
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]], //str solo numeros, 
    profession: ['', [Validators.required]], //str,  
  });

  schoolForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str(nombre de la escuela),
    email: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]],//str,
    code: ['', [Validators.required, Validators.pattern(LETTERS_NUMBERS_PTTRN)]],//str(codigo de la escuela),
    address: ['', [Validators.required]],//str,
    addressState: ['', [Validators.required]],//str addressID,
    addressMunicipality: ['', [Validators.required]],//str municipalityID,
    addressStreet: ['', [Validators.required]],//str (calle/carreras),
    addressCity: ['', [Validators.required]],//str,
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numeros,
    schoolType: ['', [Validators.required]],//str '1'=nacional, '2'=estadal, '3'=municipal,
    //
    principalFirstName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    principalLastName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    principalEmail: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]],//str,
    principalPhone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numero,
    //
    subPrincipalFirstName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    subPrincipalLastName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    subPrincipalEmail: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]],//str,
    subPrincipalPhone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numeros,
    //
    nTeachers: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    nAdministrativeStaff: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    nLaborStaff: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    nStudents: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    nGrades: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    nSections: [null, [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//int,
    schoolShift: ['', [Validators.required]],//str turno de la escuela ('1'=mañana, '2'=tarde, '3'=ambos),
  });

  makingRequest = false;
  glbls:any;
  constructor(private fb: FormBuilder, private stepsService: StepsService, private globals: GlobalService) { }

  ngOnInit() {
    this.fillStates();
    this.fillMunicipalities();

    this.glbls = this.globals;
    // this.fillForm();
    this.sponsor$.subscribe(res => {
      if(res && res.name && this.status=="3" && this.who=='sponsor') this.fillSponsor(res);
    });
    this.coordinator$.subscribe(res => {
      if(res && res.name && this.status=="3" && this.who=='coordinator') this.fillCoordinator(res);
    });
    this.school$.subscribe(res => {
      if(res && res.name && this.status=="3" && this.who=='school') this.fillSchool(res);
    });
    /* if(this.who=='sponsor' && this.approvalHistory.length>0) {
      if(this.approvalHistory[this.approvalHistory.length-1].status!="3" && !this.makingRequest) {
        this.makingRequest = true;
        this.stepsService.getFindSponsor(this.approvalHistory[this.approvalHistory.length-1].id).subscribe(res => {
          this.makingRequest = false;
          this.fillSponsor(res);          
        });
      }      
    }
    if(this.who=='coordinator' && this.approvalHistory.length>0) {
      if(this.approvalHistory[this.approvalHistory.length-1].status!="3" && !this.makingRequest) {
        this.makingRequest = true;
        this.stepsService.getFindCoordinator(this.approvalHistory[this.approvalHistory.length-1].id).subscribe(res => {
          this.makingRequest = false;
          this.fillCoordinator(res);
        });
      }      
    }
    if(this.who=='school' && this.approvalHistory.length>0) {
      if(this.approvalHistory[this.approvalHistory.length-1].status!="3" && !this.makingRequest) {
        this.makingRequest = true;
        this.stepsService.getFindSchool(this.approvalHistory[this.approvalHistory.length-1].id).subscribe(res => {
          this.makingRequest = false;
          this.fillSchool(res);
        });
      }      
    } */
  }

  disableThis() {
    return this.disable || status=='3'
  }

  fillStates() {
    this.statesExample = this.setStates;
  }
  fillMunicipalities(state_id="default",munId='') {
    if(this.setMuns && this.setMuns.length>0) {
      if (state_id=="default") this.municipalitiesExample = [];
      else {
        this.municipalitiesExample = this.setMuns.filter(m => {return m.state.id == state_id}); 
      }   
      if (this.who=='sponsor') this.sponsorForm.patchValue({addressMunicipality:munId});
      else if(this.who=='coordinator') this.coordinatorForm.patchValue({addressMunicipality:munId});
      else if(this.who=='school') this.schoolForm.patchValue({addressMunicipality:munId});
    }
  }
  updateMuns(){
    let currStateId = "default";

    if (this.who=='sponsor') currStateId = this.sponsorForm.controls['addressState'].value && this.sponsorForm.controls['addressState'].value.length>0? this.sponsorForm.controls['addressState'].value:"default";      
    else if(this.who=='coordinator') currStateId = this.coordinatorForm.controls['addressState'].value && this.coordinatorForm.controls['addressState'].value.length>0? this.coordinatorForm.controls['addressState'].value:"default";      
    else if(this.who=='school') currStateId = this.schoolForm.controls['addressState'].value && this.schoolForm.controls['addressState'].value.length>0? this.schoolForm.controls['addressState'].value:"default";      
  
    this.fillMunicipalities(currStateId);
  }

  onSubmitSponsor(fo) { //fo: form object
    this.sendingForm = true;
    let solicitudBody = {
      // id: "str (solo lectura)",
      project: this.project_id,
      email: this.sponsorForm.controls['email'].value,
      name: this.sponsorForm.controls['name'].value,
      rif: this.sponsorForm.controls['rif'].value,
      companyType: this.sponsorForm.controls['companyType'].value,//"str ('1'=fabrica,'2'='tienda',3='negocio personal', 4='otro')",
      // companyOtherType: this.sponsorForm.controls[''].value,
      phone: this.sponsorForm.controls['phone'].value,
      address: this.sponsorForm.controls['addressStreet'].value,
      addressState:this.sponsorForm.controls['addressState'].value,
      addressMunicipality: this.sponsorForm.controls['addressMunicipality'].value,
      addressCity: this.sponsorForm.controls['addressCity'].value,
      addressStreet: this.sponsorForm.controls['addressStreet'].value,
      contactFirstName: this.sponsorForm.controls['contactFirstName'].value,
      contactLastName: this.sponsorForm.controls['contactLastName'].value,
      contactPhone: this.sponsorForm.controls['contactPhone'].value,
      // schoolContact: "str (1=director, 2=profesor, 3= padre, 4=vecino)",
      // schoolContactName: "str nombre y apellido"
    }
    this.postForm(solicitudBody,fo,1);
  }
  onSubmitCoordinator(fo) { //fo: form object
    this.sendingForm = true;
    let solicitudBody = {
      // id: "str (solo lectura)",
      project: this.project_id,
      firstName: this.coordinatorForm.controls['firstName'].value,
      lastName: this.coordinatorForm.controls['lastName'].value,
      cardType: this.coordinatorForm.controls['cardType'].value,//"str '1'=V '2'=J '3'=E",
      cardId: this.coordinatorForm.controls['cardId'].value,
      birthdate: `${this.coordinatorForm.controls['birthdate'].value}T00:00:00.00`,
      gender: this.coordinatorForm.controls['gender'].value,
      addressState: this.coordinatorForm.controls['addressState'].value,
      addressMunicipality: this.coordinatorForm.controls['addressMunicipality'].value,
      addressCity: this.coordinatorForm.controls['addressCity'].value,
      addressStreet: this.coordinatorForm.controls['addressStreet'].value,
      addressHome: this.coordinatorForm.controls['addressHome'].value,
      email: this.coordinatorForm.controls['email'].value,
      phone: this.coordinatorForm.controls['phone'].value,
      homePhone: this.coordinatorForm.controls['homePhone'].value,
      profession: this.coordinatorForm.controls['profession'].value,
      // isReferred: "bool",
      // referredName: "str nombre y apellido",
      // status: "str (1=pendiente, 2=aprobada)",
      // createdAt: "str solo lectura",
      // updatedAt: "str solo lectura"
    }
    this.postForm(solicitudBody,fo,2);
  }
  onSubmitschool(fo) { //fo: form object
      this.sendingForm = true;
      let solicitudBody = {
        // id: "str (solo lectura)",
        project: this.project_id,
        name: this.schoolForm.controls['name'].value,
        code: this.schoolForm.controls['code'].value,
        email: this.schoolForm.controls['email'].value,
        address: this.schoolForm.controls['address'].value,
        addressState: this.schoolForm.controls['addressState'].value,
        addressMunicipality: this.schoolForm.controls['addressMunicipality'].value,
        addressCity: this.schoolForm.controls['addressCity'].value,
        addressStreet: this.schoolForm.controls['addressStreet'].value,
        phone: this.schoolForm.controls['phone'].value,
        schoolType: this.schoolForm.controls['schoolType'].value,//"str '1'=nacional, '2'=estadal, '3'=municipal",
        principalFirstName: this.schoolForm.controls['principalFirstName'].value,
        principalLastName: this.schoolForm.controls['principalLastName'].value,
        principalEmail: this.schoolForm.controls['principalEmail'].value,
        principalPhone: this.schoolForm.controls['principalPhone'].value,
        subPrincipalFirstName: this.schoolForm.controls['subPrincipalFirstName'].value,
        subPrincipalLastName: this.schoolForm.controls['subPrincipalLastName'].value,
        subPrincipalEmail: this.schoolForm.controls['subPrincipalEmail'].value,
        subPrincipalPhone: this.schoolForm.controls['subPrincipalPhone'].value,
        nTeachers: this.schoolForm.controls['nTeachers'].value,
        nAdministrativeStaff: this.schoolForm.controls['nAdministrativeStaff'].value,
        nLaborStaff: this.schoolForm.controls['nLaborStaff'].value,
        nStudents: this.schoolForm.controls['nStudents'].value,
        nGrades: this.schoolForm.controls['nGrades'].value,
        nSections: this.schoolForm.controls['nSections'].value,
        schoolShift: this.schoolForm.controls['schoolShift'].value,//"str turno de la escuela ('1'=mañana, '2'=tarde, '3'=ambos)",
        // hasSponsor: this.has_sponsor,
        // status: "1",
    }
      // console.log(solicitudBody);
      /* if(this.status=="1" && this.approvalHistory.length==0) {
        this.postForm(solicitudBody,fo,3);
      } 
      else {
        let rqstApv = this.approvalHistory.length>0? this.approvalHistory[this.approvalHistory.length-1].status : "0";
        if (rqstApv=="3") this.postForm(solicitudBody,fo,3);
        else this.putForm(solicitudBody,fo,3,this.approvalHistory[this.approvalHistory.length-1].id);
      } */
      this.postForm(solicitudBody,fo,3);
  }

  postForm(solicitudBody, fo, type) {
    if(type==1) {
      this.stepsService.requestsFindSponsor(solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }
   
    if(type==2) {
      this.stepsService.requestsFindCoordinator(solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }

    if(type==3) {
      this.stepsService.requestsFindSchool(solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }
  }

  putForm(solicitudBody, fo, type, id) {
    if(type==1) {
      this.stepsService.updateFindSponsor(id,solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }
    
    if(type==2) {
      this.stepsService.updateFindCoordinator(id,solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }

    if(type==3) {
      this.stepsService.updateFindSchool(id,solicitudBody).subscribe(res => {  
        this.sendingForm = false; 
        fo.reset();
      }, (error) => {
        this.sendingForm = false;
        this.emitMessage.emit({i:this.index,m:this.mode});
      }, ()=>{});
    }
  }

  prevDef(e){
    if (e.target.tagName.toLowerCase()!==("textarea") && e.target.tagName.toLowerCase()!==("button")) {
      e.preventDefault() 
    }    
  }

  validate(op){
    if(!this.disableThis()) {
      switch (this.who) {
        case 'sponsor':
          return this.sponsorForm.controls[op].status === 'INVALID' && this.sponsorForm.controls[op].dirty ? true:false;   
        case 'coordinator':
          return this.coordinatorForm.controls[op].status === 'INVALID' && this.coordinatorForm.controls[op].dirty ? true:false;   
        case 'school':
          return this.schoolForm.controls[op].status === 'INVALID' && this.schoolForm.controls[op].dirty ? true:false;   
      }
    }    
  }
  
  isEmpty(op){
    if(!this.disableThis()) {
      switch (this.who) {
        case 'sponsor':
          return !this.sponsorForm.controls[op].value || this.sponsorForm.controls[op].value === "" ? false:true;
        case 'coordinator':
          return !this.coordinatorForm.controls[op].value || this.coordinatorForm.controls[op].value === "" ? false:true;
        case 'school':
          return !this.schoolForm.controls[op].value || this.schoolForm.controls[op].value === "" ? false:true;
      }
    }    
  }

  fillSponsor(res){
    this.sponsorForm.setValue({
      selectedDoc: 'J',
      name: res.name,
      email: res.email,
      rif: res.companyRif,
      addressState: res.addressState.id,
      addressMunicipality: res.addressMunicipality.id,
      addressStreet: res.address,
      addressCity: res.addressCity,
      phone: res.phone?res.phone:'',
      companyType: res.companyType,
      contactFirstName: res.contactFirstName,
      contactLastName: res.contactLastName,
      contactPhone: res.contactPhone,
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  fillCoordinator(res){
    this.coordinatorForm.setValue({
      firstName: res.firstName,
      lastName: res.lastName,
      birthdate: this.globals.getDateFormat(new Date(res.birthdate)),
      gender: res.gender,
      cardType: res.cardType,
      cardId: res.cardId,
      homePhone: res.homePhone,
      addressState: res.addressState.id,
      addressMunicipality: res.addressMunicipality.id,
      addressStreet: res.address,
      addressCity: res.addressCity,
      addressHome: res.addressHome,
      email: res.email,
      phone: res.phone?res.phone:'',
      profession: res.profession,
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  // fillSchool(res:UserData){
  fillSchool(res){
    this.schoolForm.setValue({
      name: res.name,
      email: res.email,
      code: res.code,
      address: res.address? res.address:'',
      addressState: res.addressState.id,
      addressMunicipality: res.addressMunicipality.id,
      addressStreet: res.addressStreet? res.addressStreet:'',
      addressCity: res.addressCity,
      phone: res.phone?res.phone:'',
      schoolType: res.schoolType,
      //
      principalFirstName: res.principalFirstName,
      principalLastName: res.principalLastName,
      principalEmail: res.principalEmail,
      principalPhone: res.principalPhone,
      //
      subPrincipalFirstName: res.subPrincipalFirstName,
      subPrincipalLastName: res.subPrincipalLastName,
      subPrincipalEmail: res.subPrincipalEmail,
      subPrincipalPhone: res.subPrincipalPhone,
      //
      nTeachers: res.nTeachers,
      nAdministrativeStaff: res.nAdministrativeStaff,
      nLaborStaff: res.nLaborStaff,
      nStudents: res.nStudents,
      nGrades: res.nGrades,
      nSections: res.nSections,
      schoolShift: res.schoolShift,
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  controlDate() {   
    return this.coordinatorForm.controls['birthdate'].value && this.coordinatorForm.controls['birthdate'].value.length>0;
  }

}
