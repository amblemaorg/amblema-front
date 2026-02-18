(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "+X1z":
/*!*******************************************************!*\
  !*** ./src/app/web/pages/home/home-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "NXFh");




const routes = [
    {
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "4m3S":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<web-cover\n  [overlayImage]=\"coverData.overlayImage\"\n  [slides]=\"coverData.slider\"\n  *ngIf=\"coverData.slider\"\n>\n</web-cover>\n<section class=\"about-us\">\n  <div #leaf class=\"background-leaf growth-animation animation-init\"></div>\n  <h1 class=\"heading\">Acerca de nosotros</h1>\n  <div class=\"text\">\n    <p *ngIf=\"homePageData.aboutUsText\">{{ homePageData.aboutUsText }}</p>\n  </div>\n</section>\n<section class=\"pillars\">\n  <ng-template #pillarModal let-modal>\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <h3>{{ selectedPillar.title }}</h3>\n      <p>{{ selectedPillar.description }}</p>\n    </div>\n  </ng-template>\n\n  <web-bg-heading>Tenemos Tres <br />Pilares Fundamentales</web-bg-heading>\n  <div #pillarsList class=\"pillars-wrapper fade-in-animation animation-init\">\n    <div class=\"pillars-list\">\n      <div class=\"pillar ambiente\" (click)=\"openModal('environment', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"environment-icon\"\n          [svgStyle]=\"{ 'height.vw': 12, 'width.vw': 12 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Amb</span>iente</h3>\n      </div>\n      <div class=\"pillar lectura\" (click)=\"openModal('reading', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"reading-icon\"\n          [svgStyle]=\"{ 'height.vw': 12, 'width.vw': 12 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Le</span>ctura</h3>\n      </div>\n      <div class=\"pillar matematica\" (click)=\"openModal('math', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"math-icon\"\n          [svgStyle]=\"{ 'height.vw': 12, 'width.vw': 12 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Ma</span>temática</h3>\n      </div>\n    </div>\n\n    <owl-carousel\n      #pillarsCarousel\n      class=\"pillars-carousel-home\"\n      [options]=\"pillarsOptions\"\n      [carouselClasses]=\"['']\"\n    >\n      <div class=\"pillar ambiente\" (click)=\"openModal('environment', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"environment-icon\"\n          [svgStyle]=\"{ 'height.vw': 50, 'width.vw': 50 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Amb</span>iente</h3>\n      </div>\n      <div class=\"pillar lectura\" (click)=\"openModal('reading', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"reading-icon\"\n          [svgStyle]=\"{ 'height.vw': 50, 'width.vw': 50 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Le</span>ctura</h3>\n      </div>\n      <div class=\"pillar matematica\" (click)=\"openModal('math', pillarModal)\">\n        <svg-icon\n          class=\"amblema-icon\"\n          name=\"math-icon\"\n          [svgStyle]=\"{ 'height.vw': 50, 'width.vw': 50 }\"\n        ></svg-icon>\n        <h3><span class=\"bold\">Ma</span>temática</h3>\n      </div>\n    </owl-carousel>\n  </div>\n</section>\n<section class=\"social-impact\">\n  <div class=\"heading-wrapper\">\n    <h2 class=\"heading\">Indicadores Clave</h2>\n    <div #statistics class=\"statistics\">\n      <div class=\"statistic statistic-schools\" *ngIf=\"homePageData.statistics.totalSchools\">\n        <span\n          class=\"statistic-count\"\n          counto\n          [step]=\"1\"\n          [countTo]=\"homePageData.statistics.totalSchools\"\n          [countFrom]=\"0\"\n          [duration]=\"0.5\"\n          (countoChange)=\"this.finalStatistics.totalSchools = $event\"\n        >\n          {{ commaRemover(this.finalStatistics.totalSchools | number: \"1.0-0\") }}\n        </span>\n        <span class=\"statistic-label\">Escuelas</span>\n      </div>\n      <div class=\"statistic statistic-teachers\" *ngIf=\"homePageData.statistics.totalTeachers\">\n        <span\n          class=\"statistic-count\"\n          counto\n          [step]=\"1\"\n          [countTo]=\"homePageData.statistics.totalTeachers\"\n          [countFrom]=\"0\"\n          [duration]=\"0.5\"\n          (countoChange)=\"this.finalStatistics.totalTeachers = $event\"\n        >\n          {{ commaRemover(this.finalStatistics.totalTeachers | number: \"1.0-0\") }}\n        </span>\n        <span class=\"statistic-label\">Docentes</span>\n      </div>\n      <div class=\"statistic statistic-children\" *ngIf=\"homePageData.statistics.totalStudents\">\n        <span\n          class=\"statistic-count\"\n          counto\n          [step]=\"1\"\n          [countTo]=\"homePageData.statistics.totalStudents\"\n          [countFrom]=\"0\"\n          [duration]=\"0.5\"\n          (countoChange)=\"this.finalStatistics.totalStudents = $event\"\n        >\n          {{ commaRemover(this.finalStatistics.totalStudents | number: \"1.0-0\") }}\n        </span>\n        <span class=\"statistic-label\">Estudiantes</span>\n      </div>\n      <div class=\"statistic statistic-sponsors\" *ngIf=\"homePageData.statistics.totalSponsors\">\n        <span\n          class=\"statistic-count\"\n          counto\n          [step]=\"1\"\n          [countTo]=\"homePageData.statistics.totalSponsors\"\n          [countFrom]=\"0\"\n          [duration]=\"0.5\"\n          (countoChange)=\"this.finalStatistics.totalSponsors = $event\"\n        >\n          {{ commaRemover(this.finalStatistics.totalSponsors | number: \"1.0-0\") }}\n        </span>\n        <span class=\"statistic-label\">Padrinos</span>\n      </div>\n      <div\n        class=\"statistic statistic-coordinators\"\n        *ngIf=\"homePageData.statistics.totalCoordinators\"\n      >\n        <span\n          class=\"statistic-count\"\n          counto\n          [step]=\"1\"\n          [countTo]=\"homePageData.statistics.totalCoordinators\"\n          [countFrom]=\"0\"\n          [duration]=\"0.5\"\n          (countoChange)=\"this.finalStatistics.totalCoordinators = $event\"\n        >\n          {{ commaRemover(this.finalStatistics.totalCoordinators | number: \"1.0-0\") }}\n        </span>\n        <span class=\"statistic-label\">Coordinadores</span>\n      </div>\n    </div>\n  </div>\n  <charts-switcher\n    [options]=\"chartSwitcherOptions\"\n    *ngIf=\"isBrowser && chartSwitcherOptions && chartSwitcherOptions.charts.length > 0\"\n  >\n  </charts-switcher>\n</section>\n<section class=\"founders\">\n  <div class=\"heading\">\n    <h2>Testimonio <br>de los <br>Fundadores</h2>\n    <!-- <p>Lorem ipsum dolor sit amet, consectetuer</p> -->\n  </div>\n  <div class=\"founders-list\">\n    <owl-carousel-o\n      *ngIf=\"homePageData.testimonials.length > 0\"\n      [options]=\"carouselOptions\"\n      class=\"founders-carousel\"\n    >\n      <ng-template carouselSlide *ngFor=\"let item of homePageData.testimonials\">\n        <web-testimonial-card [testimonial]=\"item\"></web-testimonial-card>\n      </ng-template>\n    </owl-carousel-o>\n  </div>\n</section>\n");

/***/ }),

