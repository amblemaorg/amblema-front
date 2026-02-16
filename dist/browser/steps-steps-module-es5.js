(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["steps-steps-module"], {
    /***/
    "AmIL":
    /*!*******************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps.component.ts ***!
      \*******************************************************************/

    /*! exports provided: StepsComponent */

    /***/
    function AmIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepsComponent", function () {
        return StepsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_steps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./steps.component.html */
      "sOvX");
      /* harmony import */


      var _steps_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./steps.component.scss */
      "wx8+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "e1JD");
      /* harmony import */


      var _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/steps/steps.service */
      "OR82");
      /* harmony import */


      var _store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../store/states/e-learning/user.state */
      "HQy9");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../store/actions/steps/project.actions */
      "/J+G");
      /* harmony import */


      var _store_states_steps_project_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../store/states/steps/project.state */
      "04Jp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _general_steps_general_steps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./general-steps/general-steps.component */
      "r9gT");
      /* harmony import */


      var src_app_store_actions_e_learning_learning_modules_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/store/actions/e-learning/learning-modules.actions */
      "sy2/");

      var StepsComponent = /*#__PURE__*/function () {
        function StepsComponent(stepsService, store, route, router) {
          _classCallCheck(this, StepsComponent);

          this.stepsService = stepsService;
          this.store = store;
          this.route = route;
          this.router = router;
          this.fillCounter = 0;
          this.isTest = false;
          this.activeStep = 0;
          this.curriculumPending = false;
          this.project_id = "";
          this.user_id = "";
          this.user_type = "";
          this.canOrganizationConfirm = true; // approval button which confirms to create PECA

          this.statesLoaded = false;
          this.munsLoaded = false;
          this.stepsProgress = [0, 0, 0, 0]; // general, sponsor, coordinator, school

          this.enabledTabs = false;
          this.idsAlreadyIterated = [];
          this.generalSteps = [];
          this.sponsorSteps = [];
          this.coordinatorSteps = [];
          this.schoolSteps = [];
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        }

        _createClass(StepsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (!this.munsLoaded) this.subscription.add(this.stepsService.getMunicipalities().subscribe(function (_ref) {
              var res = _ref.records;
              _this.theMunicialities = res;
              _this.munsLoaded = true; // const theStates_ = /* this.theStates && this.theStates.length ? [...this.theStates] :  */null;
              // setTimeout(() => {
              //   this.theStates = theStates_;
              // });

              _this.callStates();
            }));
            this.subscription.add(this.stepsService.enableTab.subscribe(function (res) {
              _this.enabledTabs = res;
            }));
            this.subscription.add(this.stepsService.goToMods.subscribe(function (res) {
              _this.goToModules();
            }));

            if (!this.isTest) {
              this.subscription.add(this.selected_project_id$.subscribe(function (res) {
                if (res) {
                  _this.project_id = res;

                  if (!_this.stepsService.areStepsCalled()) {
                    _this.fetchingSteps = true;

                    _this.subscription.add(_this.store.dispatch(new _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateStepsProgress"](_this.project_id)).subscribe(function (res) {
                      _this.stepsService.callSteps(true);

                      _this.enabledTabs = true;
                      _this.fetchingSteps = false;
                    }));

                    _this.store.dispatch(new src_app_store_actions_e_learning_learning_modules_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateModulesTotal"]());
                  }
                }
              }));
              this.subscription.add(this.user_id$.subscribe(function (res) {
                if (res) _this.user_id = res;
              }));
              this.subscription.add(this.user_type$.subscribe(function (res) {
                if (res) _this.user_type = res;
              }));
              this.subscription.add(this.project_steps$.subscribe(function (res) {
                if (res.steps.length > 0) {
                  _this.fillCounter++;

                  if (_this.fillCounter == 2) {
                    // updating steps to be shown if case one of them got deleted in bds
                    _this.generalSteps = [];
                    _this.sponsorSteps = [];
                    _this.coordinatorSteps = [];
                    _this.schoolSteps = [];
                  }

                  res.steps.forEach(function (record) {
                    var step_ = Object.assign(Object.assign({}, record), {
                      checklist: _this.getChecks(record.checklist),
                      sending: false
                    });
                    var stepRequireApproval = step_.approvalType === "3";
                    var stepIsNotApproved = step_.status !== "3";

                    if (stepRequireApproval && stepIsNotApproved) {
                      var _step_ = step_,
                          approvalHistory = _step_.approvalHistory,
                          hasDate = _step_.hasDate,
                          hasChecklist = _step_.hasChecklist,
                          hasUpload = _step_.hasUpload;

                      if (approvalHistory.length > 0) {
                        var _approvalHistory$data = approvalHistory[approvalHistory.length - 1].data,
                            stepDate = _approvalHistory$data.stepDate,
                            stepChecklist = _approvalHistory$data.stepChecklist,
                            stepUploadedFile = _approvalHistory$data.stepUploadedFile;
                        step_ = Object.assign(Object.assign({}, step_), {
                          date: hasDate && stepDate ? stepDate : null,
                          checklist: hasChecklist && stepChecklist ? stepChecklist : [],
                          uploadedFile: hasUpload && stepUploadedFile && stepUploadedFile.url ? stepUploadedFile : null
                        });
                      }
                    }

                    step_.isForm = step_.devName.toLowerCase().includes("fill") && step_.devName.toLowerCase().includes("form") ? true : false;

                    if (step_.isForm) {
                      if (step_.devName == "sponsorFillCoordinatorForm" || step_.devName == "schoolFillCoordinatorForm") step_.type = 2;else if (step_.devName == "coordinatorFillSponsorForm" || step_.devName == "schoolFillSponsorForm") step_.type = 3;else step_.type = 4;
                    }

                    step_.send = step_.devName == "coordinatorSendCurriculum" ? true : false;

                    if (step_.send && !_this.curriculumPending && step_.status != "3") {
                      _this.curriculumPending = true;
                    }

                    step_.goMods = step_.devName == "corrdinatorCompleteTrainingModules" ? true : false;

                    if (step_.status != "3" && step_.devName != "amblemaConfirmation") {
                      _this.canOrganizationConfirm = false;
                    }

                    switch (step_.tag) {
                      case "2":
                        var ind2 = _this.coordinatorSteps.findIndex(function (st) {
                          return st.id === step_.id;
                        });

                        if (ind2 >= 0) _this.coordinatorSteps[ind2] = step_;else _this.coordinatorSteps.push(step_);
                        break;

                      case "3":
                        var ind3 = _this.sponsorSteps.findIndex(function (st) {
                          return st.id === step_.id;
                        });

                        if (ind3 >= 0) _this.sponsorSteps[ind3] = step_;else _this.sponsorSteps.push(step_);
                        break;

                      case "4":
                        var ind4 = _this.schoolSteps.findIndex(function (st) {
                          return st.id === step_.id;
                        });

                        if (ind4 >= 0) _this.schoolSteps[ind4] = step_;else _this.schoolSteps.push(step_);
                        break;

                      default:
                        var ind1 = _this.generalSteps.findIndex(function (st) {
                          return st.id === step_.id;
                        });

                        if (ind1 >= 0) _this.generalSteps[ind1] = step_;else _this.generalSteps.push(step_);
                        break;
                    }
                  }); //Setting progress bar

                  _this.stepsProgress[0] = +res.general;
                  _this.stepsProgress[1] = +res.sponsor;
                  _this.stepsProgress[2] = +res.coordinator;
                  _this.stepsProgress[3] = +res.school;
                }
              }));
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
            this.theStates = null;
            this.theMunicialities = null;
          }
        }, {
          key: "callStates",
          value: function callStates() {
            var _this2 = this;

            if (!this.statesLoaded) this.subscription.add(this.stepsService.getStates().subscribe(function (_ref2) {
              var res = _ref2.records;
              _this2.theStates = null;
              setTimeout(function () {
                _this2.theStates = res;
                _this2.statesLoaded = true;

                _this2.generalStepsRef.toArray().map(function (tab) {
                  tab.fillResidenceInfo({
                    states: _toConsumableArray(_this2.theStates),
                    municipalities: _toConsumableArray(_this2.theMunicialities)
                  });
                });
              });
            }));
          }
        }, {
          key: "updateSteps",
          value: function updateSteps(p_i) {
            var _this3 = this;

            this.store.dispatch(new _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateStepsProgress"](p_i)).subscribe(function (res) {
              _this3.enabledTabs = true;
            });
          }
        }, {
          key: "switchStep",
          value: function switchStep(num, e) {
            this.activeStep = num;
            this.generalStepsRef.toArray().map(function (tab) {
              tab.resetTimesLoadedVideo();
            });
          }
        }, {
          key: "getChecks",
          value: function getChecks(ch) {
            var checks = [];
            ch.forEach(function (chh) {
              checks.push(Object.assign({}, chh));
            });
            return checks;
          }
        }, {
          key: "enablingModsBtn",
          value: function enablingModsBtn() {
            var enable = false;
            this.user_type$.subscribe(function (res) {
              enable = res == "0" || res == "1" || res == "2";
            });
            return enable;
          }
        }, {
          key: "goToModules",
          value: function goToModules() {
            this.router.navigate(["previous-steps/modules"]);
          }
        }, {
          key: "goToPECA",
          value: function goToPECA() {
            this.router.navigate(["peca/datos-escuela", {
              comesFromPreviousSteps: true
            }]);
          }
        }]);

        return StepsComponent;
      }();

      StepsComponent.ctorParameters = function () {
        return [{
          type: _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_5__["StepsService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }];
      };

      StepsComponent.propDecorators = {
        generalStepsRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ["generalStep", {
            read: _general_steps_general_steps_component__WEBPACK_IMPORTED_MODULE_11__["GeneralStepsComponent"]
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_6__["UserState"].user_projects)], StepsComponent.prototype, "userProjects$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_6__["UserState"].user_type)], StepsComponent.prototype, "user_type$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_e_learning_user_state__WEBPACK_IMPORTED_MODULE_6__["UserState"].user_id)], StepsComponent.prototype, "user_id$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_steps_project_state__WEBPACK_IMPORTED_MODULE_9__["StepsState"].selected_proj_id)], StepsComponent.prototype, "selected_project_id$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_states_steps_project_state__WEBPACK_IMPORTED_MODULE_9__["StepsState"].all_needed)], StepsComponent.prototype, "project_steps$", void 0);
      StepsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-steps",
        template: _raw_loader_steps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StepsComponent);
      /***/
    },

    /***/
    "BQR6":
    /*!*******************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/general-steps/general-steps.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function BQR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1 {\n  font-size: x-large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h1 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h1 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h1 {\n    font-size: xx-large !important;\n  }\n}\nh3, h4 {\n  font-size: large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: xx-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n::ng-deep body {\n  background: #ebeff5;\n}\n.nb-theme-default * {\n  font-family: \"Montserrat\" !important;\n}\n.steps-accordion * {\n  color: #00809a;\n}\n.steps-accordion p {\n  text-align: justify;\n}\n.steps-accordion .card {\n  border: none;\n  /* &:first-child {\n        .card-link ::ng-deep fa-icon svg{\n            transform: rotate(180deg);\n        }\n    } */\n}\n.steps-accordion .card .card-header {\n  border: none;\n  background: transparent;\n}\n.steps-accordion .card .card-header .card-link {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  border-bottom: 1px solid;\n  padding: 0 0.25rem 0 0.5rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-header .card-link {\n    padding: 0 0.5rem 0 0.75rem;\n  }\n}\n.steps-accordion .card .card-header .card-link .texts {\n  flex: 1;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-header .card-link .texts {\n    display: flex;\n  }\n}\n.steps-accordion .card .card-header .card-link .arrow {\n  flex: 0 0 1.5rem;\n  text-align: right;\n}\n.steps-accordion .card .card-header .card-link .bar {\n  display: none;\n  border-left: 2px solid;\n  height: 1.5rem;\n  margin-bottom: 0.25rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-header .card-link .bar {\n    display: inline-block;\n  }\n}\n.steps-accordion .card .card-header .card-link .desktop-only {\n  display: none;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-header .card-link .desktop-only {\n    display: inline-block;\n  }\n}\n.steps-accordion .card .card-header .card-link:hover {\n  color: #00809a;\n}\n.steps-accordion .card .card-header .card-link fa-icon ::ng-deep svg {\n  transition: transform 0.5s;\n}\n.steps-accordion .card .card-header .card-link[aria-expanded=true] fa-icon ::ng-deep svg, .steps-accordion .card .card-header .card-link.active-arrow fa-icon ::ng-deep svg {\n  transform: rotate(180deg);\n}\n.steps-accordion .card .card-header .card-link[aria-expanded=false] fa-icon ::ng-deep svg {\n  transform: rotate(0deg);\n}\n.steps-accordion .card .card-header .card-link.not-enabled {\n  opacity: 0.75;\n}\n.steps-accordion .card .card-body {\n  padding: 1rem 1.75rem;\n  position: relative;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body {\n    padding: 1rem;\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body {\n    padding: 1rem;\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body {\n    width: 94%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  .steps-accordion .card .card-body {\n    width: 96%;\n  }\n}\n.steps-accordion .card .card-body input[type=date]:after,\n.steps-accordion .card .card-body ::ng-deep input[type=date]:after {\n  top: 0.65rem;\n}\n.steps-accordion .card .card-body .toast {\n  border-color: #f35f5f;\n  position: absolute;\n  z-index: -1;\n  right: 0;\n  bottom: 5%;\n  transition: bottom 0.5s;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .toast {\n    max-width: 30rem;\n  }\n}\n.steps-accordion .card .card-body .toast button {\n  color: #f35f5f;\n}\n.steps-accordion .card .card-body .toast button:focus {\n  outline: none;\n}\n.steps-accordion .card .card-body .toast p {\n  padding: 0.25rem 1rem;\n  color: #f35f5f;\n}\n.steps-accordion .card .card-body .toast.show {\n  z-index: 1;\n  bottom: 20%;\n}\n.steps-accordion .card .card-body .mobile-only {\n  color: #00809a;\n  margin-bottom: 1rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .mobile-only {\n    display: none;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .mobile-only {\n    margin-right: auto;\n    width: 100%;\n  }\n}\n.steps-accordion .card .card-body .inactive {\n  opacity: 0.65;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .first-p {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .first-p {\n    width: 100%;\n  }\n}\n.steps-accordion .card .card-body .hide-upload-btn {\n  display: none;\n}\n.steps-accordion .card .card-body .form-group {\n  width: 100%;\n}\n.steps-accordion .card .card-body .form-group input {\n  display: inline-block !important;\n  width: 100%;\n}\n@media screen and (orientation: landscape) {\n  .steps-accordion .card .card-body .form-group input {\n    width: auto;\n    margin-left: 1rem;\n  }\n}\n@media screen and (orientation: portrait) and (min-width: 480px) {\n  .steps-accordion .card .card-body .form-group input {\n    width: auto;\n    margin-left: 1rem;\n  }\n}\n.steps-accordion .card .card-body .form-group input.date-in-step {\n  position: relative;\n}\n.steps-accordion .card .card-body .form-group .field-invalid {\n  font-size: smaller;\n  -webkit-margin-before: 0.45rem;\n          margin-block-start: 0.45rem;\n  color: #f53030;\n  display: none;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .form-group .field-invalid {\n    font-size: medium;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .form-group .field-invalid {\n    font-size: larger;\n  }\n}\n.steps-accordion .card .card-body .form-group .not-enabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n.steps-accordion .card .card-body .form-group .form-control:focus {\n  box-shadow: none;\n  border-color: #00809a;\n}\n.steps-accordion .card .card-body .form-group .date-not-valid {\n  border-color: #f53030;\n  color: #f53030;\n}\n.steps-accordion .card .card-body .form-group .date-not-valid + .field-alerts .field-invalid {\n  display: inline-block;\n}\n.steps-accordion .card .card-body status-selector {\n  width: 100%;\n}\n@media screen and (min-width: 640px) and (orientation: landscape) {\n  .steps-accordion .card .card-body status-selector ::ng-deep .form-group {\n    width: 25rem;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body status-selector ::ng-deep .form-group {\n    width: 25rem;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body status-selector ::ng-deep .form-group {\n    width: 25rem;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 640px) and (orientation: landscape) {\n  .steps-accordion .card .card-body status-selector ::ng-deep label {\n    margin-right: 1rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body status-selector ::ng-deep label {\n    margin-right: 1rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body status-selector ::ng-deep label {\n    margin-right: 1rem;\n  }\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select {\n  flex: 1;\n  border-color: #00809a;\n  color: #00809a;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select .ng-dropdown-panel {\n  z-index: 3;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select .ng-dropdown-panel .scroll-host {\n  left: -0.75rem;\n  top: 0.35rem;\n  background: #fff;\n  border: solid #00809a;\n  border-width: 0 1px 1px;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select .ng-dropdown-panel .scroll-host .scrollable-content {\n  padding: 0 1rem;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select.ng-select-opened .ng-select-container {\n  z-index: 3;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select .ng-arrow-wrapper {\n  width: 1rem;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select .ng-arrow-wrapper .ng-arrow {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-color: #00809a;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  top: -0.15rem;\n}\n.steps-accordion .card .card-body status-selector ::ng-deep .ng-select.readonly {\n  opacity: 0.65;\n}\n.steps-accordion .card .card-body .video-container {\n  margin-bottom: 1rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .video-container {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .video-container {\n    width: 100%;\n  }\n}\n.steps-accordion .card .card-body .video ::ng-deep iframe {\n  width: 100%;\n  height: 50vw;\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .video ::ng-deep iframe {\n    height: 42vw;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .video ::ng-deep iframe {\n    height: 45vw;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .video ::ng-deep iframe {\n    height: 36vw;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .video ::ng-deep iframe {\n    height: 33vw;\n    margin-top: 1rem;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body a.btn {\n    margin-top: 0 !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body a.btn {\n    margin-top: 0 !important;\n  }\n}\n.steps-accordion .card .card-body .btn {\n  background: #00809a;\n  border-color: #00809a;\n  width: 100%;\n  color: #fff;\n}\n.steps-accordion .card .card-body .btn span {\n  color: #fff;\n}\n.steps-accordion .card .card-body .btn.cancel-btn {\n  border-color: #9fa9bd;\n  background-color: #9fa9bd;\n  color: #fff;\n}\n.steps-accordion .card .card-body .btn:focus {\n  box-shadow: none;\n}\n.steps-accordion .card .card-body .btn:hover {\n  background: #fff;\n  color: #00809a;\n}\n.steps-accordion .card .card-body .btn:hover span {\n  color: #00809a;\n}\n.steps-accordion .card .card-body .btn:hover.inactive, .steps-accordion .card .card-body .btn:hover[disabled] {\n  background-color: #00809a;\n  color: #fff;\n  cursor: default;\n}\n.steps-accordion .card .card-body .btn:hover.inactive span, .steps-accordion .card .card-body .btn:hover[disabled] span {\n  color: #fff;\n}\n.steps-accordion .card .card-body .btn:hover.cancel-btn {\n  background-color: #fff;\n  color: #9fa9bd;\n}\n.steps-accordion .card .card-body .btn:hover.cancel-btn.inactive, .steps-accordion .card .card-body .btn:hover.cancel-btn[disabled] {\n  background-color: #9fa9bd;\n  color: #fff;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .btn {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    border: 2px solid #00809a;\n    margin-bottom: 2rem !important;\n    margin-right: 1.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    padding: 0.45rem 0.5rem !important;\n    width: 10rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    min-width: 11rem !important;\n    width: auto !important;\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    min-width: 12rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .btn {\n    margin-right: 0;\n  }\n}\n.steps-accordion .card .card-body .btn.has-several {\n  margin-top: 1.25rem !important;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .btn.has-several {\n    margin-top: 0 !important;\n    margin-left: 2.25rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .btn.has-several {\n    margin-top: 0 !important;\n    margin-left: 2.25rem;\n  }\n}\n.steps-accordion .card .card-body .btn.hidebtn {\n  display: none;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .attachfile {\n    margin-top: 0 !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .attachfile {\n    margin-top: 0 !important;\n  }\n}\n.steps-accordion .card .card-body .checks-form {\n  width: 100%;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .steps-accordion .card .card-body .checks-form {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .steps-accordion .card .card-body .checks-form {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n.steps-accordion .card .card-body .checks-form .checks-btn-container {\n  width: 100%;\n  text-align: right;\n}\n.steps-accordion .card .card-body .checks-form.has-siblings {\n  margin-top: 2rem;\n}\n.steps-accordion .card .card-body .checkbox {\n  flex: 100%;\n  /* Customize the label (the container) */\n}\n.steps-accordion .card .card-body .checkbox .check-container {\n  display: block;\n  position: relative;\n  padding-left: 3rem;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n}\n.steps-accordion .card .card-body .checkbox .check-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n  /* Show the checkmark when checked */\n}\n.steps-accordion .card .card-body .checkbox .check-container input:checked ~ .checkmark:after {\n  display: block;\n}\n.steps-accordion .card .card-body .checkbox .check-container .checkmark {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  height: 1.75rem;\n  width: 1.75rem;\n  background-color: transparent;\n  border: 1px solid #cccccc;\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Style the checkmark/indicator */\n}\n.steps-accordion .card .card-body .checkbox .check-container .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.steps-accordion .card .card-body .checkbox .check-container .checkmark:after {\n  left: 0.5rem;\n  top: 0.15rem;\n  width: 0.65rem;\n  height: 1.05rem;\n  border: solid #fff;\n  border-width: 0 4px 4px 0;\n  transform: rotate(45deg);\n}\n.steps-accordion .card .card-body .checkbox .check-container input:checked ~ .checkmark {\n  background-color: #00809a;\n  border: 1px solid #00809a;\n}\n.steps-accordion .card .card-body .severals-btn {\n  width: 100%;\n  text-align: right;\n  margin-top: 1.2rem !important;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .steps-accordion .card .card-body .severals-btn {\n    margin-top: -0.5rem !important;\n  }\n}\n.steps-accordion .card .card-body .has-form {\n  width: 100%;\n}\n.steps-accordion .comments-rejection .color-red {\n  color: red;\n}\n@media screen and (min-width: 1000px) {\n  .steps-accordion .comments-rejection {\n    max-width: 50%;\n  }\n}\n::ng-deep .ngx-datepicker-container .ngx-datepicker-calendar-container {\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyYWwtc3RlcHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcGxhY2Vob2xkZXJzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJldmlvdXMtc3RlcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUN5QkE7RUFDRSw2QkFBQTtBRHRCRjtBRTJEUTtFRHRDUjtJQUdJLDZCQUFBO0VEcEJGO0FBQ0Y7QUVzRFE7RUR0Q1I7SUFNSSw2QkFBQTtFRGxCRjtBQUNGO0FFaURRO0VEdENSO0lBU0ksOEJBQUE7RURoQkY7QUFDRjtBQ2tCQTtFQUNFLDJCQUFBO0FEZkY7QUV3Q1E7RUQxQlI7SUFHSSw2QkFBQTtFRGJGO0FBQ0Y7QUVtQ1E7RUQxQlI7SUFNSSw4QkFBQTtFRFhGO0FBQ0Y7QUU4QlE7RUQxQlI7SUFTSSw2QkFBQTtFRFRGO0FBQ0Y7QUV5QlE7RUQxQlI7SUFZSSw0QkFBQTtFRFBGO0FBQ0Y7QUVvQlE7RUQxQlI7SUFlSSw2QkFBQTtFRExGO0FBQ0Y7QUVlUTtFRFJSO0lBRUksMkJBQUE7RURKRjtBQUNGO0FFU1E7RURSUjtJQUtJLDZCQUFBO0VERkY7QUFDRjtBRUlRO0VEUlI7SUFRSSw0QkFBQTtFREFGO0FBQ0Y7QUVEUTtFRFJSO0lBV0ksNEJBQUE7RURFRjtBQUNGO0FFTlE7RURS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cG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vcHJldmlvdXMtc3RlcHMuY29tcG9uZW50LnNjc3NcIjtcblxuLnN0ZXBzLWFjY29yZGlvbiB7XG4gICoge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICB9XG5cbiAgcCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5jYXJkLWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICBwYWRkaW5nOiAwIDAuMjVyZW0gMCAwLjVyZW07XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMC43NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0cyB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgZmxleDogMCAwIDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAuYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGVza3RvcC1vbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmEtaWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgJlthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSxcbiAgICAgICAgJi5hY3RpdmUtYXJyb3cge1xuICAgICAgICAgIGZhLWljb24gOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSB7XG4gICAgICAgICAgZmEtaWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubm90LWVuYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgLy8gY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIC5jYXJkLWxpbmsgOjpuZy1kZWVwIGZhLWljb24gc3Zne1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgIH0gKi9cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBAbWl4aW4gY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICBAaW5jbHVkZSBjYXJkLWJvZHk7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICBAaW5jbHVkZSBjYXJkLWJvZHk7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2ODBweCkge1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgICAgIDo6bmctZGVlcCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogMC42NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudG9hc3Qge1xuICAgICAgICBib3JkZXItY29sb3I6ICRyZWQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAwLjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC41cztcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogJHJlZDtcblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudG9hc3Quc2hvdyB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvdHRvbTogMjAlO1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLW9ubHkge1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgfVxuXG4gICAgICAuZmlyc3QtcCB7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oaWRlLXVwbG9hZC1idG4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZGF0ZS1pbi1zdGVwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZmllbGQtaW52YWxpZCB7XG4gICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC40NXJlbTtcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCByZWQpO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5vdC1lbmFibGVkIHtcbiAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtbm90LXZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgcmVkKTtcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCByZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtbm90LXZhbGlkICsgLmZpZWxkLWFsZXJ0cyAuZmllbGQtaW52YWxpZCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXR1cy1zZWxlY3RvciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIDo6bmctZGVlcCAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgQG1peGluIHNlbGVjdG9yLWdyb3VwIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdG9yLWdyb3VwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgc2VsZWN0b3ItZ3JvdXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGluY2x1ZGUgc2VsZWN0b3ItZ3JvdXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIDo6bmctZGVlcCBsYWJlbCB7XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6Om5nLWRlZXAgLm5nLXNlbGVjdCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG5cbiAgICAgICAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgICAgICAgei1pbmRleDogMztcblxuICAgICAgICAgICAgLnNjcm9sbC1ob3N0IHtcbiAgICAgICAgICAgICAgbGVmdDogLTAuNzVyZW07XG4gICAgICAgICAgICAgIHRvcDogMC4zNXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweDtcblxuICAgICAgICAgICAgICAuc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm5nLXNlbGVjdC1vcGVuZWQgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmctYXJyb3ctd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcblxuICAgICAgICAgICAgLm5nLWFycm93IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdG9wOiAtMC4xNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnJlYWRvbmx5IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnZpZGVvIHtcbiAgICAgICAgOjpuZy1kZWVwIGlmcmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHZ3O1xuXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sIGxhbmRzY2FwZSwgdHJ1ZSwgODAwcHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogNDJ2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIGhlaWdodDogNDV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIGhlaWdodDogMzN2dztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEuYnRuIHtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJ0biB7XG4gICAgICAgIEBpbmNsdWRlIGJ0bi1yaWdodGVkO1xuXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaGFzLXNldmVyYWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW0gIWltcG9ydGFudDtcblxuICAgICAgICAgIEBtaXhpbiBoYXMtc2V2ZXJhbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgaGFzLXNldmVyYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBoYXMtc2V2ZXJhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmhpZGVidG4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hdHRhY2hmaWxlIHtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNoZWNrcy1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBtaXhpbiBjaGVja3MtZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIEBpbmNsdWRlIGNoZWNrcy1mb3JtO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgICAgICAgQGluY2x1ZGUgY2hlY2tzLWZvcm07XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tzLWJ0bi1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICYuaGFzLXNpYmxpbmdzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2hlY2tib3gge1xuICAgICAgICBmbGV4OiAxMDAlO1xuICAgICAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDo2NDBweCkgeyBmbGV4OiAwIDAgNTAlOyB9XG4gICAgICAgIC8vIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwscG9ydHJhaXQpIHsgZmxleDogMCAwIDUwJTsgfVxuICAgICAgICAvKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuICAgICAgICAuY2hlY2stY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAgIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuXG4gICAgICAgICAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4gICAgICAgICAgICAmOmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4gICAgICAgICAgLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJGNvbG9yX21hcCwgdGFiLWdyYXkpO1xuXG4gICAgICAgICAgICAvLyBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyB0b3A6IC0wLjI1cmVtOyB9XG5cbiAgICAgICAgICAgIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgIHRvcDogMC4xNXJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDAuNjVyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMS4wNXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgICAgICAgIC8vICY6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCB0YWItZ3JheSk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgJiBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNldmVyYWxzLWJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcm1zXG4gICAgICAuaGFzLWZvcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29tbWVudHMtcmVqZWN0aW9uIHtcbiAgICAuY29sb3ItcmVkIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLy8gbmctZGF0ZXBpY2tlclxuICAubmd4LWRhdGVwaWNrZXItY29udGFpbmVyIC5uZ3gtZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4kY29sb3JfbWFwOiAoXG4gIGJsdWU6ICMwMDgwOWEsXG4gIHNvZnQtZ3JlZW4tb2xkOiAjOWFkNjQ0LFxuICBzb2Z0LWdyZWVuOiAjODFiMDNlLFxuICBwcm9ncmVzcy1ncmVlbjogIzM4ZDQ4NSxcbiAgZGFyay1ncmVlbjogIzAwNzIyZSxcbiAgZ3JheTogI2ViZWZmNSxcbiAgZ3JheWVyOiAjZTZlN2U4LFxuICB0YWItZ3JheTogI2NjY2NjYyxcbiAgZm9ybS1ncmF5OiAjY2VkNGRhLFxuICBkYXJrLWdyYXk6ICM5MDkwOTAsXG4gIGRhcmtpZS1ncmF5OiAjODI3ZjdmLFxuICBkYXJrZXN0LWdyYXk6ICM2MjYyNjIsXG4gIHJlZDogI2Y1MzAzMCxcbik7XG5cbi8vIHotaW5kZXhcbiR6LWluZGV4LWhpZ2hlcjogNDtcblxuJXBhZGRpbmctY29udHMge1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sIGxhbmRzY2FwZSwgdHJ1ZSwgODAwcHgpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xuICB9XG59XG5cbi8vIEdlbmVyYWxzXG4laDEge1xuICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiVoMzQge1xuICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuJXAge1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtaXhpbiBidXR0b24tcGFkIHtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogMC40NXJlbSAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTByZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBtaW4td2lkdGg6IDExcmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuODVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBtaW4td2lkdGg6IDEycmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1peGluIHNoYXJlZC1idG4tY29uZnMoKSB7XG4gIG1pbi13aWR0aDogOHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJixcbiAgJltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYuY2FuY2VsLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcblxuICAgICYuaW5hY3RpdmUsXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAmLmNhbmNlbC1idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiAkY2FuY2VsLWdyYXk7XG5cbiAgICAgICYuaW5hY3RpdmUsXG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3Njc3MvcGxhY2Vob2xkZXJzJztcblxuOjpuZy1kZWVwIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgZ3JheSk7XG59XG4ubmItdGhlbWUtZGVmYXVsdCAqIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLy9cbmgxe1xuICAgIEBleHRlbmQgJWgxO1xufVxuaDMsIGg0IHtcbiAgICBAZXh0ZW5kICVoMzQ7XG59XG5wLCBidXR0b24sIGEsIGxpLCBsYWJlbCB7XG4gICAgQGV4dGVuZCAlcDtcbn1cblxuQG1peGluIG9uLW1lc3NhZ2UgeyBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDo2NDBweCkgeyBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyBmbGV4LXdyYXA6IHdyYXA7IH1cbn1cblxuQG1peGluIGJ0bi1yaWdodGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICRjYW5jZWwtZ3JheTtcblxuICAgICAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG4gICAgICAgICAgICBcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLGxhbmRzY2FwZSx0cnVlLDY0MHB4KSB7IHdpZHRoOiBhdXRvOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyB3aWR0aDogYXV0bzsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1wYWQ7IFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtOyAgICAgICAgICAgICAgICAgXG4gICAgfSBcbn0iXX0= */";
      /***/
    },

    /***/
    "E2Xt":
    /*!***************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps-forms/steps-forms.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function E2Xt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1 {\n  font-size: x-large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h1 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h1 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h1 {\n    font-size: xx-large !important;\n  }\n}\nh3, h4 {\n  font-size: large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: xx-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n::ng-deep body {\n  background: #ebeff5;\n}\n.nb-theme-default * {\n  font-family: \"Montserrat\" !important;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  form {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    align-items: baseline;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) and (min-width: 992px) and (orientation: landscape) {\n  form {\n    justify-content: space-between;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  form {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    align-items: baseline;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) and (min-width: 992px) and (orientation: landscape) {\n  form {\n    justify-content: space-between;\n  }\n}\nform h6 {\n  color: #00809a;\n  font-weight: bold;\n  margin-right: auto;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form h6 {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n}\nform h6:not(:first-child) {\n  margin-top: 2rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  form h6:not(:first-child) {\n    margin-top: 1rem;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  form h6:not(:first-child) {\n    margin-top: 1rem;\n  }\n}\nform .two-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: baseline;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form .two-wrapper {\n    justify-content: space-between;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  form .two-wrapper {\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  form .two-wrapper {\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 768px) and (orientation: portrait) {\n  form .two-wrapper {\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form .two-wrapper {\n    flex: 0 0 46.5%;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  form .two-wrapper {\n    flex: 0 0 47.25%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  form .two-wrapper {\n    flex: 0 0 47.75%;\n  }\n}\nform .two-wrapper .form-group {\n  width: 100%;\n}\nform .form-group {\n  position: relative;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  form .form-group {\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  form .form-group {\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 768px) and (orientation: portrait) {\n  form .form-group {\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form .form-group {\n    flex: 0 0 46.5%;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  form .form-group {\n    flex: 0 0 47.25%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  form .form-group {\n    flex: 0 0 47.75%;\n  }\n}\nform .form-group .date-container {\n  width: 100%;\n  position: relative;\n}\nform .form-group .field-empty,\nform .form-group .field-invalid,\nform .form-group .field-max-len-over,\nform .form-group .field-min-len-under {\n  font-size: smaller;\n  -webkit-margin-before: 0.45rem;\n          margin-block-start: 0.45rem;\n  color: #f53030;\n  display: none;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  form .form-group .field-empty,\nform .form-group .field-invalid,\nform .form-group .field-max-len-over,\nform .form-group .field-min-len-under {\n    font-size: medium;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  form .form-group .field-empty,\nform .form-group .field-invalid,\nform .form-group .field-max-len-over,\nform .form-group .field-min-len-under {\n    font-size: larger;\n  }\n}\nform .form-group .not-enabled {\n  color: #6c757d;\n  pointer-events: none;\n}\nform .form-group label {\n  margin-bottom: 0.2rem;\n  width: 100%;\n}\nform .form-group .form-control {\n  font-size: 0.9rem;\n}\nform .form-group .form-control.form-date-placeholder {\n  cursor: default;\n  background-color: #fff;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  border: none;\n  width: 80%;\n  padding-bottom: 0 !important;\n  height: auto;\n}\nform .form-group .form-control[type=date]:focus ~ .form-control.form-date-placeholder {\n  display: none;\n}\nform .form-group .form-control:focus {\n  box-shadow: none;\n  border-color: #00809a;\n}\nform .form-group .ng-touched.ng-invalid.not-empty,\nform .form-group .ng-touched.ng-invalid,\nform .form-group .date-not-valid {\n  border-color: #f53030;\n  color: #f53030;\n}\nform .form-group .ng-touched.ng-invalid.not-empty.not-has-max-or-min + .field-alerts .field-invalid,\nform .form-group .ng-touched.ng-invalid:not(.not-empty) + .field-alerts .field-empty,\nform .form-group .date-not-valid + .field-alerts .field-invalid,\nform .form-group .ng-touched.ng-invalid.max-len-over + .field-alerts .field-max-len-over,\nform .form-group .ng-touched.ng-invalid.min-len-under + .field-alerts .field-min-len-under {\n  display: inline-block;\n}\nform .form-group ::ng-deep .ng-dropdown-panel {\n  z-index: 3;\n}\nform .form-group ::ng-deep .ng-dropdown-panel .scroll-host {\n  left: -0.75rem;\n  top: 0.35rem;\n  background: #fff;\n  border: solid #ced4da;\n  border-width: 0 1px 1px;\n}\nform .form-group ::ng-deep .ng-dropdown-panel .scroll-host .scrollable-content {\n  padding: 0 1rem;\n}\nform .form-group ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked small,\nform .form-group ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked a {\n  font-weight: bold;\n}\nform .form-group ::ng-deep .ng-select.ng-select-opened .ng-select-container {\n  z-index: 3;\n}\nform .form-group ::ng-deep .ng-select .ng-select-container .ng-placeholder {\n  color: #6c757d;\n}\nform .form-group ::ng-deep .ng-select .ng-select-container.ng-has-value .ng-placeholder {\n  display: none;\n}\nform .form-group ::ng-deep .ng-select.ng-untouched.ng-invalid .ng-select-container .ng-placeholder {\n  display: block;\n}\nform .form-group ::ng-deep .ng-select.ng-untouched.ng-valid .ng-select-container .ng-placeholder {\n  display: none;\n}\nform .form-group ::ng-deep .ng-select.ng-touched.ng-pristine .ng-select-container .ng-placeholder, form .form-group ::ng-deep .ng-select.ng-touched.ng-invalid .ng-select-container .ng-placeholder {\n  display: block;\n}\nform .form-group ::ng-deep .ng-select.ng-select-filtered .ng-select-container .ng-placeholder {\n  display: none !important;\n}\nform .form-group ::ng-deep .ng-select .ng-clear-wrapper .ng-clear {\n  color: #ced4da;\n}\nform .form-group ::ng-deep .ng-select .ng-arrow-wrapper {\n  width: 1rem;\n}\nform .form-group ::ng-deep .ng-select .ng-arrow-wrapper .ng-arrow {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-color: #ced4da;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  top: -0.15rem;\n}\nform.form-disabled .form-group .form-control {\n  border-color: #ced4da !important;\n}\nform.form-disabled .form-group .form-control.form-date-placeholder {\n  background-color: #e9ecef !important;\n}\nform.form-disabled .form-group .form-control.form-date-picker {\n  color: #6c757d !important;\n}\nform.form-disabled .form-group .field-alerts {\n  display: none;\n}\nform.form-disabled .form-group ::ng-deep ng-select {\n  background-color: #e9ecef !important;\n}\nform .input-group select {\n  border-color: #ced4da;\n}\nform .input-group select:focus {\n  outline: none;\n}\nform .input-group ::ng-deep .ng-select-container {\n  overflow: visible;\n}\nform .input-group ::ng-deep .ng-arrow-wrapper {\n  width: 0.8rem;\n  left: 0.2rem;\n}\nform .input-group .field-alerts {\n  width: 100%;\n}\nform button {\n  background: #00809a;\n  border-color: #00809a;\n  width: 100%;\n  color: #fff;\n  color: #fff;\n}\nform button span {\n  color: #fff;\n}\nform button.cancel-btn {\n  border-color: #9fa9bd;\n  background-color: #9fa9bd;\n  color: #fff;\n}\nform button:focus {\n  box-shadow: none;\n}\nform button:hover {\n  background: #fff;\n  color: #00809a;\n}\nform button:hover span {\n  color: #00809a;\n}\nform button:hover.inactive, form button:hover[disabled] {\n  background-color: #00809a;\n  color: #fff;\n  cursor: default;\n}\nform button:hover.inactive span, form button:hover[disabled] span {\n  color: #fff;\n}\nform button:hover.cancel-btn {\n  background-color: #fff;\n  color: #9fa9bd;\n}\nform button:hover.cancel-btn.inactive, form button:hover.cancel-btn[disabled] {\n  background-color: #9fa9bd;\n  color: #fff;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  form button {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  form button {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form button {\n    border: 2px solid #00809a;\n    margin-bottom: 2rem !important;\n    margin-right: 1.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 992px) and (orientation: landscape) {\n  form button {\n    padding: 0.45rem 0.5rem !important;\n    width: 10rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  form button {\n    min-width: 11rem !important;\n    width: auto !important;\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  form button {\n    min-width: 12rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  form button {\n    margin-right: 0;\n    margin-left: auto;\n  }\n}\nform button.disabled {\n  cursor: not-allowed;\n}\nform button:focus, form button:active:focus {\n  box-shadow: none !important;\n}\nform button:active {\n  background: #fff !important;\n  color: #00809a !important;\n}\nform .map-container {\n  width: 100%;\n}\nform .map-container #school-address-map {\n  height: 45vh;\n  min-height: 20rem;\n}\nform .map-container .map-problem {\n  color: #00809a;\n  border: 1px solid #f53030;\n  padding: 1rem;\n  border-radius: 0.25rem;\n}\n::ng-deep .form-group .ngx-datepicker-container .ngx-datepicker-input {\n  width: 100% !important;\n  background-color: transparent;\n}\n::ng-deep ng-datepicker.not-enabled .ngx-datepicker-container .ngx-datepicker-input {\n  background-color: #e9ecef;\n}\n::ng-deep .form-group .ngx-datepicker-container .ngx-datepicker-calendar-container {\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0ZXBzLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3BsYWNlaG9sZGVycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByZXZpb3VzLXN0ZXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FDeUJBO0VBQ0UsNkJBQUE7QUR0QkY7QUUyRFE7RUR0Q1I7SUFHSSw2QkFBQTtFRHBCRjtBQUNGO0FFc0RRO0VEdENSO0lBTUksNkJBQUE7RURsQkY7QUFDRjtBRWlEUTtFRHRDUjtJQVNJLDhCQUFBO0VEaEJGO0FBQ0Y7QUNrQkE7RUFDRSwyQkFBQTtBRGZGO0FFd0NRO0VEMUJSO0lBR0ksNkJBQUE7RURiRjtBQUNGO0FFbUNRO0VEMUJSO0lBTUksOEJBQUE7RURYRjtBQUNGO0FFOEJRO0VEMUJSO0lBU0ksNkJBQUE7RURURjtBQUNGO0FFeUJRO0VEMUJSO0lBWUksNEJBQUE7RURQRjtBQUNGO0FFb0JRO0VEMUJSO0lBZUksNkJBQUE7RURMRjtBQUNGO0FFZVE7RURSUjtJQUVJLDJCQUFBO0VESkY7QUFDRjtBRVNRO0VEUlI7SUFLSSw2QkFBQTtFREZGO0FBQ0Y7QUVJUTtFRFJSO0lBUUksNEJBQUE7RURBRjtBQUNGO0FFRFE7RURSUjtJQVdJLDRCQUFBO0VERUY7QUFDRjtBRU5RO0VEUlI7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QUFBO0VEc1dGO0FBQ0Y7QUV4WFE7RUYwTE47SUN0S0UsMkJBQUE7RUR3V0Y7QUFDRjtBRTdYUTtFRjBMTjtJQUtJLGVBQUE7SUFDQSxpQkFBQTtFQWtNSjtBQUNGO0FBaE1JO0VBQ0UsbUJBQUE7QUFrTU47QUFoTUk7RUFFRSwyQkFBQTtBQWlNTjtBQS9MSTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUFpTU47QUE3TEU7RUFDRSxXQUFBO0FBK0xKO0FBN0xJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBK0xOO0FBNUxJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBOExOO0FBdkxFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQTBMSjtBQXZMRTtFQUNFLHlCQUFBO0FBeUxKO0FBdExFO0VBQ0UsYUFBQTtBQXdMSiIsImZpbGUiOiJzdGVwcy1mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9wcmV2aW91cy1zdGVwcy5jb21wb25lbnQuc2Nzc1wiO1xuXG5mb3JtIHtcbiAgQG1peGluIGZvcm0tbWl4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgQGluY2x1ZGUgZm9ybS1taXg7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICBAaW5jbHVkZSBmb3JtLW1peDtcbiAgfVxuXG4gIGg2IHtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuICBoNjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtaXhpbiBmb3JtLWZsZXhpbmdzIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKG1lZGl1bSwgcG9ydHJhaXQpIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZsZXg6IDAgMCA0Ni41JTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSkge1xuICAgICAgZmxleDogMCAwIDQ3LjI1JTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTY4MHB4KSB7XG4gICAgICBmbGV4OiAwIDAgNDcuNzUlO1xuICAgIH1cbiAgfVxuXG4gIC50d28td3JhcHBlciB7XG4gICAgQGluY2x1ZGUgZm9ybS1taXg7XG4gICAgQGluY2x1ZGUgZm9ybS1mbGV4aW5ncztcblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgZm9ybS1mbGV4aW5ncztcblxuICAgIC5kYXRlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuZmllbGQtZW1wdHksXG4gICAgLmZpZWxkLWludmFsaWQsXG4gICAgLmZpZWxkLW1heC1sZW4tb3ZlcixcbiAgICAuZmllbGQtbWluLWxlbi11bmRlciB7XG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNDVyZW07XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCByZWQpO1xuICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5vdC1lbmFibGVkIHtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICAgJi5mb3JtLWRhdGUtcGxhY2Vob2xkZXIge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICZbdHlwZT1cImRhdGVcIl06Zm9jdXMgfiAuZm9ybS1jb250cm9sLmZvcm0tZGF0ZS1wbGFjZWhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgIH1cblxuICAgIC5uZy10b3VjaGVkLm5nLWludmFsaWQubm90LWVtcHR5LFxuICAgIC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4gICAgLmRhdGUtbm90LXZhbGlkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCByZWQpO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgcmVkKTtcbiAgICB9XG5cbiAgICAubmctdG91Y2hlZC5uZy1pbnZhbGlkLm5vdC1lbXB0eS5ub3QtaGFzLW1heC1vci1taW5cbiAgICAgICsgLmZpZWxkLWFsZXJ0c1xuICAgICAgLmZpZWxkLWludmFsaWQsXG4gICAgLm5nLXRvdWNoZWQubmctaW52YWxpZDpub3QoLm5vdC1lbXB0eSkgKyAuZmllbGQtYWxlcnRzIC5maWVsZC1lbXB0eSxcbiAgICAuZGF0ZS1ub3QtdmFsaWQgKyAuZmllbGQtYWxlcnRzIC5maWVsZC1pbnZhbGlkLFxuICAgIC5uZy10b3VjaGVkLm5nLWludmFsaWQubWF4LWxlbi1vdmVyICsgLmZpZWxkLWFsZXJ0cyAuZmllbGQtbWF4LWxlbi1vdmVyLFxuICAgIC5uZy10b3VjaGVkLm5nLWludmFsaWQubWluLWxlbi11bmRlciArIC5maWVsZC1hbGVydHMgLmZpZWxkLW1pbi1sZW4tdW5kZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgei1pbmRleDogMztcblxuICAgICAgLnNjcm9sbC1ob3N0IHtcbiAgICAgICAgbGVmdDogLTAuNzVyZW07XG4gICAgICAgIHRvcDogMC4zNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBtYXAtZ2V0KCRjb2xvcl9tYXAsIGZvcm0tZ3JheSk7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4O1xuXG4gICAgICAgIC5zY3JvbGxhYmxlLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgICAmLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgICAgc21hbGwsXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIDo6bmctZGVlcCAubmctc2VsZWN0IHtcbiAgICAgICYubmctc2VsZWN0LW9wZW5lZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICB9XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIH1cbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyLm5nLWhhcy12YWx1ZSAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLm5nLXVudG91Y2hlZCB7XG4gICAgICAgICYubmctaW52YWxpZCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICYubmctdmFsaWQgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLm5nLXRvdWNoZWQubmctcHJpc3RpbmUsXG4gICAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5uZy1zZWxlY3QtZmlsdGVyZWQgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubmctY2xlYXItd3JhcHBlciAubmctY2xlYXIge1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBmb3JtLWdyYXkpO1xuICAgICAgfVxuICAgICAgLm5nLWFycm93LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMXJlbTtcblxuICAgICAgICAubmctYXJyb3cge1xuICAgICAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGZvcm0tZ3JheSk7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0b3A6IC0wLjE1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5mb3JtLWRpc2FibGVkIC5mb3JtLWdyb3VwIHtcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NlZDRkYSAhaW1wb3J0YW50O1xuXG4gICAgICAmLmZvcm0tZGF0ZS1wbGFjZWhvbGRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWYgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICYuZm9ybS1kYXRlLXBpY2tlciB7XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5maWVsZC1hbGVydHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgOjpuZy1kZWVwIG5nLXNlbGVjdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBzZWxlY3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGZvcm0tZ3JheSk7XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLm5nLWFycm93LXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDAuOHJlbTtcbiAgICAgIGxlZnQ6IDAuMnJlbTtcbiAgICB9XG4gICAgLmZpZWxkLWFsZXJ0cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIEBpbmNsdWRlIGJ0bi1yaWdodGVkO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmOmFjdGl2ZS8qICwgJjpob3ZlciAqLyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICNzY2hvb2wtYWRkcmVzcy1tYXAge1xuICAgICAgaGVpZ2h0OiA0NXZoO1xuICAgICAgbWluLWhlaWdodDogMjByZW07XG4gICAgfVxuXG4gICAgLm1hcC1wcm9ibGVtIHtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkY29sb3JfbWFwLCByZWQpO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC8vIG5nLWRhdGVwaWNrZXJcbiAgLmZvcm0tZ3JvdXAgLm5neC1kYXRlcGlja2VyLWNvbnRhaW5lciAubmd4LWRhdGVwaWNrZXItaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBuZy1kYXRlcGlja2VyLm5vdC1lbmFibGVkIC5uZ3gtZGF0ZXBpY2tlci1jb250YWluZXIgLm5neC1kYXRlcGlja2VyLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICB9XG5cbiAgLmZvcm0tZ3JvdXAgLm5neC1kYXRlcGlja2VyLWNvbnRhaW5lciAubmd4LWRhdGVwaWNrZXItY2FsZW5kYXItY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi9yZXNwb25zaXZlXCI7XG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuJGNvbG9yX21hcDogKFxuICBibHVlOiAjMDA4MDlhLFxuICBzb2Z0LWdyZWVuLW9sZDogIzlhZDY0NCxcbiAgc29mdC1ncmVlbjogIzgxYjAzZSxcbiAgcHJvZ3Jlc3MtZ3JlZW46ICMzOGQ0ODUsXG4gIGRhcmstZ3JlZW46ICMwMDcyMmUsXG4gIGdyYXk6ICNlYmVmZjUsXG4gIGdyYXllcjogI2U2ZTdlOCxcbiAgdGFiLWdyYXk6ICNjY2NjY2MsXG4gIGZvcm0tZ3JheTogI2NlZDRkYSxcbiAgZGFyay1ncmF5OiAjOTA5MDkwLFxuICBkYXJraWUtZ3JheTogIzgyN2Y3ZixcbiAgZGFya2VzdC1ncmF5OiAjNjI2MjYyLFxuICByZWQ6ICNmNTMwMzAsXG4pO1xuXG4vLyB6LWluZGV4XG4kei1pbmRleC1oaWdoZXI6IDQ7XG5cbiVwYWRkaW5nLWNvbnRzIHtcbiAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLCBsYW5kc2NhcGUsIHRydWUsIDgwMHB4KSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcbiAgfVxufVxuXG4vLyBHZW5lcmFsc1xuJWgxIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG59XG4laDM0IHtcbiAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiVwIHtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWl4aW4gYnV0dG9uLXBhZCB7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgbWluLXdpZHRoOiAxMXJlbSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMC40NXJlbSAwLjg1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTkwMHB4KSB7XG4gICAgbWluLXdpZHRoOiAxMnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtaXhpbiBzaGFyZWQtYnRuLWNvbmZzKCkge1xuICBtaW4td2lkdGg6IDhyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICYsXG4gICZbZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLmNhbmNlbC1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG5cbiAgICAmLmluYWN0aXZlLFxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogJGNhbmNlbC1ncmF5O1xuXG4gICAgICAmLmluYWN0aXZlLFxuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3BsYWNlaG9sZGVycyc7XG5cbjo6bmctZGVlcCBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGdyYXkpO1xufVxuLm5iLXRoZW1lLWRlZmF1bHQgKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi8vXG5oMXtcbiAgICBAZXh0ZW5kICVoMTtcbn1cbmgzLCBoNCB7XG4gICAgQGV4dGVuZCAlaDM0O1xufVxucCwgYnV0dG9uLCBhLCBsaSwgbGFiZWwge1xuICAgIEBleHRlbmQgJXA7XG59XG5cbkBtaXhpbiBvbi1tZXNzYWdlIHsgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6NjQwcHgpIHsgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLHBvcnRyYWl0KSB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgZmxleC13cmFwOiB3cmFwOyB9XG59XG5cbkBtaXhpbiBidG4tcmlnaHRlZCB7XG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW5hY3RpdmUsICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmNhbmNlbC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAkY2FuY2VsLWdyYXk7XG5cbiAgICAgICAgICAgICYuaW5hY3RpdmUsICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuICAgICAgICAgICAgXG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCxsYW5kc2NhcGUsdHJ1ZSw2NDBweCkgeyB3aWR0aDogYXV0bzsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgd2lkdGg6IGF1dG87IH1cbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tcGFkOyBcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTsgICAgICAgICAgICAgICAgIFxuICAgIH0gXG59Il19 */";
      /***/
    },

    /***/
    "Eqvy":
    /*!****************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps.module.ts ***!
      \****************************************************************/

    /*! exports provided: StepsModule */

    /***/
    function Eqvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepsModule", function () {
        return StepsModule;
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


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "Nv++");
      /* harmony import */


      var _steps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./steps-routing.module */
      "SpLn");
      /* harmony import */


      var _steps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./steps.component */
      "AmIL");
      /* harmony import */


      var _general_steps_general_steps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./general-steps/general-steps.component */
      "r9gT");
      /* harmony import */


      var _steps_forms_steps_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./steps-forms/steps-forms.component */
      "ZiER");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @nguniversal/common */
      "zlXd");
      /* harmony import */


      var ng2_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-datepicker */
      "gF1S");
      /* harmony import */


      var ng2_datepicker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_12__);

      var StepsModule = /*#__PURE__*/_createClass(function StepsModule() {
        _classCallCheck(this, StepsModule);
      });

      StepsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_steps_component__WEBPACK_IMPORTED_MODULE_5__["StepsComponent"], _general_steps_general_steps_component__WEBPACK_IMPORTED_MODULE_6__["GeneralStepsComponent"], _general_steps_general_steps_component__WEBPACK_IMPORTED_MODULE_6__["StatusSelectorComponent"], _steps_forms_steps_forms_component__WEBPACK_IMPORTED_MODULE_7__["StepsFormsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _steps_routing_module__WEBPACK_IMPORTED_MODULE_4__["StepsRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserTransferStateModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__["TransferHttpCacheModule"], ng2_datepicker__WEBPACK_IMPORTED_MODULE_12__["NgDatepickerModule"]]
      })], StepsModule);
      /***/
    },

    /***/
    "LfC0":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/previous-steps/steps/general-steps/general-steps.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LfC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [id]=\"'steps-accordion' + mode\" class=\"steps-accordion\">\n  <div class=\"card\" *ngFor=\"let step of steps; index as i\">\n    <div class=\"card-header\">\n      <a\n        class=\"card-link\"\n        data-toggle=\"collapse\"\n        [href]=\"'#step' + i + '-' + mode\"\n        [class.active-arrow]=\"getCollapsed(i, mode)\"\n        (click)=\"videoShower(step)\"\n      >\n        <div class=\"texts\">\n          <h6 class=\"font-weight-bold\">{{ step.name }}</h6>\n          <div class=\"bar mx-3\"></div>\n          <h6 class=\"desktop-only\">\n            Estatus: {{ getStatusName(step.status) }}\n          </h6>\n        </div>\n        <div class=\"arrow\"><fa-icon [icon]=\"arrow\"></fa-icon></div>\n      </a>\n    </div>\n    <div\n      [id]=\"'step' + i + '-' + mode\"\n      class=\"collapse\"\n      [class.show]=\"getCollapsed(i, mode)\"\n      [attr.data-parent]=\"'#steps-accordion' + mode\"\n    >\n      <div class=\"card-body\">\n        <h6 class=\"mobile-only\">\n          <b>Estatus:</b> {{ getStatusName(step.status) }} fafa\n        </h6>\n\n        <status-selector\n          *ngIf=\"step.approvalType == '4'\"\n          [step]=\"step\"\n          [index]=\"i\"\n          [mode]=\"mode\"\n          [isReadOnly]=\"isSelectorReadOnly()\"\n          (approvalMethodCallerEmitter)=\"approvalMethodCaller($event)\"\n        >\n        </status-selector>\n\n        <p *ngIf=\"step.hasText && !step.isForm\" class=\"first-p\">\n          {{ step.text }}\n        </p>\n\n        <ng-container *ngIf=\"!step.isForm; else formOpt\">\n          <div *ngIf=\"step.hasDate\" class=\"form-group\">\n            <label for=\"datefill\"> Fecha: </label>\n            <div class=\"date-container\">\n              <ng-datepicker\n                name=\"datefill\"\n                [options]=\"datePickerOptions\"\n                [class.not-enabled]=\"\n                  (!isAdmin() && (compareMode() || step.status == '3')) ||\n                  !enableActions\n                \"\n                class=\"calendar-date-icon date-in-step\"\n                [(ngModel)]=\"step.date\"\n                (ngModelChange)=\"controlDate($event, step)\"\n              >\n                <!--\n                    [value]=\"getDateFrmt(step)\"\n                    [disabled]=\"(!isAdmin() && (compareMode() || step.status=='3') ) || !enableActions\"\n                  -->\n              </ng-datepicker>\n              <!--\n                  <input\n                    type=\"date\"\n                    data-format='{\"day\":\"numeric\",\"month\":\"numeric\",\"year\":\"numeric\"}'\n                    name=\"datefill\"\n                    [class.not-enabled]=\"(!isAdmin() && (compareMode() || step.status=='3') ) || !enableActions\"\n                    class=\"form-control calendar-date-icon date-in-step\"\n                    placeholder=\"Introduzca una fecha\"\n                    [value]=\"getDateFrmt(step)\"\n                    (change)=\"controlDate($event,step)\"\n                    [disabled]=\"(!isAdmin() && (compareMode() || step.status=='3') ) || !enableActions\"\n                  />\n                -->\n            </div>\n            <div class=\"field-alerts\">\n              <div class=\"field-invalid\">\n                ¡Debe tener una fecha valida, mayor a la de hoy!\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"step.hasVideo && showThisVideo\" class=\"video-container\">\n            <div\n              *ngIf=\"step.video && step.video.url\"\n              class=\"video\"\n              [innerHTML]=\"getVideo(step.video.url, step.id)\"\n            ></div>\n          </div>\n\n          <!-- todo: APPROVE BUTTON FOR ADMIN ------------------------------------------------>\n          <button\n            *ngIf=\"\n              isAdmin() &&\n              step.approvalType == '1' &&\n              !showSeveralsButton(step) &&\n              step.status == '1' &&\n              showConditioned(step)\n            \"\n            class=\"btn btn-primary text-decoration-none py-2 px-4\"\n            (click)=\"approvalMethod(step, i, mode)\"\n            [disabled]=\"\n              (compareMode() && !isAdmin()) ||\n              step.sending ||\n              isNotConfirmable(step) ||\n              !enableActions ||\n              step.status == '8'\n            \"\n          >\n            <span\n              *ngIf=\"step.sending\"\n              class=\"spinner-grow spinner-grow-sm\"\n            ></span\n            >{{ !step.sending ? \"Aprobar\" : \"Aprobando..\" }}\n          </button>\n          <!-- todo:................................................................................. -->\n\n          <!-- (click)=\"( (!isAdmin() && (compareMode() || step.status=='3') ) || !enableActions)? $event.preventDefault():null\"\n            [class.inactive]=\"(!isAdmin() && (compareMode() || step.status=='3') ) || !enableActions\" -->\n          <a\n            *ngIf=\"step.hasFile\"\n            [href]=\"sanitizeFile(step.file.url)\"\n            target=\"_blank\"\n            [download]=\"step.file.name\"\n            class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n            [class.has-several]=\"isAdmin() && step.approvalType == '1'\"\n            (click)=\"isSelectorReadOnly() ? $event.preventDefault() : null\"\n            [class.inactive]=\"isSelectorReadOnly()\"\n          >\n            Descargar archivo\n          </a>\n          <div\n            *ngIf=\"step.hasUpload\"\n            class=\"d-inline\"\n            [id]=\"'upload-btn-' + i + '-' + mode\"\n            #uploadFile\n          >\n            <input\n              class=\"hide-upload-btn\"\n              [id]=\"uploadFile.id + '0'\"\n              (change)=\"fileMngr($event, i)\"\n              type=\"file\"\n              accept=\"application/pdf\"\n            />\n            <!-- ,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.ms-powerpoint -->\n            <button\n              [id]=\"uploadFile.id + '1'\"\n              (click)=\"clickUpload(uploadFile); $event.preventDefault()\"\n              class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1 attachfile\"\n              [class.has-several]=\"\n                (isAdmin() && step.approvalType == '1') || step.hasFile\n              \"\n              [disabled]=\"\n                (compareMode() && !isAdmin()) ||\n                step.sending ||\n                step.status == '3' ||\n                !enableActions\n              \"\n            >\n              <!-- [class.hidebtn]=\"step.status=='2'\" -->\n              {{\n                step.uploadedFile && step.uploadedFile.name.length > 0\n                  ? shortenName(step.uploadedFile.name)\n                  : \"Adjuntar archivo\"\n              }}\n            </button>\n            <button\n              [class.d-none]=\"!canUserSee(step)\"\n              [id]=\"uploadFile.id + '2'\"\n              (click)=\"approvalMethod(step, i, mode); $event.preventDefault()\"\n              class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1 has-several\"\n              [class.hidebtn]=\"\n                step.send ||\n                (step.status == '1' && !step.uploadedFile) ||\n                step.status == '3' ||\n                showSeveralsButton(step)\n              \"\n              [disabled]=\"\n                (compareMode() && !isAdmin()) ||\n                (!step.uploadedFile && step.status == '1') ||\n                step.sending ||\n                !enableActions\n              \"\n              [class.cancel-btn]=\"step.status != '1'\"\n            >\n              <span\n                *ngIf=\"step.sending\"\n                class=\"spinner-grow spinner-grow-sm\"\n              ></span\n              >{{\n                !step.sending\n                  ? step.status == \"1\"\n                    ? \"Enviar\"\n                    : \"Cancelar solicitud\"\n                  : step.status == \"1\"\n                  ? \"Enviando..\"\n                  : \"Cancelando..\"\n              }}\n            </button>\n          </div>\n          <button\n            *ngIf=\"step.send && step.status != '3' && !showSeveralsButton(step)\"\n            class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n            [class.has-several]=\"step.hasFile || step.hasUpload\"\n            (click)=\"approvalMethod(step, i, mode)\"\n            [disabled]=\"\n              (compareMode() && !isAdmin()) ||\n              (!step.uploadedFile && step.status == '1') ||\n              step.sending ||\n              !enableActions\n            \"\n            [class.cancel-btn]=\"step.status != '1'\"\n          >\n            <span\n              *ngIf=\"step.sending\"\n              class=\"spinner-grow spinner-grow-sm\"\n            ></span\n            >{{\n              !step.sending\n                ? step.status == \"1\"\n                  ? \"Enviar currículum Vitae\"\n                  : \"Cancelar solicitud\"\n                : step.status == \"1\"\n                ? \"Enviando..\"\n                : \"Cancelando..\"\n            }}\n          </button>\n\n          <!-- ? GO LEARNING MODULES BUTTON -->\n          <button\n            *ngIf=\"step.goMods\"\n            class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n            (click)=\"goToMods()\"\n            [disabled]=\"\n              (!isAdmin() && (compareMode() || curriculumPending)) ||\n              !enableActions\n            \"\n            [title]=\"\n              isAdmin()\n                ? ''\n                : compareMode()\n                ? ''\n                : curriculumPending\n                ? 'Aún no has aprobado el paso de currículo'\n                : ''\n            \"\n          >\n            Ir a los módulos\n          </button>\n\n          <form\n            *ngIf=\"step.hasChecklist && step.checklist.length > 0\"\n            class=\"checks-form\"\n            (ngSubmit)=\"approvalMethod(step, i, mode)\"\n            [class.has-siblings]=\"\n              step.hasVideo || step.hasUpload || step.hasFile || step.hasDate\n            \"\n          >\n            <div\n              class=\"checkbox\"\n              *ngFor=\"let check of step.checklist; index as j\"\n            >\n              <label class=\"check-container\"\n                >{{ check.name }}\n                <input\n                  type=\"checkbox\"\n                  [checked]=\"check.checked\"\n                  (change)=\"checkChange($event, i, j)\"\n                  [disabled]=\"\n                    (compareMode() && !isAdmin()) ||\n                    step.sending ||\n                    step.status == '3' ||\n                    !enableActions\n                  \"\n                />\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n\n            <div class=\"checks-btn-container\">\n              <button\n                *ngIf=\"\n                  step.hasChecklist &&\n                  step.checklist.length > 0 &&\n                  !showSeveralsButton(step)\n                \"\n                class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n                [disabled]=\"\n                  (compareMode() && !isAdmin()) ||\n                  step.sending ||\n                  step.status == '3' ||\n                  !enableChecksBtn(step) ||\n                  !enableActions ||\n                  step.status == '8'\n                \"\n              >\n                <span\n                  *ngIf=\"step.sending\"\n                  class=\"spinner-grow spinner-grow-sm\"\n                ></span>\n                {{ !step.sending ? \"Guardar\" : \"Guardando..\" }}\n              </button>\n            </div>\n          </form>\n\n          <div class=\"severals-btn mt-2\">\n            <button\n              *ngIf=\"showSeveralsButton(step)\"\n              class=\"btn btn-primary text-decoration-none py-2 px-4\"\n              [disabled]=\"\n                (compareMode() && !isAdmin()) ||\n                step.sending ||\n                step.status == '3' ||\n                disableSeveralsButton(step) ||\n                !enableActions ||\n                step.status == '8'\n              \"\n              (click)=\"approvalMethod(step, i, mode)\"\n            >\n              <span\n                *ngIf=\"step.sending\"\n                class=\"spinner-grow spinner-grow-sm\"\n              ></span\n              >{{ !step.sending ? \"Guardar\" : \"Guardando..\" }}\n            </button>\n          </div>\n        </ng-container>\n        <ng-template #formOpt>\n          <div *ngIf=\"step.type == 2\" class=\"has-form\">\n            <app-steps-forms\n              #stepFormTemplate\n              [who]=\"'coordinator'\"\n              [project_id]=\"project_id\"\n              [status]=\"step.status\"\n              [disable]=\"\n                (compareMode() && !isAdmin()) ||\n                step.status == '3' ||\n                !enableActions\n              \"\n              [setStates]=\"setStates\"\n              [setMuns]=\"setMuns\"\n              (emitMessage)=\"callToaster($event)\"\n              (emitUpdate)=\"updateEmitterFromForm($event)\"\n              [index]=\"i\"\n              [mode]=\"mode\"\n              [approvalHistory]=\"step.approvalHistory\"\n              [user_id]=\"user_id\"\n            ></app-steps-forms>\n          </div>\n          <div *ngIf=\"step.type == 3\" class=\"has-form\">\n            <app-steps-forms\n              #stepFormTemplate\n              [who]=\"'sponsor'\"\n              [project_id]=\"project_id\"\n              [status]=\"step.status\"\n              [disable]=\"\n                (compareMode() && !isAdmin()) ||\n                step.status == '3' ||\n                !enableActions\n              \"\n              [setStates]=\"setStates\"\n              [setMuns]=\"setMuns\"\n              (emitMessage)=\"callToaster($event)\"\n              (emitUpdate)=\"updateEmitterFromForm($event)\"\n              [index]=\"i\"\n              [mode]=\"mode\"\n              [approvalHistory]=\"step.approvalHistory\"\n              [user_id]=\"user_id\"\n            ></app-steps-forms>\n          </div>\n          <div *ngIf=\"step.type == 4\" class=\"has-form\">\n            <app-steps-forms\n              #stepFormTemplate\n              [who]=\"'school'\"\n              [project_id]=\"project_id\"\n              [status]=\"step.status\"\n              [disable]=\"\n                (compareMode() && !isAdmin()) ||\n                step.status == '3' ||\n                !enableActions\n              \"\n              [setStates]=\"setStates\"\n              [setMuns]=\"setMuns\"\n              (emitMessage)=\"callToaster($event)\"\n              (emitUpdate)=\"updateEmitterFromForm($event)\"\n              [index]=\"i\"\n              [mode]=\"mode\"\n              [approvalHistory]=\"step.approvalHistory\"\n              [user_id]=\"user_id\"\n            ></app-steps-forms>\n          </div>\n        </ng-template>\n\n        <!-- FAIL TOAST -->\n        <div [id]=\"'toast' + i + '-' + mode\" class=\"toast\">\n          <div class=\"toast-body\">\n            <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\">\n              &times;\n            </button>\n            <p class=\"mb-0\">{{ messageInToaster }}</p>\n          </div>\n        </div>\n\n        <!-- Comments -->\n\n        <ng-container *ngIf=\"getComments(step)\">\n          <p class=\"comments-rejection\">\n            <strong class=\"color-red\">Motivo de rechazo: </strong>\n            <span class=\"color-red\">{{ getComments(step) }}</span>\n          </p>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "SpLn":
    /*!************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: StepsRoutingModule */

    /***/
    function SpLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepsRoutingModule", function () {
        return StepsRoutingModule;
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


      var _steps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./steps.component */
      "AmIL");

      var routes = [{
        path: '',
        component: _steps_component__WEBPACK_IMPORTED_MODULE_3__["StepsComponent"]
      }];

      var StepsRoutingModule = /*#__PURE__*/_createClass(function StepsRoutingModule() {
        _classCallCheck(this, StepsRoutingModule);
      });

      StepsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StepsRoutingModule);
      /***/
    },

    /***/
    "ZiER":
    /*!*************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps-forms/steps-forms.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: EMAIL_PTTRN, LETTERS_PTTRN, LETTERS_NUMBERS_PTTRN, TEXT_PTTRN, NUMBER_PTTRN, VIDEO_PTTRN, StepsFormsComponent */

    /***/
    function ZiER(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EMAIL_PTTRN", function () {
        return EMAIL_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LETTERS_PTTRN", function () {
        return LETTERS_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LETTERS_NUMBERS_PTTRN", function () {
        return LETTERS_NUMBERS_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_PTTRN", function () {
        return TEXT_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMBER_PTTRN", function () {
        return NUMBER_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIDEO_PTTRN", function () {
        return VIDEO_PTTRN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepsFormsComponent", function () {
        return StepsFormsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_steps_forms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./steps-forms.component.html */
      "tZxA");
      /* harmony import */


      var _steps_forms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./steps-forms.component.scss */
      "E2Xt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/global.service */
      "4WDQ");
      /* harmony import */


      var _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/steps/steps.service */
      "OR82");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var EMAIL_PTTRN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
      var LETTERS_PTTRN = /^[a-z A-Zá-úÁ-Ú]*$/;
      var LETTERS_NUMBERS_PTTRN = "^[a-z A-Zá-úÁ-Ú0-9]*$";
      var TEXT_PTTRN = /^[a-z A-Zá-úÁ-Ú0-9._~:/?#\[\]@!\$&'"\(\)\*\+,;=]*$/;
      var NUMBER_PTTRN = /^[0-9]*$/;
      var VIDEO_PTTRN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

      var StepsFormsComponent = /*#__PURE__*/function () {
        function StepsFormsComponent(fb, stepsService, globals) {
          var _this4 = this;

          _classCallCheck(this, StepsFormsComponent);

          this.fb = fb;
          this.stepsService = stepsService;
          this.globals = globals;
          this.showMap = true;
          this.disable = false;
          this.setStates = [];
          this.setMuns = [];
          this.approvalHistory = [];
          this.emitMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.emitUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
          this.lat = 8.60831668; // Venezuela's middle latitude

          this.lng = -66.029011; // Venezuela's middle longitude

          this.disableOther = true;
          this.datePickerOptions = {
            minYear: 1950,
            maxYear: 2050,
            displayFormat: "DD/MM/YYYY",
            barTitleFormat: "MMMM YYYY",
            dayNamesFormat: "dd",
            firstCalendarDay: 0,
            //minDate: new Date(Date.now()),
            maxDate: new Date(Date.now()),
            barTitleIfEmpty: "Haga click para seleccionar una fecha",
            placeholder: "Seleccione una fecha",
            addClass: "form-control",
            addStyle: {},
            fieldId: "inputDate",
            useEmptyBarTitle: false
          };
          this.doc_type = [{
            id: "1",
            name: "J"
          }];
          this.addressZoneTypes = [{
            id: "1",
            name: "Sector"
          }, {
            id: "2",
            name: "Barrio"
          }, {
            id: "3",
            name: "Caserío"
          }];
          this.statesData = [];
          this.municipalitiesData = [];
          this.companyTypes = [{
            id: "0",
            name: "Otro"
          }, {
            id: "1",
            name: "Fábrica"
          }, {
            id: "2",
            name: "Tienda"
          }, {
            id: "3",
            name: "Negocio personal"
          }, {
            id: "4",
            name: "Hacienda"
          }];
          this.genders = [{
            id: "1",
            name: "Femenino"
          }, {
            id: "2",
            name: "Masculino"
          }];
          this.cardTypes = [{
            id: "1",
            name: "V"
          }, {
            id: "2",
            name: "J"
          }, {
            id: "3",
            name: "E"
          }];
          this.schoolTypes = [{
            id: "1",
            name: "Nacional"
          }, {
            id: "2",
            name: "Estadal"
          }, {
            id: "3",
            name: "Municipal"
          }];
          this.schoolShifts = [{
            id: "1",
            name: "Mañana"
          }, {
            id: "2",
            name: "Tarde"
          }, {
            id: "3",
            name: "Ambos"
          }];
          this.sponsorForm = this.fb.group({
            selectedDoc: ["2"],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]],
            rif: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            addressState: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressMunicipality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressStreet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressCity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            companyType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            companyOtherType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            contactFirstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            contactLastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            contactPhone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            contactEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]]
          });
          this.coordinatorForm = this.fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            birthdate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardType: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            homePhone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            addressState: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressMunicipality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressStreet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressCity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressHome: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            profession: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
          this.schoolForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]],
            code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_NUMBERS_PTTRN)]],
            addressState: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressMunicipality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressStreet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressCity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            schoolType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressZoneType: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressZone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            coordinate: this.fb.group({
              latitude: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              longitude: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            }),
            //
            principalFirstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            principalLastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            principalEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]],
            principalPhone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            //
            subPrincipalFirstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            subPrincipalLastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]],
            subPrincipalEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_PTTRN)]],
            subPrincipalPhone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            //
            nTeachers: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            nAdministrativeStaff: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            nLaborStaff: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            nStudents: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            nGrades: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            nSections: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]],
            schoolShift: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
          this.makingRequest = false;

          if (globals.isBrowser) {
            this.map = null;
            this.currentMarker = null; // this.mapSettings(this.lat, this.lng, 7);

            var initMap = function initMap() {
              if (google) {
                clearInterval(interval);

                _this4.mapSettings(_this4.lat, _this4.lng, 7);
              }
            };

            var interval = null;

            try {
              initMap();
            } catch (error) {
              interval = setInterval(function () {
                try {
                  initMap();
                } catch (error) {// TODO --
                }
              }, 2000);
            }
          }
        }

        _createClass(StepsFormsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.fillStates();
            this.fillMunicipalities();
            this.glbls = this.globals;

            if (this.who === "coordinator") {
              this.subscription.add(this.coordinatorForm.get("cardType").statusChanges.subscribe(function (res) {
                _this5.setLength("cardId", "cardType");
              }));
            }

            if (this.who === "sponsor") {
              this.subscription.add(this.sponsorForm.get("companyType").statusChanges.subscribe(function (res) {
                if (_this5.sponsorForm.get("companyType").value && _this5.sponsorForm.get("companyType").value === "0") {
                  _this5.sponsorForm.setControl("companyOtherType", _this5.fb.control(_this5.sponsorForm.get("companyOtherType").value, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)]));

                  _this5.disableOther = false;
                } else {
                  _this5.sponsorForm.setControl("companyOtherType", _this5.fb.control(_this5.sponsorForm.get("companyOtherType").value, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(LETTERS_PTTRN)));

                  _this5.sponsorForm.get("companyOtherType").reset();

                  _this5.disableOther = true;
                }
              }));
            }

            this.fillForm();

            if (this.who === "school") {
              this.subscription.add(this.schoolForm.get("name").statusChanges.subscribe(function (res) {
                if (_this5.currentMarker && _this5.schoolForm.get("name").value && _this5.schoolForm.get("name").value.length > 0) {
                  _this5.loadAllMarkers({
                    name: _this5.schoolForm.get("name").value,
                    coordinate: _this5.schoolForm.get("coordinate").value
                  });
                }
              }));
              this.subscription.add(this.schoolForm.get("addressMunicipality").statusChanges.subscribe(function (res) {
                if (_this5.schoolForm.get("addressMunicipality").value && _this5.schoolForm.get("addressMunicipality").value.length > 0) {
                  var addressData = _this5.municipalitiesData.filter(function (s) {
                    return s.id === _this5.schoolForm.get("addressMunicipality").value;
                  });

                  if (addressData.length > 0) {
                    _this5.mapPositioner(addressData[0].state.name, addressData[0].name);
                  }
                } else {
                  if (_this5.schoolmap && _this5.mapOptions) {
                    if (_this5.mapOptions.zoom != 7) {
                      var initMap = function initMap() {
                        if (google) {
                          clearInterval(interval);

                          _this5.mapSettings(_this5.lat, _this5.lng, 7);

                          _this5.mapInitializer();
                        }
                      };

                      var interval = null;

                      try {
                        initMap();
                      } catch (error) {
                        interval = setInterval(function () {
                          try {
                            initMap();
                          } catch (error) {// TODO --
                          }
                        }, 2000);
                      }
                    }
                  }
                }
              }));
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
            this.disableOther = true;
          } // MAP CONFS -------------------------------------------------------------------------------------------

        }, {
          key: "mapSettings",
          value: function mapSettings(lat, lng, zoom) {
            if (google) {
              this.googleLoaded = true;
              this.coordinates = new google.maps.LatLng(lat, lng);
              var mapOps = {
                center: this.coordinates,
                zoom: zoom
              };
              this.mapOptions = mapOps;
            }
          }
        }, {
          key: "mapInitializer",
          value: function mapInitializer() {
            var _this6 = this;

            var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (disabled) {
              this.mapOptions["disableDefaultUI"] = true;
              this.mapOptions["gestureHandling"] = "none";
            } else {
              if (this.mapOptions["disableDefaultUI"]) this.mapOptions["disableDefaultUI"] = false;
              if (this.mapOptions["gestureHandling"]) this.mapOptions["gestureHandling"] = "cooperative";
            }

            this.map = new google.maps.Map(this.schoolmap.nativeElement, this.mapOptions);

            if (!disabled) {
              google.maps.event.addListener(this.map, "click", function (e) {
                _this6.loadAllMarkers({
                  name: _this6.schoolForm.get("name").value && _this6.schoolForm.get("name").value.length > 0 ? _this6.schoolForm.get("name").value : "Escuela",
                  coordinate: {
                    latitude: e.latLng.lat(),
                    longitude: e.latLng.lng()
                  }
                });
              });
              this.geocoder = new google.maps.Geocoder();
            }

            if (this.currentMarker) this.currentMarker.setMap(this.map);
          }
        }, {
          key: "loadAllMarkers",
          value: function loadAllMarkers(data) {
            if (this.currentMarker) {
              this.currentMarker.setMap(null);
              this.currentMarker = null;
            }

            this.currentMarker = new google.maps.Marker({
              map: this.map,
              position: new google.maps.LatLng(data.coordinate.latitude, data.coordinate.longitude),
              label: data.name.substring(0, 1).toUpperCase(),
              title: data.name.toLowerCase() == "escuela" ? data.name : "Escuela: ".concat(data.name)
            });
            this.schoolForm.get("coordinate").setValue(data.coordinate);
            this.currentMarker.setMap(this.map);
          }
        }, {
          key: "mapPositioner",
          value: function mapPositioner(state, county) {
            var _this7 = this;

            // google maps geocoding
            var initMap = function initMap() {
              if (google) {
                clearInterval(interval);

                _this7.geocoder.geocode({
                  componentRestrictions: {
                    country: "Venezuela",
                    administrativeArea: state,
                    locality: county
                  }
                }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    if (results.length > 0) _this7.mapSettings(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 11);else _this7.mapSettings(_this7.lat, _this7.lng, 7);
                  } else {
                    switch (status) {
                      case "ZERO_RESULTS":
                        console.log("None result found, showing default map options");
                        break;

                      case "OVER_QUERY_LIMIT":
                        console.error("You are over your quota");
                        break;

                      case "REQUEST_DENIED":
                        console.error("Your site is unavailable to use geocoder");
                        break;

                      default:
                        console.error("Unknown server error");
                        break;
                    }

                    _this7.mapSettings(_this7.lat, _this7.lng, 7);
                  }

                  _this7.mapInitializer();
                });
              }
            };

            var interval = null;

            try {
              initMap();
            } catch (error) {
              interval = setInterval(function () {
                try {
                  initMap();
                } catch (error) {// TODO --
                }
              }, 2000);
            } // OpenStreetMap
            // https://nominatim.openstreetmap.org/search?country=Venezuela&state=Lara&county=Iribarren&format=json&limit=1

            /* this.stepsService.geoCodeGet(
              `https://nominatim.openstreetmap.org/search?
                country=Venezuela&
                state=${state}&
                county=${county}&
                format=json&
                limit=1`
            ).subscribe(
              (res) => {
                if (res.length > 0)
                  this.mapSettings(+res[0].lat,+res[0].lon,11);
                else
                  this.mapSettings(this.lat,this.lng,7);
              },
              (error) => {
                this.mapSettings(this.lat,this.lng,7);
                console.error(error);
              },
              () => {
                this.mapInitializer();
              }
            ); */

          } // END-MAP-CONFS ---------------------------------------------------------------------------------------

        }, {
          key: "fillForm",
          value: function fillForm() {
            var _this8 = this;

            if (this.approvalHistory.length > 0 && this.approvalHistory[this.approvalHistory.length - 1].status != 3) {
              var data = this.approvalHistory[this.approvalHistory.length - 1].data;

              switch (this.who) {
                case "sponsor":
                  this.fillSponsor(data);
                  break;

                case "coordinator":
                  this.fillCoordinator(data);
                  break;

                default:
                  this.fillSchool(data);
                  break;
              }
            } else {
              if (this.globals.isBrowser) {
                var initMap = function initMap() {
                  if (google) {
                    clearInterval(interval);
                    _this8.showMap = true;
                    setTimeout(function () {
                      if (_this8.schoolmap) _this8.mapInitializer(_this8.disable);
                    });
                  }
                };

                var interval = null;
                var num = 0;

                try {
                  initMap();
                } catch (error) {
                  interval = setInterval(function () {
                    try {
                      initMap();
                    } catch (error) {// TODO --
                    }
                  }, 2000);
                }
              }
            }
          }
        }, {
          key: "disableThis",
          value: function disableThis() {
            return this.disable || this.status == "3" || this.approvalHistory.length > 0 && this.approvalHistory[this.approvalHistory.length - 1].status != "3";
          }
        }, {
          key: "showSendBtn",
          value: function showSendBtn() {
            return this.status != "3" && (this.approvalHistory.length == 0 || this.approvalHistory.length > 0 && this.approvalHistory[this.approvalHistory.length - 1].status == "3");
          }
        }, {
          key: "setResidencialInfo",
          value: function setResidencialInfo(params) {
            var _this9 = this;

            if (params && params.states && params.states.length) {
              this.setStates = params.states;
              this.fillStates();
            }

            if (params && params.municipalities && params.municipalities.length) {
              this.setMuns = [];
              setTimeout(function () {
                _this9.setMuns = params.municipalities;

                _this9.updateMuns(true);
              });
            }
          }
        }, {
          key: "fillStates",
          value: function fillStates() {
            this.statesData = this.setStates;
          }
        }, {
          key: "fillMunicipalities",
          value: function fillMunicipalities() {
            var state_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
            var munId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (this.setMuns && this.setMuns.length > 0) {
              if (state_id == "default") this.municipalitiesData = [];else {
                this.municipalitiesData = this.setMuns.filter(function (m) {
                  return m.state.id == state_id;
                });
              }
              if (this.who == "sponsor") this.sponsorForm.patchValue({
                addressMunicipality: munId
              });else if (this.who == "coordinator") this.coordinatorForm.patchValue({
                addressMunicipality: munId
              });else if (this.who == "school") this.schoolForm.patchValue({
                addressMunicipality: munId
              });
            }
          }
        }, {
          key: "updateMuns",
          value: function updateMuns() {
            var findMunId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var currStateId = "default";
            var currMunId = "";

            if (this.who == "sponsor") {
              currStateId = this.sponsorForm.controls["addressState"].value && this.sponsorForm.controls["addressState"].value.length > 0 ? this.sponsorForm.controls["addressState"].value : "default";
              if (findMunId) currMunId = this.sponsorForm.controls["addressMunicipality"].value && this.sponsorForm.controls["addressMunicipality"].value.length > 0 ? this.sponsorForm.controls["addressMunicipality"].value : "";
            } else if (this.who == "coordinator") {
              currStateId = this.coordinatorForm.controls["addressState"].value && this.coordinatorForm.controls["addressState"].value.length > 0 ? this.coordinatorForm.controls["addressState"].value : "default";
              if (findMunId) currMunId = this.coordinatorForm.controls["addressMunicipality"].value && this.coordinatorForm.controls["addressMunicipality"].value.length > 0 ? this.coordinatorForm.controls["addressMunicipality"].value : "";
            } else if (this.who == "school") {
              currStateId = this.schoolForm.controls["addressState"].value && this.schoolForm.controls["addressState"].value.length > 0 ? this.schoolForm.controls["addressState"].value : "default";
              if (findMunId) currMunId = this.schoolForm.controls["addressMunicipality"].value && this.schoolForm.controls["addressMunicipality"].value.length > 0 ? this.schoolForm.controls["addressMunicipality"].value : "";
            }

            if (findMunId) this.fillMunicipalities(currStateId, currMunId);else this.fillMunicipalities(currStateId);
          }
        }, {
          key: "onSubmitSponsor",
          value: function onSubmitSponsor(fo) {
            var _this10 = this;

            //fo: form object
            this.sendingForm = true;
            var solicitudBodyReduced = Object.keys(this.sponsorForm.value).reduce(function (solicitudBody, controlName) {
              if (controlName === "addressStreet") solicitudBody["address"] = _this10.sponsorForm.controls[controlName].value;else if (controlName === "phone") solicitudBody["companyPhone"] = _this10.sponsorForm.controls[controlName].value;else solicitudBody[controlName] = _this10.sponsorForm.controls[controlName].value;
              return solicitudBody;
            }, {
              user: this.user_id,
              project: this.project_id
            });
            this.postForm(solicitudBodyReduced, fo, 1);
          }
        }, {
          key: "onSubmitCoordinator",
          value: function onSubmitCoordinator(fo) {
            var _this11 = this;

            //fo: form object
            this.sendingForm = true;
            var solicitudBodyReduced = Object.keys(this.coordinatorForm.value).reduce(function (solicitudBody, controlName) {
              if (controlName === "addressStreet") solicitudBody["address"] = _this11.coordinatorForm.controls[controlName].value;else if (controlName === "birthdate") solicitudBody[controlName] = _this11.globals.dateToISOString(_this11.coordinatorForm.controls[controlName].value);else solicitudBody[controlName] = _this11.coordinatorForm.controls[controlName].value;
              return solicitudBody;
            }, {
              user: this.user_id,
              project: this.project_id
            });
            this.postForm(solicitudBodyReduced, fo, 2);
          }
        }, {
          key: "onSubmitschool",
          value: function onSubmitschool(fo) {
            var _this12 = this;

            //fo: form object
            this.sendingForm = true;
            var solicitudBodyReduced = Object.keys(this.schoolForm.value).reduce(function (solicitudBody, controlName) {
              if (controlName === "addressStreet") solicitudBody["address"] = _this12.schoolForm.controls[controlName].value;else if (controlName === "coordinate") solicitudBody[controlName] = _this12.schoolForm.controls[controlName].value.latitude && _this12.schoolForm.controls[controlName].value.longitude ? _this12.schoolForm.controls[controlName].value : null;else if (controlName === "subPrincipalEmail") solicitudBody[controlName] = _this12.schoolForm.controls[controlName].value.length > 0 ? _this12.schoolForm.controls[controlName].value : null;else if (controlName === "nTeachers" || controlName === "nAdministrativeStaff" || controlName === "nLaborStaff" || controlName === "nStudents" || controlName === "nGrades" || controlName === "nSections") solicitudBody[controlName] = +_this12.schoolForm.controls[controlName].value;else solicitudBody[controlName] = controlName === "code" && typeof _this12.schoolForm.controls[controlName].value === "string" && _this12.schoolForm.controls[controlName].value.replace(/\s/g, "") || _this12.schoolForm.controls[controlName].value;
              return solicitudBody;
            }, {
              user: this.user_id,
              project: this.project_id
            });
            this.postForm(solicitudBodyReduced, fo, 3);
          }
        }, {
          key: "postForm",
          value: function postForm(solicitudBody, fo, type) {
            var _this13 = this;

            this.stepsService.requestsFind(type, solicitudBody).subscribe(function (res) {
              _this13.sendingForm = false;
              fo.reset();

              var reinitMap = function reinitMap() {
                if (_this13.who == "school" && google) {
                  clearInterval(interval);

                  if (_this13.schoolmap) {
                    _this13.mapSettings(_this13.lat, _this13.lng, 7);

                    _this13.mapInitializer(true);
                  }
                }
              };

              var interval = null;

              try {
                reinitMap();
              } catch (error) {
                interval = setInterval(function () {
                  try {
                    reinitMap();
                  } catch (error) {// TODO --
                  }
                }, 2000);
              }

              _this13.emitUpdate.emit({
                project_id: _this13.project_id,
                indd: _this13.index,
                modd: _this13.mode
              });
            }, function (error) {
              var errorType = error.error && error.error["code"] ? "code" : error.error && error.error["email"] ? "email" : "regular";
              _this13.sendingForm = false;

              switch (type) {
                case 1:
                  if (errorType != "regular") _this13.sponsorForm.get("email").setValue("");
                  break;

                case 2:
                  if (errorType != "regular") _this13.coordinatorForm.get("email").setValue("");
                  break;

                default:
                  if (errorType != "regular") _this13.schoolForm.get(errorType).setValue("");
                  break;
              }

              _this13.emitMessage.emit({
                i: _this13.index,
                m: _this13.mode,
                messageType: errorType
              });
            }, function () {});
          }
        }, {
          key: "prevDef",
          value: function prevDef(e) {
            if (e.target.tagName.toLowerCase() !== "textarea" && e.target.tagName.toLowerCase() !== "button") {
              e.preventDefault();
            }
          }
        }, {
          key: "validate",
          value: function validate(op) {
            if (!this.disableThis()) {
              switch (this.who) {
                case "sponsor":
                  return this.sponsorForm.controls[op].status === "INVALID" && this.sponsorForm.controls[op].dirty ? true : false;

                case "coordinator":
                  return this.coordinatorForm.controls[op].status === "INVALID" && this.coordinatorForm.controls[op].dirty ? true : false;

                case "school":
                  return this.schoolForm.controls[op].status === "INVALID" && this.schoolForm.controls[op].dirty ? true : false;
              }
            }
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(op) {
            if (!this.disableThis()) {
              switch (this.who) {
                case "sponsor":
                  return !this.sponsorForm.controls[op].value || this.sponsorForm.controls[op].value === "" ? false : true;

                case "coordinator":
                  return !this.coordinatorForm.controls[op].value || this.coordinatorForm.controls[op].value === "" ? false : true;

                case "school":
                  return !this.schoolForm.controls[op].value || this.schoolForm.controls[op].value === "" ? false : true;
              }
            }
          }
        }, {
          key: "fillSponsor",
          value: function fillSponsor(res) {
            this.sponsorForm.setValue({
              selectedDoc: "2",
              name: res.name ? res.name : "",
              email: res.email ? res.email : "",
              rif: res.rif ? res.rif : "",
              addressState: res.addressState.id ? res.addressState.id : "",
              addressMunicipality: res.addressMunicipality.id ? res.addressMunicipality : "",
              addressStreet: res.address ? res.address : "",
              addressCity: res.addressCity ? res.addressCity : "",
              phone: res.companyPhone ? res.companyPhone : "",
              companyType: res.companyType ? res.companyType : "",
              companyOtherType: res.companyOtherType ? res.companyOtherType : "",
              contactFirstName: res.contactFirstName ? res.contactFirstName : "",
              contactLastName: res.contactLastName ? res.contactLastName : "",
              contactPhone: res.contactPhone ? res.contactPhone : "",
              contactEmail: res.contactEmail ? res.contactEmail : ""
            });
            this.fillMunicipalities(res.addressState.id, res.addressMunicipality.id);
          }
        }, {
          key: "fillCoordinator",
          value: function fillCoordinator(res) {
            this.coordinatorForm.setValue({
              firstName: res.firstName ? res.firstName : "",
              lastName: res.lastName ? res.lastName : "",
              birthdate: this.globals.getDateFormat(res.birthdate ? new Date(res.birthdate) : new Date()),
              gender: res.gender ? res.gender : "",
              cardType: res.cardType ? res.cardType : "1",
              cardId: res.cardId ? res.cardId : "",
              homePhone: res.homePhone ? res.homePhone : "",
              addressState: res.addressState.id ? res.addressState.id : "",
              addressMunicipality: res.addressMunicipality.id ? res.addressMunicipality.id : "",
              addressStreet: res.address ? res.address : "",
              addressCity: res.addressCity ? res.addressCity : "",
              addressHome: res.addressHome ? res.addressHome : "",
              email: res.email ? res.email : "",
              phone: res.phone ? res.phone : "",
              profession: res.profession ? res.profession : ""
            });
            this.fillMunicipalities(res.addressState.id, res.addressMunicipality.id);
          }
        }, {
          key: "fillSchool",
          value: function fillSchool(res) {
            var _this14 = this;

            this.schoolForm.setValue({
              name: res.name ? res.name : "",
              email: res.email ? res.email : "",
              code: res.code ? res.code : "",
              addressState: res.addressState.id ? res.addressState.id : "",
              // specialty: res.specialty.name ? res.specialty.name : "", ///
              addressMunicipality: res.addressMunicipality.id ? res.addressMunicipality.id : "",
              addressStreet: res.address ? res.address : "",
              addressCity: res.addressCity ? res.addressCity : "",
              phone: res.phone ? res.phone : "",
              schoolType: res.schoolType ? res.schoolType : "",
              addressZoneType: res.addressZoneType ? res.addressZoneType : "1",
              addressZone: res.addressZone ? res.addressZone : "",
              coordinate: {
                latitude: res.coordinate ? res.coordinate.latitude : null,
                longitude: res.coordinate ? res.coordinate.longitude : null
              },
              //
              principalFirstName: res.principalFirstName ? res.principalFirstName : "",
              principalLastName: res.principalLastName ? res.principalLastName : "",
              principalEmail: res.principalEmail ? res.principalEmail : "",
              principalPhone: res.principalPhone ? res.principalPhone : "",
              //
              subPrincipalFirstName: res.subPrincipalFirstName ? res.subPrincipalFirstName : "",
              subPrincipalLastName: res.subPrincipalLastName ? res.subPrincipalLastName : "",
              subPrincipalEmail: res.subPrincipalEmail ? res.subPrincipalEmail : "",
              subPrincipalPhone: res.subPrincipalPhone ? res.subPrincipalPhone : "",
              //
              nTeachers: res.nTeachers ? "".concat(res.nTeachers) : null,
              nAdministrativeStaff: res.nAdministrativeStaff ? "".concat(res.nAdministrativeStaff) : null,
              nLaborStaff: res.nLaborStaff ? "".concat(res.nLaborStaff) : null,
              nStudents: res.nStudents ? "".concat(res.nStudents) : null,
              nGrades: res.nGrades ? "".concat(res.nGrades) : null,
              nSections: res.nSections ? "".concat(res.nSections) : null,
              schoolShift: res.schoolShift ? res.schoolShift : ""
            });

            if (res.coordinate && this.globals.isBrowser) {
              var initMap = function initMap() {
                if (google) {
                  clearInterval(interval);
                  _this14.showMap = true;
                  setTimeout(function () {
                    if (_this14.schoolmap) {
                      _this14.mapSettings(res.coordinate.latitude, res.coordinate.longitude, 11);

                      _this14.mapInitializer(true);

                      _this14.loadAllMarkers({
                        name: res.name,
                        coordinate: res.coordinate
                      });
                    }
                  });
                }
              };

              var interval = null;

              try {
                initMap();
              } catch (error) {
                interval = setInterval(function () {
                  try {
                    initMap();
                  } catch (error) {// TODO --
                  }
                }, 2000);
              }
            } else this.showMap = false;

            this.fillMunicipalities(res.addressState.id, res.addressMunicipality.id);
          }
        }, {
          key: "controlDate",
          value: function controlDate() {
            return this.coordinatorForm.controls["birthdate"].value && !this.isNotValidDate(this.coordinatorForm.controls["birthdate"].value);
          }
        }, {
          key: "isNotValidDate",
          value: function isNotValidDate(date) {
            if (date instanceof Date) {
              var dateString = date.toISOString().split("T")[0];
              var isValid = this.globals.validateDate(dateString, "lower", true, true, 18);
              return isValid;
            }

            if (date instanceof String) {
              return this.globals.validateDate(date, "lower", true, true, 18);
            }

            return false;
          }
        }, {
          key: "focusDatePicker",
          value: function focusDatePicker(e) {
            if (!this.disableThis()) {
              e.focus();
            }
          }
        }, {
          key: "setMaxLen",
          value: function setMaxLen(controlName) {
            var ct = this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].get(controlName).value; // 1: V, 2: J, 3: E

            return ct === "1" ? 8 : 9;
          }
        }, {
          key: "setMinLen",
          value: function setMinLen(controlName) {
            var ct = this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].get(controlName).value; // 1: V, 2: J, 3: E

            return ct === "1" ? 7 : ct === "2" ? 8 : 9;
          }
        }, {
          key: "setLength",
          value: function setLength(controlName, controlCardType) {
            this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].setControl(controlName, this.fb.control(this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].get(controlName).value, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.setMinLen(controlCardType)), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.setMaxLen(controlCardType)), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(NUMBER_PTTRN)]));
            this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].get(controlName).markAsTouched(); // const fieldVal = this[this.who==="coordinator"
            //   ? "coordinatorForm"
            //   : "sponsorForm"].get(controlName).value;
          }
        }, {
          key: "isMaxLenOver",
          value: function isMaxLenOver(controlName, controlCardType) {
            var ctrlNameVal = this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].controls[controlName].value;
            if (ctrlNameVal) return ctrlNameVal.length > this.setMaxLen(controlCardType) && ctrlNameVal.length > 0;else return false;
          }
        }, {
          key: "isMinLenUnder",
          value: function isMinLenUnder(controlName, controlCardType) {
            var ctrlNameVal = this[this.who === "coordinator" ? "coordinatorForm" : "sponsorForm"].controls[controlName].value;
            if (ctrlNameVal) return ctrlNameVal.length < this.setMinLen(controlCardType) && ctrlNameVal.length > 0;else return false;
          }
        }, {
          key: "hasMaxOrMin",
          value: function hasMaxOrMin(controlName, controlCardType) {
            return this.isMaxLenOver(controlName, controlCardType) || this.isMinLenUnder(controlName, controlCardType);
          }
        }]);

        return StepsFormsComponent;
      }();

      StepsFormsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_6__["StepsService"]
        }, {
          type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }];
      };

      StepsFormsComponent.propDecorators = {
        schoolmap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["schoolAddressMap", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }],
        who: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        setStates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        setMuns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        status: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        project_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        user_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        approvalHistory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        emitMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        emitUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      StepsFormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-steps-forms",
        template: _raw_loader_steps_forms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_steps_forms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StepsFormsComponent);
      /***/
    },

    /***/
    "r9gT":
    /*!*****************************************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/general-steps/general-steps.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: GeneralStepsComponent, StatusSelectorComponent */

    /***/
    function r9gT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralStepsComponent", function () {
        return GeneralStepsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusSelectorComponent", function () {
        return StatusSelectorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_general_steps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./general-steps.component.html */
      "LfC0");
      /* harmony import */


      var _general_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general-steps.component.scss */
      "BQR6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-embed-video */
      "RXmf");
      /* harmony import */


      var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "EcpT");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../services/steps/steps.service */
      "OR82");
      /* harmony import */


      var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../services/global.service */
      "4WDQ");
      /* harmony import */


      var _steps_forms_steps_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../steps-forms/steps-forms.component */
      "ZiER");

      var GeneralStepsComponent = /*#__PURE__*/function () {
        function GeneralStepsComponent(platformId, embedService, sanitizer, stepsService, globals) {
          _classCallCheck(this, GeneralStepsComponent);

          this.platformId = platformId;
          this.embedService = embedService;
          this.sanitizer = sanitizer;
          this.stepsService = stepsService;
          this.globals = globals;
          this.arrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronDown"];
          this.currentA = ""; //to set current and open accordion item

          this.mode = 1; // 1=general, 2=coordinador, 3=padrino, 4=escuela

          this.steps = [];
          this.user_type = "1";
          this.setStates = [];
          this.setMuns = [];
          this.callUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.timesVideoSourceCalled = 0;
          this.video_ = {};
          this.datePickerOptions = {
            minYear: 1900,
            maxYear: 2050,
            displayFormat: "DD/MM/YYYY",
            barTitleFormat: "MMMM YYYY",
            dayNamesFormat: "dd",
            firstCalendarDay: 0,
            minDate: new Date(Date.now()),
            // maxDate: new Date(Date.now()),
            barTitleIfEmpty: "Haga click para seleccionar una fecha",
            placeholder: "Seleccione una fecha",
            addClass: "form-control",
            addStyle: {},
            fieldId: "inputDate",
            useEmptyBarTitle: false
          }; //? -----------------------------------------------------------------------------------------------------------------

          this.messageInToaster = "Problema con el servidor.";
          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(platformId);
        }

        _createClass(GeneralStepsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentA = 0 + "-" + this.mode;
            this.glbls = this.globals;
          }
        }, {
          key: "getCollapsed",
          value: function getCollapsed(i, m) {
            return "".concat(i, "-").concat(m) == this.currentA;
          }
        }, {
          key: "compareMode",
          value: function compareMode() {
            return this.mode != +this.user_type && this.mode != 1;
          }
        }, {
          key: "isSelectorReadOnly",
          value: function isSelectorReadOnly() {
            return this.compareMode() && this.mode != 1 && !this.isAdmin();
          }
        }, {
          key: "checkStatus",
          value: function checkStatus(step_status) {
            return step_status == "3" ? "2" : "1";
          }
        }, {
          key: "showConditioned",
          value: function showConditioned(step) {
            // show approve btn when is not find school, coordinator or sponsor
            return step.devName != "findCoordinator" && step.devName != "findSponsor" && step.devName != "findSchool";
          }
        }, {
          key: "isNotConfirmable",
          value: function isNotConfirmable(step) {
            return !this.confirmable && step.devName == "amblemaConfirmation";
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            //usertype 0 or 1 is super and admin
            return this.user_type == "0" || this.user_type == "1";
          } // METHOD THAT ALLOWS THE SENDER USER TO SEE THE CANCEL BUTTON FROM REQUEST STEP

        }, {
          key: "canUserSee",
          value: function canUserSee(step) {
            if (step.approvalHistory.length > 0) {
              var bool = step.approvalHistory[step.approvalHistory.length - 1].data ? step.approvalHistory[step.approvalHistory.length - 1].data.user ? true : false : false;
              if (bool) return step.status == "1" || step.approvalHistory[step.approvalHistory.length - 1].status == "4" || step.status != "1" && step.approvalHistory[step.approvalHistory.length - 1].data.user.id == this.user_id;else return false;
            } else return true;
          }
        }, {
          key: "resetTimesLoadedVideo",
          value: function resetTimesLoadedVideo() {
            this.timesVideoSourceCalled = 0;
          }
        }, {
          key: "fillResidenceInfo",
          value: function fillResidenceInfo(params) {
            this.stepFormTemplateRef.toArray().map(function (stepForm) {
              stepForm.setResidencialInfo(params);
            });
          }
        }, {
          key: "getVideo",
          value: function getVideo(url, stepId) {
            if (this.showThisVideo && this.timesVideoSourceCalled < 10) {
              var video = this.embedService.embed(url);
              if (video) this.timesVideoSourceCalled++;
              if (!this.video_[stepId]) this.video_[stepId] = video;
              return this.video_[stepId];
            } else if (this.video_[stepId]) return this.video_[stepId];
          }
        }, {
          key: "sanitizeFile",
          value: function sanitizeFile(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }, {
          key: "clickUpload",
          value: function clickUpload(btn) {
            btn.getElementsByClassName("hide-upload-btn")[0].click();
          }
        }, {
          key: "checkChange",
          value: function checkChange(e, item, pos) {
            this.steps[item].checklist[pos].checked = e.target.checked;
          }
        }, {
          key: "enableChecksBtn",
          value: function enableChecksBtn(step) {
            var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var enable = bool;

            for (var i = 0; i < step.checklist.length; i++) {
              if (step.checklist[i].checked == !bool) {
                enable = !bool;
                break;
              }
            }

            return enable;
          }
        }, {
          key: "fileMngr",
          value: function fileMngr(e, i) {
            this.steps[i].uploadedFile = {
              name: e.target.files[0].name,
              file: e.target.files[0],
              url: ""
            };
          }
        }, {
          key: "shortenName",
          value: function shortenName(name) {
            return name.length > 16 ? name.slice(0, 13) + ".." : name;
          }
        }, {
          key: "getStatusName",
          value: function getStatusName(num) {
            switch (num) {
              case "1":
                return "Pendiente";

              case "2":
                return "En aprobación";

              case "8":
                return "Procesando";

              default:
                return "Aprobado";
            }
          }
        }, {
          key: "getComments",
          value: function getComments(step) {
            var approvalHistory = step.approvalHistory;

            if (approvalHistory.length == 0) {
              return false;
            }

            var comments = approvalHistory[approvalHistory.length - 1].comments;
            return comments ? comments : false;
          } //? Sending Approval Request ----------------------------------------------------

        }, {
          key: "approvalMethodCaller",
          value: function approvalMethodCaller(e) {
            // aproval method caller from status selector component
            this.approvalMethod(e.step, e.index, e.mode, e.status);
          }
        }, {
          key: "approvalMethod",
          value: function approvalMethod(step, indd, modd, status) {
            var _this15 = this;

            step.sending = true;
            var formData = new FormData();

            var getPosting = function getPosting() {
              if (step.hasChecklist && step.approvalType != "3") {
                formData.append("status", !_this15.enableChecksBtn(step, true) ? "1" : "2");
              } else if (step.approvalType != "3" && step.approvalType != "4") {
                formData.append("status", step.status == "1" ? "3" : "1");
              }

              if (step.approvalType == "4") formData.append("status", status == "1" ? "1" : "3");
              formData.append(step.approvalType == "3" ? "stepId" : "id", step.id);

              if (step.approvalType == "3") {
                formData.append("project", _this15.project_id);
                formData.append("user", _this15.user_id);
              }

              if (step.hasDate && step.date) {
                var dateString = "";

                if (step.date instanceof Date) {
                  dateString = _this15.globals.dateToISOString(step.date);
                } else if (typeof step.date === "string") {
                  var date = step.date.split("T")[0].replace(/-/g, "/");
                  dateString = _this15.globals.dateToISOString(new Date(date));
                }

                formData.append(step.approvalType == "3" ? "stepDate" : "date", dateString);
              }

              if (step.hasUpload && step.uploadedFile && step.uploadedFile.url.length == 0) formData.append(step.approvalType == "3" ? "stepUploadedFile" : "uploadedFile", step.uploadedFile.file);
              if (step.hasChecklist) formData.append(step.approvalType == "3" ? "stepChecklist" : "checklist", JSON.stringify(step.checklist));
            };

            if (step.status == "1" && step.approvalHistory && step.approvalHistory.length == 0 || step.approvalType != "3") {
              getPosting();
              if (step.approvalType == "3") this.postAR(formData, step, indd, modd); // approval request
              else this.postSA(formData, step, indd, modd, this.project_id); // step approval
            } else {
              // when a register of this approval request already exists
              var rqstApv = step.approvalHistory.length > 0 ? step.approvalHistory[step.approvalHistory.length - 1].status : "0"; // approval request Status; located in the last item of the approval history.
              //posting

              if (step.hasUpload && (rqstApv == "3" || rqstApv == "4" || rqstApv == "1") || // I added 1 for it to work to send request
              step.hasChecklist && (rqstApv == "3" || step.approvalType != "3")) {
                getPosting();
              } // updating
              //putting


              if (step.hasUpload && rqstApv == "1" && step.status != "1") // I added 1 for it to work to send request
                formData.append("status", "4"); // cancels approval request // this is not reached by checklist btn

              if (step.hasChecklist && rqstApv == "1" && step.approvalType == "3") formData.append("stepChecklist", JSON.stringify(step.checklist)); //endpoint callers

              if (step.hasUpload && (rqstApv == "3" || rqstApv == "4") || step.hasChecklist && (rqstApv == "3" || step.approvalType != "3")) this.postAR(formData, step, indd, modd);else if (step.status == "1") this.postAR(formData, step, indd, modd);else this.putAR(formData, step, indd, modd, step.approvalHistory[step.approvalHistory.length - 1].id);
            }
          }
        }, {
          key: "setCurrentAccItem",
          value: function setCurrentAccItem(indd, modd) {
            this.currentA = "".concat(indd, "-").concat(modd);
          } // POSTER AND PUTTER

        }, {
          key: "updatingEmitting",
          value: function updatingEmitting(step, indd, modd) {
            step.sending = false;
            this.callUpdate.emit(this.project_id);
            this.setCurrentAccItem(indd, modd);
          }
        }, {
          key: "updateEmitterFromForm",
          value: function updateEmitterFromForm(e) {
            this.callUpdate.emit(e.project_id);
            this.setCurrentAccItem(e.indd, e.modd);
          }
        }, {
          key: "postAR",
          value: function postAR(formData, step, indd, modd) {
            var _this16 = this;

            this.stepsService.requestApproval(formData).subscribe(function (res) {
              step.status = step.hasUpload && step.approvalType == "3" ? "2" : step.approvalType == "1" ? step.status == "1" ? "2" : "1" : "1";

              _this16.updatingEmitting(step, indd, modd);
            }, function (error) {
              var error_msg = error.error && error.error instanceof ProgressEvent ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente" : null;
              step.sending = false;

              _this16.toasterMeth(indd, modd, error_msg);
            });
          }
        }, {
          key: "postSA",
          value: function postSA(formData, step, indd, modd, proj_id) {
            var _this17 = this;

            this.stepsService.stepApproval(proj_id, formData).subscribe(function (res) {
              step.status = "8"; // status 8 --> processing

              _this17.updatingEmitting(step, indd, modd);
            }, function (error) {
              var error_msg = error.error && error.error instanceof ProgressEvent ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente" : null;
              step.sending = false;

              _this17.toasterMeth(indd, modd, error_msg);
            });
          }
        }, {
          key: "putAR",
          value: function putAR(formData, step, indd, modd, id) {
            var _this18 = this;

            // let formDataStatus = new FormData();
            var jsonDataStatus = {
              status: null
            };
            var isCancel = false;

            if (step.status != "1" && step.approvalType == "3") {
              // formDataStatus.append('status', '4');
              jsonDataStatus.status = "4";
              isCancel = true;
            } // this.stepsService.updateRequestApproval(id,isCancel?formDataStatus:formData,isCancel).subscribe(res=>{


            this.stepsService.updateRequestApproval(id, isCancel ? jsonDataStatus : formData, isCancel).subscribe(function (res) {
              if (step.status == "1") step.status = step.hasUpload ? "2" : step.approvalType == "1" ? step.status == "1" ? "2" : "1" : "1";else step.status = "1"; // this is not reached by checklist btn

              _this18.updatingEmitting(step, indd, modd);
            }, function (error) {
              var error_msg = error.error && error.error instanceof ProgressEvent ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente" : null;
              step.sending = false;

              _this18.toasterMeth(indd, modd, error_msg);
            });
          }
        }, {
          key: "toasterMeth",
          value: function toasterMeth(i, m) {
            var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (this.isBrowser) {
              if (error) this.messageInToaster = error;
              $("#toast".concat(i, "-").concat(m)).toast({
                delay: 5000
              });
              $("#toast".concat(i, "-").concat(m)).toast("show");
            }
          }
        }, {
          key: "callToaster",
          value: function callToaster(e) {
            var errorMessage = "";

            switch (e.messageType) {
              case "code":
                errorMessage = "La escuela que intentas registrar ya se encuentra registrada.";
                break;

              case "email":
                errorMessage = "El correo ingresado ya se encuentra registrado.";
                break;

              default:
                errorMessage = "Hubo un problema al conectar con el servidor, por favor intente más tarde.";
                break;
            }

            this.toasterMeth(e.i, e.m, errorMessage);
          } // if there ares everal steps that send information, this method handles that

        }, {
          key: "showSeveralsButton",
          value: function showSeveralsButton(step) {
            return step.hasChecklist && step.hasDate && step.hasUpload || step.hasChecklist && step.hasDate || step.hasChecklist && step.hasUpload || step.hasDate && step.hasUpload || !step.hasChecklist && step.hasDate && !step.hasUpload;
          }
        }, {
          key: "disableSeveralsButton",
          value: function disableSeveralsButton(step) {
            if (step.hasChecklist && step.hasDate && step.hasUpload) return !this.enableChecksBtn(step) || !step.uploadedFile || !step.date;
            if (step.hasChecklist && step.hasDate) return !this.enableChecksBtn(step) || !step.date;
            if (step.hasChecklist && step.hasUpload) return !this.enableChecksBtn(step) || !step.uploadedFile;
            if (step.hasDate && step.hasUpload) return !step.date || !step.uploadedFile;
            if (!step.hasChecklist && step.hasDate && !step.hasUpload) return !step.date;
            return false;
          } //

        }, {
          key: "getDateFrmt",
          value: function getDateFrmt(step) {
            var date = "";
            if (step.date) date = this.globals.getDateFormat(new Date(step.date.split("+").shift()));
            return date;
          }
        }, {
          key: "controlDate",
          value: function controlDate(e, step) {
            if (!this.globals.validateDate(e.toISOString().split("T")[0], "greater", true, true)) {
              //step.date = this.globals.dateStringToISOString(`${e.target.value}T00:00:00.00`);
              step.date = e;
            } else step.date = null;
          }
        }, {
          key: "goToMods",
          value: function goToMods() {
            this.stepsService.goToModules();
          } // For videos

        }, {
          key: "videoShower",
          value: function videoShower(step) {
            var _this19 = this;

            this.showThisVideo = false;

            if (step.hasVideo) {
              setTimeout(function () {
                _this19.showThisVideo = true;
                _this19.timesVideoSourceCalled = 0;
              });
            }
          }
        }]);

        return GeneralStepsComponent;
      }();

      GeneralStepsComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__["EmbedVideoService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }, {
          type: _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_9__["StepsService"]
        }, {
          type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"]
        }];
      };

      GeneralStepsComponent.propDecorators = {
        stepFormTemplateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ["stepFormTemplate", {
            read: _steps_forms_steps_forms_component__WEBPACK_IMPORTED_MODULE_11__["StepsFormsComponent"]
          }]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        curriculumPending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        user_type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        user_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        project_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        confirmable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        enableActions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        setStates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        setMuns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      GeneralStepsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-general-steps",
        template: _raw_loader_general_steps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_general_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GeneralStepsComponent);

      var StatusSelectorComponent = /*#__PURE__*/function () {
        function StatusSelectorComponent(fb) {
          _classCallCheck(this, StatusSelectorComponent);

          this.fb = fb;
          this.approvalMethodCallerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.statuses = [{
            id: "1",
            name: "Por completar"
          }, {
            id: "2",
            name: "Completado"
          }];
          this.statusForm = this.fb.group({
            status: [""]
          });
        }

        _createClass(StatusSelectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formFiller();
          }
        }, {
          key: "formFiller",
          value: function formFiller() {
            this.statusForm.setValue({
              status: this.step.status == "3" ? "2" : "1"
            });
          }
        }, {
          key: "shouldReadonly",
          value: function shouldReadonly() {
            return this.step.sending || this.step.status != "1" && this.step.status != "3" || this.isReadOnly;
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            this.approvalMethodCallerEmitter.emit({
              step: this.step,
              index: this.index,
              mode: this.mode,
              status: this.statusForm.controls["status"].value
            });
          }
        }]);

        return StatusSelectorComponent;
      }();

      StatusSelectorComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      StatusSelectorComponent.propDecorators = {
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isReadOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        approvalMethodCallerEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      StatusSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "status-selector",
        template: "\n    <div class=\"form-group\" [formGroup]=\"statusForm\">\n      <label [for]=\"step.devName\">Modificar estatus:</label>\n      <ng-select\n        class=\"form-control\"\n        [class.readonly]=\"isReadOnly\"\n        [items]=\"statuses\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"step.devName\"\n        formControlName=\"status\"\n        [virtualScroll]=\"true\"\n        [id]=\"step.devName\"\n        [clearable]=\"false\"\n        [searchable]=\"false\"\n        [loading]=\"step.sending\"\n        [readonly]=\"shouldReadonly()\"\n        (change)=\"changeStatus()\"\n      >\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{ item.name }}</small>\n        </ng-template>\n      </ng-select>\n    </div>\n  ",
        styles: [_general_steps_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StatusSelectorComponent);
      /***/
    },

    /***/
    "sOvX":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/previous-steps/steps/steps.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sOvX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-steps-view\">\n  <div class=\"description-info d-flex flex-column align-items-center mb-5\">\n    <h1 class=\"font-weight-bold mb-4\">Pasos para formar parte de AmbLeMa</h1>\n    <div class=\"below-desc-info\">\n      <p class=\"text-center\">\n        Cada uno de los actores que conforman el Sistema AmbLeMa: Padrino,\n        Coordinador o Escuela, deben seguir una serie de pasos para asumir el\n        compromiso en la aplicación de la Herramienta educativa.\n      </p>\n    </div>\n    <button\n      *ngIf=\"(project_steps$ | async).has_peca\"\n      type=\"button\"\n      class=\"btn btn-primary ml-auto text-decoration-none py-2 px-4 mt-1\"\n      (click)=\"goToPECA()\"\n    >\n      Ir al PECA\n    </button>\n    <button\n      *ngIf=\"enablingModsBtn()\"\n      type=\"button\"\n      [class]=\"\n        'btn btn-primary ' +\n        ((project_steps$ | async).has_peca ? 'margin-with-peca' : 'ml-auto') +\n        ' text-decoration-none py-2 px-4 mt-1'\n      \"\n      (click)=\"goToModules()\"\n      [disabled]=\"curriculumPending && (user_type$ | async) == '2'\"\n      [title]=\"\n        curriculumPending && (user_type$ | async) == '2'\n          ? 'Aún no has aprobado el paso de currículum vitae'\n          : ''\n      \"\n    >\n      Módulos\n    </button>\n  </div>\n\n  <div class=\"tabs-container\" [class.mt-add]=\"!enablingModsBtn()\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link active\"\n          data-toggle=\"tab\"\n          href=\"#general\"\n          (click)=\"switchStep(0, $event)\"\n          >Generales</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          data-toggle=\"tab\"\n          href=\"#sponsor\"\n          (click)=\"switchStep(1, $event)\"\n          >Padrino</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          data-toggle=\"tab\"\n          href=\"#coordinator\"\n          (click)=\"switchStep(2, $event)\"\n          >Coordinador</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          data-toggle=\"tab\"\n          href=\"#school\"\n          (click)=\"switchStep(3, $event)\"\n          >Escuela</a\n        >\n      </li>\n    </ul>\n\n    <div class=\"steps-progress-bar\">\n      <h6>Progreso de los pasos</h6>\n      <div\n        class=\"progress\"\n        [title]=\"fetchingSteps ? 'Cargando' : stepsProgress[activeStep] + '%'\"\n      >\n        <div\n          class=\"progress-bar\"\n          [ngClass]=\"{\n            'progress-bar-striped': fetchingSteps,\n            'progress-bar-animated': fetchingSteps\n          }\"\n          [style.width.%]=\"fetchingSteps ? 100 : stepsProgress[activeStep]\"\n        ></div>\n      </div>\n    </div>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div id=\"general\" class=\"container tab-pane active\">\n        <br />\n        <app-general-steps\n          #generalStep\n          [mode]=\"1\"\n          [steps]=\"generalSteps\"\n          [curriculumPending]=\"\n            curriculumPending &&\n            (user_type$ | async) != '0' &&\n            (user_type$ | async) != '1'\n          \"\n          [project_id]=\"project_id\"\n          [user_type]=\"user_type$ | async\"\n          (callUpdate)=\"updateSteps($event)\"\n          [confirmable]=\"canOrganizationConfirm\"\n          [enableActions]=\"enabledTabs\"\n        ></app-general-steps>\n      </div>\n\n      <div id=\"sponsor\" class=\"container tab-pane fade\">\n        <br />\n        <!-- states$ | async  municipalities$ | async -->\n        <app-general-steps\n          #generalStep\n          [mode]=\"3\"\n          [steps]=\"sponsorSteps\"\n          [curriculumPending]=\"\n            curriculumPending &&\n            (user_type$ | async) != '0' &&\n            (user_type$ | async) != '1'\n          \"\n          [project_id]=\"project_id\"\n          [user_type]=\"user_type$ | async\"\n          (callUpdate)=\"updateSteps($event)\"\n          [setStates]=\"theStates\"\n          [setMuns]=\"theMunicialities\"\n          [enableActions]=\"enabledTabs\"\n          [user_id]=\"user_id$ | async\"\n        ></app-general-steps>\n      </div>\n\n      <div id=\"coordinator\" class=\"container tab-pane fade\">\n        <br />\n        <!-- states$ | async municipalities$ | async -->\n        <app-general-steps\n          #generalStep\n          [mode]=\"2\"\n          [steps]=\"coordinatorSteps\"\n          [curriculumPending]=\"\n            curriculumPending &&\n            (user_type$ | async) != '0' &&\n            (user_type$ | async) != '1'\n          \"\n          [project_id]=\"project_id\"\n          [user_type]=\"user_type$ | async\"\n          (callUpdate)=\"updateSteps($event)\"\n          [setStates]=\"theStates\"\n          [setMuns]=\"theMunicialities\"\n          [enableActions]=\"enabledTabs\"\n          [user_id]=\"user_id$ | async\"\n        ></app-general-steps>\n      </div>\n\n      <div id=\"school\" class=\"container tab-pane fade\">\n        <br />\n        <!-- states$ | async municipalities$ | async -->\n        <app-general-steps\n          #generalStep\n          [mode]=\"4\"\n          [steps]=\"schoolSteps\"\n          [curriculumPending]=\"\n            curriculumPending &&\n            (user_type$ | async) != '0' &&\n            (user_type$ | async) != '1'\n          \"\n          [project_id]=\"project_id\"\n          [user_type]=\"user_type$ | async\"\n          (callUpdate)=\"updateSteps($event)\"\n          [setStates]=\"theStates\"\n          [setMuns]=\"theMunicialities\"\n          [enableActions]=\"enabledTabs\"\n          [user_id]=\"user_id$ | async\"\n        ></app-general-steps>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "tZxA":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/previous-steps/steps/steps-forms/steps-forms.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tZxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- SPONSOR -->\n<form *ngIf=\"who=='sponsor'\" [formGroup]=\"sponsorForm\" (keydown.enter)=\"prevDef($event)\" (ngSubmit)=\"onSubmitSponsor(sponsorForm)\" [class.form-disabled]=\"disableThis()\">\n    <div class=\"form-group\">\n      <label>Nombre</label>\n      <input\n        name=\"name\"\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('name')\"\n        [class.not-empty]=\"isEmpty('name')\"\n        formControlName=\"name\"\n        placeholder=\"Nombre de la empresa\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group input-group\">\n      <label>RIF de la empresa</label>\n      <div class=\"input-group-prepend\">\n        <ng-select\n        class=\"form-control\"\n        [items]=\"cardTypes\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        formControlName=\"selectedDoc\"\n        [id]=\"mode+'-'+index+'-'+1\"\n        [virtualScroll]=\"true\"\n        [clearable]=\"false\"\n        [searchable]=\"false\"\n        [readonly]=\"true\"\n      >\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      </div>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{\n          'not-valid': validate('rif'),\n          'not-empty': isEmpty('rif'),\n          'max-len-over': isMaxLenOver('rif','selectedDoc'),\n          'min-len-under': isMinLenUnder('rif','selectedDoc'),\n          'not-has-max-or-min': !hasMaxOrMin('rif','selectedDoc')\n        }\"\n        formControlName=\"rif\"\n        placeholder=\"RIF de la empresa\"\n        [readonly]=\"disableThis()\"\n        [maxlength]=\"setMaxLen('selectedDoc')\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n        <div class=\"field-max-len-over\">¡Superó el máximo de caracteres permitidos!</div>\n        <div class=\"field-min-len-under\">¡Está por debajo del mínimo de caracteres permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo electrónico</label>\n      <input\n        type=\"email\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('email')\"\n        [class.not-empty]=\"isEmpty('email')\"\n        formControlName=\"email\"\n        placeholder=\"Correo electrónico\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <!-- (change)=\"updateDataToSubmit()\" -->\n      <label>Estado</label>\n      <input *ngIf=\"setMuns && !setMuns.length\" type=\"text\" class=\"form-control\" formControlName=\"addressState\" [id]=\"mode+'-'+index+'-'+2\" placeholder=\"Estado\">\n      <ng-select\n        *ngIf=\"setMuns && setMuns.length\"\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"statesData\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [labelForId]=\"mode+'-'+index+'-'+2\"\n        formControlName=\"addressState\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+2\"\n        placeholder=\"Estado\"\n        (change)=\"updateMuns()\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un estado!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Municipio</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"municipalitiesData\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+3\"\n        formControlName=\"addressMunicipality\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+3\"\n        placeholder=\"Municipio\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un municipio!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Calles / Carreras</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressStreet')\"\n        [class.not-empty]=\"isEmpty('addressStreet')\"\n        formControlName=\"addressStreet\"\n        placeholder=\"Calles / Carreras\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"100\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Ciudad</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressCity')\"\n        [class.not-empty]=\"isEmpty('addressCity')\"\n        formControlName=\"addressCity\"\n        placeholder=\"Ciudad\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"20\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Número de teléfono</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('phone')\"\n        [class.not-empty]=\"isEmpty('phone')\"\n        formControlName=\"phone\"\n        placeholder=\"Número de teléfono\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Tipo de empresa</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"companyTypes\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+4\"\n        formControlName=\"companyType\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+4\"\n        placeholder=\"Tipo de empresa\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un tipo de empresa!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Otro tipo de empresa</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('companyOtherType')\"\n        [class.not-empty]=\"isEmpty('companyOtherType')\"\n        formControlName=\"companyOtherType\"\n        placeholder=\"Otro tipo de empresa\"\n        [readonly]=\"disableThis() || disableOther\"\n        maxlength=\"20\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <!-- <div class=\"two-wrapper\"> -->\n      <div class=\"form-group\">\n        <label>Nombre de la persona de contacto</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('contactFirstName')\"\n          [class.not-empty]=\"isEmpty('contactFirstName')\"\n          formControlName=\"contactFirstName\"\n          placeholder=\"Nombre de la persona de contacto\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"25\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Apellido de la persona de contacto</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('contactLastName')\"\n          [class.not-empty]=\"isEmpty('contactLastName')\"\n          formControlName=\"contactLastName\"\n          placeholder=\"Apellido de la persona de contacto\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"25\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n        </div>\n      </div>\n    <!-- </div>     -->\n    <div class=\"form-group\">\n      <label>Teléfono de la persona de contacto</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('contactPhone')\"\n        [class.not-empty]=\"isEmpty('contactPhone')\"\n        formControlName=\"contactPhone\"\n        placeholder=\"Teléfono de la persona de contacto\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo electrónico de la persona de contacto</label>\n      <input\n        type=\"email\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('contactEmail')\"\n        [class.not-empty]=\"isEmpty('contactEmail')\"\n        formControlName=\"contactEmail\"\n        placeholder=\"Correo electrónico de la persona de contacto\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n\n    <button *ngIf=\"showSendBtn()\" type=\"submit\" class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n    [disabled]=\"!sponsorForm.valid || disable || sendingForm\" [class.disabled]=\"!sponsorForm.valid\">\n    <span *ngIf=\"sendingForm\" class=\"spinner-grow spinner-grow-sm\"></span>{{ !sendingForm? 'Enviar solicitud':'Enviando..' }}\n    </button>\n</form>\n\n<!-- COORDINATOR -->\n<form *ngIf=\"who=='coordinator'\" [formGroup]=\"coordinatorForm\" (keydown.enter)=\"prevDef($event)\" (ngSubmit)=\"onSubmitCoordinator(coordinatorForm)\" [class.form-disabled]=\"disableThis()\">\n    <div class=\"form-group\">\n      <label>Nombre</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('firstName')\"\n        [class.not-empty]=\"isEmpty('firstName')\"\n        formControlName=\"firstName\"\n        placeholder=\"Nombre\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Apellido</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('lastName')\"\n        [class.not-empty]=\"isEmpty('lastName')\"\n        formControlName=\"lastName\"\n        placeholder=\"Apellido\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Fecha de nacimiento</label>\n      <div class=\"date-container\">\n        <ng-datepicker\n          #inputBirthDate\n          [options]=\"datePickerOptions\"\n          class=\"form-date-picker calendar-date-icon\"\n          [class.not-enabled]=\"disableThis()\"\n          [class.not-valid]=\"validate('birthdate')\"\n          [class.not-empty]=\"isEmpty('birthdate')\"\n          [class.date-not-valid]=\"isNotValidDate(coordinatorForm.get('birthdate').value)\"\n          formControlName=\"birthdate\"\n        >\n        </ng-datepicker>\n        <!--\n        <input\n          #inputBirthDate\n          type=\"date\"\n          data-format='{\"day\":\"numeric\",\"month\":\"numeric\",\"year\":\"numeric\"}'\n          placeholder=\"dd/mm/yyyy\"\n          class=\"form-control form-date-picker calendar-date-icon\"\n          [class.not-enabled]=\"disableThis()\"\n          [class.not-valid]=\"validate('birthdate')\"\n          [class.not-empty]=\"isEmpty('birthdate')\"\n          formControlName=\"birthdate\"\n          (change)=\"glbls.validateDate($event,'lower',false,false,18)\"\n          [readonly]=\"disableThis()\"\n        />\n        -->\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Debe tener al menos 18 años de edad!</div>\n        </div>\n        <!--\n        <input\n          [class.d-none]=\"inputBirthDate.value.length > 0\"\n          class=\"form-control form-date-placeholder\"\n          autocomplete='off'\n          type=\"text\"\n          [id]=\"'form-date-placeholder'+'-'+mode+'-'+index\"\n          placeholder=\"Fecha de nacimiento\"\n          readonly\n          (click)=\"focusDatePicker(inputBirthDate)\"\n        />\n        -->\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Sexo</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"genders\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+1\"\n        formControlName=\"gender\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+1\"\n        placeholder=\"Sexo\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un sexo!</div>\n      </div>\n    </div>\n    <div class=\"form-group input-group\">\n      <label>Identificación</label>\n      <div class=\"input-group-prepend\">\n        <ng-select\n        class=\"form-control\"\n        [items]=\"cardTypes\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        formControlName=\"cardType\"\n        [id]=\"mode+'-'+index+'-'+2\"\n        [virtualScroll]=\"true\"\n        [clearable]=\"false\"\n        [searchable]=\"false\"\n        [readonly]=\"disableThis()\"\n      >\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      </div>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{\n          'not-valid': validate('cardId'),\n          'not-empty': isEmpty('cardId'),\n          'max-len-over': isMaxLenOver('cardId','cardType'),\n          'min-len-under': isMinLenUnder('cardId','cardType'),\n          'not-has-max-or-min': !hasMaxOrMin('cardId','cardType')\n        }\"\n        formControlName=\"cardId\"\n        placeholder=\"Identificación\"\n        [readonly]=\"disableThis()\"\n        [maxlength]=\"setMaxLen('cardType')\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n        <div class=\"field-max-len-over\">¡Superó el máximo de caracteres permitidos!</div>\n        <div class=\"field-min-len-under\">¡Está por debajo del mínimo de caracteres permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Teléfono de habitación</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('homePhone')\"\n        [class.not-empty]=\"isEmpty('homePhone')\"\n        formControlName=\"homePhone\"\n        placeholder=\"Teléfono de habitación\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Estado</label>\n      <input *ngIf=\"setMuns && !setMuns.length\" type=\"text\" class=\"form-control\" formControlName=\"addressState\" [id]=\"mode+'-'+index+'-'+3\" placeholder=\"Estado\">\n      <ng-select\n        *ngIf=\"setMuns && setMuns.length\"\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"statesData\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [labelForId]=\"mode+'-'+index+'-'+3\"\n        formControlName=\"addressState\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+3\"\n        placeholder=\"Estado\"\n        (change)=\"updateMuns()\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un estado!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Municipio</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"municipalitiesData\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+4\"\n        formControlName=\"addressMunicipality\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+4\"\n        placeholder=\"Municipio\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un municipio!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Calles / Carreras</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressStreet')\"\n        [class.not-empty]=\"isEmpty('addressStreet')\"\n        formControlName=\"addressStreet\"\n        placeholder=\"Calles / Carreras\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"100\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Ciudad de residencia</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressCity')\"\n        [class.not-empty]=\"isEmpty('addressCity')\"\n        formControlName=\"addressCity\"\n        placeholder=\"Ciudad de residencia\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"20\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Casa / Edificio</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressHome')\"\n        [class.not-empty]=\"isEmpty('addressHome')\"\n        formControlName=\"addressHome\"\n        placeholder=\"Casa / Edificio\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo electrónico</label>\n      <input\n        type=\"email\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('email')\"\n        [class.not-empty]=\"isEmpty('email')\"\n        formControlName=\"email\"\n        placeholder=\"Correo electrónico\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Número de teléfono</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('phone')\"\n        [class.not-empty]=\"isEmpty('phone')\"\n        formControlName=\"phone\"\n        placeholder=\"Número de teléfono\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Profesión</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('profession')\"\n        [class.not-empty]=\"isEmpty('profession')\"\n        formControlName=\"profession\"\n        placeholder=\"Profesión\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <button *ngIf=\"showSendBtn()\" type=\"submit\" class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n    [disabled]=\"!coordinatorForm.valid || disable || !controlDate() || sendingForm\" [class.disabled]=\"!coordinatorForm.valid || !controlDate()\">\n    <span *ngIf=\"sendingForm\" class=\"spinner-grow spinner-grow-sm\"></span>{{ !sendingForm? 'Enviar solicitud':'Enviando..' }}\n    </button>\n</form>\n\n<!-- SCHOOL -->\n<form *ngIf=\"who=='school'\" [formGroup]=\"schoolForm\" (keydown.enter)=\"prevDef($event)\" (ngSubmit)=\"onSubmitschool(schoolForm)\" [class.form-disabled]=\"disableThis()\">\n    <h6>Datos de la Escuela</h6>\n    <div class=\"form-group\">\n      <label>Nombre de la escuela</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('name')\"\n        [class.not-empty]=\"isEmpty('name')\"\n        formControlName=\"name\"\n        placeholder=\"Nombre de la escuela\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo electrónico</label>\n      <input\n        type=\"email\" class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('email')\"\n        [class.not-empty]=\"isEmpty('email')\"\n        formControlName=\"email\"\n        placeholder=\"Correo electrónico\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Código del plantel</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('code')\"\n        [class.not-empty]=\"isEmpty('code')\"\n        formControlName=\"code\"\n        placeholder=\"Código del plantel\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras y números permitidos!</div>\n      </div>\n    </div>\n    <!-- <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" [class.not-valid]=\"validate('address')\" [class.not-empty]=\"isEmpty('address')\" formControlName=\"address\" placeholder=\"Direccion\" [readonly]=\"disableThis()\">\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div> -->\n    <div class=\"form-group\">\n      <!-- (change)=\"updateDataToSubmit()\" -->\n      <label>Estado</label>\n      <input *ngIf=\"setMuns && !setMuns.length\" type=\"text\" class=\"form-control\" formControlName=\"addressState\" [id]=\"mode+'-'+index+'-'+1\" placeholder=\"Estado\">\n      <ng-select\n        *ngIf=\"setMuns && setMuns.length\"\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"statesData\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [labelForId]=\"mode+'-'+index+'-'+1\"\n        formControlName=\"addressState\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+1\"\n        placeholder=\"Estado\"\n        (change)=\"updateMuns()\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un estado!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Municipio</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"municipalitiesData\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+2\"\n        formControlName=\"addressMunicipality\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+2\"\n        placeholder=\"Municipio\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un municipio!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Calles / Carreras</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressStreet')\"\n        [class.not-empty]=\"isEmpty('addressStreet')\"\n        formControlName=\"addressStreet\"\n        placeholder=\"Calles / Carreras\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"100\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Ciudad</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressCity')\"\n        [class.not-empty]=\"isEmpty('addressCity')\"\n        formControlName=\"addressCity\"\n        placeholder=\"Ciudad\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"20\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Número de teléfono</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('phone')\"\n        [class.not-empty]=\"isEmpty('phone')\"\n        formControlName=\"phone\"\n        placeholder=\"Número de teléfono\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Tipo de escuela</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"schoolTypes\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+3\"\n        formControlName=\"schoolType\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+3\"\n        placeholder=\"Tipo de escuela\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un tipo de escuela!</div>\n      </div>\n    </div>\n    <div class=\"form-group input-group\">\n      <label>Zona</label>\n      <div class=\"input-group-prepend\">\n        <ng-select\n          class=\"form-control\"\n          notFoundText=\"Elementos no encontrados\"\n          [items]=\"addressZoneTypes\"\n          bindValue=\"id\"\n          bindLabel=\"name\"\n          [labelForId]=\"mode+'-'+index+'-'+4\"\n          formControlName=\"addressZoneType\"\n          [virtualScroll]=\"true\"\n          [id]=\"mode+'-'+index+'-'+4\"\n          [clearable]=\"false\"\n          [readonly]=\"disableThis()\">\n          <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n            <small>{{item.name}}</small>\n          </ng-template>\n        </ng-select>\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe Seleccionar una zona!</div>\n        </div>\n      </div>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('addressZone')\"\n        [class.not-empty]=\"isEmpty('addressZone')\"\n        formControlName=\"addressZone\"\n        placeholder=\"Detalle de la zona\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"40\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n      </div>\n    </div>\n    <!-- MAPA ---------------------------------------------------------------------------------------------------------------------------------------------------- -->\n    <ng-container *ngIf=\"glbls.isBrowser && showMap\">\n      <div class=\"map-container\">\n        <hr/>\n        <label>Marca la ubicación exacta de la escuela</label>\n        <ng-container *ngIf=\"googleLoaded; else mapProblem\">\n          <div #schoolAddressMap id=\"school-address-map\"></div>\n        </ng-container>\n        <ng-template #mapProblem>\n          <p class=\"map-problem\">Hubo un problema al cargar el mapa, por favor recargue la página.</p>\n        </ng-template>\n        <hr/>\n      </div>\n    </ng-container>\n    <!-- END-MAPA ------------------------------------------------------------------------------------------------------------------------------------------------ -->\n\n    <h6>Datos del director o directora</h6>\n    <div class=\"form-group\">\n      <label>Nombre de director o directora</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('principalFirstName')\"\n        [class.not-empty]=\"isEmpty('principalFirstName')\"\n        formControlName=\"principalFirstName\"\n        placeholder=\"Nombre de director o directora\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Apellido del director</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('principalLastName')\"\n        [class.not-empty]=\"isEmpty('principalLastName')\"\n        formControlName=\"principalLastName\"\n        placeholder=\"Apellido del director\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo del director</label>\n      <input\n        type=\"email\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('principalEmail')\"\n        [class.not-empty]=\"isEmpty('principalEmail')\"\n        formControlName=\"principalEmail\"\n        placeholder=\"Correo del director\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Número de teléfono del director</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('principalPhone')\"\n        [class.not-empty]=\"isEmpty('principalPhone')\"\n        formControlName=\"principalPhone\"\n        placeholder=\"Número de teléfono del director\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      >\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe llenar este campo!</div>\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <h6>Datos del subdirector o subdirectora</h6>\n    <div class=\"form-group\">\n      <label>Nombre de subdirector o subdirectora</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('subPrincipalFirstName')\"\n        [class.not-empty]=\"isEmpty('subPrincipalFirstName')\"\n        formControlName=\"subPrincipalFirstName\"\n        placeholder=\"Nombre de subdirector o subdirectora\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      > <!-- [class.not-empty]=\"isEmpty('subPrincipalFirstName')\" -->\n      <div class=\"field-alerts\">\n        <!-- <div class=\"field-empty\">¡Debe llenar este campo!</div> -->\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Apellido del subdirector</label>\n      <input\n        type=\"text\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('subPrincipalLastName')\"\n        [class.not-empty]=\"isEmpty('subPrincipalLastName')\"\n        formControlName=\"subPrincipalLastName\"\n        placeholder=\"Apellido del subdirector\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"25\"\n      > <!-- [class.not-empty]=\"isEmpty('subPrincipalLastName')\" -->\n      <div class=\"field-alerts\">\n        <!-- <div class=\"field-empty\">¡Debe llenar este campo!</div> -->\n        <div class=\"field-invalid\">¡Solo letras permitidas!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Correo del subdirector</label>\n      <input\n        type=\"email\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('subPrincipalEmail')\"\n        [class.not-empty]=\"isEmpty('subPrincipalEmail')\"\n        formControlName=\"subPrincipalEmail\"\n        placeholder=\"Correo del subdirector\"\n        pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,5}$\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"320\"\n      > <!-- [class.not-empty]=\"isEmpty('subPrincipalEmail')\" -->\n      <div class=\"field-alerts\">\n        <!-- <div class=\"field-empty\">¡Debe llenar este campo!</div> -->\n        <div class=\"field-invalid\">¡Debe tener un formato valido!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Número de teléfono del subdirector</label>\n      <input\n        type=\"tel\"\n        class=\"form-control not-has-max-or-min\"\n        [class.not-valid]=\"validate('subPrincipalPhone')\"\n        [class.not-empty]=\"isEmpty('subPrincipalPhone')\"\n        formControlName=\"subPrincipalPhone\"\n        placeholder=\"Número de teléfono del subdirector\"\n        [readonly]=\"disableThis()\"\n        maxlength=\"15\"\n      > <!-- [class.not-empty]=\"isEmpty('subPrincipalPhone')\" -->\n      <div class=\"field-alerts\">\n        <!-- <div class=\"field-empty\">¡Debe llenar este campo!</div> -->\n        <div class=\"field-invalid\">¡Solo números permitidos!</div>\n      </div>\n    </div>\n    <h6>Otros datos de la Escuela</h6>\n    <div class=\"two-wrapper\">\n      <div class=\"form-group\">\n        <label>Cantidad de docentes</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nTeachers')\"\n          [class.not-empty]=\"isEmpty('nTeachers')\"\n          formControlName=\"nTeachers\"\n          placeholder=\"Cantidad de docentes\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Cantidad personal administrativo</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nAdministrativeStaff')\"\n          [class.not-empty]=\"isEmpty('nAdministrativeStaff')\"\n          formControlName=\"nAdministrativeStaff\"\n          placeholder=\"Cantidad personal administrativo\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"two-wrapper\">\n      <div class=\"form-group\">\n        <label>Cantidad personal obrero</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nLaborStaff')\"\n          [class.not-empty]=\"isEmpty('nLaborStaff')\"\n          formControlName=\"nLaborStaff\"\n          placeholder=\"Cantidad personal obrero\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Cantidad de estudiantes</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nStudents')\"\n          [class.not-empty]=\"isEmpty('nStudents')\"\n          formControlName=\"nStudents\"\n          placeholder=\"Cantidad de estudiantes\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"two-wrapper\">\n      <div class=\"form-group\">\n        <label>Cantidad de grados</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nGrades')\"\n          [class.not-empty]=\"isEmpty('nGrades')\"\n          formControlName=\"nGrades\"\n          placeholder=\"Cantidad de grados\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Cantidad de secciones</label>\n        <input\n          type=\"text\"\n          class=\"form-control not-has-max-or-min\"\n          [class.not-valid]=\"validate('nSections')\"\n          [class.not-empty]=\"isEmpty('nSections')\"\n          formControlName=\"nSections\"\n          placeholder=\"Cantidad de secciones\"\n          [readonly]=\"disableThis()\"\n          maxlength=\"5\"\n        >\n        <div class=\"field-alerts\">\n          <div class=\"field-empty\">¡Debe llenar este campo!</div>\n          <div class=\"field-invalid\">¡Solo números positivos permitidos!</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Turno de clases</label>\n      <ng-select\n        class=\"form-control\"\n        notFoundText=\"Elementos no encontrados\"\n        [items]=\"schoolShifts\"\n        bindValue=\"id\"\n        bindLabel=\"name\"\n        [labelForId]=\"mode+'-'+index+'-'+5\"\n        formControlName=\"schoolShift\"\n        [virtualScroll]=\"true\"\n        [id]=\"mode+'-'+index+'-'+5\"\n        placeholder=\"Turno de clases\"\n        [readonly]=\"disableThis()\">\n        <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\">\n          <small>{{item.name}}</small>\n        </ng-template>\n      </ng-select>\n      <div class=\"field-alerts\">\n        <div class=\"field-empty\">¡Debe Seleccionar un turno!</div>\n      </div>\n    </div>\n    <button *ngIf=\"showSendBtn()\" type=\"submit\" class=\"btn btn-primary text-decoration-none py-2 px-4 mt-1\"\n    [disabled]=\"!schoolForm.valid || disable || sendingForm\" [class.disabled]=\"!schoolForm.valid\">\n    <span *ngIf=\"sendingForm\" class=\"spinner-grow spinner-grow-sm\"></span>{{ !sendingForm? 'Enviar solicitud':'Enviando..' }}\n    </button>\n</form>\n";
      /***/
    },

    /***/
    "wx8+":
    /*!*********************************************************************!*\
      !*** ./src/app/web/pages/previous-steps/steps/steps.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function wx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.main-steps-view {\n  padding: 1.5rem 1rem 1rem;\n}\n@media screen and (min-width: 480px) and (orientation: portrait) {\n  .main-steps-view {\n    padding: 2rem;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .main-steps-view {\n    padding: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .main-steps-view {\n    padding: 2.5rem 3rem;\n  }\n}\nh1 {\n  font-size: x-large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h1 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h1 {\n    font-size: 1.65rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h1 {\n    font-size: xx-large !important;\n  }\n}\nh3, h4 {\n  font-size: large !important;\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: x-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  h3, h4 {\n    font-size: xx-large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.25rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  h3, h4 {\n    font-size: 1.75rem !important;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  p, button, a, li, label {\n    font-size: 1.35rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: 0.9rem !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: medium !important;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  p, button, a, li, label {\n    font-size: large !important;\n  }\n}\n::ng-deep body {\n  background: #ebeff5;\n}\n.nb-theme-default * {\n  font-family: \"Montserrat\" !important;\n}\n::ng-deep [class^=icon-]:before,\n::ng-deep [class*=\" icon-\"]:before,\n::ng-deep input[type=date]:after {\n  font-family: \"amblemaicons\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: 0.2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: 0.2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n::ng-deep .icon-one:before,\n::ng-deep .icon-two:before,\n::ng-deep .icon-three:before {\n  font-family: Montserrat;\n  font-weight: bold;\n}\n::ng-deep .icon-one:before {\n  content: \"1\";\n}\n::ng-deep .icon-two:before {\n  content: \"2\";\n}\n::ng-deep .icon-three:before {\n  content: \"3\";\n}\n::ng-deep .icon-medal:before {\n  content: \"\";\n}\n::ng-deep .icon-amblemonedas:before {\n  content: \"\";\n}\n::ng-deep .icon-anuario:before {\n  content: \"\";\n}\n::ng-deep .icon-convencion:before {\n  content: \"\";\n}\n::ng-deep .icon-diagnostico:before {\n  content: \"\";\n}\n::ng-deep .icon-icn-docentes:before {\n  content: \"\";\n}\n::ng-deep .icon-planificacion:before {\n  content: \"\";\n}\n::ng-deep .icon-taller-inicial:before {\n  content: \"\";\n}\n::ng-deep .icon-venezuela:before {\n  content: \"\";\n}\n::ng-deep .icon-actividades:before {\n  content: \"\";\n}\n::ng-deep .icon-trash-empty:before {\n  content: \"\";\n}\n::ng-deep .icon-camera:before {\n  content: \"\";\n}\n::ng-deep .icon-pencil:before {\n  content: \"\";\n}\n::ng-deep .icon-eye:before {\n  content: \"\";\n}\n::ng-deep .icon-calendar:before {\n  content: \"\";\n}\n::ng-deep .icon-folder-open:before {\n  content: \"\";\n}\n::ng-deep .icon-bars:before {\n  content: \"\";\n}\n::ng-deep .icon-list-numbered:before {\n  content: \"\";\n}\n::ng-deep .icon-trash:before {\n  content: \"\";\n}\n::ng-deep .icon-book:before {\n  content: \"\";\n}\n::ng-deep .icon-image:before {\n  content: \"\";\n}\n::ng-deep .icon-photo:before {\n  content: \"\";\n}\n::ng-deep .icon-picture-o:before {\n  content: \"\";\n}\n::ng-deep .icon-leaf:before {\n  content: \"\";\n}\n::ng-deep .icon-bar-chart:before {\n  content: \"\";\n}\n::ng-deep .icon-bar-chart-o:before {\n  content: \"\";\n}\n::ng-deep .icon-group:before {\n  content: \"\";\n}\n::ng-deep .icon-users:before {\n  content: \"\";\n}\n::ng-deep .icon-file-text:before {\n  content: \"\";\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .description-info {\n    flex-direction: row !important;\n    flex-wrap: wrap;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .description-info {\n    flex-direction: row !important;\n    flex-wrap: wrap;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info {\n    margin-bottom: 0 !important;\n  }\n}\n.main-steps-view .description-info h1, .main-steps-view .description-info p {\n  color: #00809a;\n}\n.main-steps-view .description-info h1 {\n  text-align: center;\n  width: 100%;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info h1 {\n    margin-bottom: 1.25rem !important;\n  }\n}\n.main-steps-view .description-info .below-desc-info {\n  width: 100%;\n}\n.main-steps-view .description-info .below-desc-info p {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info .below-desc-info p {\n    width: 80%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .main-steps-view .description-info .below-desc-info p {\n    width: 70%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .main-steps-view .description-info .below-desc-info p {\n    width: 62%;\n  }\n}\n.main-steps-view .description-info button {\n  background: #00809a;\n  border-color: #00809a;\n  width: 100%;\n  color: #fff;\n}\n.main-steps-view .description-info button span {\n  color: #fff;\n}\n.main-steps-view .description-info button.cancel-btn {\n  border-color: #9fa9bd;\n  background-color: #9fa9bd;\n  color: #fff;\n}\n.main-steps-view .description-info button:focus {\n  box-shadow: none;\n}\n.main-steps-view .description-info button:hover {\n  background: #fff;\n  color: #00809a;\n}\n.main-steps-view .description-info button:hover span {\n  color: #00809a;\n}\n.main-steps-view .description-info button:hover.inactive, .main-steps-view .description-info button:hover[disabled] {\n  background-color: #00809a;\n  color: #fff;\n  cursor: default;\n}\n.main-steps-view .description-info button:hover.inactive span, .main-steps-view .description-info button:hover[disabled] span {\n  color: #fff;\n}\n.main-steps-view .description-info button:hover.cancel-btn {\n  background-color: #fff;\n  color: #9fa9bd;\n}\n.main-steps-view .description-info button:hover.cancel-btn.inactive, .main-steps-view .description-info button:hover.cancel-btn[disabled] {\n  background-color: #9fa9bd;\n  color: #fff;\n}\n@media screen and (min-width: 576px) and (min-width: 640px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .description-info button {\n    width: auto;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    border: 2px solid #00809a;\n    margin-bottom: 2rem !important;\n    margin-right: 1.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    padding: 0.45rem 0.5rem !important;\n    width: 10rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1600px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    min-width: 11rem !important;\n    width: auto !important;\n    padding: 0.45rem 0.85rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) and (min-width: 1200px) and (min-width: 1900px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    min-width: 12rem !important;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .description-info button {\n    margin-bottom: 1.25rem !important;\n    margin-right: 0;\n  }\n}\n@media screen and (orientation: portrait) {\n  .main-steps-view .description-info button.margin-with-peca {\n    margin-top: 1rem !important;\n  }\n}\n@media screen and (orientation: landscape) and (max-width: 639px) {\n  .main-steps-view .description-info button.margin-with-peca {\n    margin-top: 1rem !important;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .description-info button.margin-with-peca {\n    margin-left: 1.5rem;\n  }\n}\n.main-steps-view .description-info button:focus {\n  box-shadow: none;\n}\n.main-steps-view .description-info button:hover {\n  background: transparent;\n  color: #00809a;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .mt-add {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  .main-steps-view .mt-add {\n    margin-top: 2rem;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1920px) and (orientation: landscape) {\n  .main-steps-view .mt-add {\n    margin-top: 2.25rem;\n  }\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    background: #fff;\n    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .tabs-container {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    background: #fff;\n    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);\n  }\n}\n.main-steps-view .tabs-container ul {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border: none;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container ul {\n    flex-wrap: wrap;\n    overflow-x: initial;\n    overflow-y: initial;\n    border-bottom: 2px solid #ebeff5;\n    justify-content: center;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .main-steps-view .tabs-container ul {\n    justify-content: center;\n    padding-left: 0.5rem;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .tabs-container ul {\n    flex-wrap: wrap;\n    overflow-x: initial;\n    overflow-y: initial;\n    border-bottom: 2px solid #ebeff5;\n    justify-content: center;\n  }\n}\n.main-steps-view .tabs-container ul li {\n  margin-right: 0.5rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container ul li {\n    margin-right: 0;\n    flex: 0 0 20%;\n    text-align: center;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .tabs-container ul li {\n    margin-right: 0;\n    flex: 0 0 20%;\n    text-align: center;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .tabs-container ul li {\n    flex: 0 0 21.75%;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .main-steps-view .tabs-container ul li {\n    flex: 0 0 22%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  .main-steps-view .tabs-container ul li {\n    flex: 0 0 22.5%;\n  }\n}\n.main-steps-view .tabs-container ul li a {\n  background: #cccccc;\n  color: #fff;\n  font-weight: bold;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container ul li a {\n    background: transparent;\n    border: none;\n    border-radius: 0;\n    color: #827f7f;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .tabs-container ul li a {\n    background: transparent;\n    border: none;\n    border-radius: 0;\n    color: #827f7f;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .tabs-container ul li a {\n    padding: 1rem 1rem 0.85rem;\n  }\n}\n.main-steps-view .tabs-container ul li a.active {\n  background: #00809a;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container ul li a.active {\n    border-bottom: 3px solid;\n    background: transparent;\n    color: #00809a;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: portrait) {\n  .main-steps-view .tabs-container ul li a.active {\n    border-bottom: 3px solid;\n    background: transparent;\n    color: #00809a;\n  }\n}\n.main-steps-view .tabs-container .steps-progress-bar {\n  margin-top: 1.75rem;\n  padding: 1rem 1.65rem 0;\n  text-align: center;\n  background: #fff;\n  border-top-left-radius: 1.4rem;\n  border-top-right-radius: 1.4rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container .steps-progress-bar {\n    margin-top: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    display: flex;\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 2rem;\n  }\n}\n@media screen and (min-width: 768px) and (min-width: 800px) and (orientation: landscape) {\n  .main-steps-view .tabs-container .steps-progress-bar {\n    width: 85%;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .main-steps-view .tabs-container .steps-progress-bar {\n    padding: 1rem 2.4rem 0;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .tabs-container .steps-progress-bar {\n    width: 92.5%;\n  }\n}\n@media screen and (min-width: 1200px) and (min-width: 1680px) and (orientation: landscape) {\n  .main-steps-view .tabs-container .steps-progress-bar {\n    width: 93.5%;\n  }\n}\n.main-steps-view .tabs-container .steps-progress-bar h6 {\n  color: #827f7f;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container .steps-progress-bar h6 {\n    margin-right: 1.5rem;\n  }\n}\n.main-steps-view .tabs-container .steps-progress-bar .progress {\n  height: 1.4rem;\n  border: none;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container .steps-progress-bar .progress {\n    flex: 1;\n  }\n}\n.main-steps-view .tabs-container .steps-progress-bar .progress .progress-bar {\n  background-color: #38d485;\n  transition: width 0.75s;\n}\n.main-steps-view .tabs-container .steps-progress-bar .progress .progress-bar-striped {\n  background-color: #ced4da;\n}\n.main-steps-view .tabs-container .tab-content {\n  background: #fff;\n  padding-bottom: 1rem;\n  border-bottom-left-radius: 1.4rem;\n  border-bottom-right-radius: 1.4rem;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container .tab-content {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .main-steps-view .tabs-container .tab-content {\n    padding-bottom: 2rem;\n  }\n}\n.main-steps-view .tabs-container .tab-content .tab-pane {\n  padding: 0;\n}\n@media screen and (orientation: landscape) and (min-width: 640px) {\n  .main-steps-view .tabs-container .tab-content .tab-pane {\n    max-width: 96%;\n  }\n}\n@media screen and (min-width: 576px) and (orientation: portrait) {\n  .main-steps-view .tabs-container .tab-content .tab-pane {\n    max-width: 96%;\n  }\n}\n@media screen and (min-width: 1200px) and (orientation: landscape) {\n  .main-steps-view .tabs-container .tab-content .tab-pane {\n    max-width: 98%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0ZXBzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3BsYWNlaG9sZGVycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByZXZpb3VzLXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2FtYmxlbWEtaWNvbnMvYW1ibGVtYWljb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDU2hCO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QURQRjtBQ1NFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBRFNQO0FDV0E7RUFDRSxjQXJCSztBRGFQO0FFU0E7RUFDRSx5QkFBQTtBRk5GO0FFUUU7RUFIRjtJQUlJLGFBQUE7RUZMRjtBQUNGO0FHcURRO0VEckRSO0lBT0ksYUFBQTtFRkhGO0FBQ0Y7QUdnRFE7RURyRFI7SUFVSSxvQkFBQTtFRkRGO0FBQ0Y7QUVLQTtFQUNFLDZCQUFBO0FGRkY7QUd1Q1E7RUR0Q1I7SUFHSSw2QkFBQTtFRkFGO0FBQ0Y7QUdrQ1E7RUR0Q1I7SUFNSSw2QkFBQTtFRkVGO0FBQ0Y7QUc2QlE7RUR0Q1I7SUFTSSw4QkFBQTtFRklGO0FBQ0Y7QUVGQTtFQUNFLDJCQUFBO0FGS0Y7QUdvQlE7RUQxQlI7SUFHSSw2QkFBQTtFRk9GO0FBQ0Y7QUdlUTtFRDFCUjtJQU1JLDhCQUFBO0VGU0Y7QUFDRjtBR1VRO0VEMUJSO0lBU0ksNkJBQUE7RUZXRjtBQUNGO0FHS1E7RUQxQlI7SUFZSSw0QkFBQTtF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c3RlcHMuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCJmb250cy9hbWJsZW1hLWljb25zL2FtYmxlbWFpY29uc1wiO1xuXG4ubWFpbi1zdGVwcy12aWV3IHtcbiAgICBAZXh0ZW5kICVwYWRkaW5nLWNvbnRzO1xuXG4gICAgLmRlc2NyaXB0aW9uLWluZm8ge1xuICAgICAgICBAaW5jbHVkZSBvbi1tZXNzYWdlO1xuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuICAgICAgICBoMSwgcCB7XG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlc2t0b3AgXG4gICAgICAgIGgxIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyBtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgfVxuICAgICAgICAuYmVsb3ctZGVzYy1pbmZvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBwIHsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7IHdpZHRoOiA4MCU7IH1cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxNjAwcHgpIHsgd2lkdGg6IDcwJTsgfVxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLGxhbmRzY2FwZSx0cnVlLDE5MDBweCkgeyB3aWR0aDogNjIlOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBidG4tcmlnaHRlZDsgIFxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfSAgICBcblxuICAgICAgICAgICAgJi5tYXJnaW4td2l0aC1wZWNhIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgLm10LWFkZCB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7IG1hcmdpbi10b3A6IDEuNXJlbTsgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxNjgwcHgpIHsgbWFyZ2luLXRvcDogMnJlbTsgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxOTIwcHgpIHsgbWFyZ2luLXRvcDogMi4yNXJlbTsgfVxuICAgIH1cbiAgICAudGFicy1jb250YWluZXIge1xuICAgICAgICBAbWl4aW4gdGFicy1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOjY0MHB4KSB7IEBpbmNsdWRlIHRhYnMtY29udGFpbmVyOyB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgQGluY2x1ZGUgdGFicy1jb250YWluZXI7IH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgICAgIEBtaXhpbiB1bC1taXgge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG1hcC1nZXQoJGNvbG9yX21hcCwgZ3JheSk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7IEBpbmNsdWRlIHVsLW1peDsgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCxwb3J0cmFpdCkge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyBAaW5jbHVkZSB1bC1taXg7IH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuXG4gICAgICAgICAgICAgICAgQG1peGluIGxpLW1peCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDIwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7IEBpbmNsdWRlIGxpLW1peDsgfVxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgQGluY2x1ZGUgbGktbWl4OyB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHsgZmxleDogMCAwIDIxLjc1JTsgfVxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLGxhbmRzY2FwZSkgeyBmbGV4OiAwIDAgMjIlOyB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlLHRydWUsMTY4MHB4KSB7IGZsZXg6IDAgMCAyMi41JTsgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIHRhYi1ncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcblxuICAgICAgICAgICAgICAgICAgICBAbWl4aW4gYS1taXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgZGFya2llLWdyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHsgQGluY2x1ZGUgYS1taXg7IH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyBAaW5jbHVkZSBhLW1peDsgfVxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLGxhbmRzY2FwZSkgeyBwYWRkaW5nOiAxcmVtIDFyZW0gMC44NXJlbTsgfVxuXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtaXhpbiBhY3RpdmUtbWl4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7IEBpbmNsdWRlIGFjdGl2ZS1taXg7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgQGluY2x1ZGUgYWN0aXZlLW1peDsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN0ZXBzLXByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjY1cmVtIDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS40cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNHJlbTtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6NjQwcHgpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobWVkaXVtLGxhbmRzY2FwZSx0cnVlLDgwMHB4KSB7IHdpZHRoOiA4NSU7IH1cbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwscG9ydHJhaXQpIHsgcGFkZGluZzogMXJlbSAyLjRyZW0gMDsgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHsgd2lkdGg6IDkyLjUlOyB9XG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlcixsYW5kc2NhcGUsdHJ1ZSwxNjgwcHgpIHsgd2lkdGg6IDkzLjUlOyB9XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBkYXJraWUtZ3JheSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOjY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgcHJvZ3Jlc3MtZ3JlZW4pO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC43NXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC43NXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9yX21hcCwgZm9ybS1ncmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS40cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNHJlbTtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6NjQwcHgpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHsgcGFkZGluZy1ib3R0b206IDJyZW07IH1cblxuICAgICAgICAgICAgLnRhYi1wYW5lIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6NjQwcHgpIHsgbWF4LXdpZHRoOiA5NiU7IH1cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLHBvcnRyYWl0KSB7IG1heC13aWR0aDogOTYlOyB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsbGFuZHNjYXBlKSB7IG1heC13aWR0aDogOTglOyB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCIuL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4kY29sb3JfbWFwOiAoXG4gIGJsdWU6ICMwMDgwOWEsXG4gIHNvZnQtZ3JlZW4tb2xkOiAjOWFkNjQ0LFxuICBzb2Z0LWdyZWVuOiAjODFiMDNlLFxuICBwcm9ncmVzcy1ncmVlbjogIzM4ZDQ4NSxcbiAgZGFyay1ncmVlbjogIzAwNzIyZSxcbiAgZ3JheTogI2ViZWZmNSxcbiAgZ3JheWVyOiAjZTZlN2U4LFxuICB0YWItZ3JheTogI2NjY2NjYyxcbiAgZm9ybS1ncmF5OiAjY2VkNGRhLFxuICBkYXJrLWdyYXk6ICM5MDkwOTAsXG4gIGRhcmtpZS1ncmF5OiAjODI3ZjdmLFxuICBkYXJrZXN0LWdyYXk6ICM2MjYyNjIsXG4gIHJlZDogI2Y1MzAzMCxcbik7XG5cbi8vIHotaW5kZXhcbiR6LWluZGV4LWhpZ2hlcjogNDtcblxuJXBhZGRpbmctY29udHMge1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhtZWRpdW0sIGxhbmRzY2FwZSwgdHJ1ZSwgODAwcHgpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2VyLCBsYW5kc2NhcGUsIHRydWUsIDE2MDBweCkge1xuICAgIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xuICB9XG59XG5cbi8vIEdlbmVyYWxzXG4laDEge1xuICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhzbWFsbCwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiVoMzQge1xuICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsoc21hbGwsIHBvcnRyYWl0KSB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgcG9ydHJhaXQpIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuJXAge1xuICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlLCBwb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZXIsIGxhbmRzY2FwZSwgdHJ1ZSwgMTYwMHB4KSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtaXhpbiBidXR0b24tcGFkIHtcbiAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogMC40NXJlbSAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTByZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxNjAwcHgpIHtcbiAgICBtaW4td2lkdGg6IDExcmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuODVyZW0gIWltcG9ydGFudDtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYWJyZWFrKGxhcmdlciwgbGFuZHNjYXBlLCB0cnVlLCAxOTAwcHgpIHtcbiAgICBtaW4td2lkdGg6IDEycmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1peGluIHNoYXJlZC1idG4tY29uZnMoKSB7XG4gIG1pbi13aWR0aDogOHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJixcbiAgJltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYuY2FuY2VsLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmNlbC1ncmF5O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcblxuICAgICYuaW5hY3RpdmUsXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAmLmNhbmNlbC1idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiAkY2FuY2VsLWdyYXk7XG5cbiAgICAgICYuaW5hY3RpdmUsXG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3Njc3MvcGxhY2Vob2xkZXJzJztcblxuOjpuZy1kZWVwIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yX21hcCwgZ3JheSk7XG59XG4ubmItdGhlbWUtZGVmYXVsdCAqIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLy9cbmgxe1xuICAgIEBleHRlbmQgJWgxO1xufVxuaDMsIGg0IHtcbiAgICBAZXh0ZW5kICVoMzQ7XG59XG5wLCBidXR0b24sIGEsIGxpLCBsYWJlbCB7XG4gICAgQGV4dGVuZCAlcDtcbn1cblxuQG1peGluIG9uLW1lc3NhZ2UgeyBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDo2NDBweCkgeyBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UscG9ydHJhaXQpIHsgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyBmbGV4LXdyYXA6IHdyYXA7IH1cbn1cblxuQG1peGluIGJ0bi1yaWdodGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2FuY2VsLWdyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JfbWFwLCBibHVlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuY2FuY2VsLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICRjYW5jZWwtZ3JheTtcblxuICAgICAgICAgICAgJi5pbmFjdGl2ZSwgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5jZWwtZ3JheTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG4gICAgICAgICAgICBcbiAgICBAaW5jbHVkZSBtZWRpYWJyZWFrKHNtYWxsLGxhbmRzY2FwZSx0cnVlLDY0MHB4KSB7IHdpZHRoOiBhdXRvOyB9XG4gICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxwb3J0cmFpdCkgeyB3aWR0aDogYXV0bzsgfVxuICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1wYWQ7IFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvcl9tYXAsIGJsdWUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtOyAgICAgICAgICAgICAgICAgXG4gICAgfSBcbn0iLCI6Om5nLWRlZXAge1xuICBbY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlLFxuICBbY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSxcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06YWZ0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcImFtYmxlbWFpY29uc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNwZWFrOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBvcGFjaXR5OiAuODsgKi9cblxuICAgIC8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cbiAgICAvKiBmaXggYnV0dG9ucyBoZWlnaHQsIGZvciB0d2l0dGVyIGJvb3RzdHJhcCAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG5cbiAgICAvKiBBbmltYXRpb24gY2VudGVyIGNvbXBlbnNhdGlvbiAtIG1hcmdpbnMgc2hvdWxkIGJlIHN5bW1ldHJpYyAqL1xuICAgIC8qIHJlbW92ZSBpZiBub3QgbmVlZGVkICovXG4gICAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xuXG4gICAgLyogeW91IGNhbiBiZSBtb3JlIGNvbWZvcnRhYmxlIHdpdGggaW5jcmVhc2VkIGljb25zIHNpemUgKi9cbiAgICAvKiBmb250LXNpemU6IDEyMCU7ICovXG5cbiAgICAvKiBGb250IHNtb290aGluZy4gVGhhdCB3YXMgdGFrZW4gZnJvbSBUV0JTICovXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuICAgIC8qIFVuY29tbWVudCBmb3IgM0QgZWZmZWN0ICovXG4gICAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTsgKi9cbiAgfVxuXG4gIC5pY29uLW9uZTpiZWZvcmUsXG4gIC5pY29uLXR3bzpiZWZvcmUsXG4gIC5pY29uLXRocmVlOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuaWNvbi1vbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIjFcIjtcbiAgfVxuICAuaWNvbi10d286YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIjJcIjtcbiAgfVxuICAuaWNvbi10aHJlZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiM1wiO1xuICB9XG5cbiAgLmljb24tbWVkYWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMFwiO1xuICB9XG4gIC5pY29uLWFtYmxlbW9uZWRhczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24tYW51YXJpbzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24tY29udmVuY2lvbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAzXCI7XG4gIH1cbiAgLmljb24tZGlhZ25vc3RpY286YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uLWljbi1kb2NlbnRlczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA1XCI7XG4gIH1cbiAgLmljb24tcGxhbmlmaWNhY2lvbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG4gIH1cbiAgLmljb24tdGFsbGVyLWluaWNpYWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uLXZlbmV6dWVsYTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA4XCI7XG4gIH1cbiAgLmljb24tYWN0aXZpZGFkZXM6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwOVwiO1xuICB9XG4gIC5pY29uLXRyYXNoLWVtcHR5OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwMTRcIjtcbiAgfVxuICAuaWNvbi1jYW1lcmE6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjAzMFwiO1xuICB9XG4gIC5pY29uLXBlbmNpbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDQwXCI7XG4gIH1cbiAgLmljb24tZXllOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwNmVcIjtcbiAgfVxuICAuaWNvbi1jYWxlbmRhcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDczXCI7XG4gIH1cbiAgLmljb24tZm9sZGVyLW9wZW46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjA3Y1wiO1xuICB9XG4gIC5pY29uLWJhcnM6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjBjOVwiO1xuICB9XG4gIC5pY29uLWxpc3QtbnVtYmVyZWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjBjYlwiO1xuICB9XG4gIC5pY29uLXRyYXNoOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxZjhcIjtcbiAgfVxuICAuaWNvbi1ib29rOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwMmRcIjtcbiAgfVxuICAuaWNvbi1pbWFnZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDNlXCI7XG4gIH1cbiAgLmljb24tcGhvdG86YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjAzZVwiO1xuICB9XG4gIC5pY29uLXBpY3R1cmUtbzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDNlXCI7XG4gIH1cbiAgLmljb24tbGVhZjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDZjXCI7XG4gIH1cbiAgLmljb24tYmFyLWNoYXJ0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwODBcIjtcbiAgfVxuICAuaWNvbi1iYXItY2hhcnQtbzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDgwXCI7XG4gIH1cbiAgLmljb24tZ3JvdXA6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjBjMFwiO1xuICB9XG4gIC5pY29uLXVzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwYzBcIjtcbiAgfVxuICAuaWNvbi1maWxlLXRleHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkyMlwiO1xuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=steps-steps-module-es5.js.map