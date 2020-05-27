import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StateInfo, MunicipalityInfo } from '../../../../../models/steps/previous-steps.model';
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
  @Input() user_id:string;
  @Input() approvalHistory:any[] = [];

  @Output() emitMessage:EventEmitter<any> = new EventEmitter();
  @Output() emitUpdate:EventEmitter<any> = new EventEmitter();

  sendingForm:boolean;  

  doc_type = [
    {id:'1',name:'J'},
    // {name:'V'},
  ]; 
  
  addressZoneTypes = [
    {id:'1',name:'Sector'},
    {id:'2',name:'Barrio'},
    {id:'3',name:'Caserío'},
  ];

  statesData:StateInfo[] = [];
  municipalitiesData:MunicipalityInfo[] = [];

  companyTypes = [
    {id:'0',name:'Otro'},
    {id:'1',name:'Fábrica'},
    {id:'2',name:'Tienda'},
    {id:'3',name:'Negocio personal'},
    {id:'4',name:'Hacienda'},    
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
    contactEmail: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PTTRN)]],
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
    addressState: ['', [Validators.required]],//str addressID,
    addressMunicipality: ['', [Validators.required]],//str municipalityID,
    addressStreet: ['', [Validators.required]],//str (calle/carreras),
    addressCity: ['', [Validators.required]],//str,
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numeros,
    schoolType: ['', [Validators.required]],//str '1'=nacional, '2'=estadal, '3'=municipal,
    addressZoneType: ['1', [Validators.required]],//str '1'=sector, '2'=barrio, '3'=caserio,
    addressZone: ['', [Validators.required]],
    //
    principalFirstName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    principalLastName: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],//str,
    principalEmail: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]],//str,
    principalPhone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numero,
    //
    subPrincipalFirstName: ['', [Validators.pattern(LETTERS_PTTRN)]],//str,
    subPrincipalLastName: ['', [Validators.pattern(LETTERS_PTTRN)]],//str,
    subPrincipalEmail: ['', [Validators.pattern(EMAIL_PTTRN)]],//str,
    subPrincipalPhone: ['', [Validators.pattern(NUMBER_PTTRN)]],//str solo numeros,
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

    this.fillForm();
  }

  private fillForm() {
    if (this.approvalHistory.length > 0 && this.approvalHistory[this.approvalHistory.length-1].status!=3) {
      let data = this.approvalHistory[this.approvalHistory.length-1].data;
      switch (this.who) {
        case 'sponsor':
          this.fillSponsor(data);
          break; 
        case 'coordinator':
          this.fillCoordinator(data);
          break;     
        default:
          this.fillSchool(data);
          break;
      }
    }
  }

  disableThis() {
    return this.disable || this.status=='3' || 
    (this.approvalHistory.length>0 && this.approvalHistory[this.approvalHistory.length-1].status!="3");
  }
  showSendBtn() {
    return this.status!='3' && (this.approvalHistory.length==0 || (this.approvalHistory.length>0 && 
            this.approvalHistory[this.approvalHistory.length-1].status=="3") );
  }

  private fillStates() {
    this.statesData = this.setStates;
  }
  private fillMunicipalities(state_id="default",munId='') {
    if(this.setMuns && this.setMuns.length>0) {
      if (state_id=="default") this.municipalitiesData = [];
      else {
        this.municipalitiesData = this.setMuns.filter(m => {return m.state.id == state_id}); 
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
      user: this.user_id,
      project: this.project_id,
      email: this.sponsorForm.controls['email'].value,
      name: this.sponsorForm.controls['name'].value,
      rif: this.sponsorForm.controls['rif'].value,
      companyType: this.sponsorForm.controls['companyType'].value,
      companyPhone: this.sponsorForm.controls['phone'].value,
      address: this.sponsorForm.controls['addressStreet'].value,
      addressState:this.sponsorForm.controls['addressState'].value,
      addressMunicipality: this.sponsorForm.controls['addressMunicipality'].value,
      addressCity: this.sponsorForm.controls['addressCity'].value,
      contactFirstName: this.sponsorForm.controls['contactFirstName'].value,
      contactLastName: this.sponsorForm.controls['contactLastName'].value,
      contactPhone: this.sponsorForm.controls['contactPhone'].value,
      contactEmail: this.sponsorForm.controls['contactEmail'].value,
    }

    this.postForm(solicitudBody,fo,1);
  }

  onSubmitCoordinator(fo) { //fo: form object
    this.sendingForm = true;
    let solicitudBody = {
      user: this.user_id,
      project: this.project_id,
      firstName: this.coordinatorForm.controls['firstName'].value,
      lastName: this.coordinatorForm.controls['lastName'].value,
      cardType: this.coordinatorForm.controls['cardType'].value,//"str '1'=V '2'=J '3'=E",
      cardId: this.coordinatorForm.controls['cardId'].value,
      // birthdate: `${this.coordinatorForm.controls['birthdate'].value}T00:00:00.00`,
      birthdate: this.globals.dateStringToISOString(this.coordinatorForm.controls['birthdate'].value),
      gender: this.coordinatorForm.controls['gender'].value,
      addressState: this.coordinatorForm.controls['addressState'].value,
      addressMunicipality: this.coordinatorForm.controls['addressMunicipality'].value,
      addressCity: this.coordinatorForm.controls['addressCity'].value,
      address: this.coordinatorForm.controls['addressStreet'].value,
      addressHome: this.coordinatorForm.controls['addressHome'].value,
      email: this.coordinatorForm.controls['email'].value,
      phone: this.coordinatorForm.controls['phone'].value,
      homePhone: this.coordinatorForm.controls['homePhone'].value,
      profession: this.coordinatorForm.controls['profession'].value,
    }

    this.postForm(solicitudBody,fo,2);
  }

  onSubmitschool(fo) { //fo: form object
      this.sendingForm = true;
      let solicitudBody = {
        user: this.user_id,
        project: this.project_id,
        name: this.schoolForm.controls['name'].value,
        code: this.schoolForm.controls['code'].value,
        email: this.schoolForm.controls['email'].value,
        address: this.schoolForm.controls['addressStreet'].value,
        addressState: this.schoolForm.controls['addressState'].value,
        addressMunicipality: this.schoolForm.controls['addressMunicipality'].value,
        addressCity: this.schoolForm.controls['addressCity'].value,
        phone: this.schoolForm.controls['phone'].value,
        schoolType: this.schoolForm.controls['schoolType'].value,
        addressZoneType: this.schoolForm.controls['addressZoneType'].value,
        addressZone: this.schoolForm.controls['addressZone'].value,
        principalFirstName: this.schoolForm.controls['principalFirstName'].value,
        principalLastName: this.schoolForm.controls['principalLastName'].value,
        principalEmail: this.schoolForm.controls['principalEmail'].value,
        principalPhone: this.schoolForm.controls['principalPhone'].value,
        subPrincipalFirstName: this.schoolForm.controls['subPrincipalFirstName'].value,
        subPrincipalLastName: this.schoolForm.controls['subPrincipalLastName'].value,
        subPrincipalEmail: this.schoolForm.controls['subPrincipalEmail'].value.length > 0 ? 
                                this.schoolForm.controls['subPrincipalEmail'].value : null,
        subPrincipalPhone: this.schoolForm.controls['subPrincipalPhone'].value,
        nTeachers: this.schoolForm.controls['nTeachers'].value,
        nAdministrativeStaff: this.schoolForm.controls['nAdministrativeStaff'].value,
        nLaborStaff: this.schoolForm.controls['nLaborStaff'].value,
        nStudents: this.schoolForm.controls['nStudents'].value,
        nGrades: this.schoolForm.controls['nGrades'].value,
        nSections: this.schoolForm.controls['nSections'].value,
        schoolShift: this.schoolForm.controls['schoolShift'].value,
    }
  
      this.postForm(solicitudBody,fo,3);
  }

  private postForm(solicitudBody, fo, type) {
    this.stepsService.requestsFind(type,solicitudBody).subscribe(res => {
      this.sendingForm = false; 
      fo.reset();
      this.emitUpdate.emit({
        project_id: this.project_id,
        indd: this.index,
        modd:this.mode,
      });
    }, (error) => {
      this.sendingForm = false;
      this.emitMessage.emit({i:this.index,m:this.mode});
    }, ()=>{});  
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

  private fillSponsor(res){
    this.sponsorForm.setValue({
      selectedDoc: 'J',
      name: res.name? res.name:'',
      email: res.email? res.email:'',
      rif: res.rif? res.rif:'',
      addressState: res.addressState.id? res.addressState.id:'',
      addressMunicipality: res.addressMunicipality.id? res.addressMunicipality:'',
      addressStreet: res.address? res.address:'',
      addressCity: res.addressCity? res.addressCity:'',
      phone: res.companyPhone? res.companyPhone:'',
      companyType: res.companyType? res.companyType:'',
      contactFirstName: res.contactFirstName? res.contactFirstName:'',
      contactLastName: res.contactLastName? res.contactLastName:'',
      contactPhone: res.contactPhone? res.contactPhone:'',
      contactEmail: res.contactEmail? res.contactEmail:'',
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  private fillCoordinator(res){
    this.coordinatorForm.setValue({
      firstName: res.firstName? res.firstName:'',
      lastName: res.lastName? res.lastName:'',
      birthdate: this.globals.getDateFormat(res.birthdate? (new Date(res.birthdate) ) : (new Date() ) ),
      gender: res.gender? res.gender:'',
      cardType: res.cardType? res.cardType:'1',
      cardId: res.cardId? res.cardId:'',
      homePhone: res.homePhone? res.homePhone:'',
      addressState: res.addressState.id? res.addressState.id:'',
      addressMunicipality: res.addressMunicipality.id? res.addressMunicipality.id:'',
      addressStreet: res.address? res.address:'',
      addressCity: res.addressCity? res.addressCity:'',
      addressHome: res.addressHome? res.addressHome:'',
      email: res.email? res.email:'',
      phone: res.phone? res.phone:'',
      profession: res.profession? res.profession:'',
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  private fillSchool(res){
    this.schoolForm.setValue({
      name: res.name? res.name:'',
      email: res.email? res.email:'',
      code: res.code? res.code:'',
      addressState: res.addressState.id? res.addressState.id:'',
      addressMunicipality: res.addressMunicipality.id? res.addressMunicipality.id:'',
      addressStreet: res.address? res.address:'',
      addressCity: res.addressCity? res.addressCity:'',
      phone: res.phone? res.phone:'',
      schoolType: res.schoolType? res.schoolType:'',
      addressZoneType: res.addressZoneType? res.addressZoneType:'1',
      addressZone: res.addressZone? res.addressZone:'',
      //
      principalFirstName: res.principalFirstName? res.principalFirstName:'',
      principalLastName: res.principalLastName? res.principalLastName:'',
      principalEmail: res.principalEmail? res.principalEmail:'',
      principalPhone: res.principalPhone? res.principalPhone:'',
      //
      subPrincipalFirstName: res.subPrincipalFirstName? res.subPrincipalFirstName : '',
      subPrincipalLastName: res.subPrincipalLastName? res.subPrincipalLastName : '',
      subPrincipalEmail: res.subPrincipalEmail? res.subPrincipalEmail : '',
      subPrincipalPhone: res.subPrincipalPhone? res.subPrincipalPhone : '',
      //
      nTeachers: res.nTeachers? res.nTeachers:null,
      nAdministrativeStaff: res.nAdministrativeStaff? res.nAdministrativeStaff:null,
      nLaborStaff: res.nLaborStaff? res.nLaborStaff:null,
      nStudents: res.nStudents? res.nStudents:null,
      nGrades: res.nGrades? res.nGrades:null,
      nSections: res.nSections? res.nSections:null,
      schoolShift: res.schoolShift? res.schoolShift:'',
    });
    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  controlDate() {   
    return this.coordinatorForm.controls['birthdate'].value && this.coordinatorForm.controls['birthdate'].value.length>0;
  }

  focusDatePicker(e) {
    if (!this.disableThis()) {
      e.focus();
    }    
  }

}
