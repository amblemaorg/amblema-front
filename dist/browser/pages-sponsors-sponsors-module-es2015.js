(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sponsors-sponsors-module"],{

/***/ "4sGV":
/*!**************************************************************!*\
  !*** ./src/app/web/pages/sponsors/sponsor-static-content.ts ***!
  \**************************************************************/
/*! exports provided: SPONSOR_CONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPONSOR_CONTENT", function() { return SPONSOR_CONTENT; });
const SPONSOR_CONTENT = {
    sponsorPage: {
        backgroundImage: "./assets/images/banner-1.jpg",
        steps: [
            "Tener interés por aportar recursos a la formación de nuestros niños venezolanos.",
            "Estén dispuestos a seguir los lineamientos de aplicación de Amb-Le-Ma.",
            "Requieran poner en práctica la responsabilidad social de la empresa que representan.",
            "Estén dispuestos a ubicar escuelas en su rango de alcance en la que pueda aplicarse la herramienta Amb-Le-Ma.",
            "Estén dispuestos a invertir mínimo tiempo en hacer enlace con las autoridades educativas y directivos de las escuelas que deseen intervenir.",
            "Dispongan los recursos y tiempo necesarios.",
            "Tengan la disposición de aumentar su grado de satisfacción personal, familiar y/o empresarial, al ver resultados positivos en la mejora de la calidad educativa de muchos docentes y niños en escuelas con escasos recursos económicos.",
        ],
        testimonials: [
        // {
        //   description:
        //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        //   firstName: "Stephanie",
        //   function: "Padrino Principal",
        //   image: "./assets/images/profile-leena.jpg",
        //   lastName: "Soteldo",
        // },
        // {
        //   description:
        //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        //   firstName: "Greudys",
        //   function: "Padrino Principal",
        //   image: "./assets/images/profile-oscar.jpg",
        //   lastName: "Godoy",
        // },
        // {
        //   description:
        //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        //   firstName: "Franklin",
        //   function: "Padrino principal",
        //   image: "./assets/images/profile-oscar.jpg",
        //   lastName: "Perdomo",
        // },
        // {
        //   description:
        //     "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        //   firstName: "José Alberto",
        //   function: "Padrino Principal",
        //   image: "./assets/images/profile-oscar.jpg",
        //   lastName: "Guerrero",
        // },
        ],
        sponsors: [
            {
                fullName: "Guaquira",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/guaquira.png",
            },
            {
                fullName: "Hacienda Sicarigua",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/hacienda-sicarigua.png",
            },
            {
                fullName: "LAPL",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/lapl.png",
            },
            {
                fullName: "Global CyD",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/global-cyd.png",
            },
            {
                fullName: "Fundación la Pastora",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/fundacion-pastora.png",
            },
            {
                fullName: "Tarikan",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/tarikan.png",
            },
            {
                fullName: "Vagos",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/vagos.png",
            },
            {
                fullName: "Carora",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/carora.png",
            },
            {
                fullName: "Familia Gonzalez Bergoderi",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/familia-gonzalez-bergoderi.png",
            },
            {
                fullName: "Familia Malela",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/familia-malela.png",
            },
            {
                fullName: "Granja Boraure",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/granja-boraure.png",
            },
            {
                fullName: "Pinturas",
                pageUrl: "https://google.com",
                image: "./assets/images/padrinos/pinturas.png",
            },
        ],
    },
};


/***/ }),