/***/ "7++P":
/*!***********************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "8Y7J");
var counto_directive_1 = __webpack_require__(/*! ./counto.directive */ "UX1j");
var CountoModule = /** @class */ (function () {
    function CountoModule() {
    }
    CountoModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [counto_directive_1.CountoDirective],
                    exports: [counto_directive_1.CountoDirective]
                },] },
    ];
    /** @nocollapse */
    CountoModule.ctorParameters = function () { return []; };
    return CountoModule;
}());
exports.CountoModule = CountoModule;
//# sourceMappingURL=counto.module.js.map

/***/ }),

/***/ "JNK3":
/*!*******************************************************!*\
  !*** ./src/app/web/pages/home/home-static-content.ts ***!
  \*******************************************************/
/*! exports provided: HOME_CONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_CONTENT", function() { return HOME_CONTENT; });
const diagnosticText = {
    lecture: 'Medimos cada trimestre el número de palabras leídas por minuto (PPM). La gráfica muestra el porcentaje alcanzado de PPM frente a la meta del grado que sería el 100 %.',
    math: 'Medimos cada trimestre la cantidad de multiplicaciones de una cifra resueltas de forma correcta en 2 minutos (M2M). La gráfica muestra el porcentaje alcanzado de M2M frente a la meta del grado que sería el 100 %.',
    logicMath: 'Medimos cada trimestre la cantidad de problemas de razonamiento lógico-matemático, adecuados a cada nivel, resueltos de forma correcta en 60 minutos (60LM). La gráfica muestra el porcentaje alcanzado de 60LM frente a la meta del grado que sería el 100 %.',
};
const HOME_CONTENT = {
    homePage: {
        slider: [
            {
                image: './assets/images/banner-1.jpg',
                description: 'La misión de facilitar la calidad de vida',
            },
            {
                image: './assets/images/banner-2.jpg',
                description: 'La misión de facilitar la calidad de vida',
            },
        ],
        aboutUsText: 'Amblema es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad. Con aportes de empresas y particulares que asumen una eficaz inversión social.',
        environmentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.',
        readingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.',
        mathText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus',
        statistics: {
            totalSchools: 44,
            totalTeachers: 300,
            totalStudents: 1200,
            totalSponsors: 22,
            charts: [
                {
                    id: 'wordsPerMinIndex',
                    title: 'Diagnóstico de Lectura',
                    description: diagnosticText.lecture,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.8 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 1 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.8 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.6 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.4 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.6 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.5 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.4 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 1 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.6 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.6 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 1 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    id: 'multiplicationsPerMinIndex',
                    title: 'Diagnóstico de Multiplicación',
                    description: diagnosticText.math,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.2 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.3 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.35 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.25 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 0.5 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    id: 'operationsPerMinIndex',
                    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
                    description: diagnosticText.logicMath,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.3 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.3 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.2 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.35 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.5 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 0.25 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
            ],
        },
        testimonials: [
            {
                firstName: 'Oscar A.',
                lastName: 'Pietri Pacheco',
                image: './assets/images/profile-oscar.jpg',
                function: 'Presidente',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            },
            {
                firstName: 'Oscar A.',
                lastName: 'Pietri Pacheco',
                image: './assets/images/profile-oscar.jpg',
                function: 'Presidente',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            },
            {
                firstName: 'Oscar A.',
                lastName: 'Pietri Pacheco',
                image: './assets/images/profile-oscar.jpg',
                function: 'Presidente',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            },
            {
                firstName: 'Oscar A.',
                lastName: 'Pietri Pacheco',
                image: './assets/images/profile-oscar.jpg',
                function: 'Presidente',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            },
            {
                firstName: 'Oscar A.',
                lastName: 'Pietri Pacheco',
                image: './assets/images/profile-oscar.jpg',
                function: 'Presidente',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            },
        ],
    },
};


/***/ }),

