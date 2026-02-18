(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-pages-previous-steps-previous-steps-module"],{

/***/ "9pWe":
/*!**********************************************************************!*\
  !*** ./src/app/web/pages/previous-steps/previous-steps.component.ts ***!
  \**********************************************************************/
/*! exports provided: PreviousStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepsComponent", function() { return PreviousStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_previous_steps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./previous-steps.component.html */ "c9Bu");
/* harmony import */ var _previous_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previous-steps.component.scss */ "R2sg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





let PreviousStepsComponent = class PreviousStepsComponent {
    constructor(document) {
        this.document = document;
        this.documentt = document;
    }
    ngOnInit() {
    }
};
PreviousStepsComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
PreviousStepsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-previous-steps',
        template: _raw_loader_previous_steps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_previous_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PreviousStepsComponent);



/***/ }),

/***/ "HGvj":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/layout/eheader/eheader.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-elearning d-flex flex-column\">\n  <div class=\"d-flex header-first-row flex-wrap pt-2\" [class.no-under]=\"(user_type$ | async) != '2'\">\n    <h2 class=\"main-name ml-3 mr-auto mb-0 font-weight-bold\">AmbLeMa</h2>\n\n    <div class=\"dropdown\">\n      <div class=\"avatar-container media p-3 d-flex align-items-center\" data-toggle=\"dropdown\">\n        <img [src]=\"\n            (userBrief$ | async).image\n              ? (userBrief$ | async).image\n              : '../../../../assets/images/profile2.png'\n          \" [alt]=\"(userBrief$ | async).name\" class=\"mr-2 rounded-circle\" />\n        <div class=\"media-body\">\n          <h4 class=\"mb-0 name font-weight-bold\" [innerHTML]=\"getUserOneOrTwoLines((userBrief$ | async).name)\"></h4>\n        </div>\n      </div>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a *ngIf=\"(user_type$ | async) !== '0' && (user_type$ | async) !== '1'\" class=\"dropdown-item\"\n          href=\"javascript:void(0)\" (click)=\"goToProfile()\">Perfil</a>\n        <a class=\"dropdown-item\" [routerLink]=\"['/auth/logout']\" [queryParams]=\"{ reload: 1 }\">Salir</a>\n      </div>\n    </div>\n  </div>\n\n  <p *ngIf=\"(user_type$ | async) == '2'\" class=\"user-info px-3\">\n    <span class=\"coins\">{{\n      (coins$ | async) == 1\n      ? (coins$ | async) + \" punto\"\n      : (coins$ | async) + \" puntos\"\n      }}</span>\n    &nbsp;|&nbsp;\n    <span class=\"aproved-modules\">{{\n      (approved_modules_total$ | async) == 1\n      ? (approved_modules_total$ | async) + \" módulo aprobado\"\n      : (approved_modules_total$ | async) + \" módulos aprobados\"\n      }}\n      de {{ modules_total$ | async }}</span>\n  </p>\n</div>");

/***/ }),

/***/ "INi5":
/*!*******************************************************************!*\
  !*** ./src/app/web/pages/previous-steps/previous-steps.module.ts ***!
  \*******************************************************************/
/*! exports provided: PreviousStepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepsModule", function() { return PreviousStepsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _previous_steps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previous-steps-routing.module */ "xm6E");
/* harmony import */ var _previous_steps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previous-steps.component */ "9pWe");
/* harmony import */ var _layout_eheader_eheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/eheader/eheader.component */ "SgBQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nguniversal/common */ "zlXd");








let PreviousStepsModule = class PreviousStepsModule {
};
PreviousStepsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _previous_steps_component__WEBPACK_IMPORTED_MODULE_4__["PreviousStepsComponent"],
            _layout_eheader_eheader_component__WEBPACK_IMPORTED_MODULE_5__["EheaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _previous_steps_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreviousStepsRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserTransferStateModule"],
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
        ]
    })
], PreviousStepsModule);



/***/ }),

