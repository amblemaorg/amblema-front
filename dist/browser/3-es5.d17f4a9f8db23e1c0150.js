!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2yz7":function(e,n,i){"use strict";i.d(n,"a",function(){return o});var o=function(){function e(){t(this,e),this.sponsorPage=!1,this.coordinatorPage=!1,this.titleBold=!1,this.customOptions={autoplay:!0,loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,nav:!1,navSpeed:3e3,responsive:{0:{items:1}}}}return a(e,[{key:"ngOnInit",value:function(){var e=this;this.options&&Object.keys(this.options).map(function(t){e[t]=e.options[t]})}}]),e}()},"30GA":function(e,n,i){"use strict";i.d(n,"a",function(){return s});var o=i("xgIS"),s=function(){function e(n){t(this,e),this.zone=n}return a(e,[{key:"ngOnInit",value:function(){var e=this;this.zone.runOutsideAngular(function(){e.scrollSubscription=Object(o.a)(window,"scroll").subscribe(function(t){e.onScroll(t)})})}},{key:"onScroll",value:function(e){this.bgHeading.nativeElement.offsetTop/e.srcElement.children[0].scrollTop<=2&&(this.scrollSubscription&&this.scrollSubscription.unsubscribe(),this.blueLine.nativeElement.classList.add("animation-finish"),this.blueLine.nativeElement.classList.remove("animation-init"),this.greenLine.nativeElement.classList.add("animation-finish"),this.greenLine.nativeElement.classList.remove("animation-init"))}}]),e}()},"4YED":function(e,t,n){"use strict";n.d(t,"a",function(){return h}),n.d(t,"b",function(){return m});var a=!1;if("undefined"!=typeof window){var i={get passive(){a=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],r=!1,l=-1,c=void 0,u=void 0,d=function(e){return s.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},p=function(e){var t=e||window.event;return!!d(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},h=function(e,t){if(e){if(!s.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s),[n]),o?(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?p(e):e.stopPropagation())}(t,e)},r||(document.addEventListener("touchmove",p,a?{passive:!1}:void 0),r=!0)):function(e){if(void 0===u){var t=window.innerWidth-document.documentElement.clientWidth;e&&!0===e.reserveScrollBarGap&&t>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(e){e?(s=s.filter(function(t){return t.targetElement!==e}),o?(e.ontouchstart=null,e.ontouchmove=null,r&&0===s.length&&(document.removeEventListener("touchmove",p,a?{passive:!1}:void 0),r=!1)):s.length||(void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},DNEC:function(e,n,i){"use strict";i.d(n,"a",function(){return u});var o=i("8Y7J"),s=i("2a0G"),r=i("vveu"),l=i("XIp8"),c=i("MCLT"),u=function(){function e(n,a){t(this,e),this.contactService=n,this.toastr=a,this.success=new o.EventEmitter,this.controlProps={onlyLetters:{type:"text",validations:s.j,messages:{pattern:r.a.ONLY_LETTERS_MESSAGE}},onlyLettersNotRequired:{type:"text",validations:s.d,messages:{pattern:r.a.ONLY_LETTERS_MESSAGE}},onlyLettersNumbers:{type:"text",validations:s.k,messages:{pattern:r.a.ONLY_LETTERS_NUMBERS_MESSAGE}},normalText:{type:"text",validations:s.i,messages:{pattern:r.a.TEXT_MESSAGE}},email:{type:"email",validations:s.g,messages:{pattern:r.a.EMAIL_MESSAGE}},emailNotRequired:{type:"email",validations:s.a,messages:{pattern:r.a.EMAIL_MESSAGE}},number:{type:"number",validations:s.h,messages:{pattern:r.a.NATURAL_NUMBER_MESSAGE}},phone:{type:"tel",validations:s.h,messages:{pattern:r.a.PHONE_MESSAGE}},phoneNotRequired:{type:"tel",validations:s.b,messages:{pattern:r.a.PHONE_MESSAGE}},date:{type:"date",validations:{required:!0}},select:{type:"select",options:[],validations:{required:!0}},confirmation:{type:"confirmation",value:!1,options:{positive:"S\xed",negative:"No"},validations:{required:!0}}},this.schoolStep1={name:Object.assign({label:"Nombre de la escuela"},this.controlProps.normalText),code:Object.assign({label:"C\xf3digo del plantel"},this.controlProps.onlyLettersNumbers),email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),phone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),addressCity:Object.assign({label:"Ciudad"},this.controlProps.onlyLetters),zone:{label:"Zona",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"addressZone"},this.controlProps.normalText),{label:""}),type:Object.assign(Object.assign({name:"addressZoneType"},this.controlProps.select),{options:[{id:"1",name:"Sector"},{id:"2",name:"Barrio"},{id:"3",name:"Cacer\xedo"}]})}},coordinate:{label:"Marca la ubicaci\xf3n exacta de la escuela",button:"Abrir mapa",header:"Selecciona la ubicaci\xf3n de la escuela",type:"googlemap",validations:{required:!0,pattern:null},messages:{}}},this.schoolStep2={principalFirstName:Object.assign({label:"Nombre del director"},this.controlProps.onlyLetters),principalLastName:Object.assign({label:"Apellido del director"},this.controlProps.onlyLetters),principalEmail:Object.assign({label:"Correo electr\xf3nico del director"},this.controlProps.email),principalPhone:Object.assign({label:"N\xfamero de tel\xe9fono del director"},this.controlProps.phone),subPrincipalFirstName:Object.assign({label:"Nombre del subdirector"},this.controlProps.onlyLettersNotRequired),subPrincipalLastName:Object.assign({label:"Apellido del subdirector"},this.controlProps.onlyLettersNotRequired),subPrincipalEmail:Object.assign({label:"Correo electr\xf3nico del subdirector"},this.controlProps.emailNotRequired),subPrincipalPhone:Object.assign({label:"N\xfamero de tel\xe9fono del subdirector"},this.controlProps.phoneNotRequired)},this.schoolStep3={nTeachers:Object.assign({label:"Cantidad de docentes"},this.controlProps.number),nAdministrativeStaff:Object.assign({label:"Cantidad de administrativos"},this.controlProps.number),nLaborStaff:Object.assign({label:"Cantidad de obreros"},this.controlProps.number),nStudents:Object.assign({label:"Cantidad de estudiantes"},this.controlProps.number),nGrades:Object.assign({label:"Cantidad de grados"},this.controlProps.number),nSections:Object.assign({label:"Cantidad de secciones"},this.controlProps.number),schoolType:Object.assign(Object.assign({label:"Tipo de escuela"},this.controlProps.select),{options:[{id:"1",name:"Nacional"},{id:"2",name:"Estadal"},{id:"3",name:"Municipal"}]}),schoolShift:Object.assign(Object.assign({label:"Turno de clases"},this.controlProps.select),{options:[{id:"1",name:"Ma\xf1ana"},{id:"2",name:"Tarde"},{id:"3",name:"Ambos"}]})},this.schoolStep4={hasSponsor:Object.assign({label:"\xbfCuentas con un padrino?"},this.controlProps.confirmation)},this.schoolLastStep={steps:{label:"",type:"list",options:["Visita comercios, empresas o negocios cercanos a tu escuela.","Consulta entre padres y representantes si alguno conoce o trabaja en empresas cercanas a la escuela.","Recauda informaci\xf3n de los posibles padrinos y completa la planilla.","Escr\xedbenos a trav\xe9s de info@amblema.org y solic\xedtanos un padrino."],validations:{}}},this.sponsorStep1={name:Object.assign({label:"Nombre de la empresa"},this.controlProps.normalText),card:{label:"Rif de la empresa",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"rif"},this.controlProps.number),{label:"",type:"text"}),type:Object.assign(Object.assign({name:"rifType"},this.controlProps.select),{value:"2",options:[{id:"2",name:"J"}]})}},email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),companyPhone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),addressCity:Object.assign({label:"Ciudad"},this.controlProps.onlyLetters)},this.sponsorStep2={companyType:Object.assign(Object.assign({label:"Tipo de empresa"},this.controlProps.select),{options:[{id:"1",name:"F\xe1brica"},{id:"2",name:"Tienda"},{id:"3",name:"Negocio personal"},{id:"4",name:"Hacienda"},{id:"0",name:"Otro"}]}),companyOtherType:Object.assign(Object.assign({label:"Otro tipo de empresa"},this.controlProps.onlyLetters),{condition:{formControlName:"companyType",value:"0"}}),contactFirstName:Object.assign({label:"Nombre de la persona de contacto"},this.controlProps.onlyLetters),contactLastName:Object.assign({label:"Apellido de la persona de contacto"},this.controlProps.onlyLetters),contactEmail:Object.assign({label:"Correo electr\xf3nico de la persona de contacto"},this.controlProps.email),contactPhone:Object.assign({label:"N\xfamero de tel\xe9fono de la persona de contacto"},this.controlProps.phone)},this.sponsorStep3={hasSchool:Object.assign({label:"\xbfCuentas con una escuela?"},this.controlProps.confirmation)},this.sponsorLastStep={steps:{label:"",type:"list",options:["Debe seleccionar una escuela cercana a tu empresa, comercio o negocio, en base a los siguientes criterios: escuela p\xfablica, que tenga preescolar y primaria, con un n\xfamero de estudiantes entre 150 y 300, que presente necesidades de ayuda y apoyo de un tercero, y que el personal docente manifieste la disposici\xf3n de mejorar la calidad educativa de la escuela.","Visite la escuela de su preferencia y recaude todos los datos."],validations:{}}},this.coordinatorStep1={firstName:Object.assign({label:"Nombre"},this.controlProps.onlyLetters),lastName:Object.assign({label:"Apellido"},this.controlProps.onlyLetters),gender:Object.assign(Object.assign({label:"Sexo"},this.controlProps.select),{options:[{id:"1",name:"Femenino"},{id:"2",name:"Masculino"}]}),card:{label:"Identificaci\xf3n",type:"identification",validations:{},subfields:{id:Object.assign(Object.assign({name:"cardId"},this.controlProps.number),{label:"",type:"text"}),type:Object.assign(Object.assign({name:"cardType"},this.controlProps.select),{value:"1",options:[{id:"1",name:"V"},{id:"3",name:"E"}]})}},homePhone:Object.assign({label:"Tel\xe9fono de contacto"},this.controlProps.phone),birthdate:Object.assign({label:"Fecha de nacimiento"},this.controlProps.date),addressState:Object.assign({label:"Estado"},this.controlProps.select),addressMunicipality:Object.assign({label:"Municipio",isDependent:!0,dependsOn:"addressState",optionPropertyCondition:"state.id"},this.controlProps.select)},this.coordinatorStep2={addressCity:Object.assign({label:"Ciudad de residencia"},this.controlProps.onlyLetters),addressHome:Object.assign({label:"Casa / Edificio"},this.controlProps.normalText),address:Object.assign({label:"Calles / Carreras"},this.controlProps.normalText),email:Object.assign({label:"Correo electr\xf3nico"},this.controlProps.email),phone:Object.assign({label:"N\xfamero de tel\xe9fono"},this.controlProps.phone),profession:Object.assign({label:"Profesi\xf3n"},this.controlProps.onlyLetters),isReferred:Object.assign(Object.assign({label:"\xbfEs referido de \xe1lguien?"},this.controlProps.select),{options:[{id:!0,name:"S\xed"},{id:!1,name:"No"}]}),referredName:Object.assign(Object.assign({label:"Nombre completo de la persona que lo refiri\xf3"},this.controlProps.onlyLetters),{condition:{formControlName:"isReferred",value:!0}})},this.schoolStepItems=[{title:"Datos de la Escuela:",data:this.schoolStep1},{title:"Datos de la Escuela:",data:this.schoolStep2},{title:"Datos de la Escuela:",data:this.schoolStep3},{title:"Para formar parte de la red AmbLeMa de escuelas, la fundaci\xf3n te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentaci\xf3n, para comenzar a aplicar la herramienta al inicio del a\xf1o escolar",data:this.schoolStep4},{title:"Datos del Padrino: ",data:this.addPrefixToObjectProperties("sponsor",this.sponsorStep1),condition:{formControlName:"hasSponsor",value:!0}},{title:"Datos del Padrino: ",data:this.addPrefixToObjectProperties("sponsor",this.sponsorStep2),condition:{formControlName:"hasSponsor",value:!0}},{title:"Puedes seguir cualquiera de estos pasos:",data:this.schoolLastStep,condition:{formControlName:"hasSponsor",value:!1}}],this.sponsorStepItems=[{title:"Datos del Padrino:",data:this.sponsorStep1},{title:"Datos del Padrino:",data:this.sponsorStep2},{title:"El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela p\xfablica de su comunidad. Esta inversi\xf3n social rinde beneficios tangibles e intangibles. Tangibles son las mejoras en la calidad de su comunidad  y a la vez el pa\xeds. Intagible es la satisfacci\xf3n personal que se logra.",data:this.sponsorStep3},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep1),condition:{formControlName:"hasSchool",value:!0}},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep2),condition:{formControlName:"hasSchool",value:!0}},{title:"Datos de la Escuela:",data:this.addPrefixToObjectProperties("school",this.schoolStep3),condition:{formControlName:"hasSchool",value:!0}},{title:"Puedes seguir cualquiera de estos pasos:",data:this.sponsorLastStep,condition:{formControlName:"hasSchool",value:!1}}],this.coordinatorStepItems=[{title:"Datos del Coordinador:",data:this.coordinatorStep1},{title:"Datos del Coordinador:",data:this.coordinatorStep2}]}return a(e,[{key:"ngOnInit",value:function(){this.getMunicipalitiesData(),this.getStatesData()}},{key:"getStatesData",value:function(){var e=this;this.contactService.getStates().subscribe(function(t){e.schoolStep1.addressState.options=t.records,e.sponsorStep1.addressState.options=t.records,e.coordinatorStep1.addressState.options=t.records})}},{key:"getMunicipalitiesData",value:function(){var e=this;this.contactService.getMunicipalities().subscribe(function(t){e.schoolStep1.addressMunicipality.options=t.records,e.schoolStepItems[4].data.sponsorAddressMunicipality.options=t.records,e.sponsorStep1.addressMunicipality.options=t.records,e.sponsorStepItems[3].data.schoolAddressMunicipality.options=t.records,e.coordinatorStep1.addressMunicipality.options=t.records})}},{key:"submitContactForm",value:function(e,t){var n=this,a={};switch(e){case"coordinator":this.coordinatorStepItems.map(function(e){return a=Object.assign(Object.assign({},a),e.data)});break;case"sponsor":this.sponsorStepItems.map(function(e){return a=Object.assign(Object.assign({},a),e.data)});break;case"school":this.schoolStepItems.map(function(e){return a=Object.assign(Object.assign({},a),e.data)})}this.contactService.sendContactForm(e,t).subscribe({next:function(e){n.displayMessage("Formulario enviado satisfactoriamente","success"),n.formWizard.clear(),n.formWizard.setIsSubmitting(!1),n.success.emit("complete")},error:function(e){console.error(e),n.displayMessage(n.handleMessageError(e.error,a),"error"),n.formWizard.setIsSubmitting(!1)}})}},{key:"displayMessage",value:function(e,t){var n={positionClass:"toast-bottom-right"};switch(t){case"success":this.toastr.success(e,"",n);break;case"error":this.toastr.error(e,"",n);break;default:this.toastr.info(e,"",n)}}},{key:"handleMessageError",value:function(e,t){var n=Object.keys(e),a=t[n[0]].label;switch(e[n[0]][0].status){case"1":return a+" es invalido";case"2":return a+" es requerido";case"3":return a+" no puede ser nulo";case"4":return a+", error de validacion";case"5":return a+" ya est\xe1 registrado";case"6":return a+" no se encontr\xf3 registro";case"7":return a+" admite solo letras";case"8":return a+" admite solo numeros";case"9":return a+", la imagen es inv\xe1lida";case"10":return a+", la URL es inv\xe1lida";case"11":return a+", opci\xf3n inv\xe1lida";case"12":return a+" est\xe1 fuera de rango";case"13":return a+" el texto es muy largo";case"14":return a+", no coinciden las contrase\xf1as";case"15":return a+", No autorizado";default:return"No pudo enviarse el formulario, intenta m\xe1s tarde"}}},{key:"addPrefixToObjectProperties",value:function(e,t){var n=this,a={};return Object.entries(t).map(function(t){var i=Object.assign({},t),o=i[0],s=i[1],r=s;if("identification"==r.type&&(r=Object(l.a)(s),Object.entries(r.subfields).map(function(t){var a=Object.assign({},t),i=a[0],o=a[1];if(!o.name.startsWith(e)){var s=e+n.toCapitalizedString(o.name);r.subfields[i].name=s}})),"select"==r.type&&!0===r.isDependent&&""!==r.dependsOn){r=Object(l.a)(s);var u=e+n.toCapitalizedString(r.dependsOn);r.dependsOn=u}if(!Object(c.isNullOrUndefined)(r.condition)&&!(r=Object(l.a)(s)).condition.formControlName.startsWith(e)){var d=e+n.toCapitalizedString(r.condition.formControlName);r.condition.formControlName=d}if(o.startsWith(e)||"googlemap"===r.type)a[o]=r;else{var p=n.toCapitalizedString(o);a[e+p]=r}}),a}},{key:"toCapitalizedString",value:function(e){return e.slice(0,1).toUpperCase()+e.slice(1,e.length)}}]),e}()},J3uF:function(e,n,i){"use strict";i.d(n,"a",function(){return r});var o=i("8Y7J"),s=i("4YED"),r=function(){function e(){t(this,e),this.close=new o.EventEmitter,this.status="closed"}return a(e,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.toClose(),this.close&&this.close.emit("complete")}},{key:"open",value:function(){this.status="opened",Object(s.a)(this.ref.nativeElement)}},{key:"toClose",value:function(){this.status="closed",Object(s.b)(this.ref.nativeElement)}}]),e}()},"KB/R":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("8Y7J"),i=n("TNpa"),o=function(){function t(){this.changePage=new a.EventEmitter(!0),this.initialPage=1,this.pageSize=10,this.maxPages=10,this.pager={}}return t.prototype.ngOnInit=function(){this.items&&this.items.length&&this.setPage(this.initialPage)},t.prototype.ngOnChanges=function(e){e.items.currentValue!==e.items.previousValue&&this.setPage(this.initialPage)},t.prototype.setPage=function(e){this.pager=i(this.items.length,e,this.pageSize,this.maxPages);var t=this.items.slice(this.pager.startIndex,this.pager.endIndex+1);this.changePage.emit(t)},t.decorators=[{type:a.Component,args:[{moduleId:e.i,selector:"jw-pagination",template:'<ul *ngIf="pager.pages && pager.pages.length" class="pagination">\n  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">\n      <a (click)="setPage(1)" class="page-link">First</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">\n      <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>\n  </li>\n  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">\n      <a (click)="setPage(page)" class="page-link">{{page}}</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">\n      <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>\n  </li>\n  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">\n      <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>\n  </li>\n</ul>'}]}],t.propDecorators={items:[{type:a.Input}],changePage:[{type:a.Output}],initialPage:[{type:a.Input}],pageSize:[{type:a.Input}],maxPages:[{type:a.Input}]},t}();t.JwPaginationComponent=o},MlIn:function(e,n,i){"use strict";i.d(n,"a",function(){return s});var o=i("vveu"),s=function(){function e(){t(this,e),this.validationErrors=null,this.patternMessage=null,this.errorMessage=null}return a(e,[{key:"ngOnChanges",value:function(){this.errorMessage=this.getErrorMessage()}},{key:"getErrorMessage",value:function(){var e=this.validationErrors;return e?e.required?o.a.REQUIRED_MESSAGE:e.pattern||e.minlength||e.maxlength?this.patternMessage:null:null}}]),e}()},TNpa:function(e,t,n){"use strict";e.exports=function(e,t,n,a){void 0===t&&(t=1),void 0===n&&(n=10),void 0===a&&(a=10);var i,o,s=Math.ceil(e/n);if(t<1?t=1:t>s&&(t=s),s<=a)i=1,o=s;else{var r=Math.floor(a/2),l=Math.ceil(a/2)-1;t<=r?(i=1,o=a):t+l>=s?(i=s-a+1,o=s):(i=t-r,o=t+l)}var c=(t-1)*n,u=Math.min(c+n-1,e-1),d=Array.from(Array(o+1-i).keys()).map(function(e){return i+e});return{totalItems:e,currentPage:t,pageSize:n,totalPages:s,startPage:i,endPage:o,startIndex:c,endIndex:u,pages:d}}},bj9U:function(n,i,o){"use strict";o.d(i,"a",function(){return p});var s=o("8Y7J"),r=o("SVse"),l=o("s7LF"),c=o("MCLT"),u=o("BkRI"),d=o.n(u),p=function(){function n(e,a,i,o){var l=this;if(t(this,n),this.fb=e,this.toastr=a,this.recaptchaService=i,this.platformId=o,this.isSchoolForm=!1,this.isSponsorForm=!1,this.recaptchaAction="form_wizard",this.submit=new s.EventEmitter,this.dataToSubmit=null,this.isSubmitting=!1,this.lat=8.60831668,this.lng=-66.029011,this.isBrowser=Object(r.isPlatformBrowser)(o),this.isBrowser){this.map=null,this.currentMarker=null;var c=function(){google&&(clearInterval(u),l.mapSettings(l.lat,l.lng,7))},u=null;try{c()}catch(d){u=setInterval(function(){try{c()}catch(d){}},2e3)}}}return a(n,[{key:"ngOnInit",value:function(){var e=this;if(this.activeStepIndex=0,this.formWizard=[],this.stepsContent=[],this.fields=[],this.stepItems=d()(this.formsContent),this.stepItems.forEach(function(t,n){var a=e.appendStepContent(e.stepItems[n].data),i=e.buildFormGroupStep(e.stepsContent[a]);e.formWizard.push(i)}),this.lastStepIndex=this.getLastStepIndex(),this.subscribeDependentFields(),this.subscribeDependentSelects(),this.isBrowser&&this.isSchoolForm){var t=function(){google&&(clearInterval(n),setTimeout(function(){e.googleMap&&e.mapInitializer()}))},n=null;try{t()}catch(a){n=setInterval(function(){try{t()}catch(a){}},2e3)}}this.isSchoolForm&&(this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).statusChanges.subscribe(function(t){e.currentMarker&&e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value&&e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value.length>0&&e.loadAllMarkers({name:e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value,coordinate:e.formWizard[e.getFormMapContainerIndex()].get("coordinate").value})}),this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).statusChanges.subscribe(function(t){if(e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("addressMunicipality")).value&&e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("addressMunicipality")).value.length>0){var n=e.stepsContent[e.getFormMapContainerIndex()][e.toCapitalizedString("addressMunicipality")].options.filter(function(t){return t.id===e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("addressMunicipality")).value});n.length>0&&e.mapPositioner(n[0].state.name,n[0].name)}else if(e.googleMap){var i=function(){google&&(clearInterval(o),e.mapSettings(e.lat,e.lng,7),e.mapInitializer())},o=null;try{i()}catch(a){o=setInterval(function(){try{i()}catch(e){}},2e3)}}}))}},{key:"ngOnDestroy",value:function(){this.currentMarker&&this.currentMarker.setMap(null),this.currentMarker=null,this.map=null,this.recaptchaSubscription&&this.recaptchaSubscription.unsubscribe()}},{key:"mapSettings",value:function(e,t,n){google&&(this.googleLoaded=!0,this.coordinates=new google.maps.LatLng(e,t),this.mapOptions={center:this.coordinates,zoom:n})}},{key:"mapInitializer",value:function(){var e=this;this.map=new google.maps.Map(this.googleMap.nativeElement,this.mapOptions),google.maps.event.addListener(this.map,"click",function(t){e.loadAllMarkers({name:e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value&&e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value.length>0?e.formWizard[e.getFormMapContainerIndex()].get(e.toCapitalizedString("name")).value:"Escuela",coordinate:{latitude:t.latLng.lat(),longitude:t.latLng.lng()}})}),this.geocoder=new google.maps.Geocoder,this.currentMarker&&this.currentMarker.setMap(this.map)}},{key:"loadAllMarkers",value:function(e){this.currentMarker&&(this.currentMarker.setMap(null),this.currentMarker=null),this.currentMarker=new google.maps.Marker({map:this.map,position:new google.maps.LatLng(e.coordinate.latitude,e.coordinate.longitude),label:e.name.substring(0,1).toUpperCase(),title:"escuela"==e.name.toLowerCase()?e.name:"Escuela: "+e.name}),this.formWizard[this.getFormMapContainerIndex()].get("coordinate").setValue(e.coordinate),this.currentMarker.setMap(this.map)}},{key:"mapPositioner",value:function(e,t){var n=this,a=function(){google&&(clearInterval(i),n.geocoder.geocode({componentRestrictions:{country:"Venezuela",administrativeArea:e,locality:t}},function(e,t){if(t==google.maps.GeocoderStatus.OK)e.length>0?n.mapSettings(e[0].geometry.location.lat(),e[0].geometry.location.lng(),11):n.mapSettings(n.lat,n.lng,7);else{switch(t){case"ZERO_RESULTS":console.log("None result found, showing default map options");break;case"OVER_QUERY_LIMIT":console.error("You are over your quota");break;case"REQUEST_DENIED":console.error("Your site is unavailable to use geocoder");break;default:console.error("Unknown server error")}n.mapSettings(n.lat,n.lng,7)}n.mapInitializer()}))},i=null;try{a()}catch(o){i=setInterval(function(){try{a()}catch(o){}},2e3)}}},{key:"appendStepContent",value:function(e){var t=this.stepsContent.push(e)-1;return this.fields.push(Object.keys(this.stepsContent[t])),this.addIdentificationFieldsToStepContent(t,e),t}},{key:"addIdentificationFieldsToStepContent",value:function(e,t){var n=this;Object.entries(t).map(function(t){var a=Object.assign({},t),i=a[0],o=a[1];n.isFormControlTypeof(i,"identification")&&Object.entries(o.subfields).map(function(t){var a=Object.assign({},t),i=(a[0],a[1]);n.stepsContent[e][i.name]=i})})}},{key:"isFormControlTypeof",value:function(e,t){var n=!1;return this.stepsContent.map(function(a){a[e]&&(n=a[e].type===t)}),n}},{key:"buildFormGroupStep",value:function(e){var t=this.getFormGroupControls(e);return this.fb.group(t)}},{key:"getFormGroupControls",value:function(e){var t=this;return Object.keys(e).reduce(function(n,a){return Object.assign(Object.assign({},n),t.getFormControlProperty(a,e[a]))},{})}},{key:"getFormControlProperty",value:function(t,n){var a="coordinate"===t?null:"";return Object(c.isNullOrUndefined)(n.value)||(a=n.value),"coordinate"===t&&this.isSchoolForm?e({},t,this.fb.group({latitude:[a,this.getValidators(n.validations)],longitude:[a,this.getValidators(n.validations)]})):e({},t,[a,this.getValidators(n.validations)])}},{key:"getValidators",value:function(e){return Object.keys(e).map(function(t){return"required"===t?l.Validators[t]:l.Validators[t](e[t])})}},{key:"getValidationMessage",value:function(e,t){var n=this.formWizard[e].get(t).errors;return this.stepsContent[e][t].errors[Object.keys(n)[0]]}},{key:"onSubmit",value:function(){var e=this;this.updateDataToSubmit(),this.isValid()?this.recaptchaSubscription=this.recaptchaService.execute(this.recaptchaAction).subscribe(function(t){e.isSubmitting=!0,e.submit.emit(e.dataToSubmit)}):this.toastr.error("Uno o m\xe1s campos del formulario son inv\xe1lidos","",{positionClass:"toast-bottom-right"})}},{key:"updateDataToSubmit",value:function(){var e=this;this.dataToSubmit=this.formWizard.reduce(function(t,n,a){var i={};return e.isStepWriteable(a)&&(i=Object.assign({},e.getFormGroupValues(n))),Object.assign(Object.assign({},t),i)},{})}},{key:"isStepWriteable",value:function(e){var t=!0;return this.checkStepOrFieldCondition(this.stepItems[e].condition)||(t=!1),t}},{key:"checkStepOrFieldCondition",value:function(e){return!!("object"!=typeof e||Object(c.isNullOrUndefined)(this.dataToSubmit)||Object(c.isNullOrUndefined)(e.value)||Object(c.isNullOrUndefined)(e.formControlName)||"string"!=typeof e.formControlName||this.dataToSubmit[e.formControlName]===e.value)}},{key:"getFormGroupValues",value:function(e){var t=this,n={};return Object.entries(e.value).map(function(e){var a=Object.assign({},e),i=a[0],o=a[1];n[i]=t.isFormControlTypeof(i,"date")?t.dateStringToISOString(o):i.toLowerCase().includes("subprincipalemail")&&""==o?null:"code"===i&&"string"==typeof o&&o.replace(/\s/g,"")||o}),n}},{key:"dateStringToISOString",value:function(e){return"string"!=typeof e||""===e?"":new Date(e).toISOString()}},{key:"isValid",value:function(){var e=this;return this.formWizard.reduce(function(t,n,a){return e.isStepWriteable(a)?t&&n.valid:t&&!0},!0)}},{key:"subscribeDependentFields",value:function(){var e=this;this.stepsContent.map(function(t,n){Object.keys(t).map(function(n){if(t[n].condition&&t[n].condition.formControlName&&t[n].condition.value){var a=e.getFormControlInFormWizard(t[n].condition.formControlName),i=e.getFormControlInFormWizard(n);a.valueChanges.subscribe(function(e){e==t[n].condition.value?i.enable():i.disable()})}})})}},{key:"subscribeDependentSelects",value:function(){var e=this;this.stepsContent.map(function(t,n){Object.keys(t).map(function(a){var i=t[a],o=i.type,s=i.isDependent,r=i.dependsOn,l=i.optionPropertyCondition;if("select"===o&&!0===s&&r){var c=e.getFormControlInFormWizard(r),u=e.getFormControlInFormWizard(a);c.valueChanges.subscribe(function(i){u.reset();var o=l.split(".");t[a].options=e.formsContent[n].data[a].options.filter(function(t){return e.accessPropertyByArrayPath(t,o)==i})})}})})}},{key:"accessPropertyByArrayPath",value:function(e,t){return t.reduce(function(e,t){return e.hasOwnProperty(t)?e[t]:null},e)}},{key:"getFormControlInFormWizard",value:function(e){var t=null;return this.formWizard.map(function(n){n.controls[e]&&(t=n.controls[e])}),t}},{key:"goToStep",value:function(e){var t=this,n=function(){google&&(clearInterval(a),setTimeout(function(){t.googleMap&&(t.currentMarker&&t.currentMarker.setMap(null),t.currentMarker=null,t.mapSettings(t.lat,t.lng,7),t.mapInitializer())}))},a=null;if(this.isSponsorForm&&2===this.activeStepIndex)try{n()}catch(i){a=setInterval(function(){try{n()}catch(i){}},1e3)}this.updateDataToSubmit(),e=this.validateStep(e),this.isStepWriteable(e)?this.activeStepIndex=e:"next"==this.stepMovement(e)?this.goToStep(e+1):"prev"==this.stepMovement(e)&&this.goToStep(e-1)}},{key:"validateStep",value:function(e){return e<0&&(e=0),e>this.getLastStepIndex()&&(e=this.getLastStepIndex()),e}},{key:"getLastStepIndex",value:function(){for(var e=this.stepItems.length-1;!this.isStepWriteable(e)||0==e;)--e;return this.lastStepIndex=e,this.lastStepIndex}},{key:"stepMovement",value:function(e){return e>this.activeStepIndex?"next":"prev"}},{key:"clear",value:function(){var e=this;if(this.isBrowser&&this.isSchoolForm){this.currentMarker&&this.currentMarker.setMap(null);var t=function(){google&&(clearInterval(n),setTimeout(function(){e.googleMap&&(e.currentMarker&&e.currentMarker.setMap(null),e.currentMarker=null,e.mapSettings(e.lat,e.lng,7),e.mapInitializer())}))},n=null;try{t()}catch(a){n=setInterval(function(){try{t()}catch(a){}},2e3)}}this.formWizard.map(function(t){t.reset(e.getFormControlsWithDefaultValue())}),this.activeStepIndex=0,this.updateDataToSubmit()}},{key:"getFormControlsWithDefaultValue",value:function(){var e={};return this.stepsContent.map(function(t,n){Object.keys(t).map(function(n){Object(c.isNullOrUndefined)(t[n].value)||(e[n]=t[n].value)})}),e}},{key:"setIsSubmitting",value:function(e){this.isSubmitting=e}},{key:"getIsSubmitting",value:function(){return this.isSubmitting}},{key:"trackByFn",value:function(e){return e}},{key:"getFormMapContainerIndex",value:function(){return this.isSponsorForm?3:0}},{key:"toCapitalizedString",value:function(e){return this.isSponsorForm?"school"+e.slice(0,1).toUpperCase()+e.slice(1,e.length):e}}]),n}()},jlfn:function(e,n,i){"use strict";i.d(n,"a",function(){return o});var o=function(){function e(){t(this,e)}return a(e,[{key:"ngOnInit",value:function(){}}]),e}()},vYfc:function(e,n,a){"use strict";a.d(n,"a",function(){return i}),a("30GA"),a("2yz7"),a("jlfn"),a("J3uF"),a("xBKX"),a("MlIn"),a("bj9U"),a("DNEC"),a("KB/R");var i=function e(){t(this,e)}},xBKX:function(e,n,i){"use strict";i.d(n,"a",function(){return o});var o=function(){function e(){t(this,e)}return a(e,[{key:"ngOnInit",value:function(){}},{key:"setValue",value:function(e){this.formGroup.controls[this.name].setValue(e)}},{key:"getValue",value:function(){return this.formGroup.get(this.name).value}}]),e}()}}])}();