/***/ "5HZx":
/*!************************************************************!*\
  !*** ./src/app/web/pages/sponsors/sponsors.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nbutton,\n.button {\n  background: transparent;\n  border: 0.6vw solid #FFF;\n  border-radius: 6px;\n  color: #fff;\n  font-family: \"Montserrat\";\n  padding: 3vw 6vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 6px;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button,\n.button {\n    border: 0.4vw solid #fff;\n    border-radius: 10px;\n    padding: 1vw;\n  }\n}\nbutton:hover,\n.button:hover {\n  background-color: #fff;\n  color: #00809a;\n  cursor: pointer;\n}\nbutton:focus,\n.button:focus {\n  outline: none;\n}\nbutton.blue,\n.button.blue {\n  color: #fff;\n  background-color: #00809a;\n  border-color: #00809a;\n}\n@media only screen and (min-width: 1024px) {\n  button.blue,\n.button.blue {\n    color: #00809a;\n    background-color: transparent;\n    border-color: #00809a;\n  }\n  button.blue:hover,\n.button.blue:hover {\n    background-color: #00809a;\n    color: #fff;\n  }\n}\nbutton.lg,\n.button.lg {\n  font-size: 4.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.lg,\n.button.lg {\n    font-size: 1.5vw;\n  }\n}\nbutton.sm,\n.button.sm {\n  font-size: 3.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  button.sm,\n.button.sm {\n    font-size: 0.9vw;\n  }\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nol {\n  counter-reset: circle-counter;\n  list-style: none;\n  padding-left: 1vw;\n  margin: 0;\n}\nol li {\n  color: #81b03e;\n  counter-increment: circle-counter;\n  font-size: 3.5vw;\n  margin-bottom: 4vw;\n  padding-left: 10vw;\n  position: relative;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ol li {\n    font-size: 2vw;\n    margin-bottom: 2vw;\n    padding-left: 5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ol li {\n    font-size: 2vw;\n    margin-bottom: 2vw;\n    padding-left: 5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ol li {\n    font-size: 1.5vw;\n  }\n}\nol li::before {\n  border: 1px solid #00809a;\n  border-radius: 50%;\n  color: #00809a;\n  content: counter(circle-counter);\n  display: inline-block;\n  font-size: 4vw;\n  font-weight: bold;\n  line-height: 1.2;\n  position: absolute;\n  top: -1vw;\n  left: 3vw;\n  text-align: center;\n  width: 5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ol li::before {\n    font-size: 2.5vw;\n    left: 1vw;\n    top: 0;\n    height: 3vw;\n    width: 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ol li::before {\n    font-size: 2.5vw;\n    left: 1vw;\n    top: 0vw;\n    height: 3vw;\n    width: 3vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ol li::before {\n    font-size: 2vw;\n    left: 1.5vw;\n    top: 0vw;\n    height: 2.5vw;\n    width: 2.5vw;\n  }\n}\nh1 {\n  color: #fff;\n  font-size: 9vw;\n  position: absolute;\n  left: 8vw;\n  top: 30vw;\n  z-index: 20;\n  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n    left: 8vw;\n    top: 16vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n    left: 8vw;\n    top: 16vw;\n  }\n}\nowl-carousel-o.testimonials-carousel {\n  position: absolute;\n  top: 45vw;\n  margin: 0 8vw;\n  z-index: 20;\n  width: 80%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  owl-carousel-o.testimonials-carousel {\n    top: 25vw;\n    width: 35%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  owl-carousel-o.testimonials-carousel {\n    top: 25vw;\n    width: 35%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  owl-carousel-o.testimonials-carousel {\n    width: 26%;\n  }\n}\n::ng-deep owl-carousel.sponsors-carousel {\n  display: block;\n  margin-bottom: 20vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.sponsors-carousel {\n    margin-bottom: 5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.sponsors-carousel {\n    margin-bottom: 5vw;\n  }\n}\n::ng-deep owl-carousel.sponsors-carousel .owl-carousel {\n  width: 80%;\n  margin: auto;\n}\n::ng-deep owl-carousel.sponsors-carousel .owl-carousel .owl-stage {\n  display: flex;\n}\n::ng-deep owl-carousel.sponsors-carousel .owl-carousel .owl-stage .owl-item {\n  display: flex;\n  justify-content: center;\n}\n::ng-deep owl-carousel.sponsors-carousel .owl-prev {\n  left: -8vw !important;\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.sponsors-carousel .owl-prev {\n    left: 0 !important;\n  }\n}\n::ng-deep owl-carousel.sponsors-carousel .owl-next {\n  right: -88vw !important;\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.sponsors-carousel .owl-next {\n    right: -79vw !important;\n  }\n}\nweb-bg-heading {\n  display: block;\n  margin: 8vw auto;\n  width: 65%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  web-bg-heading {\n    margin: 4vw auto;\n    width: 35%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  web-bg-heading {\n    margin: 4vw auto;\n    width: 35%;\n  }\n}\n.steps-wrapper {\n  width: calc( (100% / 12) * 10);\n  margin: 8vw auto;\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .growth-animation {\n    transition: 2s ease height !important;\n  }\n  .steps-wrapper .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  .steps-wrapper .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  .steps-wrapper .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  .steps-wrapper .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .steps-wrapper .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  .steps-wrapper .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  .steps-wrapper .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\n.steps-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n.steps-list .steps-list__divider {\n  flex: 1 0 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .steps-list .steps-list__divider {\n    flex: 1 0 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .steps-list .steps-list__divider {\n    flex: 1 0 50%;\n  }\n}\n.sponsors {\n  min-height: 40vw;\n}\n.sponsors .heading {\n  text-align: center;\n  margin: 10vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .sponsors .heading {\n    margin: 8vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sponsors .heading {\n    margin: 8vw 0;\n  }\n}\n.sponsors-list {\n  margin: auto;\n}\n.sponsors-list .inner-wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sponsors-list .sponsor {\n  color: #00809a;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  padding: 0 3vw;\n  margin-bottom: 10%;\n  min-height: 40%;\n}\n.sponsors-list .sponsor .image-wrapper {\n  display: flex;\n  align-items: center;\n  height: 30vw;\n  width: 30vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .sponsors-list .sponsor .image-wrapper {\n    height: 100%;\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sponsors-list .sponsor .image-wrapper {\n    height: 100%;\n    width: 100%;\n  }\n}\n.sponsors-list .sponsor .image-wrapper img {\n  width: 100%;\n}\n.sponsors-list .sponsor .title {\n  font-size: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .sponsors-list .sponsor .title {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sponsors-list .sponsor .title {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .sponsors-list .sponsor .title {\n    font-size: 1.5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Nwb25zb3JzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvZWxlbWVudHMvX2J1dHRvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2VsZW1lbnRzL19oZWFkaW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvZWxlbWVudHMvX2xpc3RzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FDVEE7O0VBRUUsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0ZMTTtFRU1OLHlCQUFBO0VBQ0EsZ0JBQUE7QURZRjtBRWtCSTtFRHJDSjs7SUFVSSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFRGNGO0FBQ0Y7QUVVSTtFRHJDSjs7SUFnQkksd0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RURnQkY7QUFDRjtBQ2RFOztFQUNFLHNCRnRCSTtFRXVCSixjRjFCRztFRTJCSCxlQUFBO0FEaUJKO0FDZEU7O0VBQ0UsYUFBQTtBRGlCSjtBQ0pBOztFQUNFLFdGMUNNO0VFMkNOLHlCRjlDSztFRStDTCxxQkYvQ0s7QUN1RFA7QUVmSTtFRElKOztJQU1JLGNGbERHO0lFbURILDZCQUFBO0lBQ0EscUJGcERHO0VD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RUE0U0o7QUFDRjtBQXhTQTtFQUNFLGdCQUFBO0FBMlNGO0FBelNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBMlNKO0FFbFpJO0VGcUdGO0lBS0ksYUFBQTtFQTRTSjtBQUNGO0FFdlpJO0VGcUdGO0lBU0ksYUFBQTtFQTZTSjtBQUNGO0FBelNBO0VBQ0UsWUFBQTtBQTRTRjtBQTFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBNFNKO0FBelNFO0VBQ0UsY0RyS0c7RUNzS0gsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTJTSjtBQXpTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMlNOO0FFdGJJO0VGdUlBO0lBT0ksWUFBQTtJQUNBLFdBQUE7RUE0U047QUFDRjtBRTViSTtFRnVJQTtJQVlJLFlBQUE7SUFDQSxXQUFBO0VBNlNOO0FBQ0Y7QUEzU007RUFDRSxXQUFBO0FBNlNSO0FBMVNJO0VBQ0UsY0FBQTtBQTRTTjtBRXhjSTtFRjJKQTtJQUlJLGNBQUE7RUE2U047QUFDRjtBRTdjSTtFRjJKQTtJQVFJLGNBQUE7RUE4U047QUFDRjtBRWxkSTtFRjJKQTtJQVlJLGdCQUFBO0VBK1NOO0FBQ0YiLCJmaWxlIjoic3BvbnNvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy9lbGVtZW50cy9idXR0b24nO1xuQGltcG9ydCAnc2Nzcy9lbGVtZW50cy9oZWFkaW5ncyc7XG5AaW1wb3J0ICdzY3NzL2VsZW1lbnRzL2xpc3RzJztcblxuaDEge1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LXNpemU6IDl2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4dnc7XG4gIHRvcDogMzB2dztcbiAgei1pbmRleDogMjA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgbGVmdDogOHZ3O1xuICAgIHRvcDogMTZ2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBsZWZ0OiA4dnc7XG4gICAgdG9wOiAxNnZ3O1xuICB9XG59XG5cbm93bC1jYXJvdXNlbC1vIHtcbiAgJi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1dnc7XG4gICAgbWFyZ2luOiAwIDh2dztcbiAgICB6LWluZGV4OiAyMDtcbiAgICB3aWR0aDogODAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICB0b3A6IDI1dnc7XG4gICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICB0b3A6IDI1dnc7XG4gICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIHdpZHRoOiAyNiU7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIG93bC1jYXJvdXNlbCB7XG4gICAgLy8gU3BvbnNvcnMgb3dsIGNhcm91c2VsIGluIHNwb25zb3JzIHBhZ2VcbiAgICAmLnNwb25zb3JzLWNhcm91c2VsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjB2dztcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuICAgICAgfVxuXG4gICAgICAub3dsLWNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIC5vd2wtc3RhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAub3dsLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAub3dsLXByZXYge1xuICAgICAgICBsZWZ0OiAtOHZ3ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAub3dsLW5leHQge1xuICAgICAgICByaWdodDogLTg4dncgIWltcG9ydGFudDtcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgcmlnaHQ6IC03OXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxud2ViLWJnLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4dncgYXV0bztcbiAgd2lkdGg6IDY1JTtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBtYXJnaW46IDR2dyBhdXRvO1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIG1hcmdpbjogNHZ3IGF1dG87XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuXG4uc3RlcHMtd3JhcHBlciB7XG4gIEBpbXBvcnQgJ3Njc3MvYW5pbWF0aW9ucyc7XG4gIEBpbmNsdWRlIGNvbHVtbnMoMTApO1xuICBtYXJnaW46IDh2dyBhdXRvO1xufVxuXG4uc3RlcHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuc3RlcHMtbGlzdF9fZGl2aWRlciB7XG4gICAgZmxleDogMSAwIDEwMCU7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgfVxuICB9XG59XG5cbi5zcG9uc29ycyB7XG4gIG1pbi1oZWlnaHQ6IDQwdnc7XG5cbiAgLmhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwdncgMDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgbWFyZ2luOiA4dncgMDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgbWFyZ2luOiA4dncgMDtcbiAgICB9XG4gIH1cbn1cblxuLnNwb25zb3JzLWxpc3Qge1xuICBtYXJnaW46IGF1dG87XG5cbiAgLmlubmVyLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuc3BvbnNvciB7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwJTtcblxuICAgIC5pbWFnZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAzMHZ3O1xuICAgICAgd2lkdGg6IDMwdnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4ld2ViLWJ1dHRvbiB7XG5cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC42dncgc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBwYWRkaW5nOiAzdncgNnZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGJvcmRlcjogLjR2dyBzb2xpZCAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgYm9yZGVyOiAuNHZ3IHNvbGlkICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ld2hpdGUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuJWJsdWUtYnV0dG9uIHtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJvcmRlci1jb2xvcjogJGJsdWU7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4lbGctYnV0dG9uIHtcbiAgZm9udC1zaXplOiA0LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG59XG5cbiVzbS1idXR0b24ge1xuICBmb250LXNpemU6IDMuNXZ3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogLjl2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG59XG5cbmJ1dHRvbixcbi5idXR0b24ge1xuICBAZXh0ZW5kICV3ZWItYnV0dG9uO1xuXG4gICYubGcge1xuICAgIEBleHRlbmQgJWxnLWJ1dHRvbjtcbiAgfVxuXG4gICYuc20ge1xuICAgIEBleHRlbmQgJXNtLWJ1dHRvbjtcbiAgfVxuXG4gICYuYmx1ZSB7XG4gICAgQGV4dGVuZCAlYmx1ZS1idXR0b247XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA5LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA4dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcblxub2wge1xuICBjb3VudGVyLXJlc2V0OiBjaXJjbGUtY291bnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XG4gIG1hcmdpbjogMDtcblxuICBsaSB7XG4gICAgY29sb3I6ICRncmVlbjtcbiAgICBjb3VudGVyLWluY3JlbWVudDogY2lyY2xlLWNvdW50ZXI7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgICBtYXJnaW4tYm90dG9tOiA0dnc7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICBtYXJnaW4tYm90dG9tOiAydnc7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICBtYXJnaW4tYm90dG9tOiAydnc7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoY2lyY2xlLWNvdW50ZXIpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xdnc7XG4gICAgICBsZWZ0OiAzdnc7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogNXZ3O1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgICAgbGVmdDogMXZ3O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICBsZWZ0OiAxdnc7XG4gICAgICAgIHRvcDogMHZ3O1xuICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgbGVmdDogMS41dnc7XG4gICAgICAgIHRvcDogMHZ3O1xuICAgICAgICBoZWlnaHQ6IDIuNXZ3O1xuICAgICAgICB3aWR0aDogMi41dnc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBBbmltYXRpb25zXG4uZ3Jvd3RoLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGhlaWdodCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1ib3R0b20tYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgYm90dG9tICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICBib3R0b206IC0xMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGUtcmlnaHQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgcmlnaHQsIDJzIGVhc2UgbGVmdCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgcmlnaHQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgbGVmdDogMTAwdncgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLWxlZnQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGxlZnQsIDJzIGVhc2UgcmlnaHQgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIGxlZnQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5mYWRlLWluLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIG9wYWNpdHkgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5hbmltYXRpb24tZmluaXNoIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "TQkF":
/*!**********************************************************!*\
  !*** ./src/app/web/pages/sponsors/sponsors.component.ts ***!
  \**********************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sponsors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sponsors.component.html */ "XWkX");