/***/ "R2sg":
/*!************************************************************************!*\
  !*** ./src/app/web/pages/previous-steps/previous-steps.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1 {\n  font-size: x-large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h1 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h1 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h1 {\n    font-size: xx-large !important;\n  }\n}\nh3, h4 {\n  font-size: large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: xx-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n::ng-deep body {\n  background: #ebeff5;\n}\n.nb-theme-default * {\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3ByZXZpb3VzLXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3BsYWNlaG9sZGVycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQ3lCQTtFQUNFLDZCQUFBO0FEdEJGO0FFMkRRO0VEdENSO0lBR0ksNkJBQUE7RURwQkY7QUFDRjtBRXNEUTtFRHRDUjtJQU1JLDZCQUFBO0VEbEJGO0FBQ0Y7QUVpRFE7RUR0Q1I7SUFTSSw4QkFBQTtFRGhCRjtBQUNGO0FDa0JBO0VBQ0UsMkJBQUE7QURmRjtBRXdDUTtFRDFCUjtJQUdJLDZCQUFBO0VEYkY7QUFDRjtBRW1DUTtFRDFCUjtJQU1JLDhCQUFBO0VEWEY7QUFDRjtBRThCUTtFRDFCUjtJQVNJLDZCQUFBO0VEVEY7QUFDRjtBRXlCUTtFRDFCUjtJQVlJLDRCQUFBO0VEUEY7QUFDRjtBRW9CUTtFRDFCUjtJQWVJLDZCQUFBO0VETEY7QUFDRjtBRWVRO0VEUlI7SUFFSSwyQkFBQTtFREpGO0FBQ0Y7QUVTUTtFRFJSO0lBS0ksNkJBQUE7RURGRjtBQUNGO0FFSVE7RURSUjtJQVFJLDRCQUFBO0VEQUY7QUFDRjtBRURRO0VEUlI7SUFXSSw0QkFBQTtFREVGO0FBQ0Y7QUVOUTtFRFJSO0lBY0ksMkJBQUE7RURJRjtBQUNGO0FBcEZBO0VBQ0ksbUJBQUE7QUF1Rko7QUFyRkE7RUFDSSxvQ0FBQTtBQXdGSiIsImZpbGUiOiJwcmV2aW91cy1zdGVwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgJ3Njc3MvcGxhY2Vob2xkZXJzJztcblxuOjpuZy1kZWVwIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgZ3JheSk7XG59XG4ubmItdGhlbWUtZGVmYXVsdCAqIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLy9cbmgxe1xuICAgIEBleHRlbmQgJWgxO1xufVxuaDMsIGg0IHtcbiAgICBAZXh0ZW5kICVoMzQ7XG59XG5wLCBidXR0b24sIGEsIGxpLCBsYWJlbCB7XG4gICAgQGV4dGVuZCAlcDtcbn1cblxuQG1peGluIG9uLW1lc3NhZ2UgeyBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDo2NDBweCkgeyBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyBmbGV4LXdyYXA6IHdyYXA7IH1cbn1cblxuQG1peGluIGJ0bi1yaWdodGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICRjYW5jZWwtZ3JheTtcblxuICAgICAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG4gICAgICAgICAgICBcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLGxhbmRzY2FwZSx0cnVlLDY0MHB4KSB7IHdpZHRoOiBhdXRvOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyB3aWR0aDogYXV0bzsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1wYWQ7IFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtOyAgICAgICAgICAgICAgICAgXG4gICAgfSBcbn0iLCJAaW1wb3J0IFwiLi9yZXNwb25zaXZlXCI7XG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuJGNvbG9yX21hcDogKFxuICBibHVlOiAjMDA4MDlhLFxuICBzb2Z0LWdyZWVuLW9sZDogIzlhZDY0NCxcbiAgc29mdC1ncmVlbjogIzgxYjAzZSxcbiAgcHJvZ3Jlc3MtZ3JlZW46ICMzOGQ0ODUsXG4gIGRhcmstZ3JlZW46ICMwMDcyMmUsXG4gIGdyYXk6ICNlYmVmZjUsXG4gIGdyYXllcjogI2U2ZTdlOCxcbiAgdGFiLWdyYXk6ICNjY2NjY2MsXG4gIGZvcm0tZ3JheTogI2NlZDRkYSxcbiAgZGFyay1ncmF5OiAjOTA5MDkwLFxuICBkYXJraWUtZ3JheTogIzgyN2Y3ZixcbiAgZGFya2VzdC1ncmF5OiAjNjI2MjYyLFxuICByZWQ6ICNmNTMwMzAsXG4pO1xuXG4vLyB6LWluZGV4XG4kei1pbmRleC1oaWdoZXI6IDQ7XG5cbiVwYWRkaW5nLWNvbnRzIHtcbiAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLCBsYW5kc2NhcGUsIHRydWUsIDgwMHB4KSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcbiAgfVxufVxuXG4vLyBHZW5lcmFsc1xuJWgxIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG59XG4laDM0IHtcbiAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiVwIHtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWl4aW4gYnV0dG9uLXBhZCB7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgbWluLXdpZHRoOiAxMXJlbSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMC40NXJlbSAwLjg1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgbWluLXdpZHRoOiAxMnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtaXhpbiBzaGFyZWQtYnRuLWNvbmZzKCkge1xuICBtaW4td2lkdGg6IDhyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICYsXG4gICZbZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLmNhbmNlbC1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG5cbiAgICAmLmluYWN0aXZlLFxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogJGNhbmNlbC1ncmF5O1xuXG4gICAgICAmLmluYWN0aXZlLFxuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "SgBQ":
/*!*********************************************************!*\
  !*** ./src/app/web/layout/eheader/eheader.component.ts ***!
  \*********************************************************/
