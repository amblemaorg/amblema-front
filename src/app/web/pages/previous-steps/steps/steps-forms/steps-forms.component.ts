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

  statesExample = [
    {id:'1',name:'Yaracuy'},
    {id:'2',name:'Lara'},
    {id:'3',name:'Zulia'},
  ];

  sponsorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PTTRN)]],
    rif: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],
    addressState: ['', [Validators.required]],
    companyType: [''],
    companyOtherType: [''],
    phone: [''],
    address: [''],    
    addressMunicipality: [''],
    addressCity: [''],
    addressStreet: [''],
    contactFirstName: [''],
    contactLastName: [''],
    contactPhone: [''],
    hasSchool: [false],
    schoolName: [''],
    schoolCode: [''],
    schoolEmail: [''],
    schoolAddress: [''],
    schoolAddressState: [''],
    schoolAddressMunicipality: [''],
    schoolAddressCity: [''],
    schoolAddressStreet: [''],
    schoolPhone: [''],
    schoolType: [''],
    schoolPrincipalFirstName: [''],
    schoolPrincipalLastName: [''],
    schoolPrincipalEmail: [''],
    schoolPrincipalPhone: [''],
    schoolSubPrincipalFirstName: [''],
    schoolSubPrincipalLastName: [''],
    schoolSubPrincipalEmail: [''],
    schoolSubPrincipalPhone: [''],
    schoolNTeachers: [0],
    schoolNAdministrativeStaff: [0],
    schoolNLaborStaff: [0],
    schoolNStudents: [0],
    schoolNGrades: [0],
    schoolNSections: [0],
    schoolShift: [''],
    status: [''], 
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmitSponsor(fo) { //fo: form object
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
    }
  }
  
  isEmpty(op){
    switch (this.who) {
      case 'sponsor':
        return !this.sponsorForm.controls[op].value || this.sponsorForm.controls[op].value === "" ? false:true;
    }
  }

}
