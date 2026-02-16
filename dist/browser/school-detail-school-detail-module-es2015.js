(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-detail-school-detail-module"],{

/***/ "4zW6":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/school/school-detail/school-detail.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section #schoolDetails class=\"school-details\">\n  <div class=\"school-details-wrapper\">\n    <h1 class=\"school-name\">{{ school.name }}</h1>\n    <div class=\"school-data-wrapper\">\n      <div class=\"school-data school-sponsor\">\n        <div class=\"icon\"><img src=\"./assets/images/icon-sponsor.png\" /></div>\n        Apadrinada por: {{ school.sponsor }}\n      </div>\n      <div class=\"school-data school-direction\">\n        <div class=\"icon\"><img src=\"./assets/images/icon-school.png\" /></div>\n        {{ school.direction }}\n      </div>\n      <div class=\"school-data school-staff\">\n        <div class=\"icon\"><img src=\"./assets/images/icon-staff.png\" /></div>\n        Cantidad de personal docente, administrativo y obrero: {{ school.staff }}\n      </div>\n      <div class=\"school-data school-coordinator\">\n        <div class=\"icon\">\n          <img src=\"./assets/images/icon-coodinator.png\" />\n        </div>\n        Coordinada por: {{ school.coordinator }}\n      </div>\n      <div class=\"school-data school-enrollment\">\n        <div class=\"icon\">\n          <img src=\"./assets/images/icon-enrollment.png\" />\n        </div>\n        Matrícula estudiantil: {{ school.enrollment }}\n      </div>\n      <div class=\"school-data row\">\n        <div class=\"item\" *ngIf=\"school.instagram\">\n          <a\n            [href]=\"school.instagram\"\n            rel=\"noopener noreferrer\"\n            target=\"_blank\"\n          >\n            <fa-icon class=\"social-icon\" [icon]=\"instagramIcon\"></fa-icon>\n          </a>\n        </div>\n        <div class=\"item\" *ngIf=\"school.twitter\">\n          <a [href]=\"school.twitter\" rel=\"noopener noreferrer\" target=\"_blank\">\n            <fa-icon class=\"social-icon\" [icon]=\"twitterIcon\"></fa-icon>\n          </a>\n        </div>\n        <div class=\"item\" *ngIf=\"school.facebook\">\n          <a [href]=\"school.facebook\" rel=\"noopener noreferrer\" target=\"_blank\">\n            <fa-icon class=\"social-icon\" [icon]=\"facebookIcon\"></fa-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"school-images\">\n    <owl-carousel\n      #schoolImageCarousel\n      [options]=\"schoolImagesOptions\"\n      class=\"school-image-carousel\"\n      [carouselClasses]=\"['']\"\n      *ngIf=\"school.images && school.images.length\"\n    >\n      <ng-container *ngFor=\"let slide of school.images; index as i\">\n        <div class=\"image-wrapper\">\n          <img [src]=\"slide.image\" [alt]=\"school.name + ' imagen ' + i\" />\n          <p class=\"image-description\">{{ slide.description }}</p>\n        </div>\n      </ng-container>\n    </owl-carousel>\n  </div>\n</section>\n<div\n  #symbols\n  class=\"symbols-container slide-bottom-animation animation-init\"\n></div>\n<section #charts class=\"charts\">\n  <div class=\"charts-switcher\">\n    <charts-switcher\n      #chartSwitcher\n      [options]=\"chartSwitcherOptions\"\n      (switch)=\"setActiveChart($event)\"\n      *ngIf=\"isBrowser && school.charts.length > 0\"\n    >\n    </charts-switcher>\n  </div>\n  <div\n    #chartTestimonial\n    class=\"chart-testimonial slide-right-animation animation-init\"\n    *ngIf=\"school.charts.length > 0\"\n  >\n    <web-testimonial-card\n      [testimonial]=\"school.charts[activeChartIndex].testimonial\"\n      *ngIf=\"school.charts[activeChartIndex].testimonial\"\n    >\n    </web-testimonial-card>\n  </div>\n</section>\n<section class=\"math-olympics\">\n  <div class=\"heading\">\n    <h2>Olimpíadas Recreativas de Matemática</h2>\n    <p>\n      Desde Fundación AmbLeMa proponemos y ayudamos a todas las escuelas para \n      que inscriban a los estudiantes de 1er a 6to grado en las \n      Olimpíadas Recreativas de Matemática y Lengua, que organiza la \n      Fundación Motores por la Paz, a través del Sistema de Olimpiadas Recreativas, \n      en sus tres fases: Preliminar, Regional y Nacional. Además, brindamos apoyo a \n      los docentes en la preparación de los estudiantes para ambas competencias.\n    </p>\n  </div>\n  <div class=\"result-summary\">\n    <div class=\"result enrolled\">\n      <img\n        class=\"result-icon\"\n        src=\"./assets/images/icon-enrolled-students.png\"\n      />\n      <span class=\"result-count\">{{ school.mathOlympics.enrolled }}</span>\n      <span class=\"result-label\">Estudiantes participantes</span>\n    </div>\n    <div class=\"result classified\">\n      <img\n        class=\"result-icon\"\n        src=\"./assets/images/icon-classified-students.png\"\n      />\n      <span class=\"result-count\">{{ school.mathOlympics.classified }}</span>\n      <span class=\"result-label\">Estudiantes clasificados</span>\n    </div>\n    <div *ngIf=\"school.mathOlympics.goldMedal\" class=\"result gold\">\n      <img class=\"result-icon\" src=\"./assets/images/icon-gold-medal.png\" />\n      <span class=\"result-count\">{{ school.mathOlympics.goldMedal }}</span>\n      <span class=\"result-label\">Medallas obtenidas (Oro)</span>\n    </div>\n    <div *ngIf=\"school.mathOlympics.silverMedal\" class=\"result silver\">\n      <img class=\"result-icon\" src=\"./assets/images/icon-silver-medal.png\" />\n      <span class=\"result-count\">{{ school.mathOlympics.silverMedal }}</span>\n      <span class=\"result-label\">Medallas obtenidas (Plata)</span>\n    </div>\n    <div *ngIf=\"school.mathOlympics.bronzeMedal\" class=\"result bronze\">\n      <img class=\"result-icon\" src=\"./assets/images/icon-bronze-medal.png\" />\n      <span class=\"result-count\">{{ school.mathOlympics.bronzeMedal }}</span>\n      <span class=\"result-label\">Medallas obtenidas (Bronce)</span>\n    </div>\n  </div>\n</section>\n<section class=\"activities\">\n  <div class=\"activities-tabs-wrapper\">\n    <!--\n    <div\n      class=\"activities-tab\"\n      [ngClass]=\"{ active: selectedActivitiesType == ACTIVITIES.WITH_TEACHERS }\"\n      (click)=\"setActivitiesType(ACTIVITIES.WITH_TEACHERS)\"\n    >\n      Actividades con los docentes\n    </div>\n-->\n    <div\n      class=\"activities-tab\"\n      [ngClass]=\"{ active: selectedActivitiesType == ACTIVITIES.SPECIALS }\"\n      (click)=\"setActivitiesType(ACTIVITIES.SPECIALS)\"\n    >\n      Actividades especiales\n    </div>\n  </div>\n  <div class=\"activities-details-wrapper\">\n    <div class=\"activities-index-carousel\">\n      <owl-carousel\n        #activitiesIndexCarousel\n        [options]=\"activitiesIndexOptions\"\n        class=\"activities-index-carousel\"\n        [carouselClasses]=\"['']\"\n      >\n        <div\n          class=\"activity-index\"\n          [ngClass]=\"{ active: activeActivityIndex == i }\"\n          *ngFor=\"\n            let item of school.activities[selectedActivitiesType];\n            index as i\n          \"\n          (click)=\"activeActivityIndex !== i && setActiveActivity(i)\"\n        >\n          {{ item.name }}\n        </div>\n      </owl-carousel>\n    </div>\n    <div\n      class=\"activity-details\"\n      *ngIf=\"school.activities[selectedActivitiesType].length > 0\"\n    >\n      <div class=\"activity-info\">\n        <span class=\"activity-name\">\n          {{\n            school.activities[selectedActivitiesType][activeActivityIndex].name\n          }}\n        </span>\n        <p class=\"activity-description\">\n          {{\n            school.activities[selectedActivitiesType][activeActivityIndex]\n              .description\n          }}\n        </p>\n      </div>\n      <div class=\"activity-images\">\n        <owl-carousel\n          #activityImageCarousel\n          [options]=\"activityImagesOptions\"\n          class=\"activity-image-carousel\"\n          [carouselClasses]=\"['']\"\n          *ngIf=\"school.activitiesSlider.length\"\n        >\n          <div\n            class=\"image-wrapper\"\n            *ngFor=\"let image of school.activitiesSlider; index as i\"\n          >\n            <img [src]=\"image\" [alt]=\"'Imagen de la actividad ' + i\" />\n          </div>\n        </owl-carousel>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"teachers\">\n  <div class=\"heading\">\n    <h2>Los docentes dicen</h2>\n    <!-- <p></p> -->\n  </div>\n  <div class=\"teachers-list\">\n    <owl-carousel-o\n      *ngIf=\"school.testimonials.length > 0\"\n      [options]=\"teachersOptions\"\n      class=\"teachers-carousel\"\n    >\n      <ng-template carouselSlide *ngFor=\"let item of school.testimonials\">\n        <web-testimonial-card [testimonial]=\"item\"></web-testimonial-card>\n      </ng-template>\n    </owl-carousel-o>\n  </div>\n</section>\n<section *ngIf=\"school.nextActivities.length\" class=\"next-activities\">\n  <div class=\"heading\">\n    <h2>Próximas actividades</h2>\n  </div>\n  <div class=\"activities-list\">\n    <owl-carousel\n      #activitiesCarousel\n      [options]=\"activitiesOptions\"\n      class=\"activities-carousel\"\n      [carouselClasses]=\"['']\"\n    >\n      <ng-container *ngFor=\"let item of school.nextActivities\">\n        <ng-container\n          *ngTemplateOutlet=\"activity; context: { activity: item }\"\n        ></ng-container>\n      </ng-container>\n    </owl-carousel>\n  </div>\n</section>\n\n<section class=\"other-schools\">\n  <div class=\"heading\">\n    <h2>Descubre otras escuelas</h2>\n  </div>\n  <div class=\"other-schools-list\">\n    <owl-carousel\n      #otherSchoolsCarousel\n      [options]=\"otherSchoolsOptions\"\n      class=\"other-schools-carousel\"\n      [carouselClasses]=\"['']\"\n    >\n      <ng-container *ngFor=\"let item of school.otherSchools\">\n        <ng-container\n          *ngTemplateOutlet=\"otherSchool; context: { school: item }\"\n        ></ng-container>\n      </ng-container>\n    </owl-carousel>\n  </div>\n</section>\n\n<!-- Templates -->\n<!-- Other School Template -->\n<ng-template #otherSchool let-school=\"school\">\n  <div class=\"school\">\n    <div class=\"image-wrapper\">\n      <img [src]=\"school.image\" [alt]=\"school.name + ' image'\" />\n    </div>\n    <a\n      *ngIf=\"school.slug\"\n      class=\"school-link\"\n      [routerLink]=\"['/escuelas/' + school.slug]\"\n    >\n      <h3 *ngIf=\"school.name\" class=\"school-name\">{{ school.name }}</h3>\n    </a>\n  </div>\n</ng-template>\n<!-- Activity Template -->\n<ng-template #activity let-activity=\"activity\">\n  <div class=\"activity\">\n    <h3 class=\"title\">{{ activity.title }}</h3>\n    <div class=\"white-box\">\n      <span class=\"date\">{{ activity.date }}</span>\n      <span *ngIf=\"false\" class=\"place\">{{ activity.place }}</span>\n    </div>\n    <p class=\"description\">\n      {{ activity.description }}\n    </p>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "83bL":
/*!*****************************************************************************!*\
  !*** ./src/app/web/pages/school/school-detail/school-detail.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #00809a;\n  line-height: 1;\n  margin: 0;\n  font-weight: bold;\n}\nh1 {\n  font-size: 9.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\nh2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h2 {\n    font-size: 3.3vw;\n  }\n}\nh3 {\n  font-size: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  h3 {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  h3 {\n    font-size: 2vw;\n  }\n}\nweb-schools-map {\n  display: block;\n  position: relative;\n  z-index: 10;\n}\nsection.school-details {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 8vw 8vw 8vw 8vw;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details {\n    padding: 10vw 3vw 0vw 10vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details {\n    padding: 10vw 3vw 0vw 10vw;\n  }\n}\nsection.school-details > div {\n  flex: 0 0 100%;\n  width: 100%;\n}\nsection.school-details > div:first-child {\n  margin-bottom: 5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details > div:first-child {\n    flex: 0 0 40%;\n    width: 40%;\n    margin-bottom: 0;\n    max-width: 40%;\n  }\n  section.school-details > div:nth-child(2) {\n    flex: 0 0 55%;\n    width: 55%;\n    max-width: 55%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details > div:first-child {\n    flex: 0 0 40%;\n    margin-bottom: 0;\n    max-width: 40%;\n    width: 40%;\n  }\n  section.school-details > div:nth-child(2) {\n    flex: 0 0 40%;\n    max-width: 40%;\n    width: 40%;\n  }\n}\nsection.school-details .school-details-wrapper {\n  color: #00809a;\n}\nsection.school-details .school-details-wrapper .school-name {\n  margin-bottom: 7vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details .school-details-wrapper .school-name {\n    margin-bottom: 3.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details .school-details-wrapper .school-name {\n    margin-bottom: 3.5vw;\n  }\n}\nsection.school-details .school-details-wrapper .school-data-wrapper .school-data {\n  display: flex;\n  align-items: center;\n  font-size: 4vw;\n  margin-bottom: 1.8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data {\n    font-size: 1.2vw;\n  }\n}\nsection.school-details .school-details-wrapper .school-data-wrapper .school-data .icon {\n  margin-right: 5vw;\n  flex-basis: 15%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data .icon {\n    margin-right: 2vw;\n    flex-basis: 8%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data .icon {\n    margin-right: 2vw;\n    flex-basis: 8%;\n  }\n}\nsection.school-details .school-details-wrapper .school-data-wrapper .school-data .item {\n  margin-right: 1vw;\n}\nsection.school-details .school-details-wrapper .school-data-wrapper .school-data .item .social-icon {\n  font-size: 10vw;\n  margin: 0 2vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data .item .social-icon {\n    font-size: 5vw;\n    margin: 0 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data .item .social-icon {\n    font-size: 5vw;\n    margin: 0 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.school-details .school-details-wrapper .school-data-wrapper .school-data .item .social-icon {\n    font-size: 2.5vw;\n    margin: 0 0.5vw;\n  }\n}\nsection.school-details .school-details-wrapper .school-data-wrapper .school-data.row {\n  margin-left: 0 !important;\n}\nsection.school-details .school-images {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nsection.school-details .school-images .image-description {\n  background-color: #00809a;\n  color: white;\n  margin: auto;\n  padding: 2% 10%;\n  position: relative;\n  text-align: center;\n  height: 10vw;\n  width: 100%;\n  font-size: 3vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.school-details .school-images .image-description {\n    height: 4vw;\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.school-details .school-images .image-description {\n    min-height: 4vw;\n    height: auto;\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .growth-animation {\n    transition: 2s ease height !important;\n  }\n  .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\n.symbols-container {\n  background-image: url('cover-blue-simbolos.png');\n  background-repeat: no-repeat;\n  background-size: 240vw;\n  background-position-y: 102.5%;\n  bottom: -2vw;\n  height: 30vw;\n  margin-top: 0;\n  position: relative;\n  z-index: 5;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .symbols-container {\n    background-size: 100vw;\n    background-position-y: 105%;\n    bottom: -2vw;\n    height: 14vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .symbols-container {\n    background-size: 100vw;\n    background-position-y: 105%;\n    bottom: -2vw;\n    height: 14vw;\n  }\n}\n.symbols-container.animation-init {\n  bottom: -30vw !important;\n  transition: unset !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .symbols-container.animation-init {\n    bottom: -14vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .symbols-container.animation-init {\n    bottom: -14vw !important;\n  }\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper img {\n  height: 80vw;\n  margin: auto;\n  max-width: 100%;\n  width: auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper img {\n    height: 25vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper img {\n    height: 25vw;\n  }\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav {\n  height: 10vw;\n  margin: auto;\n  position: relative;\n  top: -10vw;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav {\n    height: 4vw;\n    top: -4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav {\n    height: 4vw;\n    top: -4vw;\n  }\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next,\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev {\n  position: absolute;\n  bottom: 0;\n  top: 0.3vw;\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev::before {\n  display: flex;\n  color: white;\n  font-size: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev::before {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev::before {\n    font-size: 2vw;\n  }\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev {\n  left: 6%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev {\n    left: 2%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-prev {\n    left: 2%;\n  }\n}\n::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next {\n  right: 6%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next {\n    right: 2%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.school-image-carousel .owl-carousel .owl-nav .owl-next {\n    right: 2%;\n  }\n}\nsection.charts {\n  background-color: #00809a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8vw 6vw;\n  position: relative;\n  overflow-x: hidden;\n  width: 100%;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.charts {\n    flex-direction: row;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.charts {\n    flex-direction: row;\n  }\n}\nsection.charts .charts-switcher {\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.charts .charts-switcher {\n    width: 65%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.charts .charts-switcher {\n    width: 65%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.charts .growth-animation {\n    transition: 2s ease height !important;\n  }\n  section.charts .growth-animation.animation-init {\n    height: 0 !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.charts .slide-bottom-animation {\n    transition: 2s ease bottom !important;\n  }\n  section.charts .slide-bottom-animation.animation-init {\n    bottom: -100vh !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.charts .slide-right-animation {\n    position: relative !important;\n    transition: 2s ease right, 2s ease left !important;\n  }\n  section.charts .slide-right-animation.animation-init {\n    right: -100vw !important;\n    left: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.charts .slide-left-animation {\n    position: relative;\n    transition: 2s ease left, 2s ease right !important;\n  }\n  section.charts .slide-left-animation.animation-init {\n    left: -100vw !important;\n    right: 100vw !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.charts .fade-in-animation {\n    transition: 2s ease opacity !important;\n  }\n  section.charts .fade-in-animation.animation-init {\n    opacity: 0 !important;\n  }\n  section.charts .fade-in-animation.animation-finish {\n    opacity: 1 !important;\n  }\n}\nsection.charts .chart-testimonial {\n  position: relative;\n  margin: 5vw 0;\n  width: 90%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.charts .chart-testimonial {\n    position: absolute !important;\n    right: 0;\n    margin: 0;\n    width: 30%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.charts .chart-testimonial {\n    position: absolute !important;\n    right: 0;\n    margin: 0;\n    width: 30%;\n  }\n}\nsection.charts.animation-init {\n  transition: unset !important;\n}\nsection.math-olympics {\n  background-color: #eee;\n  padding: 15vw 10vw;\n  position: relative;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics {\n    padding: 5vw 10vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics {\n    padding: 5vw 10vw;\n  }\n}\nsection.math-olympics .heading {\n  text-align: center;\n  color: #00809a;\n  margin-bottom: 8vw;\n}\nsection.math-olympics .heading p {\n  font-size: 3.5vw;\n  margin: 2vw 0 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics .heading p {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics .heading p {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.math-olympics .heading p {\n    font-size: 1vw;\n  }\n}\nsection.math-olympics .result-summary {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.math-olympics .result-summary .result {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n}\n@media only screen and (max-width: 767px) and (orientation: portrait) {\n  section.math-olympics .result-summary .result.gold {\n    width: 100%;\n  }\n  section.math-olympics .result-summary .result.gold .result-count,\nsection.math-olympics .result-summary .result.gold .result-label {\n    width: -moz-min-content;\n    width: min-content;\n  }\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics .result-summary .result {\n    width: -moz-min-content;\n    width: min-content;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics .result-summary .result {\n    width: -moz-min-content;\n    width: min-content;\n  }\n}\nsection.math-olympics .result-summary .result .result-icon {\n  height: 25vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics .result-summary .result .result-icon {\n    height: 10vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics .result-summary .result .result-icon {\n    height: 10vw;\n  }\n}\nsection.math-olympics .result-summary .result .result-count {\n  color: #fff;\n  font-size: 6vw;\n  font-weight: bold;\n  left: 0.3vw;\n  position: relative;\n  top: -12vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics .result-summary .result .result-count {\n    font-size: 2.5vw;\n    left: 0.1vw;\n    top: -5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics .result-summary .result .result-count {\n    font-size: 2.5vw;\n    left: 0.1vw;\n    top: -5vw;\n  }\n}\nsection.math-olympics .result-summary .result .result-label {\n  color: #00809a;\n  font-size: 5vw;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  top: -8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.math-olympics .result-summary .result .result-label {\n    font-size: 2vw;\n    top: -2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.math-olympics .result-summary .result .result-label {\n    font-size: 2vw;\n    top: -2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.math-olympics .result-summary .result .result-label {\n    font-size: 1.5vw;\n  }\n}\nsection.activities {\n  background-color: #fff;\n  padding: 6vw 0;\n  position: relative;\n  z-index: 10;\n}\nsection.activities .activities-tabs-wrapper {\n  display: flex;\n  border-bottom: 3px solid #00809a;\n  text-align: center;\n  margin: auto;\n  width: 90%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.activities .activities-tabs-wrapper {\n    border-bottom: 5px solid #00809a;\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.activities .activities-tabs-wrapper {\n    border-bottom: 5px solid #00809a;\n    width: 80%;\n  }\n}\nsection.activities .activities-tabs-wrapper .activities-tab {\n  color: #81b03e;\n  flex: 1 0 50%;\n  font-weight: normal;\n  font-size: 4.5vw;\n  line-height: 1;\n  padding: 8% 2%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.activities .activities-tabs-wrapper .activities-tab {\n    font-size: 2.5vw;\n    padding: 2% 10%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.activities .activities-tabs-wrapper .activities-tab {\n    font-size: 2.5vw;\n    padding: 2% 10%;\n  }\n}\nsection.activities .activities-tabs-wrapper .activities-tab.active {\n  color: #00809a;\n  font-weight: bold;\n}\nsection.activities .activities-tabs-wrapper .activities-tab:hover:not(.active) {\n  cursor: pointer;\n}\nsection.activities .activities-details-wrapper .activities-index-carousel {\n  width: 100%;\n  padding: 0 4%;\n}\nsection.activities .activities-details-wrapper .activities-index-carousel .activity-index {\n  border: 1px solid #00809a;\n  color: #00809a;\n  font-size: 5vw;\n  font-weight: bold;\n  padding: 2.5vw 2vw;\n  text-align: center;\n  margin: 0 1vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.activities .activities-details-wrapper .activities-index-carousel .activity-index {\n    font-size: 1.8vw;\n    padding: 1vw 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.activities .activities-details-wrapper .activities-index-carousel .activity-index {\n    font-size: 1.8vw;\n    padding: 1vw 2vw;\n  }\n}\nsection.activities .activities-details-wrapper .activities-index-carousel .activity-index.active, section.activities .activities-details-wrapper .activities-index-carousel .activity-index:hover {\n  background-color: #00809a;\n  color: #fff;\n  cursor: pointer;\n}\nsection.activities .activities-details-wrapper .activity-details .activity-info {\n  color: #00809a;\n  padding: 5% 10%;\n  text-align: center;\n}\nsection.activities .activities-details-wrapper .activity-details .activity-info .activity-name {\n  display: block;\n  font-size: 6vw;\n  font-weight: bold;\n  margin-bottom: 5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.activities .activities-details-wrapper .activity-details .activity-info .activity-name {\n    font-size: 2.25vw;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.activities .activities-details-wrapper .activity-details .activity-info .activity-name {\n    font-size: 2.25vw;\n    margin-bottom: 2vw;\n  }\n}\nsection.activities .activities-details-wrapper .activity-details .activity-info .activity-description {\n  font-size: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.activities .activities-details-wrapper .activity-details .activity-info .activity-description {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.activities .activities-details-wrapper .activity-details .activity-info .activity-description {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.activities .activities-details-wrapper .activity-details .activity-info .activity-description {\n    font-size: 1vw;\n  }\n}\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav {\n  display: none;\n  position: relative;\n  z-index: -1;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav {\n    display: flex;\n    top: -4.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav {\n    display: flex;\n    top: -4.5vw;\n  }\n}\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next,\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n}\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev::before {\n  display: flex;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev::before {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next::before,\n::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev::before {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev {\n    left: -2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-prev {\n    left: -2vw;\n  }\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next {\n    right: -2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-index-carousel .owl-carousel .owl-nav .owl-next {\n    right: -2vw;\n  }\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage {\n  display: flex;\n  align-items: center;\n  height: 66vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage {\n    height: 25vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage {\n    height: 25vw;\n  }\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item {\n  height: 33vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item {\n    height: 20vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item {\n    height: 20vw;\n  }\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  height: 33vw;\n  width: 33vw !important;\n  transition: width 1s ease, height 1s ease, left 1s ease, bottom 1s ease;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper {\n    height: 20vw;\n    width: 20vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper {\n    height: 20vw;\n    width: 20vw !important;\n  }\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item .image-wrapper img {\n  height: 100%;\n  width: 100%;\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item.center {\n  position: relative;\n  z-index: 100;\n}\n::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item.center .image-wrapper {\n  height: 66vw !important;\n  width: 66vw !important;\n  left: calc(-33vw / 2);\n  bottom: calc(33vw / 2);\n  transition: width 1s ease, height 1s ease, left 1s ease, bottom 1s ease;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item.center .image-wrapper {\n    height: 25vw !important;\n    width: 25vw !important;\n    left: calc(-5vw / 2);\n    bottom: calc(5vw / 2);\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activity-image-carousel .owl-carousel .owl-stage .owl-item.center .image-wrapper {\n    height: 25vw !important;\n    width: 25vw !important;\n    position: relative;\n    left: calc(-5vw / 2);\n    bottom: calc(5vw / 2);\n  }\n}\nsection.teachers {\n  background-image: url('background-trees-movil.png');\n  background-color: #fff;\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #fff;\n  min-height: 152vw;\n  overflow-x: hidden;\n  position: relative;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.teachers {\n    background-image: url('background-trees.png');\n    min-height: 56vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.teachers {\n    background-image: url('background-trees.png');\n    min-height: 56vw;\n  }\n}\nsection.teachers .heading {\n  color: #fff;\n  position: absolute;\n  top: 40vw;\n  width: 60%;\n  left: 15vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.teachers .heading {\n    bottom: 16vw;\n    left: 6vw;\n    top: unset;\n    width: 25vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.teachers .heading {\n    bottom: 16vw;\n    left: 6vw;\n    top: unset;\n    width: 25vw;\n  }\n}\nsection.teachers .heading h2 {\n  font-size: 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.teachers .heading h2 {\n    font-size: 3.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.teachers .heading h2 {\n    font-size: 3.3vw;\n  }\n}\nsection.teachers .heading p {\n  font-size: 4.5vw;\n  margin: 1.5vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.teachers .heading p {\n    font-size: 1.8vw;\n    margin: 1vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.teachers .heading p {\n    font-size: 1.8vw;\n    margin: 1vw 0;\n  }\n}\nsection.next-activities {\n  background-color: #00809a;\n  color: #fff;\n  padding: 10vw;\n  position: relative;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.next-activities {\n    padding: 6vw 8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.next-activities {\n    padding: 6vw 8vw;\n  }\n}\nsection.next-activities .heading {\n  color: #fff;\n  text-align: center;\n}\nsection.next-activities .heading h2 {\n  color: inherit;\n}\nsection.next-activities .activities-list {\n  margin-top: 5vw;\n}\nsection.next-activities .activities-list .activity {\n  text-align: center;\n  padding: 0 8vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.next-activities .activities-list .activity {\n    padding: 0 3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.next-activities .activities-list .activity {\n    padding: 0 3vw;\n  }\n}\nsection.next-activities .activities-list .activity .white-box {\n  background-color: #fff;\n  color: #00809a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4vw;\n  padding: 2vw 4vw;\n  margin: 2vw 0 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.next-activities .activities-list .activity .white-box {\n    font-size: 1.5vw;\n    padding: 0.5vw 1vw;\n    margin: 0.5vw 0 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.next-activities .activities-list .activity .white-box {\n    font-size: 1.5vw;\n    padding: 0.5vw 1vw;\n    margin: 0.5vw 0 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.next-activities .activities-list .activity .white-box {\n    font-size: 0.9vw;\n  }\n}\nsection.next-activities .activities-list .activity .white-box span {\n  width: 50%;\n  text-align: center;\n  /*\n  &:first-child {\n    text-align: left;\n  }\n  &:last-child {\n    text-align: right;\n  }\n  */\n}\nsection.next-activities .activities-list .activity .title {\n  color: #fff;\n}\nsection.next-activities .activities-list .activity .description {\n  font-size: 4vw;\n  padding: 0 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.next-activities .activities-list .activity .description {\n    font-size: 1.5vw;\n    padding: 0 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.next-activities .activities-list .activity .description {\n    font-size: 1.5vw;\n    padding: 0 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.next-activities .activities-list .activity .description {\n    font-size: 0.9vw;\n  }\n}\nsection.other-schools {\n  background-color: #fff;\n  padding: 10vw;\n  text-align: center;\n  position: relative;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.other-schools {\n    padding: 6vw 8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.other-schools {\n    padding: 6vw 8vw;\n  }\n}\nsection.other-schools .other-schools-list {\n  margin-top: 5vw;\n}\nsection.other-schools .other-schools-list .school {\n  padding: 0 2vw;\n}\nsection.other-schools .other-schools-list .school .school-name {\n  margin-top: 5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.other-schools .other-schools-list .school .school-name {\n    margin-top: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.other-schools .other-schools-list .school .school-name {\n    margin-top: 2vw;\n  }\n}\n::ng-deep owl-carousel.activities-carousel .owl-nav {\n  top: 40% !important;\n}\n::ng-deep owl-carousel.activities-carousel .owl-nav .owl-prev::before,\n::ng-deep owl-carousel.activities-carousel .owl-nav .owl-next::before {\n  color: #fff !important;\n}\n::ng-deep owl-carousel.activities-carousel .owl-nav .owl-prev {\n  left: -8vw !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-carousel .owl-nav .owl-prev {\n    left: -3vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-carousel .owl-nav .owl-prev {\n    left: -3vw !important;\n  }\n}\n::ng-deep owl-carousel.activities-carousel .owl-nav .owl-next {\n  right: -87vw !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel.activities-carousel .owl-nav .owl-next {\n    right: -86vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel.activities-carousel .owl-nav .owl-next {\n    right: -86vw !important;\n  }\n}\n::ng-deep owl-carousel.other-schools-carousel .owl-nav {\n  top: 40% !important;\n}\n::ng-deep owl-carousel.other-schools-carousel .owl-nav .owl-prev {\n  left: -8vw !important;\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.other-schools-carousel .owl-nav .owl-prev {\n    left: -3vw !important;\n  }\n}\n::ng-deep owl-carousel.other-schools-carousel .owl-nav .owl-next {\n  right: -88vw !important;\n}\n@media only screen and (min-width: 1024px) {\n  ::ng-deep owl-carousel.other-schools-carousel .owl-nav .owl-next {\n    right: -80vw !important;\n  }\n}\n::ng-deep owl-carousel-o.teachers-carousel {\n  position: absolute;\n  bottom: 20vw;\n  display: block;\n  left: 12vw;\n  width: 130%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel-o.teachers-carousel {\n    bottom: 10vw;\n    left: 35vw;\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel-o.teachers-carousel {\n    bottom: 10vw;\n    left: 35vw;\n    width: 80%;\n  }\n}\n::ng-deep owl-carousel-o.teachers-carousel web-testimonial-card .testimonial-card {\n  width: 90%;\n}\n::ng-deep owl-carousel-o.teachers-carousel .owl-nav {\n  top: -35% !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel-o.teachers-carousel .owl-nav {\n    top: 80% !important;\n    left: -37% !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel-o.teachers-carousel .owl-nav {\n    top: 80% !important;\n    left: -37% !important;\n  }\n}\n::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-prev:before,\n::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-next:before {\n  color: #fff !important;\n}\n::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-prev {\n  left: 0 !important;\n}\n::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-next {\n  right: -20vw !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-next {\n    right: -8vw !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep owl-carousel-o.teachers-carousel .owl-nav .owl-next {\n    right: -8vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NjaG9vbC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9lbGVtZW50cy9faGVhZGluZ3Muc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FESEE7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ01GO0FESkU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDc0JQO0FERkE7RUFDRSxjQXJCSztBQzBCUDtBQ3ZCQTtFQUNFLGNGSks7RUVLTCxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FEMEJGO0FDdkJBO0VBQ0UsZ0JBQUE7QUQwQkY7QUVHSTtFRDlCSjtJQUlJLGdCQUFBO0VEMkJGO0FBQ0Y7QUVGSTtFRDlCSjtJQVFJLGdCQUFBO0VENEJGO0FBQ0Y7QUN6QkE7RUFDRSxjQUFBO0FENEJGO0FFWEk7RURsQko7SUFJSSxnQkFBQTtFRDZCRjtBQUNGO0FFaEJJO0VEbEJKO0lBUUksZ0JBQUE7RUQ4QkY7QUFDRjtBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7QUV6Qkk7RUROSjtJQUlJLGNBQUE7RUQrQkY7QUFDRjtBRTlCSTtFRE5KO0lBUUksY0FBQTtFRGdDRjtBQUNGO0FBdkVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Es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dUxWO0FBQ0Y7QUUxckNJO0VGOC9CSTtJQVFJLHNCQUFBO0VBd0xWO0FBQ0YiLCJmaWxlIjoic2Nob29sLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNjc3MvZWxlbWVudHMvaGVhZGluZ3NcIjtcblxud2ViLXNjaG9vbHMtbWFwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbnNlY3Rpb24uc2Nob29sLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHZ3IDh2dyA4dncgOHZ3O1xuICB3aWR0aDogMTAwJTtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBwYWRkaW5nOiAxMHZ3IDN2dyAwdncgMTB2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogMTB2dyAzdncgMHZ3IDEwdnc7XG4gIH1cblxuICAmID4gZGl2IHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZsZXg6IDAgMCA1NSU7XG4gICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNjaG9vbC1kZXRhaWxzLXdyYXBwZXIge1xuICAgIGNvbG9yOiAkYmx1ZTtcblxuICAgIC5zY2hvb2wtbmFtZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjV2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMy41dnc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNjaG9vbC1kYXRhLXdyYXBwZXIge1xuICAgICAgLnNjaG9vbC1kYXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuOHZ3O1xuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxNSU7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnZ3O1xuICAgICAgICAgICAgZmxleC1iYXNpczogOCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnZ3O1xuICAgICAgICAgICAgZmxleC1iYXNpczogOCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcblxuICAgICAgICAgIC5zb2NpYWwtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDAgMnZ3O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxdnc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMXZ3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwLjV2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zY2hvb2wtZGF0YS5yb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zY2hvb2wtaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiAvKiBmbGV4LWVuZCAqL2NlbnRlcjtcblxuICAgIC5pbWFnZS1kZXNjcmlwdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmc6IDIlIDEwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTB2dztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAzdnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBoZWlnaHQ6IDR2dztcbiAgICAgICAgZm9udC1zaXplOiAxLjF2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgbWluLWhlaWdodDogNHZ3O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbXBvcnQgXCJzY3NzL2FuaW1hdGlvbnNcIjtcbi5zeW1ib2xzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY292ZXItYmx1ZS1zaW1ib2xvcy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjQwdnc7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAyLjUlO1xuICBib3R0b206IC0ydnc7XG4gIGhlaWdodDogMzB2dztcbiAgbWFyZ2luLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDUlO1xuICAgIGJvdHRvbTogLTJ2dztcbiAgICBoZWlnaHQ6IDE0dnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDUlO1xuICAgIGJvdHRvbTogLTJ2dztcbiAgICBoZWlnaHQ6IDE0dnc7XG4gIH1cblxuICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICBib3R0b206IC0zMHZ3ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgYm90dG9tOiAtMTR2dyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBib3R0b206IC0xNHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIG93bC1jYXJvdXNlbC5zY2hvb2wtaW1hZ2UtY2Fyb3VzZWwge1xuICAgIC5vd2wtY2Fyb3VzZWwge1xuICAgICAgLm93bC1zdGFnZSB7XG4gICAgICAgIC5vd2wtaXRlbSB7XG4gICAgICAgICAgLmltYWdlLXdyYXBwZXIge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZ3O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjV2dztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXZ3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5vd2wtbmF2IHtcbiAgICAgICAgaGVpZ2h0OiAxMHZ3O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMTB2dztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgaGVpZ2h0OiA0dnc7XG4gICAgICAgICAgdG9wOiAtNHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDR2dztcbiAgICAgICAgICB0b3A6IC00dnc7XG4gICAgICAgIH1cblxuICAgICAgICAub3dsLW5leHQsXG4gICAgICAgIC5vd2wtcHJldiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0b3A6IDAuM3Z3O1xuXG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtcHJldiB7XG4gICAgICAgICAgbGVmdDogNiU7XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtbmV4dCB7XG4gICAgICAgICAgcmlnaHQ6IDYlO1xuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgcmlnaHQ6IDIlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgcmlnaHQ6IDIlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uLmNoYXJ0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4dncgNnZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuY2hhcnRzLXN3aXRjaGVyIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gIH1cblxuICBAaW1wb3J0IFwic2Nzcy9hbmltYXRpb25zXCI7XG4gIC5jaGFydC10ZXN0aW1vbmlhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNXZ3IDA7XG4gICAgd2lkdGg6IDkwJTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgfVxuXG4gICYuYW5pbWF0aW9uLWluaXQge1xuICAgIHRyYW5zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuc2VjdGlvbi5tYXRoLW9seW1waWNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzogMTV2dyAxMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIHBhZGRpbmc6IDV2dyAxMHZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBwYWRkaW5nOiA1dncgMTB2dztcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIG1hcmdpbi1ib3R0b206IDh2dztcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICAgIG1hcmdpbjogMnZ3IDAgMDtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJlc3VsdC1zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5yZXN1bHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0sIHBvcnRyYWl0LCBkb3duKSB7XG4gICAgICAgICYuZ29sZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAucmVzdWx0LWNvdW50LFxuICAgICAgICAgIC5yZXN1bHQtbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogMjV2dztcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGhlaWdodDogMTB2dztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmVzdWx0LWNvdW50IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZWZ0OiAwLjN2dztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0xMnZ3O1xuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgICAgICAgbGVmdDogMC4xdnc7XG4gICAgICAgICAgdG9wOiAtNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICAgIGxlZnQ6IDAuMXZ3O1xuICAgICAgICAgIHRvcDogLTV2dztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmVzdWx0LWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC04dnc7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgdG9wOiAtMnZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICB0b3A6IC0ydnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uLmFjdGl2aXRpZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDZ2dyAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC5hY3Rpdml0aWVzLXRhYnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGJsdWU7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRibHVlO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICAuYWN0aXZpdGllcy10YWIge1xuICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiA0LjV2dztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgcGFkZGluZzogOCUgMiU7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICBwYWRkaW5nOiAyJSAxMCU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgICAgICBwYWRkaW5nOiAyJSAxMCU7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hY3Rpdml0aWVzLWRldGFpbHMtd3JhcHBlciB7XG4gICAgLmFjdGl2aXRpZXMtaW5kZXgtY2Fyb3VzZWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDQlO1xuXG4gICAgICAuYWN0aXZpdHktaW5kZXgge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDIuNXZ3IDJ2dztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgMXZ3O1xuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgICAgcGFkZGluZzogMXZ3IDJ2dztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgICAgcGFkZGluZzogMXZ3IDJ2dztcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpdml0eS1kZXRhaWxzIHtcbiAgICAgIC5hY3Rpdml0eS1pbmZvIHtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBwYWRkaW5nOiA1JSAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuYWN0aXZpdHktbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiA2dnc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMjV2dztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNXZ3O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZpdHktZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIG93bC1jYXJvdXNlbC5hY3Rpdml0aWVzLWluZGV4LWNhcm91c2VsIHtcbiAgICAub3dsLWNhcm91c2VsIHtcbiAgICAgIC5vd2wtbmF2IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRvcDogLTQuNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRvcDogLTQuNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm93bC1uZXh0LFxuICAgICAgICAub3dsLXByZXYge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3dsLXByZXYge1xuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgbGVmdDogLTJ2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgIGxlZnQ6IC0ydnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm93bC1uZXh0IHtcbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtMnZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgcmlnaHQ6IC0ydnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3dsLWNhcm91c2VsLmFjdGl2aXR5LWltYWdlLWNhcm91c2VsIHtcbiAgICAub3dsLWNhcm91c2VsIHtcbiAgICAgIC5vd2wtc3RhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDY2dnc7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgIH1cblxuICAgICAgICAub3dsLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogMzN2dztcblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMzN2dztcbiAgICAgICAgICAgIHdpZHRoOiAzM3Z3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLCBoZWlnaHQgMXMgZWFzZSwgbGVmdCAxcyBlYXNlLCBib3R0b20gMXMgZWFzZTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjB2dztcbiAgICAgICAgICAgICAgd2lkdGg6IDIwdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZ3O1xuICAgICAgICAgICAgICB3aWR0aDogMjB2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY2VudGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcblxuICAgICAgICAgICAgLmltYWdlLXdyYXBwZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDY2dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgd2lkdGg6IDY2dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbGVmdDogY2FsYygtMzN2dyAvIDIpO1xuICAgICAgICAgICAgICBib3R0b206IGNhbGMoMzN2dyAvIDIpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLCBoZWlnaHQgMXMgZWFzZSwgbGVmdCAxcyBlYXNlLCBib3R0b20gMXMgZWFzZTtcblxuICAgICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjV2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoLTV2dyAvIDIpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYyg1dncgLyAyKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygtNXZ3IC8gMik7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKDV2dyAvIDIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnNlY3Rpb24udGVhY2hlcnMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtdHJlZXMtbW92aWwucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDE1MnZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLXRyZWVzLnBuZ1wiKTtcbiAgICBtaW4taGVpZ2h0OiA1NnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtdHJlZXMucG5nXCIpO1xuICAgIG1pbi1oZWlnaHQ6IDU2dnc7XG4gIH1cblxuICAuaGVhZGluZyB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZ3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbGVmdDogMTV2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgYm90dG9tOiAxNnZ3O1xuICAgICAgbGVmdDogNnZ3O1xuICAgICAgdG9wOiB1bnNldDtcbiAgICAgIHdpZHRoOiAyNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBib3R0b206IDE2dnc7XG4gICAgICBsZWZ0OiA2dnc7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgICAgd2lkdGg6IDI1dnc7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiA4dnc7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDMuM3Z3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDMuM3Z3O1xuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiA0LjV2dztcbiAgICAgIG1hcmdpbjogMS41dncgMDtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIG1hcmdpbjogMXZ3IDA7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIG1hcmdpbjogMXZ3IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnNlY3Rpb24ubmV4dC1hY3Rpdml0aWVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDEwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogNnZ3IDh2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogNnZ3IDh2dztcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpdml0aWVzLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDV2dztcblxuICAgIC5hY3Rpdml0eSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDh2dztcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIHBhZGRpbmc6IDAgM3Z3O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBwYWRkaW5nOiAwIDN2dztcbiAgICAgIH1cblxuICAgICAgLndoaXRlLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8vIFVuY29tbWVudCB3aGVuIHRoZSBhY3Rpdml0eSBwbGFjZSBuZWVkIHRvIGJlIHNob3duXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgcGFkZGluZzogMnZ3IDR2dztcbiAgICAgICAgbWFyZ2luOiAydncgMCA0dnc7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICBwYWRkaW5nOiAwLjV2dyAxdnc7XG4gICAgICAgICAgbWFyZ2luOiAwLjV2dyAwIDF2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICBwYWRkaW5nOiAwLjV2dyAxdnc7XG4gICAgICAgICAgbWFyZ2luOiAwLjV2dyAwIDF2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLy8gVW5jb21tZW50IHdoZW4gdGhlIGFjdGl2aXR5IHBsYWNlIG5lZWQgdG8gYmUgc2hvd25cbiAgICAgICAgICAvKlxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICBwYWRkaW5nOiAwIDR2dztcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMnZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMnZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45dnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc2VjdGlvbi5vdGhlci1zY2hvb2xzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBwYWRkaW5nOiAxMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogNnZ3IDh2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogNnZ3IDh2dztcbiAgfVxuXG4gIC5vdGhlci1zY2hvb2xzLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDV2dztcblxuICAgIC5zY2hvb2wge1xuICAgICAgcGFkZGluZzogMCAydnc7XG5cbiAgICAgIC5zY2hvb2wtbmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDV2dztcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAydnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJ2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICBvd2wtY2Fyb3VzZWwge1xuICAgICYuYWN0aXZpdGllcy1jYXJvdXNlbCB7XG4gICAgICAub3dsLW5hdiB7XG4gICAgICAgIHRvcDogNDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLm93bC1wcmV2LFxuICAgICAgICAub3dsLW5leHQge1xuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm93bC1wcmV2IHtcbiAgICAgICAgICBsZWZ0OiAtOHZ3ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIGxlZnQ6IC0zdncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgICAgbGVmdDogLTN2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtbmV4dCB7XG4gICAgICAgICAgcmlnaHQ6IC04N3Z3ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtODZ2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICByaWdodDogLTg2dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm90aGVyLXNjaG9vbHMtY2Fyb3VzZWwge1xuICAgICAgLm93bC1uYXYge1xuICAgICAgICB0b3A6IDQwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5vd2wtcHJldiB7XG4gICAgICAgICAgbGVmdDogLTh2dyAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICAgICAgbGVmdDogLTN2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vd2wtbmV4dCB7XG4gICAgICAgICAgcmlnaHQ6IC04OHZ3ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgICByaWdodDogLTgwdncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvd2wtY2Fyb3VzZWwtbyB7XG4gICAgJi50ZWFjaGVycy1jYXJvdXNlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDIwdnc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IDEydnc7XG4gICAgICB3aWR0aDogMTMwJTtcblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgIGJvdHRvbTogMTB2dztcbiAgICAgICAgbGVmdDogMzV2dztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgYm90dG9tOiAxMHZ3O1xuICAgICAgICBsZWZ0OiAzNXZ3O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuXG4gICAgICB3ZWItdGVzdGltb25pYWwtY2FyZCB7XG4gICAgICAgIC50ZXN0aW1vbmlhbC1jYXJkIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5vd2wtbmF2IHtcbiAgICAgICAgdG9wOiAtMzUlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgdG9wOiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgICBsZWZ0OiAtMzclICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIHRvcDogODAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbGVmdDogLTM3JSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm93bC1wcmV2LFxuICAgICAgICAub3dsLW5leHQge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3dsLXByZXYge1xuICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAub3dsLW5leHQge1xuICAgICAgICAgIHJpZ2h0OiAtMjB2dyAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICByaWdodDogLTh2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgICByaWdodDogLTh2dyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnc2Nzcy9yZXNwb25zaXZlJztcbkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA5LjV2dztcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA4dnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBBbmltYXRpb25zXG4uZ3Jvd3RoLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGhlaWdodCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1ib3R0b20tYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgYm90dG9tICFpbXBvcnRhbnQ7XG4gICAgJi5hbmltYXRpb24taW5pdCB7XG4gICAgICBib3R0b206IC0xMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGUtcmlnaHQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IDJzIGVhc2UgcmlnaHQsIDJzIGVhc2UgbGVmdCAhaW1wb3J0YW50O1xuICAgICYuYW5pbWF0aW9uLWluaXQge1xuICAgICAgcmlnaHQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgbGVmdDogMTAwdncgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLWxlZnQtYW5pbWF0aW9uIHtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIGxlZnQsIDJzIGVhc2UgcmlnaHQgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIGxlZnQ6IC0xMDB2dyAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5mYWRlLWluLWFuaW1hdGlvbiB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlIG9wYWNpdHkgIWltcG9ydGFudDtcbiAgICAmLmFuaW1hdGlvbi1pbml0IHtcbiAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5hbmltYXRpb24tZmluaXNoIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "Df1L":
/*!***************************************************************************!*\
  !*** ./src/app/web/pages/school/school-detail/school-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: SchoolDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDetailComponent", function() { return SchoolDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_school_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./school-detail.component.html */ "4zW6");
