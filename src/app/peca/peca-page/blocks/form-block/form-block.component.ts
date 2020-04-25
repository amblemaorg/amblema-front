import { Component, OnInit } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../../../../services/global.service';

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
  };

  componentForm: FormGroup;
  fields: string[];
  sendingForm:boolean;
  glbls:any;

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
  }

  private buildFormGroup(formContent: any): FormGroup {
    const formControls = this.getFormGroupControls(formContent)
    return this.fb.group(formControls);
  }

  private getFormGroupControls(formContent): object {
    this.fields = Object.keys(formContent);
    const formControls = Object.keys(formContent).reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(formControlName, formContent[formControlName])
        }
      },
      {} // This is the initial formControlsObj
    );
    return formControls
  }

  private getFormControlProperty(name: string, params: { value: any, validations: object }): object {
    let defaultValue = '';
    if (!isNullOrUndefined(params.value)) {
      defaultValue = params.value;
    }
    if (Object.keys(params.validations).length===1 && !params.validations['required'])
        return { [name]: [defaultValue] };
    else 
        return { [name]: [defaultValue, this.getValidators(params.validations)] };
  }

  private getValidators(validations: object): Validators {
    const fieldValidators = Object.keys(validations).map(validator => {
      if (validator === 'required') {
        return Validators[validator];
      }
      else {
        return Validators[validator](validations[validator]);
      }
    });
    return fieldValidators;
  }

  trackByFn(index: number): number {
    return index;
  }

  hasErrors(field: string): string | null {
    const errors: any = this.componentForm.get(field).errors;
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE :
             (errors.pattern || errors.minlength || errors.maxlength) ? 
             this.settings.formsContent[field].messages.pattern :
             null;
    }

    return null;
  }

  prevDef(e){
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
      this.toastr.success(
        'form submitted',
        '',
        { positionClass: 'toast-bottom-right' }
      );
    }, 3000);
  }
}