/***/ "NXFh":
/*!**************************************************!*\
  !*** ./src/app/web/pages/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "4m3S");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "WGsg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_services_web_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web/chart.service */ "RUPo");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/modal.service */ "VQPA");
/* harmony import */ var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/web/static-web-content.service */ "TdEa");
/* harmony import */ var _home_static_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-static-content */ "JNK3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/web/api-web-content.service */ "nWHY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-svg-icon */ "tHmd");
/* harmony import */ var _web_pages_metadata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../web-pages-metadata */ "Xkmw");
/* harmony import */ var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/store/actions/web/web.actions */ "LMpb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngxs/store */ "e1JD");

















let HomeComponent = class HomeComponent {
    constructor(globalService, chartService, modalService, http, zone, iconService, store) {
        this.globalService = globalService;
        this.chartService = chartService;
        this.modalService = modalService;
        this.http = http;
        this.zone = zone;
        this.iconService = iconService;
        this.store = store;
        this.landscape = window.innerWidth > window.innerHeight;
        this.coverData = {
            overlayImage: "./assets/images/cover-simbolos.png",
            slider: [],
        };
        this.chartSwitcherOptions = {
            direction: "row",
            buttonsDescription: "Medimos el impacto de la aplicación de la Herramienta Educativa en cada escuela",
            charts: [],
        };
        this.pillarsOptions = {
            autoplay: false,
            items: 1,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: ["", ""],
            navSpeed: 1000,
        };
        this.carouselOptions = {
            autoplay: false,
            items: 3,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: ["", ""],
            navSpeed: 1000,
            responsive: {
                0: {
                    items: 2,
                },
                [767 * 1.3]: {
                    items: 3,
                },
            },
        };
        this.homePageData = {
            slider: [],
            aboutUsText: "",
            environmentText: "",
            readingText: "",
            mathText: "",
            statistics: {
                totalSchools: 0,
                totalTeachers: 0,
                totalStudents: 0,
                totalSponsors: 0,
                totalCoordinators: 0,
                charts: [],
            },
            testimonials: [],
        };
        this.selectedPillar = {};
        this.finalStatistics = {};
        this.HOME_PATH = "webcontent?page=homePage";
        this.globalService.setTitle(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_14__["METADATA"].homePage.title);
        this.globalService.setMetaTags(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_14__["METADATA"].homePage.metatags);
        this.iconService.loadSvg("../../../assets/icons/environment-icon.svg", "environment-icon");
        this.iconService.loadSvg("../../../assets/icons/reading-icon.svg", "reading-icon");
        this.iconService.loadSvg("../../../assets/icons/math-icon.svg", "math-icon");
    }
    ngOnInit() {
        this.isBrowser = this.globalService.isBrowser;
        //this.setStaticService();
        this.setApiService();
        this.getHomePageData();
        this.zone.runOutsideAngular(() => {
            this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(window, "scroll").subscribe((event) => {
                this.onScroll(event);
            });
        });
    }
    setStaticService() {
        this.homeService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_8__["StaticWebContentService"]();
        this.homeService.setWebContent(_home_static_content__WEBPACK_IMPORTED_MODULE_9__["HOME_CONTENT"]);
    }
    setApiService() {
        const service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_11__["ApiWebContentService"](this.http);
        service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].baseUrl);
        service.setResourcePath(this.HOME_PATH);
        this.homeService = service;
    }
    getHomePageData() {
        this.homeService.getWebContent().subscribe((data) => {
            data.homePage.statistics = {
                totalSchools: 0,
                totalTeachers: 0,
                totalStudents: 0,
                totalSponsors: 0,
                totalCoordinators: 0,
            };
            this.coverData.slider = data.homePage.slider.map((slide) => {
                return {
                    image: slide.image,
                    title: slide.description,
                };
            });
            this.finalStatistics = {
                totalSchools: String(data.homePage.nSchools),
                totalSponsors: String(data.homePage.nSponsors),
                totalStudents: String(data.homePage.nStudents),
                totalTeachers: String(data.homePage.nTeachers),
                totalCoordinators: String(data.homePage.nCoordinators),
            };
            let chartsData = _home_static_content__WEBPACK_IMPORTED_MODULE_9__["HOME_CONTENT"].homePage.statistics.charts;
            chartsData.map((chart) => {
                chart.data = data.homePage.diagnostics[chart.id].map((lapse) => {
                    if (lapse.value == 0)
                        lapse.value = 0.00;
                    return lapse;
                });
                chart.data.map((element) => {
                    element.value = element.value > 0 && element.value < 1 ? parseFloat((element.value * 100).toFixed(2)) : parseFloat(element.value.toFixed(2));
                });
                return chart.data;
            });
            this.homePageData = data.homePage;
            this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(chartsData);
            this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_15__["SetIsLoadingPage"](false)]);
        });
    }
    onScroll($event) {
        let scrollPosition = $event.srcElement.children[0].scrollTop;
        let leafPosition = this.leaf.nativeElement.offsetTop;
        let listElementPosition = this.pillarsList.nativeElement.offsetTop;
        let statisticsPosition = this.statistics.nativeElement.offsetTop;
        if (leafPosition / scrollPosition <= 1.5) {
            this.leaf.nativeElement.classList.remove("animation-init");
            this.leaf.nativeElement.classList.add("animation-finish");
        }
        if (listElementPosition / scrollPosition <= 1.5) {
            this.pillarsList.nativeElement.classList.add("animation-finish");
            this.pillarsList.nativeElement.classList.remove("animation-init");
        }
        if (statisticsPosition / scrollPosition <= 1.5) {
            if (this.scrollSubscription) {
                this.scrollSubscription.unsubscribe();
            }
            this.homePageData.statistics.totalSchools = this.finalStatistics.totalSchools;
            this.homePageData.statistics.totalSponsors = this.finalStatistics.totalSponsors;
            this.homePageData.statistics.totalStudents = this.finalStatistics.totalStudents;
            this.homePageData.statistics.totalTeachers = this.finalStatistics.totalTeachers;
            this.homePageData.statistics.totalCoordinators = this.finalStatistics.totalCoordinators;
        }
    }
    openModal(pillar, content) {
        this.selectedPillar = this.getPillar(pillar);
        this.modalService.openModal(content);
    }
    getPillar(pillarName) {
        switch (pillarName) {
            case "environment":
                return {
                    title: "Ambiente",
                    description: this.homePageData.environmentText,
                };
            case "math":
                return { title: "Matemática", description: this.homePageData.mathText };
            case "reading":
                return { title: "Lectura", description: this.homePageData.readingText };
            default:
                throw Error("Invalid pillar error");
        }
    }
    commaRemover(leNumero) {
        return `${leNumero}`.replace(/,/g, ".");
    }
    onResize() {
        if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
            this.pillarsCarousel.refresh();
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: src_app_services_web_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"] },
    { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: angular_svg_icon__WEBPACK_IMPORTED_MODULE_13__["SvgIconRegistryService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Store"] }
];
HomeComponent.propDecorators = {
    pillarsCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["pillarsCarousel", { static: true },] }],
    leaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["leaf", { static: true },] }],
    pillarsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["pillarsList", { static: true },] }],
    statistics: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["statistics", { static: true },] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:resize", [""],] }]
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "RNH4":
/*!***********************************************!*\
  !*** ./node_modules/angular2-counto/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var counto_directive_1 = __webpack_require__(/*! ./src/counto.directive */ "UX1j");