/* harmony import */ var _school_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./school-detail.component.scss */ "83bL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_web_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/web/school.service */ "Nq1u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_web_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/web/chart.service */ "RUPo");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/web/api-web-content.service */ "nWHY");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/store */ "e1JD");
/* harmony import */ var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/store/actions/web/web.actions */ "LMpb");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "SrVf");
















let SchoolDetailComponent = class SchoolDetailComponent {
    constructor(router, route, globalService, staticSchoolService, chartService, zone, store, http) {
        this.router = router;
        this.route = route;
        this.globalService = globalService;
        this.staticSchoolService = staticSchoolService;
        this.chartService = chartService;
        this.zone = zone;
        this.store = store;
        this.http = http;
        this.instagramIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faInstagram"];
        this.twitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faTwitter"];
        this.facebookIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faFacebook"];
        this.landscape = window.innerWidth > window.innerHeight;
        this.ACTIVITIES = {
            WITH_TEACHERS: 'withTeachers',
            SPECIALS: 'specials',
        };
        this.selectedActivitiesType = this.ACTIVITIES.SPECIALS;
        this.activeActivityIndex = 0;
        this.chartSwitcherOptions = {
            direction: 'column',
            buttonsDescription: 'Medimos el impacto de la aplicación de la Herramienta Educativa en cada escuela',
            charts: [],
        };
        this.carouselOptions = {
            autoplay: false,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: ['', ''],
            navSpeed: 1000,
        };
        this.schoolImagesOptions = Object.assign(Object.assign({}, this.carouselOptions), { responsive: {
                0: {
                    items: 1,
                },
            } });
        this.activitiesIndexOptions = Object.assign(Object.assign({}, this.carouselOptions), { loop: false, responsive: {
                0: {
                    items: 1,
                },
                [768]: {
                    items: 3,
                },
            } });
        this.activityImagesOptions = Object.assign(Object.assign({}, this.carouselOptions), { center: true, loop: true, nav: false, 
            //autoWidth:true,
            responsive: {
                0: {
                    items: 3,
                },
                [768]: {
                    items: 5,
                },
            } });
        this.teachersOptions = Object.assign(Object.assign({}, this.carouselOptions), { responsive: {
                0: {
                    items: 2,
                },
                [768 * 1.3]: {
                    items: 3,
                },
            } });
        this.activitiesOptions = Object.assign(Object.assign({}, this.carouselOptions), { loop: false, responsive: {
                0: {
                    items: this.landscape ? 3 : 1,
                },
                [768]: {
                    items: 3,
                },
                [1024]: {
                    items: 4,
                },
            } });
        this.otherSchoolsOptions = Object.assign(Object.assign({}, this.carouselOptions), { loop: false, mouseDrag: false, touchDrag: false, nav: false, responsive: {
                0: {
                    nav: !this.landscape,
                    items: this.landscape ? 3 : 1,
                },
                [768]: {
                    items: 3,
                },
            } });
        this.school = {
            name: '',
            sponsor: '',
            direction: '',
            staff: '',
            coordinator: '',
            enrollment: '',
            images: [],
            mathOlympics: {
                enrolled: 0,
                classified: 0,
                goldMedal: 0,
                silverMedal: 0,
                bronzeMedal: 0,
            },
            activities: {
                [this.ACTIVITIES.WITH_TEACHERS]: [],
                [this.ACTIVITIES.SPECIALS]: [],
            },
            activitiesSlider: [],
            testimonials: [],
            nextActivities: [],
            otherSchools: [],
            charts: [],
        };
        this.SCHOOLS_PATH = 'schoolspage';
        this.activeChartIndex = 0;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en-US');
    }
    ngOnInit() {
        this.isBrowser = this.globalService.isBrowser;
        this.route.paramMap.subscribe((params) => {
            this.slug = params.get('schoolSlug');
            if (this.school && this.school.charts)
                this.school.charts = [];
            this.setApiService(params.get('schoolSlug'));
            this.getSchoolDetail();
        });
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.renavigateToTop();
                this.reinitCarousels();
                this.chartSwitcher.switchChart(1);
            }
        });
    }
    ngAfterViewInit() {
        this.scrollToPage();
        this.subscribeScrollEvent();
    }
    ngOnDestroy() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
    getSchoolDetail() {
        this.schoolService.getWebContent().subscribe((data) => {
            this.school = {
                name: data.name,
                sponsor: data.sponsor,
                direction: data.address,
                staff: (data.nTeachers ? data.nTeachers : 0) + (data.nAdministrativeStaff ? data.nAdministrativeStaff : 0) + (data.nLaborStaff ? data.nLaborStaff : 0),
                coordinator: data.coordinator,
                enrollment: data.nStudents,
                images: /* data.slider */ null,
                mathOlympics: {
                    enrolled: data.olympicsSummary.inscribed,
                    classified: data.olympicsSummary.classified,
                    goldMedal: data.olympicsSummary.medalsGold,
                    silverMedal: data.olympicsSummary.medalsSilver,
                    bronzeMedal: data.olympicsSummary.medalsBronze,
                },
                activities: {
                    [this.ACTIVITIES.WITH_TEACHERS]: [],
                    [this.ACTIVITIES.SPECIALS]: data.activities,
                },
                activitiesSlider: data.activitiesSlider,
                testimonials: data.teachersTestimonials.testimonials.map((testimonial) => {
                    testimonial.function = testimonial.position;
                    return testimonial;
                }),
                nextActivities: data.nextActivities.reduce((activities, activity) => {
                    const [now, actDate] = [new Date(), new Date(activity.date)].map((date_) => date_.toISOString().toLowerCase().split('t')[0]);
                    const canPush = new Date(actDate) >= new Date(now);
                    if (canPush) {
                        const theActivity = Object.assign(Object.assign({}, activity), { title: activity.name, date: this.pipe.transform(Date.parse(activity.date), 'd/M/y') });
                        activities.push(theActivity);
                    }
                    return activities;
                }, []),
                otherSchools: data.nearbySchools.map((school) => {
                    school.image = school.image ? school.image : './assets/images/profile2.png';
                    return school;
                }),
                facebook: data.facebook,
                twitter: data.twitter,
                instagram: data.instagram,
            };
            // console.log('school', data);
            this.staticSchoolService.getChartsTemplateJSON().subscribe((charts) => {
                this.school.charts = charts.map((chart) => {
                    chart.data = data.diagnostics[chart.id];
                    return chart;
                });
                this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(this.school.charts);
            });
            setTimeout(() => {
                this.school.images = data.slider;
            });
            this.reinitCarousels();
            this.chartSwitcher && this.chartSwitcher.switchChart(0);
            this.setActiveChart(0);
            this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__["SetIsLoadingPage"](false)]);
        });
    }
    scrollToPage() {
        const schoolTopPos = this.schoolSection.nativeElement.offsetTop;
        window.scrollTo(0, schoolTopPos);
    }
    renavigateToTop() {
        this.symbols.nativeElement.classList.remove('animation-finish');
        this.chartTestimonial.nativeElement.classList.remove('animation-finish');
        this.symbols.nativeElement.classList.add('animation-init');
        this.chartTestimonial.nativeElement.classList.add('animation-init');
        this.scrollToPage();
        if (this.isBrowser) {
            setTimeout(() => {
                this.subscribeScrollEvent();
            }, 2100);
        }
    }
    subscribeScrollEvent() {
        this.zone.runOutsideAngular(() => {
            this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(window, 'scroll').subscribe((event) => {
                this.onScroll(event);
            });
        });
    }
    onScroll($event) {
        let scrollPosition = $event.srcElement.children[0].scrollTop + window.innerHeight;
        let symbolsPosition = this.symbols.nativeElement.offsetTop;
        let chartsPosition = this.charts.nativeElement.offsetTop;
        if (symbolsPosition / scrollPosition <= 1) {
            this.symbols.nativeElement.classList.add('animation-finish');
            this.symbols.nativeElement.classList.remove('animation-init');
        }
        if (chartsPosition / scrollPosition <= 0.8) {
            if (this.scrollSubscription) {
                if (this.chartTestimonial)
                    this.scrollSubscription.unsubscribe();
            }
            if (this.chartTestimonial) {
                this.chartTestimonial.nativeElement.classList.add('animation-finish');
                this.chartTestimonial.nativeElement.classList.remove('animation-init');
            }
        }
    }
    setActiveChart(index) {
        this.activeChartIndex = index;
    }
    setActivitiesType(type) {
        if (this.selectedActivitiesType !== type) {
            this.selectedActivitiesType = type;
            this.setActiveActivity(0);
            this.activitiesIndexCarousel.reInit();
        }
    }
    setActiveActivity(index) {
        try {
            this.activeActivityIndex = index;
            //this.activityImageCarousel.reInit();
        }
        catch (error) {
            console.error(error);
        }
    }
    setApiService(slug) {
        const service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_8__["ApiWebContentService"](this.http);
        service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl);
        service.setResourcePath(`${this.SCHOOLS_PATH}/${slug}`);
        this.schoolService = service;
    }
    onResize() {
        this.landscape = window.innerWidth > window.innerHeight;
        if (this.landscape) {
            if (this.activitiesIndexCarousel)
                this.activitiesIndexCarousel.options.responsive[0].items = 5;
            if (this.activityImageCarousel)
                this.activityImageCarousel.options.responsive[0].items = 5;
            if (this.activitiesCarousel)
                this.activitiesCarousel.options.responsive[0].items = 3;
            if (this.otherSchoolsCarousel)
                this.otherSchoolsCarousel.options.responsive[0].items = 3;
            this.refreshCarousels();
        }
        else {
            if (this.activitiesIndexCarousel)
                this.activitiesIndexCarousel.options.responsive[0].items = 2;
            if (this.activityImageCarousel)
                this.activityImageCarousel.options.responsive[0].items = 3;
            if (this.activitiesCarousel)
                this.activitiesCarousel.options.responsive[0].items = 1;
            if (this.otherSchoolsCarousel)
                this.otherSchoolsCarousel.options.responsive[0].items = 1;
            this.refreshCarousels();
        }
    }
    reinitCarousels() {
        if (this.activitiesIndexCarousel)
            this.activitiesIndexCarousel.reInit();
        if (this.activityImageCarousel)
            this.activityImageCarousel.reInit();
        if (this.activitiesCarousel)
            this.activitiesCarousel.reInit();
        if (this.otherSchoolsCarousel)
            this.otherSchoolsCarousel.reInit();
    }
    refreshCarousels() {
        if (this.activitiesIndexCarousel)
            this.activitiesIndexCarousel.refresh();
        if (this.activityImageCarousel)
            this.activityImageCarousel.refresh();
        if (this.activitiesCarousel)
            this.activitiesCarousel.refresh();
        if (this.otherSchoolsCarousel)
            this.otherSchoolsCarousel.refresh();
    }
};
SchoolDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: src_app_services_web_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolService"] },
    { type: src_app_services_web_chart_service__WEBPACK_IMPORTED_MODULE_6__["ChartService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["Store"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
];
SchoolDetailComponent.propDecorators = {
    schoolSection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['schoolDetails', { static: false },] }],
    symbols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['symbols', { static: true },] }],
    activitiesIndexCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['activitiesIndexCarousel', { static: true },] }],
    activityImageCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['activityImageCarousel', { static: false },] }],
    activitiesCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['activitiesCarousel', { static: true },] }],
    otherSchoolsCarousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['otherSchoolsCarousel', { static: true },] }],
    charts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['charts', { static: false },] }],
    chartTestimonial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['chartTestimonial', { static: false },] }],
    chartSwitcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['chartSwitcher', { static: false },] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', [''],] }]
};
SchoolDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-school-detail',
        template: _raw_loader_school_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_school_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SchoolDetailComponent);



