import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../../../../services/global.service';
import { MunicipalityInfo } from '../../../../models/steps/previous-steps.model';

@Component({
  selector: 'form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements PresentationalBlockComponent, OnInit {
  type: 'presentational';
  component: string;
  settings: {    
    formsContent: any;
    buttons: string[];
    images: any[];
  };

  componentForm: FormGroup;
  fields: string[];
  sendingForm:boolean;
  glbls:any;

  municipalities:MunicipalityInfo[] = [];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private globals: GlobalService,
    ) {
    this.type = 'presentational';
    this.component = 'form';
    this.glbls = globals;
  }

  ngOnInit() {}

  setSettings(settings: any) {
    this.settings = { ...settings };
    this.componentForm = this.buildFormGroup(settings.formsContent);
    this.loadGroupedInfo(settings);
    console.log(this.componentForm.value)
  }

  private loadGroupedInfo(settings) {
    if(settings.formsContent['imageGroup']) 
      this.componentForm.addControl('imageGroup',this.buildGroupControl('imageGroup'));
    if(settings.formsContent['documentGroup']) 
      this.componentForm.addControl('documentGroup',this.buildGroupControl('documentGroup'));
  }

  private buildFormGroup(formContent: any): FormGroup {
    const formControls = this.getFormGroupControls(formContent)
    return this.fb.group(formControls);
  }

  private buildGroupControl(item_grouped): FormGroup { // for building formgroup for add image container
    const formControls = this.getFormControlProperty(item_grouped)
    return this.fb.group(formControls);
  }

  private getFormGroupControls(formContent): object {
    this.fields = Object.keys(formContent); // fields array to be looped for printing fields or titles
    const formContentNoTitles = this.fields.filter(f => { 
      return formContent[f].type!="title" && formContent[f].type!="image" && formContent[f].type!="prepend" 
    }); // just fields to be form-grouped
    const formControls = this.reduceFormControls(formContentNoTitles, formContent);
    
    return formControls
  }

  // RETURNS A FORMCONTROL OBJECT TO BE USED IN FORMGROUP
  private reduceFormControls(formContentFields, formContent): Object {
    let formReduced = formContentFields.reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(formControlName, formContent[formControlName])
        }
      },
      {} // This is the initial formControlsObj
    );

    return formReduced;
  }

  private getFormControlProperty(name: string, params: { value: any, validations: object } = { value: null, validations: null }): object {
    let defaultValue = '';

      // adding form control to Image or Document Group, when the form has images or Identification document to be added
    if (name==="imageGroup" || name==="documentGroup") {
      let itemGroupContent =  Object.keys(this.settings.formsContent[name].fields);
      let formControls = this.reduceFormControls(itemGroupContent, this.settings.formsContent[name].fields);     
      
      return formControls;
    } 
    else {
      if (!isNullOrUndefined(params.value)) defaultValue = params.value;
      if (Object.keys(params.validations).length===1 && !params.validations['required'])
          return { [name]: [defaultValue] };
      else 
          return { [name]: [defaultValue, this.getValidators(params.validations)] };
    }    
  }

  private getValidators(validations: object): Validators {
    const fieldValidators = Object.keys(validations).map(validator => {
      if (validator === 'required') 
        return Validators[validator];
      else 
        return Validators[validator](validations[validator]);      
    });

    return fieldValidators;
  }

  trackByFn(index: number): number {
    return index;
  }

  hasErrors(field: string, isPrepend: boolean = false): string | null {
    const errors: any = !isPrepend? this.componentForm.get(field).errors : this.componentForm.controls[field].get('prependInput').errors;
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE :
             (errors.pattern || errors.minlength || errors.maxlength) ? 
             (!isPrepend? this.settings.formsContent[field].messages.pattern : this.settings.formsContent[field].fields['prependInput'].messages.pattern) :
             null;
    }

    return null;
  }

  prevDef(e){ //PREVENTING SUBMITTING FORM WHEN ENTER KEY PRESSED IN TETAREA OR ONY BUTTON INSIDE FORM
    if (e.target.tagName.toLowerCase()!==("textarea") && e.target.tagName.toLowerCase()!==("button")) {
      e.preventDefault() 
    }    
  }

  // submitting form
  onSubmitForm(cf: FormGroup) { //cf: component form
    this.sendingForm = true;
    console.log('submitting form');   
    
    setTimeout(() => {
      this.sendingForm = false;
      console.log('form submitted'); 
      cf.reset();
      this.municipalities = [];
      this.toastr.success(
        'form submitted',
        '',
        { positionClass: 'toast-bottom-right' }
      );
    }, 3000);
  }


  // filling municipalities according to selected state
  private fillMunicipalities(state_id="default",munId='') {
    if (state_id=="default") this.municipalities = [];
    else {
      this.municipalities = this.settings.formsContent['addressMunicipality'].options.filter(m => {return m.state.id == state_id}); 
    }   

    this.componentForm.patchValue({addressMunicipality:munId});
  }
  // UPDATES MUNICIPALITIES ACCORDING TO SELECTED STATE
  updateMuns(bool:boolean = true){
    if(bool) {
      let currStateId = "default";
      currStateId = this.componentForm.controls['addressState'].value && this.componentForm.controls['addressState'].value.length>0? 
        this.componentForm.controls['addressState'].value :
        "default";      
    
      this.fillMunicipalities(currStateId);
    }    
  }

  focusDatePicker(e) {
    e.focus();
  }

  // CHECKS IF THE CURRENT FORMcONTENT ITEM IS FOR PRINTING A FIELD (TRUE), FALSE --> IMAGE_GROUP || TITLE
  isField(field) {
    return this.settings.formsContent[field].type != "title" && this.settings.formsContent[field].type != "image";
  }
}