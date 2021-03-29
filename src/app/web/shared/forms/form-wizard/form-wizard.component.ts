import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { isNullOrUndefined } from "util";
import { ToastrService } from "ngx-toastr";
import cloneDeep from "lodash/cloneDeep";
import { ReCaptchaV3Service } from "ng-recaptcha";
import { Subscription } from "rxjs";
// import { HttpFetcherService } from '../../../../services/peca/http-fetcher.service';

@Component({
  selector: "web-form-wizard",
  templateUrl: "./form-wizard.component.html",
  styleUrls: ["./form-wizard.component.scss"],
})
export class FormWizardComponent implements OnInit, OnDestroy {
  @ViewChild("googleMap", { read: ElementRef, static: false })
  googleMap: ElementRef;
  @ViewChild("googleMapSp", { read: ElementRef, static: false })
  googleMapSp: ElementRef;

  @Input() formsContent: any;
  @Input() isSchoolForm: boolean = false;
  @Input() isSponsorForm: boolean = false;
  @Input() recaptchaAction: string = "form_wizard";
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  stepItems: Array<any>;
  activeStepIndex: number;
  lastStepIndex: number;
  stepsContent: Array<any>;
  dataToSubmit: any = null;
  fields: Array<Array<string>>;
  formWizard: Array<FormGroup>;
  isSubmitting: boolean = false;
  recaptchaSubscription: Subscription;
  isBrowser;

  // MAPA------------------------------------------------------
  googleLoaded: boolean;
  map: any;
  geocoder: any;
  lat = 8.60831668; // Venezuela's middle latitude
  lng = -66.029011; // Venezuela's middle longitude
  coordinates: any;

  mapOptions: any;
  currentMarker: any;
  // END-MAPA--------------------------------------------------

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private recaptchaService: ReCaptchaV3Service,
    @Inject(PLATFORM_ID) private platformId // private fetcher: HttpFetcherService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.map = null;
      this.currentMarker = null;

      const initMap = () => {
        if (google) {
          clearInterval(interval);
          this.mapSettings(this.lat, this.lng, 7);
        }
      };
      let interval = null;

      try {
        initMap();
      } catch (error) {
        interval = setInterval(() => {
          try {
            initMap();
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }
    }
  }

  ngOnInit() {
    this.activeStepIndex = 0;
    this.formWizard = [];
    this.stepsContent = [];
    this.fields = [];
    this.stepItems = cloneDeep(this.formsContent);
    this.stepItems.forEach((data, i) => {
      const index = this.appendStepContent(this.stepItems[i]["data"]);
      const formGroupBuilt = this.buildFormGroupStep(this.stepsContent[index]);
      this.formWizard.push(formGroupBuilt);
    });
    this.lastStepIndex = this.getLastStepIndex();
    this.subscribeDependentFields();
    this.subscribeDependentSelects();

    // MAP -----------------------------------------------------------------
    if (this.isBrowser && this.isSchoolForm) {
      const initMap = () => {
        if (google) {
          clearInterval(interval);
          setTimeout(() => {
            if (this.googleMap) this.mapInitializer();
          });
        }
      };
      let interval = null;

      try {
        initMap();
      } catch (error) {
        interval = setInterval(() => {
          try {
            initMap();
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }
    }
    //----------------------------------------------------------------------

    if (this.isSchoolForm) {
      this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).statusChanges.subscribe((res) => {
        if (
          this.currentMarker &&
          this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value &&
          this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value.length > 0
        ) {
          this.loadAllMarkers({
            name: this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value,
            coordinate: this.formWizard[this.getFormMapContainerIndex()].get("coordinate").value,
          });
        }
      });

      this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).statusChanges.subscribe((res) => {
        if (
          this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value &&
          this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value.length > 0
        ) {
          const addressData = this.stepsContent[this.getFormMapContainerIndex()][this.toCapitalizedString("addressMunicipality")].options.filter((s) => {
            return s.id === this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value;
          });
          if (addressData.length > 0) {
            this.mapPositioner(addressData[0].state.name, addressData[0].name);
          }
        } else {
          if (this.googleMap) {
            const initMap = () => {
              if (google) {
                clearInterval(interval);
                this.mapSettings(this.lat, this.lng, 7);
                this.mapInitializer();
              }
            };
            let interval = null;

            try {
              initMap();
            } catch (error) {
              interval = setInterval(() => {
                try {
                  initMap();
                } catch (error) {
                  // TODO --
                }
              }, 2000);
            }
          }
        }
      });
    }
  }

  public ngOnDestroy() {
    if (this.currentMarker) this.currentMarker.setMap(null);
    this.currentMarker = null;
    this.map = null;
    if (this.recaptchaSubscription) {
      this.recaptchaSubscription.unsubscribe();
    }
  }

  // MAP CONFS -------------------------------------------------------------------------------------------
  mapSettings(lat, lng, zoom) {
    if (google) {
      this.googleLoaded = true;
      this.coordinates = new google.maps.LatLng(lat, lng);
      const mapOps: google.maps.MapOptions = {
        center: this.coordinates,
        zoom: zoom,
      };
      this.mapOptions = mapOps;
    }
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.googleMap.nativeElement, this.mapOptions);

    google.maps.event.addListener(this.map, "click", (e) => {
      this.loadAllMarkers({
        name:
          this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value && this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value.length > 0
            ? this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value
            : "Escuela",
        coordinate: {
          latitude: e.latLng.lat(),
          longitude: e.latLng.lng(),
        },
      });
    });

    this.geocoder = new google.maps.Geocoder();

    if (this.currentMarker) this.currentMarker.setMap(this.map);
  }

  loadAllMarkers(data) {
    if (this.currentMarker) {
      this.currentMarker.setMap(null);
      this.currentMarker = null;
    }

    this.currentMarker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(data.coordinate.latitude, data.coordinate.longitude),
      label: data.name.substring(0, 1).toUpperCase(),
      title: data.name.toLowerCase() == "escuela" ? data.name : `Escuela: ${data.name}`,
    });