/*! exports provided: EheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EheaderComponent", function() { return EheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eheader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eheader.component.html */ "HGvj");
/* harmony import */ var _eheader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eheader.component.scss */ "cL87");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "e1JD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _store_states_e_learning_learning_modules_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/states/e-learning/learning-modules.state */ "F4f4");
/* harmony import */ var _store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/states/e-learning/user.state */ "HQy9");
/* harmony import */ var _store_actions_e_learning_learning_modules_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/e-learning/learning-modules.actions */ "sy2/");
/* harmony import */ var _store_actions_e_learning_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/actions/e-learning/user.actions */ "hcBw");
/* harmony import */ var _services_steps_modules_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/steps/modules.service */ "t0Vk");
/* harmony import */ var _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/steps/project.actions */ "/J+G");
/* harmony import */ var _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/steps/steps.service */ "OR82");













let EheaderComponent = class EheaderComponent {
    constructor(store, modulesService, route, stepsService, router) {
        this.store = store;
        this.modulesService = modulesService;
        this.route = route;
        this.stepsService = stepsService;
        this.router = router;
        this.user_email = "";
        this.user_name = "";
        this.user_id = "";
        this.user_type = "";
    }
    ngOnInit() {
        this.modulesService.updateCoorMod.subscribe((res) => {
            this.setUserValues(res); //! THIS IS TEMPORARY
        });
        //! ------------------------- THIS IS TEMPORARY -----------------------------------------------------------------------------------------------------
        // if (this.route.snapshot.params && this.route.snapshot.params.idUser) {
        //   this.setUserValues({
        //     type: 1,
        //     usu: this.route.snapshot.params.idUser,
        //     usut: (+this.route.snapshot.params.userType),
        //     project: this.route.snapshot.params.idProject
        //   });
        // }
        // else if (this.route.snapshot.children.length>0) {
        //   if (this.route.snapshot.children[this.route.snapshot.children.length-1].params &&
        //       this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser) {
        //         this.setUserValues({
        //           type: 1,
        //           usu: this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser,
        //           usut: (+this.route.snapshot.children[this.route.snapshot.children.length-1].params.userType),
        //           project: this.route.snapshot.children[this.route.snapshot.children.length-1].params.idProject
        //         });
        //   }
        // }
        //! -------------------------------------------------------------------------------------------------------------------------------------------------
        // this.setCoordinatorModulesValues({type:0,usu:null}); //! THIS IS TEMPORARY
        this.approved_modules$.subscribe((res) => {
            this.modulesService.approved_modules = res;
        });
        this.modules_$.subscribe((res) => {
            this.modulesService.all_modules = res;
        });
        this.userBrief$.subscribe((res) => {
            this.user_email = res.email;
            this.user_id = res.userId;
            this.user_name = res.name;
            this.user_type = res.userType;
        });
    }
    setUserValues(user) {
        //! THIS IS TEMPORARY
        // if (user.type==0) this.store.dispatch(new UpdateModulesTotal);
        // else if (user.type==1) this.store.dispatch(new UpdateUserInfo(user.usu,user.usut));
        // else {
        this.store.dispatch(new _store_actions_e_learning_learning_modules_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateModulesTotal"]());
        this.store.dispatch(new _store_actions_e_learning_user_actions__WEBPACK_IMPORTED_MODULE_9__["UpdateUserInfo"](user.usu, user.usut));
        this.store
            .dispatch(new _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateStepsProgress"](user.project))
            .subscribe((res) => {
            this.stepsService.enableTabMethod(true);
        });
        // }
        // this.store.dispatch(new UpdateModulesTotal).subscribe(() => console.log(this.store.snapshot()));
    }
    goToProfile() {
        this.router.navigate([
            "peca/perfil-usuario",
            {
                comesFromPreviousSteps: true,
            },
        ]);
    }
    getUserOneOrTwoLines(name) {
        const name_obj = [name].reduce((nameObj, name) => {
            name.split(" ").map((nameI, i, name_arr) => {
                const half = parseInt(`${name_arr.length / 2}`);
                if (i < half || half === 0)
                    nameObj["first"] = nameObj["first"]
                        ? `${nameObj["first"]} ${nameI}`
                        : nameI;
                else
                    nameObj["second"] = nameObj["second"]
                        ? `${nameObj["second"]} ${nameI}`
                        : nameI;
            });
            return nameObj;
        }, {});
        return name_obj.second
            ? `<span>${name_obj.first}</span><span>${name_obj.second}</span>`
            : `<span>${name_obj.first}</span>`;
    }
};
EheaderComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _services_steps_modules_service__WEBPACK_IMPORTED_MODULE_10__["ModulesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_12__["StepsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_learning_modules_state__WEBPACK_IMPORTED_MODULE_6__["ModulesState"].modules_total)
], EheaderComponent.prototype, "modules_total$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_learning_modules_state__WEBPACK_IMPORTED_MODULE_6__["ModulesState"].modules_array)
], EheaderComponent.prototype, "modules_$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].coins_total)
], EheaderComponent.prototype, "coins$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].coordinator_modules_total)
], EheaderComponent.prototype, "approved_modules_total$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].coordinator_modules)
], EheaderComponent.prototype, "approved_modules$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].user_brief)
], EheaderComponent.prototype, "userBrief$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].user_type)
], EheaderComponent.prototype, "user_type$", void 0);
EheaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-eheader",
        template: _raw_loader_eheader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eheader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EheaderComponent);



