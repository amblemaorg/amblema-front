import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StateInfo, MunicipalityInfo } from '../../../../../models/steps/previous-steps.model';
import { GlobalService } from '../../../../../services/global.service';
import { StepsService } from '../../../../../services/steps/steps.service';
import { isNullOrUndefined } from "util";
import { Subscription } from "rxjs";
import { DatepickerOptions } from 'ng2-datepicker';

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
export class StepsFormsComponent implements OnInit, OnDestroy {
  @ViewChild("schoolAddressMap", { read: ElementRef, static: false })
  schoolmap: ElementRef;

  showMap: boolean = true;

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

  private subscription: Subscription = new Subscription();

  // MAPA------------------------------------------------------
  googleLoaded: boolean;
  map: any;//google.maps.Map;
  geocoder: any;
  lat = 8.60831668; // Venezuela's middle latitude
  lng = -66.029011; // Venezuela's middle longitude
  coordinates: any;

  mapOptions: any;
  currentMarker: any;
  // END-MAPA--------------------------------------------------

  sendingForm: boolean;
  disableOther: boolean = true;

  datePickerOptions: DatepickerOptions = {
    minYear: 1950,
    maxYear: 2050,
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    //minDate: new Date(Date.now()),
    maxDate: new Date(Date.now()),
    barTitleIfEmpty: 'Haga click para seleccionar una fecha',
    placeholder: 'Seleccione una fecha',
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'inputDate', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

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
    selectedDoc: ['2'],
    name: ['', [Validators.required, Validators.pattern(LETTERS_PTTRN)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PTTRN)]],
    rif: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern(NUMBER_PTTRN)]],
    addressState: ['', [Validators.required]],
    addressMunicipality: ['', [Validators.required]],
    addressStreet: ['', [Validators.required]],
    addressCity: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],
    companyType: ['', [Validators.required]],
    companyOtherType: ['', [Validators.pattern(LETTERS_PTTRN)]],
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
    cardId: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(NUMBER_PTTRN)]], //str solo numeros,
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
    name: ['', [Validators.required]],//str(nombre de la escuela),
    email: ['', [Validators.required, Validators.pattern(EMAIL_PTTRN)]],//str,
    code: ['', [Validators.required, Validators.pattern(LETTERS_NUMBERS_PTTRN)]],//str(codigo de la escuela),
    addressState: ['', [Validators.required]],//str addressID,
    addressMunicipality: ['', [Validators.required]],//str municipalityID,
    addressStreet: ['', [Validators.required]],//str (calle/carreras),
    addressCity: ['', [Validators.required]],//str,
    phone: ['', [Validators.required, Validators.pattern(NUMBER_PTTRN)]],//str solo numeros,
    schoolType: ['', [Validators.required]],//str '1'=nacional, '2'=estadal, '3'=municipal,
    addressZoneType: ['1', [Validators.required]],//str '1'=sector, '2'=barrio, '3'=caserio
    addressZone: ['', [Validators.required]],
    coordinate: this.fb.group({
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
    }),
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
  constructor(private fb: FormBuilder, private stepsService: StepsService, private globals: GlobalService) {
    if (globals.isBrowser) {
      this.map = null;
      this.currentMarker = null;

      // this.mapSettings(this.lat, this.lng, 7);

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
        interval = setInterval(()=> {
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
    this.fillStates();
    this.fillMunicipalities();

    this.glbls = this.globals;

    if (this.who === "coordinator") {
      this.subscription.add(
        this.coordinatorForm.get("cardType").statusChanges.subscribe( res => {
          this.setLength('cardId','cardType');
        })
      );
    }

    if (this.who === "sponsor") {
      this.subscription.add(
        this.sponsorForm.get("companyType").statusChanges.subscribe( res => {
          if (
            this.sponsorForm.get("companyType").value &&
            this.sponsorForm.get("companyType").value === "0"
          ) {
            this.sponsorForm.setControl(
                "companyOtherType",
                this.fb.control(
                  this.sponsorForm.get("companyOtherType").value,
                  [
                    Validators.required,
                    Validators.pattern(LETTERS_PTTRN)
                  ]
                )
              );
            this.disableOther = false;
          }
          else {
            this.sponsorForm.setControl(
              "companyOtherType",
              this.fb.control(
                this.sponsorForm.get("companyOtherType").value,
                Validators.pattern(LETTERS_PTTRN)
              )
            );
            this.sponsorForm.get("companyOtherType").reset();
            this.disableOther = true;
          }
        })
      );
    }

    this.fillForm();

    if (this.who === "school") {
      this.subscription.add(
        this.schoolForm.get('name').statusChanges.subscribe( res => {
          if (
            this.currentMarker
            && this.schoolForm.get('name').value
            && this.schoolForm.get('name').value.length > 0
          ) {
            this.loadAllMarkers({
              name: this.schoolForm.get('name').value,
              coordinate: this.schoolForm.get('coordinate').value
            });
          }
        })
      );

      this.subscription.add(
        this.schoolForm.get('addressMunicipality').statusChanges.subscribe( res => {
          if (
            this.schoolForm.get('addressMunicipality').value &&
            this.schoolForm.get('addressMunicipality').value.length > 0
          ) {
            const addressData = this.municipalitiesData.filter(s=>{
                return s.id===this.schoolForm.get('addressMunicipality').value
              });
            if (addressData.length > 0) {
              this.mapPositioner(
                addressData[0].state.name,
                addressData[0].name
              );
            }
          }
          else {
            if (this.schoolmap && this.mapOptions) {
              if (this.mapOptions.zoom != 7) {
                const initMap = () => {
                  if (google) {
                    clearInterval(interval);
                    this.mapSettings(this.lat,this.lng,7);
                    this.mapInitializer();
                  }
                };
                let interval = null;

                try {
                  initMap();
                } catch (error) {
                  interval = setInterval(()=> {
                    try {
                      initMap();
                    } catch (error) {
                      // TODO --
                    }
                  }, 2000);
                }

              }
            }
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.disableOther = true;
  }

  // MAP CONFS -------------------------------------------------------------------------------------------
  mapSettings(lat,lng,zoom) {
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

  mapInitializer(disabled: boolean = false) {
    if (disabled) {
      this.mapOptions["disableDefaultUI"] = true;
      this.mapOptions["gestureHandling"] = 'none';
    } else {
      if (this.mapOptions["disableDefaultUI"])
        this.mapOptions["disableDefaultUI"] = false;
      if (this.mapOptions["gestureHandling"])
        this.mapOptions["gestureHandling"] = 'cooperative';
    }

    this.map = new google.maps.Map(this.schoolmap.nativeElement, this.mapOptions);

    if (!disabled) {
      google.maps.event.addListener(this.map, "click", (e) => {
        this.loadAllMarkers({
          name: this.schoolForm.get('name').value
            && this.schoolForm.get('name').value.length > 0
              ? this.schoolForm.get('name').value
              : "Escuela",
          coordinate: {
            latitude: e.latLng.lat(),
            longitude: e.latLng.lng()
          }
        });
      });

      this.geocoder = new google.maps.Geocoder();
    }

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
      title: data.name.toLowerCase() == "escuela"
        ? data.name
        : `Escuela: ${data.name}`,
    });

    this.schoolForm.get('coordinate').setValue(data.coordinate);

    this.currentMarker.setMap(this.map);
  }

  mapPositioner(state: string, county: string) {
    // google maps geocoding
    const initMap = () => {
      if (google) {
        clearInterval(interval);
        this.geocoder.geocode({ componentRestrictions: {
          country: 'Venezuela',
          administrativeArea: state,
          locality: county
        } }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results.length > 0)
              this.mapSettings(
                results[0].geometry.location.lat(),
                results[0].geometry.location.lng(),
                11
              );
            else
              this.mapSettings(this.lat, this.lng, 7);
          }
          else {
            switch (status) {
              case 'ZERO_RESULTS':
                console.log('None result found, showing default map options');
                break;
              case 'OVER_QUERY_LIMIT':
                console.error('You are over your quota');
                break;
              case 'REQUEST_DENIED':
                console.error('Your site is unavailable to use geocoder');
                break;
              default:
                console.error('Unknown server error');
                break;
            }
            this.mapSettings(this.lat,this.lng,7);
          }
          this.mapInitializer();
        });
      }
    };
    let interval = null;

    try {
      initMap();
    } catch (error) {
      interval = setInterval(()=> {
        try {
          initMap();
        } catch (error) {
          // TODO --
        }
      }, 2000);
    }

    // OpenStreetMap
    // https://nominatim.openstreetmap.org/search?country=Venezuela&state=Lara&county=Iribarren&format=json&limit=1
    /* this.stepsService.geoCodeGet(
      `https://nominatim.openstreetmap.org/search?
        country=Venezuela&
        state=${state}&
        county=${county}&
        format=json&
        limit=1`
    ).subscribe(
      (res) => {
        console.log('openStreet map',res);
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
    } else {
      if (this.globals.isBrowser) {
        const initMap = () => {
          if (google) {
            clearInterval(interval);
            this.showMap = true;
            setTimeout(() => {
              if (this.schoolmap)
                this.mapInitializer(this.disable);
            });
          }
        };
        let interval = null;
        let num = 0;

        try {
          initMap();
        } catch (error) {
          interval = setInterval(()=> {
            try {
              initMap();
            } catch (error) {
              // TODO --
            }
          }, 2000);
        }

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
    const solicitudBodyReduced = Object.keys(this.sponsorForm.value).reduce((solicitudBody, controlName) => {
      if (controlName === "addressStreet") solicitudBody["address"] = this.sponsorForm.controls[controlName].value;
      else if (controlName === "phone") solicitudBody["companyPhone"] = this.sponsorForm.controls[controlName].value;
      else solicitudBody[controlName] = this.sponsorForm.controls[controlName].value;

      return solicitudBody;
    }, {
      user: this.user_id,
      project: this.project_id,
    });

    this.postForm(solicitudBodyReduced,fo,1);
  }

  onSubmitCoordinator(fo) { //fo: form object
    this.sendingForm = true;
    const solicitudBodyReduced = Object.keys(this.coordinatorForm.value).reduce((solicitudBody, controlName) => {
      if (controlName === "addressStreet")
        solicitudBody["address"] = this.coordinatorForm.controls[controlName].value;
      else if (controlName === "birthdate")
        solicitudBody[controlName] = this.globals.dateToISOString(this.coordinatorForm.controls[controlName].value);
      else
        solicitudBody[controlName] = this.coordinatorForm.controls[controlName].value;
      return solicitudBody;
    }, {
      user: this.user_id,
      project: this.project_id,
    });

    this.postForm(solicitudBodyReduced,fo,2);
  }

  onSubmitschool(fo) { //fo: form object
      this.sendingForm = true;
      const solicitudBodyReduced = Object.keys(this.schoolForm.value).reduce((solicitudBody, controlName) => {
        if (controlName === "addressStreet") solicitudBody["address"] = this.schoolForm.controls[controlName].value;
        else if (controlName === "coordinate")
          solicitudBody[controlName] = this.schoolForm.controls[controlName].value.latitude
          && this.schoolForm.controls[controlName].value.longitude
            ? this.schoolForm.controls[controlName].value
            : null;
        else if (controlName === "subPrincipalEmail")
          solicitudBody[controlName] = this.schoolForm.controls[controlName].value.length > 0
            ? this.schoolForm.controls[controlName].value
            : null;
        else if (
          controlName === "nTeachers" ||
          controlName === "nAdministrativeStaff" ||
          controlName === "nLaborStaff" ||
          controlName === "nStudents" ||
          controlName === "nGrades" ||
          controlName === "nSections"
        ) solicitudBody[controlName] = +this.schoolForm.controls[controlName].value;
        else solicitudBody[controlName] = ( controlName === "code" && typeof this.schoolForm.controls[controlName].value === "string" && this.schoolForm.controls[controlName].value.replace(/\s/g,"") ) || this.schoolForm.controls[controlName].value;

        return solicitudBody;
      }, {
        user: this.user_id,
        project: this.project_id,
      });

      // console.log("Datos del formulario:", solicitudBodyReduced);
      this.postForm(solicitudBodyReduced,fo,3);
  }

  private postForm(solicitudBody, fo, type) {
    this.stepsService.requestsFind(type,solicitudBody).subscribe(res => {
      this.sendingForm = false;
      fo.reset();

      const reinitMap = () => {
        if (this.who == "school" && google ) {
          clearInterval(interval);
          if (this.schoolmap){
            this.mapSettings(this.lat,this.lng,7);
            this.mapInitializer(true);
          }
        }
      };
      let interval = null;

      try {
        reinitMap();
      } catch (error) {
        interval = setInterval(()=> {
          try {
            reinitMap();
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }

      this.emitUpdate.emit({
        project_id: this.project_id,
        indd: this.index,
        modd:this.mode,
      });
    }, (error) => {
      let errorType = (error.error && error.error['code'])? 'code':
                      (error.error && error.error['email'])? 'email': 'regular';
      this.sendingForm = false;
      switch (type) {
        case 1:
          if (errorType!='regular') this.sponsorForm.get('email').setValue('');
          break;
        case 2:
          if (errorType!='regular') this.coordinatorForm.get('email').setValue('');
            break;
        default:
          if (errorType!='regular') this.schoolForm.get(errorType).setValue('');
          break;
      }
      this.emitMessage.emit({i:this.index,m:this.mode,messageType:errorType});
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
      selectedDoc: '2',
      name: res.name? res.name:'',
      email: res.email? res.email:'',
      rif: res.rif? res.rif:'',
      addressState: res.addressState.id? res.addressState.id:'',
      addressMunicipality: res.addressMunicipality.id? res.addressMunicipality:'',
      addressStreet: res.address? res.address:'',
      addressCity: res.addressCity? res.addressCity:'',
      phone: res.companyPhone? res.companyPhone:'',
      companyType: res.companyType? res.companyType:'',
      companyOtherType: res.companyOtherType? res.companyOtherType:'',
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
      coordinate: {
        latitude: res.coordinate ? res.coordinate.latitude : null,
        longitude: res.coordinate ? res.coordinate.longitude : null
      },
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
      nTeachers: res.nTeachers? `${res.nTeachers}`:null,
      nAdministrativeStaff: res.nAdministrativeStaff? `${res.nAdministrativeStaff}`:null,
      nLaborStaff: res.nLaborStaff? `${res.nLaborStaff}`:null,
      nStudents: res.nStudents? `${res.nStudents}`:null,
      nGrades: res.nGrades? `${res.nGrades}`:null,
      nSections: res.nSections? `${res.nSections}`:null,
      schoolShift: res.schoolShift? res.schoolShift:'',
    });

    if (res.coordinate && this.globals.isBrowser) {
      const initMap = () => {
        if (google) {
          clearInterval(interval);
          this.showMap = true;
          setTimeout(() => {
            if (this.schoolmap) {
              this.mapSettings(
                res.coordinate.latitude,
                res.coordinate.longitude,
                11
              );
              this.mapInitializer(true);
              this.loadAllMarkers({
                name: res.name,
                coordinate: res.coordinate
              });
            }
          });
        }
      };
      let interval = null;

      try {
        initMap();
      } catch (error) {
        interval = setInterval(()=> {
          try {
            initMap();
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }

    } else this.showMap = false;

    this.fillMunicipalities(res.addressState.id,res.addressMunicipality.id);
  }

  controlDate() {
    return this.coordinatorForm.controls['birthdate'].value
    && !this.isNotValidDate(this.coordinatorForm.controls['birthdate'].value);
  }

  isNotValidDate(date) {
    if (date instanceof Date) {
      const dateString = date.toISOString().split('T')[0];
      const isValid = this.globals.validateDate(dateString, 'lower',true, true, 18);
      return isValid;
    }
    if (date instanceof String) {
      return this.globals.validateDate(date, 'lower',true, true, 18);
    }
    return false
  }

  focusDatePicker(e) {
    if (!this.disableThis()) {
      e.focus();
    }
  }

  setMaxLen(controlName: string) {
    const ct = this[this.who==="coordinator"
      ? "coordinatorForm"
      : "sponsorForm"]
      .get(controlName).value; // 1: V, 2: J, 3: E
    return ct === "1" ? 8 : 9;
  }
  setMinLen(controlName: string) {
    const ct = this[this.who==="coordinator"
      ? "coordinatorForm"
      : "sponsorForm"]
      .get(controlName).value; // 1: V, 2: J, 3: E
    return ct === "1" ? 7 : ct === "2" ? 8 : 9;
  }

  setLength(controlName: string, controlCardType: string) {
    this[this.who==="coordinator"
      ? "coordinatorForm"
      : "sponsorForm"].setControl(
        controlName,
        this.fb.control(
          this[this.who==="coordinator"
          ? "coordinatorForm"
          : "sponsorForm"].get(controlName).value,
          [
            Validators.required,
            Validators.minLength(this.setMinLen(controlCardType)),
            Validators.maxLength(this.setMaxLen(controlCardType)),
            Validators.pattern(NUMBER_PTTRN)
          ]
        )
      );

      this[this.who==="coordinator"
        ? "coordinatorForm"
        : "sponsorForm"].get(controlName).markAsTouched();

      // const fieldVal = this[this.who==="coordinator"
      //   ? "coordinatorForm"
      //   : "sponsorForm"].get(controlName).value;
  }

  isMaxLenOver(controlName: string, controlCardType: string) {
    const ctrlNameVal = this[this.who==="coordinator"
      ? "coordinatorForm"
      : "sponsorForm"]
      .controls[controlName].value;
    if (ctrlNameVal)
      return ctrlNameVal.length > this.setMaxLen(controlCardType)
        && ctrlNameVal.length > 0;
    else
      return false
  }
  isMinLenUnder(controlName: string, controlCardType: string) {
    const ctrlNameVal = this[this.who==="coordinator"
      ? "coordinatorForm"
      : "sponsorForm"]
      .controls[controlName].value;
    if (ctrlNameVal)
      return ctrlNameVal.length < this.setMinLen(controlCardType)
        && ctrlNameVal.length > 0;
    else
      return false
  }
  hasMaxOrMin(controlName: string, controlCardType: string) {
    return this.isMaxLenOver(controlName,controlCardType) || this.isMinLenUnder(controlName,controlCardType);
  }

}