/* harmony import */ var _sponsors_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsors.component.scss */ "5HZx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web/api-web-content.service */ "nWHY");
/* harmony import */ var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/web/static-web-content.service */ "TdEa");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _sponsor_static_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sponsor-static-content */ "4sGV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var _web_pages_metadata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../web-pages-metadata */ "Xkmw");
/* harmony import */ var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/actions/web/web.actions */ "LMpb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/store */ "e1JD");














let SponsorsComponent = class SponsorsComponent {
    constructor(http, globalService, zone, store) {
        this.http = http;
        this.globalService = globalService;
        this.zone = zone;
        this.store = store;
        this.landscape = window.innerWidth > window.innerHeight;
        this.coverCarouselOptions = {
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            nav: false,
            navSpeed: 1000,
            autoplayTimeout: 12000,
            responsive: {
                0: {
                    items: 1,
                },
            },
        };
        this.sponsorsOptions = {
            autoplay: false,
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
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1280: {
                    items: 4,
                },
            },
        };
        this.coverData = {
            options: {
                titleBold: true,
                sponsorPage: true,
            },
            slides: [],
            title: "¿Quién es un Padrino AmbLeMa?",
            description: "El padrino AmbLeMa, es un grupo empresarial y/o familiar que apoya económicamente la aplicación del método AmbLeMa en una o más escuelas de sus comunidades vecinas a lo largo de cada año escolar.",
        };
        this.sponsorsPageData = {
            backgroundImage: "",
            testimonials: [],
            steps: [],
            sponsors: [],
        };
        this.stepsList1 = [];
        this.stepsList2 = [];
        this.SPONSOR_PATH = "webcontent?page=sponsorPage";
        this.globalService.setTitle(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_11__["METADATA"].sponsorsPage.title);
        this.globalService.setMetaTags(_web_pages_metadata__WEBPACK_IMPORTED_MODULE_11__["METADATA"].sponsorsPage.metatags);
    }
    ngOnInit() {
        //this.setStaticService();
        this.setApiService();
        this.getSponsorsData();
        this.zone.runOutsideAngular(() => {
            this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, "scroll").subscribe((event) => {
                this.onScroll(event);
            });
        });
    }
    setStaticService() {
        this.sponsorService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_6__["StaticWebContentService"]();
        this.sponsorService.setWebContent(_sponsor_static_content__WEBPACK_IMPORTED_MODULE_8__["SPONSOR_CONTENT"]);
    }
    setApiService() {
        const service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__["ApiWebContentService"](this.http);
        service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl);
        service.setResourcePath(this.SPONSOR_PATH);
        this.sponsorService = service;
    }
    getSponsorsData() {
        this.sponsorService.getWebContent().subscribe((data) => {
            const stepsLength = data.sponsorPage.steps.length;
            this.stepsList1 = data.sponsorPage.steps.slice(0, (stepsLength + 1) / 2);
            this.stepsList2 = data.sponsorPage.steps.slice((stepsLength + 1) / 2, stepsLength);
            this.sponsorsPageData = data.sponsorPage;
            this.coverData.slides.push({
                image: this.sponsorsPageData.backgroundImage,
                title: this.coverData.title,
                description: this.coverData.description,
            });
            this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_12__["SetIsLoadingPage"](false)]);
        });
    }
    onSponsorClick(url) {
        window.open(url);
    }
    onScroll($event) {
        let scrollPosition = $event.srcElement.children[0].scrollTop; // ScrollTop of HTML element
        let listElementPosition = this.listSteps.nativeElement.offsetTop;
        if (listElementPosition / scrollPosition <= 1.5) {
            if (this.scrollSubscription) {
                this.scrollSubscription.unsubscribe();
            }
            this.listSteps.nativeElement.classList.add("animation-finish");
            this.listSteps.nativeElement.classList.remove("animation-init");
        }
    }
    onResize() {
        this.landscape = window.innerWidth > window.innerHeight;
        if (this.landscape) {
            this.sponsorsCarousel.options.responsive[0].items = 3;
            this.sponsorsCarousel.refresh();
        }
        else {
            this.sponsorsCarousel.options.responsive[0].items = 2;
            this.sponsorsCarousel.refresh();
        }
    }
};
SponsorsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["Store"] }
];
SponsorsComponent.propDecorators = {
    sponsorsCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["sponsorsCarousel", { static: false },] }],
    listSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["listSteps", { static: true },] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:resize", [""],] }]
};
SponsorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-sponsors",
        template: _raw_loader_sponsors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sponsors_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SponsorsComponent);