/***/ }),

/***/ "c9Bu":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/previous-steps/previous-steps.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-eheader></app-eheader>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "cL87":
/*!***********************************************************!*\
  !*** ./src/app/web/layout/eheader/eheader.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p {\n    font-size: large !important;\n  }\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.header-elearning {\n  position: sticky;\n  top: 0;\n  background: #00809a;\n  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15);\n  z-index: 4;\n  transition: all 0.5s;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning {\n    padding: 0.25rem 1rem 0.5rem;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .header-elearning {\n    padding: 0 2rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .header-elearning {\n    padding: 0 1rem 0 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .header-elearning {\n    padding: 0 1.5rem 0 2rem;\n  }\n}\n.header-elearning .no-under {\n  margin-bottom: 0.15rem;\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .header-elearning .no-under {\n    margin-bottom: 0.3rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .header-elearning .no-under {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  .header-elearning .no-under {\n    margin-bottom: 1.2rem;\n  }\n}\n.header-elearning .header-first-row {\n  align-items: center;\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .header-elearning .header-first-row {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .header-elearning .header-first-row {\n    align-items: flex-end;\n  }\n}\n.header-elearning .header-first-row .main-name {\n  color: #81b03e;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  cursor: default;\n  font-size: 1.35rem;\n  cursor: default;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning .header-first-row .main-name {\n    font-size: 1.6rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .header-elearning .header-first-row .main-name {\n    font-size: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    font-size: 1.65rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    font-size: 1.8rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    font-size: 2rem;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    padding-bottom: 1.35rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    padding-bottom: 1.45rem;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    padding-bottom: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .header-elearning .header-first-row .main-name {\n    padding-bottom: 1rem !important;\n  }\n}\n.header-elearning .header-first-row .dropdown .dropdown-menu.show {\n  border: none;\n  box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.1);\n  left: -0.25rem !important;\n}\n.header-elearning .header-first-row .dropdown .dropdown-menu .dropdown-item {\n  color: #00809a;\n}\n.header-elearning .header-first-row .dropdown .dropdown-menu .dropdown-item:active {\n  background-color: transparent;\n  color: #00809a;\n}\n.header-elearning .header-first-row .dropdown .dropdown-menu .dropdown-item:hover {\n  color: #81b03e;\n}\n.header-elearning .header-first-row .avatar-container {\n  cursor: pointer;\n}\n.header-elearning .header-first-row .avatar-container .rounded-circle {\n  width: 3rem !important;\n  height: 3rem !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning .header-first-row .avatar-container .rounded-circle {\n    width: 3rem !important;\n    height: 3rem !important;\n    margin-right: 1rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .rounded-circle {\n    width: 2.75rem !important;\n    height: 2.75rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .header-elearning .header-first-row .avatar-container .rounded-circle {\n    width: 3rem !important;\n    height: 3rem !important;\n    margin-right: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .rounded-circle {\n    width: 3.3rem !important;\n    height: 3.3rem !important;\n    margin-right: 0.85rem !important;\n  }\n}\n.header-elearning .header-first-row .avatar-container .name {\n  font-size: large !important;\n  width: auto;\n  color: #81b03e;\n  display: none;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning .header-first-row .avatar-container .name {\n    font-size: large !important;\n    line-height: 1.2;\n    display: inline-block;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .name {\n    display: inline-block;\n    line-height: 1.2;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .header-elearning .header-first-row .avatar-container .name {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .name {\n    font-size: 1.15rem !important;\n    line-height: 1.25rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .name {\n    font-size: 1.25rem !important;\n    line-height: 1;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .header-elearning .header-first-row .avatar-container .name {\n    font-size: 1.36rem !important;\n    line-height: 1 !important;\n  }\n}\n.header-elearning .header-first-row .avatar-container .name ::ng-deep span {\n  display: block;\n}\n.header-elearning .user-info {\n  color: #fff;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning .user-info {\n    text-align: right;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .header-elearning .user-info {\n    text-align: right;\n    margin-bottom: 1rem;\n  }\n}\n.header-elearning .user-info .coins img {\n  height: 1.2rem;\n  vertical-align: sub;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .header-elearning .user-info .coins img {\n    margin-bottom: 0.1rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .header-elearning .user-info .coins img {\n    margin-bottom: 0.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2VoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3BsYWNlaG9sZGVycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlZGhlYWRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FDK0RRO0VDUlI7SUFFSSwyQkFBQTtFRnBERjtBQUNGO0FDeURRO0VDUlI7SUFLSSw2QkFBQTtFRmxERjtBQUNGO0FDb0RRO0VDUlI7SUFRSSw0QkFBQTtFRmhERjtBQUNGO0FDK0NRO0VDUlI7SUFXSSw0QkFBQTtFRjlDRjtBQUNGO0FDMENRO0VDUlI7SUFjSSwyQkFBQTtFRjVDRjtBQUNGO0FEN0JBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNnQ0Y7QUQ5QkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDZ0RQO0FENUJBO0VBQ0UsY0FyQks7QUNvRFA7QUExQ0E7RUFFSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsVUVJYTtFRkhnQixvQkFBQTtBQThDakM7QUNZUTtFRGpFUjtJQVMwQyw0QkFBQTtFQWdEeEM7QUFDRjtBQ09RO0VEakVSO0lBVXVELGVBQUE7RUFvRHJEO0FBQ0Y7QUNFUTtFRGpFUjtJQVkyQyx3QkFBQTtFQXVEekM7QUFDRjtBQ0hRO0VEakVSO0lBYXdELHdCQUFBO0VBMkR0RDtBQUNGO0FBMURJO0VBQ0ksc0JBQUE7QUE0RFI7QUNYUTtFRGxESjtJQUV1RCxxQkFBQTtFQStEekQ7QUFDRjtBQ2hCUTtFRGxESjtJQUcyQyxxQkFBQTtFQW1FN0M7QUFDRjtBQ3JCUTtFRGxESjtJQUl3RCxxQkFBQTtFQXVFMUQ7QUFDRjtBQXRFSTtFQUNJLG1CQUFBO0FBd0VSO0FBckVZO0VBSlI7SUFLWSxxQkFBQTtFQXdFZDtBQUNGO0FDbENRO0VENUNKO0lBUXVELHFCQUFBO0VBMEV6RDtBQUNGO0FBekVRO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0VHV1Isa0JBQUE7RUFDQSxlQUFBO0FIaUVKO0FDOUNRO0VEbENBO0lHaUJrQyxpQkFBQTtFSG1FeEM7QUFDRjtBQ25EUTtFRGxDQTtJR2tCa0MsZUFBQTtFSHVFeEM7QUFDRjtBQ3hEUTtFRGxDQTtJR29Cb0Msa0JBQUE7RUgwRTFDO0FBQ0Y7QUM3RFE7RURsQ0E7SUdxQmdELGlCQUFBO0VIOEV0RDtBQUNGO0FDbEVRO0VEbENBO0lHc0JnRCxlQUFBO0VIa0Z0RDtBQUNGO0FDdkVRO0VEbENBO0lBT3VELHVCQUFBO0VBc0c3RDtBQUNGO0FDNUVRO0VEbENBO0lBUzJDLHVCQUFBO0VBeUdqRDtBQUNGO0FDakZRO0VEbENBO0lBV1Esa0NBQUE7RUE0R2Q7QUFDRjtBQ3RGUTtFRGxDQTtJQWNRLCtCQUFBO0VBOEdkO0FBQ0Y7QUd4RUk7RUFDSSxZQUFBO0VBRUEsOENBQUE7RUFDQSx5QkFBQTtBSDBFUjtBR3ZFSTtFQUNJLGNKdEdEO0FDK0tQO0FHdkVRO0VBQ0ksNkJBQUE7RUFDQSxjSjFHTDtBQ21MUDtBR3RFUTtFQUNJLGNKN0dKO0FDcUxSO0FBdEhRO0VBQ0ksZUFBQTtBQXdIWjtBQXRIWTtFRy9EUixzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBSHdMSjtBQ25IUTtFRFJJO0lHMURKLHNCQUFBO0lBQ0EsdUJBQUE7SUFFQSw2QkFBQTtFSHdMTjtBQUNGO0FDMUhRO0VEUkk7SUdwREoseUJBQUE7SUFDQSwwQkFBQTtFSDBMTjtBQUNGO0FDaElRO0VEUkk7SUcvQ0osc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdDQUFBO0VIMkxOO0FBQ0Y7QUN2SVE7RURSSTtJRzFDSix3QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0NBQUE7RUg2TE47QUFDRjtBQWxKWTtFR2xDUiwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjSnRDSTtFSXVDSixhQUFBO0FIdUxKO0FDcEpRO0VESkk7SUc3QjhCLDJCQUFBO0lBQTZCLGdCQUFBO0lBQWtCLHFCQUFBO0VIMkx2RjtBQUNGO0FDM0pRO0VESkk7SUc1QjBDLHFCQUFBO0lBQXVCLGdCQUFBO0VIZ00zRTtBQUNGO0FDaktRO0VESkk7SUczQjhCLDZCQUFBO0VIb014QztBQUNGO0FDdEtRO0VESkk7SUd6QitCLDZCQUFBO0lBQStCLG9CQUFBO0VId014RTtBQUNGO0FDNUtRO0VESkk7SUd4QjRDLDZCQUFBO0lBQStCLGNBQUE7RUg2TXJGO0FBQ0Y7QUNsTFE7RURKSTtJR3RCSiw2QkFBQTtJQUNBLHlCQUFBO0VIZ05OO0FBQ0Y7QUF2TG9CO0VBQ0ksY0FBQTtBQXlMeEI7QUFsTEk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQW9MUjtBQ2hNUTtFRFNKO0lBSzBDLGlCQUFBO0VBc0w1QztBQUNGO0FDck1RO0VEU0o7SUFPUSxpQkFBQTtJQUNBLG1CQUFBO0VBeUxWO0FBQ0Y7QUF0TFk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUF3TGhCO0FDL01RO0VEcUJJO0lBRzBDLHFCQUFBO0VBMkxwRDtBQUNGO0FDcE5RO0VEcUJJO0lBSXdELHFCQUFBO0VBK0xsRTtBQUNGIiwiZmlsZSI6ImVoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3BsYWNlaG9sZGVycyc7XG5AaW1wb3J0ICdzY3NzL3NoYXJlZGhlYWRlcic7XG5cbi8vIGg0IHtcbi8vICAgICBAZXh0ZW5kICVoMzQ7XG4vLyB9XG5wIHtcbiAgICBAZXh0ZW5kICVwO1xufVxuXG4uaGVhZGVyLWVsZWFybmluZyB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgYm94LXNoYWRvdzowIDJweCA2cHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgei1pbmRleDogJHotaW5kZXgtaGlnaGVyOyBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXM7IHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgIFxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwscG9ydHJhaXQpIHsgcGFkZGluZzogMC4yNXJlbSAxcmVtIDAuNXJlbTsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLGxhbmRzY2FwZSx0cnVlLDgwMHB4KSB7IHBhZGRpbmc6IDAgMnJlbTsgfVxuICAgIC8vIGRlc2t0b3BcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyBwYWRkaW5nOiAwIDFyZW0gMCAxLjVyZW07IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxNjAwcHgpIHsgcGFkZGluZzogMCAxLjVyZW0gMCAycmVtOyB9XG5cbiAgICAubm8tdW5kZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjE1cmVtO1xuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKG1lZGl1bSxsYW5kc2NhcGUsdHJ1ZSw4MDBweCkgeyBtYXJnaW4tYm90dG9tOiAwLjNyZW07IH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLGxhbmRzY2FwZSx0cnVlLDE2ODBweCkgeyBtYXJnaW4tYm90dG9tOiAxLjJyZW07IH1cbiAgICB9XG4gICAgLmhlYWRlci1maXJzdC1yb3cge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sbGFuZHNjYXBlLHRydWUsODAwcHgpIHsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG5cbiAgICAgICAgLm1haW4tbmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBzb2Z0LWdyZWVuKTtcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBpbmNsdWRlIHNoYXJlZC1tYWluLW5hbWUoKTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sbGFuZHNjYXBlLHRydWUsODAwcHgpIHsgcGFkZGluZy1ib3R0b206IDEuMzVyZW07IH1cbiAgICAgICAgICAgIC8vIGRlc2t0b3AgXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyBwYWRkaW5nLWJvdHRvbTogMS40NXJlbTsgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlKSB7IFxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxNjAwcHgpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kcm9wZG93biB7XG4gICAgICAgICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2hhcmVkLWRyb3Bkb3duLW1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIC5yb3VuZGVkLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2hhcmVkLXVzZXItaW1hZ2UtY29uZnMoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAvLyB3b3JkLXNwYWNpbmc6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNoYXJlZC11c2VyLW5hbWUtY29uZnMoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICAgICAgXG4gICAgXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLHBvcnRyYWl0KSB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsbGFuZHNjYXBlLHRydWUsNjQwcHgpIHsgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29pbnMge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwscG9ydHJhaXQpIHsgbWFyZ2luLWJvdHRvbTogMC4xcmVtOyB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlLHRydWUsMTkwMHB4KSB7IG1hcmdpbi1ib3R0b206IDAuMXJlbTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcIi4vcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5cbiRjb2xvcl9tYXA6IChcbiAgYmx1ZTogIzAwODA5YSxcbiAgc29mdC1ncmVlbi1vbGQ6ICM5YWQ2NDQsXG4gIHNvZnQtZ3JlZW46ICM4MWIwM2UsXG4gIHByb2dyZXNzLWdyZWVuOiAjMzhkNDg1LFxuICBkYXJrLWdyZWVuOiAjMDA3MjJlLFxuICBncmF5OiAjZWJlZmY1LFxuICBncmF5ZXI6ICNlNmU3ZTgsXG4gIHRhYi1ncmF5OiAjY2NjY2NjLFxuICBmb3JtLWdyYXk6ICNjZWQ0ZGEsXG4gIGRhcmstZ3JheTogIzkwOTA5MCxcbiAgZGFya2llLWdyYXk6ICM4MjdmN2YsXG4gIGRhcmtlc3QtZ3JheTogIzYyNjI2MixcbiAgcmVkOiAjZjUzMDMwLFxuKTtcblxuLy8gei1pbmRleFxuJHotaW5kZXgtaGlnaGVyOiA0O1xuXG4lcGFkZGluZy1jb250cyB7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKG1lZGl1bSwgbGFuZHNjYXBlLCB0cnVlLCA4MDBweCkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG4gIH1cbn1cblxuLy8gR2VuZXJhbHNcbiVoMSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS42NXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxufVxuJWgzNCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4lcCB7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxufVxuQG1peGluIGJ1dHRvbi1wYWQge1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMHJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIG1pbi13aWR0aDogMTFyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC44NXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIG1pbi13aWR0aDogMTJyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWl4aW4gc2hhcmVkLWJ0bi1jb25mcygpIHtcbiAgbWluLXdpZHRoOiA4cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmLFxuICAmW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5jYW5jZWwtYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAmOmZvY3VzLFxuICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuXG4gICAgJi5pbmFjdGl2ZSxcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6ICRjYW5jZWwtZ3JheTtcblxuICAgICAgJi5pbmFjdGl2ZSxcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vcmVzcG9uc2l2ZSc7XG5AaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBzaGFyZWQtdXNlci1pbWFnZS1jb25mcygpIHtcbiAgICB3aWR0aDogM3JlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCxwb3J0cmFpdCkgeyBcbiAgICAgICAgd2lkdGg6IDNyZW0gIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC0wLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLGxhbmRzY2FwZSx0cnVlLDY0MHB4KSB7IFxuICAgICAgICB3aWR0aDogMi43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDIuNzVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTAuMjVyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgXG4gICAgICAgIHdpZHRoOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlKSB7IFxuICAgICAgICB3aWR0aDogMy4zcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMy4zcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC44NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAwcmVtO1xuICAgIH1cbiAgICAvLyBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxOTAwcHgpIHsgXG4gICAgLy8gICAgIHdpZHRoOiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgLy8gICAgIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xuICAgIC8vIH1cbn1cblxuQG1peGluIHNoYXJlZC11c2VyLW5hbWUtY29uZnMoKSB7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgZGlzcGxheTogbm9uZTsgICAgXG5cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLHBvcnRyYWl0KSB7IGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDsgbGluZS1oZWlnaHQ6IDEuMjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCxsYW5kc2NhcGUsdHJ1ZSw2NDBweCkgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGxpbmUtaGVpZ2h0OiAxLjI7IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLHBvcnRyYWl0KSB7IGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50OyB9XG4gICAgLy8gRGVza3RvcFxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7IGZvbnQtc2l6ZTogMS4xNXJlbSAhaW1wb3J0YW50OyBsaW5lLWhlaWdodDogMS4yNXJlbTsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLGxhbmRzY2FwZSx0cnVlLDE2MDBweCkgeyBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDsgbGluZS1oZWlnaHQ6IDE7IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxOTAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjM2cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhcmVkLW1haW4tbmFtZSgpIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCxwb3J0cmFpdCkgeyBmb250LXNpemU6IDEuNnJlbTsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgZm9udC1zaXplOiAycmVtOyB9XG4gICAgLy8gZGVza3RvcCBcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUpIHsgZm9udC1zaXplOiAxLjY1cmVtOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlLHRydWUsMTYwMHB4KSB7IGZvbnQtc2l6ZTogMS44cmVtOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlLHRydWUsMTkwMHB4KSB7IGZvbnQtc2l6ZTogMnJlbTsgfVxufVxuXG5AbWl4aW4gbGF5b3V0LWhlYWRlci1idG4tY29uZnMoKSB7XG4gICAgbWluLXdpZHRoOiA4cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41OyAgICBcbiAgICBcbiAgICAmLCAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgICB9XG5cbiAgICAmOmZvY3VzLCAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAkYmx1ZTtcblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhcmVkLWRyb3Bkb3duLW1lbnUoKSB7XG4gICAgJi5zaG93IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggOHB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIGxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBjb2xvcjogJGJsdWU7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "xm6E":
/*!***************************************************************************!*\
  !*** ./src/app/web/pages/previous-steps/previous-steps-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PreviousStepsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepsRoutingModule", function() { return PreviousStepsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _previous_steps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previous-steps.component */ "9pWe");