/***/ }),

/***/ "Nq1u":
/*!************************************************!*\
  !*** ./src/app/services/web/school.service.ts ***!
  \************************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



const diagnosticText = {
    lecture: 'Medimos cada trimestre el número de palabras leídas por minuto (PPM). La gráfica muestra el porcentaje alcanzado de PPM frente a la meta del grado que sería el 100 %.',
    math: 'Medimos cada trimestre la cantidad de multiplicaciones de una cifra resueltas de forma correcta en 2 minutos (M2M). La gráfica muestra el porcentaje alcanzado de M2M frente a la meta del grado que sería el 100 %.',
    logicMath: 'Medimos cada trimestre la cantidad de problemas de razonamiento lógico-matemático, adecuados a cada nivel, resueltos de forma correcta en 60 minutos (60LM). La gráfica muestra el porcentaje alcanzado de 60LM frente a la meta del grado que sería el 100 %.',
};
const charts = [
    {
        title: 'Diagnóstico de Lectura',
        id: 'wordsPerMinIndex',
        description: diagnosticText.lecture,
        type: 'bar',
        data: [],
        goals: [{ label: 'Valor esperado', value: 100 }],
        testimonial: {
            firstName: 'Óscar A.',
            lastName: 'Pietri P.',
            image: './assets/images/profile-oscar.jpg',
            function: 'Presidente y Co-Fundador',
            description: '¿Tienen lectura fluida? Primer paso para facilitar la compresión lectora. Hacemos el diagnóstico del número de palabras leídas por minuto y presentamos el promedio del curso, obteniendo el índice con base a la meta de cada nivel, según estándares internacionales.',
        },
    },
    {
        title: 'Diagnóstico de Multiplicación',
        id: 'multiplicationsPerMinIndex',
        description: diagnosticText.math,
        type: 'bar',
        data: [],
        goals: [{ label: 'Valor esperado', value: 100 }],
        testimonial: {
            firstName: 'Tomás J.',
            lastName: 'Linares B.',
            image: './assets/images/profile-tomas.jpg',
            function: 'Vice-Presidente y Co-Fundador',
            description: '¿Cuántas multiplicaciones de una cifra responden correctamente en dos minutos? ¿La meta?: 30 en esos 2 minutos. Dominar las operaciones básicas ayudan a tener mayor agilidad y facilidad para afrontar problemas de razonamiento y lógica. Con la práctica diaria y  juegos creativos de sus docentes se puede lograr el objetivo.',
        },
    },
    {
        title: 'Diagnóstico de Razonamiento Lógico - Matemático',
        id: 'operationsPerMinIndex',
        description: diagnosticText.logicMath,
        type: 'bar',
        data: [],
        goals: [{ label: 'Valor esperado', value: 100 }],
        testimonial: {
            firstName: 'Óscar A.',
            lastName: 'Pietri P.',
            image: './assets/images/profile-oscar.jpg',
            function: 'Presidente y Co-Fundador',
            description: 'Es todo un reto lograr resolver correctamente problemas de razonamiento lógico-matemáticas en 60 minutos. ¿Cuántos de esos problemas, adecuados a sus edades, pueden resolver los niños? La meta es llegar al menos a 15. Con el apoyo de sus docentes lo podrán lograr.',
        },
    },
];
const schoolsList = {
    schools: [
        {
            lat: 8.60123,
            lng: -67.831185,
            name: 'U.E.E Santo Ángel',
            slug: '001 Escuela_Santa_Maria',
            sponsor: 'Proter & Gamble',
            direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
            staff: 'Información del personal docente, obrero y administrativo',
            coordinator: 'Información del coordinador general',
            enrollment: 'Matrícula estudiantil',
            images: [
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
            ],
            charts: [
                {
                    title: 'Diagnóstico de Lectura',
                    description: diagnosticText.lecture,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.8 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 1 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.8 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.6 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.4 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.6 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.5 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.4 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 1 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.6 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.6 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 1 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Multiplicación',
                    description: diagnosticText.math,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.3 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.3 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.2 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.35 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.5 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 0.25 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
                    description: diagnosticText.logicMath,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso 1', value: 0.2 },
                        { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
                        { label: '2015-2016', serie: 'Lapso 3', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 1', value: 0.3 },
                        { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
                        { label: '2016-2017', serie: 'Lapso 3', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
                        { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
                        { label: '2017-2018', serie: 'Lapso 3', value: 0.35 },
                        { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
                        { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
                        { label: '2018-2019', serie: 'Lapso 3', value: 0.25 },
                        { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
                        { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
                        { label: '2019-2020', serie: 'Lapso 3', value: 0.5 },
                    ],
                    goals: [{ label: 'Valor esperado', value: 100 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
            ],
            mathOlympics: {
                enrolled: 145,
                classified: 30,
                goldMedal: 10,
                silverMedal: 15,
                bronzeMedal: 5,
            },
            activities: {
                withTeachers: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
                specials: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 6',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
            },
            testimonials: [
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Matemática',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Lectura',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Ambiente',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            nextActivities: [
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            otherSchools: [
                {
                    name: 'U.E.E Arturo Michelena',
                    slug: 'escuela-arturo-michelena',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'U.E.E Los próceres',
                    slug: 'escuela-los-proceres',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'E.P.B Francisco Tovar',
                    slug: 'escuela-francisco-tovar',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
            ],
        },
        {
            lat: 9.20123,
            lng: -70.21063,
            name: 'U.E.E Arturo Michelena',
            slug: 'escuela-arturo-michelena',
            sponsor: 'Proter & Gamble',
            direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
            staff: 'Información del personal docente, obrero y administrativo',
            coordinator: 'Información del coordinador general',
            enrollment: 'Matrícula estudiantil',
            images: [
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
            ],
            charts: [
                {
                    title: 'Diagnóstico de Lectura',
                    description: diagnosticText.lecture,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 40 },
                        { label: '2015-2016', serie: 'Lapso2', value: 10 },
                        { label: '2015-2016', serie: 'Lapso3', value: 20 },
                        { label: '2016-2017', serie: 'Lapso1', value: 40 },
                        { label: '2016-2017', serie: 'Lapso2', value: 30 },
                        { label: '2016-2017', serie: 'Lapso3', value: 20 },
                        { label: '2017-2018', serie: 'Lapso1', value: 30 },
                        { label: '2017-2018', serie: 'Lapso2', value: 50 },
                        { label: '2017-2018', serie: 'Lapso3', value: 20 },
                        { label: '2018-2019', serie: 'Lapso1', value: 40 },
                        { label: '2018-2019', serie: 'Lapso2', value: 10 },
                        { label: '2018-2019', serie: 'Lapso3', value: 20 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 30 },
                        { label: '2019-2020', serie: 'Lapso3', value: 10 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Multiplicación',
                    description: diagnosticText.math,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
                        { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
                        { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
                    ],
                    goals: [{ label: 'Valor esperado: 160', value: 160 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
                    description: diagnosticText.logicMath,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 30 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 },
                        { label: '2015-2016', serie: 'Lapso3', value: 30 },
                        { label: '2016-2017', serie: 'Lapso1', value: 20 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 },
                        { label: '2016-2017', serie: 'Lapso3', value: 35 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 },
                        { label: '2017-2018', serie: 'Lapso3', value: 50 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 },
                        { label: '2018-2019', serie: 'Lapso3', value: 40 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 },
                        { label: '2019-2020', serie: 'Lapso3', value: 25 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
            ],
            mathOlympics: {
                enrolled: 145,
                classified: 30,
                goldMedal: 10,
                silverMedal: 15,
                bronzeMedal: 5,
            },
            activities: {
                withTeachers: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
                specials: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 6',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
            },
            testimonials: [
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Matemática',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Lectura',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Ambiente',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            nextActivities: [
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            otherSchools: [
                {
                    name: 'U.E.E Arturo Michelena',
                    slug: 'escuela-arturo-michelena',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'U.E.E Los próceres',
                    slug: 'escuela-los-proceres',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'E.P.B Francisco Tovar',
                    slug: 'escuela-francisco-tovar',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
            ],
        },
        {
            lat: 9.76432,
            lng: -69.831185,
            name: 'U.E.E Los próceres',
            slug: 'escuela-los-proceres',
            sponsor: 'Proter & Gamble',
            direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
            staff: 'Información del personal docente, obrero y administrativo',
            coordinator: 'Información del coordinador general',
            enrollment: 'Matrícula estudiantil',
            images: [
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
            ],
            charts: [
                {
                    title: 'Diagnóstico de Lectura',
                    description: diagnosticText.lecture,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 40 },
                        { label: '2015-2016', serie: 'Lapso2', value: 10 },
                        { label: '2015-2016', serie: 'Lapso3', value: 20 },
                        { label: '2016-2017', serie: 'Lapso1', value: 40 },
                        { label: '2016-2017', serie: 'Lapso2', value: 30 },
                        { label: '2016-2017', serie: 'Lapso3', value: 20 },
                        { label: '2017-2018', serie: 'Lapso1', value: 30 },
                        { label: '2017-2018', serie: 'Lapso2', value: 50 },
                        { label: '2017-2018', serie: 'Lapso3', value: 20 },
                        { label: '2018-2019', serie: 'Lapso1', value: 40 },
                        { label: '2018-2019', serie: 'Lapso2', value: 10 },
                        { label: '2018-2019', serie: 'Lapso3', value: 20 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 30 },
                        { label: '2019-2020', serie: 'Lapso3', value: 10 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Multiplicación',
                    description: diagnosticText.math,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
                        { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
                        { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
                    ],
                    goals: [{ label: 'Valor esperado: 160', value: 160 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
                    description: diagnosticText.logicMath,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 30 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 },
                        { label: '2015-2016', serie: 'Lapso3', value: 30 },
                        { label: '2016-2017', serie: 'Lapso1', value: 20 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 },
                        { label: '2016-2017', serie: 'Lapso3', value: 35 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 },
                        { label: '2017-2018', serie: 'Lapso3', value: 50 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 },
                        { label: '2018-2019', serie: 'Lapso3', value: 40 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 },
                        { label: '2019-2020', serie: 'Lapso3', value: 25 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
            ],
            mathOlympics: {
                enrolled: 145,
                classified: 30,
                goldMedal: 10,
                silverMedal: 15,
                bronzeMedal: 5,
            },
            activities: {
                withTeachers: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
                specials: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 6',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
            },
            testimonials: [
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Matemática',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Lectura',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Ambiente',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            nextActivities: [
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            otherSchools: [
                {
                    name: 'U.E.E Arturo Michelena',
                    slug: 'escuela-arturo-michelena',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'U.E.E Los próceres',
                    slug: 'escuela-los-proceres',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'E.P.B Francisco Tovar',
                    slug: 'escuela-francisco-tovar',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
            ],
        },
        {
            lat: 9.23953,
            lng: -71.032155,
            name: 'E.P.B Francisco Tovar',
            slug: 'escuela-francisco-tovar',
            sponsor: 'Proter & Gamble',
            direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
            staff: 'Información del personal docente, obrero y administrativo',
            coordinator: 'Información del coordinador general',
            enrollment: 'Matrícula estudiantil',
            images: [
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
                './assets/images/banner-1.jpg',
                './assets/images/banner-2.jpg',
            ],
            charts: [
                {
                    title: 'Diagnóstico de Lectura',
                    description: diagnosticText.lecture,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 40 },
                        { label: '2015-2016', serie: 'Lapso2', value: 10 },
                        { label: '2015-2016', serie: 'Lapso3', value: 20 },
                        { label: '2016-2017', serie: 'Lapso1', value: 40 },
                        { label: '2016-2017', serie: 'Lapso2', value: 30 },
                        { label: '2016-2017', serie: 'Lapso3', value: 20 },
                        { label: '2017-2018', serie: 'Lapso1', value: 30 },
                        { label: '2017-2018', serie: 'Lapso2', value: 50 },
                        { label: '2017-2018', serie: 'Lapso3', value: 20 },
                        { label: '2018-2019', serie: 'Lapso1', value: 40 },
                        { label: '2018-2019', serie: 'Lapso2', value: 10 },
                        { label: '2018-2019', serie: 'Lapso3', value: 20 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 30 },
                        { label: '2019-2020', serie: 'Lapso3', value: 10 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Multiplicación',
                    description: diagnosticText.math,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
                        { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
                        { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
                        { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
                        { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
                    ],
                    goals: [{ label: 'Valor esperado: 160', value: 160 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
                {
                    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
                    description: diagnosticText.logicMath,
                    type: 'bar',
                    data: [
                        { label: '2015-2016', serie: 'Lapso1', value: 30 },
                        { label: '2015-2016', serie: 'Lapso2', value: 15 },
                        { label: '2015-2016', serie: 'Lapso3', value: 30 },
                        { label: '2016-2017', serie: 'Lapso1', value: 20 },
                        { label: '2016-2017', serie: 'Lapso2', value: 40 },
                        { label: '2016-2017', serie: 'Lapso3', value: 35 },
                        { label: '2017-2018', serie: 'Lapso1', value: 25 },
                        { label: '2017-2018', serie: 'Lapso2', value: 30 },
                        { label: '2017-2018', serie: 'Lapso3', value: 50 },
                        { label: '2018-2019', serie: 'Lapso1', value: 30 },
                        { label: '2018-2019', serie: 'Lapso2', value: 20 },
                        { label: '2018-2019', serie: 'Lapso3', value: 40 },
                        { label: '2019-2020', serie: 'Lapso1', value: 30 },
                        { label: '2019-2020', serie: 'Lapso2', value: 40 },
                        { label: '2019-2020', serie: 'Lapso3', value: 25 },
                    ],
                    goals: [{ label: 'Valor esperado: 50', value: 50 }],
                    testimonial: {
                        firstName: 'Oscar A.',
                        lastName: 'Pietri Pacheco',
                        image: './assets/images/profile-oscar.jpg',
                        function: 'Docente de Matemática',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                    },
                },
            ],
            mathOlympics: {
                enrolled: 145,
                classified: 30,
                goldMedal: 10,
                silverMedal: 15,
                bronzeMedal: 5,
            },
            activities: {
                withTeachers: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
                specials: [
                    {
                        name: 'Actividad 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/background-pillar-lectura.jpg',
                            './assets/images/background-pillar-ambiente.jpg',
                            './assets/images/background-pillar-matematica.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                    {
                        name: 'Actividad 6',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
                        images: [
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                            './assets/images/banner-1.jpg',
                            './assets/images/banner-2.jpg',
                        ],
                    },
                ],
            },
            testimonials: [
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Matemática',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Lectura',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    firstName: 'Oscar A.',
                    lastName: 'Pietri Pacheco',
                    image: './assets/images/profile-oscar.jpg',
                    function: 'Docente de Ambiente',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            nextActivities: [
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
                {
                    title: 'Título de la actividad',
                    date: '20/03/2020',
                    place: 'Barquisimeto',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
                },
            ],
            otherSchools: [
                {
                    name: 'U.E.E Arturo Michelena',
                    slug: 'escuela-arturo-michelena',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'U.E.E Los próceres',
                    slug: 'escuela-los-proceres',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
                {
                    name: 'E.P.B Francisco Tovar',
                    slug: 'escuela-francisco-tovar',
                    image: './assets/images/background-pillar-ambiente.jpg',
                },
            ],
        },
    ],
};
let SchoolService = class SchoolService {
    constructor() { }
    getSchoolsJSON() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(schoolsList);
    }
    getSchoolBySlugJSON(slug) {
        let school;
        school = schoolsList.schools.filter((item) => item.slug === slug)[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(school);
    }
    getChartsTemplateJSON() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(charts);
    }
};
SchoolService.ctorParameters = () => [];
SchoolService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SchoolService);



/***/ }),

