(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coordinators-coordinators-module"], {
    /***/
    "6PfO":
    /*!******************************************************************!*\
      !*** ./src/app/web/pages/coordinators/coordinators.component.ts ***!
      \******************************************************************/

    /*! exports provided: CoordinatorsComponent */

    /***/
    function PfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoordinatorsComponent", function () {
        return CoordinatorsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_coordinators_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./coordinators.component.html */
      "S1EU");
      /* harmony import */


      var _coordinators_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./coordinators.component.scss */
      "cgi8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/web/api-web-content.service */
      "nWHY");
      /* harmony import */


      var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/web/static-web-content.service */
      "TdEa");
      /* harmony import */


      var _coordinators_static_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./coordinators-static-content */
      "v3/U");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _web_pages_metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../web-pages-metadata */
      "Xkmw");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/global.service */
      "4WDQ");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngxs/store */
      "e1JD");
      /* harmony import */


      var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/store/actions/web/web.actions */
      "LMpb");

      var CoordinatorsComponent = /*#__PURE__*/function () {
        function CoordinatorsComponent(http, globalService, zone, store) {
          _classCallCheck(this, CoordinatorsComponent);

          this.http = http;
          this.globalService = globalService;
          this.zone = zone;
          this.store = store;
          this.customOptions = {
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            nav: false,
            navSpeed: 3000,
            autoplayTimeout: 15000,
            responsive: {
              0: {
                items: 1
              }
            }
          };
          this.coverData = {
            options: {
              titleBold: true,
              coordinatorPage: true
            },
            slides: [],
            title: "¿Quién es el Coordinador AmbLeMa?",
            description: "El coordinador AmbLeMa es la persona encargada de colaborar para la aplicación del método AmbLeMa en una escuela de su comunidad. Es el puente entre la Fundación AmbLeMa, el Padrino y la Escuela. Su función es Hacer Que Suceda (HQS)"
          };
          this.coordinatorsPageData = {
            backgroundImage: "",
            testimonials: [],
            steps: []
          };
          this.stepsList1 = [];
          this.stepsList2 = [];
          this.SPONSOR_PATH = "webcontent?page=coordinatorPage";
          this.globalService.setTitle(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_10__["METADATA"].coordinatorsPage.title);
          this.globalService.setMetaTags(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_10__["METADATA"].coordinatorsPage.metatags);
        }

        _createClass(CoordinatorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.setStaticService();
            this.setApiService();
            this.getCoordinatorsData();
            this.zone.runOutsideAngular(function () {
              _this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, "scroll").subscribe(function (event) {
                _this.onScroll(event);
              });
            });
          }
        }, {
          key: "setStaticService",
          value: function setStaticService() {
            this.coordinatorService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_6__["StaticWebContentService"]();
            this.coordinatorService.setWebContent(_coordinators_static_content__WEBPACK_IMPORTED_MODULE_7__["COORDINATOR_CONTENT"]);
          }
        }, {
          key: "setApiService",
          value: function setApiService() {
            var service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__["ApiWebContentService"](this.http);
            service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl);
            service.setResourcePath(this.SPONSOR_PATH);
            this.coordinatorService = service;
          }
        }, {
          key: "getCoordinatorsData",
          value: function getCoordinatorsData() {
            var _this2 = this;

            this.coordinatorService.getWebContent().subscribe(function (data) {
              var stepsLength = data.coordinatorPage.steps.length;
              _this2.stepsList1 = data.coordinatorPage.steps.slice(0, (stepsLength + 1) / 2);
              _this2.stepsList2 = data.coordinatorPage.steps.slice((stepsLength + 1) / 2, stepsLength);
              _this2.coordinatorsPageData = data.coordinatorPage;

              _this2.coverData.slides.push({
                image: _this2.coordinatorsPageData.backgroundImage,
                title: _this2.coverData.title,
                description: _this2.coverData.description
              });

              _this2.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_13__["SetIsLoadingPage"](false)]);
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll($event) {
            var scrollPosition = $event.srcElement.children[0].scrollTop;
            var listElementPosition = this.stepsList.nativeElement.offsetTop;

            if (listElementPosition / scrollPosition <= 2) {
              if (this.scrollSubscription) {
                this.scrollSubscription.unsubscribe();
              }

              this.stepsList.nativeElement.classList.add("animation-finish");
              this.stepsList.nativeElement.classList.remove("animation-init");
            }
          }
        }]);

        return CoordinatorsComponent;
      }();

      CoordinatorsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_12__["Store"]
        }];
      };

      CoordinatorsComponent.propDecorators = {
        stepsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["stepsList", {
            "static": true
          }]
        }]
      };
      CoordinatorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-coordinators",
        template: _raw_loader_coordinators_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coordinators_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CoordinatorsComponent);
      /***/
    },

    /***/
    "EC3N":
    /*!***************************************************************!*\
      !*** ./src/app/web/pages/coordinators/coordinators.module.ts ***!
      \***************************************************************/

    /*! exports provided: CoordinatorsModule */

    /***/
    function EC3N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoordinatorsModule", function () {
        return CoordinatorsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "vYfc");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "KMir");
      /* harmony import */


      var _coordinators_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./coordinators-routing.module */
      "MvUe");
      /* harmony import */


      var _coordinators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./coordinators.component */
      "6PfO"); //Modules
      // Components


      var CoordinatorsModule = /*#__PURE__*/_createClass(function CoordinatorsModule() {
        _classCallCheck(this, CoordinatorsModule);
      });

      CoordinatorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_coordinators_component__WEBPACK_IMPORTED_MODULE_6__["CoordinatorsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _coordinators_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoordinatorsRoutingModule"]]
      })], CoordinatorsModule);
      /***/
    },

    /***/
    "MvUe":
    /*!***********************************************************************!*\
      !*** ./src/app/web/pages/coordinators/coordinators-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CoordinatorsRoutingModule */

    /***/
    function MvUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoordinatorsRoutingModule", function () {
        return CoordinatorsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coordinators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coordinators.component */
      "6PfO");

      var routes = [{
        path: '',
        component: _coordinators_component__WEBPACK_IMPORTED_MODULE_3__["CoordinatorsComponent"]
      }];

      var CoordinatorsRoutingModule = /*#__PURE__*/_createClass(function CoordinatorsRoutingModule() {
        _classCallCheck(this, CoordinatorsRoutingModule);
      });

      CoordinatorsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CoordinatorsRoutingModule);
      /***/
    },

    /***/
    "S1EU":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/coordinators/coordinators.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S1EU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"cover\">\n  <web-cover [slides]=\"coverData.slides\" [options]=\"coverData.options\" *ngIf=\"coverData.slides\">\n  </web-cover>\n  <h1>Coordinadores</h1>\n  <owl-carousel-o\n    *ngIf=\"coordinatorsPageData.testimonials.length > 0\"\n    [options]=\"customOptions\"\n    class=\"testimonials-carousel\"\n  >\n    <ng-template carouselSlide *ngFor=\"let testimonial of coordinatorsPageData.testimonials\">\n      <web-testimonial-card [testimonial]=\"testimonial\"></web-testimonial-card>\n    </ng-template>\n  </owl-carousel-o>\n</section>\n\n<section class=\"steps\">\n  <web-bg-heading>¿Cómo ser un Coordinador?</web-bg-heading>\n  <div class=\"steps-wrapper\">\n    <ol #stepsList class=\"steps-list fade-in-animation animation-init\">\n      <div class=\"steps-list__divider\">\n        <li *ngFor=\"let step of stepsList1\">\n          {{ step }}\n        </li>\n      </div>\n      <div class=\"steps-list__divider\">\n        <li *ngFor=\"let step of stepsList2\">\n          {{ step }}\n        </li>\n      </div>\n    </ol>\n  </div>\n</section>\n";
      /***/
    },

    /***/
    "cgi8":
    /*!********************************************************************!*\
      !*** ./src/app/web/pages/coordinators/coordinators.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function cgi8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nol {\n  counter-reset: circle-counter;\n  list-style: none;\n  padding-left: 1vw;\n  margin: 0;\n}\nol li {\n  color: #81b03e;\n  counter-increment: circle-counter;\n  font-size: 3.5vw;\n  margin-bottom: 4vw;\n  padding-left: 10vw;\n  position: relative;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ol li {\n    font-size: 2vw;\n    margin-bottom: 2vw;\n    padding-left: 5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ol li {\n    font-size: 2vw;\n    margin-bottom: 2vw;\n    padding-left: 5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ol li {\n    font-size: 1.5vw;\n  }\n}\nol li::before {\n  border: 1px solid #00809a;\n  border-radius: 50%;\n  color: #00809a;\n  content: counter(circle-counter);\n  display: inline-block;\n  font-size: 4vw;\n  font-weight: bold;\n  line-height: 1.2;\n  position: absolute;\n  top: -1vw;\n  left: 3vw;\n  text-align: center;\n  width: 5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ol li::before {\n    font-size: 2.5vw;\n    left: 1vw;\n    top: 0;\n    height: 3vw;\n    width: 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ol li::before {\n    font-size: 2.5vw;\n    left: 1vw;\n    top: 0vw;\n    height: 3vw;\n    width: 3vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ol li::before {\n    font-size: 2vw;\n    left: 1.5vw;\n    top: 0vw;\n    height: 2.5vw;\n    width: 2.5vw;\n  }\n}\nh1 {\n  color: #fff;\n  font-size: 9vw;\n  position: absolute;\n  left: 8vw;\n  top: 30vw;\n  z-index: 20;\n  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n    left: 8vw;\n    top: 16vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n    left: 8vw;\n    top: 16vw;\n  }\n}\nowl-carousel-o.testimonials-carousel {\n  position: absolute;\n  top: 45vw;\n  margin: 0 8vw;\n  z-index: 20;\n  width: 80%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  owl-carousel-o.testimonials-carousel {\n    top: 25vw;\n    width: 35%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  owl-carousel-o.testimonials-carousel {\n    top: 25vw;\n    width: 35%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  owl-carousel-o.testimonials-carousel {\n    width: 26%;\n  }\n}\nowl-carousel-o.bg-carousel .owl-nav, owl-carousel-o.testimonials-carousel .owl-nav {\n  display: none !important;\n}\nweb-bg-heading {\n  display: block;\n  margin: 8vw auto;\n  width: 75%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  web-bg-heading {\n    margin: 4vw auto;\n    width: 40%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  web-bg-heading {\n    margin: 4vw auto;\n    width: 40%;\n  }\n}\n.steps-wrapper {\n  width: calc( (100% / 12) * 10);\n  margin: 8vw auto;\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .growth-animation {\n    transition: 2s ease height !important;\n  }\n  .steps-wrapper .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  .steps-wrapper .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  .steps-wrapper .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  .steps-wrapper .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  .steps-wrapper .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  .steps-wrapper .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\n.steps-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n.steps-list .steps-list__divider {\n  flex: 1 0 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .steps-list .steps-list__divider {\n    flex: 1 0 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .steps-list .steps-list__divider {\n    flex: 1 0 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Nvb3JkaW5hdG9ycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2VsZW1lbnRzL19oZWFkaW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2VsZW1lbnRzL19saXN0cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQ1RBO0VBQ0UsY0ZKSztFRUtMLGNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURZRjtBQ1RBO0VBQ0UsZ0JBQUE7QURZRjtBRWlCSTtFRDlCSjtJQUlJLGdCQUFBO0VEYUY7QUFDRjtBRVlJO0VEOUJKO0lBUUksZ0JBQUE7RURjRjtBQUNGO0FDWEE7RUFDRSxjQUFBO0FEY0Y7QUVHSTtFRGxCSjtJQUlJLGdCQUFBO0VEZUY7QUFDRjtBRUZJO0VEbEJKO0lBUUksZ0JBQUE7RURnQkY7QUFDRjtBQ2JBO0VBQ0UsY0FBQTtBRGdCRjtBRVhJO0VETko7SUFJSSxjQUFBO0VEaUJGO0FBQ0Y7QUVoQkk7RUROSjtJQVFJLGNBQUE7RURrQkY7QUFDRjtBRHBEQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDdURGO0FEckRFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ3VFUDtBRG5EQTtFQUNFLGNBckJLO0FDMkVQO0FHeEVBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBSDJFRjtBR3pFRTtFQUNFLGNKVEk7RUlVSixpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FIMkVKO0FFbERJO0VDL0JGO0lBU0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUg0RUo7QUFDRjtBRXpESTtFQy9CRjtJQWVJLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VINkVKO0FBQ0Y7QUVoRUk7RUMvQkY7SUFxQkksZ0JBQUE7RUg4RUo7QUFDRjtBRzVFSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjSnBDQztFSXFDRCxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FIOEVOO0FFcEZJO0VDUEE7SUFnQkksZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VIK0VOO0FBQ0Y7QUU3Rkk7RUNQQTtJQXdCSSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUhnRk47QUFDRjtBRXRHSTtFQ1BBO0lBZ0NJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VIaUZOO0FBQ0Y7QUFuSkE7RUFDRSxXREZNO0VDR04sY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUFzSkY7QUV6SEk7RUZwQ0o7SUFVSSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VBdUpGO0FBQ0Y7QUVoSUk7RUZwQ0o7SUFnQkksZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQXdKRjtBQUNGO0FBcEpFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBdUpKO0FFL0lJO0VGYkY7SUFRSSxTQUFBO0lBQ0EsVUFBQTtFQXdKSjtBQUNGO0FFckpJO0VGYkY7SUFhSSxTQUFBO0lBQ0EsVUFBQTtFQXlKSjtBQUNGO0FFM0pJO0VGYkY7SUFrQkksVUFBQTtFQTBKSjtBQUNGO0FBckpJO0VBQ0Usd0JBQUE7QUF1Sk47QUFsSkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBcUpGO0FFektJO0VGaUJKO0lBTUksZ0JBQUE7SUFDQSxVQUFBO0VBc0pGO0FBQ0Y7QUUvS0k7RUZpQko7SUFXSSxnQkFBQTtJQUNBLFVBQUE7RUF1SkY7QUFDRjtBQXBKQTtFRTNCRSw4QkFBQTtFRjhCQSxnQkFBQTtBQXNKRjtBRTFMSTtFRXZDSjtJQUVJLHFDQUFBO0VKbU9GO0VJbE9FO0lBQ0Usb0JBQUE7RUpvT0o7QUFDRjtBRWxNSTtFRTlCSjtJQUVJLHFDQUFBO0VKa09GO0VJak9FO0lBQ0UseUJBQUE7RUptT0o7QUFDRjtBRTFNSTtFRXJCSjtJQUVJLDZCQUFBO0lBQ0Esa0RBQUE7RUppT0Y7RUloT0U7SUFDRSx3QkFBQTtJQUNBLHNCQUFBO0VKa09KO0FBQ0Y7QUVwTkk7RUVWSjtJQUVJLGtCQUFBO0lBQ0Esa0RBQUE7RUpnT0Y7RUkvTkU7SUFDRSx1QkFBQTtJQUNBLHVCQUFBO0VKaU9KO0FBQ0Y7QUU5Tkk7RUVDSjtJQUVJLHNDQUFBO0VKK05GO0VJOU5FO0lBQ0UscUJBQUE7RUpnT0o7RUk5TkU7SUFDRSxxQkFBQTtFSmdPSjtBQUNGO0FBbE1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFxTUY7QUFuTUU7RUFDRSxjQUFBO0FBcU1KO0FFalBJO0VGMkNGO0lBSUksYUFBQTtFQXNNSjtBQUNGO0FFdFBJO0VGMkNGO0lBUUksYUFBQTtFQXVNSjtBQUNGIiwiZmlsZSI6ImNvb3JkaW5hdG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL2VsZW1lbnRzL2hlYWRpbmdzXCI7XG5AaW1wb3J0IFwic2Nzcy9lbGVtZW50cy9saXN0c1wiO1xuXG5oMSB7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGZvbnQtc2l6ZTogOXZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDh2dztcbiAgdG9wOiAzMHZ3O1xuICB6LWluZGV4OiAyMDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBsZWZ0OiA4dnc7XG4gICAgdG9wOiAxNnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgIGxlZnQ6IDh2dztcbiAgICB0b3A6IDE2dnc7XG4gIH1cbn1cblxub3dsLWNhcm91c2VsLW8ge1xuICAmLnRlc3RpbW9uaWFscy1jYXJvdXNlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDV2dztcbiAgICBtYXJnaW46IDAgOHZ3O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHdpZHRoOiA4MCU7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIHRvcDogMjV2dztcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIHRvcDogMjV2dztcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgd2lkdGg6IDI2JTtcbiAgICB9XG4gIH1cblxuICAmLmJnLWNhcm91c2VsLFxuICAmLnRlc3RpbW9uaWFscy1jYXJvdXNlbCB7XG4gICAgLm93bC1uYXYge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG53ZWItYmctaGVhZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDh2dyBhdXRvO1xuICB3aWR0aDogNzUlO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIG1hcmdpbjogNHZ3IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgbWFyZ2luOiA0dncgYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5cbi5zdGVwcy13cmFwcGVyIHtcbiAgQGltcG9ydCBcInNjc3MvYW5pbWF0aW9uc1wiO1xuICBAaW5jbHVkZSBjb2x1bW5zKDEwKTtcbiAgbWFyZ2luOiA4dncgYXV0bztcbn1cblxuLnN0ZXBzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnN0ZXBzLWxpc3RfX2RpdmlkZXIge1xuICAgIGZsZXg6IDEgMCAxMDAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmbGV4OiAxIDAgNTAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmbGV4OiAxIDAgNTAlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA5LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA4dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuXG5vbCB7XG4gIGNvdW50ZXItcmVzZXQ6IGNpcmNsZS1jb3VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDF2dztcbiAgbWFyZ2luOiAwO1xuXG4gIGxpIHtcbiAgICBjb2xvcjogJGdyZWVuO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBjaXJjbGUtY291bnRlcjtcbiAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDR2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICAgIHBhZGRpbmctbGVmdDogNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICAgIHBhZGRpbmctbGVmdDogNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgY29udGVudDogY291bnRlcihjaXJjbGUtY291bnRlcik7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTF2dztcbiAgICAgIGxlZnQ6IDN2dztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA1dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICBsZWZ0OiAxdnc7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgIGxlZnQ6IDF2dztcbiAgICAgICAgdG9wOiAwdnc7XG4gICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICBsZWZ0OiAxLjV2dztcbiAgICAgICAgdG9wOiAwdnc7XG4gICAgICAgIGhlaWdodDogMi41dnc7XG4gICAgICAgIHdpZHRoOiAyLjV2dztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEFuaW1hdGlvbnNcbi5ncm93dGgtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgaGVpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLWJvdHRvbS1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZSBib3R0b20gIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIGJvdHRvbTogLTEwMHZoICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1yaWdodC1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZSByaWdodCwgMnMgZWFzZSBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICByaWdodDogLTEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGUtbGVmdC1hbmltYXRpb24ge1xuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgbGVmdCwgMnMgZWFzZSByaWdodCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgbGVmdDogLTEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMTAwdncgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLmZhZGUtaW4tYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2Ugb3BhY2l0eSAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmLmFuaW1hdGlvbi1maW5pc2gge1xuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "v3/U":
    /*!***********************************************************************!*\
      !*** ./src/app/web/pages/coordinators/coordinators-static-content.ts ***!
      \***********************************************************************/

    /*! exports provided: COORDINATOR_CONTENT */

    /***/
    function v3U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COORDINATOR_CONTENT", function () {
        return COORDINATOR_CONTENT;
      });

      var COORDINATOR_CONTENT = {
        coordinatorPage: {
          backgroundImage: "./assets/images/banner-1.jpg",
          steps: ["Tener interés por aportar recursos a la formación de nuestros niños venezolanos.", "Estén dispuestos a seguir los lineamientos de aplicación de Amb-Le-Ma.", "Requieran poner en práctica la responsabilidad social de la empresa que representan.", "Estén dispuestos a ubicar escuelas en su rango de alcance en la que pueda aplicarse la herramienta Amb-Le-Ma.", "Estén dispuestos a invertir mínimo tiempo en hacer enlace con las autoridades educativas y directivos de las escuelas que deseen intervenir.", "Dispongan los recursos y tiempo necesarios.", "Tengan la disposición de aumentar su grado de satisfacción personal, familiar y/o empresarial, al ver resultados positivos en la mejora de la calidad educativa de muchos docentes y niños en escuelas con escasos recursos económicos."],
          testimonials: [// {
            //   description:
            //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
            //   firstName: "Stephanie",
            //   function: "Coordinador Principal",
            //   image: "./assets/images/profile-leena.jpg",
            //   lastName: "Soteldo",
            // },
            // {
            //   description:
            //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
            //   firstName: "Greudys",
            //   function: "Coordinador Principal",
            //   image: "./assets/images/profile-oscar.jpg",
            //   lastName: "Godoy",
            // },
            // {
            //   description:
            //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
            //   firstName: "Franklin",
            //   function: "Coordinador principal",
            //   image: "./assets/images/profile-oscar.jpg",
            //   lastName: "Perdomo",
            // },
            // {
            //   description:
            //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
            //   firstName: "José Alberto",
            //   function: "Coordinador Principal",
            //   image: "./assets/images/profile-oscar.jpg",
            //   lastName: "Guerrero",
            // },
          ]
        }
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-coordinators-coordinators-module-es5.js.map