const routes = [
    {
        path: '',
        component: _previous_steps_component__WEBPACK_IMPORTED_MODULE_3__["PreviousStepsComponent"],
        children: [
            // Steps view
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | steps-steps-module */ "steps-steps-module").then(__webpack_require__.bind(null, /*! ./steps/steps.module */ "Eqvy")).then(m => m.StepsModule),
            },
            // modules list view
            {
                path: 'modules',
                loadChildren: () => Promise.all(/*! import() | e-learning-modules-list-modules-list-module */[__webpack_require__.e("default~e-learning-modules-list-modules-list-module~web-web-module"), __webpack_require__.e("e-learning-modules-list-modules-list-module")]).then(__webpack_require__.bind(null, /*! ./e-learning/modules-list/modules-list.module */ "XQDL")).then(m => m.ModulesListModule),
            },
            // module detail view
            {
                path: 'module-detail/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | e-learning-module-detail-module-detail-module */ "e-learning-module-detail-module-detail-module").then(__webpack_require__.bind(null, /*! ./e-learning/module-detail/module-detail.module */ "+Sj3")).then(m => m.ModuleDetailModule),
            }
        ]
    }
];
let PreviousStepsRoutingModule = class PreviousStepsRoutingModule {
};
PreviousStepsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PreviousStepsRoutingModule);