    this.formWizard[this.getFormMapContainerIndex()].get("coordinate").setValue(data.coordinate);
    this.currentMarker.setMap(this.map);
  }

  mapPositioner(state: string, county: string) {
    // google maps geocoding
    const initMap = () => {
      if (google) {
        clearInterval(interval);

        this.geocoder.geocode(
          {
            componentRestrictions: {
              country: "Venezuela",
              administrativeArea: state,
              locality: county,
            },
          },
          (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results.length > 0)
                this.mapSettings(
                  results[0].geometry.location.lat(),
                  results[0].geometry.location.lng(),
                  11
                );
              else this.mapSettings(this.lat, this.lng, 7);
            } else {
              switch (status) {
                case "ZERO_RESULTS":
                  console.log("None result found, showing default map options");
                  break;
                case "OVER_QUERY_LIMIT":
                  console.error("You are over your quota");
                  break;
                case "REQUEST_DENIED":
                  console.error("Your site is unavailable to use geocoder");
                  break;
                default:
                  console.error("Unknown server error");
                  break;
              }
              this.mapSettings(this.lat, this.lng, 7);
            }
            this.mapInitializer();
          }
        );
      }
    };
    let interval = null;

    try {
      initMap();
    } catch (error) {
      interval = setInterval(() => {
        try {
          initMap();
        } catch (error) {
          // TODO --
        }
      }, 2000);
    }

    // OpenStreetMap
    // https://nominatim.openstreetmap.org/search?country=Venezuela&state=Lara&county=Iribarren&format=json&limit=1
    /* this.fetcher.geoCodeGet(
      `https://nominatim.openstreetmap.org/search?
        country=Venezuela&
        state=${state}&
        county=${county}&
        format=json&
        limit=1`
    ).subscribe(
      (res) => {
        if (res.length > 0)
          this.mapSettings(+res[0].lat,+res[0].lon,11);
        else
          this.mapSettings(this.lat,this.lng,7);
      },
      (error) => {
        this.mapSettings(this.lat,this.lng,7);
        console.error(error);
      },
      () => {
        this.mapInitializer();
      }
    ); */
  }
  // END-MAP-CONFS ---------------------------------------------------------------------------------------

  private appendStepContent(content: object): number {
    const newStepsContentLength = this.stepsContent.push(content);
    const stepContentIndex = newStepsContentLength - 1;
    this.fields.push(Object.keys(this.stepsContent[stepContentIndex]));
    this.addIdentificationFieldsToStepContent(stepContentIndex, content);
    return stepContentIndex;
  }

  private addIdentificationFieldsToStepContent(index: number, content: object): void {
    Object.entries(content).map((field) => {
      const { 0: fieldName, 1: fieldProps } = { ...field };
      if (this.isFormControlTypeof(fieldName, "identification")) {
        Object.entries(fieldProps.subfields).map((subfield) => {
          const { 0: subfieldType, 1: subfieldProps } = { ...subfield };
          const subfieldName = subfieldProps["name"];
          this.stepsContent[index][subfieldName] = subfieldProps;
        });
      }
    });
  }

  private isFormControlTypeof(formControlName: string, formControlType: string): boolean {
    let isTypeof = false;
    this.stepsContent.map((stepContent) => {
      if (stepContent[formControlName]) {
        isTypeof = stepContent[formControlName].type === formControlType;
      }
    });
    return isTypeof;
  }

  private buildFormGroupStep(stepContent: any): FormGroup {
    const formControls = this.getFormGroupControls(stepContent);
    return this.fb.group(formControls);
  }

  private getFormGroupControls(stepContent): object {
    const formControls = Object.keys(stepContent).reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(formControlName, stepContent[formControlName]),
        };
      },
      {} // This is the initial formControlsObj
    );
    return formControls;
  }

  private getFormControlProperty(
    name: string,
    params: { value: any; validations: object }
  ): object {
    let defaultValue = name === "coordinate" ? null : "";
    if (!isNullOrUndefined(params.value)) {
      defaultValue = params.value;
    }
    if (name === "coordinate" && this.isSchoolForm)
      return {
        [name]: this.fb.group({
          latitude: [defaultValue, this.getValidators(params.validations)],
          longitude: [defaultValue, this.getValidators(params.validations)],
        }),
      };
    else return { [name]: [defaultValue, this.getValidators(params.validations)] };
  }

  private getValidators(validations: object): Validators {
    const fieldValidators = Object.keys(validations).map((validator) => {
      if (validator === "required") {
        return Validators[validator];
      } else {
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

  public onSubmit(): void {
    this.updateDataToSubmit();
    if (this.isValid()) {
      // console.log("Datos del formulario:", this.dataToSubmit);
      this.recaptchaSubscription = this.recaptchaService
        .execute(this.recaptchaAction)
        .subscribe((token) => {
          // console.log(token);
          this.isSubmitting = true;
          this.submit.emit(this.dataToSubmit);
        });
    } else {
      this.toastr.error("Uno o más campos del formulario son inválidos", "", {
        positionClass: "toast-bottom-right",
      });
    }
  }

  public updateDataToSubmit(): void {
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
      typeof condition == "object" &&
      !isNullOrUndefined(this.dataToSubmit) &&
      !isNullOrUndefined(condition.value) &&
      !isNullOrUndefined(condition.formControlName) &&
      typeof condition.formControlName == "string" &&
      this.dataToSubmit[condition.formControlName] !== condition.value
    ) {
      return false;
    } else {
      return true;
    }
  }

  private getFormGroupValues(form: FormGroup): object {
    const formDataValues = {};
    Object.entries(form.value).map((field) => {
      // Destructuring array into variables with names
      const { 0: fieldProp, 1: fieldValue } = { ...field };
      if (this.isFormControlTypeof(fieldProp, "date")) {
        formDataValues[fieldProp] = this.dateStringToISOString(fieldValue);
      } else {
        if (fieldProp.toLowerCase().includes("subprincipalemail") && fieldValue == "") {
          formDataValues[fieldProp] = null;
        } else {
          formDataValues[fieldProp] = ( fieldProp === "code" && typeof fieldValue === "string" && fieldValue.replace(/\s/g,"") ) || fieldValue;
        }
      }
    });
    return formDataValues;
  }

  private dateStringToISOString(value: any): string {
    if (typeof value !== "string" || value === "") {
      return "";
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
    );
  }

  private subscribeDependentFields() {
    this.stepsContent.map((stepContent, i) => {
      Object.keys(stepContent).map((prop) => {
        if (
          stepContent[prop].condition &&
          stepContent[prop].condition.formControlName &&
          stepContent[prop].condition.value
        ) {
          let conditionalFormControlName = stepContent[prop].condition.formControlName;
          let conditionalFormControl = this.getFormControlInFormWizard(conditionalFormControlName);
          let dependentFormControl = this.getFormControlInFormWizard(prop);
          conditionalFormControl.valueChanges.subscribe((currentValue) => {
            if (currentValue == stepContent[prop].condition.value) dependentFormControl.enable();
            else dependentFormControl.disable();
          });
        }
      });
    });
  }

  private subscribeDependentSelects() {
    this.stepsContent.map((stepContent, i) => {
      Object.keys(stepContent).map((prop) => {
        const { type, isDependent, dependsOn, optionPropertyCondition } = stepContent[prop];
        if (type === "select" && isDependent === true && dependsOn) {
          let dependsOnSelect = this.getFormControlInFormWizard(dependsOn);
          let dependentSelect = this.getFormControlInFormWizard(prop);
          dependsOnSelect.valueChanges.subscribe((currentValue) => {
            dependentSelect.reset();
            const propArrayPath = optionPropertyCondition.split(".");
            const dependentSelectOptions = this.formsContent[i].data[prop].options;
            stepContent[prop].options = dependentSelectOptions.filter((op) => {
              const optionConditionValue = this.accessPropertyByArrayPath(op, propArrayPath);
              return optionConditionValue == currentValue;
            });
          });
        }
      });
    });
  }

  private accessPropertyByArrayPath(object, properties: string[]): any {
    return properties.reduce((prevObj: any, prop) => {
      return prevObj.hasOwnProperty(prop) ? prevObj[prop] : null;
    }, object);
  }

  private getFormControlInFormWizard(name: string): FormControl {
    let formControl = null;
    this.formWizard.map((formStep) => {
      if (formStep.controls[name]) formControl = formStep.controls[name];
    });
    return formControl;
  }

  public goToStep(step: number): void {
    const initMap = () => { if (google) { clearInterval(interval);setTimeout(() => {
      if (this.googleMap) { if (this.currentMarker) this.currentMarker.setMap(null);
        this.currentMarker = null; this.mapSettings(this.lat, this.lng, 7); this.mapInitializer();
      } }); }};
    let interval = null;
    if (this.isSponsorForm && this.activeStepIndex === 2) {
      try { initMap(); } catch (error) {
      interval = setInterval(() => { try { initMap(); } catch (error) { /** TODO --*/ } }, 1000);
    }}

    this.updateDataToSubmit();
    step = this.validateStep(step);
    if (this.isStepWriteable(step)) {
      this.activeStepIndex = step;
    } else {
      if (this.stepMovement(step) == "next") {
        this.goToStep(step + 1);
      } else if (this.stepMovement(step) == "prev") {
        this.goToStep(step - 1);
      }
    }
  }

  private validateStep(step: number) {
    if (step < 0) {
      step = 0;
    }
    if (step > this.getLastStepIndex()) {
      step = this.getLastStepIndex();
    }
    return step;
  }

  public getLastStepIndex(): number {
    let lastIndex = this.stepItems.length - 1;
    while (!this.isStepWriteable(lastIndex) || lastIndex == 0) {
      --lastIndex;
    }
    this.lastStepIndex = lastIndex;
    return this.lastStepIndex;
  }

  private stepMovement(step: number) {
    return step > this.activeStepIndex ? "next" : "prev";
  }

  public clear(): void {
    if (this.isBrowser && this.isSchoolForm) {
      if (this.currentMarker) this.currentMarker.setMap(null);

      const reinitMap = () => {
        if (google) {
          clearInterval(interval);
          setTimeout(() => {
            if (this.googleMap) {
              if (this.currentMarker) this.currentMarker.setMap(null);
              this.currentMarker = null;
              this.mapSettings(this.lat, this.lng, 7);
              this.mapInitializer();
            }
          });
        }
      };
      let interval = null;

      try {
        reinitMap();
      } catch (error) {
        interval = setInterval(() => {
          try {
            reinitMap();
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }
    }
    this.formWizard.map((wizardFormStep: FormGroup) => {
      wizardFormStep.reset(this.getFormControlsWithDefaultValue());
    });
    this.activeStepIndex = 0;
    this.updateDataToSubmit();
  }

  private getFormControlsWithDefaultValue(): object {
    let formControls = {};
    this.stepsContent.map((stepContent, i) => {
      Object.keys(stepContent).map((prop) => {
        if (!isNullOrUndefined(stepContent[prop].value)) {
          formControls[prop] = stepContent[prop].value;
        }
      });
    });
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

  getFormMapContainerIndex() {
    return this.isSponsorForm ? 3 : 0;
  }

  toCapitalizedString(value: string) {
    return this.isSponsorForm ? "school" + value.slice(0, 1).toUpperCase() + value.slice(1, value.length) : value;
  }

}
