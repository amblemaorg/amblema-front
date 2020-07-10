import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { isNullOrUndefined } from "util";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";
import { ToastrService } from "ngx-toastr";
import { GlobalService } from "../../../../services/global.service";
import { MunicipalityInfo } from "../../../../models/steps/previous-steps.model";
import { structureData } from "./data-structure";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";
import { Subscription, Observable } from "rxjs";
import { adaptBody } from "./fetcher-body-adapter";
import { Select, Store } from "@ngxs/store";
import { ResidenceInfoState } from "../../../../store/states/steps/residence-info.state";
import {
  FetchPecaContent,
  SetUser
} from "../../../../store/actions/peca/peca.actions";
import { PecaState } from "../../../../store/states/peca/peca.state";

@Component({
  selector: "form-block",
  templateUrl: "./form-block.component.html",
  styleUrls: ["./form-block.component.scss"]
})
export class FormBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: "presentational";
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
    data?: any; // data to fill all inputs
    dataFromRow?: any; // table's row data
    isFromCustomTableActions?: boolean; // indicates if button is going to take action based on custom table actions
    alwaysValidations?: boolean; // when imageGroup has extra fields (i.e. imageCargo) set this to true
    fetcherUrls: {
      // get: string;
      post: string;
      put: string;
      patch: string;
      // delete: string;
    };
    fetcherMethod?: "get" | "post" | "put" | "patch" | "delete";
    isEditable?: boolean; //It is for views that have data that can be edited
    notGenerateId?: boolean; // It is for forms that do not need to be assigned an id
    notResetForm?: boolean; //It is for events that do not require the component to be reset
    makesNoRequest?: boolean; // if true, this form makes no request to api
    methodUrlPlus?: string; // if fetcher method url cannot be set in the initial component use this prop, to complete it
    tableRefreshName?: string; // to refresh table in the initial setter component
  };

  pecaId: string;
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;
  @Select(ResidenceInfoState.get_states) states$: Observable<any>;
  @Select(ResidenceInfoState.get_municipalities) municipalities$: Observable<
    any
  >;

  private subscription: Subscription = new Subscription();

  componentForm: FormGroup;
  fields: string[];
  doubleFields = {};
  sendingForm: boolean;
  glbls: any;

  id_: string;
  wrongDateDisabler = {};

  municipalities: MunicipalityInfo[] = [];
  showSelectTeacher: boolean = true;
  showSelectState: boolean = true;
  isContentRefreshing: boolean = false;
  isEditing: boolean = false;
  isInApproval: boolean; // sets to true when a request has been sent and requires approval
  isEdited: boolean; // if form has been edited
  sendNull: boolean = true; // to avoid send form data null when uploading images
  someImgAdded: boolean; // to avoid send form null when images are saved in table
  imageUrl: string; //to can upload the image in profile component

  // currentGrade: string; // for grades selector only
  sectionsArr: any[] = [];

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer
  ) {
    this.type = "presentational";
    this.component = "form";
    this.glbls = globals;
  }

  ngOnInit() {
    this.subscription.add(
      this.pecaId$.subscribe(peca_id => {
        this.pecaId = peca_id;
      })
    );

    this.subscription.add(
      this.componentForm.statusChanges.subscribe(val => {
        if (
          !this.someImgAdded &&
          (val === "INVALID" || this.isDateNotOk() || !this.isDirty())
        ) {
          if (this.settings.buttonCode && this.isDirty()) this.isEdited = true;
          if (this.sendNull) this.btnUpdater(null);
        } else {
          this.btnUpdater(this.componentForm.value);
        }
      })
    );

    if (
      this.settings.formsContent["section"] &&
      this.settings.formsContent["section"].emmitSectionChange
    )
    this.subscription.add(
      this.componentForm.get("section").statusChanges.subscribe(val => {
        if (val === "VALID" ) 
          this.globals.emitStudentsTableRefresh(this.settings.tableRefreshName,this.componentForm.get("section").value);
        else 
          this.globals.emitStudentsTableRefresh(this.settings.tableRefreshName,null);
      })
    );

    this.subscription.add(
      this.globals.passImageEmitter.subscribe(image => {
        console.log("resp", image);
        this.imageUrl = image;
      })
    );
    this.subscription.add(
      this.globals.showImageContainerEmitter.subscribe(code => {
        if (this.settings.buttonCode && this.settings.buttonCode == code)
          this.settings.hideImgContainer = false;
      })
    );

    if (this.settings.formsContent["addressState"])
      this.subscription.add(
        this.states$.subscribe(states => {
          this.showSelectState = false;
          this.settings.formsContent["addressState"].options = states;
          setTimeout(() => {
            this.showSelectState = true;
          });
        })
      );

    if (this.settings.formsContent["addressMunicipality"])
      this.subscription.add(
        this.municipalities$.subscribe(municipalities => {
          this.settings.formsContent[
            "addressMunicipality"
          ].options = municipalities;
        })
      );

    this.subscription.add(
      this.globals.resetEditedEmitter.subscribe(btnCode => {
        if (this.settings.buttonCode && this.settings.buttonCode == btnCode) {
          this.isEdited = false;
          this.isInApproval = true;
        }
      })
    );
    this.subscription.add(
      this.globals.setReadonlyEmitter.subscribe((data) => {
        if (data.isBtnCode) {
          if (
            this.settings.buttonCode && 
            this.settings.buttonCode == data.buttonCode
          )
            this.isInApproval = data.setReadOnly;        
        } else {
          if (
            this.settings.tableCode && 
            this.settings.tableCode == data.buttonCode
          )
            this.isInApproval = data.setReadOnly;        
        }    
      })
    );

    this.setId();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    [
      "isEdited",
      "isInApproval",
      "isEditing",
      "sendNull",
      "someImgAdded",
      "imageUrl"
    ].map((attr, i) => {
      this[attr] = [null, null, false, true, null, null][i];
    });
  }

  btnUpdater(val) {
    if (this.settings.buttonCode)
      this.globals.buttonDataUpdater({
        code: this.settings.buttonCode,
        whichData: "form",
        form: val
      });
  }

  formInModalBtnConditioner() {
    if (this.settings.isFromCustomTableActions) {
      if (this.settings.dataFromRow && this.settings.dataFromRow.showBtn)
        return true;
      else return false;
    } else return true;
  }

  isDirty(): boolean {
    const keys = Object.keys(this.componentForm.value);
    return keys.some(key => {
      return key === "imageGroup"
        ? false
        : this.componentForm.controls[key].dirty;
    });
    // return this.componentForm.dirty
  }

  isReadOnly(): boolean {
    return (this.settings.isEditable && !this.isEditing) || this.isInApproval;
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
    this.componentForm = this.buildFormGroup(settings.formsContent);
    this.loadGroupedInfo(settings);
    if (this.settings.data) this.setAllFields(this.settings.data);
  }

  setData(data: any) {
    if (data.setContent) {
      data.contentToSet.map((attr) => {
        this.isContentRefreshing = true;
        this.settings.formsContent[attr].options = data.data[attr];        

        if (
          attr == "section" && 
          this.settings.formsContent["section"] &&
          this.settings.formsContent["section"].emmitSectionChange && 
          this.componentForm.controls["section"].value
        ) 
          this.componentForm.patchValue({ section: "" });

        if (
          attr == "grades" && 
          this.settings.formsContent["grades"] &&
          this.settings.formsContent["grades"].isGrades && 
          (
            this.componentForm.controls["grades"].value == "" ||
            !this.componentForm.dirty
          )
        ) {
          this.componentForm.patchValue({ 
            grades: this.settings.formsContent["grades"].options[0].id 
          });
          this.setSchoolSections(true);          
        }
        
        setTimeout(() => {
          this.isContentRefreshing = false;
        });
      });
      // console.log(this.componentForm.dirty);
    }  

    if (!this.isEdited) {
      if (!data.setContent) {
        this.settings.data = data;
        this.setAllFields(this.settings.data);
      }
  
      if ( this.isDirty() ) this.btnUpdater(this.componentForm.value);
    }    
  }

  setFetcherUrls({ post, put, patch }) {
    this.settings.fetcherUrls = {
      post,
      put,
      patch
    };
  }

  // for assigning unique id to this component instance -------------
  private setId() {
    if (!this.id_)
      this.id_ = Math.random()
        .toString(36)
        .substring(2);
  }

  getId(field) {
    return field + "-" + this.id_;
  }
  // ----------------------------------------------------------------

  private loadGroupedInfo(settings) {
    if (settings.formsContent["imageGroup"])
      this.componentForm.addControl(
        "imageGroup",
        this.buildGroupControl("imageGroup")
      );
    if (settings.formsContent["documentGroup"])
      this.componentForm.addControl(
        "documentGroup",
        this.buildGroupControl("documentGroup")
      );
  }

  private buildFormGroup(formContent: any): FormGroup {
    const formControls = this.getFormGroupControls(formContent);
    return this.fb.group(formControls);
  }

  private buildGroupControl(item_grouped): FormGroup {
    // for building formgroup for add image container
    const formControls = this.getFormControlProperty(item_grouped);
    return this.fb.group(formControls);
  }

  private getFormGroupControls(formContent): object {
    this.fields = Object.keys(formContent); // fields array to be looped for printing fields or titles

    let formContentNoTitles = [];
    this.fields.map(f => {
      if (
        formContent[f].type != "title" &&
        formContent[f].type != "image" &&
        formContent[f].type != "prepend"
      ) {
        if (formContent[f].type === "double") {
          let fieldsArr = Object.keys(formContent[f].fields);
          formContentNoTitles.push(
            ...fieldsArr.map(field => {
              return {
                field: field,
                parent: f
              };
            })
          );
          this.doubleFields[f] = fieldsArr;
        } else {
          if (formContent[f].type === "date") this.wrongDateDisabler[f] = false;
          formContentNoTitles.push({
            field: f,
            parent: null // means that this field is not a doubleFields field
          });
        }
      }
    });

    const formControls = this.reduceFormControls(
      formContentNoTitles,
      formContent,
      true
    );

    return formControls;
  }

  // RETURNS A FORMCONTROL OBJECT TO BE USED IN FORMGROUP
  private reduceFormControls(
    formContentFields,
    formContent,
    isMainContent = false
  ): Object {
    let formReduced = formContentFields.reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(
            isMainContent ? formControlName.field : formControlName,
            isMainContent
              ? formControlName.parent
                ? formContent[formControlName.parent].fields[
                    formControlName.field
                  ]
                : formContent[formControlName.field]
              : formContent[formControlName]
          )
        };
      },
      {} // This is the initial formControlsObj
    );

    return formReduced;
  }

  private getFormControlProperty(
    name: string,
    params: { value: any; validations: object } = {
      value: null,
      validations: null
    }
  ): object {
    let defaultValue =
      name === "imageSelected" || name === "imageSrc" ? null : "";

    // adding form control to Image or Document Group, when the form has images or Identification document to be added
    if (name === "imageGroup" || name === "documentGroup") {
      let itemGroupContent = Object.keys(
        this.settings.formsContent[name].fields
      );
      if (name === "imageGroup")
        itemGroupContent.push(...["imageSelected", "imageSrc"]);
      let formControls = this.reduceFormControls(
        itemGroupContent,
        this.settings.formsContent[name].fields
      );

      return formControls;
    } else {
      if (!isNullOrUndefined(params.value)) defaultValue = params.value;
      if (
        isNullOrUndefined(params.validations) ||
        (Object.keys(params.validations).length === 1 &&
          !params.validations["required"])
      )
        return { [name]: [defaultValue] };
      else
        return {
          [name]: [defaultValue, this.getValidators(params.validations)]
        };
    }
  }

  private getValidators(validations: object): Validators {
    const fieldValidators = Object.keys(validations).map(validator => {
      if (validator === "required") return Validators[validator];
      else return Validators[validator](validations[validator]);
    });

    return fieldValidators;
  }

  trackByFn(index: number): number {
    return index;
  }

  hasErrors(
    field: string,
    specialCase: boolean = false,
    field2: string = null,
    fromImg: boolean = false
  ): string | null {
    const errors: any = !specialCase
      ? this.componentForm.get(field).errors
      : !field2
      ? this.componentForm.controls[field].get("prependInput").errors
      : !fromImg
      ? this.componentForm.get(field2).errors
      : this.componentForm.controls["imageGroup"].get(field2).errors;
    if (errors) {
      return errors.required
        ? MESSAGES.REQUIRED_MESSAGE
        : errors.pattern || errors.minlength || errors.maxlength
        ? !specialCase
          ? this.settings.formsContent[field].messages.pattern
          : !field2
          ? this.settings.formsContent[field].fields["prependInput"].messages
              .pattern
          : !fromImg
          ? this.settings.formsContent[field].fields[field2].messages.pattern
          : this.settings.formsContent["imageGroup"].fields[field2].messages
              .pattern
        : null;
    }

    return null;
  }

  prevDef(e) {
    //PREVENTING SUBMITTING FORM WHEN ENTER KEY PRESSED IN TETAREA OR ONY BUTTON INSIDE FORM
    if (
      e.target.tagName.toLowerCase() !== "textarea" &&
      e.target.tagName.toLowerCase() !== "button"
    ) {
      e.preventDefault();
    }
  }

  // submitting forms
  onSubmitForm(cf: FormGroup) {
    //cf: component form
    this.sendingForm = true;
    console.log("submitting form");

    let manageData = structureData(
      this.settings.formType,
      this.settings.formsContent,
      cf
    );
    if (this.settings.formType === "buscarEstudiante")
      manageData.data["age"] = this.globals.dateStringToISOString(
        cf.get("age").value
      );
    if (this.settings.formType === "actualizarCoordinador") {
      manageData.data["birthdate"] = this.globals.dateStringToISOString(
        cf.get("date").value
      );
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;
    }
    if (this.settings.formType === "actualizarPadrino")
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;

    if (this.settings.formType === "actualizarEscuela")
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;

    const assignId = () =>
      Math.random()
        .toString(36)
        .substring(2);
    if (this.settings.isFromCustomTableActions) {
      if (this.settings.data) {
        this.settings.dataFromRow.data.newData = {
          ...this.settings.dataFromRow.data.newData,
          ...manageData.data
        };
        this.settings.dataFromRow.data.newData[
          "id"
        ] = this.settings.dataFromRow.data.oldData["id"];
      } else {
        // is for adding in modal view
        this.settings.dataFromRow["data"] = manageData.data;
        this.settings.dataFromRow["data"]["id"] = `auto-${assignId()}`;
      }
    } else {
      if (!this.settings.notGenerateId)
        manageData.data["id"] = `auto-${assignId()}`;
    }

    let obj = {
      code: this.settings.tableCode,
      data: this.settings.isFromCustomTableActions
        ? this.settings.dataFromRow.data
        : manageData.data,
      dataArr: [],
      resetData: false,
      action: this.settings.isFromCustomTableActions
        ? this.settings.data
          ? "edit"
          : "add"
        : "set"
    };

    const commonTasks = () => {
      this.sendingForm = false;

      if (manageData.isThereTable) this.globals.tableDataUpdater(obj);

      if (this.settings.modalCode)
        this.globals.ModalHider(this.settings.modalCode);

      // initializers
      if (!this.settings.notResetForm) {
        cf.reset();
        if (this.settings.formsContent['documentGroup'])
          cf.controls["documentGroup"].get("prependSelect").setValue("1");
        this.municipalities = [];
        Object.keys(this.wrongDateDisabler).map(f => {
          this.wrongDateDisabler[f] = false;
        });
      }
      //

      this.isEditing = false;
    };

    if (this.settings.makesNoRequest) commonTasks();
    else {      
      const method = this.settings.fetcherMethod || "post";
      const resourcePath = this.settings.methodUrlPlus 
        ? `${this.settings.fetcherUrls[method]}/${manageData.data[this.settings.methodUrlPlus]}`
        : this.settings.fetcherUrls[method];    
        
      const body = adaptBody(
        this.settings.formType,
        this.settings.isFromCustomTableActions ? obj.data.newData : obj.data
      );

      if (this.settings.tableCode) this.globals.setAsReadOnly(this.settings.tableCode, true, false);
 
      console.log(
        'method: ', method,
        'url: ', resourcePath,
        'body: ', body
      );

      this.fetcher[method](resourcePath, body).subscribe(
        response => {
          commonTasks();
          console.log("Form response", response);
          if (this.settings.tableCode) this.globals.setAsReadOnly(this.settings.tableCode, false, false);
          
          this.toastr.success("Suministrado con éxito", "", {
            positionClass: "toast-bottom-right"
          });

          this.store.dispatch([new FetchPecaContent(this.pecaId)]);

          if (
            this.settings.formType === "actualizarCoordinador" ||
            this.settings.formType === "actualizarEscuela" ||
            this.settings.formType === "actualizarPadrino"
          ) {
            //Do the consult to the endpoint which bring me the data of specific user
            this.fetcher
              .get(
                `users/${this.settings.data["id"]}?userType=${this.settings.data["userType"]}`
              )
              .subscribe(
                respuesta => {
                  // within the answer I send the content to the SetUser::
                  this.store.dispatch([new SetUser(respuesta)]);
                },
                error => {
                  console.log(error);
                }
              );
          }
        },
        error => {
          this.sendingForm = false;
          if (this.settings.tableCode) this.globals.setAsReadOnly(this.settings.tableCode, false, false);

          // const errorType = (error.error && error.error["name"])
          //   ? (this.settings.formType === "agregarGradoSeccion" 
          //     ? "section" 
          //     : "name") 
          //   : "regular";

          // if (
          //   errorType!="regular" && 
          //   this.settings.formType === "agregarGradoSeccion"
          // ) this.componentForm.get(errorType).setValue("");
          
          this.toastr.error(
            // errorType!="regular" 
            error.error && error.error["name"] && error.error["name"][0]
              ? error.error["name"][0].msg 
              : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde",
            "",
            { positionClass: "toast-bottom-right" }
          );
          console.error(error);
        }
      );
    }
  }

  // filling municipalities according to selected state
  private fillMunicipalities(state_id = "default", munId = "") {
    if (
      state_id == "default" ||
      !this.settings.formsContent["addressMunicipality"]
    )
      this.municipalities = [];
    else {
      this.municipalities = this.settings.formsContent[
        "addressMunicipality"
      ].options.filter(m => {
        return m.state.id == state_id;
      });
    }

    this.componentForm.patchValue({ addressMunicipality: munId });
  }  
  // UPDATES MUNICIPALITIES ACCORDING TO SELECTED STATE
  updateMuns(bool: boolean = true, munId: string = "") {
    if (bool) {
      let currStateId = "default";
      currStateId =
        this.componentForm.controls["addressState"].value &&
        this.componentForm.controls["addressState"].value.length > 0
          ? this.componentForm.controls["addressState"].value
          : "default";
      this.fillMunicipalities(currStateId, munId);
    }
  }

  requiredOtherCompany(e: any) {
    if (e) {
      if (e.id == "0") {
        this.componentForm.setControl(
          "companyOtherType",
          this.fb.control(
            this.componentForm.get("companyOtherType").value,
            Validators.required
          )
        );
      } else {
        this.componentForm.setControl(
          "companyOtherType",
          this.fb.control(this.componentForm.get("companyOtherType").value)
        );
      }
    }
  }

  focusDatePicker(e) {
    e.focus();
  }

  disableBtn() {
    return !this.componentForm.valid || this.sendingForm || this.isDateNotOk();
  }

  // CHECKS IF THE CURRENT FORMcONTENT ITEM IS FOR PRINTING A FIELD (TRUE), FALSE --> IMAGE_GROUP || TITLE
  isField(field) {
    return (
      this.settings.formsContent[field].type != "title" &&
      this.settings.formsContent[field].type != "image"
    );
  }

  // wrong date save button enabler/disabler
  checkDateOk(e, mode, f, notE: boolean = false) {
    let value = !notE ? e.target.value === "" : e === "";
    if (this.globals.validateDate(e, mode, true, notE) || value)
      this.wrongDateDisabler[f] = false;
    else this.wrongDateDisabler[f] = true;
  }

  isDateNotOk() {
    // for button specifically
    let bool = false;
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
    reader.onload = _event => {
      this.sendNull = false;
      this.componentForm.get("imageGroup").patchValue({
        imageSelected: <File>e.target.files[0],
        imageSrc: reader.result
      });
      setTimeout(() => {
        this.sendNull = true;
        e.target.value = null;
      });
    };
  }
  // to disable add image button when conditions apply
  disableAddImgBtn() {
    return (
      (this.componentForm.controls["imageGroup"].get("imageDocente") &&
        (this.componentForm.controls["imageGroup"].get("imageDocente").value ===
          "" ||
          !this.componentForm.controls["imageGroup"].get("imageDocente")
            .value)) ||
      (this.componentForm.controls["imageGroup"].get("imageCargo") &&
        this.componentForm.controls["imageGroup"].get("imageCargo").value ===
          "") ||
      (this.componentForm.controls["imageGroup"].get("imageDescription") &&
        this.componentForm.controls["imageGroup"].get("imageDescription")
          .value === "") ||
      (this.componentForm.controls["imageGroup"].get("imageStatus") &&
        (this.componentForm.controls["imageGroup"].get("imageStatus").value ===
          "" ||
          !this.componentForm.controls["imageGroup"].get("imageStatus")
            .value)) ||
      (this.componentForm.controls["imageGroup"].get("imageSelected") &&
        !this.componentForm.controls["imageGroup"].get("imageSelected").value)
    );
  }
  // shows image when some uploaded
  showImage(option: number) {
    switch (option) {
      case 1:
        return (
          this.componentForm.controls["imageGroup"].get("imageSelected")
            .value ||
          this.componentForm.controls["imageGroup"].get("imageSrc").value
        );
      case 2:
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          this.componentForm.controls["imageGroup"].get("imageSrc").value
        );
      default:
        return this.componentForm.controls["imageGroup"].value["imageSelected"]
          ? this.componentForm.controls["imageGroup"].get("imageSelected").value
              .name
          : "image";
    }
  }
  // when X image remover is clicked
  removeSelectedImg() {
    this.componentForm.controls["imageGroup"].get("imageSelected").reset();
    this.componentForm.controls["imageGroup"].get("imageSrc").reset();
  }

  imageObjWithAvailableFields() {
    const imgGrp = this.componentForm.controls["imageGroup"];

    let obj = {};

    if (imgGrp.get("imageDescription"))
      obj["description"] = imgGrp.get("imageDescription").value;
    if (imgGrp.get("imageStatus")) {
      obj["state"] = imgGrp.get("imageStatus").value;
      obj["status"] = "En espera";
    }

    return obj;
  }
  // method which sends image to the images table
  addImage(addImg: boolean = true) {
    const imgGrp = this.componentForm.controls["imageGroup"];

    if (!addImg) this.showSelectTeacher = false;

    let imageObj = {
      code: this.settings.tableCode,
      data: addImg
        ? {
            id: `auto-${Math.random()
              .toString(36)
              .substring(2)}`,
            // image: imgGrp.get("imageSelected").value.name,
            // image: imgGrp.get("imageSrc").value,
            source: imgGrp.get("imageSrc").value,
            imageSelected: imgGrp.get("imageSelected").value,
            ...this.imageObjWithAvailableFields()
          }
        : {
            id: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options
              .find(d => {
                return d.id === imgGrp.get("imageDocente").value;
              })
              .id.toString(),
            name: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options.find(d => {
              return d.id === imgGrp.get("imageDocente").value;
            }).name,
            lastName: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options.find(d => {
              return d.id === imgGrp.get("imageDocente").value;
            }).lastName,
            cargo: imgGrp.get("imageCargo").value,
            description: imgGrp.get("imageDescription").value,
            addressState: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options.find(d => {
              return d.id === imgGrp.get("imageDocente").value;
            }).addressState,
            // status: imgGrp.get("imageStatus").value,
            source: imgGrp.get("imageSrc").value,
            imageSelected: imgGrp.get("imageSelected").value
          },
      action: "add"
    };

    this.globals.tableDataUpdater(imageObj);
    if (addImg) {
      // this.sendNull = false;
      this.someImgAdded = true;
      this.componentForm.get("imageGroup").reset();
      // setTimeout(() => {
      //   this.sendNull = true;
      // });
    } else {
      const inx = this.settings.formsContent["imageGroup"].fields[
        "imageDocente"
      ].options.findIndex(d => {
        return d.id === imgGrp.get("imageDocente").value;
      });
      if (inx != -1)
        this.settings.formsContent["imageGroup"].fields[
          "imageDocente"
        ].options.splice(inx, 1);
      this.componentForm.reset();
      setTimeout(() => {
        this.showSelectTeacher = true;
      });
    }
  }
  //? -----------------------------------------------------------------------------------

  // searchAndFillTable() {
  //   let obj = {
  //     code: this.settings.tableCode,
  //     dataArr: [],
  //     resetData: true,
  //     action: "add"
  //   };

  //   switch (this.settings.formType) {
  //     case "buscarEstudiante":
  //       obj.dataArr = [
  //         {
  //           name: "Name 1",
  //           lastName: "Lastname 1",
  //           doc: "123456789",
  //           sex: "Femenino",
  //           age: "11"
  //         },
  //         {
  //           name: "Name 2",
  //           lastName: "Lastname 2",
  //           doc: "123456789",
  //           sex: "Masculino",
  //           age: "13"
  //         },
  //         {
  //           name: "Name 3",
  //           lastName: "Lastname 3",
  //           doc: "123456789",
  //           sex: "Femenino",
  //           age: "12"
  //         }
  //       ];
  //       break;

  //     default:
  //       break;
  //   }

  //   this.globals.tableDataUpdater(obj);
  //   this.componentForm.reset();
  // }

  // setting inputs data
  setAllFields(data) {
    const dataKeys = Object.keys(data);

    if (data.isInApproval) this.isInApproval = data.isInApproval;
    else this.isInApproval = false;

    dataKeys.map(key => {
      if (
        (key == "imageGroup" && this.settings.formsContent["imageGroup"]) ||
        (key == "documentGroup" && this.settings.formsContent["documentGroup"])
      )
        this.componentForm.get(key).setValue({ ...data[key] });
      else if (this.settings.formsContent[key]) {
        if (key == "addressMunicipality") this.updateMuns(true, data[key]);
        else if (this.settings.formsContent[key].type === "date") {
          // if 'Z' comes in the date format it gets removed
          const dateKey = this.globals.getDateFormat(
            new Date(data[key].replace("Z", ""))
          );
          this.componentForm.patchValue({ [key]: dateKey });
          this.checkDateOk(
            dateKey,
            this.settings.formsContent[key]["lower"] ? "lower" : "greater",
            key,
            true
          );
        } else if (this.settings.formsContent[key].type === "double") {
          this.componentForm.patchValue({ ...data[key] });
        } else this.componentForm.patchValue({ [key]: data[key] });
      }
    });
    // console.log(this.componentForm.value);
    // this.componentForm.setValue(data);
  }

  //? turning imageGroup fields into array
  imageFieldsArr(fields) {
    return Object.keys(fields);
  }
  enableSaveAndCancelButtons() {
    this.isEditing = true;
  }
  disableSaveAndCancelButtons() {
    this.isEditing = false;
  }
  
  // filling sections according to selected grade
  private fillSections(grade = null) {
    if (!grade){
      this.sectionsArr = [];
      this.componentForm.patchValue({ section: "" });
    }
    else {
      this.sectionsArr = this.settings.formsContent[
        "section"
      ].options.filter(s => {
        return s.grade == grade;
      });

      this.componentForm.patchValue({ 
        section: this.sectionsArr[0].id 
      }); 
    }   
  }  
  // managing sections depending on grades
  setSchoolSections(e) {
    if (e) {
      let currGrade = null;
      currGrade =
        this.componentForm.controls["grades"].value &&
        this.componentForm.controls["grades"].value.length > 0
          ? this.componentForm.controls["grades"].value
          : null;

      this.fillSections(currGrade);
    } else this.fillSections();
  }

}