/***/ }),

/***/ "XWkX":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/sponsors/sponsors.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Cover section -->\n<section class=\"cover\">\n  <web-cover\n    [slides]=\"coverData.slides\"\n    [options]=\"coverData.options\"\n    *ngIf=\"coverData.slides\"\n  ></web-cover>\n  <h1>Padrinos</h1>\n  <owl-carousel-o\n    *ngIf=\"sponsorsPageData.testimonials.length > 0\"\n    [options]=\"coverCarouselOptions\"\n    class=\"testimonials-carousel\"\n  >\n    <ng-template carouselSlide *ngFor=\"let testimonial of sponsorsPageData.testimonials\">\n      <web-testimonial-card [testimonial]=\"testimonial\"></web-testimonial-card>\n    </ng-template>\n  </owl-carousel-o>\n</section>\n<!-- End cover section -->\n\n<!-- Steps section -->\n<section #steps class=\"steps\">\n  <web-bg-heading>¿Cómo ser un Padrino?</web-bg-heading>\n  <div class=\"steps-wrapper\">\n    <ol #listSteps class=\"steps-list fade-in-animation animation-init\">\n      <div class=\"steps-list__divider\">\n        <li *ngFor=\"let step of stepsList1\">\n          {{ step }}\n        </li>\n      </div>\n      <div class=\"steps-list__divider\">\n        <li *ngFor=\"let step of stepsList2\">\n          {{ step }}\n        </li>\n      </div>\n    </ol>\n  </div>\n</section>\n<!-- End steps section -->\n\n<!-- Sponsors section -->\n<section class=\"sponsors\">\n  <h2 class=\"heading\">Nuestros Padrinos</h2>\n  <div class=\"sponsors-list\">\n    <owl-carousel\n      #sponsorsCarousel\n      [options]=\"sponsorsOptions\"\n      class=\"sponsors-carousel\"\n      [carouselClasses]=\"['']\"\n      *ngIf=\"sponsorsPageData.sponsors.length\"\n    >\n      <ng-container *ngFor=\"let sponsor of sponsorsPageData.sponsors as sponsors; let i = index\">\n        <ng-container *ngIf=\"(i + 1) % 2 === 1\">\n          <div class=\"inner-wrap\">\n            <ng-container\n              *ngTemplateOutlet=\"sponsorTemplate; context: { sponsor: sponsor }\"\n            ></ng-container>\n            <ng-container\n              *ngTemplateOutlet=\"\n                sponsorTemplate;\n                context: { sponsor: sponsors[i + 1] ? sponsors[i + 1] : null }\n              \"\n            ></ng-container>\n          </div>\n        </ng-container>\n      </ng-container>\n    </owl-carousel>\n  </div>\n</section>\n\n<!-- Angular Template for sponsors -->\n<ng-template #sponsorTemplate let-sponsor=\"sponsor\">\n  <div *ngIf=\"sponsor\" class=\"sponsor\" (click)=\"onSponsorClick(sponsor.webSite)\">\n    <div class=\"image-wrapper\">\n      <img\n        *ngIf=\"sponsor.image\"\n        class=\"image\"\n        [src]=\"sponsor.image\"\n        [alt]=\"sponsor.name + ' logo'\"\n      />\n    </div>\n    <p *ngIf=\"sponsor.name\" class=\"title\">{{ sponsor.name }}</p>\n    <p *ngIf=\"sponsor.description\" class=\"description\">\n      {{ sponsor.description }}\n    </p>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "m0Q5":
/*!***************************************************************!*\
  !*** ./src/app/web/pages/sponsors/sponsors-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SponsorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsRoutingModule", function() { return SponsorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sponsors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsors.component */ "TQkF");




const routes = [
    {
        path: '',
        component: _sponsors_component__WEBPACK_IMPORTED_MODULE_3__["SponsorsComponent"]
    },
];
let SponsorsRoutingModule = class SponsorsRoutingModule {
};
SponsorsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SponsorsRoutingModule);



/***/ }),

/***/ "nZFi":
/*!*******************************************************!*\
  !*** ./src/app/web/pages/sponsors/sponsors.module.ts ***!
  \*******************************************************/
/*! exports provided: SponsorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsModule", function() { return SponsorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "vYfc");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "KMir");
/* harmony import */ var _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sponsors-routing.module */ "m0Q5");
/* harmony import */ var _sponsors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsors.component */ "TQkF");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "bjCr");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);








let SponsorsModule = class SponsorsModule {
};
SponsorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _sponsors_component__WEBPACK_IMPORTED_MODULE_6__["SponsorsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
            _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_5__["SponsorsRoutingModule"]
        ]
    })
], SponsorsModule);



/***/ })

}]);
//# sourceMappingURL=pages-sponsors-sponsors-module-es2015.js.map