(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peca-school-selection-school-selection-module"],{

/***/ "GIZ7":
/*!***********************************************************************!*\
  !*** ./src/app/peca/school-selection/school-selection.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nbutton,\n.button {\n  background: transparent;\n  border: 0.6vw solid #FFF;\n  border-radius: 6px;\n  color: #fff;\n  font-family: \"Montserrat\";\n  padding: 3vw 6vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 6px;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 10px;\n    padding: 1vw;\n  }\n}\nbutton:hover,\n.button:hover {\n  background-color: #fff;\n  color: #00809a;\n  cursor: pointer;\n}\nbutton:focus,\n.button:focus {\n  outline: none;\n}\nbutton.blue,\n.button.blue {\n  color: #fff;\n  background-color: #00809a;\n  border-color: #00809a;\n}\n@media only screen and (min-width: 1024px) {\n  button.blue,\n.button.blue {\n    color: #00809a;\n    background-color: transparent;\n    border-color: #00809a;\n  }\n  button.blue:hover,\n.button.blue:hover {\n    background-color: #00809a;\n    color: #fff;\n  }\n}\nbutton.lg,\n.button.lg {\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\nbutton.sm,\n.button.sm {\n  font-size: 3.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\n#grid {\n  display: grid;\n  min-height: 100vh;\n  height: auto;\n  grid-template-rows: 6% 94%;\n}\n#grid #navbar {\n  top: 0;\n  display: grid;\n  min-height: 60px !important;\n  background-color: #00809a;\n  grid-auto-flow: column;\n  grid-gap: 20px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n#icon {\n  display: grid;\n  justify-content: start;\n  align-content: center;\n}\n#logout {\n  display: grid;\n  justify-content: end;\n  align-content: center;\n  padding-right: 5%;\n}\na {\n  color: #fff !important;\n  text-decoration: none;\n}\n#grid #principal {\n  position: relative;\n  min-width: 100vw;\n  min-height: 130vh;\n  width: auto;\n  height: auto;\n  /*  @include breakpoint(large) {\n    min-height: 130vh;\n    height: auto !important;\n  } */\n}\n@media (min-width: 100px) and (max-height: 700px) {\n  #grid #principal {\n    min-height: 100vh;\n  }\n}\n@media only screen and (min-width: 320px) {\n  #grid #principal {\n    min-height: 100vh;\n    height: auto !important;\n  }\n}\n@media (max-width: 600px) and (max-height: 700px) {\n  #grid #principal {\n    min-height: 100vh;\n  }\n}\n@media (max-width: 850px) and (max-height: 1300px) {\n  #grid #principal {\n    min-height: 100vh;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #grid #principal {\n    min-height: 100vh;\n    height: auto !important;\n  }\n}\nsection {\n  color: #fff;\n  background-image: url('banner-movil-2.jpg');\n  background-position-y: 0vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section {\n    padding: 6vw 0 12vw;\n    min-height: 95vw;\n    background-image: url('banner-movil-2.jpg');\n    background-position-y: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section {\n    padding: 6vw 0 12vw;\n    min-height: 65vw;\n    background-image: url('banner-2.jpg');\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section {\n    padding: 6vw 0 12vw;\n    min-height: 65vw;\n    background-image: url('banner-2.jpg');\n  }\n}\nsection .heading {\n  font-family: \"Montserrat\";\n  color: #fff;\n  padding-top: 20%;\n  text-align: center;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n  font-size: 8vw;\n  width: calc( (100% / 12) * 5);\n  margin: 0 auto 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section .heading {\n    padding-top: 0 !important;\n    font-size: 8vw;\n    margin: 0 auto 4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section .heading {\n    padding-top: 0 !important;\n    font-size: 5.5vw;\n    margin: 0 auto 4vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section .heading {\n    padding-top: 0 !important;\n    font-size: 4vw;\n    margin: 0 auto 4vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  section .heading {\n    padding-top: 0 !important;\n    font-size: 4.5vw;\n    margin: 0 auto 4vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {\n  section .heading {\n    padding-top: 0 !important;\n    font-size: 5.5vw;\n    margin: 0 auto 4vw;\n  }\n}\nsection .text-description {\n  width: calc( (100% / 12) * 10);\n  margin: auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section .text-description {\n    width: calc( (100% / 12) * 7);\n  }\n}\n@media only screen and (min-width: 768px) {\n  section .text-description {\n    width: calc( (100% / 12) * 7);\n  }\n}\nsection .text-description .paragraph {\n  font-family: \"Montserrat\";\n  color: #fff;\n  font-size: 4vw;\n  text-align: center;\n  line-height: 1.3;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section .text-description .paragraph {\n    font-size: 2.5vw;\n    line-height: 1.5;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section .text-description .paragraph {\n    font-size: 2.7vw;\n    line-height: 1.5;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section .text-description .paragraph {\n    font-size: 1.2vw;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  section .text-description .paragraph {\n    font-size: 3vw;\n    line-height: 1.4;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {\n  section .text-description .paragraph {\n    font-size: 2.2vw;\n    line-height: 1;\n  }\n}\nsection button {\n  background-color: #fff;\n  color: #00809a;\n  font-size: 0.45rem;\n  display: inline-block;\n  text-align: center;\n  min-width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section button {\n    font-size: 0.4rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section button {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section button {\n    font-size: 0.9rem;\n  }\n}\nsection #button {\n  position: relative;\n  padding-top: 2%;\n  grid-row-gap: 5%;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n@media only screen and (min-width: 320px) {\n  section #button {\n    padding-top: 2%;\n    grid-row-gap: 10%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section #button {\n    padding-top: 2%;\n    grid-row-gap: 5%;\n  }\n}\nsection .button-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection .button-col .btn {\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3NjaG9vbC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9lbGVtZW50cy9fYnV0dG9uLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FESEE7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ01GO0FESkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDc0JQO0FERkE7RUFDRSxjQXJCSztBQzBCUDtBQ3ZCQTs7RUFFRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXRkxNO0VFTU4seUJBQUE7RUFDQSxnQkFBQTtBRDBCRjtBRUlJO0VEckNKOztJQVVJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VENEJGO0FBQ0Y7QUVKSTtFRHJDSjs7SUFnQkksd0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUQ4QkY7QUFDRjtBQzVCRTs7RUFDRSxzQkZ0Qkk7RUV1QkosY0YxQkc7RUUyQkgsZUFBQTtBRCtCSjtBQzVCRTs7RUFDRSxhQUFBO0FEK0JKO0FDbEJBOztFQUNFLFdGMUNNO0VFMkNOLHlCRjlDSztFRStDTCxxQkYvQ0s7QUNxRVA7QUU3Qkk7RURJSjs7SUFNSSxjRmxERztJRW1ESCw2QkFBQTtJQUNBLHFCRnBERztFQzRFTDtFQ3ZCRTs7SUFDRSx5QkZ0REM7SUV1REQsV0ZwREU7RUM4RU47QUFDRjtBQ3RCQTs7RUFDRSxnQkFBQTtBRDBCRjtBRS9DSTtFRG9CSjs7SUFJSSxnQkFBQTtF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ZUFBQTtBQTBJSjtBRTlSSTtFRjhJRjtJQVFJLGlCQUFBO0VBNElKO0FBQ0Y7QUVuU0k7RUY4SUY7SUFZSSxpQkFBQTtFQTZJSjtBQUNGO0FFeFNJO0VGOElGO0lBZUksaUJBQUE7RUErSUo7QUFDRjtBQTdJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQStJSjtBRXBUSTtFRmdLRjtJQU9JLGVBQUE7SUFDQSxpQkFBQTtFQWlKSjtBQUNGO0FFMVRJO0VGZ0tGO0lBWUksZUFBQTtJQUNBLGdCQUFBO0VBa0pKO0FBQ0Y7QUFoSkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtKSjtBQWhKRTtFQUNFLGlCQUFBO0FBa0pKIiwiZmlsZSI6InNjaG9vbC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwic2Nzcy9yZXNwb25zaXZlXCI7XG5AaW1wb3J0IFwic2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJzY3NzL2VsZW1lbnRzL2J1dHRvblwiO1xuXG4jZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNiUgOTQlO1xufVxuI2dyaWQgI25hdmJhciB7XG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4jaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNsb2dvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbmEge1xuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNncmlkICNwcmluY2lwYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEzMHZoO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LWhlaWdodDogNzAwcHgpIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsKSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEzMDBweCkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIG1pbi1oZWlnaHQ6IDEzMHZoO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9ICovXG59XG5cbnNlY3Rpb24ge1xuICBjb2xvcjogJHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci1tb3ZpbC0yLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwdnc7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogNnZ3IDAgMTJ2dztcbiAgICBtaW4taGVpZ2h0OiA5NXZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLW1vdmlsLTIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogNnZ3IDAgMTJ2dztcbiAgICBtaW4taGVpZ2h0OiA2NXZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLTIuanBnXCIpO1xuICB9XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICBwYWRkaW5nOiA2dncgMCAxMnZ3O1xuICAgIG1pbi1oZWlnaHQ6IDY1dnc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXItMi5qcGdcIik7XG4gIH1cbiAgLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDh2dztcblxuICAgIEBpbmNsdWRlIGNvbHVtbnMoNSk7XG4gICAgbWFyZ2luOiAwIGF1dG8gOHZ3O1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiA4dnc7XG4gICAgICBtYXJnaW46IDAgYXV0byA0dnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDUuNXZ3O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gNHZ3O1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICBtYXJnaW46IDAgYXV0byA0dnc7XG4gICAgfVxuXG4gIFxuICAgIC8vSXBhZCBwcm8gcG9ydHJhaXRcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiAxMzY2cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiA0LjV2dztcbiAgICAgIG1hcmdpbjogMCBhdXRvIDR2dztcbiAgICB9XG5cbiAgICAvL0lwYWQgcHJvIGxhbnNjYXBlXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogMTM2NnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDUuNXZ3O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gNHZ3O1xuICAgIH1cbiAgfVxuICAudGV4dC1kZXNjcmlwdGlvbiB7XG4gICAgQGluY2x1ZGUgY29sdW1ucygxMCk7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBAaW5jbHVkZSBjb2x1bW5zKDcpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBAaW5jbHVkZSBjb2x1bW5zKDcpO1xuICAgIH1cblxuICAgIC5wYXJhZ3JhcGgge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi43dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAgIH1cblxuICAgICAgLy9JcGFkIHBybyBwb3J0cmFpdFxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiAxMzY2cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgfVxuICAgICAgLy9JcGFkIHBybyBsYW5zY2FwZVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiAxMzY2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSkge1xuICAgICAgICBmb250LXNpemU6IDIuMnZ3O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtc2l6ZTogMC40NXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICB9XG4gICNidXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgZ3JpZC1yb3ctZ2FwOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwpIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICAgIGdyaWQtcm93LWdhcDogMTAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICBncmlkLXJvdy1nYXA6IDUlO1xuICAgIH1cbiAgfVxuICAuYnV0dG9uLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5idXR0b24tY29sIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4ld2ViLWJ1dHRvbiB7XG5cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC42dncgc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBwYWRkaW5nOiAzdncgNnZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGJvcmRlcjogLjR2dyBzb2xpZCAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgYm9yZGVyOiAuNHZ3IHNvbGlkICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ld2hpdGUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuJWJsdWUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJvcmRlci1jb2xvcjogJGJsdWU7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4lbGctYnV0dG9uIHtcbiAgZm9udC1zaXplOiA0LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG59XG5cbiVzbS1idXR0b24ge1xuICBmb250LXNpemU6IDMuNXZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogLjl2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG59XG5cbmJ1dHRvbixcbi5idXR0b24ge1xuICBAZXh0ZW5kICV3ZWItYnV0dG9uO1xuXG4gICYubGcge1xuICAgIEBleHRlbmQgJWxnLWJ1dHRvbjtcbiAgfVxuXG4gICYuc20ge1xuICAgIEBleHRlbmQgJXNtLWJ1dHRvbjtcbiAgfVxuXG4gICYuYmx1ZSB7XG4gICAgQGV4dGVuZCAlYmx1ZS1idXR0b247XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "HZo0":
/*!**************************************************************************!*\
  !*** ./src/app/peca/school-selection/school-selection-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SchoolSelectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolSelectionRoutingModule", function() { return SchoolSelectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _school_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-selection.component */ "YX+H");