exports.CountoDirective = counto_directive_1.CountoDirective;
var counto_module_1 = __webpack_require__(/*! ./src/counto.module */ "7++P");
exports.CountoModule = counto_module_1.CountoModule;
exports.default = counto_module_1.CountoModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UX1j":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "8Y7J");
var CountoDirective = /** @class */ (function () {
    function CountoDirective() {
        this.countoChange = new core_1.EventEmitter();
        this.countoEnd = new core_1.EventEmitter();
    }
    Object.defineProperty(CountoDirective.prototype, "duration", {
        set: function (duration) {
            this._duration = parseFloat(duration);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countTo", {
        set: function (countTo) {
            this._countTo = parseFloat(countTo);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countFrom", {
        set: function (countFrom) {
            this._countFrom = parseFloat(countFrom);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "step", {
        set: function (step) {
            this._step = parseFloat(step);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    CountoDirective.prototype.run = function () {
        var _this = this;
        clearInterval(_this._timer);
        if (isNaN(_this._duration)) {
            return false;
        }
        if (isNaN(_this._step)) {
            return false;
        }
        if (isNaN(_this._countFrom)) {
            return false;
        }
        if (isNaN(_this._countTo)) {
            return false;
        }
        if (_this._step <= 0) {
            console.info('Step must be greater than 0.');
            return false;
        }
        if (_this._duration <= 0) {
            console.info('Duration must be greater than 0.');
            return false;
        }
        if (_this._step > _this._duration * 1000) {
            console.info('Step must be equal or smaller than duration.');
            return false;
        }
        var intermediate = _this._countFrom;
        var increment = Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step);
        _this.countoChange.emit(intermediate);
        _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
                if (intermediate <= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate -= increment;
                }
            }
            else {
                if (intermediate >= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate += increment;
                }
            }
        }, _this._step);
    };
    CountoDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[counto]'
                },] },
    ];
    /** @nocollapse */
    CountoDirective.ctorParameters = function () { return []; };
    CountoDirective.propDecorators = {
        "countoChange": [{ type: core_1.Output },],
        "countoEnd": [{ type: core_1.Output },],
        "duration": [{ type: core_1.Input },],
        "countTo": [{ type: core_1.Input },],
        "countFrom": [{ type: core_1.Input },],
        "step": [{ type: core_1.Input },],
    };
    return CountoDirective;
}());
exports.CountoDirective = CountoDirective;
//# sourceMappingURL=counto.directive.js.map

