(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "RUPo":
    /*!***********************************************!*\
      !*** ./src/app/services/web/chart.service.ts ***!
      \***********************************************/

    /*! exports provided: ChartService */

    /***/
    function RUPo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartService", function () {
        return ChartService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var chartDefaultProps = {
        props: {
          colors: ["#81B03E", "#FFF", "#163b47"]
        },
        markers: {
          show: true,
          color: "#81B03E"
        },
        xaxis: {},
        yaxis: {
          labels: false,
          edgeSpace: 0
        },
        grid: {},
        asymptoteDefaultProps: {
          axis: "y",
          color: "#FFF"
        }
      };

      var ChartService = /*#__PURE__*/function () {
        function ChartService() {
          _classCallCheck(this, ChartService);
        }

        _createClass(ChartService, [{
          key: "formatChartDataToDrawComponent",
          value: function formatChartDataToDrawComponent(chartData) {
            return chartData.map(function (chart) {
              var asymptoteProps = chartDefaultProps.asymptoteDefaultProps;
              var asymptotes = chart.goals.map(function (goal) {
                return Object.assign(Object.assign({}, asymptoteProps), {
                  value: goal.value,
                  title: goal.label
                });
              });
              return Object.assign(Object.assign(Object.assign({}, chart), chartDefaultProps), {
                asymptotes: asymptotes
              });
            });
          }
        }]);

        return ChartService;
      }();

      ChartService.ctorParameters = function () {
        return [];
      };

      ChartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], ChartService);
      /***/
    },

    /***/
    "TdEa":
    /*!************************************************************!*\
      !*** ./src/app/services/web/static-web-content.service.ts ***!
      \************************************************************/

    /*! exports provided: StaticWebContentService */

    /***/
    function TdEa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticWebContentService", function () {
        return StaticWebContentService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var StaticWebContentService = /*#__PURE__*/function () {
        function StaticWebContentService() {
          _classCallCheck(this, StaticWebContentService);
        }

        _createClass(StaticWebContentService, [{
          key: "setWebContent",
          value: function setWebContent(content) {
            this.webContent = content;
          }
        }, {
          key: "getWebContent",
          value: function getWebContent() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.webContent);
          }
        }, {
          key: "getWebContentByParam",
          value: function getWebContentByParam(param, paramValue) {
            var content;
            content = this.webContent.filter(function (item) {
              return item[param] === paramValue;
            })[0];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(content);
          }
        }]);

        return StaticWebContentService;
      }();

      StaticWebContentService.ctorParameters = function () {
        return [];
      };

      StaticWebContentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], StaticWebContentService);
      /***/
    },

    /***/
    "VQPA":
    /*!*******************************************!*\
      !*** ./src/app/services/modal.service.ts ***!
      \*******************************************/

    /*! exports provided: ModalService */

    /***/
    function VQPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalService", function () {
        return ModalService;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");

      var ModalService = /*#__PURE__*/function () {
        function ModalService(service) {
          _classCallCheck(this, ModalService);

          this.service = service;
          this.defaultOptions = {
            ariaLabelledBy: 'modal-basic-title',
            backdropClass: 'transparent-backdrop',
            centered: true,
            size: 'lg',
            windowClass: 'amblema-theme'
          };
        }

        _createClass(ModalService, [{
          key: "openModal",
          value: function openModal(content) {
            return this.service.open(content, this.defaultOptions);
          }
        }, {
          key: "openStaticModal",
          value: function openStaticModal(modalRef) {
            modalRef.nativeElement.classList.remove('z-hidden');
          }
        }, {
          key: "closeStaticModal",
          value: function closeStaticModal(modalRef) {
            modalRef.nativeElement.classList.add('z-hidden');
          }
        }]);

        return ModalService;
      }();

      ModalService.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      };

      ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ModalService);
      /***/
    },

    /***/
    "Xkmw":
    /*!*******************************************!*\
      !*** ./src/app/web/web-pages-metadata.ts ***!
      \*******************************************/

    /*! exports provided: METADATA */

    /***/
    function Xkmw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "METADATA", function () {
        return METADATA;
      });

      var METADATA = {
        homePage: {
          title: "Inicio | AmbLeMa",
          metatags: [{
            name: "description",
            content: "AmbLeMa es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad en toda Venezuela con aportes de empresas y particulares que asumen una eficaz inversión social."
          }]
        },
        aboutUsPage: {
          title: "Nosotros | AmbLeMa",
          metatags: [{
            name: "description",
            content: "Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores clave de gestión docente con actividades diarias y actividades especiales, a lo largo del año escolar."
          }]
        },
        sponsorsPage: {
          title: "Padrinos | AmbLeMa",
          metatags: [{
            name: "description",
            content: "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles como las mejoras en la calidad de su comunidad y a la vez el país."
          }]
        },
        coordinatorsPage: {
          title: "Coordinadores | AmbLeMa",
          metatags: [{
            name: "description",
            content: "El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea aportar su valioso grano de arena para ayudar a implementar AmbLeMa en una escuela. ¿Estás interesado en transformar tu comunidad?"
          }]
        },
        schoolsPage: {
          title: "Escuelas | AmbLeMa",
          metatags: [{
            name: "description",
            content: "Para formar parte de la red AmbLeMa de escuelas, la fundación AmbLeMa te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio  del año escolar."
          }]
        },
        blogPage: {
          title: "Blog | AmbLeMa",
          metatags: [{
            name: "description",
            content: "Conoce los detalles de todas nuestras actividades en Ambiente, Lectura y Matemática a través de las noticias de nuestro blog."
          }]
        }
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map