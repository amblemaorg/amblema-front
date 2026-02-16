(function () {
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~e-learning-modules-list-modules-list-module~web-web-module"], {
    /***/
    "2MB4":
    /*!**************************************************************************!*\
      !*** ./src/app/web/shared/forms/elements/form-validation.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function MB4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.error-message {\n  color: #f35f5f;\n  font-size: 3.5vw;\n  text-align: right;\n}\n@media only screen and (min-width: 768px) {\n  .error-message {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .error-message {\n    font-size: 0.9vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Zvcm0tdmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUFUQTtFQUNFLGNERUk7RUNESixnQkFBQTtFQUNBLGlCQUFBO0FBWUY7QUNzQkk7RURyQ0o7SUFNSSxjQUFBO0VBYUY7QUFDRjtBQ2lCSTtFRHJDSjtJQVVJLGdCQUFBO0VBY0Y7QUFDRiIsImZpbGUiOiJmb3JtLXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAkcmVkO1xuICBmb250LXNpemU6IDMuNXZ3O1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIGZvbnQtc2l6ZTogLjl2dztcbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "2yz7":
    /*!*****************************************************!*\
      !*** ./src/app/web/shared/cover/cover.component.ts ***!
      \*****************************************************/

    /*! exports provided: CoverComponent */

    /***/
    function yz7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoverComponent", function () {
        return CoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cover.component.html */
      "Zijh");
      /* harmony import */


      var _cover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cover.component.scss */
      "olx8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CoverComponent = /*#__PURE__*/function () {
        function CoverComponent() {
          _classCallCheck(this, CoverComponent);

          this.sponsorPage = false;
          this.coordinatorPage = false;
          this.titleBold = false;
          this.customOptions = {
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            nav: false,
            navSpeed: 3000,
            responsive: {
              0: {
                items: 1
              }
            }
          };
        }

        _createClass(CoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.options) {
              Object.keys(this.options).map(function (option) {
                _this[option] = _this.options[option];
              });
            }
          }
        }]);

        return CoverComponent;
      }();

      CoverComponent.ctorParameters = function () {
        return [];
      };

      CoverComponent.propDecorators = {
        overlayImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'web-cover',
        template: _raw_loader_cover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CoverComponent);
      /***/
    },

    /***/
    "30GA":
    /*!***************************************************************!*\
      !*** ./src/app/web/shared/bg-heading/bg-heading.component.ts ***!
      \***************************************************************/

    /*! exports provided: BgHeadingComponent */

    /***/
    function GA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BgHeadingComponent", function () {
        return BgHeadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bg_heading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bg-heading.component.html */
      "Rfeq");
      /* harmony import */


      var _bg_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bg-heading.component.scss */
      "WkYa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var BgHeadingComponent = /*#__PURE__*/function () {
        function BgHeadingComponent(zone) {
          _classCallCheck(this, BgHeadingComponent);

          this.zone = zone;
        }

        _createClass(BgHeadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.zone.runOutsideAngular(function () {
              _this2.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, "scroll").subscribe(function (event) {
                _this2.onScroll(event);
              });
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll($event) {
            var scrollPosition = $event.srcElement.children[0].scrollTop;
            var headingElementPosition = this.bgHeading.nativeElement.offsetTop;

            if (headingElementPosition / scrollPosition <= 2) {
              if (this.scrollSubscription) {
                this.scrollSubscription.unsubscribe();
              }

              this.blueLine.nativeElement.classList.add("animation-finish");
              this.blueLine.nativeElement.classList.remove("animation-init");
              this.greenLine.nativeElement.classList.add("animation-finish");
              this.greenLine.nativeElement.classList.remove("animation-init");
            }
          }
        }]);

        return BgHeadingComponent;
      }();

      BgHeadingComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      BgHeadingComponent.propDecorators = {
        bgHeading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["bgHeading", {
            "static": true
          }]
        }],
        blueLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["blueLine", {
            "static": true
          }]
        }],
        greenLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["greenLine", {
            "static": true
          }]
        }]
      };
      BgHeadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "web-bg-heading",
        template: _raw_loader_bg_heading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bg_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BgHeadingComponent);
      /***/
    },

    /***/
    "3K1h":
    /*!****************************************************************************!*\
      !*** ./src/app/web/shared/forms/elements/form-confirmation.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function K1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.form-element {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form-element .form-label {\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 768px) {\n  .form-element .form-label {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form-element .form-label {\n    font-size: 1.5vw;\n  }\n}\n.form-element .form-options input.form-confirmation {\n  display: none;\n}\n.form-element .form-options .form-button {\n  background: transparent;\n  border-radius: 0;\n  border: 1px solid #fff;\n  color: #fff;\n  font-size: 4.5vw;\n  margin: 0 2vw;\n  padding: 1vw 4vw !important;\n  position: relative;\n  transform: unset;\n}\n@media only screen and (min-width: 768px) {\n  .form-element .form-options .form-button {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form-element .form-options .form-button {\n    font-size: 1.25vw;\n    margin: 0 1vw;\n    padding: 0.4vw 2vw !important;\n  }\n}\n.form-element .form-options .form-button.active {\n  background: white;\n  color: #00809a;\n}\n.form-element .form-options .form-button:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Zvcm0tY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVZFO0VBQ0UsZ0JBQUE7QUFZSjtBQ21CSTtFRGhDRjtJQUlJLGdCQUFBO0VBYUo7QUFDRjtBQ2NJO0VEaENGO0lBUUksZ0JBQUE7RUFjSjtBQUNGO0FBVEk7RUFDRSxhQUFBO0FBV047QUFSSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdEM0JFO0VDNEJGLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVVOO0FDTEk7RURkQTtJQVlJLGdCQUFBO0VBV047QUFDRjtBQ1ZJO0VEZEE7SUFnQkksaUJBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFZTjtBQUNGO0FBVk07RUFDRSxpQkFBQTtFQUNBLGNEakREO0FDNkRQO0FBVE07RUFDRSxhQUFBO0FBV1IiLCJmaWxlIjoiZm9ybS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4uZm9ybS1lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuZm9ybS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tb3B0aW9ucyB7XG5cbiAgICBpbnB1dC5mb3JtLWNvbmZpcm1hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5mb3JtLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgZm9udC1zaXplOiA0LjV2dztcbiAgICAgIG1hcmdpbjogMCAydnc7XG4gICAgICBwYWRkaW5nOiAxdncgNHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2Zvcm06IHVuc2V0O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xuICAgICAgICBtYXJnaW46IDAgMXZ3O1xuICAgICAgICBwYWRkaW5nOiAuNHZ3IDJ2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "4YED":
    /*!*****************************************************************!*\
      !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
      \*****************************************************************/

    /*! exports provided: disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll */

    /***/
    function YED(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function () {
        return disableBodyScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearAllBodyScrollLocks", function () {
        return clearAllBodyScrollLocks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function () {
        return enableBodyScroll;
      });

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        } else {
          return Array.from(arr);
        }
      } // Older browsers don't support event options, feature detect it.
      // Adopted and modified solution from Bohdan Didukh (2017)
      // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi


      var hasPassiveEvents = false;

      if (typeof window !== 'undefined') {
        var passiveTestOptions = {
          get passive() {
            hasPassiveEvents = true;
            return undefined;
          }

        };
        window.addEventListener('testPassive', null, passiveTestOptions);
        window.removeEventListener('testPassive', null, passiveTestOptions);
      }

      var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
      var locks = [];
      var documentListenerAdded = false;
      var initialClientY = -1;
      var previousBodyOverflowSetting = void 0;
      var previousBodyPaddingRight = void 0; // returns true if `el` should be allowed to receive touchmove events.

      var allowTouchMove = function allowTouchMove(el) {
        return locks.some(function (lock) {
          if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
            return true;
          }

          return false;
        });
      };

      var preventDefault = function preventDefault(rawEvent) {
        var e = rawEvent || window.event; // For the case whereby consumers adds a touchmove event listener to document.
        // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
        // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
        // the touchmove event on document will break.

        if (allowTouchMove(e.target)) {
          return true;
        } // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).


        if (e.touches.length > 1) return true;
        if (e.preventDefault) e.preventDefault();
        return false;
      };

      var setOverflowHidden = function setOverflowHidden(options) {
        // If previousBodyPaddingRight is already set, don't set it again.
        if (previousBodyPaddingRight === undefined) {
          var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;

          var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

          if (_reserveScrollBarGap && scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = scrollBarGap + 'px';
          }
        } // If previousBodyOverflowSetting is already set, don't set it again.


        if (previousBodyOverflowSetting === undefined) {
          previousBodyOverflowSetting = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
        }
      };

      var restoreOverflowSetting = function restoreOverflowSetting() {
        if (previousBodyPaddingRight !== undefined) {
          document.body.style.paddingRight = previousBodyPaddingRight; // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
          // can be set again.

          previousBodyPaddingRight = undefined;
        }

        if (previousBodyOverflowSetting !== undefined) {
          document.body.style.overflow = previousBodyOverflowSetting; // Restore previousBodyOverflowSetting to undefined
          // so setOverflowHidden knows it can be set again.

          previousBodyOverflowSetting = undefined;
        }
      }; // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


      var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
        return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
      };

      var handleScroll = function handleScroll(event, targetElement) {
        var clientY = event.targetTouches[0].clientY - initialClientY;

        if (allowTouchMove(event.target)) {
          return false;
        }

        if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
          // element is at the top of its scroll.
          return preventDefault(event);
        }

        if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
          // element is at the bottom of its scroll.
          return preventDefault(event);
        }

        event.stopPropagation();
        return true;
      };

      var disableBodyScroll = function disableBodyScroll(targetElement, options) {
        // targetElement must be provided
        if (!targetElement) {
          // eslint-disable-next-line no-console
          console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
          return;
        } // disableBodyScroll must not have been called on this targetElement before


        if (locks.some(function (lock) {
          return lock.targetElement === targetElement;
        })) {
          return;
        }

        var lock = {
          targetElement: targetElement,
          options: options || {}
        };
        locks = [].concat(_toConsumableArray(locks), [lock]);

        if (isIosDevice) {
          targetElement.ontouchstart = function (event) {
            if (event.targetTouches.length === 1) {
              // detect single touch.
              initialClientY = event.targetTouches[0].clientY;
            }
          };

          targetElement.ontouchmove = function (event) {
            if (event.targetTouches.length === 1) {
              // detect single touch.
              handleScroll(event, targetElement);
            }
          };

          if (!documentListenerAdded) {
            document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
              passive: false
            } : undefined);
            documentListenerAdded = true;
          }
        } else {
          setOverflowHidden(options);
        }
      };

      var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
        if (isIosDevice) {
          // Clear all locks ontouchstart/ontouchmove handlers, and the references.
          locks.forEach(function (lock) {
            lock.targetElement.ontouchstart = null;
            lock.targetElement.ontouchmove = null;
          });

          if (documentListenerAdded) {
            document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
              passive: false
            } : undefined);
            documentListenerAdded = false;
          } // Reset initial clientY.


          initialClientY = -1;
        } else {
          restoreOverflowSetting();
        }

        locks = [];
      };

      var enableBodyScroll = function enableBodyScroll(targetElement) {
        if (!targetElement) {
          // eslint-disable-next-line no-console
          console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
          return;
        }

        locks = locks.filter(function (lock) {
          return lock.targetElement !== targetElement;
        });

        if (isIosDevice) {
          targetElement.ontouchstart = null;
          targetElement.ontouchmove = null;

          if (documentListenerAdded && locks.length === 0) {
            document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
              passive: false
            } : undefined);
            documentListenerAdded = false;
          }
        } else if (!locks.length) {
          restoreOverflowSetting();
        }
      };
      /***/

    },

    /***/
    "8UhY":
    /*!*************************************************************************!*\
      !*** ./src/app/web/shared/forms/form-wizard/form-wizard.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function UhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.form-heading {\n  font-size: 6vw;\n  font-weight: bold;\n  line-height: 1.2;\n}\n@media only screen and (min-width: 768px) {\n  .form-heading {\n    font-size: 3vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .form-heading {\n    font-size: 2vw;\n  }\n}\n.fields-container {\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 10vw;\n  position: relative;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container {\n    margin-bottom: 3vw;\n  }\n}\n.fields-container .form-field {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: 3vw 0;\n  position: relative;\n  width: 100%;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container .form-field {\n    margin: 2vw 0;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field {\n    margin: 1.5vw 0;\n    width: 45%;\n  }\n}\n.fields-container .form-field .field-label {\n  flex: 0 0 auto;\n  font-size: 4vw;\n  font-weight: bold;\n  margin: 0;\n  margin-right: 2vw;\n  max-width: 40%;\n  position: relative;\n  top: 1vw;\n  display: inline-block;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container .form-field .field-label {\n    font-size: 2vw;\n    top: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field .field-label {\n    font-size: 1vw;\n    margin-right: 1vw;\n    top: 0.5vw;\n  }\n}\n.fields-container .form-field .field-control {\n  background: transparent;\n  border: 0;\n  border-bottom: 2px solid white;\n  -webkit-appearance: none;\n  border-radius: 0;\n  color: white;\n  flex: 1 0 auto;\n  font-size: 4.5vw;\n  line-height: 1;\n  height: 6vw;\n  width: 50%;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container .form-field .field-control {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field .field-control {\n    font-size: 1.2vw;\n    height: 2vw;\n  }\n}\n.fields-container .form-field .field-control:focus {\n  outline: none;\n}\n.fields-container .form-field .field-control[disabled] {\n  border-bottom: 2px solid #909090;\n}\n.fields-container .form-field .field-control.ng-touched.ng-invalid {\n  border-bottom: 2px solid #f35f5f;\n}\n.fields-container .form-field .field-control.ng-touched.ng-valid {\n  border-bottom: 2px solid #81b03e;\n}\n.fields-container .form-field .field-control.ng-touched ~ web-form-validation {\n  display: block;\n}\n.fields-container .form-field .field-control.ng-untouched ~ web-form-validation {\n  display: none;\n}\n.fields-container .form-field web-form-validation {\n  position: absolute;\n  top: 6vw;\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field web-form-validation {\n    top: 2vw;\n  }\n}\n.fields-container .form-field.list ul,\n.fields-container .form-field.list ol {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n.fields-container .form-field.list ul li,\n.fields-container .form-field.list ol li {\n  font-size: 4.5vw;\n  line-height: 1.2;\n  margin-bottom: 3vw;\n  display: inline-block;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container .form-field.list ul li,\n.fields-container .form-field.list ol li {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field.list ul li,\n.fields-container .form-field.list ol li {\n    font-size: 1.5vw;\n    margin-bottom: 1.5vw;\n  }\n}\n.fields-container .form-field.select {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.fields-container .form-field.select .field-control {\n  flex: 1 0 auto;\n  width: 50%;\n}\n.fields-container .form-field.identification {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.fields-container .form-field.identification ng-select {\n  flex: 0 1 15%;\n}\n.fields-container .form-field.identification ng-select[id$=addressZoneType] {\n  flex: 0 1 22%;\n}\n.fields-container .form-field.identification input.field-control,\n.fields-container .form-field.identification web-form-input {\n  flex: 1 0 auto;\n  width: 40%;\n}\n.fields-container .form-field.googlemap .google-map-container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .fields-container .form-field.googlemap .google-map-container {\n    flex-wrap: nowrap;\n  }\n}\n.fields-container .form-field.googlemap .google-map-container label {\n  max-width: unset;\n  flex: 1;\n  margin-right: 0;\n}\n.fields-container .form-field.googlemap .google-map-container .google-map-opener {\n  background: #fff;\n  border: 2px solid #00809a;\n  padding: 0.4rem 1.25rem;\n  color: #00809a;\n  border-radius: 0.45rem;\n  width: 100%;\n  margin-top: 1rem;\n}\n@media screen and (min-width: 992px) and (orientation: landscape) {\n  .fields-container .form-field.googlemap .google-map-container .google-map-opener {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.fields-container .form-field.googlemap .google-map-container .google-map-opener:focus {\n  outline: none;\n}\n.fields-container .form-field.googlemap .google-map-container .google-map-opener:hover {\n  background: #00809a;\n  border: 2px solid #fff;\n  color: #fff;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content {\n  border: none;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-header {\n  border: none;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-header strong {\n  color: #00809a;\n  position: relative;\n  bottom: -0.5rem;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-header .close {\n  color: #00809a;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-header .close:focus {\n  outline: none;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-body #google-map {\n  min-height: 20rem;\n  height: 45vh;\n}\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .modal-content .modal-body .map-problem {\n  color: #00809a;\n}\n.fields-container .form-field.googlemap .google-map-container .google-map-opener, .fields-container .form-field.googlemap .google-map-container #google-map-modal strong,\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .map-problem {\n  font-size: 4vw;\n}\n@media only screen and (min-width: 768px) {\n  .fields-container .form-field.googlemap .google-map-container .google-map-opener, .fields-container .form-field.googlemap .google-map-container #google-map-modal strong,\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .map-problem {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .fields-container .form-field.googlemap .google-map-container .google-map-opener, .fields-container .form-field.googlemap .google-map-container #google-map-modal strong,\n.fields-container .form-field.googlemap .google-map-container #google-map-modal .map-problem {\n    font-size: 1vw;\n  }\n}\n.fields-container input.ng-touched ~ web-form-validation,\n.fields-container web-form-input.ng-touched ~ web-form-validation,\n.fields-container ng-select.ng-touched ~ web-form-validation {\n  display: block;\n}\n.fields-container input.ng-untouched ~ web-form-validation,\n.fields-container web-form-input.ng-untouched ~ web-form-validation,\n.fields-container ng-select.ng-untouched ~ web-form-validation {\n  display: none;\n}\n.fields-container web-form-input.ng-touched ~ web-form-validation {\n  display: block;\n}\n.fields-container web-form-input.ng-untouched ~ web-form-validation {\n  display: none;\n}\n.fields-container web-form-validation {\n  width: 70%;\n}\n.button-container {\n  text-align: center;\n}\n.form-button {\n  background: transparent;\n  border-radius: 0;\n  border: 1px solid #fff;\n  color: #fff;\n  font-size: 4.5vw;\n  margin: 0 2vw;\n  padding: 1vw 4vw !important;\n  position: relative;\n  transform: unset;\n}\n@media only screen and (min-width: 768px) {\n  .form-button {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  .form-button {\n    font-size: 1.25vw;\n    margin: 0 1vw;\n    padding: 0.4vw 2vw !important;\n  }\n}\n.form-button:hover {\n  background: white;\n  color: #00809a;\n}\n.form-button:focus {\n  outline: none;\n}\n.form-button[disabled] {\n  color: #909090;\n  border-color: #909090;\n}\n.form-button[disabled]:hover {\n  background: transparent;\n  color: #909090;\n}\n::ng-deep ng-select {\n  border-bottom: 2px solid #fff;\n  color: #fff;\n}\n::ng-deep ng-select .ng-select-container .ng-value {\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep ng-select .ng-select-container .ng-value {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select .ng-select-container .ng-value {\n    font-size: 1.2vw;\n  }\n}\n::ng-deep ng-select .ng-select-container .ng-input input {\n  color: #fff;\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep ng-select .ng-select-container .ng-input input {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select .ng-select-container .ng-input input {\n    font-size: 1.2vw;\n  }\n}\n::ng-deep ng-select .ng-select-container .ng-clear-wrapper {\n  width: auto;\n}\n::ng-deep ng-select .ng-select-container .ng-clear-wrapper .ng-clear {\n  font-size: 5vw;\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep ng-select .ng-select-container .ng-clear-wrapper .ng-clear {\n    font-size: 4vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select .ng-select-container .ng-clear-wrapper .ng-clear {\n    font-size: 1.5vw;\n  }\n}\n::ng-deep ng-select.ng-touched.ng-valid .ng-select-container {\n  border-bottom-color: #81b03e;\n}\n::ng-deep ng-select.ng-touched.ng-invalid .ng-select-container {\n  border-bottom-color: #f35f5f;\n}\n::ng-deep ng-select.ng-select-opened > .ng-select-container .ng-arrow {\n  top: -1vw;\n  border-color: transparent transparent #fff;\n  border-width: 1.5vw 1.5vw 1.5vw;\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep ng-select.ng-select-opened > .ng-select-container .ng-arrow {\n    top: 0;\n    border-width: 1vw 1vw 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select.ng-select-opened > .ng-select-container .ng-arrow {\n    top: -0.25vw;\n    border-width: 0 0.5vw 0.5vw;\n  }\n}\n::ng-deep ng-select ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #fff;\n  color: #00809a;\n  padding: 0.5vw 2vw;\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n    padding: 0.25vw 1vw;\n  }\n}\n::ng-deep ng-select .ng-arrow-wrapper {\n  width: 6vw;\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select .ng-arrow-wrapper {\n    width: 2vw;\n  }\n}\n::ng-deep ng-select .ng-arrow-wrapper .ng-arrow {\n  border-color: #fff transparent transparent;\n  border-style: solid;\n  border-width: 1.5vw 1.5vw 1vw;\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep ng-select .ng-arrow-wrapper .ng-arrow {\n    top: 1vw;\n    border-width: 1vw 1vw 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (orientation: landscape) {\n  ::ng-deep ng-select .ng-arrow-wrapper .ng-arrow {\n    top: 0;\n    border-width: 0.5vw 0.5vw 0.25vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQVRBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFZRjtBQ3NCSTtFRHJDSjtJQU1JLGNBQUE7RUFhRjtBQUNGO0FDaUJJO0VEckNKO0lBVUksY0FBQTtFQWNGO0FBQ0Y7QUFYQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWNGO0FDR0k7RUR2Qko7SUFTSSxrQkFBQTtFQWVGO0FBQ0Y7QUFiRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZUo7QUNWSTtFRFhGO0lBU0ksYUFBQTtFQWdCSjtBQUNGO0FDZkk7RURYRjtJQWFJLGVBQUE7SUFDQSxVQUFBO0VBaUJKO0FBQ0Y7QUFmSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUFpQk47QUNoQ0k7RURNQTtJQVlJLGNBQUE7SUFDQSxRQUFBO0VBa0JOO0FBQ0Y7QUN0Q0k7RURNQTtJQWlCSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VBbUJOO0FBQ0Y7QUFoQkk7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBa0JOO0FDM0RJO0VENkJBO0lBZUksZ0JBQUE7RUFtQk47QUFDRjtBQ2hFSTtFRDZCQTtJQW1CSSxnQkFBQTtJQUNBLFdBQUE7RUFvQk47QUFDRjtBQWxCTTtFQUNFLGFBQUE7QUFvQlI7QUFqQk07RUFDRSxnQ0FBQTtBQW1CUjtBQWZRO0VBQ0UsZ0NBQUE7QUFpQlY7QUFkUTtFQUNFLGdDQUFBO0FBZ0JWO0FBYlE7RUFDRSxjQUFBO0FBZVY7QUFWUTtFQUNFLGFBQUE7QUFZVjtBQVBJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBU047QUM1Rkk7RURpRkE7SUFLSSxRQUFBO0VBVU47QUFDRjtBQU5NOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFRUjtBQU5ROztFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBU1Y7QUM5R0k7RURpR0k7O0lBT0ksZ0JBQUE7RUFXVjtBQUNGO0FDcEhJO0VEaUdJOztJQVdJLGdCQUFBO0lBQ0Esb0JBQUE7RUFhVjtBQUNGO0FBUkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVU47QUFSTTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBVVI7QUFOSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFRTjtBQU5NO0VBQ0UsYUFBQTtBQVFSO0FBUFE7RUFDRSxhQUFBO0FBU1Y7QUFMTTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQU9SO0FBRk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFJUjtBQ3RIUTtFRCtHRjtJQU1JLGlCQUFBO0VBS1I7QUFDRjtBQUhRO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUtWO0FBRlE7RUFDRSxnQkR2TUY7RUN3TUUseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNEN01IO0VDOE1HLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSVY7QUN6SVE7RUQ4SEE7SUFVSSxXQUFBO0lBQ0EsYUFBQTtFQUtWO0FBQ0Y7QUFIVTtFQUNFLGFBQUE7QUFLWjtBQUhVO0VBQ0UsbUJEM05MO0VDNE5LLHNCQUFBO0VBQ0EsV0QxTko7QUMrTlI7QUFBVTtFQUNFLFlBQUE7QUFFWjtBQUFZO0VBQ0UsWUFBQTtBQUVkO0FBQWM7RUFDRSxjRHpPVDtFQzBPUyxrQkFBQTtFQUNBLGVBQUE7QUFFaEI7QUFBYztFQUNFLGNEOU9UO0FDZ1BQO0FBRGdCO0VBQ0UsYUFBQTtBQUdsQjtBQUdjO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBRGhCO0FBSWM7RUFDRSxjRDVQVDtBQzBQUDtBQVFROztFQUVFLGNBQUE7QUFOVjtBQ3ROSTtFRDBOSTs7SUFJSSxjQUFBO0VBSFY7QUFDRjtBQzVOSTtFRDBOSTs7SUFPSSxjQUFBO0VBQVY7QUFDRjtBQVVNOzs7RUFDRSxjQUFBO0FBTlI7QUFXTTs7O0VBQ0UsYUFBQTtBQVBSO0FBYUk7RUFDRSxjQUFBO0FBWE47QUFnQkk7RUFDRSxhQUFBO0FBZE47QUFrQkU7RUFDRSxVQUFBO0FBaEJKO0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7QUFvQkE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXRHRUTTtFQ3VUTixnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7QUNyUUk7RUQ2UUo7SUFZSSxnQkFBQTtFQWhCRjtBQUNGO0FDMVFJO0VENlFKO0lBZ0JJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0VBZkY7QUFDRjtBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsY0Q1VUc7QUM2VFA7QUFrQkU7RUFDRSxhQUFBO0FBaEJKO0FBbUJFO0VBQ0UsY0QvVVE7RUNnVlIscUJEaFZRO0FDK1RaO0FBbUJJO0VBQ0UsdUJBQUE7RUFDQSxjRHBWTTtBQ21VWjtBQXVCRTtFQUNFLDZCQUFBO0VBQ0EsV0Q5Vkk7QUMwVVI7QUF1Qk07RUFDRSxnQkFBQTtBQXJCUjtBQ3hTSTtFRDRURTtJQUlJLGdCQUFBO0VBcEJSO0FBQ0Y7QUM3U0k7RUQ0VEU7SUFRSSxnQkFBQTtFQW5CUjtBQUNGO0FBc0JRO0VBQ0UsV0Q5V0Y7RUMrV0UsZ0JBQUE7QUFwQlY7QUN0VEk7RUR3VUk7SUFLSSxnQkFBQTtFQW5CVjtBQUNGO0FDM1RJO0VEd1VJO0lBU0ksZ0JBQUE7RUFsQlY7QUFDRjtBQXNCTTtFQUNFLFdBQUE7QUFwQlI7QUFzQlE7RUFDRSxjQUFBO0FBcEJWO0FDdFVJO0VEeVZJO0lBSUksY0FBQTtFQW5CVjtBQUNGO0FDM1VJO0VEeVZJO0lBUUksZ0JBQUE7RUFsQlY7QUFDRjtBQXdCTTtFQUNFLDRCRGhaQTtBQzBYUjtBQTJCTTtFQUNFLDRCRGpaRjtBQ3dYTjtBQStCUTtFQUNFLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLCtCQUFBO0FBN0JWO0FDM1ZJO0VEcVhJO0lBTUksTUFBQTtJQUNBLHlCQUFBO0VBNUJWO0FBQ0Y7QUNqV0k7RURxWEk7SUFXSSxZQUFBO0lBQ0EsMkJBQUE7RUEzQlY7QUFDRjtBQWtDUTtFQUNFLHNCRC9hRjtFQ2diRSxjRG5iSDtFQ29iRyxrQkFBQTtBQWhDVjtBQzVXSTtFRHlZSTtJQU1JLG1CQUFBO0VBL0JWO0FBQ0Y7QUFvQ0k7RUFDRSxVQUFBO0FBbENOO0FDcFhJO0VEcVpBO0lBSUksVUFBQTtFQWpDTjtBQUNGO0FBbUNNO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBakNSO0FDOVhJO0VENFpFO0lBTUksUUFBQTtJQUNBLHlCQUFBO0VBaENSO0FBQ0Y7QUNwWUk7RUQ0WkU7SUFXSSxNQUFBO0lBQ0EsZ0NBQUE7RUEvQlI7QUFDRiIsImZpbGUiOiJmb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4uZm9ybS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuXG4uZmllbGRzLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIG1hcmdpbi1ib3R0b206IDN2dztcbiAgfVxuXG4gIC5mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogM3Z3IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIG1hcmdpbjogMnZ3IDA7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICBtYXJnaW46IDEuNXZ3IDA7XG4gICAgICB3aWR0aDogNDUlO1xuICAgIH1cblxuICAgIC5maWVsZC1sYWJlbCB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbiAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxdnc7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICB0b3A6IDJ2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgICAgICAgdG9wOiAwLjV2dztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmllbGQtY29udHJvbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGhlaWdodDogNnZ3O1xuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gICAgICAgIGhlaWdodDogMnZ3O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmstZ3JheTtcbiAgICAgIH1cblxuICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctdmFsaWQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZ3JlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmIH4gd2ViLWZvcm0tdmFsaWRhdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5uZy11bnRvdWNoZWQge1xuICAgICAgICAmIH4gd2ViLWZvcm0tdmFsaWRhdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdlYi1mb3JtLXZhbGlkYXRpb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICB0b3A6IDJ2dztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmxpc3Qge1xuICAgICAgdWwsXG4gICAgICBvbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuc2VsZWN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuZmllbGQtY29udHJvbCB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaWRlbnRpZmljYXRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XG4gICAgICAgICZbaWQkPVwiYWRkcmVzc1pvbmVUeXBlXCJdIHtcbiAgICAgICAgICBmbGV4OiAwIDEgMjIlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0LmZpZWxkLWNvbnRyb2wsXG4gICAgICB3ZWItZm9ybS1pbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZ29vZ2xlbWFwIHtcbiAgICAgIC5nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWFicmVhayhsYXJnZSxsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdvb2dsZS1tYXAtb3BlbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDEuMjVyZW07XG4gICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNDVyZW07ICBcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtOyBcblxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhYnJlYWsobGFyZ2UsbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7IFxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI2dvb2dsZS1tYXAtbW9kYWwge1xuICAgICAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IC0wLjVyZW07ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xuICAgICAgICAgICAgICAjZ29vZ2xlLW1hcCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXZoO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm1hcC1wcm9ibGVtIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZ29vZ2xlLW1hcC1vcGVuZXIsICNnb29nbGUtbWFwLW1vZGFsIHN0cm9uZyxcbiAgICAgICAgI2dvb2dsZS1tYXAtbW9kYWwgLm1hcC1wcm9ibGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dCxcbiAgd2ViLWZvcm0taW5wdXQsXG4gIG5nLXNlbGVjdCB7XG4gICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICYgfiB3ZWItZm9ybS12YWxpZGF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy11bnRvdWNoZWQge1xuICAgICAgJiB+IHdlYi1mb3JtLXZhbGlkYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdlYi1mb3JtLWlucHV0Lm5nLXRvdWNoZWQge1xuICAgICYgfiB3ZWItZm9ybS12YWxpZGF0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIHdlYi1mb3JtLWlucHV0Lm5nLXVudG91Y2hlZCB7XG4gICAgJiB+IHdlYi1mb3JtLXZhbGlkYXRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICB3ZWItZm9ybS12YWxpZGF0aW9uIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LXNpemU6IDQuNXZ3O1xuICBtYXJnaW46IDAgMnZ3O1xuICBwYWRkaW5nOiAxdncgNHZ3ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB1bnNldDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuMjV2dztcbiAgICBtYXJnaW46IDAgMXZ3O1xuICAgIHBhZGRpbmc6IDAuNHZ3IDJ2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcbiAgICBib3JkZXItY29sb3I6ICRkYXJrLWdyYXk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIG5nLXNlbGVjdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR3aGl0ZTtcbiAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgLm5nLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubmctaW5wdXQge1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmctY2xlYXItd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgICAgIC5uZy1jbGVhciB7XG4gICAgICAgICAgZm9udC1zaXplOiA1dnc7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYubmctdG91Y2hlZC5uZy12YWxpZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmVlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRyZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy1zZWxlY3Qtb3BlbmVkIHtcbiAgICAgICYgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1hcnJvdyB7XG4gICAgICAgICAgdG9wOiAtMXZ3O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHdoaXRlO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMS41dncgMS41dncgMS41dnc7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxdncgMXZ3IDF2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIHRvcDogLTAuMjV2dztcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwLjV2dyAwLjV2dztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXZ3IDJ2dztcblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNXZ3IDF2dztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctYXJyb3ctd3JhcHBlciB7XG4gICAgICB3aWR0aDogNnZ3O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICAgIH1cblxuICAgICAgLm5nLWFycm93IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMS41dncgMS41dncgMXZ3O1xuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgdG9wOiAxdnc7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxdncgMXZ3IDF2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UsIGxhbmRzY2FwZSkge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAuNXZ3IDAuNXZ3IDAuMjV2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "DNEC":
    /*!*****************************************************************!*\
      !*** ./src/app/web/shared/forms/implemented-forms.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ImplementedFormsComponent */

    /***/
    function DNEC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImplementedFormsComponent", function () {
        return ImplementedFormsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _implemented_forms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./implemented-forms.component.scss */
      "OtVr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./custom-validators */
      "2a0G");
      /* harmony import */


      var _validation_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./validation-messages */
      "vveu");
      /* harmony import */


      var src_app_services_web_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/web/contact.service */
      "T/je");
      /* harmony import */


      var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash-es */
      "T89o");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);

      var ImplementedFormsComponent = /*#__PURE__*/function () {
        function ImplementedFormsComponent(contactService, toastr) {
          _classCallCheck(this, ImplementedFormsComponent);

          this.contactService = contactService;
          this.toastr = toastr;
          this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Generic form control props to extend

          this.controlProps = {
            onlyLetters: {
              type: "text",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndOnlyLetters"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].ONLY_LETTERS_MESSAGE
              }
            },
            onlyLettersNotRequired: {
              type: "text",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["onlyLetters"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].ONLY_LETTERS_MESSAGE
              }
            },
            onlyLettersNumbers: {
              type: "text",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndOnlyLettersAndNumbers"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].ONLY_LETTERS_NUMBERS_MESSAGE
              }
            },
            normalText: {
              type: "text",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndNormalText"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].TEXT_MESSAGE
              }
            },
            email: {
              type: "email",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndEmail"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].EMAIL_MESSAGE
              }
            },
            emailNotRequired: {
              type: "email",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["email"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].EMAIL_MESSAGE
              }
            },
            number: {
              type: "number",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndNaturalNumber"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].NATURAL_NUMBER_MESSAGE
              }
            },
            phone: {
              type: "tel",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["requiredAndNaturalNumber"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].PHONE_MESSAGE
              }
            },
            phoneNotRequired: {
              type: "tel",
              validations: _custom_validators__WEBPACK_IMPORTED_MODULE_3__["naturalNumber"],
              messages: {
                pattern: _validation_messages__WEBPACK_IMPORTED_MODULE_4__["MESSAGES"].PHONE_MESSAGE
              }
            },
            date: {
              type: "date",
              validations: {
                required: true
              }
            },
            select: {
              type: "select",
              options: [],
              validations: {
                required: true
              }
            },
            confirmation: {
              type: "confirmation",
              value: false,
              options: {
                positive: "Sí",
                negative: "No"
              },
              validations: {
                required: true
              }
            }
          }; // Steps for School form

          this.schoolStep1 = {
            name: Object.assign({
              label: "Nombre de la escuela"
            }, this.controlProps.normalText),
            code: Object.assign({
              label: "Código del plantel"
            }, this.controlProps.onlyLettersNumbers),
            email: Object.assign({
              label: "Correo electrónico"
            }, this.controlProps.email),
            phone: Object.assign({
              label: "Número de teléfono"
            }, this.controlProps.phone),
            addressState: Object.assign({
              label: "Estado"
            }, this.controlProps.select),
            addressMunicipality: Object.assign({
              label: "Municipio",
              isDependent: true,
              dependsOn: "addressState",
              optionPropertyCondition: "state.id"
            }, this.controlProps.select),
            address: Object.assign({
              label: "Calles / Carreras"
            }, this.controlProps.normalText),
            addressCity: Object.assign({
              label: "Ciudad"
            }, this.controlProps.onlyLetters),
            zone: {
              label: "Zona",
              type: "identification",
              validations: {},
              subfields: {
                id: Object.assign(Object.assign({
                  name: "addressZone"
                }, this.controlProps.normalText), {
                  label: ""
                }),
                type: Object.assign(Object.assign({
                  name: "addressZoneType"
                }, this.controlProps.select), {
                  options: [{
                    id: "1",
                    name: "Sector"
                  }, {
                    id: "2",
                    name: "Barrio"
                  }, {
                    id: "3",
                    name: "Cacerío"
                  }]
                })
              }
            },
            coordinate: {
              label: "Marca la ubicación exacta de la escuela",
              button: "Abrir mapa",
              header: "Selecciona la ubicación de la escuela",
              type: "googlemap",
              validations: {
                required: true,
                pattern: null
              },
              messages: {}
            }
          };
          this.schoolStep2 = {
            principalFirstName: Object.assign({
              label: "Nombre del director"
            }, this.controlProps.onlyLetters),
            principalLastName: Object.assign({
              label: "Apellido del director"
            }, this.controlProps.onlyLetters),
            principalEmail: Object.assign({
              label: "Correo electrónico del director"
            }, this.controlProps.email),
            principalPhone: Object.assign({
              label: "Número de teléfono del director"
            }, this.controlProps.phone),
            subPrincipalFirstName: Object.assign({
              label: "Nombre del subdirector"
            }, this.controlProps.onlyLettersNotRequired),
            subPrincipalLastName: Object.assign({
              label: "Apellido del subdirector"
            }, this.controlProps.onlyLettersNotRequired),
            subPrincipalEmail: Object.assign({
              label: "Correo electrónico del subdirector"
            }, this.controlProps.emailNotRequired),
            subPrincipalPhone: Object.assign({
              label: "Número de teléfono del subdirector"
            }, this.controlProps.phoneNotRequired)
          };
          this.schoolStep3 = {
            nTeachers: Object.assign({
              label: "Cantidad de docentes"
            }, this.controlProps.number),
            nAdministrativeStaff: Object.assign({
              label: "Cantidad de administrativos"
            }, this.controlProps.number),
            nLaborStaff: Object.assign({
              label: "Cantidad de obreros"
            }, this.controlProps.number),
            nStudents: Object.assign({
              label: "Cantidad de estudiantes"
            }, this.controlProps.number),
            nGrades: Object.assign({
              label: "Cantidad de grados"
            }, this.controlProps.number),
            nSections: Object.assign({
              label: "Cantidad de secciones"
            }, this.controlProps.number),
            schoolType: Object.assign(Object.assign({
              label: "Tipo de escuela"
            }, this.controlProps.select), {
              options: [{
                id: "1",
                name: "Nacional"
              }, {
                id: "2",
                name: "Estadal"
              }, {
                id: "3",
                name: "Municipal"
              }]
            }),
            schoolShift: Object.assign(Object.assign({
              label: "Turno de clases"
            }, this.controlProps.select), {
              options: [{
                id: "1",
                name: "Mañana"
              }, {
                id: "2",
                name: "Tarde"
              }, {
                id: "3",
                name: "Ambos"
              }]
            })
          };
          this.schoolStep4 = {
            hasSponsor: Object.assign({
              label: "¿Cuentas con un padrino?"
            }, this.controlProps.confirmation)
          };
          this.schoolLastStep = {
            steps: {
              label: "",
              type: "list",
              options: ["Visita comercios, empresas o negocios cercanos a tu escuela.", "Consulta entre padres y representantes si alguno conoce o trabaja en empresas cercanas a la escuela.", "Recauda información de los posibles padrinos y completa la planilla.", "Escríbenos a través de amblemaoficial@gmail.com y solicítanos un padrino."],
              validations: {}
            }
          }; // Steps for Sponsor form

          this.sponsorStep1 = {
            name: Object.assign({
              label: "Nombre de la empresa"
            }, this.controlProps.normalText),
            card: {
              label: "Rif de la empresa",
              type: "identification",
              validations: {},
              subfields: {
                id: Object.assign(Object.assign({
                  name: "rif"
                }, this.controlProps.number), {
                  label: "",
                  type: "text"
                }),
                type: Object.assign(Object.assign({
                  name: "rifType"
                }, this.controlProps.select), {
                  value: "2",
                  options: [{
                    id: "2",
                    name: "J"
                  }]
                })
              }
            },
            email: Object.assign({
              label: "Correo electrónico"
            }, this.controlProps.email),
            companyPhone: Object.assign({
              label: "Número de teléfono"
            }, this.controlProps.phone),
            addressState: Object.assign({
              label: "Estado"
            }, this.controlProps.select),
            addressMunicipality: Object.assign({
              label: "Municipio",
              isDependent: true,
              dependsOn: "addressState",
              optionPropertyCondition: "state.id"
            }, this.controlProps.select),
            address: Object.assign({
              label: "Calles / Carreras"
            }, this.controlProps.normalText),
            addressCity: Object.assign({
              label: "Ciudad"
            }, this.controlProps.onlyLetters)
          };
          this.sponsorStep2 = {
            companyType: Object.assign(Object.assign({
              label: "Tipo de empresa"
            }, this.controlProps.select), {
              options: [{
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
              }, {
                id: "0",
                name: "Otro"
              }]
            }),
            companyOtherType: Object.assign(Object.assign({
              label: "Otro tipo de empresa"
            }, this.controlProps.onlyLetters), {
              condition: {
                formControlName: "companyType",
                value: "0"
              }
            }),
            contactFirstName: Object.assign({
              label: "Nombre de la persona de contacto"
            }, this.controlProps.onlyLetters),
            contactLastName: Object.assign({
              label: "Apellido de la persona de contacto"
            }, this.controlProps.onlyLetters),
            contactEmail: Object.assign({
              label: "Correo electrónico de la persona de contacto"
            }, this.controlProps.email),
            contactPhone: Object.assign({
              label: "Número de teléfono de la persona de contacto"
            }, this.controlProps.phone)
          };
          this.sponsorStep3 = {
            hasSchool: Object.assign({
              label: "¿Cuentas con una escuela?"
            }, this.controlProps.confirmation)
          };
          this.sponsorLastStep = {
            steps: {
              label: "",
              type: "list",
              options: ["Debe seleccionar una escuela cercana a tu empresa, comercio o negocio, en base a los siguientes criterios: escuela pública, que tenga preescolar y primaria, con un número de estudiantes entre 150 y 300, que presente necesidades de ayuda y apoyo de un tercero, y que el personal docente manifieste la disposición de mejorar la calidad educativa de la escuela.", "Visite la escuela de su preferencia y recaude todos los datos."],
              validations: {}
            }
          }; // Steps for Coordinator form

          this.coordinatorStep1 = {
            firstName: Object.assign({
              label: "Nombre"
            }, this.controlProps.onlyLetters),
            lastName: Object.assign({
              label: "Apellido"
            }, this.controlProps.onlyLetters),
            gender: Object.assign(Object.assign({
              label: "Sexo"
            }, this.controlProps.select), {
              options: [{
                id: "1",
                name: "Femenino"
              }, {
                id: "2",
                name: "Masculino"
              }]
            }),
            card: {
              label: "Identificación",
              type: "identification",
              validations: {},
              subfields: {
                id: Object.assign(Object.assign({
                  name: "cardId"
                }, this.controlProps.number), {
                  label: "",
                  type: "text"
                }),
                type: Object.assign(Object.assign({
                  name: "cardType"
                }, this.controlProps.select), {
                  value: "1",
                  options: [{
                    id: "1",
                    name: "V"
                  }, {
                    id: "3",
                    name: "E"
                  }]
                })
              }
            },
            homePhone: Object.assign({
              label: "Teléfono de contacto"
            }, this.controlProps.phone),
            birthdate: Object.assign({
              label: "Fecha de nacimiento"
            }, this.controlProps.date),
            addressState: Object.assign({
              label: "Estado"
            }, this.controlProps.select),
            addressMunicipality: Object.assign({
              label: "Municipio",
              isDependent: true,
              dependsOn: "addressState",
              optionPropertyCondition: "state.id"
            }, this.controlProps.select)
          };
          this.coordinatorStep2 = {
            addressCity: Object.assign({
              label: "Ciudad de residencia"
            }, this.controlProps.onlyLetters),
            addressHome: Object.assign({
              label: "Casa / Edificio"
            }, this.controlProps.normalText),
            address: Object.assign({
              label: "Calles / Carreras"
            }, this.controlProps.normalText),
            email: Object.assign({
              label: "Correo electrónico"
            }, this.controlProps.email),
            phone: Object.assign({
              label: "Número de teléfono"
            }, this.controlProps.phone),
            profession: Object.assign({
              label: "Profesión"
            }, this.controlProps.onlyLetters),
            isReferred: Object.assign(Object.assign({
              label: "¿Es referido de álguien?"
            }, this.controlProps.select), {
              options: [{
                id: true,
                name: "Sí"
              }, {
                id: false,
                name: "No"
              }]
            }),
            referredName: Object.assign(Object.assign({
              label: "Nombre completo de la persona que lo refirió"
            }, this.controlProps.onlyLetters), {
              condition: {
                formControlName: "isReferred",
                value: true
              }
            })
          }; // Step Items to create each form wizard

          this.schoolStepItems = [{
            title: "Datos de la Escuela:",
            data: this.schoolStep1
          }, {
            title: "Datos de la Escuela:",
            data: this.schoolStep2
          }, {
            title: "Datos de la Escuela:",
            data: this.schoolStep3
          }, {
            title: "Para formar parte de la red AmbLeMa de escuelas, la fundación te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio del año escolar",
            data: this.schoolStep4
          }, {
            title: "Datos del Padrino: ",
            data: this.addPrefixToObjectProperties("sponsor", this.sponsorStep1),
            condition: {
              formControlName: "hasSponsor",
              value: true
            }
          }, {
            title: "Datos del Padrino: ",
            data: this.addPrefixToObjectProperties("sponsor", this.sponsorStep2),
            condition: {
              formControlName: "hasSponsor",
              value: true
            }
          }, {
            title: "Puedes seguir cualquiera de estos pasos:",
            data: this.schoolLastStep,
            condition: {
              formControlName: "hasSponsor",
              value: false
            }
          }];
          this.sponsorStepItems = [{
            title: "Datos del Padrino:",
            data: this.sponsorStep1
          }, {
            title: "Datos del Padrino:",
            data: this.sponsorStep2
          }, {
            title: "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles. Tangibles son las mejoras en la calidad de su comunidad  y a la vez el país. Intagible es la satisfacción personal que se logra.",
            data: this.sponsorStep3
          }, {
            title: "Datos de la Escuela:",
            data: this.addPrefixToObjectProperties("school", this.schoolStep1),
            condition: {
              formControlName: "hasSchool",
              value: true
            }
          }, {
            title: "Datos de la Escuela:",
            data: this.addPrefixToObjectProperties("school", this.schoolStep2),
            condition: {
              formControlName: "hasSchool",
              value: true
            }
          }, {
            title: "Datos de la Escuela:",
            data: this.addPrefixToObjectProperties("school", this.schoolStep3),
            condition: {
              formControlName: "hasSchool",
              value: true
            }
          }, {
            title: "Puedes seguir cualquiera de estos pasos:",
            data: this.sponsorLastStep,
            condition: {
              formControlName: "hasSchool",
              value: false
            }
          }];
          this.coordinatorStepItems = [{
            title: "Datos del Coordinador:",
            data: this.coordinatorStep1
          }, {
            title: "Datos del Coordinador:",
            data: this.coordinatorStep2
          }];
        }

        _createClass(ImplementedFormsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMunicipalitiesData();
            this.getStatesData();
          }
        }, {
          key: "getStatesData",
          value: function getStatesData() {
            var _this3 = this;

            this.contactService.getStates().subscribe(function (data) {
              _this3.schoolStep1.addressState.options = data.records;
              _this3.sponsorStep1.addressState.options = data.records;
              _this3.coordinatorStep1.addressState.options = data.records;
            });
          }
        }, {
          key: "getMunicipalitiesData",
          value: function getMunicipalitiesData() {
            var _this4 = this;

            this.contactService.getMunicipalities().subscribe(function (data) {
              _this4.schoolStep1.addressMunicipality.options = data.records; // @ts-ignore

              _this4.schoolStepItems[4].data.sponsorAddressMunicipality.options = data.records;
              _this4.sponsorStep1.addressMunicipality.options = data.records; // @ts-ignore

              _this4.sponsorStepItems[3].data.schoolAddressMunicipality.options = data.records;
              _this4.coordinatorStep1.addressMunicipality.options = data.records;
            });
          }
        }, {
          key: "submitContactForm",
          value: function submitContactForm(form, data) {
            var _this5 = this;

            var fieldsData = {};

            switch (form) {
              case "coordinator":
                this.coordinatorStepItems.map(function (step) {
                  return fieldsData = Object.assign(Object.assign({}, fieldsData), step.data);
                });
                break;

              case "sponsor":
                this.sponsorStepItems.map(function (step) {
                  return fieldsData = Object.assign(Object.assign({}, fieldsData), step.data);
                });
                break;

              case "school":
                this.schoolStepItems.map(function (step) {
                  return fieldsData = Object.assign(Object.assign({}, fieldsData), step.data);
                });
                break;
            }

            this.contactService.sendContactForm(form, data).subscribe({
              next: function next(data) {
                _this5.displayMessage("Formulario enviado satisfactoriamente", "success");

                _this5.formWizard.clear();

                _this5.formWizard.setIsSubmitting(false);

                _this5.success.emit("complete");
              },
              error: function error(_error) {
                console.error(_error);

                _this5.displayMessage(_this5.handleMessageError(_error.error, fieldsData), "error");

                _this5.formWizard.setIsSubmitting(false);
              }
            });
          }
        }, {
          key: "displayMessage",
          value: function displayMessage(message, type) {
            var options = {
              positionClass: "toast-bottom-right"
            };

            switch (type) {
              case "success":
                this.toastr.success(message, "", options);
                break;

              case "error":
                this.toastr.error(message, "", options);
                break;

              default:
                this.toastr.info(message, "", options);
            }
          }
        }, {
          key: "handleMessageError",
          value: function handleMessageError(error, fields) {
            var errorFields = Object.keys(error);
            var errorLabel = fields[errorFields[0]].label; // Take first field

            var errorStatus = error[errorFields[0]][0].status; // Take first status error

            switch (errorStatus) {
              case "1":
                return "".concat(errorLabel, " es invalido");

              case "2":
                return "".concat(errorLabel, " es requerido");

              case "3":
                return "".concat(errorLabel, " no puede ser nulo");

              case "4":
                return "".concat(errorLabel, ", error de validacion");

              case "5":
                return "".concat(errorLabel, " ya est\xE1 registrado");

              case "6":
                return "".concat(errorLabel, " no se encontr\xF3 registro");

              case "7":
                return "".concat(errorLabel, " admite solo letras");

              case "8":
                return "".concat(errorLabel, " admite solo numeros");

              case "9":
                return "".concat(errorLabel, ", la imagen es inv\xE1lida");

              case "10":
                return "".concat(errorLabel, ", la URL es inv\xE1lida");

              case "11":
                return "".concat(errorLabel, ", opci\xF3n inv\xE1lida");

              case "12":
                return "".concat(errorLabel, " est\xE1 fuera de rango");

              case "13":
                return "".concat(errorLabel, " el texto es muy largo");

              case "14":
                return "".concat(errorLabel, ", no coinciden las contrase\xF1as");

              case "15":
                return "".concat(errorLabel, ", No autorizado");

              default:
                return "No pudo enviarse el formulario, intenta más tarde";
            }
          }
        }, {
          key: "addPrefixToObjectProperties",
          value: function addPrefixToObjectProperties(prefix, obj) {
            var _this6 = this;

            var newObj = {};
            Object.entries(obj).map(function (prop) {
              var _Object$assign = Object.assign({}, prop),
                  propName = _Object$assign[0],
                  propValue = _Object$assign[1]; // Destructuring array into variables with name


              var newPropValue = propValue;

              if (newPropValue.type == "identification") {
                newPropValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(propValue);
                Object.entries(newPropValue.subfields).map(function (subfield) {
                  var _Object$assign2 = Object.assign({}, subfield),
                      subfieldName = _Object$assign2[0],
                      subfieldValue = _Object$assign2[1];

                  if (!subfieldValue["name"].startsWith(prefix)) {
                    var subfieldNamePrefixed = prefix + _this6.toCapitalizedString(subfieldValue["name"]);

                    newPropValue.subfields[subfieldName]["name"] = subfieldNamePrefixed;
                  }
                });
              }

              if (newPropValue.type == "select" && newPropValue.isDependent === true && newPropValue.dependsOn !== "") {
                newPropValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(propValue);

                var dependsOnPrefixed = prefix + _this6.toCapitalizedString(newPropValue.dependsOn);

                newPropValue.dependsOn = dependsOnPrefixed;
              }

              if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(newPropValue.condition)) {
                newPropValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(propValue);

                if (!newPropValue.condition.formControlName.startsWith(prefix)) {
                  var formControlPrefixed = prefix + _this6.toCapitalizedString(newPropValue.condition.formControlName);

                  newPropValue.condition.formControlName = formControlPrefixed;
                }
              }

              if (!propName.startsWith(prefix) && newPropValue.type !== "googlemap") {
                var propNameCapitalized = _this6.toCapitalizedString(propName);

                newObj[prefix + propNameCapitalized] = newPropValue;
              } else {
                newObj[propName] = newPropValue;
              }
            });
            return newObj;
          }
        }, {
          key: "toCapitalizedString",
          value: function toCapitalizedString(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
          }
        }]);

        return ImplementedFormsComponent;
      }();

      ImplementedFormsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_web_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }];
      };

      ImplementedFormsComponent.propDecorators = {
        formWizard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["formWizard", {
            "static": false
          }]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        success: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      ImplementedFormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "web-implemented-forms",
        template: "\n    <ng-container [ngSwitch]=\"form\">\n      <web-form-wizard\n        #formWizard\n        *ngSwitchCase=\"'schoolForm'\"\n        class=\"school-form-wizard\"\n        [formsContent]=\"schoolStepItems\"\n        [isSchoolForm]=\"true\"\n        (submit)=\"submitContactForm('school', $event)\"\n      >\n      </web-form-wizard>\n      <web-form-wizard\n        #formWizard\n        *ngSwitchCase=\"'sponsorForm'\"\n        class=\"sponsor-form-wizard\"\n        [formsContent]=\"sponsorStepItems\"\n        [isSchoolForm]=\"true\"\n        [isSponsorForm]=\"true\"\n        (submit)=\"submitContactForm('sponsor', $event)\"\n      >\n      </web-form-wizard>\n      <web-form-wizard\n        #formWizard\n        *ngSwitchCase=\"'coordinatorForm'\"\n        class=\"coordinator-form-wizard\"\n        [formsContent]=\"coordinatorStepItems\"\n        (submit)=\"submitContactForm('coordinator', $event)\"\n      >\n      </web-form-wizard>\n    </ng-container>\n  ",
        styles: [_implemented_forms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], ImplementedFormsComponent);
      /***/
    },

    /***/
    "IRvo":
    /*!***************************************************************!*\
      !*** ./src/app/web/shared/offcanvas/offcanvas.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function IRvo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.offcanvas {\n  background-color: #00809a;\n  top: 0;\n  color: white;\n  filter: opacity(0.9);\n  position: fixed;\n  width: 100vw;\n  height: 100%;\n  transition: 1s left ease;\n  overflow: scroll;\n  z-index: 50;\n}\n@media only screen and (min-width: 768px) {\n  .offcanvas {\n    overflow: hidden;\n  }\n}\n.offcanvas.closed {\n  left: -100vw;\n}\n.offcanvas.opened {\n  left: 0;\n}\n.offcanvas .aria-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 5vw;\n}\n@media only screen and (min-width: 768px) {\n  .offcanvas .aria-close {\n    padding: 2vw;\n  }\n}\n.offcanvas .aria-close span {\n  font-family: lato;\n  font-size: 10vw;\n  line-height: 0.5;\n}\n.offcanvas .aria-close span:hover {\n  cursor: pointer;\n}\n@media only screen and (min-width: 768px) {\n  .offcanvas .aria-close span {\n    font-size: 4.5vw;\n  }\n}\n.offcanvas .offcanvas-content {\n  padding: 4vw 9vw 12vw;\n}\n@media only screen and (min-width: 768px) {\n  .offcanvas .offcanvas-content {\n    padding: 4vw 12vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL29mZmNhbnZhcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUFUQTtFQUNFLHlCREpLO0VDS0wsTUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWUY7QUNlSTtFRHJDSjtJQWFJLGdCQUFBO0VBYUY7QUFDRjtBQVhFO0VBQ0UsWUFBQTtBQWFKO0FBVkU7RUFDRSxPQUFBO0FBWUo7QUFURTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFXSjtBQ0RJO0VEYkY7SUFNSSxZQUFBO0VBWUo7QUFDRjtBQVZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFZTjtBQVZNO0VBQ0UsZUFBQTtBQVlSO0FDZEk7RURKQTtJQVVJLGdCQUFBO0VBWU47QUFDRjtBQVJFO0VBQ0UscUJBQUE7QUFVSjtBQ3RCSTtFRFdGO0lBSUksaUJBQUE7RUFXSjtBQUNGIiwiZmlsZSI6Im9mZmNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4ub2ZmY2FudmFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmaWx0ZXI6IG9wYWNpdHkoMC45KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMXMgbGVmdCBlYXNlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB6LWluZGV4OiA1MDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmLmNsb3NlZCB7XG4gICAgbGVmdDogLTEwMHZ3O1xuICB9XG5cbiAgJi5vcGVuZWQge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAuYXJpYS1jbG9zZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDV2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBwYWRkaW5nOiAydnc7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogbGF0bztcbiAgICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm9mZmNhbnZhcy1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0dncgOXZ3IDEydnc7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgcGFkZGluZzogNHZ3IDEydnc7XG4gICAgfVxuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "J3uF":
    /*!*************************************************************!*\
      !*** ./src/app/web/shared/offcanvas/offcanvas.component.ts ***!
      \*************************************************************/

    /*! exports provided: OffcanvasComponent */

    /***/
    function J3uF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffcanvasComponent", function () {
        return OffcanvasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./offcanvas.component.html */
      "nn2D");
      /* harmony import */


      var _offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./offcanvas.component.scss */
      "IRvo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! body-scroll-lock */
      "4YED");

      var OffcanvasComponent = /*#__PURE__*/function () {
        function OffcanvasComponent() {
          _classCallCheck(this, OffcanvasComponent);

          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.status = "closed";
        }

        _createClass(OffcanvasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.toClose();

            if (this.close) {
              this.close.emit("complete");
            }
          }
        }, {
          key: "open",
          value: function open() {
            this.status = "opened";
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__["disableBodyScroll"])(this.ref.nativeElement);
          }
        }, {
          key: "toClose",
          value: function toClose() {
            this.status = "closed";
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__["enableBodyScroll"])(this.ref.nativeElement);
          }
        }]);

        return OffcanvasComponent;
      }();

      OffcanvasComponent.ctorParameters = function () {
        return [];
      };

      OffcanvasComponent.propDecorators = {
        ref: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["ref", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": true
          }]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      OffcanvasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "web-offcanvas",
        template: _raw_loader_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OffcanvasComponent);
      /***/
    },

    /***/
    "KB/R":
    /*!*********************************************************************************!*\
      !*** ./src/app/web/shared/jw-angular-pagination/lib/jw-pagination.component.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function KBR(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var paginate = __webpack_require__(
      /*! jw-paginate */
      "TNpa");

      var JwPaginationComponent =
      /** @class */
      function () {
        function JwPaginationComponent() {
          this.changePage = new core_1.EventEmitter(true);
          this.initialPage = 1;
          this.pageSize = 10;
          this.maxPages = 10;
          this.pager = {};
        }

        JwPaginationComponent.prototype.ngOnInit = function () {
          // set page if items array isn't empty
          if (this.items && this.items.length) {
            this.setPage(this.initialPage);
          }
        };

        JwPaginationComponent.prototype.ngOnChanges = function (changes) {
          // reset page if items array has changed
          if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
          }
        };

        JwPaginationComponent.prototype.setPage = function (page) {
          // get new pager object for specified page
          this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages); // get new page of items from items array

          var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1); // call change page function in parent component

          this.changePage.emit(pageOfItems);
        };

        JwPaginationComponent.decorators = [{
          type: core_1.Component,
          args: [{
            moduleId: module.i,
            selector: 'jw-pagination',
            template: "<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item first-item\">\n      <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item previous-item\">\n      <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n  </li>\n  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item number-item\">\n      <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item next-item\">\n      <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item last-item\">\n      <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n  </li>\n</ul>"
          }]
        }];
        /** @nocollapse */

        JwPaginationComponent.propDecorators = {
          "items": [{
            type: core_1.Input
          }],
          "changePage": [{
            type: core_1.Output
          }],
          "initialPage": [{
            type: core_1.Input
          }],
          "pageSize": [{
            type: core_1.Input
          }],
          "maxPages": [{
            type: core_1.Input
          }]
        };
        return JwPaginationComponent;
      }();

      exports.JwPaginationComponent = JwPaginationComponent;
      /***/
    },

    /***/
    "Kq3Q":
    /*!*****************************************************************************!*\
      !*** ./src/app/web/shared/testimonial-card/testimonial-card.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function Kq3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.testimonial-card {\n  background-color: #fff;\n  color: #00809a;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0;\n  padding: 2vw;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .testimonial-card {\n    padding: 1.5vw;\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .testimonial-card {\n    padding: 1.5vw;\n    width: 100%;\n  }\n}\n.testimonial-card p {\n  margin: 0;\n}\n.testimonial-card a {\n  color: #00809a;\n  text-decoration: none;\n}\n.testimonial-card .testimonial-data {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.testimonial-card .testimonial-image {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  height: 20vw;\n  width: 30vw;\n  overflow: hidden;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .testimonial-card .testimonial-image {\n    width: 7vw;\n    height: 7vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .testimonial-card .testimonial-image {\n    width: 7vw;\n    height: 7vw;\n  }\n}\n.testimonial-card .testimonial-image img {\n  height: 100%;\n  width: auto;\n}\n.testimonial-card .testimonial-identity {\n  font-size: 3.25vw;\n  margin-left: 3vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .testimonial-card .testimonial-identity {\n    font-size: 1.5vw;\n    margin-left: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .testimonial-card .testimonial-identity {\n    font-size: 1.5vw;\n    margin-left: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .testimonial-card .testimonial-identity {\n    font-size: 1vw;\n  }\n}\n.testimonial-card .testimonial-identity .testimonial-fullname {\n  font-weight: bold;\n  line-height: 1;\n}\n.testimonial-card .testimonial-description {\n  font-size: 3vw;\n  margin: 0;\n  padding: 2vw;\n  text-align: center;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .testimonial-card .testimonial-description {\n    font-size: 1.5vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .testimonial-card .testimonial-description {\n    font-size: 1.5vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .testimonial-card .testimonial-description {\n    font-size: 0.9vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Rlc3RpbW9uaWFsLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FBVEE7RUFDRSxzQkRETTtFQ0VOLGNETEs7RUNNTCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVlGO0FDaUJJO0VEckNKO0lBV0ksY0FBQTtJQUNBLFdBQUE7RUFhRjtBQUNGO0FDV0k7RURyQ0o7SUFnQkksY0FBQTtJQUNBLFdBQUE7RUFjRjtBQUNGO0FBWkU7RUFDRSxTQUFBO0FBY0o7QUFYRTtFQUNFLGNENUJHO0VDNkJILHFCQUFBO0FBYUo7QUFWRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWUo7QUFURTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVdKO0FDZkk7RURGRjtJQVNJLFVBQUE7SUFDQSxXQUFBO0VBWUo7QUFDRjtBQ3JCSTtFREZGO0lBY0ksVUFBQTtJQUNBLFdBQUE7RUFhSjtBQUNGO0FBWEk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWFOO0FBVEU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBV0o7QUNuQ0k7RURzQkY7SUFLSSxnQkFBQTtJQUNBLGtCQUFBO0VBWUo7QUFDRjtBQ3pDSTtFRHNCRjtJQVVJLGdCQUFBO0lBQ0Esa0JBQUE7RUFhSjtBQUNGO0FDL0NJO0VEc0JGO0lBZUksY0FBQTtFQWNKO0FBQ0Y7QUFaSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWNOO0FBVkU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVlKO0FDOURJO0VEOENGO0lBT0ksZ0JBQUE7SUFDQSxZQUFBO0VBYUo7QUFDRjtBQ3BFSTtFRDhDRjtJQVlJLGdCQUFBO0lBQ0EsWUFBQTtFQWNKO0FBQ0Y7QUMxRUk7RUQ4Q0Y7SUFpQkksZ0JBQUE7RUFlSjtBQUNGIiwiZmlsZSI6InRlc3RpbW9uaWFsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4udGVzdGltb25pYWwtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgY29sb3I6ICRibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAydnc7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIHBhZGRpbmc6IDEuNXZ3O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBwYWRkaW5nOiAxLjV2dztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAudGVzdGltb25pYWwtZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXN0aW1vbmlhbC1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIHdpZHRoOiA3dnc7XG4gICAgICBoZWlnaHQ6IDd2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgd2lkdGg6IDd2dztcbiAgICAgIGhlaWdodDogN3Z3O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cblxuICAudGVzdGltb25pYWwtaWRlbnRpdHkge1xuICAgIGZvbnQtc2l6ZTogMy4yNXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICBtYXJnaW4tbGVmdDogMS41dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICBtYXJnaW4tbGVmdDogMS41dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgfVxuXG4gICAgLnRlc3RpbW9uaWFsLWZ1bGxuYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICB9XG5cbiAgLnRlc3RpbW9uaWFsLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMnZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgIHBhZGRpbmc6IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgIHBhZGRpbmc6IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDAuOXZ3O1xuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Lyw/":
    /*!************************************************************!*\
      !*** ./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js ***!
      \************************************************************/

    /*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */

    /***/
    function Lyw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function () {
        return RECAPTCHA_BASE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function () {
        return RECAPTCHA_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function () {
        return RECAPTCHA_NONCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function () {
        return RECAPTCHA_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function () {
        return RECAPTCHA_V3_SITE_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function () {
        return ReCaptchaV3Service;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function () {
        return RecaptchaComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function () {
        return RecaptchaFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function () {
        return RecaptchaLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function () {
        return RecaptchaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function () {
        return RecaptchaV3Module;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function () {
        return RecaptchaValueAccessorDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return RecaptchaCommonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
        window.ng2recaptchaloaded = function () {
          onLoaded(grecaptcha);
        };

        var script = document.createElement("script");
        script.innerHTML = "";
        var baseUrl = url || "https://www.google.com/recaptcha/api.js";
        script.src = "".concat(baseUrl, "?render=").concat(renderMode, "&onload=ng2recaptchaloaded").concat(urlParams);

        if (nonce) {
          script.nonce = nonce;
        }

        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      var loader = {
        loadScript: loadScript
      };
      var RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-language");
      var RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-base-url");
      var RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-nonce-tag");
      var RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-settings");
      var RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-v3-site-key");

      var RecaptchaLoaderService = /*#__PURE__*/function () {
        function RecaptchaLoaderService( // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, language, baseUrl, nonce, v3SiteKey) {
          _classCallCheck(this, RecaptchaLoaderService);

          this.platformId = platformId;
          this.language = language;
          this.baseUrl = baseUrl;
          this.nonce = nonce;
          this.v3SiteKey = v3SiteKey;
          this.init();
          this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /** @internal */


        _createClass(RecaptchaLoaderService, [{
          key: "init",
          value: function init() {
            if (RecaptchaLoaderService.ready) {
              return;
            }

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
              RecaptchaLoaderService.ready = subject;
              var langParam = this.language ? "&hl=" + this.language : "";
              var renderMode = this.v3SiteKey || "explicit";
              loader.loadScript(renderMode, function (grecaptcha) {
                return subject.next(grecaptcha);
              }, langParam, this.baseUrl, this.nonce);
            }
          }
        }]);

        return RecaptchaLoaderService;
      }();
      /**
       * @internal
       * @nocollapse
       */


      RecaptchaLoaderService.ready = null;
      RecaptchaLoaderService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];

      RecaptchaLoaderService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }];
      };

      var nextId = 0;

      var RecaptchaComponent = /*#__PURE__*/function () {
        function RecaptchaComponent(elementRef, loader, zone, settings) {
          _classCallCheck(this, RecaptchaComponent);

          this.elementRef = elementRef;
          this.loader = loader;
          this.zone = zone;
          this.id = "ngrecaptcha-".concat(nextId++);
          this.errorMode = "default";
          this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // The rename will happen a bit later
          // eslint-disable-next-line @angular-eslint/no-output-native

          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
          }
        }

        _createClass(RecaptchaComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
              if (grecaptcha != null && grecaptcha.render instanceof Function) {
                _this7.grecaptcha = grecaptcha;

                _this7.renderRecaptcha();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // reset the captcha to ensure it does not leave anything behind
            // after the component is no longer needed
            this.grecaptchaReset();

            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * Executes the invisible recaptcha.
           * Does nothing if component's size is not set to "invisible".
           */

        }, {
          key: "execute",
          value: function execute() {
            if (this.size !== "invisible") {
              return;
            }

            if (this.widget != null) {
              this.grecaptcha.execute(this.widget);
            } else {
              // delay execution of recaptcha until it actually renders
              this.executeRequested = true;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.widget != null) {
              if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
              }

              this.grecaptchaReset();
            }
          }
          /**
           * ⚠️ Warning! Use this property at your own risk!
           *
           * While this member is `public`, it is not a part of the component's public API.
           * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
           * You are **strongly advised** against using this property.
           * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
           */

        }, {
          key: "__unsafe_widgetValue",
          get: function get() {
            return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
          }
          /** @internal */

        }, {
          key: "expired",
          value: function expired() {
            this.resolved.emit(null);
          }
          /** @internal */

        }, {
          key: "errored",
          value: function errored(args) {
            this.error.emit(args);
          }
          /** @internal */

        }, {
          key: "captchaResponseCallback",
          value: function captchaResponseCallback(response) {
            this.resolved.emit(response);
          }
          /** @internal */

        }, {
          key: "grecaptchaReset",
          value: function grecaptchaReset() {
            var _this8 = this;

            if (this.widget != null) {
              this.zone.runOutsideAngular(function () {
                return _this8.grecaptcha.reset(_this8.widget);
              });
            }
          }
          /** @internal */

        }, {
          key: "renderRecaptcha",
          value: function renderRecaptcha() {
            var _this9 = this;

            // This `any` can be removed after @types/grecaptcha get updated
            var renderOptions = {
              badge: this.badge,
              callback: function callback(response) {
                _this9.zone.run(function () {
                  return _this9.captchaResponseCallback(response);
                });
              },
              "expired-callback": function expiredCallback() {
                _this9.zone.run(function () {
                  return _this9.expired();
                });
              },
              sitekey: this.siteKey,
              size: this.size,
              tabindex: this.tabIndex,
              theme: this.theme,
              type: this.type
            };

            if (this.errorMode === "handled") {
              renderOptions["error-callback"] = function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this9.zone.run(function () {
                  return _this9.errored(args);
                });
              };
            }

            this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);

            if (this.executeRequested === true) {
              this.executeRequested = false;
              this.execute();
            }
          }
        }]);

        return RecaptchaComponent;
      }();

      RecaptchaComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          exportAs: "reCaptcha",
          selector: "re-captcha",
          template: ""
        }]
      }];

      RecaptchaComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RecaptchaLoaderService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_SETTINGS]
          }]
        }];
      };

      RecaptchaComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.id"]
        }],
        siteKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        badge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        errorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resolved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      var RecaptchaCommonModule = /*#__PURE__*/_createClass(function RecaptchaCommonModule() {
        _classCallCheck(this, RecaptchaCommonModule);
      });

      RecaptchaCommonModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [RecaptchaComponent],
          exports: [RecaptchaComponent]
        }]
      }];

      var RecaptchaModule = /*#__PURE__*/_createClass(function RecaptchaModule() {
        _classCallCheck(this, RecaptchaModule);
      });

      RecaptchaModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [RecaptchaComponent],
          imports: [RecaptchaCommonModule],
          providers: [RecaptchaLoaderService]
        }]
      }];
      /**
       * The main service for working with reCAPTCHA v3 APIs.
       *
       * Use the `execute` method for executing a single action, and
       * `onExecute` observable for listening to all actions at once.
       */

      var ReCaptchaV3Service = /*#__PURE__*/function () {
        function ReCaptchaV3Service(zone, siteKey, // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, baseUrl, nonce, language) {
          var _this10 = this;

          _classCallCheck(this, ReCaptchaV3Service);

          /** @internal */
          this.onLoadComplete = function (grecaptcha) {
            _this10.grecaptcha = grecaptcha;

            if (_this10.actionBacklog && _this10.actionBacklog.length > 0) {
              _this10.actionBacklog.forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    action = _ref2[0],
                    subject = _ref2[1];

                return _this10.executeActionWithSubject(action, subject);
              });

              _this10.actionBacklog = undefined;
            }
          };

          this.zone = zone;
          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
          this.siteKey = siteKey;
          this.nonce = nonce;
          this.language = language;
          this.baseUrl = baseUrl;
          this.init();
        }

        _createClass(ReCaptchaV3Service, [{
          key: "onExecute",
          get: function get() {
            if (!this.onExecuteSubject) {
              this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteObservable = this.onExecuteSubject.asObservable();
            }

            return this.onExecuteObservable;
          }
        }, {
          key: "onExecuteError",
          get: function get() {
            if (!this.onExecuteErrorSubject) {
              this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
            }

            return this.onExecuteErrorObservable;
          }
          /**
           * Executes the provided `action` with reCAPTCHA v3 API.
           * Use the emitted token value for verification purposes on the backend.
           *
           * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
           * https://developers.google.com/recaptcha/docs/v3.
           *
           * @param {string} action the action to execute
           * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
           * The returned `Observable` completes immediately after emitting a value.
           */

        }, {
          key: "execute",
          value: function execute(action) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

            if (this.isBrowser) {
              if (!this.grecaptcha) {
                // todo: add to array of later executions
                if (!this.actionBacklog) {
                  this.actionBacklog = [];
                }

                this.actionBacklog.push([action, subject]);
              } else {
                this.executeActionWithSubject(action, subject);
              }
            }

            return subject.asObservable();
          }
          /** @internal */

        }, {
          key: "executeActionWithSubject",
          value: function executeActionWithSubject(action, subject) {
            var _this11 = this;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var onError = function onError(error) {
              _this11.zone.run(function () {
                subject.error(error);

                if (_this11.onExecuteErrorSubject) {
                  // We don't know any better at this point, unfortunately, so have to resort to `any`
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  _this11.onExecuteErrorSubject.next({
                    action: action,
                    error: error
                  });
                }
              });
            };

            this.zone.runOutsideAngular(function () {
              try {
                _this11.grecaptcha.execute(_this11.siteKey, {
                  action: action
                }).then(function (token) {
                  _this11.zone.run(function () {
                    subject.next(token);
                    subject.complete();

                    if (_this11.onExecuteSubject) {
                      _this11.onExecuteSubject.next({
                        action: action,
                        token: token
                      });
                    }
                  });
                }, onError);
              } catch (e) {
                onError(e);
              }
            });
          }
          /** @internal */

        }, {
          key: "init",
          value: function init() {
            if (this.isBrowser) {
              if ("grecaptcha" in window) {
                this.grecaptcha = grecaptcha;
              } else {
                var langParam = this.language ? "&hl=" + this.language : "";
                loader.loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
              }
            }
          }
        }]);

        return ReCaptchaV3Service;
      }();

      ReCaptchaV3Service.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];

      ReCaptchaV3Service.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }];
      };

      var RecaptchaV3Module = /*#__PURE__*/_createClass(function RecaptchaV3Module() {
        _classCallCheck(this, RecaptchaV3Module);
      });

      RecaptchaV3Module.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [ReCaptchaV3Service]
        }]
      }];

      var RecaptchaValueAccessorDirective = /*#__PURE__*/function () {
        function RecaptchaValueAccessorDirective(host) {
          _classCallCheck(this, RecaptchaValueAccessorDirective);

          this.host = host;
          this.requiresControllerReset = false;
        }

        _createClass(RecaptchaValueAccessorDirective, [{
          key: "writeValue",
          value: function writeValue(value) {
            if (!value) {
              this.host.reset();
            } else {
              // In this case, it is most likely that a form controller has requested to write a specific value into the component.
              // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
              // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
              // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
              // we'll be telling the controller to "reset" the value back to null.
              if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
                this.requiresControllerReset = true;
              }
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;

            if (this.requiresControllerReset) {
              this.requiresControllerReset = false;
              this.onChange(null);
            }
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "onResolve",
          value: function onResolve($event) {
            if (this.onChange) {
              this.onChange($event);
            }

            if (this.onTouched) {
              this.onTouched();
            }
          }
        }]);

        return RecaptchaValueAccessorDirective;
      }();

      RecaptchaValueAccessorDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          providers: [{
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return RecaptchaValueAccessorDirective;
            })
          }],
          selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
        }]
      }];

      RecaptchaValueAccessorDirective.ctorParameters = function () {
        return [{
          type: RecaptchaComponent
        }];
      };

      RecaptchaValueAccessorDirective.propDecorators = {
        onResolve: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["resolved", ["$event"]]
        }]
      };

      var RecaptchaFormsModule = /*#__PURE__*/_createClass(function RecaptchaFormsModule() {
        _classCallCheck(this, RecaptchaFormsModule);
      });

      RecaptchaFormsModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [RecaptchaValueAccessorDirective],
          exports: [RecaptchaValueAccessorDirective],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], RecaptchaCommonModule]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-recaptcha.js.map

      /***/
    },

    /***/
    "MlIn":
    /*!************************************************************************!*\
      !*** ./src/app/web/shared/forms/elements/form-validation.component.ts ***!
      \************************************************************************/

    /*! exports provided: FormValidationComponent */

    /***/
    function MlIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function () {
        return FormValidationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _form_validation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-validation.component.scss */
      "2MB4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation-messages */
      "vveu");

      var FormValidationComponent = /*#__PURE__*/function () {
        function FormValidationComponent() {
          _classCallCheck(this, FormValidationComponent);

          /**
           * 'validationErrors' is reactive form errors.
           * It's nonnull in case if the control is touched and invalid,
           * which is defined on the reactive base component side.
           */
          this.validationErrors = null;
          this.patternMessage = null; // Message error return

          this.errorMessage = null;
        }
        /**
         * Get message if anything changes in the forms
         */


        _createClass(FormValidationComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.errorMessage = this.getErrorMessage();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            var errors = this.validationErrors;

            if (errors) {
              return errors.required ? _validation_messages__WEBPACK_IMPORTED_MODULE_3__["MESSAGES"].REQUIRED_MESSAGE : errors.pattern || errors.minlength || errors.maxlength ? this.patternMessage : null;
            }

            return null;
          }
        }]);

        return FormValidationComponent;
      }();

      FormValidationComponent.propDecorators = {
        validationErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        patternMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FormValidationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'web-form-validation',
        template: "\n    <ng-container *ngIf=\"errorMessage\">\n      <div class=\"error-message\">\n        <strong>{{errorMessage}}</strong>\n      </div>\n    </ng-container>\n  ",
        styles: [_form_validation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], FormValidationComponent);
      /***/
    },

    /***/
    "OtVr":
    /*!*******************************************************************!*\
      !*** ./src/app/web/shared/forms/implemented-forms.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function OtVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .form-heading {\n  font-size: 4.5vw;\n  display: block;\n  text-align: center;\n  font-weight: normal;\n  padding: 0 5%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep web-form-wizard.school-form-wizard .form-step-3 .form-heading {\n    font-size: 2.5vw;\n    padding: 0 15%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep web-form-wizard.school-form-wizard .form-step-3 .form-heading {\n    font-size: 2.5vw;\n    padding: 0 15%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep web-form-wizard.school-form-wizard .form-step-3 .form-heading {\n    font-size: 1.5vw;\n    padding: 0 15%;\n  }\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .form-heading,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .form-heading {\n  text-align: center;\n  display: block;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container {\n  margin: 4vw 0;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container .form-field,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container .form-field {\n  width: 100% !important;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container .form-field.confirmation web-form-confirmation,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation {\n  width: 100%;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation {\n  display: block;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation .error-message,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation .error-message {\n  text-align: center;\n}\n::ng-deep web-form-wizard.school-form-wizard .form-step-3 .fields-container .form-field.confirmation web-form-confirmation.ng-untouched ~ web-form-validation,\n::ng-deep web-form-wizard.school-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-untouched ~ web-form-validation {\n  display: none;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .form-heading {\n  font-size: 1.5vw;\n  display: block;\n  font-weight: normal;\n  padding: 0 5%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .form-heading {\n    font-size: 2.5vw;\n    padding: 0 15%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .form-heading {\n    font-size: 2.5vw;\n    padding: 0 15%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .form-heading {\n    font-size: 1.5vw;\n    padding: 0 15%;\n  }\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .form-heading,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .form-heading {\n  text-align: center;\n  display: block;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container {\n  margin: 8vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container {\n    margin: 4vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container {\n    margin: 4vw 0;\n  }\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container .form-field,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container .form-field {\n  width: 100% !important;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container .form-field.confirmation web-form-confirmation,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation {\n  width: 100%;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation {\n  display: block;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation .error-message,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-touched ~ web-form-validation .error-message {\n  text-align: center;\n}\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-2 .fields-container .form-field.confirmation web-form-confirmation.ng-untouched ~ web-form-validation,\n::ng-deep web-form-wizard.sponsor-form-wizard .form-step-6 .fields-container .form-field.confirmation web-form-confirmation.ng-untouched ~ web-form-validation {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ltcGxlbWVudGVkLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQUxRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFRVjtBQ29CSTtFRGpDSTtJQVFJLGdCQUFBO0lBQ0EsY0FBQTtFQVNWO0FBQ0Y7QUNjSTtFRGpDSTtJQWFJLGdCQUFBO0lBQ0EsY0FBQTtFQVVWO0FBQ0Y7QUNRSTtFRGpDSTtJQWtCSSxnQkFBQTtJQUNBLGNBQUE7RUFXVjtBQUNGO0FBTFE7O0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBUVY7QUFMUTs7RUFDRSxhQUFBO0FBUVY7QUFOVTs7RUFDRSxzQkFBQTtBQVNaO0FBTmM7O0VBQ0UsV0FBQTtBQVNoQjtBQUxnQjs7RUFDRSxjQUFBO0FBUWxCO0FBTmtCOztFQUNFLGtCQUFBO0FBU3BCO0FBSGdCOztFQUNFLGFBQUE7QUFNbEI7QUFLUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhWO0FDakNJO0VEZ0NJO0lBT0ksZ0JBQUE7SUFDQSxjQUFBO0VBRlY7QUFDRjtBQ3ZDSTtFRGdDSTtJQVlJLGdCQUFBO0lBQ0EsY0FBQTtFQURWO0FBQ0Y7QUM3Q0k7RURnQ0k7SUFpQkksZ0JBQUE7SUFDQSxjQUFBO0VBQVY7QUFDRjtBQU1ROztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUhWO0FBTVE7O0VBQ0UsYUFBQTtBQUhWO0FDNURJO0VEOERJOztJQUlJLGFBQUE7RUFEVjtBQUNGO0FDbEVJO0VEOERJOztJQVFJLGFBQUE7RUFDVjtBQUNGO0FBQ1U7O0VBQ0Usc0JBQUE7QUFFWjtBQUNjOztFQUNFLFdBQUE7QUFFaEI7QUFFZ0I7O0VBQ0UsY0FBQTtBQUNsQjtBQUNrQjs7RUFDRSxrQkFBQTtBQUVwQjtBQUlnQjs7RUFDRSxhQUFBO0FBRGxCIiwiZmlsZSI6ImltcGxlbWVudGVkLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwMDgwOWE7XG4kZ3JlZW46ICM4MWIwM2U7XG4kZGFyay1ncmVlbjogIzAwNzIyZTtcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzU1NTtcbiRkYXJrLWdyYXk6ICM5MDkwOTA7XG4kcmVkOiAjZjM1ZjVmO1xuJGNhbmNlbC1ncmF5OiAjOWZhOWJkO1xuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG5cbi5wcmltYXJ5LWNvbG9yIHtcbiAgY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcblxuOjpuZy1kZWVwIHtcbiAgd2ViLWZvcm0td2l6YXJkIHtcbiAgICAmLnNjaG9vbC1mb3JtLXdpemFyZCB7XG4gICAgICAuZm9ybS1zdGVwLTMge1xuICAgICAgICAuZm9ybS1oZWFkaW5nIHtcbiAgICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvcm0tc3RlcC0zLFxuICAgICAgLmZvcm0tc3RlcC02IHtcbiAgICAgICAgLmZvcm0taGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogNHZ3IDA7XG5cbiAgICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAmLmNvbmZpcm1hdGlvbiB7XG4gICAgICAgICAgICAgIHdlYi1mb3JtLWNvbmZpcm1hdGlvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB3ZWItZm9ybS1jb25maXJtYXRpb24ubmctdG91Y2hlZCB7XG4gICAgICAgICAgICAgICAgJiB+IHdlYi1mb3JtLXZhbGlkYXRpb24ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdlYi1mb3JtLWNvbmZpcm1hdGlvbi5uZy11bnRvdWNoZWQge1xuICAgICAgICAgICAgICAgICYgfiB3ZWItZm9ybS12YWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zcG9uc29yLWZvcm0td2l6YXJkIHtcbiAgICAgIC5mb3JtLXN0ZXAtMiB7XG4gICAgICAgIC5mb3JtLWhlYWRpbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLXN0ZXAtMixcbiAgICAgIC5mb3JtLXN0ZXAtNiB7XG4gICAgICAgIC5mb3JtLWhlYWRpbmcge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWVsZHMtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDh2dyAwO1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBtYXJnaW46IDR2dyAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW46IDR2dyAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICYuY29uZmlybWF0aW9uIHtcbiAgICAgICAgICAgICAgd2ViLWZvcm0tY29uZmlybWF0aW9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdlYi1mb3JtLWNvbmZpcm1hdGlvbi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgICAgICAmIH4gd2ViLWZvcm0tdmFsaWRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgd2ViLWZvcm0tY29uZmlybWF0aW9uLm5nLXVudG91Y2hlZCB7XG4gICAgICAgICAgICAgICAgJiB+IHdlYi1mb3JtLXZhbGlkYXRpb24ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "Rfeq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/shared/bg-heading/bg-heading.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rfeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #bgHeading class=\"bg-heading\">\n  <h2>\n    <ng-content></ng-content>\n  </h2>\n  <div #blueLine class=\"line blue slide-left-animation animation-init\"></div>\n  <div #greenLine class=\"line green slide-right-animation animation-init\"></div>\n</div>\n";
      /***/
    },

    /***/
    "SMCg":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/shared/forms/form-wizard/form-wizard.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SMCg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [class]=\"'form-step-' + activeStepIndex\">\n  <span class=\"form-heading\">{{ stepItems[activeStepIndex].title }}</span>\n\n  \n  <ng-container\n    *ngFor=\"let form of formWizard; let i = index; trackBy: trackByFn\"\n  >\n    <form\n      action=\"\"\n      [formGroup]=\"formWizard[i]\"\n      *ngIf=\"i === activeStepIndex || formWizard.length === 1\"\n    >\n      <div class=\"fields-container\">\n        <div\n          [class]=\"'form-field field ' + stepsContent[i][field].type\"\n          *ngFor=\"let field of fields[i]; trackBy: trackByFn\"\n          [ngSwitch]=\"stepsContent[i][field].type\"\n        >\n          <ng-container *ngSwitchCase=\"'textarea'\">\n            <textarea\n              [id]=\"field\"\n              [formControlName]=\"field\"\n              (change)=\"updateDataToSubmit()\"\n              [placeholder]=\"stepsContent[i][field].placeholder\"\n            ></textarea>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'select'\">\n            <label class=\"field-label text-bold\" [for]=\"field\">{{\n              stepsContent[i][field].label\n            }}</label>\n            <ng-select\n              class=\"field-control\"\n              notFoundText=\"Elementos no encontrados\"\n              [items]=\"stepsContent[i][field].options\"\n              bindValue=\"id\"\n              bindLabel=\"name\"\n              [labelForId]=\"field\"\n              [formControlName]=\"field\"\n              [virtualScroll]=\"true\"\n              (change)=\"updateDataToSubmit()\"\n              [id]=\"field\"\n            >\n              <ng-template\n                ng-option-tmp\n                let-item=\"item\"\n                let-search=\"searchTerm\"\n              >\n                <small>{{ item.name }}</small>\n              </ng-template>\n            </ng-select>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'list'\">\n            <ol class=\"field-list\">\n              <li\n                *ngFor=\"\n                  let option of stepsContent[i][field].options;\n                  index as i;\n                  trackBy: trackByFn\n                \"\n              >\n                {{ i + 1 }}. {{ option }}\n              </li>\n            </ol>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'confirmation'\">\n            <web-form-confirmation\n              [label]=\"stepsContent[i][field].label\"\n              [options]=\"stepsContent[i][field].options\"\n              [formGroup]=\"formWizard[i]\"\n              [name]=\"field\"\n              [id]=\"field\"\n            >\n            </web-form-confirmation>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'identification'\">\n            <label class=\"field-label text-bold\">{{\n              stepsContent[i][field].label\n            }}</label>\n            <ng-select\n              class=\"field-control\"\n              notFoundText=\"Elementos no encontrados\"\n              [searchable]=\"false\"\n              [items]=\"stepsContent[i][field].subfields.type.options\"\n              bindValue=\"id\"\n              bindLabel=\"name\"\n              [formControlName]=\"stepsContent[i][field].subfields.type.name\"\n              [virtualScroll]=\"true\"\n              [id]=\"stepsContent[i][field].subfields.type.name\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\">\n                <small>{{ item.name }}</small>\n              </ng-template>\n            </ng-select>\n            <input\n              class=\"field-control\"\n              autocomplete=\"off\"\n              [type]=\"stepsContent[i][field].subfields.id.type\"\n              [formControlName]=\"stepsContent[i][field].subfields.id.name\"\n              [id]=\"stepsContent[i][field].subfields.id.name\"\n              (change)=\"updateDataToSubmit()\"\n            />\n            <web-form-validation\n              [patternMessage]=\"\n                stepsContent[i][field].subfields.id.messages &&\n                stepsContent[i][field].subfields.id.messages.pattern\n              \"\n              [validationErrors]=\"\n                formWizard[i].get(stepsContent[i][field].subfields.id.name)\n                  .errors\n              \"\n            >\n            </web-form-validation>\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'number'\">\n            <label class=\"field-label\" [for]=\"field\">{{\n              stepsContent[i][field].label\n            }}</label>\n            <input\n              class=\"field-control\"\n              autocomplete=\"off\"\n              type=\"number\"\n              [formControlName]=\"field\"\n              (change)=\"updateDataToSubmit()\"\n              [id]=\"field\"\n            />\n          </ng-container>\n\n          <!-- MAPA ---------------------------------------------------------------------------------------------------------------------------------------------------- -->\n          <ng-container *ngSwitchCase=\"'googlemap'\">\n            <ng-container *ngIf=\"isBrowser\">\n              <div class=\"google-map-container\">                \n                <label class=\"field-label\">{{\n                  stepsContent[i][field].label\n                }}</label>               \n                <button \n                  type=\"button\" \n                  class=\"google-map-opener font-weight-bold\" \n                  data-toggle=\"modal\" \n                  data-target=\"#google-map-modal\"\n                  data-backdrop=\"false\"\n                  data-keyboard=\"false\"\n                >{{\n                  stepsContent[i][field].button\n                }}</button>\n                <div class=\"modal fade\" id=\"google-map-modal\">\n                  <div class=\"modal-dialog modal-dialog-scrollable modal-dialog-centered\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <strong>{{\n                          stepsContent[i][field].header\n                        }}</strong>\n                        <button \n                          type=\"button\" \n                          class=\"close\" \n                          data-dismiss=\"modal\"\n                        >&times;</button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <ng-container *ngIf=\"googleLoaded; else mapProblem\">\n                          <div #googleMap id=\"google-map\"></div>\n                        </ng-container>\n                        <ng-template #mapProblem>\n                          <p class=\"map-problem\">Hubo un problema al cargar el mapa, por favor recargue la página.</p>\n                        </ng-template>                        \n                      </div>\n                    </div>\n                  </div>\n                </div>                \n              </div>\n            </ng-container>            \n          </ng-container> \n          <!-- END-MAPA ------------------------------------------------------------------------------------------------------------------------------------------------ -->          \n\n          <ng-container *ngSwitchDefault>\n            <label class=\"field-label\" [for]=\"field\">{{\n              stepsContent[i][field].label\n            }}</label>\n            <input\n              class=\"field-control\"\n              autocomplete=\"off\"\n              [type]=\"stepsContent[i][field].type\"\n              [formControlName]=\"field\"\n              [id]=\"field\"\n              (change)=\"updateDataToSubmit()\"\n            />\n          </ng-container>\n\n          <web-form-validation\n            *ngIf=\"stepsContent[i][field].type !== 'identification' \n                   && stepsContent[i][field].type !== 'googlemap'\"\n            [patternMessage]=\"\n              stepsContent[i][field].messages &&\n              stepsContent[i][field].messages.pattern\n            \"\n            [validationErrors]=\"formWizard[i].get(field).errors\"\n          >\n          </web-form-validation>\n        </div>\n      </div>\n      <div class=\"button-container\">\n        <button\n          id=\"prev-button\"\n          class=\"form-button\"\n          type=\"button\"\n          [disabled]=\"activeStepIndex == 0\"\n          (click)=\"goToStep(activeStepIndex - 1)\"\n        >\n          Anterior\n        </button>\n        <button\n          id=\"submit\"\n          class=\"form-button\"\n          type=\"button\"\n          *ngIf=\"activeStepIndex === lastStepIndex\"\n          [disabled]=\"isSubmitting || formWizard[i].invalid\"\n          (click)=\"onSubmit()\"\n        >\n          Enviar Solicitud\n        </button>\n        <button\n          id=\"next-button\"\n          class=\"form-button\"\n          type=\"button\"\n          *ngIf=\"activeStepIndex < lastStepIndex\"\n          [disabled]=\"\n            activeStepIndex === lastStepIndex || formWizard[i].invalid\n          \"\n          (click)=\"goToStep(activeStepIndex + 1)\"\n        >\n          Siguiente\n        </button>\n      </div>\n    </form>\n  </ng-container>\n</div>\n";
      /***/
    },

    /***/
    "T/je":
    /*!*************************************************!*\
      !*** ./src/app/services/web/contact.service.ts ***!
      \*************************************************/

    /*! exports provided: ContactService */

    /***/
    function TJe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-Type": "application/json"
        })
      };

      var ContactService = /*#__PURE__*/function () {
        function ContactService(http) {
          _classCallCheck(this, ContactService);

          this.http = http;
        }

        _createClass(ContactService, [{
          key: "getMunicipalities",
          value: function getMunicipalities() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "municipalities");
          }
        }, {
          key: "getStates",
          value: function getStates() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "states");
          }
        }, {
          key: "sendContactForm",
          value: function sendContactForm(form, data) {
            switch (form) {
              case "coordinator":
                return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "coordinatorscontacts", data, httpOptions);

              case "sponsor":
                return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "sponsorscontacts", data, httpOptions);

              case "school":
                return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "schoolscontacts", data, httpOptions);
            }
          }
        }]);

        return ContactService;
      }();

      ContactService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], ContactService);
      /***/
    },

    /***/
    "TNpa":
    /*!*****************************************************!*\
      !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function TNpa(module, exports, __webpack_require__) {
      "use strict";

      function paginate(totalItems, currentPage, pageSize, maxPages) {
        if (currentPage === void 0) {
          currentPage = 1;
        }

        if (pageSize === void 0) {
          pageSize = 10;
        }

        if (maxPages === void 0) {
          maxPages = 10;
        } // calculate total pages


        var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

        if (currentPage < 1) {
          currentPage = 1;
        } else if (currentPage > totalPages) {
          currentPage = totalPages;
        }

        var startPage, endPage;

        if (totalPages <= maxPages) {
          // total pages less than max so show all pages
          startPage = 1;
          endPage = totalPages;
        } else {
          // total pages more than max so calculate start and end pages
          var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
          var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

          if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
          } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
          }
        } // calculate start and end item indexes


        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

        var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
          return startPage + i;
        }); // return object with all pager properties required by the view

        return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
        };
      }

      module.exports = paginate;
      /***/
    },

    /***/
    "WkYa":
    /*!*****************************************************************!*\
      !*** ./src/app/web/shared/bg-heading/bg-heading.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function WkYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\nweb-bg-heading {\n  display: block;\n  margin: auto;\n}\nsection.pillars .bg-heading h2 {\n  font-size: 7vw;\n  font-weight: normal;\n  margin: 0;\n  text-align: center;\n  width: 100%;\n}\nsection.pillars .line.blue {\n  height: 10vw;\n  right: -18vw;\n  width: 60%;\n}\nsection.pillars .line.green {\n  height: 10vw;\n  left: 2vw;\n  top: -1vw;\n  width: 95%;\n}\n.bg-heading {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  margin: auto;\n}\n.bg-heading h2 {\n  color: #fff;\n  font-size: 8vw;\n  line-height: 1.3;\n  margin: 0 12.5%;\n  position: absolute;\n  text-align: left;\n  width: 80%;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .bg-heading h2 {\n    font-size: 4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .bg-heading h2 {\n    font-size: 4vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bg-heading .growth-animation {\n    transition: 2s ease height !important;\n  }\n  .bg-heading .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bg-heading .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  .bg-heading .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bg-heading .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  .bg-heading .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bg-heading .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  .bg-heading .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bg-heading .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  .bg-heading .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  .bg-heading .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\n.bg-heading .line {\n  position: relative;\n}\n.bg-heading .line.blue {\n  background-color: #00809a;\n  height: 12vw;\n  right: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .bg-heading .line.blue {\n    height: 6vw;\n    right: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .bg-heading .line.blue {\n    height: 6vw;\n    right: 2vw;\n  }\n}\n.bg-heading .line.green {\n  background-color: #81b03e;\n  height: 10vw;\n  left: 4vw;\n  top: -1vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .bg-heading .line.green {\n    height: 5vw;\n    left: 2vw;\n    top: -0.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .bg-heading .line.green {\n    height: 5vw;\n    left: 2vw;\n    top: -0.5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2JnLWhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9lbGVtZW50cy9faGVhZGluZ3Muc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FESEE7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ01GO0FESkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDc0JQO0FERkE7RUFDRSxjQXJCSztBQzBCUDtBQ3ZCQTtFQUNFLGNGSks7RUVLTCxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FEMEJGO0FDdkJBO0VBQ0UsZ0JBQUE7QUQwQkY7QUVHSTtFRDlCSjtJQUlJLGdCQUFBO0VEMkJGO0FBQ0Y7QUVGSTtFRDlCSjtJQVFJLGdCQUFBO0VENEJGO0FBQ0Y7QUN6QkE7RUFDRSxjQUFBO0FENEJGO0FFWEk7RURsQko7SUFJSSxnQkFBQTtFRDZCRjtBQUNGO0FFaEJJO0VEbEJKO0lBUUksZ0JBQUE7RUQ4QkY7QUFDRjtBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7QUV6Qkk7RUROSjtJQUlJLGNBQUE7RUQrQkY7QUFDRjtBRTlCSTtFRE5KO0lBUUksY0FBQTtFRGdDRjtBQUNGO0FBdkVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUEwRUY7QUFyRUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBd0VOO0FBbkVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBcUVOO0FBbkVJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXFFTjtBQWhFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQW1FRjtBQWpFRTtFQUNFLFdEdkNJO0VDd0NKLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFtRUo7QUU1RUk7RUZDRjtJQVdJLGNBQUE7RUFvRUo7QUFDRjtBRWpGSTtFRkNGO0lBZUksY0FBQTtFQXFFSjtBQUNGO0FFdEZJO0VDdkNKO0lBRUkscUNBQUE7RUgrSEY7RUc5SEU7SUFDRSxvQkFBQTtFSGdJSjtBQUNGO0FFOUZJO0VDOUJKO0lBRUkscUNBQUE7RUg4SEY7RUc3SEU7SUFDRSx5QkFBQTtFSCtISjtBQUNGO0FFdEdJO0VDckJKO0lBRUksNkJBQUE7SUFDQSxrREFBQTtFSDZIRjtFRzVIRTtJQUNFLHdCQUFBO0lBQ0Esc0JBQUE7RUg4SEo7QUFDRjtBRWhISTtFQ1ZKO0lBRUksa0JBQUE7SUFDQSxrREFBQTtFSDRIRjtFRzNIRTtJQUNFLHVCQUFBO0lBQ0EsdUJBQUE7RUg2SEo7QUFDRjtBRTFISTtFQ0NKO0lBRUksc0NBQUE7RUgySEY7RUcxSEU7SUFDRSxxQkFBQTtFSDRISjtFRzFIRTtJQUNFLHFCQUFBO0VINEhKO0FBQ0Y7QUFoSEU7RUFDRSxrQkFBQTtBQWtISjtBQWhISTtFQUNFLHlCRGpFQztFQ2tFRCxZQUFBO0VBQ0EsVUFBQTtBQWtITjtBRTdJSTtFRndCQTtJQU1JLFdBQUE7SUFDQSxVQUFBO0VBbUhOO0FBQ0Y7QUVuSkk7RUZ3QkE7SUFXSSxXQUFBO0lBQ0EsVUFBQTtFQW9ITjtBQUNGO0FBakhJO0VBQ0UseUJEaEZFO0VDaUZGLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQW1ITjtBRS9KSTtFRndDQTtJQU9JLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQW9ITjtBQUNGO0FFdEtJO0VGd0NBO0lBYUksV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBcUhOO0FBQ0YiLCJmaWxlIjoiYmctaGVhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNjc3MvcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcInNjc3MvZWxlbWVudHMvaGVhZGluZ3NcIjtcblxud2ViLWJnLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5zZWN0aW9uLnBpbGxhcnMge1xuICAuYmctaGVhZGluZyB7XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUge1xuICAgICYuYmx1ZSB7XG4gICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICByaWdodDogLTE4dnc7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAmLmdyZWVuIHtcbiAgICAgIGhlaWdodDogMTB2dztcbiAgICAgIGxlZnQ6IDJ2dztcbiAgICAgIHRvcDogLTF2dztcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICB9XG59XG5cbi5iZy1oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGgyIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbWFyZ2luOiAwIDEyLjUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgei1pbmRleDogMTA7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICB9XG4gIH1cblxuICBAaW1wb3J0IFwic2Nzcy9hbmltYXRpb25zXCI7XG4gIC5saW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLmJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBoZWlnaHQ6IDEydnc7XG4gICAgICByaWdodDogNHZ3O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgaGVpZ2h0OiA2dnc7XG4gICAgICAgIHJpZ2h0OiAydnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGhlaWdodDogNnZ3O1xuICAgICAgICByaWdodDogMnZ3O1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAgICAgaGVpZ2h0OiAxMHZ3O1xuICAgICAgbGVmdDogNHZ3O1xuICAgICAgdG9wOiAtMXZ3O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgaGVpZ2h0OiA1dnc7XG4gICAgICAgIGxlZnQ6IDJ2dztcbiAgICAgICAgdG9wOiAtMC41dnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGhlaWdodDogNXZ3O1xuICAgICAgICBsZWZ0OiAydnc7XG4gICAgICAgIHRvcDogLTAuNXZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA5LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA4dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBBbmltYXRpb25zXG4uZ3Jvd3RoLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGhlaWdodCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1ib3R0b20tYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgYm90dG9tICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICBib3R0b206IC0xMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGUtcmlnaHQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgcmlnaHQsIDJzIGVhc2UgbGVmdCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgcmlnaHQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgbGVmdDogMTAwdncgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLWxlZnQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGxlZnQsIDJzIGVhc2UgcmlnaHQgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIGxlZnQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5mYWRlLWluLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIG9wYWNpdHkgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5hbmltYXRpb24tZmluaXNoIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "WqVj":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/shared/testimonial-card/testimonial-card.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WqVj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"testimonial-card\">\n  <div class=\"testimonial-data\">\n    <div class=\"testimonial-image\">\n      <img\n        *ngIf=\"testimonial.image\"\n        [src]=\"testimonial.image\"\n        [alt]=\"testimonial.firstName + ' ' + testimonial.lastName + ' image'\"\n      />\n    </div>\n    <div class=\"testimonial-identity\">\n      <p *ngIf=\"testimonial.firstName && testimonial.lastName\" class=\"testimonial-fullname\">\n        {{ testimonial.firstName + ' ' + testimonial.lastName }}\n      </p>\n      <p *ngIf=\"testimonial.function\" class=\"testimonial-role\">\n        {{ testimonial.position ? testimonial.position : testimonial.function }}\n      </p>\n    </div>\n  </div>\n  <div class=\"testimonial-content\">\n    <p *ngIf=\"testimonial.description\" class=\"testimonial-description\">\n      {{ testimonial.description }}\n    </p>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Zijh":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/shared/cover/cover.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zijh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"web-cover\">\n  <img class=\"web-cover__overlay-image\" *ngIf=\"overlayImage\" [src]=\"overlayImage\" />\n  <!-- Carousel element if more than 1 slide -->\n  <owl-carousel-o\n    #owlElement\n    class=\"web-cover__carousel\"\n    *ngIf=\"slides.length > 1\"\n    [options]=\"customOptions\"\n  >\n    <ng-template carouselSlide *ngFor=\"let slide of slides\">\n      <div class=\"web-cover__mobile-image-extended-wrapper web-cover__overlay-green\">\n        <picture class=\"web-cover__image web-cover__image--transparent\">\n          <source [srcset]=\"slide.image\" media=\"(min-width: 1024px) and (orientation: landscape)\" />\n          <source [srcset]=\"slide.image\" media=\"(min-width: 767px) and (orientation: portrait)\" />\n          <source [srcset]=\"slide.image\" media=\"(min-width: 320px) and (orientation: landscape)\" />\n          <img [src]=\"slide.image\" />\n        </picture>\n      </div>\n      <ng-container\n        *ngTemplateOutlet=\"\n          contentTemplate;\n          context: { title: slide.title, description: slide.description }\n        \"\n      >\n      </ng-container>\n    </ng-template>\n  </owl-carousel-o>\n  <!-- Image element if only 1 slide -->\n  <div *ngIf=\"slides.length == 1\">\n    <div class=\"web-cover__mobile-image-extended-wrapper web-cover__overlay-green\">\n      <picture class=\"web-cover__image web-cover__image--transparent\">\n        <source\n          [srcset]=\"slides[0].image\"\n          media=\"(min-width: 1024px) and (orientation: landscape)\"\n        />\n        <source [srcset]=\"slides[0].image\" media=\"(min-width: 767px) and (orientation: portrait)\" />\n        <source\n          [srcset]=\"slides[0].image\"\n          media=\"(min-width: 320px) and (orientation: landscape)\"\n        />\n        <img [src]=\"slides[0].image\" />\n      </picture>\n    </div>\n    <ng-container\n      *ngTemplateOutlet=\"\n        contentTemplate;\n        context: { title: slides[0].title, description: slides[0].description }\n      \"\n    >\n    </ng-container>\n  </div>\n  <!-- End else block -->\n</div>\n<!-- Slide content template -->\n<ng-template #contentTemplate let-title=\"title\" let-description=\"description\">\n  <div\n    class=\"web-cover__content-wrapper\"\n    [ngClass]=\"{\n      'web-cover__content-wrapper--sponsor-page': sponsorPage,\n      'web-cover__content-wrapper--coordinator-page': coordinatorPage\n    }\"\n    *ngIf=\"title || description\"\n  >\n    <p\n      class=\"web-cover__content-title\"\n      [ngClass]=\"{ 'web-cover__content-title--bold': titleBold }\"\n      *ngIf=\"title\"\n    >\n      {{ title }}\n    </p>\n    <p class=\"web-cover__content-description\" *ngIf=\"description\">\n      {{ description }}\n    </p>\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "bj9U":
    /*!***********************************************************************!*\
      !*** ./src/app/web/shared/forms/form-wizard/form-wizard.component.ts ***!
      \***********************************************************************/

    /*! exports provided: FormWizardComponent */

    /***/
    function bj9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function () {
        return FormWizardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-wizard.component.html */
      "SMCg");
      /* harmony import */


      var _form_wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-wizard.component.scss */
      "8UhY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-recaptcha */
      "Lyw/"); // import { HttpFetcherService } from '../../../../services/peca/http-fetcher.service';


      var FormWizardComponent = /*#__PURE__*/function () {
        // END-MAPA--------------------------------------------------
        function FormWizardComponent(fb, toastr, recaptchaService, platformId // private fetcher: HttpFetcherService,
        ) {
          var _this12 = this;

          _classCallCheck(this, FormWizardComponent);

          this.fb = fb;
          this.toastr = toastr;
          this.recaptchaService = recaptchaService;
          this.platformId = platformId;
          this.isSchoolForm = false;
          this.isSponsorForm = false;
          this.recaptchaAction = "form_wizard";
          this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.dataToSubmit = null;
          this.isSubmitting = false;
          this.lat = 8.60831668; // Venezuela's middle latitude

          this.lng = -66.029011; // Venezuela's middle longitude

          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(platformId);

          if (this.isBrowser) {
            this.map = null;
            this.currentMarker = null;

            var initMap = function initMap() {
              if (google) {
                clearInterval(interval);

                _this12.mapSettings(_this12.lat, _this12.lng, 7);
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

        _createClass(FormWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.activeStepIndex = 0;
            this.formWizard = [];
            this.stepsContent = [];
            this.fields = [];
            this.stepItems = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default()(this.formsContent);
            this.stepItems.forEach(function (data, i) {
              var index = _this13.appendStepContent(_this13.stepItems[i]["data"]);

              var formGroupBuilt = _this13.buildFormGroupStep(_this13.stepsContent[index]);

              _this13.formWizard.push(formGroupBuilt);
            });
            this.lastStepIndex = this.getLastStepIndex();
            this.subscribeDependentFields();
            this.subscribeDependentSelects(); // MAP -----------------------------------------------------------------

            if (this.isBrowser && this.isSchoolForm) {
              var initMap = function initMap() {
                if (google) {
                  clearInterval(interval);
                  setTimeout(function () {
                    if (_this13.googleMap) _this13.mapInitializer();
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
            } //----------------------------------------------------------------------


            if (this.isSchoolForm) {
              this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("name")).statusChanges.subscribe(function (res) {
                if (_this13.currentMarker && _this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("name")).value && _this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("name")).value.length > 0) {
                  _this13.loadAllMarkers({
                    name: _this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("name")).value,
                    coordinate: _this13.formWizard[_this13.getFormMapContainerIndex()].get("coordinate").value
                  });
                }
              });
              this.formWizard[this.getFormMapContainerIndex()].get(this.toCapitalizedString("addressMunicipality")).statusChanges.subscribe(function (res) {
                if (_this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("addressMunicipality")).value && _this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("addressMunicipality")).value.length > 0) {
                  var addressData = _this13.stepsContent[_this13.getFormMapContainerIndex()][_this13.toCapitalizedString("addressMunicipality")].options.filter(function (s) {
                    return s.id === _this13.formWizard[_this13.getFormMapContainerIndex()].get(_this13.toCapitalizedString("addressMunicipality")).value;
                  });

                  if (addressData.length > 0) {
                    _this13.mapPositioner(addressData[0].state.name, addressData[0].name);
                  }
                } else {
                  if (_this13.googleMap) {
                    var _initMap = function _initMap() {
                      if (google) {
                        clearInterval(_interval);

                        _this13.mapSettings(_this13.lat, _this13.lng, 7);

                        _this13.mapInitializer();
                      }
                    };

                    var _interval = null;

                    try {
                      _initMap();
                    } catch (error) {
                      _interval = setInterval(function () {
                        try {
                          _initMap();
                        } catch (error) {// TODO --
                        }
                      }, 2000);
                    }
                  }
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.currentMarker) this.currentMarker.setMap(null);
            this.currentMarker = null;
            this.map = null;

            if (this.recaptchaSubscription) {
              this.recaptchaSubscription.unsubscribe();
            }
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
            var _this14 = this;

            this.map = new google.maps.Map(this.googleMap.nativeElement, this.mapOptions);
            google.maps.event.addListener(this.map, "click", function (e) {
              _this14.loadAllMarkers({
                name: _this14.formWizard[_this14.getFormMapContainerIndex()].get(_this14.toCapitalizedString("name")).value && _this14.formWizard[_this14.getFormMapContainerIndex()].get(_this14.toCapitalizedString("name")).value.length > 0 ? _this14.formWizard[_this14.getFormMapContainerIndex()].get(_this14.toCapitalizedString("name")).value : "Escuela",
                coordinate: {
                  latitude: e.latLng.lat(),
                  longitude: e.latLng.lng()
                }
              });
            });
            this.geocoder = new google.maps.Geocoder();
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
            this.formWizard[this.getFormMapContainerIndex()].get("coordinate").setValue(data.coordinate);
            this.currentMarker.setMap(this.map);
          }
        }, {
          key: "mapPositioner",
          value: function mapPositioner(state, county) {
            var _this15 = this;

            // google maps geocoding
            var initMap = function initMap() {
              if (google) {
                clearInterval(interval);

                _this15.geocoder.geocode({
                  componentRestrictions: {
                    country: "Venezuela",
                    administrativeArea: state,
                    locality: county
                  }
                }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    if (results.length > 0) _this15.mapSettings(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 11);else _this15.mapSettings(_this15.lat, _this15.lng, 7);
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

                    _this15.mapSettings(_this15.lat, _this15.lng, 7);
                  }

                  _this15.mapInitializer();
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

            /* this.fetcher.geoCodeGet(
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
          key: "appendStepContent",
          value: function appendStepContent(content) {
            var newStepsContentLength = this.stepsContent.push(content);
            var stepContentIndex = newStepsContentLength - 1;
            this.fields.push(Object.keys(this.stepsContent[stepContentIndex]));
            this.addIdentificationFieldsToStepContent(stepContentIndex, content);
            return stepContentIndex;
          }
        }, {
          key: "addIdentificationFieldsToStepContent",
          value: function addIdentificationFieldsToStepContent(index, content) {
            var _this16 = this;

            Object.entries(content).map(function (field) {
              var _Object$assign3 = Object.assign({}, field),
                  fieldName = _Object$assign3[0],
                  fieldProps = _Object$assign3[1];

              if (_this16.isFormControlTypeof(fieldName, "identification")) {
                Object.entries(fieldProps.subfields).map(function (subfield) {
                  var _Object$assign4 = Object.assign({}, subfield),
                      subfieldType = _Object$assign4[0],
                      subfieldProps = _Object$assign4[1];

                  var subfieldName = subfieldProps["name"];
                  _this16.stepsContent[index][subfieldName] = subfieldProps;
                });
              }
            });
          }
        }, {
          key: "isFormControlTypeof",
          value: function isFormControlTypeof(formControlName, formControlType) {
            var isTypeof = false;
            this.stepsContent.map(function (stepContent) {
              if (stepContent[formControlName]) {
                isTypeof = stepContent[formControlName].type === formControlType;
              }
            });
            return isTypeof;
          }
        }, {
          key: "buildFormGroupStep",
          value: function buildFormGroupStep(stepContent) {
            var formControls = this.getFormGroupControls(stepContent);
            return this.fb.group(formControls);
          }
        }, {
          key: "getFormGroupControls",
          value: function getFormGroupControls(stepContent) {
            var _this17 = this;

            var formControls = Object.keys(stepContent).reduce(function (formControlsObj, formControlName) {
              return Object.assign(Object.assign({}, formControlsObj), _this17.getFormControlProperty(formControlName, stepContent[formControlName]));
            }, {} // This is the initial formControlsObj
            );
            return formControls;
          }
        }, {
          key: "getFormControlProperty",
          value: function getFormControlProperty(name, params) {
            var defaultValue = name === "coordinate" ? null : "";

            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(params.value)) {
              defaultValue = params.value;
            }

            if (name === "coordinate" && this.isSchoolForm) return _defineProperty({}, name, this.fb.group({
              latitude: [defaultValue, this.getValidators(params.validations)],
              longitude: [defaultValue, this.getValidators(params.validations)]
            }));else return _defineProperty({}, name, [defaultValue, this.getValidators(params.validations)]);
          }
        }, {
          key: "getValidators",
          value: function getValidators(validations) {
            var fieldValidators = Object.keys(validations).map(function (validator) {
              if (validator === "required") {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"][validator];
              } else {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"][validator](validations[validator]);
              }
            });
            return fieldValidators;
          } // get validation error messages per error, per field

        }, {
          key: "getValidationMessage",
          value: function getValidationMessage(formIndex, formFieldName) {
            var formErrors = this.formWizard[formIndex].get(formFieldName).errors;
            var errorMessages = this.stepsContent[formIndex][formFieldName].errors;
            var validationError = errorMessages[Object.keys(formErrors)[0]];
            return validationError;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this18 = this;

            this.updateDataToSubmit();

            if (this.isValid()) {
              this.recaptchaSubscription = this.recaptchaService.execute(this.recaptchaAction).subscribe(function (token) {
                _this18.isSubmitting = true;

                _this18.submit.emit(_this18.dataToSubmit);
              });
            } else {
              this.toastr.error("Uno o más campos del formulario son inválidos", "", {
                positionClass: "toast-bottom-right"
              });
            }
          }
        }, {
          key: "updateDataToSubmit",
          value: function updateDataToSubmit() {
            var _this19 = this;

            this.dataToSubmit = this.formWizard.reduce(function (dataGathered, currentForm, i) {
              var currentFormValues = {};

              if (_this19.isStepWriteable(i)) {
                currentFormValues = Object.assign({}, _this19.getFormGroupValues(currentForm));
              }

              return Object.assign(Object.assign({}, dataGathered), currentFormValues);
            }, {} // Initial value for dataGathered
            );
          }
        }, {
          key: "isStepWriteable",
          value: function isStepWriteable(stepIndex) {
            var condition = this.stepItems[stepIndex].condition;
            var isWriteable = true;

            if (!this.checkStepOrFieldCondition(condition)) {
              isWriteable = false;
            }

            return isWriteable;
          }
        }, {
          key: "checkStepOrFieldCondition",
          value: function checkStepOrFieldCondition(condition) {
            if (typeof condition == "object" && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.dataToSubmit) && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(condition.value) && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(condition.formControlName) && typeof condition.formControlName == "string" && this.dataToSubmit[condition.formControlName] !== condition.value) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "getFormGroupValues",
          value: function getFormGroupValues(form) {
            var _this20 = this;

            var formDataValues = {};
            Object.entries(form.value).map(function (field) {
              // Destructuring array into variables with names
              var _Object$assign5 = Object.assign({}, field),
                  fieldProp = _Object$assign5[0],
                  fieldValue = _Object$assign5[1];

              if (_this20.isFormControlTypeof(fieldProp, "date")) {
                formDataValues[fieldProp] = _this20.dateStringToISOString(fieldValue);
              } else {
                if (fieldProp.toLowerCase().includes("subprincipalemail") && fieldValue == "") {
                  formDataValues[fieldProp] = null;
                } else {
                  formDataValues[fieldProp] = fieldProp === "code" && typeof fieldValue === "string" && fieldValue.replace(/\s/g, "") || fieldValue;
                }
              }
            });
            return formDataValues;
          }
        }, {
          key: "dateStringToISOString",
          value: function dateStringToISOString(value) {
            if (typeof value !== "string" || value === "") {
              return "";
            }

            var newDate = new Date(value);
            return newDate.toISOString();
          }
        }, {
          key: "isValid",
          value: function isValid() {
            var _this21 = this;

            return this.formWizard.reduce(function (validFlag, formStep, i) {
              if (_this21.isStepWriteable(i)) {
                return validFlag && formStep.valid;
              }

              return validFlag && true;
            }, true // Initial value for validFlag
            );
          }
        }, {
          key: "subscribeDependentFields",
          value: function subscribeDependentFields() {
            var _this22 = this;

            this.stepsContent.map(function (stepContent, i) {
              Object.keys(stepContent).map(function (prop) {
                if (stepContent[prop].condition && stepContent[prop].condition.formControlName && stepContent[prop].condition.value) {
                  var conditionalFormControlName = stepContent[prop].condition.formControlName;

                  var conditionalFormControl = _this22.getFormControlInFormWizard(conditionalFormControlName);

                  var dependentFormControl = _this22.getFormControlInFormWizard(prop);

                  conditionalFormControl.valueChanges.subscribe(function (currentValue) {
                    if (currentValue == stepContent[prop].condition.value) dependentFormControl.enable();else dependentFormControl.disable();
                  });
                }
              });
            });
          }
        }, {
          key: "subscribeDependentSelects",
          value: function subscribeDependentSelects() {
            var _this23 = this;

            this.stepsContent.map(function (stepContent, i) {
              Object.keys(stepContent).map(function (prop) {
                var _stepContent$prop = stepContent[prop],
                    type = _stepContent$prop.type,
                    isDependent = _stepContent$prop.isDependent,
                    dependsOn = _stepContent$prop.dependsOn,
                    optionPropertyCondition = _stepContent$prop.optionPropertyCondition;

                if (type === "select" && isDependent === true && dependsOn) {
                  var dependsOnSelect = _this23.getFormControlInFormWizard(dependsOn);

                  var dependentSelect = _this23.getFormControlInFormWizard(prop);

                  dependsOnSelect.valueChanges.subscribe(function (currentValue) {
                    dependentSelect.reset();
                    var propArrayPath = optionPropertyCondition.split(".");
                    var dependentSelectOptions = _this23.formsContent[i].data[prop].options;
                    stepContent[prop].options = dependentSelectOptions.filter(function (op) {
                      var optionConditionValue = _this23.accessPropertyByArrayPath(op, propArrayPath);

                      return optionConditionValue == currentValue;
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "accessPropertyByArrayPath",
          value: function accessPropertyByArrayPath(object, properties) {
            return properties.reduce(function (prevObj, prop) {
              return prevObj.hasOwnProperty(prop) ? prevObj[prop] : null;
            }, object);
          }
        }, {
          key: "getFormControlInFormWizard",
          value: function getFormControlInFormWizard(name) {
            var formControl = null;
            this.formWizard.map(function (formStep) {
              if (formStep.controls[name]) formControl = formStep.controls[name];
            });
            return formControl;
          }
        }, {
          key: "goToStep",
          value: function goToStep(step) {
            var _this24 = this;

            var initMap = function initMap() {
              if (google) {
                clearInterval(interval);
                setTimeout(function () {
                  if (_this24.googleMap) {
                    if (_this24.currentMarker) _this24.currentMarker.setMap(null);
                    _this24.currentMarker = null;

                    _this24.mapSettings(_this24.lat, _this24.lng, 7);

                    _this24.mapInitializer();
                  }
                });
              }
            };

            var interval = null;

            if (this.isSponsorForm && this.activeStepIndex === 2) {
              try {
                initMap();
              } catch (error) {
                interval = setInterval(function () {
                  try {
                    initMap();
                  } catch (error) {
                    /** TODO --*/
                  }
                }, 1000);
              }
            }

            this.updateDataToSubmit();
            step = this.validateStep(step);

            if (this.isStepWriteable(step)) {
              this.activeStepIndex = step;
            } else {
              if (this.stepMovement(step) == "next") {
                this.goToStep(step + 1);
              } else if (this.stepMovement(step) == "prev") {
                this.goToStep(step - 1);
              }
            }
          }
        }, {
          key: "validateStep",
          value: function validateStep(step) {
            if (step < 0) {
              step = 0;
            }

            if (step > this.getLastStepIndex()) {
              step = this.getLastStepIndex();
            }

            return step;
          }
        }, {
          key: "getLastStepIndex",
          value: function getLastStepIndex() {
            var lastIndex = this.stepItems.length - 1;

            while (!this.isStepWriteable(lastIndex) || lastIndex == 0) {
              --lastIndex;
            }

            this.lastStepIndex = lastIndex;
            return this.lastStepIndex;
          }
        }, {
          key: "stepMovement",
          value: function stepMovement(step) {
            return step > this.activeStepIndex ? "next" : "prev";
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this25 = this;

            if (this.isBrowser && this.isSchoolForm) {
              if (this.currentMarker) this.currentMarker.setMap(null);

              var reinitMap = function reinitMap() {
                if (google) {
                  clearInterval(interval);
                  setTimeout(function () {
                    if (_this25.googleMap) {
                      if (_this25.currentMarker) _this25.currentMarker.setMap(null);
                      _this25.currentMarker = null;

                      _this25.mapSettings(_this25.lat, _this25.lng, 7);

                      _this25.mapInitializer();
                    }
                  });
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
            }

            this.formWizard.map(function (wizardFormStep) {
              wizardFormStep.reset(_this25.getFormControlsWithDefaultValue());
            });
            this.activeStepIndex = 0;
            this.updateDataToSubmit();
          }
        }, {
          key: "getFormControlsWithDefaultValue",
          value: function getFormControlsWithDefaultValue() {
            var formControls = {};
            this.stepsContent.map(function (stepContent, i) {
              Object.keys(stepContent).map(function (prop) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(stepContent[prop].value)) {
                  formControls[prop] = stepContent[prop].value;
                }
              });
            });
            return formControls;
          }
        }, {
          key: "setIsSubmitting",
          value: function setIsSubmitting(value) {
            this.isSubmitting = value;
          }
        }, {
          key: "getIsSubmitting",
          value: function getIsSubmitting() {
            return this.isSubmitting;
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index) {
            return index;
          }
        }, {
          key: "getFormMapContainerIndex",
          value: function getFormMapContainerIndex() {
            return this.isSponsorForm ? 3 : 0;
          }
        }, {
          key: "toCapitalizedString",
          value: function toCapitalizedString(value) {
            return this.isSponsorForm ? "school" + value.slice(0, 1).toUpperCase() + value.slice(1, value.length) : value;
          }
        }]);

        return FormWizardComponent;
      }();

      FormWizardComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["ReCaptchaV3Service"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }];
      };

      FormWizardComponent.propDecorators = {
        googleMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["googleMap", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }],
        googleMapSp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["googleMapSp", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }],
        formsContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isSchoolForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isSponsorForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        recaptchaAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        submit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      FormWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "web-form-wizard",
        template: _raw_loader_form_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormWizardComponent);
      /***/
    },

    /***/
    "jlfn":
    /*!***************************************************************************!*\
      !*** ./src/app/web/shared/testimonial-card/testimonial-card.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TestimonialCardComponent */

    /***/
    function jlfn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestimonialCardComponent", function () {
        return TestimonialCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_testimonial_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./testimonial-card.component.html */
      "WqVj");
      /* harmony import */


      var _testimonial_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./testimonial-card.component.scss */
      "Kq3Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TestimonialCardComponent = /*#__PURE__*/function () {
        function TestimonialCardComponent() {
          _classCallCheck(this, TestimonialCardComponent);
        }

        _createClass(TestimonialCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(this.testimonial)
          }
        }]);

        return TestimonialCardComponent;
      }();

      TestimonialCardComponent.ctorParameters = function () {
        return [];
      };

      TestimonialCardComponent.propDecorators = {
        testimonial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TestimonialCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'web-testimonial-card',
        template: _raw_loader_testimonial_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_testimonial_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TestimonialCardComponent);
      /***/
    },

    /***/
    "nn2D":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/shared/offcanvas/offcanvas.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nn2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #ref [class]=\"'offcanvas ' + status\">\n  <div class=\"aria-close\"><span (click)=\"onClose()\">&times;</span></div>\n  <div class=\"offcanvas-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "olx8":
    /*!*******************************************************!*\
      !*** ./src/app/web/shared/cover/cover.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function olx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n::ng-deep owl-carousel-o.web-cover__carousel .owl-carousel .owl-item.active {\n  z-index: 50;\n}\n.web-cover {\n  position: relative;\n  overflow: hidden;\n  width: 100vw;\n}\n.web-cover__overlay-green {\n  background-color: #81b03e;\n}\n.web-cover__overlay-green::before {\n  content: \"\";\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(129, 176, 62, 0.2);\n  position: absolute;\n  z-index: 1;\n}\n.web-cover__overlay-image {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__overlay-image {\n    right: 0;\n    width: 45%;\n    bottom: -10vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__overlay-image {\n    right: 0;\n    width: 45%;\n    bottom: -10vw;\n  }\n}\n.web-cover__mobile-image-extended-wrapper {\n  width: 300vw;\n  margin-left: -50vw;\n  max-height: 75vh;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__mobile-image-extended-wrapper {\n    margin-left: initial;\n    width: initial;\n    max-height: 100vh;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__mobile-image-extended-wrapper {\n    margin-left: initial;\n    width: initial;\n    max-height: 100vh;\n  }\n}\n.web-cover__image img {\n  width: 100%;\n}\n.web-cover__image--transparent img {\n  opacity: 0.85;\n}\n.web-cover__content-wrapper {\n  bottom: 80vw;\n  margin: 0 8vw;\n  position: absolute;\n  width: 84vw;\n  z-index: 15;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__content-wrapper {\n    margin: 0;\n    margin-right: 5vw;\n    right: 0;\n    width: 45vw;\n    bottom: 7vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-wrapper {\n    margin: 0;\n    margin-right: 5vw;\n    right: 0;\n    width: 45vw;\n    bottom: 7vw;\n  }\n}\n.web-cover__content-wrapper--sponsor-page, .web-cover__content-wrapper--coordinator-page {\n  bottom: 10vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__content-wrapper--sponsor-page, .web-cover__content-wrapper--coordinator-page {\n    bottom: 18vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-wrapper--sponsor-page, .web-cover__content-wrapper--coordinator-page {\n    bottom: 18vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .web-cover__content-wrapper--sponsor-page, .web-cover__content-wrapper--coordinator-page {\n    bottom: 15vw;\n  }\n}\n.web-cover__content-title {\n  color: white;\n  font-size: 7vw;\n  line-height: 1.2;\n  text-align: center;\n  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__content-title {\n    font-size: 3vw;\n    text-align: right;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-title {\n    font-size: 3vw;\n    text-align: right;\n  }\n}\n.web-cover__content-title--bold {\n  font-weight: bold;\n}\n.web-cover__content-wrapper--sponsor-page .web-cover__content-title, .web-cover__content-wrapper--coordinator-page .web-cover__content-title {\n  font-size: 6.5vw;\n  text-align: left;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__content-wrapper--sponsor-page .web-cover__content-title, .web-cover__content-wrapper--coordinator-page .web-cover__content-title {\n    font-size: 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-wrapper--sponsor-page .web-cover__content-title, .web-cover__content-wrapper--coordinator-page .web-cover__content-title {\n    font-size: 3vw;\n  }\n}\n.web-cover__content-wrapper--sponsor-page .web-cover__content-description, .web-cover__content-wrapper--coordinator-page .web-cover__content-description {\n  text-align: left;\n}\n.web-cover__content-description {\n  color: white;\n  font-size: 4.5vw;\n  line-height: 1.2;\n  text-align: center;\n  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .web-cover__content-description {\n    font-size: 2vw;\n    text-align: right;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-description {\n    font-size: 2vw;\n    text-align: right;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .web-cover__content-description {\n    font-size: 1.4vw;\n  }\n}\n@media (max-width: 590px) {\n  .web-cover__content-wrapper {\n    bottom: 7vw;\n  }\n\n  .web-cover__overlay-image {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2NvdmVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQUxRO0VBQ0UsV0FBQTtBQVFWO0FBREE7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdGO0FBREU7RUFDRSx5QkRyQkk7QUN3QlI7QUFESTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR047QUFDRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUNDSTtFRE5GO0lBT0ksUUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRjtBQ05JO0VETkY7SUFhSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUFHSjtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FDbEJJO0VEY0Y7SUFNSSxvQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQUVKO0FBQ0Y7QUN6Qkk7RURjRjtJQVlJLG9CQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBR0o7QUFDRjtBQUNJO0VBQ0UsV0FBQTtBQUNOO0FBR007RUFDRSxhQUFBO0FBRFI7QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUpKO0FDN0NJO0VENENGO0lBUUksU0FBQTtJQUNBLGlCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBSEo7QUFDRjtBQ3RESTtFRDRDRjtJQWdCSSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUFGSjtBQUNGO0FBSUk7RUFFRSxZQUFBO0FBSE47QUNsRUk7RURtRUE7SUFJSSxZQUFBO0VBRE47QUFDRjtBQ3ZFSTtFRG1FQTtJQVFJLFlBQUE7RUFBTjtBQUNGO0FDNUVJO0VEbUVBO0lBWUksWUFBQTtFQUNOO0FBQ0Y7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBREo7QUN4Rkk7RURvRkY7SUFRSSxjQUFBO0lBQ0EsaUJBQUE7RUFBSjtBQUNGO0FDOUZJO0VEb0ZGO0lBYUksY0FBQTtJQUNBLGlCQUFBO0VBQ0o7QUFDRjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUhOO0FDM0dJO0VENEdBO0lBSUksY0FBQTtFQUROO0FBQ0Y7QUNoSEk7RUQ0R0E7SUFRSSxjQUFBO0VBQU47QUFDRjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FBRko7QUMvSEk7RUQ0SEY7SUFRSSxjQUFBO0lBQ0EsaUJBQUE7RUFESjtBQUNGO0FDcklJO0VENEhGO0lBYUksY0FBQTtJQUNBLGlCQUFBO0VBQUo7QUFDRjtBQzNJSTtFRDRIRjtJQWtCSSxnQkFBQTtFQUNKO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsV0FBQTtFQUFGOztFQUVBO0lBQ0UsYUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiY292ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG46Om5nLWRlZXAge1xuICBvd2wtY2Fyb3VzZWwtby53ZWItY292ZXJfX2Nhcm91c2VsIHtcbiAgICAub3dsLWNhcm91c2VsIHtcbiAgICAgIC5vd2wtaXRlbSB7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ud2ViLWNvdmVyIHtcbiAgJHNlbGY6ICY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gICZfX292ZXJsYXktZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBcbiAgICAmOjpiZWZvcmV7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LCAxNzYsIDYyLCAwLjIpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIH1cblxuICAmX19vdmVybGF5LWltYWdlIHtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBib3R0b206IC0xMHZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBib3R0b206IC0xMHZ3O1xuICAgIH1cbiAgICBcbiAgfVxuXG4gICZfX21vYmlsZS1pbWFnZS1leHRlbmRlZC13cmFwcGVyIHtcbiAgICB3aWR0aDogMzAwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xuICAgICAgd2lkdGg6IGluaXRpYWw7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gICAgICB3aWR0aDogaW5pdGlhbDtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgfVxuXG4gICZfX2ltYWdlIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50LXdyYXBwZXIge1xuICAgIGJvdHRvbTogODB2dztcbiAgICBtYXJnaW46IDAgOHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODR2dztcbiAgICB6LWluZGV4OiAxNTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiA0NXZ3O1xuICAgICAgYm90dG9tOiA3dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogNDV2dztcbiAgICAgIGJvdHRvbTogN3Z3O1xuICAgIH1cbiAgICBcbiAgICAmLS1zcG9uc29yLXBhZ2UsXG4gICAgJi0tY29vcmRpbmF0b3ItcGFnZSB7XG4gICAgICBib3R0b206IDEwdnc7XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgYm90dG9tOiAxOHZ3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBib3R0b206IDE4dnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgYm90dG9tOiAxNXZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRlbnQtdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDd2dztcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgwLDAsMCwwLjQpO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDN2dztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDN2dztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICYtLWJvbGQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGVudC13cmFwcGVyLS1zcG9uc29yLXBhZ2UsXG4gICZfX2NvbnRlbnQtd3JhcHBlci0tY29vcmRpbmF0b3ItcGFnZSB7XG4gICAgI3sgJHNlbGYgfV9fY29udGVudC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDYuNXZ3O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICB9XG4gICAgfVxuICAgICN7ICRzZWxmIH1fX2NvbnRlbnQtZGVzY3JpcHRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50LWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5MHB4KSB7XG4gIC53ZWItY292ZXJfX2NvbnRlbnQtd3JhcHBlcntcbiAgICBib3R0b206IDd2dztcbiAgfVxuICAud2ViLWNvdmVyX19vdmVybGF5LWltYWdle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "vYfc":
    /*!*********************************************!*\
      !*** ./src/app/web/shared/shared.module.ts ***!
      \*********************************************/

    /*! exports provided: SharedModule */

    /***/
    function vYfc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "KMir");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _bg_heading_bg_heading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bg-heading/bg-heading.component */
      "30GA");
      /* harmony import */


      var _cover_cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./cover/cover.component */
      "2yz7");
      /* harmony import */


      var _testimonial_card_testimonial_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./testimonial-card/testimonial-card.component */
      "jlfn");
      /* harmony import */


      var _offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./offcanvas/offcanvas.component */
      "J3uF");
      /* harmony import */


      var _forms_elements_form_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./forms/elements/form-confirmation.component */
      "xBKX");
      /* harmony import */


      var _forms_elements_form_validation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./forms/elements/form-validation.component */
      "MlIn");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-owl-carousel */
      "bjCr");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _forms_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./forms/form-wizard/form-wizard.component */
      "bj9U");
      /* harmony import */


      var _forms_implemented_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./forms/implemented-forms.component */
      "DNEC");
      /* harmony import */


      var _jw_angular_pagination_lib_jw_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./jw-angular-pagination/lib/jw-pagination.component */
      "KB/R");
      /* harmony import */


      var _jw_angular_pagination_lib_jw_pagination_component__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_jw_angular_pagination_lib_jw_pagination_component__WEBPACK_IMPORTED_MODULE_15__); // Modules
      // Components


      var sharedComponents = [_bg_heading_bg_heading_component__WEBPACK_IMPORTED_MODULE_6__["BgHeadingComponent"], _cover_cover_component__WEBPACK_IMPORTED_MODULE_7__["CoverComponent"], _testimonial_card_testimonial_card_component__WEBPACK_IMPORTED_MODULE_8__["TestimonialCardComponent"], _offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__["OffcanvasComponent"], _forms_elements_form_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["FormConfirmationComponent"], _forms_elements_form_validation_component__WEBPACK_IMPORTED_MODULE_11__["FormValidationComponent"], _forms_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_13__["FormWizardComponent"], _forms_implemented_forms_component__WEBPACK_IMPORTED_MODULE_14__["ImplementedFormsComponent"], _jw_angular_pagination_lib_jw_pagination_component__WEBPACK_IMPORTED_MODULE_15__["JwPaginationComponent"]];

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: sharedComponents,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
        exports: sharedComponents
      })], SharedModule);
      /***/
    },

    /***/
    "xBKX":
    /*!**************************************************************************!*\
      !*** ./src/app/web/shared/forms/elements/form-confirmation.component.ts ***!
      \**************************************************************************/

    /*! exports provided: FormConfirmationComponent */

    /***/
    function xBKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormConfirmationComponent", function () {
        return FormConfirmationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _form_confirmation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-confirmation.component.scss */
      "3K1h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormConfirmationComponent = /*#__PURE__*/function () {
        //@Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
        function FormConfirmationComponent() {
          _classCallCheck(this, FormConfirmationComponent);
        }

        _createClass(FormConfirmationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.formGroup.controls[this.name].setValue(value);
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.formGroup.get(this.name).value;
          }
        }]);

        return FormConfirmationComponent;
      }();

      FormConfirmationComponent.ctorParameters = function () {
        return [];
      };

      FormConfirmationComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FormConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'web-form-confirmation',
        template: "\n    <div class=\"form-element\" [formGroup]=\"formGroup\">\n      <label class=\"form-label\" [for]=\"name\">{{ label }}</label>\n      <div class=\"form-options\">\n        <input\n          class=\"form-confirmation\"\n          type=\"radio\"\n          [formControlName]=\"name\"\n          value=\"true\"\n        />\n        <button\n          type=\"button\"\n          [ngClass]=\"{\n            'form-button': true,\n            'active': getValue() === true\n          }\"\n          (click)=\"setValue(true)\"\n        >\n          {{ options.positive }}\n        </button>\n        <input\n          class=\"form-confirmation\"\n          type=\"radio\"\n          [formControlName]=\"name\"\n          value=\"false\"\n        />\n        <button\n          type=\"button\"\n          [ngClass]=\"{\n            'form-button': true,\n            'active': getValue() === false\n          }\"\n          (click)=\"setValue(false)\"\n        >\n          {{ options.negative }}\n        </button>\n      </div>\n    </div>\n  ",
        styles: [_form_confirmation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], FormConfirmationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~e-learning-modules-list-modules-list-module~web-web-module-es5.js.map