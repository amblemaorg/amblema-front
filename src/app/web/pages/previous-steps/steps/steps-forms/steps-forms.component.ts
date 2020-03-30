import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  doc_type = [
    {id:'1',name:'J'},
    // {name:'V'},
  ];  

  statesExample = [
    {id:'1',name:'Yaracuy'},
    {id:'2',name:'Lara'},
    {id:'3',name:'Zulia'},
  ];
  municipalitiesExample = [
    {id:'1',name:'Iribaren'},
    {id:'2',name:'Cocorote'},
    {id:'3',name:'Sucre'},
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
    cardType: ['V', [Validators.required]], //str (1=v, 2=j, 3=e),
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
    // isReferred: [false, [Validators.required]], //bool,
    // referredName: ['', [Validators.required]], //str,    
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmitSponsor(fo) { //fo: form object
    fo.reset(); 
  }
  onSubmitCoordinator(fo) { //fo: form object
    fo.reset(); 
  }

  prevDef(e){
    if (e.target.tagName.toLowerCase()!==("textarea") && e.target.tagName.toLowerCase()!==("button")) {
      e.preventDefault() 
    }    
  }

  validate(op){
    switch (this.who) {
      case 'sponsor':
        return this.sponsorForm.controls[op].status === 'INVALID' && this.sponsorForm.controls[op].dirty ? true:false;   
      case 'coordinator':
        return this.coordinatorForm.controls[op].status === 'INVALID' && this.coordinatorForm.controls[op].dirty ? true:false;   
    }
  }
  
  isEmpty(op){
    switch (this.who) {
      case 'sponsor':
        return !this.sponsorForm.controls[op].value || this.sponsorForm.controls[op].value === "" ? false:true;
      case 'coordinator':
        return !this.coordinatorForm.controls[op].value || this.coordinatorForm.controls[op].value === "" ? false:true;
    }
  }

}
