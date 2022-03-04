import { AbstractControl } from "@angular/forms";

export interface FormBlockField {
  [key: string]: {
    label: string;
    placeholder: string;
    validations?: {};
    fullwidth?: boolean;
    options?: FormBlockFieldOption[];
  };
}

export interface FormBlockFieldOption {
  id: string;
  name: string;
}

export interface FormBlockOptions {
  formId: string | number;
  defaultData?: any;
  dep?: {};
  custom?: any;
}

export abstract class FormBlockAbstract {
  init() {}
  constructor(id: string | number, options?: FormBlockOptions, dep?: {}) {}
}

/**
 * @description Class model to be inherit for customs Form Class. The main idea is manage (settings, request to fill options or anything) each form
 * grouping code by classes to get a clean order.
 * @author Christopher Dallar
 * @date 23/02/2022
 * @export
 * @class FormBlock
 */
export class FormBlock {
  isInit = false; // To know if this specific Form is initialized
  fields: FormBlockField[] = []; // [{'specialty': {label: '', placeholder: ''}}]
  custom: any; // To add extra data freely
  defaultData: any; // pre-settings from any file view config.ts like school-data-config.ts
  dep?: Object; // Dependencies needed form each specific form class

  // public defaultData?: any, protected dep?: {}
  constructor(
    public id: string | number,
    options: FormBlockOptions,
    dep?: Object
  ) {
    const { formId, defaultData, custom } = options;
    this.defaultData = defaultData;
    this.dep = dep;
    this.custom = custom;

    if (this.isForm(formId)) {
      if (this.defaultData) {
        // set Fields if exist default data
        this.fields = this.defaultData;
      }

      this.init(); // invocated immediately and just here

      this.isInit = true;
    }
  }

  // Return data to go over and use formGroup.setControl(data.name, data.newFormControl)
  getControlsToReplace(): {
    name: string;
    formControl: AbstractControl;
  }[] {
    return [];
  }

  // Keep cleaned, this is to be overload into Form Class inherited
  init() {}

  /**
   * @description Compare own form class id with formId that need form-block component to be instanced.
   * Also set as active (boolean true) if is equals
   * @author Christopher Dallar
   * @date 23/02/2022
   * @param {(string | number)} formId
   * @return
   * @memberof FormBlock
   */
  isForm(formId: string | number) {
    return this.id == formId;
  }

  fillSelect(key: string, options: FormBlockFieldOption[]) {
    this.fields[key].options = options;
  }

  getFields() {
    return this.fields;
  }

  getField(key: string) {
    return this.fields[key];
  }
}
