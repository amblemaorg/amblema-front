(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2yz7":function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{constructor(){this.sponsorPage=!1,this.coordinatorPage=!1,this.titleBold=!1,this.customOptions={autoplay:!0,loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,nav:!1,navSpeed:3e3,responsive:{0:{items:1}}}}ngOnInit(){this.options&&Object.keys(this.options).map(e=>{this[e]=this.options[e]})}}},"30GA":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var i=s("xgIS");class a{constructor(e){this.zone=e}ngOnInit(){this.zone.runOutsideAngular(()=>{this.scrollSubscription=Object(i.a)(window,"scroll").subscribe(e=>{this.onScroll(e)})})}onScroll(e){this.bgHeading.nativeElement.offsetTop/e.srcElement.children[0].scrollTop<=2&&(this.scrollSubscription&&this.scrollSubscription.unsubscribe(),this.blueLine.nativeElement.classList.add("animation-finish"),this.blueLine.nativeElement.classList.remove("animation-init"),this.greenLine.nativeElement.classList.add("animation-finish"),this.greenLine.nativeElement.classList.remove("animation-init"))}}},"4YED":function(e,t,s){"use strict";s.d(t,"a",function(){return u}),s.d(t,"b",function(){return m});var i=!1;if("undefined"!=typeof window){var a={get passive(){i=!0}};window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),n=[],r=!1,l=-1,c=void 0,d=void 0,p=function(e){return n.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},h=function(e){var t=e||window.event;return!!p(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},u=function(e,t){if(e){if(!n.some(function(t){return t.targetElement===e})){var s={targetElement:e,options:t||{}};n=[].concat(function(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(n),[s]),o?(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var s=e.targetTouches[0].clientY-l;!p(e.target)&&(t&&0===t.scrollTop&&s>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&s<0?h(e):e.stopPropagation())}(t,e)},r||(document.addEventListener("touchmove",h,i?{passive:!1}:void 0),r=!0)):function(e){if(void 0===d){var t=window.innerWidth-document.documentElement.clientWidth;e&&!0===e.reserveScrollBarGap&&t>0&&(d=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(e){e?(n=n.filter(function(t){return t.targetElement!==e}),o?(e.ontouchstart=null,e.ontouchmove=null,r&&0===n.length&&(document.removeEventListener("touchmove",h,i?{passive:!1}:void 0),r=!1)):n.length||(void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},DNEC:function(e,t,s){"use strict";s.d(t,"a",function(){return l});var i=s("8Y7J"),a=s("2a0G"),o=s("vveu"),n=s("XIp8"),r=s("MCLT");class l{constructor(e,t){this.contactService=e,this.toastr=t,this.success=new i.EventEmitter,this.controlProps={onlyLetters:{type:"text",validations:a.j,messages:{pattern:o.a.ONLY_LETTERS_MESSAGE}},onlyLettersNotRequired:{type:"text",validations:a.d,messages:{pattern:o.a.ONLY_LETTERS_MESSAGE}},onlyLettersNumbers:{type:"text",validations:a.k,messages:{pattern:o.a.ONLY_LETTERS_NUMBERS_MESSAGE}},normalText:{type:"text",validations:a.i,messages:{pattern:o.a.TEXT_MESSAGE}},email:{type:"email",validations:a.g,messages:{pattern:o.a.EMAIL_MESSAGE}},emailNotRequired:{type:"email",validations:a.a,messages:{pattern:o.a.EMAIL_MESSAGE}},number:{type:"number",validations:a.h,messages:{pattern:o.a.NATURAL_NUMBER_MESSAGE}},phone:{type:"tel",validations:a.h,messages:{pattern:o.a.PHONE_MESSAGE}},phoneNotRequired:{type:"tel",validations:a.b,messages:{pattern:o.a.PHONE_MESSAGE}},date:{type:"date",validations:{required:!0}},select:{type:"select",options:[],validations:{required:!0}},confirmation:{type:"confirmation",value:!1,options:{positive:"S\xed",negative:"No"},validations:{required:!0}}},this.schoolStep1={name:Object.assign({label:"Nombre de la escuela"},this.controlProps.normalText),code:Object.assign({label:"C\xf3digo del plantel"},this.controlProps.onlyLettersNumbers),email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),phone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),addressCity:Object.assign({label:"Ciudad"},this.controlProps.onlyLetters),zone:{label:"Zona",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"addressZone"},this.controlProps.normalText),{label:""}),type:Object.assign(Object.assign({name:"addressZoneType"},this.controlProps.select),{options:[{id:"1",name:"Sector"},{id:"2",name:"Barrio"},{id:"3",name:"Cacer\xedo"}]})}},coordinate:{label:"Marca la ubicaci\xf3n exacta de la escuela",button:"Abrir mapa",header:"Selecciona la ubicaci\xf3n de la escuela",type:"googlemap",validations:{required:!0,pattern:null},messages:{}}},this.schoolStep2={principalFirstName:Object.assign({label:"Nombre del director"},this.controlProps.onlyLetters),principalLastName:Object.assign({label:"Apellido del director"},this.controlProps.onlyLetters),principalEmail:Object.assign({label:"Correo electr\xf3nico del director"},this.controlProps.email),principalPhone:Object.assign({label:"N\xfamero de tel\xe9fono del director"},this.controlProps.phone),subPrincipalFirstName:Object.assign({label:"Nombre del subdirector"},this.controlProps.onlyLettersNotRequired),subPrincipalLastName:Object.assign({label:"Apellido del subdirector"},this.controlProps.onlyLettersNotRequired),subPrincipalEmail:Object.assign({label:"Correo electr\xf3nico del subdirector"},this.controlProps.emailNotRequired),subPrincipalPhone:Object.assign({label:"N\xfamero de tel\xe9fono del subdirector"},this.controlProps.phoneNotRequired)},this.schoolStep3={nTeachers:Object.assign({label:"Cantidad de docentes"},this.controlProps.number),nAdministrativeStaff:Object.assign({label:"Cantidad de administrativos"},this.controlProps.number),nLaborStaff:Object.assign({label:"Cantidad de obreros"},this.controlProps.number),nStudents:Object.assign({label:"Cantidad de estudiantes"},this.controlProps.number),nGrades:Object.assign({label:"Cantidad de grados"},this.controlProps.number),nSections:Object.assign({label:"Cantidad de secciones"},this.controlProps.number),schoolType:Object.assign(Object.assign({label:"Tipo de escuela"},this.controlProps.select),{options:[{id:"1",name:"Nacional"},{id:"2",name:"Estadal"},{id:"3",name:"Municipal"}]}),schoolShift:Object.assign(Object.assign({label:"Turno de clases"},this.controlProps.select),{options:[{id:"1",name:"Ma\xf1ana"},{id:"2",name:"Tarde"},{id:"3",name:"Ambos"}]})},this.schoolStep4={hasSponsor:Object.assign({label:"\xbfCuentas con un padrino?"},this.controlProps.confirmation)},this.schoolLastStep={steps:{label:"",type:"list",options:["Visita comercios, empresas o negocios cercanos a tu escuela.","Consulta entre padres y representantes si alguno conoce o trabaja en empresas cercanas a la escuela.","Recauda informaci\xf3n de los posibles padrinos y completa la planilla.","Escr\xedbenos a trav\xe9s de info@amblema.org y solic\xedtanos un padrino."],validations:{}}},this.sponsorStep1={name:Object.assign({label:"Nombre de la empresa"},this.controlProps.normalText),card:{label:"Rif de la empresa",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"rif"},this.controlProps.number),{label:"",type:"text"}),type:Object.assign(Object.assign({name:"rifType"},this.controlProps.select),{value:"2",options:[{id:"2",name:"J"}]})}},email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),companyPhone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),addressCity:Object.assign({label:"Ciudad"},this.controlProps.onlyLetters)},this.sponsorStep2={companyType:Object.assign(Object.assign({label:"Tipo de empresa"},this.controlProps.select),{options:[{id:"1",name:"F\xe1brica"},{id:"2",name:"Tienda"},{id:"3",name:"Negocio personal"},{id:"4",name:"Hacienda"},{id:"0",name:"Otro"}]}),companyOtherType:Object.assign(Object.assign({label:"Otro tipo de empresa"},this.controlProps.onlyLetters),{condition:{formControlName:"companyType",value:"0"}}),contactFirstName:Object.assign({label:"Nombre de la persona de contacto"},this.controlProps.onlyLetters),contactLastName:Object.assign({label:"Apellido de la persona de contacto"},this.controlProps.onlyLetters),contactEmail:Object.assign({label:"Correo electr\xf3nico de la persona de contacto"},this.controlProps.email),contactPhone:Object.assign({label:"N\xfamero de tel\xe9fono de la persona de contacto"},this.controlProps.phone)},this.sponsorStep3={hasSchool:Object.assign({label:"\xbfCuentas con una escuela?"},this.controlProps.confirmation)},this.sponsorLastStep={steps:{label:"",type:"list",options:["Debe seleccionar una escuela cercana a tu empresa, comercio o negocio, en base a los siguientes criterios: escuela p\xfablica, que tenga preescolar y primaria, con un n\xfamero de estudiantes entre 150 y 300, que presente necesidades de ayuda y apoyo de un tercero, y que el personal docente manifieste la disposici\xf3n de mejorar la calidad educativa de la escuela.","Visite la escuela de su preferencia y recaude todos los datos."],validations:{}}},this.coordinatorStep1={firstName:Object.assign({label:"Nombre"},this.controlProps.onlyLetters),lastName:Object.assign({label:"Apellido"},this.controlProps.onlyLetters),gender:Object.assign(Object.assign({label:"Sexo"},this.controlProps.select),{options:[{id:"1",name:"Femenino"},{id:"2",name:"Masculino"}]}),card:{label:"Identificaci\xf3n",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"cardId"},this.controlProps.number),{label:"",type:"text"}),type:Object.assign(Object.assign({name:"cardType"},this.controlProps.select),{value:"1",options:[{id:"1",name:"V"},{id:"3",name:"E"}]})}},homePhone:Object.assign({label:"Tel\xe9fono de contacto"},this.controlProps.phone),birthdate:Object.assign({label:"Fecha de nacimiento"},this.controlProps.date),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select)},this.coordinatorStep2={addressCity:Object.assign({label:"Ciudad de residencia"},this.controlProps.onlyLetters),addressHome:Object.assign({label:"Casa / Edificio"},this.controlProps.normalText),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),phone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),profession:Object.assign({label:"Profesi\xf3n"},this.controlProps.onlyLetters),isReferred:Object.assign(Object.assign({label:"\xbfEs referido de \xe1lguien?"},this.controlProps.select),{options:[{id:!0,name:"S\xed"},{id:!1,name:"No"}]}),referredName:Object.assign(Object.assign({label:"Nombre completo de la persona que lo refiri\xf3"},this.controlProps.onlyLetters),{condition:{formControlName:"isReferred",value:!0}})},this.schoolStepItems=[{title:"Datos de la Escuela:",data:this.schoolStep1},{title:"Datos de la Escuela:",data:this.schoolStep2},{title:"Datos de la Escuela:",data:this.schoolStep3},{title:"Para formar parte de la red AmbLeMa de escuelas, la fundaci\xf3n te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentaci\xf3n, para comenzar a aplicar la herramienta al inicio del a\xf1o escolar",data:this.schoolStep4},{title:"Datos del Padrino: ",data:this.addPrefixToObjectProperties("sponsor",this.sponsorStep1),condition:{formControlName:"hasSponsor",value:!0}},{title:"Datos del Padrino: ",data:this.addPrefixToObjectProperties("sponsor",this.sponsorStep2),condition:{formControlName:"hasSponsor",value:!0}},{title:"Puedes seguir cualquiera de estos pasos:",data:this.schoolLastStep,condition:{formControlName:"hasSponsor",value:!1}}],this.sponsorStepItems=[{title:"Datos del Padrino:",data:this.sponsorStep1},{title:"Datos del Padrino:",data:this.sponsorStep2},{title:"El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela p\xfablica de su comunidad. Esta inversi\xf3n social rinde beneficios tangibles e intangibles. Tangibles son las mejoras en la calidad de su comunidad  y a la vez el pa\xeds. Intagible es la satisfacci\xf3n personal que se logra.",data:this.sponsorStep3},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep1),condition:{formControlName:"hasSchool",value:!0}},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep2),condition:{formControlName:"hasSchool",value:!0}},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep3),condition:{formControlName:"hasSchool",value:!0}},{title:"Puedes seguir cualquiera de estos pasos:",data:this.sponsorLastStep,condition:{formControlName:"hasSchool",value:!1}}],this.coordinatorStepItems=[{title:"Datos del Coordinador:",data:this.coordinatorStep1},{title:"Datos del Coordinador:",data:this.coordinatorStep2}]}ngOnInit(){this.getMunicipalitiesData(),this.getStatesData()}getStatesData(){this.contactService.getStates().subscribe(e=>{this.schoolStep1.addressState.options=e.records,this.sponsorStep1.addressState.options=e.records,this.coordinatorStep1.addressState.options=e.records})}getMunicipalitiesData(){this.contactService.getMunicipalities().subscribe(e=>{this.schoolStep1.addressMunicipality.options=e.records,this.schoolStepItems[4].data.sponsorAddressMunicipality.options=e.records,this.sponsorStep1.addressMunicipality.options=e.records,this.sponsorStepItems[3].data.schoolAddressMunicipality.options=e.records,this.coordinatorStep1.addressMunicipality.options=e.records})}submitContactForm(e,t){let s={};switch(e){case"coordinator":this.coordinatorStepItems.map(e=>s=Object.assign(Object.assign({},s),e.data));break;case"sponsor":this.sponsorStepItems.map(e=>s=Object.assign(Object.assign({},s),e.data));break;case"school":this.schoolStepItems.map(e=>s=Object.assign(Object.assign({},s),e.data))}this.contactService.sendContactForm(e,t).subscribe({next:e=>{this.displayMessage("Formulario enviado satisfactoriamente","success"),this.formWizard.clear(),this.formWizard.setIsSubmitting(!1),this.success.emit("complete")},error:e=>{console.error(e),this.displayMessage(this.handleMessageError(e.error,s),"error"),this.formWizard.setIsSubmitting(!1)}})}displayMessage(e,t){const s={positionClass:"toast-bottom-right"};switch(t){case"success":this.toastr.success(e,"",s);break;case"error":this.toastr.error(e,"",s);break;default:this.toastr.info(e,"",s)}}handleMessageError(e,t){const s=Object.keys(e),i=t[s[0]].label;switch(e[s[0]][0].status){case"1":return i+" es invalido";case"2":return i+" es requerido";case"3":return i+" no puede ser nulo";case"4":return i+", error de validacion";case"5":return i+" ya est\xe1 registrado";case"6":return i+" no se encontr\xf3 registro";case"7":return i+" admite solo letras";case"8":return i+" admite solo numeros";case"9":return i+", la imagen es inv\xe1lida";case"10":return i+", la URL es inv\xe1lida";case"11":return i+", opci\xf3n inv\xe1lida";case"12":return i+" est\xe1 fuera de rango";case"13":return i+" el texto es muy largo";case"14":return i+", no coinciden las contrase\xf1as";case"15":return i+", No autorizado";default:return"No pudo enviarse el formulario, intenta m\xe1s tarde"}}addPrefixToObjectProperties(e,t){let s={};return Object.entries(t).map(t=>{const{0:i,1:a}=Object.assign({},t);let o=a;if("identification"==o.type&&(o=Object(n.a)(a),Object.entries(o.subfields).map(t=>{const{0:s,1:i}=Object.assign({},t);if(!i.name.startsWith(e)){const t=e+this.toCapitalizedString(i.name);o.subfields[s].name=t}})),"select"==o.type&&!0===o.isDependent&&""!==o.dependsOn){o=Object(n.a)(a);const t=e+this.toCapitalizedString(o.dependsOn);o.dependsOn=t}if(!Object(r.isNullOrUndefined)(o.condition)&&(o=Object(n.a)(a),!o.condition.formControlName.startsWith(e))){const t=e+this.toCapitalizedString(o.condition.formControlName);o.condition.formControlName=t}if(i.startsWith(e)||"googlemap"===o.type)s[i]=o;else{let t=this.toCapitalizedString(i);s[e+t]=o}}),s}toCapitalizedString(e){return e.slice(0,1).toUpperCase()+e.slice(1,e.length)}}},J3uF:function(e,t,s){"use strict";s.d(t,"a",function(){return o});var i=s("8Y7J"),a=s("4YED");class o{constructor(){this.close=new i.EventEmitter,this.status="closed"}ngOnInit(){}onClose(){this.toClose(),this.close&&this.close.emit("complete")}open(){this.status="opened",Object(a.a)(this.ref.nativeElement)}toClose(){this.status="closed",Object(a.b)(this.ref.nativeElement)}}},"KB/R":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("8Y7J"),a=s("TNpa"),o=function(){function t(){this.changePage=new i.EventEmitter(!0),this.initialPage=1,this.pageSize=10,this.maxPages=10,this.pager={}}return t.prototype.ngOnInit=function(){this.items&&this.items.length&&this.setPage(this.initialPage)},t.prototype.ngOnChanges=function(e){e.items.currentValue!==e.items.previousValue&&this.setPage(this.initialPage)},t.prototype.setPage=function(e){this.pager=a(this.items.length,e,this.pageSize,this.maxPages);var t=this.items.slice(this.pager.startIndex,this.pager.endIndex+1);this.changePage.emit(t)},t.decorators=[{type:i.Component,args:[{moduleId:e.i,selector:"jw-pagination",template:'<ul *ngIf="pager.pages && pager.pages.length" class="pagination">\n  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">\n      <a (click)="setPage(1)" class="page-link">First</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">\n      <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>\n  </li>\n  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">\n      <a (click)="setPage(page)" class="page-link">{{page}}</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">\n      <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">\n      <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>\n  </li>\n</ul>'}]}],t.propDecorators={items:[{type:i.Input}],changePage:[{type:i.Output}],initialPage:[{type:i.Input}],pageSize:[{type:i.Input}],maxPages:[{type:i.Input}]},t}();t.JwPaginationComponent=o},MlIn:function(e,t,s){"use strict";s.d(t,"a",function(){return a});var i=s("vveu");class a{constructor(){this.validationErrors=null,this.patternMessage=null,this.errorMessage=null}ngOnChanges(){this.errorMessage=this.getErrorMessage()}getErrorMessage(){const e=this.validationErrors;return e?e.required?i.a.REQUIRED_MESSAGE:e.pattern||e.minlength||e.maxlength?this.patternMessage:null:null}}},TNpa:function(e,t,s){"use strict";e.exports=function(e,t,s,i){void 0===t&&(t=1),void 0===s&&(s=10),void 0===i&&(i=10);var a,o,n=Math.ceil(e/s);if(t<1?t=1:t>n&&(t=n),n<=i)a=1,o=n;else{var r=Math.floor(i/2),l=Math.ceil(i/2)-1;t<=r?(a=1,o=i):t+l>=n?(a=n-i+1,o=n):(a=t-r,o=t+l)}var c=(t-1)*s,d=Math.min(c+s-1,e-1),p=Array.from(Array(o+1-a).keys()).map(function(e){return a+e});return{totalItems:e,currentPage:t,pageSize:s,totalPages:n,startPage:a,endPage:o,startIndex:c,endIndex:d,pages:p}}},bj9U:function(e,t,s){"use strict";s.d(t,"a",function(){return c});var i=s("8Y7J"),a=s("SVse"),o=s("s7LF"),n=s("MCLT"),r=s("BkRI"),l=s.n(r);class c{constructor(e,t,s,o){if(this.fb=e,this.toastr=t,this.recaptchaService=s,this.platformId=o,this.isSchoolForm=!1,this.isSponsorForm=!1,this.recaptchaAction="form_wizard",this.submit=new i.EventEmitter,this.dataToSubmit=null,this.isSubmitting=!1,this.lat=8.60831668,this.lng=-66.029011,this.isBrowser=Object(a.isPlatformBrowser)(o),this.isBrowser){this.map=null,this.currentMarker=null;const e=()=>{google&&(clearInterval(t),this.mapSettings(this.lat,this.lng,7))};let t=null;try{e()}catch(n){t=setInterval(()=>{try{e()}catch(n){}},2e3)}}}ngOnInit(){if(this.activeStepIndex=0,this.formWizard=[],this.stepsContent=[],this.fields=[],this.stepItems=l()(this.formsContent),this.stepItems.forEach((e,t)=>{const s=this.appendStepContent(this.stepItems[t].data),i=this.buildFormGroupStep(this.stepsContent[s]);this.formWizard.push(i)}),this.lastStepIndex=this.getLastStepIndex(),this.subscribeDependentFields(),this.subscribeDependentSelects(),this.isBrowser&&this.isSchoolForm){const t=()=>{google&&(clearInterval(s),setTimeout(()=>{this.googleMap&&this.mapInitializer()}))};let s=null;try{t()}catch(e){s=setInterval(()=>{try{t()}catch(e){}},2e3)}}this.isSchoolForm&&(this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).statusChanges.subscribe(e=>{this.currentMarker&&this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value&&this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value.length>0&&this.loadAllMarkers({name:this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value,coordinate:this.formWizard[this.getFormMapContainerIndex()].get("coordinate").value})}),this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).statusChanges.subscribe(t=>{if(this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value&&this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value.length>0){const e=this.stepsContent[this.getFormMapContainerIndex()][this.toCapitalizedString("addressMunicipality")].options.filter(e=>e.id===this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).value);e.length>0&&this.mapPositioner(e[0].state.name,e[0].name)}else if(this.googleMap){const t=()=>{google&&(clearInterval(s),this.mapSettings(this.lat,this.lng,7),this.mapInitializer())};let s=null;try{t()}catch(e){s=setInterval(()=>{try{t()}catch(i){}},2e3)}}}))}ngOnDestroy(){this.currentMarker&&this.currentMarker.setMap(null),this.currentMarker=null,this.map=null,this.recaptchaSubscription&&this.recaptchaSubscription.unsubscribe()}mapSettings(e,t,s){google&&(this.googleLoaded=!0,this.coordinates=new google.maps.LatLng(e,t),this.mapOptions={center:this.coordinates,zoom:s})}mapInitializer(){this.map=new google.maps.Map(this.googleMap.nativeElement,this.mapOptions),google.maps.event.addListener(this.map,"click",e=>{this.loadAllMarkers({name:this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value&&this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value.length>0?this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).value:"Escuela",coordinate:{latitude:e.latLng.lat(),longitude:e.latLng.lng()}})}),this.geocoder=new google.maps.Geocoder,this.currentMarker&&this.currentMarker.setMap(this.map)}loadAllMarkers(e){this.currentMarker&&(this.currentMarker.setMap(null),this.currentMarker=null),this.currentMarker=new google.maps.Marker({map:this.map,position:new google.maps.LatLng(e.coordinate.latitude,e.coordinate.longitude),label:e.name.substring(0,1).toUpperCase(),title:"escuela"==e.name.toLowerCase()?e.name:"Escuela: "+e.name}),this.formWizard[this.getFormMapContainerIndex()].get("coordinate").setValue(e.coordinate),this.currentMarker.setMap(this.map)}mapPositioner(e,t){const s=()=>{google&&(clearInterval(i),this.geocoder.geocode({componentRestrictions:{country:"Venezuela",administrativeArea:e,locality:t}},(e,t)=>{if(t==google.maps.GeocoderStatus.OK)e.length>0?this.mapSettings(e[0].geometry.location.lat(),e[0].geometry.location.lng(),11):this.mapSettings(this.lat,this.lng,7);else{switch(t){case"ZERO_RESULTS":console.log("None result found, showing default map options");break;case"OVER_QUERY_LIMIT":console.error("You are over your quota");break;case"REQUEST_DENIED":console.error("Your site is unavailable to use geocoder");break;default:console.error("Unknown server error")}this.mapSettings(this.lat,this.lng,7)}this.mapInitializer()}))};let i=null;try{s()}catch(a){i=setInterval(()=>{try{s()}catch(a){}},2e3)}}appendStepContent(e){const t=this.stepsContent.push(e)-1;return this.fields.push(Object.keys(this.stepsContent[t])),this.addIdentificationFieldsToStepContent(t,e),t}addIdentificationFieldsToStepContent(e,t){Object.entries(t).map(t=>{const{0:s,1:i}=Object.assign({},t);this.isFormControlTypeof(s,"identification")&&Object.entries(i.subfields).map(t=>{const{0:s,1:i}=Object.assign({},t);this.stepsContent[e][i.name]=i})})}isFormControlTypeof(e,t){let s=!1;return this.stepsContent.map(i=>{i[e]&&(s=i[e].type===t)}),s}buildFormGroupStep(e){const t=this.getFormGroupControls(e);return this.fb.group(t)}getFormGroupControls(e){return Object.keys(e).reduce((t,s)=>Object.assign(Object.assign({},t),this.getFormControlProperty(s,e[s])),{})}getFormControlProperty(e,t){let s="coordinate"===e?null:"";return Object(n.isNullOrUndefined)(t.value)||(s=t.value),"coordinate"===e&&this.isSchoolForm?{[e]:this.fb.group({latitude:[s,this.getValidators(t.validations)],longitude:[s,this.getValidators(t.validations)]})}:{[e]:[s,this.getValidators(t.validations)]}}getValidators(e){return Object.keys(e).map(t=>"required"===t?o.Validators[t]:o.Validators[t](e[t]))}getValidationMessage(e,t){const s=this.formWizard[e].get(t).errors;return this.stepsContent[e][t].errors[Object.keys(s)[0]]}onSubmit(){this.updateDataToSubmit(),this.isValid()?this.recaptchaSubscription=this.recaptchaService.execute(this.recaptchaAction).subscribe(e=>{this.isSubmitting=!0,this.submit.emit(this.dataToSubmit)}):this.toastr.error("Uno o m\xe1s campos del formulario son inv\xe1lidos","",{positionClass:"toast-bottom-right"})}updateDataToSubmit(){this.dataToSubmit=this.formWizard.reduce((e,t,s)=>{let i={};return this.isStepWriteable(s)&&(i=Object.assign({},this.getFormGroupValues(t))),Object.assign(Object.assign({},e),i)},{})}isStepWriteable(e){let t=!0;return this.checkStepOrFieldCondition(this.stepItems[e].condition)||(t=!1),t}checkStepOrFieldCondition(e){return!!("object"!=typeof e||Object(n.isNullOrUndefined)(this.dataToSubmit)||Object(n.isNullOrUndefined)(e.value)||Object(n.isNullOrUndefined)(e.formControlName)||"string"!=typeof e.formControlName||this.dataToSubmit[e.formControlName]===e.value)}getFormGroupValues(e){const t={};return Object.entries(e.value).map(e=>{const{0:s,1:i}=Object.assign({},e);t[s]=this.isFormControlTypeof(s,"date")?this.dateStringToISOString(i):s.toLowerCase().includes("subprincipalemail")&&""==i?null:"code"===s&&"string"==typeof i&&i.replace(/\s/g,"")||i}),t}dateStringToISOString(e){return"string"!=typeof e||""===e?"":new Date(e).toISOString()}isValid(){return this.formWizard.reduce((e,t,s)=>this.isStepWriteable(s)?e&&t.valid:e&&!0,!0)}subscribeDependentFields(){this.stepsContent.map((e,t)=>{Object.keys(e).map(t=>{if(e[t].condition&&e[t].condition.formControlName&&e[t].condition.value){let s=this.getFormControlInFormWizard(e[t].condition.formControlName),i=this.getFormControlInFormWizard(t);s.valueChanges.subscribe(s=>{s==e[t].condition.value?i.enable():i.disable()})}})})}subscribeDependentSelects(){this.stepsContent.map((e,t)=>{Object.keys(e).map(s=>{const{type:i,isDependent:a,dependsOn:o,optionPropertyCondition:n}=e[s];if("select"===i&&!0===a&&o){let i=this.getFormControlInFormWizard(o),a=this.getFormControlInFormWizard(s);i.valueChanges.subscribe(i=>{a.reset();const o=n.split(".");e[s].options=this.formsContent[t].data[s].options.filter(e=>this.accessPropertyByArrayPath(e,o)==i)})}})})}accessPropertyByArrayPath(e,t){return t.reduce((e,t)=>e.hasOwnProperty(t)?e[t]:null,e)}getFormControlInFormWizard(e){let t=null;return this.formWizard.map(s=>{s.controls[e]&&(t=s.controls[e])}),t}goToStep(e){const t=()=>{google&&(clearInterval(s),setTimeout(()=>{this.googleMap&&(this.currentMarker&&this.currentMarker.setMap(null),this.currentMarker=null,this.mapSettings(this.lat,this.lng,7),this.mapInitializer())}))};let s=null;if(this.isSponsorForm&&2===this.activeStepIndex)try{t()}catch(i){s=setInterval(()=>{try{t()}catch(i){}},1e3)}this.updateDataToSubmit(),e=this.validateStep(e),this.isStepWriteable(e)?this.activeStepIndex=e:"next"==this.stepMovement(e)?this.goToStep(e+1):"prev"==this.stepMovement(e)&&this.goToStep(e-1)}validateStep(e){return e<0&&(e=0),e>this.getLastStepIndex()&&(e=this.getLastStepIndex()),e}getLastStepIndex(){let e=this.stepItems.length-1;for(;!this.isStepWriteable(e)||0==e;)--e;return this.lastStepIndex=e,this.lastStepIndex}stepMovement(e){return e>this.activeStepIndex?"next":"prev"}clear(){if(this.isBrowser&&this.isSchoolForm){this.currentMarker&&this.currentMarker.setMap(null);const t=()=>{google&&(clearInterval(s),setTimeout(()=>{this.googleMap&&(this.currentMarker&&this.currentMarker.setMap(null),this.currentMarker=null,this.mapSettings(this.lat,this.lng,7),this.mapInitializer())}))};let s=null;try{t()}catch(e){s=setInterval(()=>{try{t()}catch(e){}},2e3)}}this.formWizard.map(e=>{e.reset(this.getFormControlsWithDefaultValue())}),this.activeStepIndex=0,this.updateDataToSubmit()}getFormControlsWithDefaultValue(){let e={};return this.stepsContent.map((t,s)=>{Object.keys(t).map(s=>{Object(n.isNullOrUndefined)(t[s].value)||(e[s]=t[s].value)})}),e}setIsSubmitting(e){this.isSubmitting=e}getIsSubmitting(){return this.isSubmitting}trackByFn(e){return e}getFormMapContainerIndex(){return this.isSponsorForm?3:0}toCapitalizedString(e){return this.isSponsorForm?"school"+e.slice(0,1).toUpperCase()+e.slice(1,e.length):e}}},jlfn:function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{constructor(){}ngOnInit(){}}},vYfc:function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s("30GA"),s("2yz7"),s("jlfn"),s("J3uF"),s("xBKX"),s("MlIn"),s("bj9U"),s("DNEC"),s("KB/R");class i{}},xBKX:function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{constructor(){}ngOnInit(){}setValue(e){this.formGroup.controls[this.name].setValue(e)}getValue(){return this.formGroup.get(this.name).value}}}}]);