const routes = [
    {
        path: "",
        component: _school_selection_component__WEBPACK_IMPORTED_MODULE_3__["SchoolSelectionComponent"]
    }
];
let SchoolSelectionRoutingModule = class SchoolSelectionRoutingModule {
};
SchoolSelectionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SchoolSelectionRoutingModule);



/***/ }),

/***/ "XNPk":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/peca/school-selection/school-selection.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"grid\">\n  <div id=\"navbar\">\n    <div id=\"icon\">\n      <a [routerLink]=\"['/']\"><fa-icon [icon]=\"backIcon\"></fa-icon></a>\n    </div>\n    <div id=\"logout\">\n      <a [routerLink]=\"['/auth/logout']\" [queryParams]=\"{ reload: 1 }\"\n        ><fa-icon [icon]=\"closeIcon\"></fa-icon\n      ></a>\n    </div>\n  </div>\n  <section id=\"principal\">\n    <div class=\"col-auto\">\n      <h1 class=\"heading\">{{ title }}</h1>\n    </div>\n    <div class=\"col-auto\">\n      <div class=\"text-description\">\n        <p class=\"paragraph\">\n          {{ description }}\n        </p>\n      </div>\n    </div>\n    <div>\n      <div class=\"col\">\n        <div id=\"button\" class=\"row\">\n          <div\n            class=\"text-description row justify-content-center\"\n            *ngIf=\"projects && projects.length == 0\"\n          >\n            <div class=\"col-6 col-sm-6 col-md-4 col-lg-4 button-col\">\n              <button type=\"button\" class=\"btn btn-light\">\n                Todavía no tienes proyectos asignados\n              </button>\n            </div>\n          </div>\n          <div\n            *ngFor=\"let item of projects; index as i\"\n            class=\"col-6 col-sm-6 col-md-4 col-lg-4 button-col\"\n          >\n            <button\n              type=\"button\"\n              (click)=\"goTo(item.phase, item.id, i)\"\n              class=\"btn btn-light\"\n            >\n              {{\n                item.school.name != undefined\n                  ? item.school.name\n                  : item.school.name == undefined\n                  ? \"Proyecto \" + item.code\n                  : \"\"\n              }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div></div>\n  </section>\n</div>\n");