/***/ }),

/***/ "WGsg":
/*!****************************************************!*\
  !*** ./src/app/web/pages/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\nsection.about-us {\n  background-color: #00809a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20vw 15vw;\n  position: relative;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us {\n    flex-direction: row;\n    padding: 6vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us {\n    flex-direction: row;\n    padding: 3vw 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .growth-animation {\n    transition: 2s ease height !important;\n  }\n  section.about-us .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  section.about-us .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  section.about-us .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  section.about-us .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  section.about-us .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  section.about-us .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\nsection.about-us .background-leaf {\n  display: none;\n  position: absolute;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .background-leaf {\n    background-image: url('leaf.png');\n    background-repeat: no-repeat;\n    background-size: 24vw 29vw;\n    bottom: 0;\n    display: block;\n    height: 29vw;\n    left: 25vw;\n    width: 24vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .background-leaf {\n    background-image: url('leaf.png');\n    background-repeat: no-repeat;\n    background-size: 24vw 29vw;\n    bottom: 0;\n    display: block;\n    height: 29vw;\n    left: 25vw;\n    width: 24vw;\n  }\n}\nsection.about-us .heading {\n  color: #fff;\n  font-size: 9vw;\n  text-align: center;\n  line-height: 1.2;\n  margin-bottom: 10vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .heading {\n    font-size: 4vw;\n    margin-bottom: 0;\n    padding: 0 18% 0 9%;\n    text-align: left;\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .heading {\n    font-size: 4vw;\n    margin-bottom: 0;\n    padding: 0 18% 0 9%;\n    text-align: left;\n    width: 50%;\n  }\n}\nsection.about-us .text {\n  color: #fff;\n  font-size: 4vw;\n  text-align: center;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .text {\n    font-size: 1.8vw;\n    padding: 0 8% 0 0;\n    text-align: left;\n    width: 40%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .text {\n    font-size: 1.8vw;\n    padding: 0 8% 0 0;\n    text-align: left;\n    width: 40%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .text {\n    font-size: 1.2vw;\n  }\n}\nsection.about-us .text p {\n  margin: 0;\n}\n::ng-deep owl-carousel.pillars-carousel-home .owl-next {\n  right: -90vw !important;\n}\n::ng-deep .pillar:hover .amblema-icon svg .st0 {\n  fill: #81b03e;\n}\nsection.pillars {\n  background-color: #fff;\n  padding: 8vw 5vw 25vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars {\n    padding: 3vw 5vw 8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars {\n    padding: 3vw 5vw 8vw;\n  }\n}\nsection.pillars web-bg-heading {\n  display: block;\n  margin: 0 auto 20vw auto;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars web-bg-heading {\n    margin: 0 auto 5vw auto;\n    width: 70%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars web-bg-heading {\n    margin: 0 auto 5vw auto;\n    width: 70%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .growth-animation {\n    transition: 2s ease height !important;\n  }\n  section.pillars .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  section.pillars .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  section.pillars .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  section.pillars .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  section.pillars .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  section.pillars .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\nsection.pillars .pillars-list {\n  display: none;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillars-list {\n    display: flex;\n    justify-content: space-between;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillars-list {\n    display: flex;\n    justify-content: space-between;\n  }\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillars-carousel-home {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillars-carousel-home {\n    display: none;\n  }\n}\nsection.pillars .pillar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 70vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillar {\n    background-size: 11vw;\n    width: 25vw;\n    height: 18vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillar {\n    background-size: 11vw;\n    width: 25vw;\n    height: 18vw;\n  }\n}\nsection.pillars .pillar:hover {\n  cursor: pointer;\n}\nsection.pillars .pillar:hover h3 {\n  color: #81b03e;\n}\nsection.pillars .pillar h3 {\n  font-size: 10vw;\n  font-weight: normal;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillar h3 {\n    font-size: 3.2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillar h3 {\n    font-size: 3.2vw;\n  }\n}\nsection.social-impact {\n  background-color: #00809a;\n  color: #fff;\n  padding: 18vw 9vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact {\n    padding: 6vw 9vw 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact {\n    padding: 6vw 9vw 2vw;\n  }\n}\nsection.social-impact .heading-wrapper {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 2vw;\n  }\n}\nsection.social-impact .heading-wrapper .heading {\n  color: inherit;\n  text-align: center;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper .heading {\n    text-align: left;\n    width: 30%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper .heading {\n    text-align: left;\n    width: 30%;\n  }\n}\nsection.social-impact .heading-wrapper .statistics {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 5vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper .statistics {\n    margin: 0;\n    width: 70%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper .statistics {\n    margin: 0;\n    width: 70%;\n  }\n}\nsection.social-impact .heading-wrapper .statistics .statistic {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\nsection.social-impact .heading-wrapper .statistics .statistic:first-child {\n  margin-left: -1rem;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper .statistics .statistic:first-child {\n    margin-left: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper .statistics .statistic:first-child {\n    margin-left: 0;\n  }\n}\nsection.social-impact .heading-wrapper .statistics .statistic:not(:last-child) {\n  margin-right: 1rem;\n}\nsection.social-impact .heading-wrapper .statistics .statistic .statistic-count {\n  font-size: 6.5vw;\n  font-weight: bold;\n  line-height: 1;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper .statistics .statistic .statistic-count {\n    font-size: 4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper .statistics .statistic .statistic-count {\n    font-size: 4vw;\n  }\n}\nsection.social-impact .heading-wrapper .statistics .statistic .statistic-label {\n  font-size: 2.8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.social-impact .heading-wrapper .statistics .statistic .statistic-label {\n    font-size: 1.25vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.social-impact .heading-wrapper .statistics .statistic .statistic-label {\n    font-size: 1.25vw;\n  }\n}\nsection.founders {\n  background-color: #00809a;\n  background-image: url('background-trees-movil.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #fff;\n  min-height: 152vw;\n  overflow-x: hidden;\n  position: relative;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.founders {\n    background-image: url('background-trees.png');\n    min-height: 56vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.founders {\n    background-image: url('background-trees.png');\n    min-height: 56vw;\n  }\n}\nsection.founders .heading {\n  color: #fff;\n  position: absolute;\n  top: 40vw;\n  width: 60%;\n  left: 15vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.founders .heading {\n    bottom: 20vw;\n    left: 6vw;\n    top: unset;\n    width: 25vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.founders .heading {\n    bottom: 20vw;\n    left: 6vw;\n    top: unset;\n    width: 25vw;\n  }\n}\nsection.founders .heading h2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.founders .heading h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.founders .heading h2 {\n    font-size: 3.3vw;\n  }\n}\nsection.founders .heading p {\n  font-size: 4.5vw;\n  margin: 1.5vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.founders .heading p {\n    font-size: 1.8vw;\n    margin: 1vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.founders .heading p {\n    font-size: 1.8vw;\n    margin: 1vw 0;\n  }\n}\n::ng-deep owl-carousel-o.founders-carousel {\n  position: absolute;\n  bottom: 20vw;\n  display: block;\n  left: 12vw;\n  width: 180%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel-o.founders-carousel {\n    bottom: 10vw;\n    left: 35vw;\n    width: 65%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel-o.founders-carousel {\n    bottom: 10vw;\n    left: 35vw;\n    width: 65%;\n  }\n}\n::ng-deep owl-carousel-o.founders-carousel .owl-nav.disabled {\n  display: inline-block !important;\n}\n::ng-deep owl-carousel-o.founders-carousel web-testimonial-card .testimonial-card {\n  width: 85%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel-o.founders-carousel web-testimonial-card .testimonial-card {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel-o.founders-carousel web-testimonial-card .testimonial-card {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9lbGVtZW50cy9faGVhZGluZ3Muc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FESEE7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ01GO0FESkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDc0JQO0FERkE7RUFDRSxjQXJCSztBQzBCUDtBQ3ZCQTtFQUNFLGNGSks7RUVLTCxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FEMEJGO0FDdkJBO0VBQ0UsZ0JBQUE7QUQwQkY7QUVHSTtFRDlCSjtJQUlJLGdCQUFBO0VEMkJGO0FBQ0Y7QUVGSTtFRDlCSjtJQVFJLGdCQUFBO0VENEJGO0FBQ0Y7QUN6QkE7RUFDRSxjQUFBO0FENEJGO0FFWEk7RURsQko7SUFJSSxnQkFBQTtFRDZCRjtBQUNGO0FFaEJJO0VEbEJKO0lBUUksZ0JBQUE7RUQ4QkY7QUFDRjtBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7QUV6Qkk7RUROSjtJQUlJLGNBQUE7RUQrQkY7QUFDRjtBRTlCSTtFRE5KO0lBUUksY0FBQTtFRGdDRjtBQUNGO0FBdkVBO0VBQ0UseUJETEs7RUNNTCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JB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SUFDQSxXQUFBO0VBb0tKO0FBQ0Y7QUFsS0k7RUFDRSxjQUFBO0FBb0tOO0FFaGdCSTtFRjJWQTtJQUlJLGdCQUFBO0VBcUtOO0FBQ0Y7QUVyZ0JJO0VGMlZBO0lBUUksZ0JBQUE7RUFzS047QUFDRjtBQW5LSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQXFLTjtBRTlnQkk7RUZ1V0E7SUFLSSxnQkFBQTtJQUNBLGFBQUE7RUFzS047QUFDRjtBRXBoQkk7RUZ1V0E7SUFVSSxnQkFBQTtJQUNBLGFBQUE7RUF1S047QUFDRjtBQWhLSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtBQWtLTjtBRWxpQkk7RUYwWEE7SUFTSSxZQUFBO0lBQ0EsVUFBQTtJQUVBLFVBQUE7RUFrS047QUFDRjtBRXppQkk7RUYwWEE7SUFnQkksWUFBQTtJQUNBLFVBQUE7SUFFQSxVQUFBO0VBa0tOO0FBQ0Y7QUFoS007RUFDSSxnQ0FBQTtBQWtLVjtBQTlKUTtFQUVFLFVBQUE7QUErSlY7QUV0akJJO0VGcVpJO0lBS0ksVUFBQTtFQWdLVjtBQUNGO0FFM2pCSTtFRnFaSTtJQVNJLFVBQUE7RUFpS1Y7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwMDgwOWE7XG4kZ3JlZW46ICM4MWIwM2U7XG4kZGFyay1ncmVlbjogIzAwNzIyZTtcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzU1NTtcbiRkYXJrLWdyYXk6ICM5MDkwOTA7XG4kcmVkOiAjZjM1ZjVmO1xuJGNhbmNlbC1ncmF5OiAjOWZhOWJkO1xuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG5cbi5wcmltYXJ5LWNvbG9yIHtcbiAgY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcInNjc3MvcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcInNjc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwic2Nzcy9lbGVtZW50cy9oZWFkaW5nc1wiO1xuXG5zZWN0aW9uLmFib3V0LXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwdncgMTV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogNnZ3IDA7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogM3Z3IDA7XG4gIH1cblxuICBAaW1wb3J0IFwic2Nzcy9hbmltYXRpb25zXCI7XG4gIC5iYWNrZ3JvdW5kLWxlYWYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlYWYucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjR2dyAyOXZ3O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDI5dnc7XG4gICAgICBsZWZ0OiAyNXZ3O1xuICAgICAgd2lkdGg6IDI0dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVhZi5wbmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHZ3IDI5dnc7XG4gICAgICBib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMjl2dztcbiAgICAgIGxlZnQ6IDI1dnc7XG4gICAgICB3aWR0aDogMjR2dztcbiAgICB9XG4gIH1cblxuICAuaGVhZGluZyB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXNpemU6IDl2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZ3O1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAwIDE4JSAwIDklO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDAgMTglIDAgOSU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICBwYWRkaW5nOiAwIDglIDAgMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3aWR0aDogNDAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgcGFkZGluZzogMCA4JSAwIDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICBvd2wtY2Fyb3VzZWwge1xuICAgIC8vIFRocmVlIHBpbGxhcnMgb3dsIGNhcm91c2VsIGluIGhvbWUgcGFnZVxuICAgICYucGlsbGFycy1jYXJvdXNlbC1ob21lIHtcbiAgICAgIC5vd2wtbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAtOTB2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAucGlsbGFyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIC5hbWJsZW1hLWljb24ge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIC5zdDAge1xuICAgICAgICAgICAgZmlsbDogJGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uLnBpbGxhcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDh2dyA1dncgMjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBwYWRkaW5nOiAzdncgNXZ3IDh2dztcbiAgfVxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIHBhZGRpbmc6IDN2dyA1dncgOHZ3O1xuICB9XG5cbiAgd2ViLWJnLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDIwdncgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgbWFyZ2luOiAwIGF1dG8gNXZ3IGF1dG87XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBtYXJnaW46IDAgYXV0byA1dncgYXV0bztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG5cbiAgQGltcG9ydCBcInNjc3MvYW5pbWF0aW9uc1wiO1xuICAucGlsbGFycy1saXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuXG4gIC5waWxsYXJzLWNhcm91c2VsLWhvbWUge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAucGlsbGFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDExdnc7XG4gICAgICB3aWR0aDogMjV2dztcbiAgICAgIGhlaWdodDogMTh2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMXZ3O1xuICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICBoZWlnaHQ6IDE4dnc7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEwdnc7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjJ2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjJ2dztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc2VjdGlvbi5zb2NpYWwtaW1wYWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDE4dncgOXZ3IDA7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogNnZ3IDl2dyAydnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIHBhZGRpbmc6IDZ2dyA5dncgMnZ3O1xuICB9XG5cbiAgLmhlYWRpbmctd3JhcHBlciB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhdGlzdGljcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDV2dyAwO1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0aXN0aWMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGlzdGljLWNvdW50IHtcbiAgICAgICAgICAvLyBmb250LXNpemU6IDl2dztcbiAgICAgICAgICBmb250LXNpemU6IDYuNXZ3O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDZ2dztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDZ2dztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0aXN0aWMtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44dnc7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjV2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uLmZvdW5kZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC10cmVlcy1tb3ZpbC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDE1MnZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtdHJlZXMucG5nXCIpO1xuICAgIG1pbi1oZWlnaHQ6IDU2dnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC10cmVlcy5wbmdcIik7XG4gICAgbWluLWhlaWdodDogNTZ2dztcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdnc7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBsZWZ0OiAxNXZ3O1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBib3R0b206IDIwdnc7XG4gICAgICBsZWZ0OiA2dnc7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgICAgd2lkdGg6IDI1dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGJvdHRvbTogMjB2dztcbiAgICAgIGxlZnQ6IDZ2dztcbiAgICAgIHRvcDogdW5zZXQ7XG4gICAgICB3aWR0aDogMjV2dztcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDh2dztcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4zdnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4zdnc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgICAgbWFyZ2luOiAxLjV2dyAwO1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgbWFyZ2luOiAxdncgMDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgbWFyZ2luOiAxdncgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgb3dsLWNhcm91c2VsLW8ge1xuICAgICYuZm91bmRlcnMtY2Fyb3VzZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAyMHZ3O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsZWZ0OiAxMnZ3O1xuICAgICAgLy8gd2lkdGg6IDEzMCU7XG4gICAgICB3aWR0aDogMTgwJTtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGJvdHRvbTogMTB2dztcbiAgICAgICAgbGVmdDogMzV2dztcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgYm90dG9tOiAxMHZ3O1xuICAgICAgICBsZWZ0OiAzNXZ3O1xuICAgICAgICAvLyB3aWR0aDogODAlO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgfVxuXG4gICAgICAub3dsLW5hdi5kaXNhYmxlZCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIHdlYi10ZXN0aW1vbmlhbC1jYXJkIHtcbiAgICAgICAgLnRlc3RpbW9uaWFsLWNhcmQge1xuICAgICAgICAgIC8vIHdpZHRoOiA5MCU7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICRibHVlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDkuNXZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gIH1cbn1cblxuaDIge1xuICBmb250LXNpemU6IDh2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDMuM3Z3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDMuM3Z3O1xuICB9XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiA3dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEFuaW1hdGlvbnNcbi5ncm93dGgtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgaGVpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLWJvdHRvbS1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZSBib3R0b20gIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIGJvdHRvbTogLTEwMHZoICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1yaWdodC1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZSByaWdodCwgMnMgZWFzZSBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICByaWdodDogLTEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGUtbGVmdC1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgbGVmdCwgMnMgZWFzZSByaWdodCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgbGVmdDogLTEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMTAwdncgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLmZhZGUtaW4tYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2Ugb3BhY2l0eSAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmLmFuaW1hdGlvbi1maW5pc2gge1xuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "sVHQ":
/*!***********************************************!*\
  !*** ./src/app/web/pages/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "vYfc");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "KMir");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "+X1z");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "NXFh");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "bjCr");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_charts_switcher_charts_switcher_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/charts-switcher/charts-switcher.module */ "w52O");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-svg-icon */ "tHmd");











let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
            _shared_charts_switcher_charts_switcher_module__WEBPACK_IMPORTED_MODULE_8__["ChartsSwitcherModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_10__["AngularSvgIconModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"],
        ],
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map