/***/ "f0pY":
/*!************************************************************************!*\
  !*** ./src/app/web/pages/school/school-detail/school-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: SchoolDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDetailModule", function() { return SchoolDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _school_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-detail-routing.module */ "wc80");
/* harmony import */ var _school_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-detail.component */ "Df1L");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "KMir");
/* harmony import */ var src_app_web_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/web/shared/shared.module */ "vYfc");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "bjCr");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_web_shared_charts_switcher_charts_switcher_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/web/shared/charts-switcher/charts-switcher.module */ "w52O");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");




//Components






let SchoolDetailModule = class SchoolDetailModule {
};
SchoolDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_school_detail_component__WEBPACK_IMPORTED_MODULE_4__["SchoolDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _school_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["SchoolDetailRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
            src_app_web_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_web_shared_charts_switcher_charts_switcher_module__WEBPACK_IMPORTED_MODULE_8__["ChartsSwitcherModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
        ]
    })
], SchoolDetailModule);



/***/ }),

/***/ "wc80":
/*!********************************************************************************!*\
  !*** ./src/app/web/pages/school/school-detail/school-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SchoolDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDetailRoutingModule", function() { return SchoolDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _school_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-detail.component */ "Df1L");




const routes = [
    {
        path: '',
        component: _school_detail_component__WEBPACK_IMPORTED_MODULE_3__["SchoolDetailComponent"]
    }
];
let SchoolDetailRoutingModule = class SchoolDetailRoutingModule {
};
SchoolDetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SchoolDetailRoutingModule);



/***/ })

}]);
//# sourceMappingURL=school-detail-school-detail-module-es2015.js.map