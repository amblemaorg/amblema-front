(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+EjT":function(n,l,e){"use strict";e.r(l),e.d(l,"SchoolModuleNgFactory",function(){return j});var t=e("8Y7J");class o{}var a=e("pMnS"),i=e("SVse"),s=e("jXVt"),c=e("tKwJ"),u=e("cUpR"),r=e("s7LF"),d=e("7ebX"),g=e("AmKS"),p=e("mrSG"),m=e("MCLT"),h=e("nWHY"),b=e("AytR"),f=e("e1JD"),v=e("LMpb"),C=e("ZB5T");let M=(()=>{class n{constructor(n,l,e,t,o){this.router=n,this.globalService=l,this.modalService=e,this.http=t,this.store=o,this.lat=8.14893,this.lng=-66.831185,this.coordinates=new google.maps.LatLng(this.lat,this.lng),this.mapOptions={center:this.coordinates,zoom:7},this.SCHOOLS_PATH="schoolspage",this.searchInputValue=""}ngAfterViewInit(){this.mapInitializer(),this.hadNotAcceptedModal()&&this.open(this.modal)}ngOnInit(){this.setApiService(),this.getSchoolsPageData()}hadNotAcceptedModal(){if(this.globalService.isBrowser){const n=sessionStorage.getItem("accepted-school-modal");return Object(m.isNullOrUndefined)(n)||"0"==n}return!0}open(n){this.modalService.openModal(n).result.then(n=>{this.globalService.isBrowser&&sessionStorage.setItem("accepted-school-modal","1")},n=>{sessionStorage.setItem("accepted-school-modal","0")})}mapInitializer(n=this.mapOptions){this.map=new google.maps.Map(this.gmap.nativeElement,n)}loadAllMarkers(n){const l={path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",fillColor:"blue",fillOpacity:1,strokeWeight:0,rotation:0,scale:2.5,anchor:new google.maps.Point(15,30)};this.schoolsList.map(e=>{let t={map:this.map,position:new google.maps.LatLng(e.lat,e.lng),title:e.slug};n&&n.equals(t.position)&&(t.icon=l,t.zIndex=100);const o=new google.maps.Marker(t);o.addListener("click",()=>{this.router.navigate(["escuelas/"+o.getTitle()])}),o.setMap(this.map)})}setApiService(){const n=new h.a(this.http);n.setBaseUrl(b.a.baseUrl),n.setResourcePath(this.SCHOOLS_PATH),this.schoolService=n}getSchoolsPageData(){this.store.dispatch([new v.a("true")]),this.schoolService.getWebContent().subscribe(n=>{this.schoolsList=n.records.map(n=>({slug:n.slug,name:n.name,lat:n.coordinate.latitude,lng:n.coordinate.longitude,state:n.addressState.name})),this.loadAllMarkers(),this.store.dispatch([new v.a("false")])})}zoomTo(n,l){const e=new google.maps.LatLng(n,l);this.mapInitializer({center:e,zoom:12}),this.loadAllMarkers(e)}isZoomIt(n){const{lat:l,lng:e}=n;return new google.maps.LatLng(l,e).equals(this.map.getCenter())}}return Object(p.b)([Object(f.f)(C.a.getIsLoadingSchoolMarkers)],n.prototype,"isItLoading$",void 0),n})();var _=e("iInd"),O=e("4WDQ"),P=e("VQPA"),w=e("IheW"),k=t["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%]::-webkit-scrollbar{width:.8em;height:.8em}body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ccc;border-radius:1em}body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:#999}body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,.2)}body[_ngcontent-%COMP%]::-webkit-scrollbar-track{display:none}body[_ngcontent-%COMP%]::-webkit-scrollbar-track:active, body[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover{background:#d4d4d4}.btn-blue[_ngcontent-%COMP%]{background-color:#00809a;color:#fff;border:1px solid #00809a}.btn-blue[_ngcontent-%COMP%]:hover{background-color:#fff;color:#00809a}.primary-color[_ngcontent-%COMP%]{color:#00809a}#map[_ngcontent-%COMP%]{height:100vh;width:100%}#school-overlay-loading[_ngcontent-%COMP%]{background:#000;background:rgba(0,0,0,.45);position:fixed;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}#school-overlay-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:4vw;text-shadow:1px 1px 5px rgba(0,0,0,.5)}@media screen and (orientation:landscape){#school-overlay-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5vw}}.school-list[_ngcontent-%COMP%]{min-width:280px;width:25vw;background:#fff;padding:18px;position:absolute;bottom:2vw;left:.6vw;z-index:1}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{max-height:380px;overflow:auto;list-style:none;padding:10px 0;display:flex;gap:18px;flex-direction:column}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar{width:.8em;height:.8em}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ccc;border-radius:1em}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:#999}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,.2)}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-track{display:none}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-track:active, .school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover{background:#d4d4d4}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5em;height:.5em}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:.3s;display:flex}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.notFound){cursor:pointer}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.notFound):hover{color:#00809a}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:23px}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.school-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%]{color:#00809a}.school-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:.25rem;background-color:#f7f9fc;border:.0625rem solid #e4e9f2;color:#00809a;font-size:.9375rem;line-height:1.5rem;padding:.4375rem 1rem;transition-duration:.15s;transition-property:border,background-color,color,box-shadow;transition-timing-function:ease-in}.school-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus, .school-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus-visible{outline:0}"]],data:{}});function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["id","school-overlay-loading"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Cargando informaci\xf3n de escuelas..."]))],null,null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,11,"li",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.zoomTo(n.parent.context.$implicit.lat,n.parent.context.$implicit.lng)&&t),t},null,null)),t["\u0275did"](2,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](3,{"primary-color":0}),(n()(),t["\u0275eld"](4,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"nb-icon",[["class","icon"],["icon","pin-outline"]],[[8,"innerHTML",1],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"status-basic",null],[2,"status-control",null]],null,null,s.H,s.l)),t["\u0275did"](6,638976,null,0,c.dc,[u.DomSanitizer,c.ec,t.ElementRef,t.Renderer2],{icon:[0,"icon"]},null),(n()(),t["\u0275eld"](7,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["",""])),t["\u0275ppd"](10,2),(n()(),t["\u0275eld"](11,0,null,null,1,"small",[["class","state"]],null,null,null,null,null)),(n()(),t["\u0275ted"](12,null,["",""]))],function(n,l){var e=n(l,3,0,l.component.isZoomIt(l.parent.context.$implicit));n(l,2,0,e),n(l,6,0,"pin-outline")},function(n,l){n(l,5,0,t["\u0275nov"](l,6).html,t["\u0275nov"](l,6).primary,t["\u0275nov"](l,6).info,t["\u0275nov"](l,6).success,t["\u0275nov"](l,6).warning,t["\u0275nov"](l,6).danger,t["\u0275nov"](l,6).basic,t["\u0275nov"](l,6).control);var e=t["\u0275unv"](l,9,0,n(l,10,0,t["\u0275nov"](l.parent.parent.parent,1),l.parent.context.$implicit.name,80));n(l,9,0,e),n(l,12,0,l.parent.context.$implicit.state)})}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"li",[["class","notFound"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Sin coincidencias \xa1Intenta otras palabras claves! "]))],null,null)}function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](2,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t["\u0275and"](0,[["notFound",2]],null,0,null,S))],function(n,l){n(l,2,0,!l.context.$implicit.notFound,t["\u0275nov"](l,3))},null)}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"div",[["class","school-list"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"ul",[["class","list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,4,null,L)),t["\u0275did"](3,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](4,2),t["\u0275pod"](5,{notFound:0}),t["\u0275ppd"](6,5),(n()(),t["\u0275eld"](7,0,null,null,5,"input",[["class","search-input"],["name","schoolSearcher"],["nbInput",""],["placeholder","Buscar escuela en AmbLeMa "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,a=n.component;return"input"===l&&(o=!1!==t["\u0275nov"](n,8)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,8).onTouched()&&o),"compositionstart"===l&&(o=!1!==t["\u0275nov"](n,8)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t["\u0275nov"](n,8)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.searchInputValue=e)&&o),o},null,null)),t["\u0275did"](8,16384,null,0,r.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),t["\u0275did"](10,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),t["\u0275did"](12,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null)],function(n,l){var e=l.component,o=t["\u0275unv"](l,3,0,n(l,6,0,t["\u0275nov"](l.parent,0),e.schoolsList,e.searchInputValue,n(l,4,0,"name","state"),"some",n(l,5,0,!0)));n(l,3,0,o),n(l,10,0,"schoolSearcher",e.searchInputValue)},function(n,l){n(l,7,0,t["\u0275nov"](l,12).ngClassUntouched,t["\u0275nov"](l,12).ngClassTouched,t["\u0275nov"](l,12).ngClassPristine,t["\u0275nov"](l,12).ngClassDirty,t["\u0275nov"](l,12).ngClassValid,t["\u0275nov"](l,12).ngClassInvalid,t["\u0275nov"](l,12).ngClassPending)})}function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.context.$implicit.dismiss()&&t),t},null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xd7"])),(n()(),t["\u0275eld"](4,0,null,null,4,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Selecciona una escuela para ver el detalle"])),(n()(),t["\u0275eld"](7,0,null,null,1,"button",[["class","btn modal-button"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.context.$implicit.close("accept")&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,[" Aceptar "]))],null,null)}function R(n){return t["\u0275vid"](0,[t["\u0275pid"](0,d.a,[]),t["\u0275pid"](0,g.a,[]),t["\u0275qud"](671088640,1,{modal:0}),t["\u0275qud"](671088640,2,{gmap:0}),(n()(),t["\u0275eld"](4,0,[[2,0],["mapWrapper",1]],null,0,"div",[["id","map"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,2,null,y)),t["\u0275did"](6,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t["\u0275pid"](131072,i.AsyncPipe,[t.ChangeDetectorRef]),(n()(),t["\u0275and"](0,[["schoolList",2]],null,0,null,x)),(n()(),t["\u0275and"](0,[[1,2],["content",2]],null,0,null,A))],function(n,l){var e=l.component;n(l,6,0,t["\u0275unv"](l,6,0,t["\u0275nov"](l,7).transform(e.isItLoading$))&&!e.hadNotAcceptedModal(),t["\u0275nov"](l,8))},null)}var z=e("Xkmw");class N{constructor(n,l){this.globalService=n,this.store=l,this.globalService.setTitle(z.a.schoolsPage.title),this.globalService.setMetaTags(z.a.schoolsPage.metatags)}ngOnInit(){}ngAfterViewInit(){this.globalService.isBrowser&&setTimeout(()=>{this.store.dispatch([new v.a(!1)])})}}var E=t["\u0275crt"]({encapsulation:0,styles:[["web-schools-map[_ngcontent-%COMP%]{display:block;position:relative;z-index:10}"]],data:{}});function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"web-schools-map",[],null,null,null,R,k)),t["\u0275did"](1,4308992,null,0,M,[_.m,O.a,P.a,w.HttpClient,f.k],null,null)],function(n,l){n(l,1,0)},null)}function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](1,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](3,212992,null,0,_.r,[_.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0,l.component.globalService.isBrowser),n(l,3,0)},null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-school",[],null,null,null,V,E)),t["\u0275did"](1,4308992,null,0,N,[O.a,f.k],null,null)],function(n,l){n(l,1,0)},null)}var D=t["\u0275ccf"]("app-school",N,F,{},{},[]);const q=()=>Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"cJWv")).then(n=>n.SchoolDetailModuleNgFactory);class U{}var $=e("XoTT"),B=e("iTUp"),j=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_n"],r["\u0275angular_packages_forms_forms_n"],[]),t["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),t["\u0275mpd"](1073742336,_.q,_.q,[[2,_.v],[2,_.m]]),t["\u0275mpd"](1073742336,U,U,[]),t["\u0275mpd"](1073742336,$.a,$.a,[c.ec]),t["\u0275mpd"](1073742336,c.fc,c.fc,[c.ec]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_d"],r["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,_.k,function(){return[[{path:"",component:N,children:[{path:":schoolSlug",loadChildren:q}]}]]},[])])})},Xkmw:function(n,l,e){"use strict";e.d(l,"a",function(){return t});const t={homePage:{title:"Inicio | AmbLeMa",metatags:[{name:"description",content:"AmbLeMa es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educaci\xf3n de calidad en toda Venezuela con aportes de empresas y particulares que asumen una eficaz inversi\xf3n social."}]},aboutUsPage:{title:"Nosotros | AmbLeMa",metatags:[{name:"description",content:"Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores clave de gesti\xf3n docente con actividades diarias y actividades especiales, a lo largo del a\xf1o escolar."}]},sponsorsPage:{title:"Padrinos | AmbLeMa",metatags:[{name:"description",content:"El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela p\xfablica de su comunidad. Esta inversi\xf3n social rinde beneficios tangibles e intangibles como las mejoras en la calidad de su comunidad y a la vez el pa\xeds."}]},coordinatorsPage:{title:"Coordinadores | AmbLeMa",metatags:[{name:"description",content:"El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea aportar su valioso grano de arena para ayudar a implementar AmbLeMa en una escuela. \xbfEst\xe1s interesado en transformar tu comunidad?"}]},schoolsPage:{title:"Escuelas | AmbLeMa",metatags:[{name:"description",content:"Para formar parte de la red AmbLeMa de escuelas, la fundaci\xf3n AmbLeMa te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentaci\xf3n, para comenzar a aplicar la herramienta al inicio  del a\xf1o escolar."}]},blogPage:{title:"Blog | AmbLeMa",metatags:[{name:"description",content:"Conoce los detalles de todas nuestras actividades en Ambiente, Lectura y Matem\xe1tica a trav\xe9s de las noticias de nuestro blog."}]}}}}]);