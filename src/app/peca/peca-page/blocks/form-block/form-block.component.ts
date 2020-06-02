import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../../../../services/global.service';
import { MunicipalityInfo } from '../../../../models/steps/previous-steps.model';
import { structureData } from './data-structure';

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
    tableCode?: string; // to know which table to update
    formType?: string; // to specify what action to take on the submit button
    buttonCode?: string; // to know if sending info to textsandbuttons component and specify which instance to manage
    isOneRow?: boolean;
    hideImgContainer?: boolean; // if view has image adder container set this to true
    modalCode?: string; // for views with modal inside
  };

  componentForm: FormGroup;
  fields: string[];
  doubleFields = {};
  sendingForm:boolean;
  glbls:any;

  id_:string;
  wrongDateDisabler = {};

  municipalities:MunicipalityInfo[] = [];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private globals: GlobalService,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer
    ) {
    this.type = 'presentational';
    this.component = 'form';
    this.glbls = globals;
  }

  ngOnInit() {
    this.componentForm.statusChanges.subscribe( (val) => {
      if (val==="INVALID" || this.isDateNotOk()) this.btnUpdater(null);
      else this.btnUpdater(this.componentForm.value);
    });

    this.globals.showImageContainerEmitter.subscribe(code => {
      if(this.settings.buttonCode && this.settings.buttonCode == code)
        this.settings.hideImgContainer = false;
    });

    this.setId();
  }

  btnUpdater(val) {
    if (this.settings.buttonCode)
      this.globals.buttonDataUpdater({
        code: this.settings.buttonCode,
        whichData: 'form',
        form: val,
      });
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
    this.componentForm = this.buildFormGroup(settings.formsContent);
    this.loadGroupedInfo(settings);
  }

  // for assigning unique id to this component instance -------------
  private setId() {
    if(!this.id_) this.id_ = Math.random().toString(36).substring(2);    
  }

  getId(field) {
    return field + '-' + this.id_;
  }
  // ----------------------------------------------------------------

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
    
    let formContentNoTitles = [];
    this.fields.map(f=> {
      if (formContent[f].type!="title" && formContent[f].type!="image" && formContent[f].type!="prepend") {
        if (formContent[f].type==="double") {
          let fieldsArr = Object.keys(formContent[f].fields);
          formContentNoTitles.push( ...fieldsArr.map(field => { 
            return {
              field: field,
              parent: f
            } 
          }) );          
          this.doubleFields[f] = fieldsArr;
        }
        else {
          if (formContent[f].type==="date") this.wrongDateDisabler[f] = false;
          formContentNoTitles.push({
            field: f,
            parent: null // means that this field is not a doubleFields field
          });
        }
      }
    });
    
    const formControls = this.reduceFormControls(formContentNoTitles, formContent, true);
    
    return formControls
  }

  // RETURNS A FORMCONTROL OBJECT TO BE USED IN FORMGROUP
  private reduceFormControls(formContentFields, formContent, isMainContent = false): Object {
    let formReduced = formContentFields.reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(
            isMainContent? formControlName.field : formControlName, 
            isMainContent? 
              (formControlName.parent? 
                formContent[formControlName.parent].fields[formControlName.field] : 
                formContent[formControlName.field]) : 
              formContent[formControlName]
          )
        }
      },
      {} // This is the initial formControlsObj
    );

    return formReduced;
  }

  private getFormControlProperty(name: string, params: { value: any, validations: object } = { value: null, validations: null }): object {
    let defaultValue = name==="imageSelected" || name==="imageSrc" ? null : '';

      // adding form control to Image or Document Group, when the form has images or Identification document to be added
    if (name==="imageGroup" || name==="documentGroup") {
      let itemGroupContent =  Object.keys(this.settings.formsContent[name].fields);
      if(name==="imageGroup") itemGroupContent.push(...['imageSelected','imageSrc']);
      let formControls = this.reduceFormControls(itemGroupContent, this.settings.formsContent[name].fields);     
      
      return formControls;
    } 
    else {
      if (!isNullOrUndefined(params.value)) defaultValue = params.value;
      if (
        isNullOrUndefined(params.validations) || 
        (
          Object.keys(params.validations).length===1 && 
          !params.validations['required']
        ) 
      )
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

  hasErrors(field: string, specialCase: boolean = false, field2: string = null): string | null {
    const errors: any = !specialCase? this.componentForm.get(field).errors : 
                        (!field2? this.componentForm.controls[field].get('prependInput').errors :
                          this.componentForm.get(field2).errors);
    if (errors) {
      return errors.required ? MESSAGES.REQUIRED_MESSAGE :
             (errors.pattern || errors.minlength || errors.maxlength) ? 
             (!specialCase? this.settings.formsContent[field].messages.pattern : 
              (!field2? this.settings.formsContent[field].fields['prependInput'].messages.pattern : 
                this.settings.formsContent[field2].messages.pattern) ) : null;
    }

    return null;
  }

  prevDef(e){ //PREVENTING SUBMITTING FORM WHEN ENTER KEY PRESSED IN TETAREA OR ONY BUTTON INSIDE FORM
    if (e.target.tagName.toLowerCase()!==("textarea") && e.target.tagName.toLowerCase()!==("button")) {
      e.preventDefault() 
    }    
  }

  // submitting forms
  onSubmitForm(cf: FormGroup) { //cf: component form
    this.sendingForm = true;
    console.log('submitting form');  
    
    let manageData = structureData(this.settings.formType, this.settings.formsContent, cf);

    let obj = {
      code: this.settings.tableCode,
      data: manageData.data,
      dataArr: [],
      resetData: false,
    }; 

    setTimeout(() => {
      this.sendingForm = false;
      console.log('form submitted'); 

      if (manageData.isThereTable) this.globals.tableDataUpdater(obj);  

      if (this.settings.modalCode) this.globals.ModalHider(this.settings.modalCode);
      
      // initializers
      cf.reset();
      this.municipalities = [];
      Object.keys(this.wrongDateDisabler).map(f => {
        this.wrongDateDisabler[f] = false;
      });
      //
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

  disableBtn() {
    return !this.componentForm.valid || this.sendingForm || this.isDateNotOk()
  }

  // CHECKS IF THE CURRENT FORMcONTENT ITEM IS FOR PRINTING A FIELD (TRUE), FALSE --> IMAGE_GROUP || TITLE
  isField(field) {
    return this.settings.formsContent[field].type != "title" && this.settings.formsContent[field].type != "image";
  }

  // wrong date save button enabler/disabler
  checkDateOk(e,mode,f) {
    if ( this.globals.validateDate(e,mode,true) || e.target.value==="" ) 
         this.wrongDateDisabler[f] = false;
    else this.wrongDateDisabler[f] = true;
  }

  isDateNotOk() { // for button specifically
    let bool = false
    Object.keys(this.wrongDateDisabler).map(f => {
      if (!this.wrongDateDisabler[f]) bool = true;
    });
    if (bool) return true;
    else return false;
  }
  // ---------------------------------------

  //? FOR IMAGE MANAGING ----------------------------------------------------------------
  // activate click function of the input type file button which calls for the image
  uploadImageCaller(imgBtnContainer) {
    imgBtnContainer.querySelectorAll('input[type="file"]')[0].click();
  }
  // adds the image file and image source to the imageGroup form control
  fileManager(e) {
    let reader = new FileReader();
    reader.readAsDataURL(<File>e.target.files[0]); 
    reader.onload = (_event) => {      
      this.componentForm.get('imageGroup').patchValue({ 
        imageSelected: <File>e.target.files[0],
        imageSrc: reader.result,
      });
    }    
  }
  // to disable add image button when conditions apply
  disableAddImgBtn(){
    return this.componentForm.controls['imageGroup'].get('imageDescription').value==="" 
        || this.componentForm.controls['imageGroup'].get('imageStatus').value==="" 
        || !this.componentForm.controls['imageGroup'].get('imageSelected').value;
  }  
  // shows image when some uploaded
  showImage(option: number) {
    switch (option) {
      case 1:
        return this.componentForm.controls['imageGroup'].get('imageSelected').value;
      case 2:
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.componentForm.controls['imageGroup'].get('imageSrc').value);    
      default:
        return this.componentForm.controls['imageGroup'].get('imageSelected').value.name;
    }    
  }
  // when X image remover is clicked
  removeSelectedImg() {
    this.componentForm.controls['imageGroup'].get('imageSelected').reset();
    this.componentForm.controls['imageGroup'].get('imageSrc').reset();
  }
  // method which sends image to the images table
  addImage() {
    let imgGrp = this.componentForm.controls['imageGroup'];
    let imageObj = {
      code: this.settings.tableCode,
      data: {
        image: imgGrp.get('imageSelected').value.name,
        description: imgGrp.get('imageDescription').value,
        state: imgGrp.get('imageStatus').value == "1" ? 'Visible':'No visible',
        status: 'En espera'
      },      
    };
    this.globals.tableDataUpdater(imageObj);
    this.componentForm.get('imageGroup').reset();  
  }
  //? -----------------------------------------------------------------------------------

  searchAndFillTable() {
    let obj = {
      code: this.settings.tableCode,
      dataArr: [],
      resetData: true,
    }; 

    switch (this.settings.formType) {
      case 'buscarEstudiante':
        obj.dataArr = [
          { name: 'Name 1', lastName: 'Lastname 1', doc: '123456789', sex: 'Femenino', age: '11', },
          { name: 'Name 2', lastName: 'Lastname 2', doc: '123456789', sex: 'Masculino', age: '13', },
          { name: 'Name 3', lastName: 'Lastname 3', doc: '123456789', sex: 'Femenino', age: '12', },
        ];
        break;
    
      default:
        break;
    }

    this.globals.tableDataUpdater(obj);
    this.componentForm.reset();  
  }
  
}