/***/ }),

/***/ "YX+H":
/*!*********************************************************************!*\
  !*** ./src/app/peca/school-selection/school-selection.component.ts ***!
  \*********************************************************************/
/*! exports provided: SchoolSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolSelectionComponent", function() { return SchoolSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_school_selection_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./school-selection.component.html */ "XNPk");
/* harmony import */ var _school_selection_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./school-selection.component.scss */ "GIZ7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "EcpT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "QQUL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "e1JD");
/* harmony import */ var _store_actions_peca_peca_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/peca/peca.actions */ "kSTb");
/* harmony import */ var _store_actions_e_learning_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/e-learning/user.actions */ "hcBw");
/* harmony import */ var _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/steps/project.actions */ "/J+G");
/* harmony import */ var _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/steps/steps.service */ "OR82");
/* harmony import */ var _store_actions_steps_residence_info_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/steps/residence-info.actions */ "1mok");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");















let SchoolSelectionComponent = class SchoolSelectionComponent {
    constructor(router, authService, store, stepsService, http) {
        this.router = router;
        this.authService = authService;
        this.store = store;
        this.stepsService = stepsService;
        this.http = http;
        this.backIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"];
        this.closeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.title = "Bienvenido a AmbLeMa";
        this.description = "AmbLeMa es la conjunción de tres actores esenciales: Coordinadores, Escuelas y Padrinos; que le dan vida a un sistema armónico para alcanzar la meta de una educación de calidad que queremos aportar a miles de niños en Venezuela. Bienvenidos a esta maravillosa aventura donde el aporte de cada uno suma para lograr lo que nos mueve en AmbLeMa: el HQS (Hagamos que Suceda).";
    }
    ngOnInit() {
        this.getTokenInfo();
    }
    getTokenInfo() {
        let response;
        this.authService.getToken().subscribe((token) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (token.isValid()) {
                let tokens = JSON.parse(token.getValue());
                response = Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_7__["decodeJwtPayload"])(tokens.access_token);
                const res = yield this.http
                    .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].baseUrl}auth/me`)
                    .toPromise();
                const { data } = res;
                this.store.dispatch([new _store_actions_peca_peca_actions__WEBPACK_IMPORTED_MODULE_9__["SetUser"](data)]);
                this.projects = data.projects;
                this.permissions = data.permissions;
                this.userType = data.userType;
                this.idUser = data.id;
                this.emailUser = response.identity.email;
                this.nameUser = response.identity.name;
                if (this.projects.length === 1) {
                    const projectPhase = parseInt(this.projects[0].phase);
                    const projectId = this.projects[0].id;
                    this.goTo(projectPhase, projectId, 0);
                }
            }
        }));
    }
    goTo(phase, id, index) {
        let phaseProject = phase;
        let idProject = id;
        if (phaseProject == 1) {
            this.router.navigate(["previous-steps"]);
            this.stepsService.callSteps(false);
        }
        else {
            this.router.navigate(["peca"]);
            this.store.dispatch(new _store_actions_e_learning_user_actions__WEBPACK_IMPORTED_MODULE_10__["SetCurrentUser"](this.idUser, (+this.userType)));
        }
        // Whether enters to peca or previous steps this has to be called
        this.store.dispatch([new _store_actions_peca_peca_actions__WEBPACK_IMPORTED_MODULE_9__["SetSelectedProject"](this.projects[index])]);
        this.store.dispatch([new _store_actions_peca_peca_actions__WEBPACK_IMPORTED_MODULE_9__["SetUserPermissions"](this.permissions)]);
        this.store.dispatch(new _store_actions_e_learning_user_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateUserInfo"](this.idUser, (+this.userType)));
        this.store.dispatch(new _store_actions_steps_project_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateStepsSelectedProject"](idProject));
        this.getResidenceInfo();
    }
    getResidenceInfo() {
        this.store.dispatch(new _store_actions_steps_residence_info_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateStates"]);
        this.store.dispatch(new _store_actions_steps_residence_info_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateMunicipalities"]);
    }
};
SchoolSelectionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _services_steps_steps_service__WEBPACK_IMPORTED_MODULE_12__["StepsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SchoolSelectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-school-selection",
        template: _raw_loader_school_selection_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_school_selection_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SchoolSelectionComponent);



/***/ }),

/***/ "rJ4h":
/*!******************************************************************!*\
  !*** ./src/app/peca/school-selection/school-selection.module.ts ***!
  \******************************************************************/
/*! exports provided: SchoolSelectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolSelectionModule", function() { return SchoolSelectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _school_selection_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-selection-routing.module */ "HZo0");
/* harmony import */ var _school_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-selection.component */ "YX+H");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");






let SchoolSelectionModule = class SchoolSelectionModule {
};
SchoolSelectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_school_selection_component__WEBPACK_IMPORTED_MODULE_4__["SchoolSelectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _school_selection_routing_module__WEBPACK_IMPORTED_MODULE_3__["SchoolSelectionRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]
    })
], SchoolSelectionModule);



/***/ })

}]);
//# sourceMappingURL=peca-school-selection-school-selection-module-es2015.js.map