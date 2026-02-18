(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-learning-module-detail-module-detail-module"], {
    /***/
    "+Sj3":
    /*!*******************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/e-learning/module-detail/module-detail.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ModuleDetailModule */

    /***/
    function Sj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleDetailModule", function () {
        return ModuleDetailModule;
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


      var _module_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-detail-routing.module */
      "bkAS");
      /* harmony import */


      var _module_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./module-detail.component */
      "142U");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-owl-carousel */
      "bjCr");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "Nv++");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _nguniversal_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nguniversal/common */
      "zlXd");

      var ModuleDetailModule = /*#__PURE__*/_createClass(function ModuleDetailModule() {
        _classCallCheck(this, ModuleDetailModule);
      });

      ModuleDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_module_detail_component__WEBPACK_IMPORTED_MODULE_4__["ModuleDetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _module_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModuleDetailRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserTransferStateModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_8__["TransferHttpCacheModule"]]
      })], ModuleDetailModule);
      /***/
    },

    /***/
    "142U":
    /*!**********************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/e-learning/module-detail/module-detail.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ModuleDetailComponent */

    /***/
    function U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleDetailComponent", function () {
        return ModuleDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_module_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./module-detail.component.html */
      "UKBv");
      /* harmony import */


      var _module_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./module-detail.component.scss */
      "nfmW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "EcpT");
      /* harmony import */


      var _services_steps_modules_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/steps/modules.service */
      "t0Vk");
      /* harmony import */


      var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/global.service */
      "4WDQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../store/states/e-learning/user.state */
      "HQy9");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngxs/store */
      "e1JD");
      /* harmony import */


      var _store_states_steps_project_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../store/states/steps/project.state */
      "04Jp");

      var ModuleDetailComponent = /*#__PURE__*/function () {
        function ModuleDetailComponent(moduleService, globals, document, route, router) {
          _classCallCheck(this, ModuleDetailComponent);

          this.moduleService = moduleService;
          this.globals = globals;
          this.document = document;
          this.route = route;
          this.router = router;
          this.current_coor_id = '';
          this.module_id = "";
          this.nextModuleId = null;
          this.isTesting = false;
          this.forAdminSetFalse = false; //? quizz area ------------------------------------------------

          this.moduleCoins = 4;
          this.completedModule = false;
          this.optionsLetters = ['optionA', 'optionB', 'optionC', 'optionD']; //? -----------------------------------------------------------

          this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"];
          this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
          this.shown = 0;
          this.current = {
            image: '',
            description: ''
          };
          this.carouselOps = {
            items: 1,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            animateOut: 'fadeOut',
            video: true,
            lazyLoad: true
          };
          this.carouselOpsImgs = {
            items: 4,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            video: true,
            lazyLoad: true
          };
          this.selectedQuestions = [];
          this.incorrectOnes = [];
          this.showFillAll = 0; //todo: 0: Must answer all questions, 1: all correct, 2: error happened

          this.isPortrait = true;
          this.isLandscapeCurrent = false;
          this.projectId = '';
          this.user_type = '';
          this.user_id = '';
          this.isBrowser = globals.isBrowser;
          this.moduleInfo = {
            id: "",
            name: "",
            title: "",
            description: "",
            secondaryTitle: "",
            secondaryDescription: "",
            objectives: [],
            slider: [],
            images: [],
            duration: "",
            quizzes: [],
            createdAt: "",
            updatedAt: ""
          };
        }

        _createClass(ModuleDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.module_id = this.route.snapshot.params.id;
            this.moduleNum = this.moduleService.all_modules.map(function (e) {
              return e.id;
            }).indexOf(this.module_id) + 1;
            this.checkApprove(this.module_id);
            this.selectd_proj_id$.subscribe(function (res) {
              if (res) _this.projectId = res;
            });
            this.coorId$.subscribe(function (id_) {
              if (id_) _this.user_id = id_;
              _this.current_coor_id = id_;
            });
            this.userType$.subscribe(function (res) {
              if (res) _this.user_type = res;
              _this.forAdminSetFalse = res == "0" || res == "1" ? false : true;
            });
            this.document.getElementById('completed-message').setAttribute('style', 'display:block; opacity:0');
            setTimeout(function () {
              _this.document.getElementById('completed-message').setAttribute('style', 'display:none; opacity:1');
            }, 1000);
          }
        }, {
          key: "goToImg",
          value: function goToImg(i) {
            this.owlEl.to([i]);
            this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(this.shown).setAttribute('style', 'display:block');
            this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(i).setAttribute('style', 'display:none');
            this.shown = i; // to stop playing video

            this.owlEl.reInit();
          }
        }, {
          key: "letterSequence",
          value: function letterSequence(i) {
            return i == 0 ? 'A' : i == 1 ? 'B' : i == 2 ? 'C' : 'D';
          }
        }, {
          key: "getOption",
          value: function getOption(j, q) {
            switch (j) {
              case 0:
                return q.optionA;

              case 1:
                return q.optionB;

              case 2:
                return q.optionC;

              default:
                return q.optionD;
            }
          } //? Function called when validate button is pressed

        }, {
          key: "showModal",
          value: function showModal(el) {
            var _this2 = this;

            this.isValidating = true;
            var thereIsNext = this.moduleService.getNextModule(this.module_id);
            this.nextModuleId = thereIsNext ? thereIsNext.id : null;
            var coorAnswers = {
              coordinator: this.current_coor_id,
              answers: []
            };
            var success = true; // there are not unselected questions

            var wrong = false; // there are not wrong answers

            this.incorrectOnes = this.moduleInfo.quizzes.map(function (i) {
              return 'option0';
            }); // re-initializing incorrect answers array

            var wrongOnes = this.incorrectOnes.slice(); // temporary incorrect array

            for (var i = 0; i < this.selectedQuestions.length; i++) {
              coorAnswers.answers.push({
                quizId: this.moduleInfo.quizzes[i].id,
                option: this.selectedQuestions[i]
              }); // adding coordinator answer structure

              if (this.selectedQuestions[i] == 'option0') {
                success = false; // there is at least an unanswered question

                this.showFillAll = 0;
                this.isValidating = false;
                this.warningBtn.nativeElement.click(); //opening warning modal

                break;
              } else {
                if (this.selectedQuestions[i] != this.moduleInfo.quizzes[i].correctOption) {
                  wrong = true; // there is at least a wrong answer

                  wrongOnes[i] = this.selectedQuestions[i]; // setting wrong answer in the temporary array 
                }
              }
            }

            if (success) {
              // when all questions are answered
              this.moduleService.answerModule(this.module_id, coorAnswers).subscribe(function (res) {
                _this2.isValidating = false;

                if (!res.approved) {
                  if (wrong) {
                    // if some of them are wrong
                    _this2.incorrectOnes = wrongOnes; // setting the incorrect answers

                    if (_this2.moduleCoins > 1) {
                      // decreasing AmbleCoins
                      _this2.moduleCoins--;
                    }

                    _this2.showFillAll = 1;

                    _this2.moduleService.emitValsUpdate({
                      type: 1,
                      usu: coorAnswers.coordinator,
                      usut: 2,
                      project: _this2.projectId
                    }); //! THIS IS TEMPORARY


                    _this2.warningBtn.nativeElement.click(); // opening warning modal

                  }
                } else {
                  if (!wrong) {
                    _this2.completedModule = true;

                    _this2.moduleService.emitValsUpdate({
                      type: 2,
                      usu: coorAnswers.coordinator,
                      usut: 2,
                      project: _this2.projectId
                    }); //! THIS IS TEMPORARY


                    el.click(); // opening success modal
                  }
                }
              }, function (error) {
                _this2.isValidating = false;
                _this2.showFillAll = 2;

                _this2.warningBtn.nativeElement.click();
              });
            }
          }
        }, {
          key: "selectAnswer",
          value: function selectAnswer(i, j) {
            if (this.forAdminSetFalse) this.selectedQuestions[i] = j;
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            var w = event.target.innerWidth;
            var h = event.target.innerHeight;
            var lC = w > h ? true : false;

            if (this.isLandscapeCurrent != lC) {
              this.initOps();
              this.stackEl.reInit();
            }
          }
        }, {
          key: "initOps",
          value: function initOps() {
            if (this.isBrowser) {
              if (window.innerWidth > window.innerHeight) {
                this.isPortrait = false;
                this.isLandscapeCurrent = true;
              } else {
                this.isPortrait = true;
                this.isLandscapeCurrent = false;
              }
            }

            this.stackOps = {
              items: 1,
              dots: false,
              loop: this.img_strip.length < 2 ? false : true,
              nav: true,
              responsive: {
                640: {
                  items: this.isPortrait ? 1 : 4,
                  nav: this.isPortrait ? true : false,
                  loop: this.isPortrait ? this.img_strip.length < 2 ? false : true : true
                },
                992: {
                  items: this.isPortrait ? 1 : 6,
                  nav: this.isPortrait ? true : false,
                  loop: this.isPortrait ? this.img_strip.length < 2 ? false : true : true
                }
              }
            };
          } // estimate converser

        }, {
          key: "getEstimate",
          value: function getEstimate(timing) {
            var time_type = timing.charAt(0) == '0' && timing.charAt(1) == '0' ? 'min' : timing.charAt(2) == '0' && timing.charAt(2) == '0' ? 'hr' : 'hrmin';

            switch (time_type) {
              case 'min':
                return (timing.charAt(2) == '0' ? timing.charAt(3) : timing.charAt(2) + timing.charAt(3)) + ' min';

              case 'hr':
                return (timing.charAt(0) == '0' ? timing.charAt(1) : timing.charAt(0) + timing.charAt(1)) + ' h';

              default:
                return (timing.charAt(0) == '0' ? timing.charAt(1) : timing.charAt(0) + timing.charAt(1)) + ' h ' + (timing.charAt(2) == '0' ? timing.charAt(3) : timing.charAt(2) + timing.charAt(3)) + ' min';
            }
          }
        }, {
          key: "checkApprove",
          value: function checkApprove(id) {
            var _this3 = this;

            var currentMod;

            if (!this.isTesting) {
              if (this.forAdminSetFalse) {
                var thereIsMod = this.moduleService.checkApprove(id);
                this.completedModule = thereIsMod ? thereIsMod.status == "3" ? true : false : false;
              }

              currentMod = this.moduleService.getSelectedModule(id);
            } else {
              currentMod = this.testingModule;
            }

            if (currentMod) this.fillModuleInfo(currentMod);else {
              this.moduleService.getMod(this.module_id).subscribe(function (res) {
                _this3.fillModuleInfo(res);
              }, function (error) {
                _this3.showFillAll = 2;

                _this3.warningBtn.nativeElement.click();
              });
            }
          }
        }, {
          key: "fillModuleInfo",
          value: function fillModuleInfo(mod) {
            this.moduleInfo = mod;
            this.imgvid = this.moduleInfo.slider;
            this.img_strip = this.moduleInfo.images;
            this.current = {
              image: this.img_strip[0].image,
              description: this.img_strip[0].description
            };
            this.selectedQuestions = this.moduleInfo.quizzes.map(function (i) {
              return 'option0';
            });
            this.incorrectOnes = this.selectedQuestions.slice();
            this.initOps();

            if (this.forAdminSetFalse) {
              var thereIsModu = this.moduleService.checkApprove(this.module_id);
              this.moduleCoins = this.isTesting ? 3 : thereIsModu ? thereIsModu.score ? thereIsModu.score : 4 : 4;
            }
          }
        }, {
          key: "fillImage",
          value: function fillImage(img) {
            this.current = {
              image: img.image,
              description: img.description
            };
          }
        }, {
          key: "refreshComp",
          value: function refreshComp() {
            var _this4 = this;

            this.router.navigateByUrl('/previous-steps/modules', {
              skipLocationChange: false
            }).then(function () {
              var nvpth = '/previous-steps/module-detail/' + _this4.nextModuleId;

              _this4.router.navigate([nvpth]);
            });
          }
        }, {
          key: "goToMods",
          value: function goToMods() {
            this.router.navigate(["previous-steps/modules"]);
          }
        }]);

        return ModuleDetailComponent;
      }();

      ModuleDetailComponent.ctorParameters = function () {
        return [{
          type: _services_steps_modules_service__WEBPACK_IMPORTED_MODULE_6__["ModulesService"]
        }, {
          type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      ModuleDetailComponent.propDecorators = {
        owlEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['owlElement', {
            "static": false
          }]
        }],
        stackEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['stackElement', {
            "static": false
          }]
        }],
        warningBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['warningOpener', {
            "static": false
          }]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_9__["UserState"].user_id)], ModuleDetailComponent.prototype, "coorId$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_9__["UserState"].user_type)], ModuleDetailComponent.prototype, "userType$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Select"])(_store_states_steps_project_state__WEBPACK_IMPORTED_MODULE_11__["StepsState"].selected_proj_id)], ModuleDetailComponent.prototype, "selectd_proj_id$", void 0);
      ModuleDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-module-detail',
        template: _raw_loader_module_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_module_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModuleDetailComponent);
      /***/
    },

    /***/
    "UKBv":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/previous-steps/e-learning/module-detail/module-detail.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UKBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"module-detail-container\">\n  <div class=\"go-back-btn\">\n    <button\n      type=\"button\"\n      class=\"btn btn-primary text-decoration-none py-2 px-4\"\n      (click)=\"goToMods()\"\n    >\n      <fa-icon [icon]=\"faArrowLeft\"></fa-icon> Volver\n    </button>\n  </div>\n  <section class=\"main-info d-flex flex-wrap\">\n    <div class=\"col-lg-12 px-0 mb-3 module-title\">\n      <h1 class=\"text-uppercase\">Módulo {{ moduleNum }}</h1>\n      <div *ngIf=\"moduleInfo.name\" class=\"bar mx-3 d-inline\"></div>\n      <h3 *ngIf=\"moduleInfo.name\">{{ moduleInfo.name }}</h3>\n    </div>\n    <section class=\"col-lg-5 px-0 estimate\">\n      <h4 class=\"mb-4\">\n        <!-- Estimación de tiempo: 5 min -->\n        Estimación de tiempo: {{ getEstimate(moduleInfo.duration) }}\n      </h4>\n\n      <h4>Objetivos del módulo</h4>\n      <ul class=\"pl-4 mb-4\">\n        <li *ngFor=\"let objective of moduleInfo.objectives\">{{ objective }}</li>\n      </ul>\n    </section>\n    <section class=\"col-lg-7 px-0 mt-2 mb-4 initial-learning\">\n      <h4 class=\"mb-3\">{{ moduleInfo.title }}</h4>\n\n      <div [innerHtml]=\"moduleInfo.description\" class=\"description-html\"></div>\n    </section>\n  </section>\n\n  <div class=\"gallery d-flex flex-wrap mb-4\">\n    <div\n      class=\"carousel col-sm-9 px-0\"\n      [class.margin-both-auto]=\"imgvid && imgvid.length < 2\"\n    >\n      <owl-carousel\n        #owlElement\n        [options]=\"carouselOps\"\n        [items]=\"imgvid\"\n        [carouselClasses]=\"['owl-theme', 'sliding', 'owl-styles']\"\n      >\n        <div *ngFor=\"let img of imgvid; index as i\">\n          <img\n            *ngIf=\"img.type == '1'\"\n            [src]=\"img.url\"\n            [alt]=\"img.description\"\n          />\n          <a *ngIf=\"img.type == '2'\" class=\"owl-video\" [href]=\"img.url\"></a>\n          <h6 class=\"my-4\">{{ img.description }}</h6>\n        </div>\n      </owl-carousel>\n    </div>\n\n    <div\n      class=\"images col-sm-3 px-0\"\n      [class.d-none]=\"imgvid && imgvid.length < 2\"\n    >\n      <owl-carousel\n        #imgsElement\n        [options]=\"carouselOpsImgs\"\n        [items]=\"imgvid\"\n        [carouselClasses]=\"['owl-theme', 'sliding', 'owl-styles']\"\n      >\n        <div\n          class=\"image-item mb-3\"\n          *ngFor=\"let img of imgvid; index as i\"\n          (click)=\"goToImg(i)\"\n        >\n          <img\n            *ngIf=\"img.type == '1'\"\n            [src]=\"img.url\"\n            [alt]=\"img.description\"\n          />\n          <div class=\"over-video\" *ngIf=\"img.type == '2'\"></div>\n          <a *ngIf=\"img.type == '2'\" class=\"owl-video\" [href]=\"img.url\"></a>\n          <p class=\"ml-3\">\n            <small>{{ img.description }}</small>\n          </p>\n        </div>\n      </owl-carousel>\n    </div>\n  </div>\n  <div class=\"image-desc-container d-flex\">\n    <h6\n      [class.margin-both-auto]=\"imgvid && imgvid.length < 2\"\n      class=\"mb-4 image-desc\"\n      *ngFor=\"let img of imgvid; index as i\"\n      [class.hidden]=\"i != shown\"\n    >\n      {{ img.description }}\n    </h6>\n  </div>\n\n  <section class=\"description\">\n    <h4 class=\"mb-4\">{{ moduleInfo.secondaryTitle }}</h4>\n    <div\n      [innerHtml]=\"moduleInfo.secondaryDescription\"\n      class=\"description-html\"\n    ></div>\n  </section>\n</div>\n\n<div class=\"images-stack\">\n  <owl-carousel\n    #stackElement\n    [options]=\"stackOps\"\n    [items]=\"img_strip\"\n    [carouselClasses]=\"['owl-theme', 'sliding', 'owl-styles']\"\n  >\n    <img\n      [src]=\"img.image\"\n      [alt]=\"img.description\"\n      *ngFor=\"let img of img_strip\"\n      (click)=\"fillImage(img)\"\n      data-toggle=\"modal\"\n      data-target=\"#image-modal\"\n    />\n  </owl-carousel>\n</div>\n\n<section class=\"quizz mt-5\">\n  <div class=\"top-title d-flex flex-wrap mb-2\">\n    <h2 class=\"mr-3\">QUIZZ</h2>\n    <h4>Seleccione la respuesta correcta</h4>\n  </div>\n\n  <div class=\"questions\">\n    <div\n      class=\"d-flex flex-wrap q-item\"\n      *ngFor=\"let question of moduleInfo.quizzes; index as i\"\n    >\n      <h3 class=\"col-sm-12 px-0 mt-2 mb-4\">\n        <span class=\"mr-4\">{{ i + 1 }}</span>\n        <span>{{ question.question }}</span>\n      </h3>\n      <div\n        class=\"col-sm-6 mb-4 px-0 option-answer\"\n        *ngFor=\"let option of optionsLetters; index as j\"\n      >\n        <a\n          class=\"text-decoration-none d-flex\"\n          href=\"javascript:void(0)\"\n          [class.selected]=\"\n            !forAdminSetFalse\n              ? false\n              : completedModule\n              ? question.correctOption === option\n              : selectedQuestions[i] === option\n          \"\n          [class.incorrect]=\"incorrectOnes[i] === option\"\n          (click)=\"selectAnswer(i, option)\"\n        >\n          <div class=\"col-2 mr-2\">\n            <span class=\"letter-sequence border rounded-circle\">{{\n              letterSequence(j)\n            }}</span>\n          </div>\n          <div class=\"col-10 text-left\">{{ getOption(j, question) }}</div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <br *ngIf=\"completedModule || !forAdminSetFalse\" />\n  <div *ngIf=\"forAdminSetFalse\" class=\"validate-btn text-center\">\n    <button\n      *ngIf=\"!completedModule\"\n      type=\"button\"\n      class=\"btn btn-outline-primary text-decoration-none mb-4 d-inline\"\n      (click)=\"showModal(modalOpener)\"\n      [disabled]=\"isValidating\"\n    >\n      <span *ngIf=\"isValidating\" class=\"spinner-grow spinner-grow-sm\"></span\n      >{{\n        isValidating\n          ? \"Validando..\"\n          : \"Validar &times; \" +\n            (moduleCoins > 1 ? moduleCoins + \" puntos\" : moduleCoins + \" punto\")\n      }}\n    </button>\n    <!-- <p *ngIf=\"!completedModule\" class=\"d-inline\"><img src=\"../../../../../assets/images/icn-amblemoneda-blue.png\" alt=\"\">&nbsp;&times;&nbsp;{{moduleCoins}}</p> -->\n    <p *ngIf=\"completedModule\" class=\"d-inline green\">\n      Ganaste\n      {{ moduleCoins > 1 ? moduleCoins + \" puntos.\" : moduleCoins + \" punto.\" }}\n    </p>\n    <button\n      #modalOpener\n      class=\"d-none\"\n      type=\"button\"\n      data-toggle=\"modal\"\n      data-target=\"#completed-message\"\n    ></button>\n    <button\n      #warningOpener\n      class=\"d-none\"\n      type=\"button\"\n      data-toggle=\"modal\"\n      data-target=\"#warning-message\"\n    ></button>\n  </div>\n  <br *ngIf=\"completedModule || !forAdminSetFalse\" />\n</section>\n\n<!-- The Modals -->\n<div class=\"modal fade\" id=\"completed-message\">\n  <div class=\"modal-dialog modal-dialog-scrollable modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close ml-0 px-0\" data-dismiss=\"modal\">\n          <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        </button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold text-center mt-4 mb-4\">\n          MODULO COMPLETADO\n        </h2>\n        <p class=\"text-center mb-4\">\n          Gracias por querer formar parte del equipo AmbLeMa.\n        </p>\n        <p class=\"text-center mb-4\">\n          Cada módulo dentro del AmblePENSUM permitirá conocer mejor el perfil y\n          las atribuciones de un Coordinador para lograr la eficaz aplicación de\n          la Herramienta Educativa en cada escuela.\n        </p>\n        <p class=\"text-center mb-4\">\n          Es parte de nuestra manera de lograr la calidad en cada proceso\n        </p>\n        <p class=\"text-center mb-4\">HQS: Hagamos que suceda</p>\n        <div class=\"text-center btns-modal\" [class.onlyone]=\"!nextModuleId\">\n          <button\n            *ngIf=\"nextModuleId\"\n            type=\"button\"\n            class=\"btn btn-primary text-decoration-none mt-2 mb-3\"\n            (click)=\"refreshComp()\"\n            data-dismiss=\"modal\"\n          >\n            Siguiente módulo\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary text-decoration-none mt-2 mb-3\"\n            [routerLink]=\"['/previous-steps/modules']\"\n            data-dismiss=\"modal\"\n          >\n            Volver al listado\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"warning-message\">\n  <div class=\"modal-dialog modal-dialog-scrollable modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n          {{\n            showFillAll == 0\n              ? \"¡Debes responder todas las preguntas del Quizz!\"\n              : showFillAll == 1\n              ? \"¡Tienes respuestas incorrectas!\"\n              : \"¡Ocurrieron problemas al conectar con el servidor!\"\n          }}\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"image-modal\">\n  <div class=\"modal-dialog modal-dialog-scrollable modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <img [src]=\"current.image\" [alt]=\"current.description\" />\n        <h5 class=\"font-weight-bold text-left mt-3\">\n          {{ current.description }}\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "bkAS":
    /*!***************************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/e-learning/module-detail/module-detail-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ModuleDetailRoutingModule */

    /***/
    function bkAS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleDetailRoutingModule", function () {
        return ModuleDetailRoutingModule;
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


      var _module_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-detail.component */
      "142U");

      var routes = [{
        path: '',
        component: _module_detail_component__WEBPACK_IMPORTED_MODULE_3__["ModuleDetailComponent"]
      }];

      var ModuleDetailRoutingModule = /*#__PURE__*/_createClass(function ModuleDetailRoutingModule() {
        _classCallCheck(this, ModuleDetailRoutingModule);
      });

      ModuleDetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModuleDetailRoutingModule);
      /***/
    },

    /***/
    "nfmW":
    /*!************************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/e-learning/module-detail/module-detail.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nfmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.module-detail-container {\n  padding: 1.5rem 1rem 1rem;\n}\n@media screen and (min-width: 480px) and (orientation: portrait) {\n  .module-detail-container {\n    padding: 2rem;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .module-detail-container {\n    padding: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container {\n    padding: 2.5rem 3rem;\n  }\n}\nh1 {\n  font-size: x-large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h1 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h1 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h1 {\n    font-size: xx-large !important;\n  }\n}\nh3, h4 {\n  font-size: large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: xx-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n::ng-deep body {\n  background: #ebeff5;\n}\n.nb-theme-default * {\n  font-family: \"Montserrat\" !important;\n}\n.module-detail-container .description h4, .module-detail-container .image-desc-container .image-desc, .module-detail-container .gallery .carousel h6, .module-detail-container .main-info h4 {\n  color: #00809a;\n  font-weight: bold;\n}\n.modal-backdrop.show {\n  opacity: 0.25;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container {\n    padding: 4rem 4rem 2rem 4rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container {\n    padding: 5rem 6rem 2rem 6rem;\n  }\n}\n.module-detail-container .go-back-btn {\n  text-align: right;\n  margin-bottom: 0.75rem;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .go-back-btn {\n    margin-bottom: 0;\n    margin-top: -1.75rem;\n  }\n}\n.module-detail-container .go-back-btn button {\n  background: #00809a;\n  border-color: #00809a;\n  width: auto;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .go-back-btn button {\n    padding: 0.45rem 0.75rem !important;\n    border: 2px solid #00809a;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .go-back-btn button {\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n.module-detail-container .go-back-btn button:focus {\n  box-shadow: none;\n}\n.module-detail-container .go-back-btn button:hover {\n  background: transparent;\n  color: #00809a;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .main-info .module-title {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    order: 1;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .main-info .module-title {\n    order: 1;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info .module-title {\n    margin-bottom: 2.4rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info .module-title {\n    margin-bottom: 4rem !important;\n    margin-top: 1rem;\n  }\n}\n.module-detail-container .main-info h1 {\n  font-weight: bold;\n  color: #81b03e;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info h1 {\n    font-size: 2.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info h1 {\n    font-size: 3rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .main-info h1 {\n    font-size: 3.25rem !important;\n  }\n}\n.module-detail-container .main-info h3 {\n  color: #81b03e;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info h3 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info h3 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .main-info h3 {\n    font-size: 1.85rem !important;\n  }\n}\n.module-detail-container .main-info .bar {\n  display: none !important;\n  border-left: 2px solid #80af3e;\n  height: 3rem;\n  margin-bottom: 0.5rem;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .main-info .bar {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info .bar {\n    height: 4rem;\n    margin-left: 1.5rem !important;\n    margin-right: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info .bar {\n    height: 5rem;\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .main-info .bar {\n    height: 5.5rem;\n  }\n}\n.module-detail-container .main-info ul {\n  word-break: break-all;\n  word-break: break-word;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info ul {\n    line-height: 1.6;\n  }\n}\n.module-detail-container .main-info ul li {\n  color: #00809a;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info ul li {\n    font-size: 110% !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info ul li {\n    font-size: 115% !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .main-info ul li {\n    font-size: 122% !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .main-info .estimate {\n    order: 3;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .main-info .estimate {\n    order: 3;\n    margin-top: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info .estimate h4:first-child {\n    margin-bottom: 2rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .main-info .initial-learning {\n    margin-top: 2rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .main-info .initial-learning {\n    order: 2;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .main-info .initial-learning {\n    order: 2;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .main-info .initial-learning {\n    -webkit-padding-end: 4rem !important;\n            padding-inline-end: 4rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container .main-info .initial-learning {\n    -webkit-padding-end: 8rem !important;\n            padding-inline-end: 8rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info .initial-learning {\n    -webkit-padding-end: 12rem !important;\n            padding-inline-end: 12rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .main-info .initial-learning h4 {\n    margin-bottom: 1.75rem !important;\n  }\n}\n.module-detail-container .main-info .initial-learning p {\n  text-align: justify;\n  color: #00809a;\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .main-info .initial-learning p {\n    padding-right: 2rem;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery {\n    margin-top: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container .gallery {\n    margin-top: 4rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .gallery .col-sm-9 {\n    flex: 0 0 80%;\n    max-width: 80%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .gallery .col-sm-3 {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n}\n.module-detail-container .gallery ::ng-deep .owl-carousel {\n  transition: opacity 0.25s;\n}\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper .owl-video-play-icon {\n  background-size: 50%;\n  background-position: center;\n}\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper .owl-video-wrapper .owl-video-play-icon {\n  display: none;\n}\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n  height: 65vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    height: 46.35vw;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    height: 46vw;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    height: 41.5vw;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    height: 35.5vw;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    width: 67vw;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    width: 69.5vw;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    width: 67vw;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    width: 69.5vw;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item .owl-video-wrapper,\n.module-detail-container .gallery .carousel owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .carousel h6 {\n    display: none;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .carousel h6 {\n    display: none;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .images {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .gallery .images {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100% !important;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n    height: 65vw;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n    height: 46.35vw;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n    height: 46vw;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n    height: 41.5vw;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage {\n    height: 35.5vw;\n  }\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage::after {\n  display: none;\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage .owl-item:first-child {\n  display: none;\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage .owl-item {\n  width: 100% !important;\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage .owl-video-wrapper .owl-video-play-icon {\n  background-size: 50%;\n  background-position: center;\n}\n.module-detail-container .gallery .images owl-carousel ::ng-deep .owl-carousel .owl-stage .owl-video-wrapper .owl-video-wrapper .owl-video-play-icon {\n  display: none;\n}\n.module-detail-container .gallery .images .image-item {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item {\n    margin-bottom: 0 !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .gallery .images .image-item {\n    margin-bottom: 0 !important;\n  }\n}\n.module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n  min-width: 33vw;\n  max-width: 33vw;\n  min-height: 22vw;\n  max-height: 22vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n    min-width: 22vw;\n    max-width: 22vw;\n    margin-right: 0 !important;\n    margin-left: auto;\n    min-height: 14vw;\n    max-height: 14vw;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n    min-width: 22vw;\n    max-width: 22vw;\n    margin-right: 0 !important;\n    margin-left: auto;\n    min-height: 13vw;\n    max-height: 13vw;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n    min-width: unset;\n    max-width: unset;\n    width: 87%;\n    min-height: 12vw;\n    max-height: 12vw;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n    min-height: 10vw;\n    max-height: 10vw;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item img,\n.module-detail-container .gallery .images .image-item ::ng-deep .owl-video-wrapper,\n.module-detail-container .gallery .images .image-item .over-video {\n    min-height: 10.3vw;\n    max-height: 10.3vw;\n  }\n}\n.module-detail-container .gallery .images .image-item .over-video {\n  background: transparent;\n  z-index: 2;\n  position: absolute;\n  height: 100% !important;\n  top: 0;\n  left: 0;\n}\n.module-detail-container .gallery .images .image-item p {\n  color: #00809a;\n  line-height: initial;\n}\n.module-detail-container .gallery .images .image-item p small {\n  font-size: 95%;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .gallery .images .image-item p {\n    display: none;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .gallery .images .image-item p {\n    display: none;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .image-desc-container {\n    margin-bottom: 6rem;\n  }\n}\n.module-detail-container .image-desc-container .image-desc {\n  display: none;\n  opacity: 1;\n  transition: opacity 0.75s;\n  transition-delay: 0.25s;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .module-detail-container .image-desc-container .image-desc {\n    display: inline-block;\n    width: 73.25%;\n    font-size: larger;\n    margin-top: -1rem;\n    margin-bottom: 3rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .image-desc-container .image-desc {\n    display: inline-block;\n    width: 73.25%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .module-detail-container .image-desc-container .image-desc {\n    font-size: x-large;\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .image-desc-container .image-desc {\n    font-size: 1.25rem !important;\n    width: 75.25%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .module-detail-container .image-desc-container .image-desc {\n    width: 80%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .image-desc-container .image-desc {\n    font-size: 1.75rem !important;\n  }\n}\n.module-detail-container .image-desc-container .image-desc.hidden {\n  height: 0;\n  width: 0;\n  overflow: hidden;\n  margin: 0 !important;\n  opacity: 0;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .module-detail-container .description {\n    margin-top: 2rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .module-detail-container .description {\n    width: 82%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .module-detail-container .description {\n    margin-top: 10rem;\n    margin-bottom: 4rem;\n  }\n}\n.module-detail-container .description h4 {\n  text-align: center;\n}\n.module-detail-container .description p {\n  color: #00809a;\n  text-align: justify;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .images-stack {\n    margin-top: 2rem;\n  }\n}\n.images-stack owl-carousel ::ng-deep .owl-carousel .owl-stage {\n  cursor: pointer;\n  cursor: ew-resize;\n}\n.images-stack owl-carousel ::ng-deep .owl-carousel .owl-item img {\n  min-width: 70vw;\n  max-width: 70vw;\n  min-height: 70vw;\n  max-height: 70vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 auto;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .images-stack owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    min-width: 25vw;\n    max-width: 25vw;\n    min-height: 25vw;\n    max-height: 25vw;\n    margin: unset;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .images-stack owl-carousel ::ng-deep .owl-carousel .owl-item img {\n    min-width: unset;\n    max-width: unset;\n    width: calc((100% / 6) * 6);\n    min-height: 16.65vw;\n    max-height: 16.65vw;\n  }\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 0%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-prev,\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-next {\n  transform: scale(2, 3);\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0 1% 0 1% !important;\n  color: #00809a;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-prev span,\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-next span {\n  display: none;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-next {\n  margin-right: 5%;\n  right: 0;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-prev {\n  margin-left: 5%;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-prev:hover,\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-next:hover {\n  background: transparent;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-prev:focus,\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav .owl-next:focus {\n  outline: none;\n}\n.images-stack owl-carousel ::ng-deep .owl-theme .owl-nav.disabled {\n  display: none;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .quizz .top-title {\n    margin-top: 4rem;\n    align-items: flex-end;\n    margin-bottom: 2rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .top-title {\n    margin-top: 4rem;\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .quizz .top-title {\n    margin-top: 5rem;\n    margin-bottom: 2rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .quizz .top-title {\n    margin-top: 8rem;\n    margin-bottom: 4rem !important;\n  }\n}\n.quizz .top-title h2 {\n  background: #81b03e;\n  color: #fff;\n  font-weight: bold;\n  padding: 0.75rem 2rem;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .top-title h2 {\n    padding: 1rem 2rem;\n    padding-left: 5.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .quizz .top-title h2 {\n    font-size: 2.25rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .quizz .top-title h2 {\n    font-size: 2.5rem;\n    padding-left: 8rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .quizz .top-title h2 {\n    font-size: 3rem;\n    padding: 1.5rem 2rem;\n    padding-left: 10rem;\n  }\n}\n.quizz .top-title h4 {\n  text-align: center;\n  width: 100%;\n  color: #81b03e;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .quizz .top-title h4 {\n    width: auto;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .top-title h4 {\n    width: auto;\n  }\n}\n.quizz .questions {\n  text-align: center;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .questions {\n    margin-top: 1rem;\n  }\n}\n.quizz .questions .q-item {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .questions .q-item {\n    width: 80%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .quizz .questions .q-item {\n    width: 70%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1366px) and (orientation: landscape) {\n  .quizz .questions .q-item {\n    width: 62%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .quizz .questions .q-item {\n    margin-bottom: 1.5rem;\n  }\n}\n.quizz .questions h3 {\n  font-weight: bold;\n  display: flex;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .quizz .questions h3 {\n    text-align: left;\n    padding: 0 2.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .questions h3 {\n    margin-top: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .quizz .questions h3 {\n    padding: 0 3rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .quizz .questions h3 {\n    padding: 0 3.2rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .quizz .questions h3 {\n    padding: 0 3.75rem !important;\n  }\n}\n.quizz .questions h3,\n.quizz .questions .letter-sequence,\n.quizz .questions .option-answer {\n  color: #626262;\n}\n.quizz .questions .option-answer {\n  padding: 0.5rem 0;\n  word-break: break-word;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .questions .option-answer {\n    padding-left: 1.5rem !important;\n  }\n}\n.quizz .questions a {\n  color: #626262;\n  padding: 0.5rem 0;\n}\n.quizz .questions .letter-sequence {\n  border-color: #909090 !important;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.25s;\n}\n.quizz .questions .selected .letter-sequence {\n  background: #81b03e;\n  border-color: #81b03e !important;\n  color: #fff;\n  font-weight: bold;\n}\n.quizz .questions .incorrect .letter-sequence {\n  background: #f53030;\n  border-color: #f53030 !important;\n  color: #fff;\n  font-weight: bold;\n}\n.quizz .validate-btn button {\n  width: 60%;\n  border-color: #00809a;\n  color: #00809a;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .quizz .validate-btn button {\n    margin-bottom: 3rem !important;\n    margin-top: 1rem;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .quizz .validate-btn button {\n    width: auto;\n    -webkit-padding-start: 3rem;\n            padding-inline-start: 3rem;\n    -webkit-padding-end: 3rem;\n            padding-inline-end: 3rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .quizz .validate-btn button {\n    margin-top: 1.25rem;\n    margin-bottom: 2.5rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 992px) and (orientation: landscape) {\n  .quizz .validate-btn button {\n    padding: 0.45rem 0.5rem !important;\n    width: 10rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .quizz .validate-btn button {\n    min-width: 11rem !important;\n    width: auto !important;\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .quizz .validate-btn button {\n    min-width: 12rem !important;\n  }\n}\n.quizz .validate-btn button:active {\n  background: transparent;\n}\n.quizz .validate-btn button:hover {\n  background: #00809a;\n  color: #fff;\n}\n.quizz .validate-btn button:focus {\n  box-shadow: none;\n}\n.quizz .validate-btn p {\n  vertical-align: super;\n  top: -0.25rem;\n  position: relative;\n  margin-left: 0.75rem;\n  color: #00809a;\n  font-weight: bold;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .quizz .validate-btn p {\n    top: -0.5rem;\n  }\n}\n.quizz .validate-btn p img {\n  height: 2.25rem;\n}\n@media screen and (orientation: portrait) and (min-width: 360px) {\n  .quizz .validate-btn p img {\n    margin-bottom: 0.25rem;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .quizz .validate-btn p img {\n    margin-bottom: 0.25rem;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #completed-message .modal-dialog {\n    margin-left: 2rem;\n    margin-right: 2rem;\n    max-width: 100%;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  #completed-message .modal-dialog {\n    margin-left: 2rem;\n    margin-right: 2rem;\n    max-width: 100%;\n  }\n}\n#completed-message .modal-content {\n  border: none;\n  background: rgba(60, 129, 154, 0.5);\n  height: 100%;\n}\n#completed-message .modal-content .modal-header {\n  border: none;\n  background: #00809a;\n}\n#completed-message .modal-content .modal-header button {\n  color: #fff;\n  opacity: 1;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-header button {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1400px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-header button {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-header button {\n    font-size: 1.75rem !important;\n  }\n}\n#completed-message .modal-content .modal-header button:focus {\n  outline: none;\n}\n#completed-message .modal-content .modal-body {\n  color: #fff;\n  background: url('banner-movil-2.jpg') no-repeat center;\n  background-size: cover;\n  justify-content: flex-start !important;\n}\n@media screen and (orientation: landscape) {\n  #completed-message .modal-content .modal-body {\n    background: url('banner-2.jpg') no-repeat center;\n    background-size: cover;\n  }\n}\n@media screen and (min-height: 700px) and (orientation: portrait) {\n  #completed-message .modal-content .modal-body {\n    justify-content: center !important;\n  }\n}\n@media screen and (min-height: 500px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body {\n    justify-content: center !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #completed-message .modal-content .modal-body {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #completed-message .modal-content .modal-body h2 {\n    font-size: 2.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  #completed-message .modal-content .modal-body h2 {\n    font-size: 3rem;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body h2 {\n    font-size: 2.5rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1400px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body h2 {\n    font-size: 3rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body h2 {\n    font-size: 3.5rem;\n    margin-bottom: 2rem !important;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 960px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body p {\n    width: 85%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body p {\n    width: 70%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body p {\n    width: 60%;\n    margin-bottom: 2.5rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal {\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal {\n    display: grid;\n    grid-template-columns: 32% 32%;\n    justify-content: center;\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal {\n    grid-template-columns: auto auto;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal.onlyone {\n    grid-template-columns: 32%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal.onlyone {\n    grid-template-columns: auto;\n  }\n}\n#completed-message .modal-content .modal-body .btns-modal button {\n  width: 100%;\n  color: #00809a;\n  background: #fff;\n  border: none;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    width: 40%;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    border: 1px solid #fff;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 992px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    padding: 0.45rem 0.5rem !important;\n    width: 10rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    min-width: 11rem !important;\n    width: auto !important;\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  #completed-message .modal-content .modal-body .btns-modal button {\n    min-width: 12rem !important;\n  }\n}\n#completed-message .modal-content .modal-body .btns-modal button:focus {\n  box-shadow: none;\n}\n#completed-message .modal-content .modal-body .btns-modal button:hover {\n  background: #00809a;\n  color: #fff;\n  border-color: #00809a;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #warning-message .close,\n#image-modal .close {\n    font-size: 1.25rem !important;\n  }\n}\n#warning-message .modal-content,\n#image-modal .modal-content {\n  width: auto;\n}\n#warning-message .modal-header,\n#image-modal .modal-header {\n  padding: 0.75rem 1rem 0 0;\n  border: none;\n}\n#warning-message .modal-body,\n#image-modal .modal-body {\n  color: #00809a;\n}\n#warning-message .modal-body p,\n#image-modal .modal-body p {\n  text-align: center;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #image-modal .modal-dialog {\n    max-width: 90%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #image-modal .modal-dialog {\n    max-width: 100%;\n  }\n}\n#image-modal .close {\n  text-shadow: 0 0 0 !important;\n  color: #81b03e;\n  opacity: 1;\n}\n#image-modal .close:focus {\n  outline: none;\n}\n#image-modal .modal-content {\n  background: transparent;\n  border: none;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #image-modal .modal-content {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #image-modal .modal-content {\n    width: 55%;\n  }\n}\n#image-modal .modal-body {\n  color: #81b03e;\n}\n#image-modal .modal-body img {\n  max-width: 100%;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  #image-modal .modal-body img {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  #image-modal .modal-body img {\n    width: 100%;\n  }\n}\n.description-html {\n  text-align: justify !important;\n  color: #00809a !important;\n  font-size: 1rem !important;\n}\n::ng-deep .owl-refresh {\n  opacity: 0 !important;\n}\n::ng-deep .owl-loaded {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcGxhY2Vob2xkZXJzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJldmlvdXMtc3RlcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUNVQTtFQUNFLHlCQUFBO0FEUEY7QUNTRTtFQUhGO0lBSUksYUFBQTtFRE5GO0FBQ0Y7QUVzRFE7RURyRFI7SUFPSSxhQUFBO0VESkY7QUFDRjtBRWlEUTtFRHJEUjtJQVVJLG9CQUFBO0VERkY7QUFDRjtBQ01BO0VBQ0UsNkJBQUE7QURIRjtBRXdDUTtFRHRDUjtJQUdJLDZCQUFBO0VEREY7QUFDRjtBRW1DUTtFRHRDUjtJQU1JLDZCQUFBO0VEQ0Y7QUFDRjtBRThCUTtFRHRDUjtJQVNJLDhCQUFBO0VER0Y7QUFDRjtBQ0RBO0VBQ0UsMkJBQUE7QURJRjtBRXFCUTtFRDFCUjtJQUdJLDZCQUFBO0VETUY7QUFDRjtBRWdCUTtFRDFCUjtJQU1JLDhCQUFBO0VEUUY7QUFDRjtBRVdRO0VEMUJSO0lBU0ksNkJBQUE7RURVRjtBQUNGO0FFTVE7RUQxQlI7SUFZSSw0QkFBQTtFRFlGO0FBQ0Y7QUVDUTtFRDFCUjtJQWVJLDZCQUFBO0VEY0Y7QUFDRjtBRUpRO0VEUlI7SUFFSSwyQkFBQTtFRGVG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QTtBQTZTRiIsImZpbGUiOiJtb2R1bGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwMDgwOWE7XG4kZ3JlZW46ICM4MWIwM2U7XG4kZGFyay1ncmVlbjogIzAwNzIyZTtcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzU1NTtcbiRkYXJrLWdyYXk6ICM5MDkwOTA7XG4kcmVkOiAjZjM1ZjVmO1xuJGNhbmNlbC1ncmF5OiAjOWZhOWJkO1xuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG5cbi5wcmltYXJ5LWNvbG9yIHtcbiAgY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3ByZXZpb3VzLXN0ZXBzLmNvbXBvbmVudC5zY3NzXCI7XG5cbiVib2xkLWJsdWUge1xuICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgb3BhY2l0eTogMC4yNTtcbn1cblxuQG1peGluIGdhbGxlcnktaGVpZ2h0IHtcbiAgaGVpZ2h0OiA2NXZ3O1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGhlaWdodDogNDYuMzV2dztcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgaGVpZ2h0OiA0NnZ3O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIGhlaWdodDogNDEuNXZ3O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDEzNjZweCkge1xuICAgIGhlaWdodDogMzUuNXZ3O1xuICB9XG59XG5cbi5tb2R1bGUtZGV0YWlsLWNvbnRhaW5lciB7XG4gIEBleHRlbmQgJXBhZGRpbmctY29udHM7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIHBhZGRpbmc6IDRyZW0gNHJlbSAycmVtIDRyZW07XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTM2NnB4KSB7XG4gICAgcGFkZGluZzogNXJlbSA2cmVtIDJyZW0gNnJlbTtcbiAgfVxuXG4gIC5nby1iYWNrLWJ0biB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuODVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYWluLWluZm8ge1xuICAgIC5tb2R1bGUtdGl0bGUge1xuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDIuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDMuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaDMge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDEuODVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzgwYWYzZTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgICAgIGhlaWdodDogNS41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG5cbiAgICBoNCB7XG4gICAgICBAZXh0ZW5kICVib2xkLWJsdWU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgfVxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgICAgbGkge1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDExMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDExNSUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEyMiUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lc3RpbWF0ZSB7XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGg0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5pbml0aWFsLWxlYXJuaW5nIHtcbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICBvcmRlcjogMjtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDRyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDEzNjZweCkge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEycmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmdhbGxlcnkge1xuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDEzNjZweCkge1xuICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB9XG5cbiAgICAuY29sLXNtLTkge1xuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgICAgIGZsZXg6IDAgMCA4MCU7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29sLXNtLTMge1xuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgIG1heC13aWR0aDogMjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCAub3dsLWNhcm91c2VsIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsIHtcbiAgICAgIG93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xuICAgICAgICAub3dsLXZpZGVvLXdyYXBwZXIge1xuICAgICAgICAgIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3dsLXZpZGVvLXdyYXBwZXIgLm93bC12aWRlby1wbGF5LWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm93bC12aWRlby13cmFwcGVyLFxuICAgICAgICBpbWcge1xuICAgICAgICAgIEBpbmNsdWRlIGdhbGxlcnktaGVpZ2h0O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgICAgICB3aWR0aDogNjd2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDY5LjV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sIGxhbmRzY2FwZSwgdHJ1ZSwgODAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA2N3Z3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgICAgd2lkdGg6IDY5LjV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDYge1xuICAgICAgICBAZXh0ZW5kICVib2xkLWJsdWU7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlcyB7XG4gICAgICBAbWl4aW4gaW1hZ2VzLXJlZG8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIGltYWdlcy1yZWRvO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgICAgQGluY2x1ZGUgaW1hZ2VzLXJlZG87XG4gICAgICB9XG5cbiAgICAgIG93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlIHtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIEBpbmNsdWRlIGdhbGxlcnktaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAub3dsLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAub3dsLXZpZGVvLXdyYXBwZXIge1xuICAgICAgICAgIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3dsLXZpZGVvLXdyYXBwZXIgLm93bC12aWRlby1wbGF5LWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWFnZS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyxcbiAgICAgICAgOjpuZy1kZWVwIC5vd2wtdmlkZW8td3JhcHBlcixcbiAgICAgICAgLm92ZXItdmlkZW8ge1xuICAgICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgICBtYXgtd2lkdGg6IDMzdnc7XG4gICAgICAgICAgbWluLWhlaWdodDogMjJ2dztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMnZ3O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgICAgICAgQG1peGluIGltZy1yZWRvIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjJ2dztcbiAgICAgICAgICAgIG1heC13aWR0aDogMjJ2dztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBpbWctcmVkbztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0dnc7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBpbWctcmVkbztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEzdnc7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxM3Z3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgd2lkdGg6IDg3JTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEydnc7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMnZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxMzY2cHgpIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdnc7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwLjN2dztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwLjN2dztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXItdmlkZW8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuXG4gICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5NSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbWFnZS1kZXNjLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1kZXNjIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAZXh0ZW5kICVib2xkLWJsdWU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcblxuICAgICAgQG1peGluIGltYWdlLWRlc2MtcmVkbyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDczLjI1JTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgIEBpbmNsdWRlIGltYWdlLWRlc2MtcmVkbztcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIGltYWdlLWRlc2MtcmVkbztcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDc1LjI1JTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmLmhpZGRlbiB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICB3aWR0aDogODIlO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIEBleHRlbmQgJWJvbGQtYmx1ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgcCB7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZXMtc3RhY2sge1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICBvd2wtY2Fyb3VzZWwgOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGN1cnNvcjogZXctcmVzaXplO1xuICB9XG4gIG93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcbiAgICBtaW4td2lkdGg6IDcwdnc7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDcwdnc7XG4gICAgbWF4LWhlaWdodDogNzB2dztcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgIG1pbi13aWR0aDogMjV2dztcbiAgICAgIG1heC13aWR0aDogMjV2dztcbiAgICAgIG1pbi1oZWlnaHQ6IDI1dnc7XG4gICAgICBtYXgtaGVpZ2h0OiAyNXZ3O1xuICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gNikgKiA2KTtcbiAgICAgIG1pbi1oZWlnaHQ6IDE2LjY1dnc7XG4gICAgICBtYXgtaGVpZ2h0OiAxNi42NXZ3O1xuICAgIH1cbiAgfVxuICBvd2wtY2Fyb3VzZWwgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgLm93bC1wcmV2LFxuICAgIC5vd2wtbmV4dCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDMpO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIHBhZGRpbmc6IDAgMSUgMCAxJSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm93bC1uZXh0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gICAgLm93bC1wcmV2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG4gICAgLm93bC1wcmV2OmhvdmVyLFxuICAgIC5vd2wtbmV4dDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLm93bC1wcmV2OmZvY3VzLFxuICAgIC5vd2wtbmV4dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICBvd2wtY2Fyb3VzZWwgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1uYXYuZGlzYWJsZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnF1aXp6IHtcbiAgLnRvcC10aXRsZSB7XG4gICAgQG1peGluIHRvcC10aXRsZS1yZWRvIHtcbiAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICBAaW5jbHVkZSB0b3AtdGl0bGUtcmVkbztcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgQGluY2x1ZGUgdG9wLXRpdGxlLXJlZG87XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAycmVtO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1LjVyZW07XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTM2NnB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgaDQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBzb2Z0LWdyZWVuKTtcblxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucXVlc3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIC5xLWl0ZW0ge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDEzNjZweCkge1xuICAgICAgICB3aWR0aDogNjIlO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAyLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLy8gQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sbGFuZHNjYXBlLHRydWUsODAwcHgpIHsgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICBwYWRkaW5nOiAwIDNyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgICAgICBwYWRkaW5nOiAwIDMuMnJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMy43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGgzLFxuICAgIC5sZXR0ZXItc2VxdWVuY2UsXG4gICAgLm9wdGlvbi1hbnN3ZXIge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgZGFya2VzdC1ncmF5KTtcbiAgICB9XG5cbiAgICAub3B0aW9uLWFuc3dlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBkYXJrZXN0LWdyYXkpO1xuICAgICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgfVxuICAgIC5sZXR0ZXItc2VxdWVuY2Uge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGRhcmstZ3JheSkgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gICAgfVxuICAgIC5zZWxlY3RlZCAubGV0dGVyLXNlcXVlbmNlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbikgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5pbmNvcnJlY3QgLmxldHRlci1zZXF1ZW5jZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIHJlZCk7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgcmVkKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cblxuICAudmFsaWRhdGUtYnRuIHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAzcmVtO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1wYWQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgICAgdG9wOiAtMC4yNXJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgLy8gJi5ncmVlbiB7XG4gICAgICAvLyAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG4gICAgICAvLyB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgIHRvcDogLTAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNjb21wbGV0ZWQtbWVzc2FnZSB7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIEBtaXhpbiBtb2RhbC1kaWFsb2ctcmVkbyB7XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgIEBpbmNsdWRlIG1vZGFsLWRpYWxvZy1yZWRvO1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBsYW5kc2NhcGUsIHRydWUsIDY0MHB4KSB7XG4gICAgICBAaW5jbHVkZSBtb2RhbC1kaWFsb2ctcmVkbztcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udGVudCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDEyOSwgMTU0LCAwLjUpO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTQwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyLW1vdmlsLTIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXItMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTQwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLCBsYW5kc2NhcGUsIHRydWUsIDk2MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG5zLW1vZGFsIHtcbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgbGFuZHNjYXBlLCB0cnVlLCA2NDBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sIGxhbmRzY2FwZSwgdHJ1ZSwgODAwcHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIlIDMyJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAmLm9ubHlvbmUge1xuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLCBsYW5kc2NhcGUsIHRydWUsIDgwMHB4KSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIGxhbmRzY2FwZSwgdHJ1ZSwgNjQwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLCBsYW5kc2NhcGUsIHRydWUsIDgwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b24tcGFkO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuI3dhcm5pbmctbWVzc2FnZSxcbiNpbWFnZS1tb2RhbCB7XG4gIC5jbG9zZSB7XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiNpbWFnZS1tb2RhbCB7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5jbG9zZSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgc29mdC1ncmVlbik7XG4gICAgb3BhY2l0eTogMTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgd2lkdGg6IDU1JTtcbiAgICB9XG4gIH1cbiAgLm1vZGFsLWJvZHkge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIHNvZnQtZ3JlZW4pO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGVzY3JpcHRpb24taHRtbCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm93bC1yZWZyZXNoIHtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5vd2wtbG9hZGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCBcIi4vcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5cbiRjb2xvcl9tYXA6IChcbiAgYmx1ZTogIzAwODA5YSxcbiAgc29mdC1ncmVlbi1vbGQ6ICM5YWQ2NDQsXG4gIHNvZnQtZ3JlZW46ICM4MWIwM2UsXG4gIHByb2dyZXNzLWdyZWVuOiAjMzhkNDg1LFxuICBkYXJrLWdyZWVuOiAjMDA3MjJlLFxuICBncmF5OiAjZWJlZmY1LFxuICBncmF5ZXI6ICNlNmU3ZTgsXG4gIHRhYi1ncmF5OiAjY2NjY2NjLFxuICBmb3JtLWdyYXk6ICNjZWQ0ZGEsXG4gIGRhcmstZ3JheTogIzkwOTA5MCxcbiAgZGFya2llLWdyYXk6ICM4MjdmN2YsXG4gIGRhcmtlc3QtZ3JheTogIzYyNjI2MixcbiAgcmVkOiAjZjUzMDMwLFxuKTtcblxuLy8gei1pbmRleFxuJHotaW5kZXgtaGlnaGVyOiA0O1xuXG4lcGFkZGluZy1jb250cyB7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKG1lZGl1bSwgbGFuZHNjYXBlLCB0cnVlLCA4MDBweCkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG4gIH1cbn1cblxuLy8gR2VuZXJhbHNcbiVoMSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS42NXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxufVxuJWgzNCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4lcCB7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxufVxuQG1peGluIGJ1dHRvbi1wYWQge1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMHJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIG1pbi13aWR0aDogMTFyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC44NXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE5MDBweCkge1xuICAgIG1pbi13aWR0aDogMTJyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWl4aW4gc2hhcmVkLWJ0bi1jb25mcygpIHtcbiAgbWluLXdpZHRoOiA4cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmLFxuICAmW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5jYW5jZWwtYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAmOmZvY3VzLFxuICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuXG4gICAgJi5pbmFjdGl2ZSxcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6ICRjYW5jZWwtZ3JheTtcblxuICAgICAgJi5pbmFjdGl2ZSxcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9wbGFjZWhvbGRlcnMnO1xuXG46Om5nLWRlZXAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JfbWFwLCBncmF5KTtcbn1cbi5uYi10aGVtZS1kZWZhdWx0ICoge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4vL1xuaDF7XG4gICAgQGV4dGVuZCAlaDE7XG59XG5oMywgaDQge1xuICAgIEBleHRlbmQgJWgzNDtcbn1cbnAsIGJ1dHRvbiwgYSwgbGksIGxhYmVsIHtcbiAgICBAZXh0ZW5kICVwO1xufVxuXG5AbWl4aW4gb24tbWVzc2FnZSB7IFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOjY0MHB4KSB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IGZsZXgtd3JhcDogd3JhcDsgfVxufVxuXG5AbWl4aW4gYnRuLXJpZ2h0ZWQge1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgIFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAmLmNhbmNlbC1idG4ge1xuICAgICAgICBib3JkZXItY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmluYWN0aXZlLCAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogJGNhbmNlbC1ncmF5O1xuXG4gICAgICAgICAgICAmLmluYWN0aXZlLCAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cbiAgICAgICAgICAgIFxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsbGFuZHNjYXBlLHRydWUsNjQwcHgpIHsgd2lkdGg6IGF1dG87IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLHBvcnRyYWl0KSB7IHdpZHRoOiBhdXRvOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLXBhZDsgXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07ICAgICAgICAgICAgICAgICBcbiAgICB9IFxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=e-learning-module-detail-module-detail-module-es5.js.map