(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "RUPo":
/*!***********************************************!*\
  !*** ./src/app/services/web/chart.service.ts ***!
  \***********************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const chartDefaultProps = {
    props: {
        colors: ["#81B03E", "#FFF", "#163b47"],
    },
    markers: {
        show: true,
        color: "#81B03E",
    },
    xaxis: {},
    yaxis: {
        labels: false,
        edgeSpace: 0,
    },
    grid: {},
    asymptoteDefaultProps: {
        axis: "y",
        color: "#FFF",
    },
};
let ChartService = class ChartService {
    constructor() { }
    formatChartDataToDrawComponent(chartData) {
        return chartData.map((chart) => {
            const asymptoteProps = chartDefaultProps.asymptoteDefaultProps;
            const asymptotes = chart.goals.map((goal) => {
                return Object.assign(Object.assign({}, asymptoteProps), { value: goal.value, title: goal.label });
            });
            return Object.assign(Object.assign(Object.assign({}, chart), chartDefaultProps), { asymptotes });
        });
    }
};
ChartService.ctorParameters = () => [];
ChartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ChartService);



/***/ }),

/***/ "TdEa":
/*!************************************************************!*\
  !*** ./src/app/services/web/static-web-content.service.ts ***!
  \************************************************************/
/*! exports provided: StaticWebContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticWebContentService", function() { return StaticWebContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let StaticWebContentService = class StaticWebContentService {
    constructor() { }
    setWebContent(content) {
        this.webContent = content;
    }
    getWebContent() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.webContent);
    }
    getWebContentByParam(param, paramValue) {
        let content;
        content = this.webContent.filter((item) => item[param] === paramValue)[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(content);
    }
};
StaticWebContentService.ctorParameters = () => [];
StaticWebContentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], StaticWebContentService);



/***/ }),

/***/ "VQPA":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



let ModalService = class ModalService {
    constructor(service) {
        this.service = service;
        this.defaultOptions = {
            ariaLabelledBy: 'modal-basic-title',
            backdropClass: 'transparent-backdrop',
            centered: true,
            size: 'lg',
            windowClass: 'amblema-theme',
        };
    }
    openModal(content) {
        return this.service.open(content, this.defaultOptions);
    }
    openStaticModal(modalRef) {
        modalRef.nativeElement.classList.remove('z-hidden');
    }
    closeStaticModal(modalRef) {
        modalRef.nativeElement.classList.add('z-hidden');
    }
};
ModalService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ "Xkmw":
/*!*******************************************!*\
  !*** ./src/app/web/web-pages-metadata.ts ***!
  \*******************************************/
/*! exports provided: METADATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA", function() { return METADATA; });
const METADATA = {
    homePage: {
        title: "Inicio | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "AmbLeMa es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad en toda Venezuela con aportes de empresas y particulares que asumen una eficaz inversión social.",
            },
        ],
    },
    aboutUsPage: {
        title: "Nosotros | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores clave de gestión docente con actividades diarias y actividades especiales, a lo largo del año escolar.",
            },
        ],
    },
    sponsorsPage: {
        title: "Padrinos | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles como las mejoras en la calidad de su comunidad y a la vez el país.",
            },
        ],
    },
    coordinatorsPage: {
        title: "Coordinadores | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea aportar su valioso grano de arena para ayudar a implementar AmbLeMa en una escuela. ¿Estás interesado en transformar tu comunidad?",
            },
        ],
    },
    schoolsPage: {
        title: "Escuelas | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "Para formar parte de la red AmbLeMa de escuelas, la fundación AmbLeMa te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio  del año escolar.",
            },
        ],
    },
    blogPage: {
        title: "Blog | AmbLeMa",
        metatags: [
            {
                name: "description",
                content: "Conoce los detalles de todas nuestras actividades en Ambiente, Lectura y Matemática a través de las noticias de nuestro blog.",
            },
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map