/***/ }),

/***/ "zlXd":
/*!*************************************************************!*\
  !*** ./node_modules/@nguniversal/common/fesm2015/common.js ***!
  \*************************************************************/
/*! exports provided: StateTransferInitializerModule, TransferHttpCacheModule, ɵTransferHttpCacheInterceptor, ɵnguniversal_modules_common_common_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTransferInitializerModule", function() { return StateTransferInitializerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferHttpCacheModule", function() { return TransferHttpCacheModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTransferHttpCacheInterceptor", function() { return TransferHttpCacheInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵnguniversal_modules_common_common_a", function() { return domContentLoadedFactory; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







/**
 * @fileoverview added by tsickle
 * Generated from: modules/common/src/transfer_http.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TransferHttpResponse() { }
if (false) {}
/**
 * @param {?} headers
 * @return {?}
 */
function getHeadersMap(headers) {
    /** @type {?} */
    const headersMap = {};
    for (const key of headers.keys()) {
        headersMap[key] = headers.getAll(key);
    }
    return headersMap;
}
class TransferHttpCacheInterceptor {
    /**
     * @param {?} appRef
     * @param {?} transferState
     */
    constructor(appRef, transferState) {
        this.transferState = transferState;
        this.isCacheActive = true;
        // Stop using the cache if the application has stabilized, indicating initial rendering is
        // complete.
        // tslint:disable-next-line: no-floating-promises
        appRef.isStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} isStable
         * @return {?}
         */
        (isStable) => isStable)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise()
            .then((/**
         * @return {?}
         */
        () => { this.isCacheActive = false; }));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    invalidateCacheEntry(url) {
        Object.keys(this.transferState['store'])
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => key.includes(url) ? this.transferState.remove(Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(key)) : null));
    }
    /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    makeCacheKey(method, url, params) {
        // make the params encoded same as a url so it's easy to identify
        /** @type {?} */
        const encodedParams = params.keys().sort().map((/**
         * @param {?} k
         * @return {?}
         */
        k => `${k}=${params.get(k)}`)).join('&');
        /** @type {?} */
        const key = (method === 'GET' ? 'G.' : 'H.') + url + '?' + encodedParams;
        return Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(key);
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        // Stop using the cache if there is a mutating call.
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            this.isCacheActive = false;
            this.invalidateCacheEntry(req.url);
        }
        if (!this.isCacheActive) {
            // Cache is no longer active. Pass the request through.
            return next.handle(req);
        }
        /** @type {?} */
        const storeKey = this.makeCacheKey(req.method, req.url, req.params);
        if (this.transferState.hasKey(storeKey)) {
            // Request found in cache. Respond using it.
            /** @type {?} */
            const response = this.transferState.get(storeKey, (/** @type {?} */ ({})));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                body: response.body,
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](response.headers),
                status: response.status,
                statusText: response.statusText,
                url: response.url,
            }));
        }
        else {
            // Request not found in cache. Make the request and cache it.
            /** @type {?} */
            const httpEvent = next.handle(req);
            return httpEvent
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    this.transferState.set(storeKey, {
                        body: event.body,
                        headers: getHeadersMap(event.headers),
                        status: event.status,
                        statusText: event.statusText,
                        url: event.url || '',
                    });
                }
            })));
        }
    }
}
TransferHttpCacheInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
TransferHttpCacheInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"] }
];
if (false) {}
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
class TransferHttpCacheModule {
}
TransferHttpCacheModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"]],
                providers: [
                    TransferHttpCacheInterceptor,
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useExisting: TransferHttpCacheInterceptor, multi: true },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: modules/common/src/state-transfer-initializer/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} doc
 * @return {?}
 */
function domContentLoadedFactory(doc) {
    return (/**
     * @return {?}
     */
    () => new Promise((/**
     * @param {?} resolve
     * @param {?} _reject
     * @return {?}
     */
    (resolve, _reject) => {
        /** @type {?} */
        const contentLoaded = (/**
         * @return {?}
         */
        () => {
            doc.removeEventListener('DOMContentLoaded', contentLoaded);
            resolve();
        });
        if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
            resolve();
        }
        else {
            doc.addEventListener('DOMContentLoaded', contentLoaded);
        }
    })));
}
class StateTransferInitializerModule {
}
StateTransferInitializerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], multi: true, useFactory: domContentLoadedFactory, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]] },
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: modules/common/private_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modules/common/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modules/common/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=common.js.map


/***/ })

}]);
//# sourceMappingURL=web-pages-previous-steps-previous-steps-module-es2015.js.map