(function () {
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
    /***/
    "D/rM":
    /*!*********************************************************!*\
      !*** ./src/app/web/pages/about/about-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AboutRoutingModule */

    /***/
    function DRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
        return AboutRoutingModule;
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


      var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.component */
      "ilvd");

      var routes = [{
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }];

      var AboutRoutingModule = /*#__PURE__*/_createClass(function AboutRoutingModule() {
        _classCallCheck(this, AboutRoutingModule);
      });

      AboutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutRoutingModule);
      /***/
    },

    /***/
    "V3Pk":
    /*!************************************************************!*\
      !*** ./src/app/web/pages/about/about-us-static-content.ts ***!
      \************************************************************/

    /*! exports provided: ABOUT_US_CONTENT */

    /***/
    function V3Pk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ABOUT_US_CONTENT", function () {
        return ABOUT_US_CONTENT;
      });

      var ABOUT_US_CONTENT = {
        aboutUsPage: {
          slider: [{
            image: {
              desktop: './assets/images/banner-1.jpg',
              tablet: './assets/images/banner-movil-1.jpg',
              movil: './assets/images/banner-movil-1.jpg'
            },
            description: "La misión de facilitar la calidad de vida"
          }, {
            image: {
              desktop: './assets/images/banner-2.jpg',
              tablet: './assets/images/banner-movil-2.jpg',
              movil: './assets/images/banner-movil-2.jpg'
            },
            description: "La misión de facilitar la calidad de vida"
          }],
          aboutUsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
          environmentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
          readingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
          mathText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus",
          awards: [{
            title: 'Carora',
            image: './assets/images/padrinos/carora.png',
            image2: './assets/images/padrinos/carora.png',
            image3: './assets/images/padrinos/carora.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
          }, {
            title: 'Tarikan',
            image: './assets/images/padrinos/tarikan.png',
            image2: './assets/images/padrinos/tarikan.png',
            image3: './assets/images/padrinos/tarikan.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
          }, {
            title: 'Familia Gonzalez Bergoderi',
            image: './assets/images/padrinos/familia-gonzalez-bergoderi.png',
            image2: './assets/images/padrinos/familia-gonzalez-bergoderi.png',
            image3: './assets/images/padrinos/familia-gonzalez-bergoderi.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
          }, {
            title: 'Fundación la Pastora',
            image: './assets/images/padrinos/fundacion-pastora.png',
            image2: './assets/images/padrinos/fundacion-pastora.png',
            image3: './assets/images/padrinos/fundacion-pastora.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
          }]
        }
      };
      /***/
    },

    /***/
    "WrYq":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/about/about.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WrYq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Cover section -->\n<web-cover\n  [overlayImage]=\"coverData.overlayImage\"\n  [slides]=\"coverData.slider\"\n  *ngIf=\"coverData.slider\"\n>\n</web-cover>\n<!-- End cover section  -->\n<section class=\"about-us\">\n  <h1 class=\"heading\">Nosotros</h1>\n  <div class=\"about-text\">\n    <p *ngIf=\"aboutUsPageData.aboutUsText\">{{ aboutUsPageData.aboutUsText }}</p>\n  </div>\n</section>\n<section class=\"pillars\">\n  <h2 class=\"heading\">Tenemos Tres Pilares Fundamentales</h2>\n  <div class=\"hide-lg\">\n    <owl-carousel\n      [options]=\"pillarsOptions\"\n      class=\"pillars-carousel\"\n      [carouselClasses]=\"['']\"\n      *ngIf=\"\n        aboutUsPageData.environmentText || aboutUsPageData.readingText || aboutUsPageData.mathText\n      \"\n    >\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Amb</span>iente\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"environment-icon\"\n            [svgStyle]=\"{ 'height.vw': 10, 'width.vw': 10 }\"\n          ></svg-icon>\n        </h3>\n        <p class=\"pillar-text\">{{ aboutUsPageData.environmentText }}</p>\n      </div>\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Le</span>ctura\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"reading-icon\"\n            [svgStyle]=\"{ 'height.vw': 10, 'width.vw': 10 }\"\n          ></svg-icon>\n        </h3>\n        <p class=\"pillar-text\">{{ aboutUsPageData.readingText }}</p>\n      </div>\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Ma</span>temática\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"math-icon\"\n            [svgStyle]=\"{ 'height.vw': 10, 'width.vw': 10 }\"\n          ></svg-icon>\n        </h3>\n        <p class=\"pillar-text\">{{ aboutUsPageData.mathText }}</p>\n      </div>\n    </owl-carousel>\n  </div>\n  <div class=\"pillars-list show-lg\">\n    <div class=\"pillar-wrapper environment\">\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Amb</span>iente\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"environment-icon\"\n            [svgStyle]=\"{ 'height.vw': 4, 'width.vw': 4 }\"\n          ></svg-icon>\n        </h3>\n        <p *ngIf=\"aboutUsPageData.environmentText\" class=\"pillar-text\">\n          {{ aboutUsPageData.environmentText }}\n        </p>\n      </div>\n    </div>\n    <div class=\"pillar-wrapper reading\">\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Le</span>ctura\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"reading-icon\"\n            [svgStyle]=\"{ 'height.vw': 4, 'width.vw': 4 }\"\n          ></svg-icon>\n        </h3>\n        <p *ngIf=\"aboutUsPageData.readingText\" class=\"pillar-text\">\n          {{ aboutUsPageData.readingText }}\n        </p>\n      </div>\n    </div>\n    <div class=\"pillar-wrapper math\">\n      <div class=\"pillar\">\n        <h3 class=\"pillar-title\">\n          <span class=\"bold\">Ma</span>temática\n          <svg-icon\n            class=\"amblema-icon amblema-icon--white\"\n            name=\"math-icon\"\n            [svgStyle]=\"{ 'height.vw': 4, 'width.vw': 4 }\"\n          ></svg-icon>\n        </h3>\n        <p *ngIf=\"aboutUsPageData.mathText\" class=\"pillar-text\">\n          {{ aboutUsPageData.mathText }}\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Awards section -->\n<section class=\"awards\">\n  <h2 class=\"heading\">Premios y Reconocimientos</h2>\n  <div class=\"awards-list\">\n    <owl-carousel\n      #awardsCarousel\n      [options]=\"carouselOptions\"\n      class=\"awards-carousel\"\n      [carouselClasses]=\"['']\"\n      *ngIf=\"aboutUsPageData.awards.length\"\n    >\n      <div class=\"award\" *ngFor=\"let award of aboutUsPageData.awards; index as i\">\n        <div class=\"image-wrapper\">\n          <img *ngIf=\"award.image\" class=\"image\" [src]=\"award.image\" [alt]=\"award.name + ' logo'\" />\n        </div>\n        <p *ngIf=\"award.title\" class=\"title\">{{ award.title }}</p>\n        <p *ngIf=\"award.description\" class=\"description\">{{ award.description }}</p>\n        <a class=\"button sm blue show-more\" (click)=\"onAwardClick(i)\">Ver más</a>\n      </div>\n    </owl-carousel>\n  </div>\n  <!-- Award modals -->\n  <div\n    #awardModal\n    *ngFor=\"let award of aboutUsPageData.awards; index as i\"\n    role=\"dialog\"\n    class=\"modal static-modal award-modal amblema-theme z-hidden d-flex\"\n    aria-modal=\"true\"\n    aria-labelledby=\"modal-basic-title\"\n  >\n    <div role=\"document\" class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseAwardModal(i)\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body d-flex\">\n          <div>\n            <owl-carousel-o\n              #awardImagesCarousel\n              [options]=\"awardImagesCarouselOptions\"\n              class=\"award-images-carousel\"\n              *ngIf=\"award.image || award.image2 || award.image3\"\n            >\n              <ng-template carouselSlide>\n                <div class=\"image-wrapper\">\n                  <img\n                    class=\"image\"\n                    *ngIf=\"award.image\"\n                    [src]=\"award.image\"\n                    [alt]=\"award.title + ' image 1'\"\n                  />\n                </div>\n              </ng-template>\n              <ng-template carouselSlide>\n                <div class=\"image-wrapper\">\n                  <img\n                    class=\"image\"\n                    *ngIf=\"award.image2\"\n                    [src]=\"award.image2\"\n                    [alt]=\"award.title + ' image 2'\"\n                  />\n                </div>\n              </ng-template>\n              <ng-template carouselSlide>\n                <div class=\"image-wrapper\">\n                  <img\n                    class=\"image\"\n                    *ngIf=\"award.image3\"\n                    [src]=\"award.image3\"\n                    [alt]=\"award.title + ' image 3'\"\n                  />\n                </div>\n              </ng-template>\n            </owl-carousel-o>\n          </div>\n          <div>\n            <h3>{{ award.title }}</h3>\n            <p>{{ award.description2 }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End awards section -->\n";
      /***/
    },

    /***/
    "ilvd":
    /*!****************************************************!*\
      !*** ./src/app/web/pages/about/about.component.ts ***!
      \****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function ilvd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.component.html */
      "WrYq");
      /* harmony import */


      var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component.scss */
      "tfHd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/web/static-web-content.service */
      "TdEa");
      /* harmony import */


      var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/web/api-web-content.service */
      "nWHY");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _about_us_static_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./about-us-static-content */
      "V3Pk");
      /* harmony import */


      var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/modal.service */
      "VQPA");
      /* harmony import */


      var angular_svg_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-svg-icon */
      "tHmd");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/global.service */
      "4WDQ");
      /* harmony import */


      var _web_pages_metadata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../web-pages-metadata */
      "Xkmw");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngxs/store */
      "e1JD");
      /* harmony import */


      var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/store/actions/web/web.actions */
      "LMpb");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(http, globalService, modalService, iconService, store) {
          _classCallCheck(this, AboutComponent);

          this.http = http;
          this.globalService = globalService;
          this.modalService = modalService;
          this.iconService = iconService;
          this.store = store;
          this.coverData = {
            overlayImage: "./assets/images/cover-simbolos.png",
            slider: []
          };
          this.pillarsOptions = {
            autoplay: false,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: ["", ""],
            navSpeed: 1000,
            responsive: _defineProperty({
              0: {
                items: 1,
                touchDrag: true
              }
            }, 768, {
              items: 2,
              touchDrag: true
            })
          };
          this.carouselOptions = {
            autoplay: false,
            items: 3,
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: ["", ""],
            navSpeed: 1000,
            responsive: {
              0: {
                items: this.isMobile() && this.isPortrait() ? 1 : 2
              },
              767: {
                items: this.isMobile() && this.isPortrait() ? 1 : 2
              },
              1279: {
                items: 3
              }
            }
          };
          this.awardImagesCarouselOptions = {
            autoplay: false,
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            nav: false,
            navSpeed: 1000,
            responsive: {
              0: {
                items: 1
              }
            }
          };
          this.aboutUsPageData = {
            slider: [],
            aboutUsText: "",
            environmentText: "",
            readingText: "",
            mathText: "",
            awards: []
          };
          this.selectedAward = {};
          this.ABOUT_US_PATH = "webcontent?page=aboutUsPage";
          this.globalService.setTitle(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_12__["METADATA"].aboutUsPage.title);
          this.globalService.setMetaTags(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_12__["METADATA"].aboutUsPage.metatags);
          this.iconService.loadSvg("../../../assets/icons/environment-icon.svg", "environment-icon");
          this.iconService.loadSvg("../../../assets/icons/reading-icon.svg", "reading-icon");
          this.iconService.loadSvg("../../../assets/icons/math-icon.svg", "math-icon");
          this.modalService.defaultOptions = Object.assign(Object.assign({}, this.modalService.defaultOptions), {
            size: "lg"
          });
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.setStaticService();
            this.setApiService();
            this.getAboutUsData();
          }
        }, {
          key: "setStaticService",
          value: function setStaticService() {
            this.aboutUsService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_5__["StaticWebContentService"]();
            this.aboutUsService.setWebContent(_about_us_static_content__WEBPACK_IMPORTED_MODULE_8__["ABOUT_US_CONTENT"]);
          }
        }, {
          key: "setApiService",
          value: function setApiService() {
            var service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_6__["ApiWebContentService"](this.http);
            service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl);
            service.setResourcePath(this.ABOUT_US_PATH);
            this.aboutUsService = service;
          }
        }, {
          key: "getAboutUsData",
          value: function getAboutUsData() {
            var _this = this;

            this.aboutUsService.getWebContent().subscribe(function (data) {
              _this.coverData.slider = data.aboutUsPage.slider.map(function (slide) {
                return {
                  image: slide.image,
                  title: slide.description
                };
              });
              _this.aboutUsPageData = data.aboutUsPage;

              _this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__["SetIsLoadingPage"](false)]);
            });
          }
        }, {
          key: "refreshCarousels",
          value: function refreshCarousels() {
            this.awardsCarousel.refresh();
          }
        }, {
          key: "onResize",
          value: function onResize() {
            if (this.isMobile() && this.isPortrait()) {
              this.awardsCarousel.options.responsive[0].items = 1;
              this.awardsCarousel.options.responsive[767].items = 1;
              this.awardsCarousel.refresh();
            } else {
              this.awardsCarousel.options.responsive[0].items = 2;
              this.awardsCarousel.options.responsive[767].items = 2;
              this.awardsCarousel.refresh();
            }
          }
        }, {
          key: "isMobile",
          value: function isMobile() {
            return window.innerWidth < 768;
          }
        }, {
          key: "isPortrait",
          value: function isPortrait() {
            return window.innerWidth < window.innerHeight;
          }
        }, {
          key: "isLandscape",
          value: function isLandscape() {
            return window.innerWidth > window.innerHeight;
          }
        }, {
          key: "onAwardClick",
          value: function onAwardClick(index) {
            var awardModalEl = this.awardModal.toArray()[index];
            this.modalService.openStaticModal(awardModalEl);
          }
        }, {
          key: "onCloseAwardModal",
          value: function onCloseAwardModal(index) {
            var awardModalEl = this.awardModal.toArray()[index];
            this.modalService.closeStaticModal(awardModalEl);
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"]
        }, {
          type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]
        }, {
          type: angular_svg_icon__WEBPACK_IMPORTED_MODULE_10__["SvgIconRegistryService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["Store"]
        }];
      };

      AboutComponent.propDecorators = {
        awardsCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["awardsCarousel", {
            "static": false
          }]
        }],
        awardModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ["awardModal", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["window:resize", [""]]
        }]
      };
      AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-about",
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutComponent);
      /***/
    },

    /***/
    "nWrh":
    /*!*************************************************!*\
      !*** ./src/app/web/pages/about/about.module.ts ***!
      \*************************************************/

    /*! exports provided: AboutModule */

    /***/
    function nWrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "D/rM");
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.component */
      "ilvd");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-owl-carousel */
      "bjCr");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-svg-icon */
      "tHmd");

      var AboutModule = /*#__PURE__*/_createClass(function AboutModule() {
        _classCallCheck(this, AboutModule);
      });

      AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutRoutingModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"]]
      })], AboutModule);
      /***/
    },

    /***/
    "tfHd":
    /*!******************************************************!*\
      !*** ./src/app/web/pages/about/about.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function tfHd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nbutton,\n.button {\n  background: transparent;\n  border: 0.6vw solid #FFF;\n  border-radius: 6px;\n  color: #fff;\n  font-family: \"Montserrat\";\n  padding: 3vw 6vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 6px;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 10px;\n    padding: 1vw;\n  }\n}\nbutton:hover,\n.button:hover {\n  background-color: #fff;\n  color: #00809a;\n  cursor: pointer;\n}\nbutton:focus,\n.button:focus {\n  outline: none;\n}\nbutton.blue,\n.button.blue {\n  color: #fff;\n  background-color: #00809a;\n  border-color: #00809a;\n}\n@media only screen and (min-width: 1024px) {\n  button.blue,\n.button.blue {\n    color: #00809a;\n    background-color: transparent;\n    border-color: #00809a;\n  }\n  button.blue:hover,\n.button.blue:hover {\n    background-color: #00809a;\n    color: #fff;\n  }\n}\nbutton.lg,\n.button.lg {\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\nbutton.sm,\n.button.sm {\n  font-size: 3.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\nh1,\nh2 {\n  text-align: center;\n}\nh1 {\n  margin: 5vw auto;\n}\nh2 {\n  margin: 7vw auto;\n}\nsection.about-us {\n  color: #00809a;\n  padding: 11vw 0;\n  min-height: 40vw;\n  background-image: url('leaves-background-movil.png');\n  background-position-y: 3vw;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us {\n    padding: 6vw 0 12vw;\n    min-height: 55vw;\n    background-image: url('leaves-background-desktop.png');\n    background-position-y: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us {\n    padding: 6vw 0 12vw;\n    min-height: 55vw;\n    background-image: url('leaves-background-desktop.png');\n  }\n}\nsection.about-us .heading {\n  width: calc( (100% / 12) * 9);\n  margin: 0 auto 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .heading {\n    margin: 0 auto 4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .heading {\n    margin: 0 auto 4vw;\n  }\n}\nsection.about-us .about-text {\n  width: calc( (100% / 12) * 10);\n  margin: auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .about-text {\n    width: calc( (100% / 12) * 7);\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .about-text {\n    width: calc( (100% / 12) * 7);\n  }\n}\nsection.about-us .about-text p {\n  font-size: 4vw;\n  text-align: center;\n  line-height: 1.8;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.about-us .about-text p {\n    font-size: 1.8vw;\n    line-height: 1.8;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.about-us .about-text p {\n    font-size: 1.8vw;\n    line-height: 1.8;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.about-us .about-text p {\n    font-size: 1.2vw;\n  }\n}\n::ng-deep owl-carousel.pillars-carousel {\n  display: flex;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-carousel {\n  width: 80%;\n  margin: auto;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-carousel .owl-stage {\n  display: flex;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-carousel .owl-stage .owl-item {\n  display: flex;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-carousel .owl-stage .owl-item .pillar {\n  display: flex;\n  flex-direction: column;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-prev {\n  left: -10vw !important;\n}\n::ng-deep owl-carousel.pillars-carousel .owl-next {\n  right: -90vw !important;\n}\n::ng-deep .pillar .amblema-icon--white svg .st0 {\n  fill: #fff !important;\n}\nsection.pillars .heading {\n  background-color: #00809a;\n  color: #fff;\n  padding: 10vw 5vw;\n  margin: 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .heading {\n    padding: 3vw;\n    font-size: 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .heading {\n    padding: 3vw;\n    font-size: 3vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .pillars-list {\n    display: flex;\n    overflow: hidden;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .pillars-list .pillar-wrapper {\n    width: calc( (100% / 12) * 4);\n    background-color: gray;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    height: 35vw;\n    position: relative;\n  }\n  section.pillars .pillars-list .pillar-wrapper.environment {\n    background-image: url('background-pillar-ambiente.jpg');\n  }\n  section.pillars .pillars-list .pillar-wrapper.reading {\n    background-image: url('lecturanew.png');\n  }\n  section.pillars .pillars-list .pillar-wrapper.math {\n    background-image: url('background-pillar-matematica.jpg');\n  }\n}\nsection.pillars .pillar {\n  background-color: #81b03e;\n  color: #fff;\n  padding: 6vw 10vw;\n  text-align: center;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillar {\n    padding: 2vw 3vw;\n    margin: 0 0.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillar {\n    padding: 2vw 3vw;\n    margin: 0 0.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .pillar {\n    bottom: -81%;\n    flex-grow: 1;\n    margin: 0;\n    position: relative;\n    transition: 1s bottom ease, 0.5s background-color ease;\n  }\n  section.pillars .pillar:hover {\n    background-color: #00809a;\n    bottom: 0;\n    transition: 1s bottom ease, 0.5s background-color ease;\n  }\n}\nsection.pillars .pillar h3 {\n  color: inherit;\n  font-weight: normal;\n  font-size: 6vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillar h3 {\n    font-size: 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillar h3 {\n    font-size: 3vw;\n  }\n}\nsection.pillars .pillar p {\n  font-size: 4vw;\n  margin: 8vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.pillars .pillar p {\n    font-size: 1.8vw;\n    margin: 5vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.pillars .pillar p {\n    font-size: 1.8vw;\n    margin: 5vw 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.pillars .pillar p {\n    font-size: 1.2vw;\n    line-height: 1.5;\n    margin: 2vw 0;\n  }\n}\nsection.awards {\n  position: relative;\n}\nsection.awards .heading {\n  text-align: center;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.awards .heading {\n    width: 40%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.awards .heading {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 767px) and (orientation: portrait) {\n  ::ng-deep owl-carousel.awards-carousel .owl-stage-outer {\n    justify-content: unset;\n  }\n}\n::ng-deep owl-carousel.awards-carousel .owl-stage-outer .owl-stage {\n  display: flex;\n  justify-content: center;\n}\n::ng-deep owl-carousel.awards-carousel .owl-stage-outer .owl-stage .owl-item {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.awards-carousel .owl-prev {\n    left: 1vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.awards-carousel .owl-next {\n    right: -98vw !important;\n  }\n}\n.awards-list {\n  margin: 12vw auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .awards-list {\n    margin: 6vw auto;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .awards-list {\n    margin: 6vw auto;\n  }\n}\n.awards-list .award {\n  color: #00809a;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 1vw 0;\n}\n.awards-list .award .image-wrapper {\n  display: flex;\n  align-items: center;\n  height: 30vw;\n  width: 30vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .awards-list .award .image-wrapper {\n    height: 10vw;\n    width: 10vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .awards-list .award .image-wrapper {\n    height: 10vw;\n    width: 10vw;\n  }\n}\n.awards-list .award .image-wrapper img {\n  width: 100%;\n}\n.awards-list .award .title {\n  font-size: 6vw;\n  font-weight: bold;\n  margin: 4vw 15vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .awards-list .award .title {\n    font-size: 2vw;\n    margin: 2vw 8vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .awards-list .award .title {\n    font-size: 2vw;\n    margin: 2vw 8vw 0;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .awards-list .award .title {\n    font-size: 1.5vw;\n  }\n}\n.awards-list .award .description {\n  font-size: 4vw;\n  margin: 5vw 20vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .awards-list .award .description {\n    font-size: 1.8vw;\n    margin: 1.5vw 8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .awards-list .award .description {\n    font-size: 1.8vw;\n    margin: 1.5vw 8vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .awards-list .award .description {\n    font-size: 0.9vw;\n  }\n}\n.awards-list .award .show-more {\n  border-width: 1px;\n  border-radius: 2px;\n  text-decoration: none;\n  padding: 3vw 14vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .awards-list .award .show-more {\n    font-size: 1.8vw;\n    border-radius: 4px;\n    padding: 0.75vw 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .awards-list .award .show-more {\n    font-size: 1.8vw;\n    border-radius: 4px;\n    padding: 0.75vw 3vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .awards-list .award .show-more {\n    font-size: 0.9vw;\n  }\n}\n::ng-deep .static-modal {\n  position: absolute;\n  overflow: visible;\n}\n::ng-deep .award-modal .modal-dialog {\n  width: 90vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .award-modal .modal-dialog {\n    width: 70vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .award-modal .modal-dialog {\n    width: 70vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep .award-modal .modal-dialog {\n    width: 65vw !important;\n  }\n}\n::ng-deep .award-modal .modal-dialog .modal-header {\n  padding: 5% 5% 0 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .award-modal .modal-dialog .modal-header {\n    padding: 2% 2% 0 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .award-modal .modal-dialog .modal-header {\n    padding: 2% 2% 0 0;\n  }\n}\n::ng-deep .award-modal .modal-dialog .modal-header button {\n  background-color: transparent;\n  border: 0;\n}\n::ng-deep .award-modal .modal-dialog .modal-body {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  padding: 0 5% 5% !important;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .award-modal .modal-dialog .modal-body {\n    flex-direction: row;\n    font-size: 1.5vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .award-modal .modal-dialog .modal-body {\n    flex-direction: row;\n    font-size: 1.5vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep .award-modal .modal-dialog .modal-body {\n    flex-direction: row;\n    font-size: 1vw !important;\n  }\n}\n::ng-deep .award-modal .modal-dialog .modal-body > *:first-child {\n  width: 35%;\n}\n::ng-deep .award-modal .modal-dialog .modal-body > *:last-child {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 60%;\n}\n@media only screen and (max-width: 767px) and (orientation: portrait) {\n  ::ng-deep .award-modal .modal-dialog .modal-body > *:first-child {\n    width: 100%;\n  }\n  ::ng-deep .award-modal .modal-dialog .modal-body > *:last-child {\n    width: 100%;\n  }\n}\n::ng-deep .award-modal .modal-dialog .modal-body .image-wrapper {\n  margin: auto;\n  width: 20vw;\n}\n@media only screen and (max-width: 767px) and (orientation: portrait) {\n  ::ng-deep .award-modal .modal-dialog .modal-body .image-wrapper {\n    width: 60vw;\n  }\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .award-modal .modal-dialog .modal-body p {\n    font-size: 1.5vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .award-modal .modal-dialog .modal-body p {\n    font-size: 1.5vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep .award-modal .modal-dialog .modal-body p {\n    font-size: 1vw !important;\n  }\n}\n::ng-deep owl-carousel-o.award-images-carousel .owl-carousel .owl-stage {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (max-width: 767px) and (orientation: portrait) {\n  ::ng-deep owl-carousel-o.award-images-carousel .owl-theme .owl-dots {\n    text-align: center;\n  }\n}\n::ng-deep owl-carousel-o.award-images-carousel .owl-theme .owl-dots .owl-dot span {\n  border: 1px solid #fff;\n}\n::ng-deep owl-carousel-o.award-images-carousel .owl-theme .owl-dots .owl-dot.active span, ::ng-deep owl-carousel-o.award-images-carousel .owl-theme .owl-dots .owl-dot:hover span {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvZWxlbWVudHMvX2hlYWRpbmdzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvZWxlbWVudHMvX2J1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FESEE7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ01GO0FESkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDc0JQO0FERkE7RUFDRSxjQXJCSztBQzBCUDtBQ3ZCQTtFQUNFLGNGSks7RUVLTCxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FEMEJGO0FDdkJBO0VBQ0UsZ0JBQUE7QUQwQkY7QUVHSTtFRDlCSjtJQUlJLGdCQUFBO0VEMkJGO0FBQ0Y7QUVGSTtFRDlCSjtJQVFJLGdCQUFBO0VENEJGO0FBQ0Y7QUN6QkE7RUFDRSxjQUFBO0FENEJGO0FFWEk7RURsQko7SUFJSSxnQkFBQTtFRDZCRjtBQUNGO0FFaEJJO0VEbEJKO0lBUUksZ0JBQUE7RUQ4QkY7QUFDRjtBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7QUV6Qkk7RUROSjtJQUlJLGNBQUE7RUQrQkY7QUFDRjtBRTlCSTtFRE5KO0lBUUksY0FBQTtFRGdDRjtBQUNGO0FEbEVBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNxRUY7QURuRUU7RUFDRSxzQkFBQTtF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LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwMDgwOWE7XG4kZ3JlZW46ICM4MWIwM2U7XG4kZGFyay1ncmVlbjogIzAwNzIyZTtcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzU1NTtcbiRkYXJrLWdyYXk6ICM5MDkwOTA7XG4kcmVkOiAjZjM1ZjVmO1xuJGNhbmNlbC1ncmF5OiAjOWZhOWJkO1xuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG5cbi5wcmltYXJ5LWNvbG9yIHtcbiAgY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3Njc3MvZWxlbWVudHMvaGVhZGluZ3MnO1xuQGltcG9ydCAnc2Nzcy9lbGVtZW50cy9idXR0b24nO1xuXG5oMSxcbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogNXZ3IGF1dG87XG59XG5cbmgyIHtcbiAgbWFyZ2luOiA3dncgYXV0bztcbn1cblxuc2VjdGlvbi5hYm91dC11cyB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgcGFkZGluZzogMTF2dyAwO1xuICBtaW4taGVpZ2h0OiA0MHZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVhdmVzLWJhY2tncm91bmQtbW92aWwucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogM3Z3O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogNnZ3IDAgMTJ2dztcbiAgICBtaW4taGVpZ2h0OiA1NXZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWF2ZXMtYmFja2dyb3VuZC1kZXNrdG9wLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogNnZ3IDAgMTJ2dztcbiAgICBtaW4taGVpZ2h0OiA1NXZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWF2ZXMtYmFja2dyb3VuZC1kZXNrdG9wLnBuZycpO1xuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIEBpbmNsdWRlIGNvbHVtbnMoOSk7XG4gICAgbWFyZ2luOiAwIGF1dG8gOHZ3O1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBtYXJnaW46IDAgYXV0byA0dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDR2dztcbiAgICB9XG4gIH1cbiAgLmFib3V0LXRleHQge1xuICAgIEBpbmNsdWRlIGNvbHVtbnMoMTApO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgQGluY2x1ZGUgY29sdW1ucyg3KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgQGluY2x1ZGUgY29sdW1ucyg3KTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgb3dsLWNhcm91c2VsIHtcbiAgICAmLnBpbGxhcnMtY2Fyb3VzZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLm93bC1jYXJvdXNlbCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLm93bC1zdGFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAub3dsLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC5waWxsYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm93bC1wcmV2IHtcbiAgICAgICAgbGVmdDogLTEwdncgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5vd2wtbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAtOTB2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAucGlsbGFyIHtcbiAgICAuYW1ibGVtYS1pY29uIHtcbiAgICAgICYtLXdoaXRlIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAuc3QwIHtcbiAgICAgICAgICAgIGZpbGw6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uLnBpbGxhcnMge1xuICAuaGVhZGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHZ3IDV2dztcbiAgICBtYXJnaW46IDA7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIHBhZGRpbmc6IDN2dztcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBwYWRkaW5nOiAzdnc7XG4gICAgICBmb250LXNpemU6IDN2dztcbiAgICB9XG4gIH1cblxuICAucGlsbGFycy1saXN0IHtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucGlsbGFyLXdyYXBwZXIge1xuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICBAaW5jbHVkZSBjb2x1bW5zKDQpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDM1dnc7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmLmVudmlyb25tZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1waWxsYXItYW1iaWVudGUuanBnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJlYWRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWN0dXJhbmV3LnBuZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXRoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1waWxsYXItbWF0ZW1hdGljYS5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5waWxsYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHBhZGRpbmc6IDZ2dyAxMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgcGFkZGluZzogMnZ3IDN2dztcbiAgICAgIG1hcmdpbjogMCAwLjV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgcGFkZGluZzogMnZ3IDN2dztcbiAgICAgIG1hcmdpbjogMCAwLjV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBib3R0b206IC04MSU7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiAxcyBib3R0b20gZWFzZSwgMC41cyBiYWNrZ3JvdW5kLWNvbG9yIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAxcyBib3R0b20gZWFzZSwgMC41cyBiYWNrZ3JvdW5kLWNvbG9yIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiA2dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIG1hcmdpbjogOHZ3IDA7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICBtYXJnaW46IDV2dyAwO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICBtYXJnaW46IDV2dyAwO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIG1hcmdpbjogMnZ3IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnNlY3Rpb24uYXdhcmRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuaGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgb3dsLWNhcm91c2VsIHtcbiAgICAvLyBBd2FyZHMgb3dsIGNhcm91c2VsIGluIGFib3V0IHVzIHBhZ2VcbiAgICAmLmF3YXJkcy1jYXJvdXNlbCB7XG4gICAgICAub3dsLXN0YWdlLW91dGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0sIHBvcnRyYWl0LCBkb3duKSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtc3RhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLm93bC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAub3dsLXByZXYge1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgbGVmdDogMXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm93bC1uZXh0IHtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICAgIHJpZ2h0OiAtOTh2dyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hd2FyZHMtbGlzdCB7XG4gIG1hcmdpbjogMTJ2dyBhdXRvO1xuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBtYXJnaW46IDZ2dyBhdXRvO1xuICB9XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgbWFyZ2luOiA2dncgYXV0bztcbiAgfVxuXG4gIC5hd2FyZCB7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxdncgMDtcblxuICAgIC5pbWFnZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAzMHZ3O1xuICAgICAgd2lkdGg6IDMwdnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDR2dyAxNXZ3IDA7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgbWFyZ2luOiAydncgOHZ3IDA7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICBtYXJnaW46IDJ2dyA4dncgMDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIG1hcmdpbjogNXZ3IDIwdnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICBtYXJnaW46IDEuNXZ3IDh2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgbWFyZ2luOiAxLjV2dyA4dnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjl2dztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvdy1tb3JlIHtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogM3Z3IDE0dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzV2dyAzdnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogMC43NXZ3IDN2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICBmb250LXNpemU6IDAuOXZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAuc3RhdGljLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmF3YXJkLW1vZGFsIHtcbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICB3aWR0aDogNjV2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogNSUgNSUgMCAwO1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBwYWRkaW5nOiAyJSAyJSAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBwYWRkaW5nOiAyJSAyJSAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1vZGFsLWJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMCA1JSA1JSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41dncgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjV2dyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuICAgICAgICAmID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtLCBwb3J0cmFpdCwgZG93bikge1xuICAgICAgICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDIwdnc7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSwgcG9ydHJhaXQsIGRvd24pIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDF2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvd2wtY2Fyb3VzZWwtby5hd2FyZC1pbWFnZXMtY2Fyb3VzZWwge1xuICAgIC5vd2wtY2Fyb3VzZWwge1xuICAgICAgLm93bC1zdGFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vd2wtdGhlbWUge1xuICAgICAgLm93bC1kb3RzIHtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0sIHBvcnRyYWl0LCBkb3duKSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5vd2wtZG90IHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA5LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA4dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4ld2ViLWJ1dHRvbiB7XG5cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC42dncgc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBwYWRkaW5nOiAzdncgNnZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGJvcmRlcjogLjR2dyBzb2xpZCAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgYm9yZGVyOiAuNHZ3IHNvbGlkICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ld2hpdGUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuJWJsdWUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJvcmRlci1jb2xvcjogJGJsdWU7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4lbGctYnV0dG9uIHtcbiAgZm9udC1zaXplOiA0LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG59XG5cbiVzbS1idXR0b24ge1xuICBmb250LXNpemU6IDMuNXZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogLjl2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG59XG5cbmJ1dHRvbixcbi5idXR0b24ge1xuICBAZXh0ZW5kICV3ZWItYnV0dG9uO1xuXG4gICYubGcge1xuICAgIEBleHRlbmQgJWxnLWJ1dHRvbjtcbiAgfVxuXG4gICYuc20ge1xuICAgIEBleHRlbmQgJXNtLWJ1dHRvbjtcbiAgfVxuXG4gICYuYmx1ZSB7XG4gICAgQGV4dGVuZCAlYmx1ZS1idXR0b247XG4gIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-about-module-es5.js.map