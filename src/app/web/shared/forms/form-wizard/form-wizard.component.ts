import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'web-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  @Input()  readonly formsContent: any;
  @Output() readonly submit: EventEmitter<any> = new EventEmitter<any>();
  private stepItems: Array<any>;
  private activeStepIndex: number;
  private lastStepIndex: number;
  private stepsContent: Array<any>;
  private dataToSubmit: any = null;
  private fields: Array<Array<string>>;
  private formWizard: Array<FormGroup>;
  private isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.activeStepIndex = 0;
    this.formWizard = [];
    this.stepsContent = [];
    this.fields = [];
    this.stepItems = cloneDeep(this.formsContent);
    this.stepItems.forEach((data, i) => {
      const index = this.appendStepContent(this.stepItems[i]['data']);
      const formGroupBuilt = this.buildFormGroupStep(this.stepsContent[index]);
      this.formWizard.push(formGroupBuilt);
    });
    this.lastStepIndex = this.getLastStepIndex();
    this.subscribeDependentFields();
  }

  private appendStepContent(content: object): number {
    const newStepsContentLength = this.stepsContent.push(content);
    const stepContentIndex = newStepsContentLength - 1;
    this.fields.push(Object.keys(this.stepsContent[stepContentIndex]));
    this.addIdentificationFieldsToStepContent(stepContentIndex, content);
    return stepContentIndex;
  }

  private addIdentificationFieldsToStepContent(index: number, content: object): void {
    Object.entries(content).map(field => {
      const { 0: fieldName, 1: fieldProps } = { ...field };
      if ( this.isFormControlTypeof(fieldName, 'identification') ) {
        Object.entries(fieldProps.subfields).map(subfield => {
          const { 0: subfieldType, 1: subfieldProps } = { ...subfield };
          const subfieldName = subfieldProps['name'];
          this.stepsContent[index][subfieldName] = subfieldProps;
        })
      }
    })
  }

  private isFormControlTypeof(formControlName: string, formControlType: string): boolean {
    let isTypeof = false;
    this.stepsContent.map(stepContent => {
      if (stepContent[formControlName]) {
        isTypeof = stepContent[formControlName].type === formControlType;
      }
    })
    return isTypeof;
  }

  private buildFormGroupStep(stepContent: any): FormGroup {
    const formControls = this.getFormGroupControls(stepContent)
    return this.fb.group(formControls);
  }

  private getFormGroupControls(stepContent): object {
    const formControls = Object.keys(stepContent).reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(formControlName, stepContent[formControlName])
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

  // get validation error messages per error, per field
  private getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.formWizard[formIndex].get(formFieldName).errors;
    const errorMessages = this.stepsContent[formIndex][formFieldName].errors;
    const validationError = errorMessages[Object.keys(formErrors)[0]];
    return validationError;
  }

  private onSubmit(): void {
    this.updateDataToSubmit();
    if (this.isValid()) {
      this.isSubmitting = true;
      this.submit.emit(this.dataToSubmit);
    }
    else {
      this.toastr.error(
        'Uno o más campos del formulario son inválidos',
        '',
        { positionClass: 'toast-bottom-right' }
      );
    }
  }

  private updateDataToSubmit(): void {
    this.dataToSubmit = this.formWizard.reduce(
      (dataGathered, currentForm: FormGroup, i) => {
        let currentFormValues = {};
        if (this.isStepWriteable(i)) {
          currentFormValues = { ...this.getFormGroupValues(currentForm) };
        }
        return { ...dataGathered, ...currentFormValues };
      },
      {} // Initial value for dataGathered
    );
  }

  private isStepWriteable(stepIndex: number): boolean {
    let condition = this.stepItems[stepIndex].condition;
    let isWriteable = true;
    if (!this.checkStepOrFieldCondition(condition)) {
      isWriteable = false;
    }
    return isWriteable;
  }

  private checkStepOrFieldCondition(condition: any): boolean {
    if (
      typeof condition == 'object'
      && !isNullOrUndefined(this.dataToSubmit)
      && !isNullOrUndefined(condition.value)
      && !isNullOrUndefined(condition.formControlName)
      && typeof condition.formControlName == 'string'
      && this.dataToSubmit[condition.formControlName] !== condition.value
    ) {
      return false;
    }
    else {
      return true;
    }
  }

  private getFormGroupValues(form: FormGroup): object {
    const formDataValues = {};
    Object.entries(form.value).map(field => {
      // Destructuring array into variables with names
      const { 0: fieldProp, 1: fieldValue } = { ...field };
      if (this.isFormControlTypeof(fieldProp, 'date')) {
        formDataValues[fieldProp] = this.dateStringToISOString(fieldValue);
      }
      else {
        formDataValues[fieldProp] = fieldValue;
      }
    });
    return formDataValues;
  }

  private dateStringToISOString(value: any): string {
    if (typeof value !== 'string' || value === '') {
      return '';
    }
    const newDate = new Date(value);
    return newDate.toISOString();
  }

  public isValid(): boolean {
    return this.formWizard.reduce(
      (validFlag: boolean, formStep: FormGroup, i) => {
        if (this.isStepWriteable(i)) {
          return validFlag && formStep.valid;
        }
        return validFlag && true;
      },
      true // Initial value for validFlag
    )
  }

  private subscribeDependentFields() {
    this.stepsContent.map((stepContent, i) => {
      Object.keys(stepContent).map(prop => {
        if (
          stepContent[prop].condition
          && stepContent[prop].condition.formControlName
          && stepContent[prop].condition.value
        ) {
          let conditionalFormControlName = stepContent[prop].condition.formControlName;
          let conditionalFormControl = this.getFormControlInFormWizard(conditionalFormControlName);
          let dependentFormControl =  this.getFormControlInFormWizard(prop);
          conditionalFormControl.valueChanges.subscribe(currentValue => {
            if ( currentValue == stepContent[prop].condition.value )
              dependentFormControl.enable();
            else
              dependentFormControl.disable();
          })
        }
      })
    })
  }

  private getFormControlInFormWizard(name: string): FormControl {
    let formControl = null;
    this.formWizard.map(formStep => {
      if (formStep.controls[name])
        formControl = formStep.controls[name]
    });
    return formControl;
  }

  public goToStep(step: number): void {
    this.updateDataToSubmit();
    step = this.validateStep(step);
    if (this.isStepWriteable(step)) {
      this.activeStepIndex = step;
    }
    else {
      if (this.stepMovement(step) == 'next') {
        this.goToStep(step + 1);
      }
      else if (this.stepMovement(step) == 'prev') {
        this.goToStep(step - 1);
      }
    }
  }

  private validateStep(step: number) {
    if ( step < 0 ) {
      step = 0;
    }
    if ( step > this.getLastStepIndex() ) {
      step = this.getLastStepIndex();
    }
    return step;
  }

  public getLastStepIndex(): number {
    let lastIndex = this.stepItems.length - 1;
    while(!this.isStepWriteable(lastIndex) || lastIndex == 0) {
      --lastIndex;
    }
    this.lastStepIndex = lastIndex;
    return this.lastStepIndex
  }

  private stepMovement(step: number) {
    return step > this.activeStepIndex ? 'next' : 'prev';
  }

  public clear(): void {
    this.formWizard.map((wizardFormStep: FormGroup) => {
      wizardFormStep.reset(this.getFormControlsWithDefaultValue());
    })
    this.activeStepIndex = 0;
    this.updateDataToSubmit();
  }

  private getFormControlsWithDefaultValue(): object {
    let formControls = {};
    this.stepsContent.map((stepContent, i) => {
      Object.keys(stepContent).map(prop => {
        if ( !isNullOrUndefined(stepContent[prop].value) ) {
          formControls[prop] = stepContent[prop].value;
        }
      });
    })
    return formControls;
  }

  public setIsSubmitting(value: boolean) {
    this.isSubmitting = value;
  }

  public getIsSubmitting(): boolean {
    return this.isSubmitting;
  }

  trackByFn(index: number): number {
    return index;
  }
}
