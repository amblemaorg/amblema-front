(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-blog-module"],{

/***/ "07Kd":
/*!**********************************************!*\
  !*** ./src/app/web/pages/blog/categories.ts ***!
  \**********************************************/
/*! exports provided: BLOG_CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_CATEGORIES", function() { return BLOG_CATEGORIES; });
const BLOG_CATEGORIES = [
    { id: "1", name: "Ambiente" },
    { id: "2", name: "Lectura" },
    { id: "3", name: "Matemática" },
    { id: "4", name: "Otra" },
];


/***/ }),

/***/ "12CM":
/*!*************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/social-sharing/social-sharing.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.social-sharing {\n  background-color: #00809a;\n  color: #fff;\n  font-size: 4.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0% 2.5% 0% 15%;\n  margin-left: -15%;\n  width: 90%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .social-sharing {\n    font-size: 1.8vw;\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .social-sharing {\n    font-size: 1.8vw;\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .social-sharing {\n    font-size: 1.4vw;\n  }\n}\n.social-sharing > span:first-child {\n  flex: 1 0 60%;\n}\n.social-sharing > span:last-child {\n  flex: 1 0 40%;\n}\n.social-sharing .social-buttons {\n  display: flex;\n  justify-content: space-between;\n  font-size: 6vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .social-sharing .social-buttons {\n    font-size: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .social-sharing .social-buttons {\n    font-size: 2vw;\n  }\n}\n.social-sharing .social-buttons fa-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NvY2lhbC1zaGFyaW5nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQVRBO0VBQ0UseUJESks7RUNLTCxXREZNO0VDR04sZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBWUY7QUNnQkk7RURyQ0o7SUFZSSxnQkFBQTtJQUNBLFVBQUE7RUFhRjtBQUNGO0FDVUk7RURyQ0o7SUFpQkksZ0JBQUE7SUFDQSxVQUFBO0VBY0Y7QUFDRjtBQ0lJO0VEckNKO0lBc0JJLGdCQUFBO0VBZUY7QUFDRjtBQWJFO0VBQ0UsYUFBQTtBQWVKO0FBWkU7RUFDRSxhQUFBO0FBY0o7QUFYRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFhSjtBQ1pJO0VESkY7SUFNSSxjQUFBO0VBY0o7QUFDRjtBQ2pCSTtFREpGO0lBVUksY0FBQTtFQWVKO0FBQ0Y7QUFiSTtFQUNFLGVBQUE7QUFlTiIsImZpbGUiOiJzb2NpYWwtc2hhcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4uc29jaWFsLXNoYXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZm9udC1zaXplOiA0LjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwJSAyLjUlIDAlIDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XG4gIHdpZHRoOiA5MCU7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgZm9udC1zaXplOiAxLjR2dztcbiAgfVxuXG4gICYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4OiAxIDAgNjAlO1xuICB9XG5cbiAgJiA+IHNwYW46bGFzdC1jaGlsZCB7XG4gICAgZmxleDogMSAwIDQwJTtcbiAgfVxuXG4gIC5zb2NpYWwtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiA2dnc7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICB9XG5cbiAgICBmYS1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "1pcB":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/blog/blog-post/blog-post.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"blog-post d-flex\">\n  <section class=\"post-detail\">\n    <div>\n      <div class=\"image-wrapper\">\n        <img class=\"post-image\" [src]=\"post.secondaryImage\" />\n        <span class=\"post-date\">\n          {{ post.date | date: \"mediumDate\":\"+0430\":\"es\" }}\n        </span>\n      </div>\n      <div class=\"post\" lang=\"es\">\n        <h1 class=\"post-title\">{{ post.title }}</h1>\n        <p class=\"post-content\" [innerHTML]=\"post.content\"></p>\n      </div>\n    </div>\n    <social-sharing></social-sharing>\n  </section>\n  <aside class=\"sidebar\">\n    <searcher (search)=\"navigateToArchive($event)\"></searcher>\n    <blog-categories-list></blog-categories-list>\n    <recent-posts-list [posts]=\"recentPosts\"></recent-posts-list>\n  </aside>\n</section>");

/***/ }),

/***/ "2S/2":
/*!*******************************************************!*\
  !*** ./src/app/web/pages/blog/blog-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _blog_archive_blog_archive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-archive/blog-archive.component */ "j2zL");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "C4l0");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.component */ "sJZk");






const routes = [
    {
        path: "",
        component: _blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"],
        children: [
            {
                path: "",
                component: _blog_archive_blog_archive_component__WEBPACK_IMPORTED_MODULE_3__["BlogArchiveComponent"],
            },
            {
                path: "post/:postSlug",
                component: _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_4__["BlogPostComponent"],
            },
        ],
    },
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogRoutingModule);



/***/ }),

/***/ "6UNC":
/*!******************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/recent-post-card/recent-posts-list.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.recent-posts {\n  color: #909090;\n}\n.recent-posts .recent-posts-title {\n  color: #555;\n  font-size: 4.5vw;\n  font-weight: bold;\n  margin: 0 0 5% 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .recent-posts .recent-posts-title {\n    font-size: 1.4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .recent-posts .recent-posts-title {\n    font-size: 1.4vw;\n  }\n}\n.recent-posts .recent-posts-list {\n  padding: 0;\n}\n.recent-posts .recent-posts-list .recent-posts-list-item {\n  list-style: none;\n  margin: 0 0 5% 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlY2VudC1wb3N0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQVRBO0VBQ0UsY0RDVTtBQ1daO0FBVkU7RUFDRSxXREhJO0VDSUosZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWUo7QUNrQkk7RURsQ0Y7SUFPSSxnQkFBQTtFQWFKO0FBQ0Y7QUNhSTtFRGxDRjtJQVdJLGdCQUFBO0VBY0o7QUFDRjtBQVhFO0VBQ0UsVUFBQTtBQWFKO0FBWEk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWFOIiwiZmlsZSI6InJlY2VudC1wb3N0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwMDgwOWE7XG4kZ3JlZW46ICM4MWIwM2U7XG4kZGFyay1ncmVlbjogIzAwNzIyZTtcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzU1NTtcbiRkYXJrLWdyYXk6ICM5MDkwOTA7XG4kcmVkOiAjZjM1ZjVmO1xuJGNhbmNlbC1ncmF5OiAjOWZhOWJkO1xuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG5cbi5wcmltYXJ5LWNvbG9yIHtcbiAgY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcInNjc3MvcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcInNjc3MvdmFyaWFibGVzXCI7XG5cbi5yZWNlbnQtcG9zdHMge1xuICBjb2xvcjogJGRhcmstZ3JheTtcblxuICAucmVjZW50LXBvc3RzLXRpdGxlIHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIDAgNSUgMDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB9XG4gIH1cblxuICAucmVjZW50LXBvc3RzLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAucmVjZW50LXBvc3RzLWxpc3QtaXRlbSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwIDAgNSUgMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "BAKs":
/*!************************************!*\
  !*** ./src/assets/js/clamp.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
(function(){window.$clamp=function(c,d){function s(a,b){n.getComputedStyle||(n.getComputedStyle=function(a,b){this.el=a;this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;"float"==b&&(b="styleFloat");c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()}));return a.currentStyle&&a.currentStyle[b]?a.currentStyle[b]:null};return this});return n.getComputedStyle(a,null).getPropertyValue(b)}function t(a){a=a||c.clientHeight;var b=u(c);return Math.max(Math.floor(a/b),0)}function x(a){return u(c)*
a}function u(a){var b=s(a,"line-height");"normal"==b&&(b=1.2*parseInt(s(a,"font-size")));return parseInt(b)}function l(a){if(a.lastChild.children&&0<a.lastChild.children.length)return l(Array.prototype.slice.call(a.children).pop());if(a.lastChild&&a.lastChild.nodeValue&&""!=a.lastChild.nodeValue&&a.lastChild.nodeValue!=b.truncationChar)return a.lastChild;a.lastChild.parentNode.removeChild(a.lastChild);return l(c)}function p(a,d){if(d){var e=a.nodeValue.replace(b.truncationChar,"");f||(h=0<k.length?
k.shift():"",f=e.split(h));1<f.length?(q=f.pop(),r(a,f.join(h))):f=null;m&&(a.nodeValue=a.nodeValue.replace(b.truncationChar,""),c.innerHTML=a.nodeValue+" "+m.innerHTML+b.truncationChar);if(f){if(c.clientHeight<=d)if(0<=k.length&&""!=h)r(a,f.join(h)+h+q),f=null;else return c.innerHTML}else""==h&&(r(a,""),a=l(c),k=b.splitOnChars.slice(0),h=k[0],q=f=null);if(b.animate)setTimeout(function(){p(a,d)},!0===b.animate?10:b.animate);else return p(a,d)}}function r(a,c){a.nodeValue=c+b.truncationChar}d=d||{};
var n=window,b={clamp:d.clamp||2,useNativeClamp:"undefined"!=typeof d.useNativeClamp?d.useNativeClamp:!0,splitOnChars:d.splitOnChars||[".","-","\u2013","\u2014"," "],animate:d.animate||!1,truncationChar:d.truncationChar||"\u2026",truncationHTML:d.truncationHTML},e=c.style,y=c.innerHTML,z="undefined"!=typeof c.style.webkitLineClamp,g=b.clamp,v=g.indexOf&&(-1<g.indexOf("px")||-1<g.indexOf("em")),m;b.truncationHTML&&(m=document.createElement("span"),m.innerHTML=b.truncationHTML);var k=b.splitOnChars.slice(0),
h=k[0],f,q;"auto"==g?g=t():v&&(g=t(parseInt(g)));var w;z&&b.useNativeClamp?(e.overflow="hidden",e.textOverflow="ellipsis",e.webkitBoxOrient="vertical",e.display="-webkit-box",e.webkitLineClamp=g,v&&(e.height=b.clamp+"px")):(e=x(g),e<=c.clientHeight&&(w=p(l(c),e)));return{original:y,clamped:w}}})();

/***/ }),

/***/ "C4l0":
/*!*****************************************************************!*\
  !*** ./src/app/web/pages/blog/blog-post/blog-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-post.component.html */ "1pcB");
/* harmony import */ var _blog_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-post.component.scss */ "SUvg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web/api-web-content.service */ "nWHY");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/web/static-web-content.service */ "TdEa");
/* harmony import */ var _blog_static_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog-static-content */ "Xf10");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/es-VE */ "qRsU");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/store */ "e1JD");
/* harmony import */ var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/store/actions/web/web.actions */ "LMpb");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_11___default.a, "es");
let BlogPostComponent = class BlogPostComponent {
    constructor(route, router, http, titleService, metaService, store) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.titleService = titleService;
        this.metaService = metaService;
        this.store = store;
        this.post = {
            mainImage: "",
            secondaryImage: "",
            slug: "",
            title: "",
            content: "",
            date: "",
            //tags: [],
            status: "",
        };
        this.recentPosts = [];
        this.BLOG_PATH = "webcontent/posts";
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        // this.setStaticService();
        this.setApiService();
        this.route.paramMap.subscribe((params) => {
            this.blogService.getWebContentByParam("id", params.get("postSlug")).subscribe((data) => {
                this.post = this.adaptEndpointResponseToPost(data);
                const metadata = this.convertPostDataToMetaData(this.post);
                this.titleService.setTitle(data.title);
                metadata.map((metatag) => {
                    const attributeSelector = metatag.name
                        ? `name="${metatag.name}"`
                        : `property="${metatag.property}"`;
                    this.metaService.removeTag(attributeSelector);
                    this.metaService.addTag(metatag, false);
                });
            }, (err) => console.error(err), () => {
                this.getRecentPosts();
                this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__["SetIsLoadingPage"](false)]);
            });
        });
    }
    setStaticService() {
        this.blogService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_8__["StaticWebContentService"]();
        this.blogService.setWebContent(_blog_static_content__WEBPACK_IMPORTED_MODULE_9__["BLOG_CONTENT"].records);
    }
    setApiService(query) {
        const queryParams = query ? query : "";
        const service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_5__["ApiWebContentService"](this.http);
        service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl);
        service.setResourcePath(this.BLOG_PATH + queryParams);
        this.blogService = service;
    }
    adaptEndpointResponseToPost(data) {
        return {
            mainImage: data.image,
            secondaryImage: data.image2,
            slug: data.id,
            title: data.title,
            content: data.text,
            date: data.createdAt,
            //tags: record.tag,
            status: data.status,
        };
    }
    convertPostDataToMetaData(post) {
        return [
            {
                name: "title",
                content: post.title,
            },
            {
                property: "og:title",
                content: post.title,
            },
            {
                name: "description",
                content: post.content.slice(0, 140),
            },
            {
                property: "og:description",
                content: post.content.slice(0, 140),
            },
            {
                property: "og:image",
                content: post.mainImage,
            },
            {
                property: "og:url",
                content: window.location.href,
            },
            {
                property: "og:site_name",
                content: "Fundación AmbLeMa",
            },
            {
                name: "twitter:card",
                content: "summary",
            },
            {
                name: "twitter:image:alt",
                content: "Texto alternativo de la imagen de la entrada del blog AmbLeMa",
            },
        ];
    }
    navigateToArchive(params) {
        this.router.navigate(["/blog", { title: params }]);
    }
    getRecentPosts() {
        this.setApiService("/page/1?page_size=4");
        this.blogService.getWebContent().subscribe((data) => {
            this.recentPosts = data.records.map((record) => {
                return this.adaptEndpointResponseToPost(record);
            });
            this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_14__["SetIsLoadingPage"](false)]);
        });
    }
};
BlogPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Meta"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["Store"] }
];
BlogPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-blog-post",
        template: _raw_loader_blog_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogPostComponent);



/***/ }),

/***/ "CRie":
/*!***********************************************!*\
  !*** ./src/app/web/pages/blog/blog.module.ts ***!
  \***********************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "2S/2");
/* harmony import */ var _blog_archive_blog_archive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-archive/blog-archive.component */ "j2zL");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "C4l0");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-card/post-card.component */ "q6Vt");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "vYfc");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog.component */ "sJZk");
/* harmony import */ var _widgets_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/categories-list/categories-list.component */ "n/z8");
/* harmony import */ var _widgets_searcher_searcher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/searcher/searcher.component */ "JFwS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _widgets_recent_post_card_recent_post_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/recent-post-card/recent-post-card.component */ "w3M2");
/* harmony import */ var _widgets_recent_post_card_recent_posts_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/recent-post-card/recent-posts-list.component */ "zmt3");
/* harmony import */ var _widgets_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/social-sharing/social-sharing.component */ "nh8s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-share/core */ "ZyPe");

















let BlogModule = class BlogModule {
};
BlogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _blog_archive_blog_archive_component__WEBPACK_IMPORTED_MODULE_4__["BlogArchiveComponent"],
            _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostComponent"],
            _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__["PostCardComponent"],
            _blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
            _widgets_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesListComponent"],
            _widgets_searcher_searcher_component__WEBPACK_IMPORTED_MODULE_10__["SearcherComponent"],
            _widgets_recent_post_card_recent_post_card_component__WEBPACK_IMPORTED_MODULE_12__["RecentPostCardComponent"],
            _widgets_recent_post_card_recent_posts_list_component__WEBPACK_IMPORTED_MODULE_13__["RecentPostsListComponent"],
            _widgets_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_14__["SocialSharingComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _ngx_share_core__WEBPACK_IMPORTED_MODULE_16__["ShareModule"],
        ],
    })
], BlogModule);



/***/ }),

/***/ "CeaF":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/blog/blog.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n  class=\"cover\"\n  [ngClass]=\"{\n    'blog-archive': isBlogArchive,\n    'blog-post': !isBlogArchive\n  }\"\n>\n  <web-cover [slides]=\"coverData.slides\"></web-cover>\n  <h1 *ngIf=\"isBlogArchive\">Bienvenidos</h1>\n  <p *ngIf=\"isBlogArchive\">\n    En AmbLeMa valoramos las nuevas ideas en pro de una educación de calidad. En nuestro Blog también compartimos, nuestras experiencias, noticias, innovaciones, actividades y aprendizajes durante la aplicación de la Herramienta Socio-Educativa en todas las escuelas que apoyamos. Cada uno de nuestros actores principales -docentes, padrinos y coordinadores- tienen algo que aportar.\n  </p>\n</section>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "Hbji":
/*!****************************************************!*\
  !*** ./src/app/web/pages/blog/blog.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n::ng-deep .image-extended {\n  margin-left: -110vw !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .image-extended {\n    margin-left: 0 !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .image-extended {\n    margin-left: 0 !important;\n  }\n}\n::ng-deep .blog-post .image-extended {\n  margin-top: -40vw !important;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  ::ng-deep .blog-post .image-extended {\n    margin-top: 0 !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  ::ng-deep .blog-post .image-extended {\n    margin-top: 0 !important;\n  }\n}\nsection.cover {\n  position: relative;\n  color: #fff;\n  transition: 1s ease max-height;\n}\nsection.cover.blog-post {\n  max-height: 60vw;\n  overflow: hidden;\n  transition: 1s ease max-height;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.cover.blog-post {\n    max-height: 18vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.cover.blog-post {\n    max-height: 18vw;\n  }\n}\nsection.cover h1,\nsection.cover p {\n  position: absolute;\n  left: 12vw;\n}\nsection.cover h1 {\n  font-size: 8vw;\n  font-weight: bold;\n  top: 24vw;\n  width: 80%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.cover h1 {\n    font-size: 4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.cover h1 {\n    font-size: 4vw;\n  }\n}\nsection.cover p {\n  top: 35vw;\n  font-size: 4.5vw;\n  width: 80%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.cover p {\n    font-size: 1.8vw;\n    top: 30vw;\n    width: 60%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.cover p {\n    font-size: 1.8vw;\n    top: 30vw;\n    width: 60%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.cover p {\n    font-size: 1.2vw;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Jsb2cuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FBUkU7RUFDRSw4QkFBQTtBQVdKO0FDd0JJO0VEcENGO0lBR0kseUJBQUE7RUFhSjtBQUNGO0FDbUJJO0VEcENGO0lBT0kseUJBQUE7RUFjSjtBQUNGO0FBVkk7RUFDRSw0QkFBQTtBQVlOO0FDV0k7RUR4QkE7SUFHSSx3QkFBQTtFQWNOO0FBQ0Y7QUNNSTtFRHhCQTtJQU9JLHdCQUFBO0VBZU47QUFDRjtBQVZBO0VBQ0Usa0JBQUE7RUFDQSxXRDVCTTtFQzZCTiw4QkFBQTtBQWFGO0FBWEU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFhSjtBQ1ZJO0VETkY7SUFNSSxnQkFBQTtFQWNKO0FBQ0Y7QUNmSTtFRE5GO0lBVUksZ0JBQUE7RUFlSjtBQUNGO0FBWkU7O0VBRUUsa0JBQUE7RUFDQSxVQUFBO0FBY0o7QUFYRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUo7QUMvQkk7RURjRjtJQU9JLGNBQUE7RUFjSjtBQUNGO0FDcENJO0VEY0Y7SUFXSSxjQUFBO0VBZUo7QUFDRjtBQVpFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWNKO0FDOUNJO0VENkJGO0lBTUksZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQWVKO0FBQ0Y7QUNyREk7RUQ2QkY7SUFZSSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBZ0JKO0FBQ0Y7QUM1REk7RUQ2QkY7SUFrQkksZ0JBQUE7SUFDQSxVQUFBO0VBaUJKO0FBQ0YiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG46Om5nLWRlZXAge1xuICAuaW1hZ2UtZXh0ZW5kZWQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTEwdncgIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmJsb2ctcG9zdCB7XG4gICAgLmltYWdlLWV4dGVuZGVkIHtcbiAgICAgIG1hcmdpbi10b3A6IC00MHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnNlY3Rpb24uY292ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UgbWF4LWhlaWdodDtcblxuICAmLmJsb2ctcG9zdCB7XG4gICAgbWF4LWhlaWdodDogNjB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2UgbWF4LWhlaWdodDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgbWF4LWhlaWdodDogMTh2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgbWF4LWhlaWdodDogMTh2dztcbiAgICB9XG4gIH1cblxuICBoMSxcbiAgcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEydnc7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdG9wOiAyNHZ3O1xuICAgIHdpZHRoOiA4MCU7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICB0b3A6IDM1dnc7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICB3aWR0aDogODAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgdG9wOiAzMHZ3O1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgIHRvcDogMzB2dztcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICB9XG59XG4iLCIvL0B1c2UgXCJzYXNzOm1hcFwiO1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbiRicmVha3BvaW50czogKFxuICAgIFwic21hbGxcIjogMzIwcHgsXG4gICAgXCJtZWRpdW1cIjogNzY4cHgsXG4gICAgXCJsYXJnZVwiOiAxMDI0cHhcbik7XG5cbiRkaXJlY3Rpb25zOiAoXG4gICAgXCJkb3duXCI6IG1heCxcbiAgICBcInVwXCI6IG1pblxuKTtcblxuJG9yaWVudGF0aW9uczogKFxuICAgIFwibGFuZHNjYXBlXCI6IGxhbmRzY2FwZSxcbiAgICBcInBvcnRyYWl0XCI6IHBvcnRyYWl0XG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwib25seSBzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKSB7XG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcImRvd25cIiB7XG4gICAgICAgICRicmVha3BvaW50OiAkYnJlYWtwb2ludCAtIDFweDtcbiAgICAgIH1cbiAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWtwb2ludH0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGNvbHVtbnMoJG51bWJlcikge1xuICB3aWR0aDogY2FsYyggKDEwMCUgLyAxMikgKiAjeyRudW1iZXJ9KTtcbn1cblxuXG5cbi8vXG4kYnJlYWtwb2ludHMtYnQ6IChcbiAgICBcInNtYWxsXCI6IHNtLFxuICAgIFwibWVkaXVtXCI6IG1kLFxuICAgIFwibGFyZ2VcIjogbGcsXG4gICAgXCJsYXJnZXJcIjogeGwsXG4pO1xuXG5AbWl4aW4gbWVkaWFicmVhaygkc2l6ZSwgJG9yaWVudGF0aW9uOiBcIlwiLCRzcGVjaWZpYzogZmFsc2UsJGJyZWFrLW51bWJlcjogXCIwcHhcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcInNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMtYnQsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgJHNwZWNpZmljIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVhay1udW1iZXJ9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhLXF1ZXJ5fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "J0Ns":
/*!*****************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/recent-post-card/recent-post-card.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.recent-post-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.recent-post-card .image-wrapper {\n  width: 25%;\n}\n.recent-post-card .recent-post-title {\n  color: #555;\n  width: 70%;\n  font-size: 4.5vw;\n  line-height: 1.25;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .recent-post-card .recent-post-title {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .recent-post-card .recent-post-title {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .recent-post-card .recent-post-title {\n    font-size: 1.2vw;\n  }\n}\n.recent-post-card .recent-post-title a {\n  color: inherit;\n}\n.recent-post-card .recent-post-data {\n  padding-left: 30%;\n  width: 100%;\n  font-size: 3.5vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .recent-post-card .recent-post-data {\n    font-size: 1.3vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .recent-post-card .recent-post-data {\n    font-size: 1.3vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .recent-post-card .recent-post-data {\n    font-size: 0.8vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlY2VudC1wb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBQ1FQO0FEWUE7RUFDRSxjQXJCSztBQ1lQO0FBVEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBWUY7QUFWRTtFQUNFLFVBQUE7QUFZSjtBQVRFO0VBQ0UsV0RUSTtFQ1VKLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBV0o7QUNhSTtFRDVCRjtJQU9JLGdCQUFBO0VBWUo7QUFDRjtBQ1FJO0VENUJGO0lBV0ksZ0JBQUE7RUFhSjtBQUNGO0FDR0k7RUQ1QkY7SUFlSSxnQkFBQTtFQWNKO0FBQ0Y7QUFaSTtFQUNFLGNBQUE7QUFjTjtBQVZFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFZSjtBQ1ZJO0VETEY7SUFNSSxnQkFBQTtFQWFKO0FBQ0Y7QUNmSTtFRExGO0lBVUksZ0JBQUE7RUFjSjtBQUNGO0FDcEJJO0VETEY7SUFjSSxnQkFBQTtFQWVKO0FBQ0YiLCJmaWxlIjoicmVjZW50LXBvc3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4ucmVjZW50LXBvc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5pbWFnZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLnJlY2VudC1wb3N0LXRpdGxlIHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgLnJlY2VudC1wb3N0LWRhdGEge1xuICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgZm9udC1zaXplOiAwLjh2dztcbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "JFwS":
/*!***********************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/searcher/searcher.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearcherComponent", function() { return SearcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _searcher_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searcher.component.scss */ "oIFJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "EcpT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





let SearcherComponent = class SearcherComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.searchIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
    }
    ngOnInit() { }
    emitSearch() {
        const searchTerm = this.searchInput.value;
        if (searchTerm /* && searchTerm.length > 4 */) {
            this.search.emit(searchTerm);
        }
    }
};
SearcherComponent.ctorParameters = () => [];
SearcherComponent.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
SearcherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "searcher",
        template: `
    <div class="searcher">
      <input
        class="searcher-input"
        [formControl]="searchInput"
        placeholder="Buscar"
        type="text"
        (keyup.enter)="emitSearch()"
      />
      <button class="searcher-icon searcher-button" (click)="emitSearch()">
        <fa-icon [icon]="searchIcon"></fa-icon>
      </button>
    </div>
  `,
        styles: [_searcher_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], SearcherComponent);



/***/ }),

/***/ "SUvg":
/*!*******************************************************************!*\
  !*** ./src/app/web/pages/blog/blog-post/blog-post.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\nsection.blog-post {\n  flex-direction: column;\n  padding: 14vw 10vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post {\n    flex-direction: row;\n    padding: 7vw 8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post {\n    flex-direction: row;\n    padding: 7vw 8vw;\n  }\n}\nsection.blog-post section.post-detail {\n  width: 100%;\n  margin-bottom: 10%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post section.post-detail {\n    width: 65%;\n    margin-bottom: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post section.post-detail {\n    width: 65%;\n    margin-bottom: 0;\n  }\n}\nsection.blog-post section.post-detail .image-wrapper {\n  position: relative;\n}\nsection.blog-post section.post-detail .image-wrapper img {\n  width: 100%;\n}\nsection.blog-post section.post-detail .image-wrapper .post-date {\n  background-color: #00809a;\n  bottom: 0;\n  color: #fff;\n  font-size: 4vw;\n  left: 0;\n  padding: 2vw;\n  position: absolute;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post section.post-detail .image-wrapper .post-date {\n    font-size: 3vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post section.post-detail .image-wrapper .post-date {\n    font-size: 3vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.blog-post section.post-detail .image-wrapper .post-date {\n    font-size: 2vw;\n    padding: 1vw;\n  }\n}\nsection.blog-post section.post-detail .post {\n  padding: 4vw 0;\n}\nsection.blog-post section.post-detail .post .post-title {\n  color: darkslategray;\n  font-size: 6vw;\n  margin-bottom: 4vw;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post section.post-detail .post .post-title {\n    font-size: 3vw;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post section.post-detail .post .post-title {\n    font-size: 3vw;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.blog-post section.post-detail .post .post-title {\n    font-size: 2vw;\n  }\n}\nsection.blog-post section.post-detail .post .post-content {\n  color: gray;\n  font-size: 4vw;\n  font-weight: normal;\n  margin-bottom: 4vw;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post section.post-detail .post .post-content {\n    font-size: 1.8vw;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post section.post-detail .post .post-content {\n    font-size: 1.8vw;\n    margin-bottom: 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.blog-post section.post-detail .post .post-content {\n    font-size: 1.2vw;\n  }\n}\nsection.blog-post aside {\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  section.blog-post aside {\n    width: 40%;\n    padding: 4%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  section.blog-post aside {\n    width: 40%;\n    padding: 4%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  section.blog-post aside {\n    width: 35%;\n  }\n}\nsection.blog-post aside > * {\n  display: block;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Jsb2ctcG9zdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUFUQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFZRjtBQ3VCSTtFRHJDSjtJQUtJLG1CQUFBO0lBQ0EsZ0JBQUE7RUFhRjtBQUNGO0FDaUJJO0VEckNKO0lBVUksbUJBQUE7SUFDQSxnQkFBQTtFQWNGO0FBQ0Y7QUFaRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQWNKO0FDT0k7RUR2QkY7SUFLSSxVQUFBO0lBQ0EsZ0JBQUE7RUFlSjtBQUNGO0FDQ0k7RUR2QkY7SUFVSSxVQUFBO0lBQ0EsZ0JBQUE7RUFnQko7QUFDRjtBQWRJO0VBQ0Usa0JBQUE7QUFnQk47QUFkTTtFQUNFLFdBQUE7QUFnQlI7QUFiTTtFQUNFLHlCRHZDRDtFQ3dDQyxTQUFBO0VBQ0EsV0R0Q0E7RUN1Q0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZVI7QUNyQkk7RURGRTtJQVdJLGNBQUE7SUFDQSxZQUFBO0VBZ0JSO0FBQ0Y7QUMzQkk7RURGRTtJQWdCSSxjQUFBO0lBQ0EsWUFBQTtFQWlCUjtBQUNGO0FDakNJO0VERkU7SUFxQkksY0FBQTtJQUNBLFlBQUE7RUFrQlI7QUFDRjtBQWRJO0VBQ0UsY0FBQTtBQWdCTjtBQWRNO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSxhQUFBO0FBY1I7QUNwREk7RUQ0QkU7SUFhSSxjQUFBO0lBQ0Esa0JBQUE7RUFlUjtBQUNGO0FDMURJO0VENEJFO0lBa0JJLGNBQUE7SUFDQSxrQkFBQTtFQWdCUjtBQUNGO0FDaEVJO0VENEJFO0lBdUJJLGNBQUE7RUFpQlI7QUFDRjtBQWRNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFDQSx5QkFBQTtFQUVBLHFCQUFBO0VBRUEsYUFBQTtBQWNSO0FDaEZJO0VEdURFO0lBY0ksZ0JBQUE7SUFDQSxrQkFBQTtFQWVSO0FBQ0Y7QUN0Rkk7RUR1REU7SUFtQkksZ0JBQUE7SUFDQSxrQkFBQTtFQWdCUjtBQUNGO0FDNUZJO0VEdURFO0lBd0JJLGdCQUFBO0VBaUJSO0FBQ0Y7QUFaRTtFQUNFLFdBQUE7QUFjSjtBQ3BHSTtFRHFGRjtJQUlJLFVBQUE7SUFDQSxXQUFBO0VBZUo7QUFDRjtBQzFHSTtFRHFGRjtJQVNJLFVBQUE7SUFDQSxXQUFBO0VBZ0JKO0FBQ0Y7QUNoSEk7RURxRkY7SUFjSSxVQUFBO0VBaUJKO0FBQ0Y7QUFmSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWlCTiIsImZpbGUiOiJibG9nLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwic2Nzcy9yZXNwb25zaXZlXCI7XG5AaW1wb3J0IFwic2Nzcy92YXJpYWJsZXNcIjtcblxuc2VjdGlvbi5ibG9nLXBvc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNHZ3IDEwdnc7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA3dncgOHZ3O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDd2dyA4dnc7XG4gIH1cblxuICBzZWN0aW9uLnBvc3QtZGV0YWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgIHdpZHRoOiA2NSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuaW1hZ2Utd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAucG9zdC1kYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDJ2dztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDtcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgICAgICBwYWRkaW5nOiAxdnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICAgIHBhZGRpbmc6IDF2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICBwYWRkaW5nOiAxdnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucG9zdCB7XG4gICAgICBwYWRkaW5nOiA0dncgMDtcblxuICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcblxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgICAgIGh5cGhlbnM6IGF1dG87XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBvc3QtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xuXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAgICAgaHlwaGVuczogYXV0bztcblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydnc7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBhZGRpbmc6IDQlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgcGFkZGluZzogNCU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICB9XG5cbiAgICAmID4gKiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "U/NW":
/*!***************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/categories-list/categories-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.categories {\n  color: #909090;\n}\n.categories .categories-title {\n  color: #555;\n  font-size: 4.5vw;\n  font-weight: bold;\n  margin: 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .categories .categories-title {\n    font-size: 1.4vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .categories .categories-title {\n    font-size: 1.4vw;\n  }\n}\n.categories .categories-list {\n  padding: 0;\n}\n.categories .categories-list .categories-list-item {\n  border-bottom: 1px solid #909090;\n  font-size: 4vw;\n  list-style: none;\n  margin: 0;\n  padding: 2vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .categories .categories-list .categories-list-item {\n    font-size: 1.2vw;\n    padding: 0.7vw 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .categories .categories-list .categories-list-item {\n    font-size: 1.2vw;\n    padding: 0.7vw 0;\n  }\n}\n.categories .categories-list .categories-list-item a {\n  color: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUFUQTtFQUNFLGNEQ1U7QUNXWjtBQVZFO0VBQ0UsV0RISTtFQ0lKLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBWUo7QUNrQkk7RURsQ0Y7SUFPSSxnQkFBQTtFQWFKO0FBQ0Y7QUNhSTtFRGxDRjtJQVdJLGdCQUFBO0VBY0o7QUFDRjtBQVhFO0VBQ0UsVUFBQTtBQWFKO0FBWEk7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBYU47QUNGSTtFRGhCQTtJQVFJLGdCQUFBO0lBQ0EsZ0JBQUE7RUFjTjtBQUNGO0FDUkk7RURoQkE7SUFhSSxnQkFBQTtJQUNBLGdCQUFBO0VBZU47QUFDRjtBQWJNO0VBQ0UseUJBQUE7QUFlUiIsImZpbGUiOiJjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzAwODA5YTtcbiRncmVlbjogIzgxYjAzZTtcbiRkYXJrLWdyZWVuOiAjMDA3MjJlO1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjNTU1O1xuJGRhcmstZ3JheTogIzkwOTA5MDtcbiRyZWQ6ICNmMzVmNWY7XG4kY2FuY2VsLWdyYXk6ICM5ZmE5YmQ7XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuLnByaW1hcnktY29sb3Ige1xuICBjb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwic2Nzcy9yZXNwb25zaXZlXCI7XG5AaW1wb3J0IFwic2Nzcy92YXJpYWJsZXNcIjtcblxuLmNhdGVnb3JpZXMge1xuICBjb2xvcjogJGRhcmstZ3JheTtcblxuICAuY2F0ZWdvcmllcy10aXRsZSB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjR2dztcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcmllcy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLmNhdGVnb3JpZXMtbGlzdC1pdGVtIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFyay1ncmF5O1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMnZ3IDA7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgICAgICBwYWRkaW5nOiAwLjd2dyAwO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgICAgICBwYWRkaW5nOiAwLjd2dyAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "Xf10":
/*!*******************************************************!*\
  !*** ./src/app/web/pages/blog/blog-static-content.ts ***!
  \*******************************************************/
/*! exports provided: BLOG_CONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_CONTENT", function() { return BLOG_CONTENT; });
const BLOG_CONTENT = {
    pagination: {
        total_records: 8,
        total_pages: 1,
    },
    records: [
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento",
            title: "La capacitación en matemáticas induce al docente en el razonamiento",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-2",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 2",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-3",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 3",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-4",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 4",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-5",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 5",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            image2: "",
            id: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-6",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 6",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            createdAt: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            secondaryImage: "",
            slug: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-7",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 7",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            date: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
        {
            image: "./assets/images/background-pillar-matematica.jpg",
            secondaryImage: "",
            slug: "la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-8",
            title: "La capacitación en matemáticas induce al docente en el razonamiento 8",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.",
            date: new Date(),
            tags: ["Empezando", "Tu comunidad"],
            status: "published",
        },
    ],
};


/***/ }),

/***/ "Znm1":
/*!*************************************************************************!*\
  !*** ./src/app/web/pages/blog/blog-archive/blog-archive.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.posts-list {\n  padding: 14vw 10vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .posts-list {\n    padding: 7vw 5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .posts-list {\n    padding: 7vw 5vw;\n  }\n}\n.posts-list .row {\n  padding-bottom: 4vw;\n}\n.posts-list .row:last-child {\n  padding-bottom: 0;\n}\nsearcher {\n  margin: auto;\n}\n.query {\n  font-size: 6vw;\n  font-weight: bold;\n  color: #555;\n  width: 100%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .query {\n    text-align: center;\n    font-size: 2.5vw;\n    margin-bottom: 3%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .query {\n    text-align: center;\n    font-size: 2.5vw;\n    margin-bottom: 3%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .query {\n    font-size: 1.5vw;\n  }\n}\n.empty-data {\n  color: #909090;\n  text-align: center;\n  width: 100%;\n  margin: 10% 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .empty-data {\n    margin: 5% 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .empty-data {\n    margin: 5% 0;\n  }\n}\n.go-back {\n  background: none;\n  border: none;\n  color: #909090;\n  display: block;\n  font-size: 1.25rem;\n  width: 100%;\n  cursor: pointer;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .go-back {\n    text-align: center;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .go-back {\n    text-align: center;\n  }\n}\n.go-back:focus {\n  outline: none;\n}\nblog-post-card {\n  padding: 5vw 0;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  blog-post-card {\n    flex: 0 0 50%;\n    max-width: 50%;\n    padding: 0 2vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  blog-post-card {\n    flex: 0 0 50%;\n    max-width: 50%;\n    padding: 0 2vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  blog-post-card {\n    flex: 0 0 25%;\n    max-width: 25%;\n    padding: 0 2vw;\n  }\n}\n.paginator {\n  margin: auto;\n}\n::ng-deep .blog-pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: auto;\n}\n::ng-deep .blog-pagination jw-pagination {\n  display: block;\n  width: 100%;\n}\n::ng-deep .blog-pagination jw-pagination .page-item.next-item, ::ng-deep .blog-pagination jw-pagination .page-item.previous-item {\n  display: none;\n}\n::ng-deep .blog-pagination jw-pagination .page-item .page-link {\n  border-radius: 100px;\n  margin: 0 0.4vw;\n}\n::ng-deep .blog-pagination .icon-arrow {\n  background: none;\n  border: none;\n  color: #00809a;\n  display: block;\n  position: relative;\n  font-size: 2rem;\n  top: -3.75rem;\n  cursor: pointer;\n}\n::ng-deep .blog-pagination .icon-arrow:disabled {\n  color: #909090;\n  cursor: default;\n}\n::ng-deep .blog-pagination .icon-arrow:focus {\n  outline: none;\n}\n::ng-deep .blog-pagination .icon-arrow.icon-back {\n  left: -1rem;\n}\n::ng-deep .blog-pagination .icon-arrow.icon-forward {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Jsb2ctYXJjaGl2ZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx5QkFWSztFQVdMLFdBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEVUU7RUFDRSxzQkFBQTtFQUNBLGNBaEJHO0FDUVA7QURZQTtFQUNFLGNBckJLO0FDWVA7QUFUQTtFQUNFLGtCQUFBO0FBWUY7QUN3Qkk7RURyQ0o7SUFHSSxnQkFBQTtFQWNGO0FBQ0Y7QUNtQkk7RURyQ0o7SUFPSSxnQkFBQTtFQWVGO0FBQ0Y7QUFiRTtFQUNFLG1CQUFBO0FBZUo7QUFiSTtFQUNFLGlCQUFBO0FBZU47QUFWQTtFQUNFLFlBQUE7QUFhRjtBQVZBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0R6Qk07RUMwQk4sV0FBQTtBQWFGO0FDSEk7RURkSjtJQU9JLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQWNGO0FBQ0Y7QUNWSTtFRGRKO0lBYUksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBZUY7QUFDRjtBQ2pCSTtFRGRKO0lBbUJJLGdCQUFBO0VBZ0JGO0FBQ0Y7QUFiQTtFQUNFLGNEN0NVO0VDOENWLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFnQkY7QUM3Qkk7RURTSjtJQU9JLFlBQUE7RUFpQkY7QUFDRjtBQ2xDSTtFRFNKO0lBV0ksWUFBQTtFQWtCRjtBQUNGO0FBZkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjRDlEVTtFQytEVixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBVUEsZUFBQTtBQVNGO0FDakRJO0VEd0JKO0lBU0ksa0JBQUE7RUFvQkY7QUFDRjtBQ3RESTtFRHdCSjtJQWFJLGtCQUFBO0VBcUJGO0FBQ0Y7QUFsQkU7RUFDRSxhQUFBO0FBb0JKO0FBaEJBO0VBQ0UsY0FBQTtBQW1CRjtBQ2xFSTtFRDhDSjtJQUlJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQW9CRjtBQUNGO0FDekVJO0VEOENKO0lBVUksYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBcUJGO0FBQ0Y7QUNoRkk7RUQ4Q0o7SUFnQkksYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBc0JGO0FBQ0Y7QUFuQkE7RUFDRSxZQUFBO0FBc0JGO0FBbEJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFxQko7QUFuQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQXFCTjtBQWxCUTtFQUVFLGFBQUE7QUFtQlY7QUFoQlE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFrQlY7QUFiSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNEM0lDO0VDNElELGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWVOO0FBZE07RUFDRSxjRDdJSTtFQzhJSixlQUFBO0FBZ0JSO0FBZE07RUFDRSxhQUFBO0FBZ0JSO0FBZE07RUFDRSxXQUFBO0FBZ0JSO0FBZE07RUFDRSxZQUFBO0FBZ0JSIiwiZmlsZSI6ImJsb2ctYXJjaGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4ucG9zdHMtbGlzdCB7XG4gIHBhZGRpbmc6IDE0dncgMTB2dztcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgcGFkZGluZzogN3Z3IDV2dztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgcGFkZGluZzogN3Z3IDV2dztcbiAgfVxuXG4gIC5yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiA0dnc7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbnNlYXJjaGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucXVlcnkge1xuICBmb250LXNpemU6IDZ2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAkYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG59XG5cbi5lbXB0eS1kYXRhIHtcbiAgY29sb3I6ICRkYXJrLWdyYXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTAlIDA7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgbWFyZ2luOiA1JSAwO1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICBtYXJnaW46IDUlIDA7XG4gIH1cbn1cblxuLmdvLWJhY2sge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAkZGFyay1ncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG5ibG9nLXBvc3QtY2FyZCB7XG4gIHBhZGRpbmc6IDV2dyAwO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMCAydnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMCAydnc7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwIDJ2dztcbiAgfVxufVxuXG4ucGFnaW5hdG9yIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG46Om5nLWRlZXAge1xuICAuYmxvZy1wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAganctcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAucGFnZS1pdGVtIHtcbiAgICAgICAgJi5uZXh0LWl0ZW0sXG4gICAgICAgICYucHJldmlvdXMtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwLjR2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLWFycm93IHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogJGJsdWU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIHRvcDogLTMuNzVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgICAgJi5pY29uLWJhY2sge1xuICAgICAgICBsZWZ0OiAtMXJlbTtcbiAgICAgIH1cbiAgICAgICYuaWNvbi1mb3J3YXJkIHtcbiAgICAgICAgcmlnaHQ6IC0xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9AdXNlIFwic2FzczptYXBcIjtcblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJyxcbiAgICAgICAgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgICBcInNtYWxsXCI6IDMyMHB4LFxuICAgIFwibWVkaXVtXCI6IDc2OHB4LFxuICAgIFwibGFyZ2VcIjogMTAyNHB4XG4pO1xuXG4kZGlyZWN0aW9uczogKFxuICAgIFwiZG93blwiOiBtYXgsXG4gICAgXCJ1cFwiOiBtaW5cbik7XG5cbiRvcmllbnRhdGlvbnM6IChcbiAgICBcImxhbmRzY2FwZVwiOiBsYW5kc2NhcGUsXG4gICAgXCJwb3J0cmFpdFwiOiBwb3J0cmFpdFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwgJGRpcmVjdGlvbjogXCJ1cFwiKSB7XG4gICAgJG1lZGlhLXF1ZXJ5OiBcIm9ubHkgc2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbikge1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJkb3duXCIge1xuICAgICAgICAkYnJlYWtwb2ludDogJGJyZWFrcG9pbnQgLSAxcHg7XG4gICAgICB9XG4gICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSBcIjtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJG9yaWVudGF0aW9ucywgJG9yaWVudGF0aW9uKSB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kIChvcmllbnRhdGlvbjogI3skb3JpZW50YXRpb259KVwiO1xuICAgIH1cblxuICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb2x1bW5zKCRudW1iZXIpIHtcbiAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMTIpICogI3skbnVtYmVyfSk7XG59XG5cblxuXG4vL1xuJGJyZWFrcG9pbnRzLWJ0OiAoXG4gICAgXCJzbWFsbFwiOiBzbSxcbiAgICBcIm1lZGl1bVwiOiBtZCxcbiAgICBcImxhcmdlXCI6IGxnLFxuICAgIFwibGFyZ2VyXCI6IHhsLFxuKTtcblxuQG1peGluIG1lZGlhYnJlYWsoJHNpemUsICRvcmllbnRhdGlvbjogXCJcIiwkc3BlY2lmaWM6IGZhbHNlLCRicmVhay1udW1iZXI6IFwiMHB4XCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJzY3JlZW4gXCI7XG4gICAgJGJyZWFrcG9pbnQ6IFwiXCI7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1idCwgJHNpemUpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWJ0LCAkc2l6ZSk7XG4gICAgfVxuXG4gICAgQGlmICRzcGVjaWZpYyB7XG4gICAgICAgICRtZWRpYS1xdWVyeTogXCIjeyRtZWRpYS1xdWVyeX0gYW5kICgje21hcC1nZXQoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pfS13aWR0aDogI3skYnJlYWstbnVtYmVyfSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYS1xdWVyeX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "ZyPe":
/*!*****************************************************************!*\
  !*** ./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js ***!
  \*****************************************************************/
/*! exports provided: ShareModule, ShareService, ShareDirective, SHARE_BUTTONS_CONFIG, SHARE_BUTTONS, ShareCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDirective", function() { return ShareDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS_CONFIG", function() { return SHARE_BUTTONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS", function() { return SHARE_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCountPipe", function() { return ShareCountPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SHARE_BUTTONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('shareButtonsConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._self = this;
        /**
         * If share button supports share count
         */
        this.supportShareCount = false;
    }
    /**
     * Share button label
     * @return {?}
     */
    get text() {
        return this._props.text;
    }
    /**
     * Share button aria-label attribute
     * @return {?}
     */
    get ariaLabel() {
        return this._props.ariaLabel;
    }
    /**
     * Share button color
     * @return {?}
     */
    get color() {
        return this._props.color;
    }
    /**
     * Share button icon (FontAwesome)
     * @return {?}
     */
    get icon() {
        return this._props.icon;
    }
    /**
     * @return {?}
     */
    get desktop() {
        return undefined;
    }
    /**
     * @return {?}
     */
    get android() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get ios() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get sharerUrl() {
        if (this._platform.IOS)
            return this.ios;
        if (this._platform.ANDROID)
            return this.android;
        return this.desktop;
    }
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    }
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return undefined;
    }
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    _serializeMetaTags(metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => metaTags[key] ? `${value}=${encodeURIComponent(metaTags[key])}` : ''))
            .join('&');
    }
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    _open(serializedMetaTags) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            // Avoid SSR error
            if (this.sharerUrl && this._platform.isBrowser) {
                /** @type {?} */
                const finalUrl = this.sharerUrl + serializedMetaTags;
                // Debug mode, log sharer link
                this._logger(finalUrl);
                /** @type {?} */
                const popUp = this._document.defaultView.open(finalUrl, 'newwindow', this._windowSize);
                // Resolve when share dialog is closed
                if (popUp) {
                    /** @type {?} */
                    const pollTimer = this._document.defaultView.setInterval((/**
                     * @return {?}
                     */
                    () => {
                        if (popUp.closed) {
                            this._document.defaultView.clearInterval(pollTimer);
                            resolve();
                        }
                    }), 200);
                }
            }
            else {
                console.warn(`${this.text} button is not compatible on this Platform`);
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacebookButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'u'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://www.facebook.com/sharer/sharer.php?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://graph.facebook.com?id=${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.share.share_count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TwitterButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://twitter.com/intent/tweet?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkedinButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            title: 'title',
            description: 'summary'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.linkedin.com/shareArticle?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GooglePlusButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://plus.google.com/share?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TumblrButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://tumblr.com/widgets/share/tool?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.jsonp(`https://api.tumblr.com/v2/share/stats?url=${url}`, 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.response.note_count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PinterestButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://pinterest.com/pin/create/button/?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Check if image parameter is defined
        if (metaTags.image) {
            return this._open(this._serializeMetaTags(metaTags));
        }
        console.warn('Pinterest button: image parameter is required!');
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://api.pinterest.com/v1/urls/count.json?url=${url}`, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} text
         * @return {?}
         */
        (text) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RedditButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            title: 'title'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.reddit.com/submit?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VkButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://vk.com/share.php?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TelegramButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return 'https://t.me/share/url?';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessengerButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'link'
        };
    }
    /**
     * @return {?}
     */
    get android() {
        return 'fb-messenger://share/?';
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'fb-messenger://share/?';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WhatsappButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://wa.me/?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `whatsapp://send?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return `https://api.whatsapp.com/send?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class XingButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://www.xing.com/app/user?op=share&`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmsButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'sms:&';
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            title: 'subject',
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `mailto:?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrintButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
    }
    /**
     * @return {?}
     */
    click() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this._document.defaultView.print();
            resolve();
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CopyButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
    }
    /**
     * @return {?}
     */
    get text() {
        return this._disable ? this._props.extra.successLabel : this._props.text;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._disable ? this._props.extra.successIcon : this._props.icon;
    }
    /**
     * @private
     * @return {?}
     */
    _disableButton() {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    }
    /**
     * @private
     * @return {?}
     */
    _resetButton() {
        this._disable = false;
        this._disableButtonClick(false);
    }
    /**
     * @return {?}
     */
    click() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            try {
                /** @type {?} */
                const textArea = (/** @type {?} */ (this._document.createElement('textarea')));
                textArea.value = decodeURIComponent(this._url());
                this._document.body.appendChild(textArea);
                // highlight TextArea to copy the sharing link
                if (this._platform.IOS) {
                    /** @type {?} */
                    const range = this._document.createRange();
                    range.selectNodeContents(textArea);
                    /** @type {?} */
                    const selection = this._document.defaultView.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.readOnly = true;
                    textArea.setSelectionRange(0, 999999);
                }
                else {
                    textArea.select();
                }
                this._document.execCommand('copy');
                this._document.body.removeChild(textArea);
                this._disableButton();
            }
            catch (e) {
                console.warn('Copy link failed!', e.message);
            }
            finally {
                setTimeout((/**
                 * @return {?}
                 */
                () => this._resetButton()), 2000);
                resolve();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MixButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://mix.com/add?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LineButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://social-plugins.line.me/lineit/share?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default share buttons properties
 * @type {?}
 */
const SHARE_BUTTONS = {
    facebook: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new FacebookButton(a, b, c, d, e, f, g, h)),
        text: 'Facebook',
        icon: ['fab', 'facebook-f'],
        color: '#4267B2',
        ariaLabel: 'Share on Facebook'
    },
    twitter: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TwitterButton(a, b, c, d, e, f, g, h)),
        text: 'Twitter',
        icon: ['fab', 'twitter'],
        color: '#00acee',
        ariaLabel: 'Share on Twitter'
    },
    linkedin: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new LinkedinButton(a, b, c, d, e, f, g, h)),
        text: 'LinkedIn',
        icon: ['fab', 'linkedin-in'],
        color: '#006fa6',
        ariaLabel: 'Share on LinkedIn'
    },
    google: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new GooglePlusButton(a, b, c, d, e, f, g, h)),
        text: 'Google+',
        icon: ['fab', 'google-plus-g'],
        color: '#DB4437',
        ariaLabel: 'Share on Google plus'
    },
    pinterest: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new PinterestButton(a, b, c, d, e, f, g, h)),
        text: 'Pinterest',
        icon: ['fab', 'pinterest-p'],
        color: '#BD091D',
        ariaLabel: 'Share on Pinterest'
    },
    reddit: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new RedditButton(a, b, c, d, e, f, g, h)),
        text: 'Reddit',
        icon: ['fab', 'reddit-alien'],
        color: '#FF4006',
        ariaLabel: 'Share on Reddit'
    },
    tumblr: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TumblrButton(a, b, c, d, e, f, g, h)),
        text: 'Tumblr',
        icon: ['fab', 'tumblr'],
        color: '#36465D',
        ariaLabel: 'Share on Tumblr'
    },
    mix: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new MixButton(a, b, c, d, e, f, g, h)),
        text: 'Mix',
        icon: ['fab', 'mix'],
        color: '#ff8226',
        ariaLabel: 'Share on Mix'
    },
    vk: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new VkButton(a, b, c, d, e, f, g, h)),
        text: 'VKontakte',
        icon: ['fab', 'vk'],
        color: '#4C75A3',
        ariaLabel: 'Share on VKontakte'
    },
    telegram: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TelegramButton(a, b, c, d, e, f, g, h)),
        text: 'Telegram',
        icon: ['fab', 'telegram-plane'],
        color: '#0088cc',
        ariaLabel: 'Share on Telegram'
    },
    messenger: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new MessengerButton(a, b, c, d, e, f, g, h)),
        text: 'Messenger',
        icon: ['fab', 'facebook-messenger'],
        color: '#0080FF',
        ariaLabel: 'Share on Messenger'
    },
    whatsapp: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new WhatsappButton(a, b, c, d, e, f, g, h)),
        text: 'WhatsApp',
        icon: ['fab', 'whatsapp'],
        color: '#25D366',
        ariaLabel: 'Share on WhatsApp'
    },
    xing: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new XingButton(a, b, c, d, e, f, g, h)),
        text: 'Xing',
        icon: ['fab', 'xing'],
        color: '#006567',
        ariaLabel: 'Share on Xing'
    },
    line: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new LineButton(a, b, c, d, e, f, g, h)),
        text: 'Line',
        icon: ['fab', 'line'],
        color: '#00b900',
        ariaLabel: 'Share on Line'
    },
    sms: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new SmsButton(a, b, c, d, e, f, g, h)),
        text: 'SMS',
        icon: 'comment-alt',
        color: '#20c16c',
        ariaLabel: 'Share link via SMS'
    },
    email: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new EmailButton(a, b, c, d, e, f, g, h)),
        text: 'Email',
        icon: 'envelope',
        color: '#FF961C',
        ariaLabel: 'Share link via email'
    },
    print: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new PrintButton(a, b, c, d, e, f, g, h)),
        text: 'Print',
        icon: 'print',
        color: '#765AA2',
        ariaLabel: 'Print page'
    },
    copy: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new CopyButton(a, b, c, d, e, f, g, h)),
        text: 'Copy link',
        icon: 'link',
        color: '#607D8B',
        ariaLabel: 'Copy link',
        extra: {
            successLabel: 'Copied',
            successIcon: 'check'
        }
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple object check.
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
function shareCountFormatter(num, digits) {
    /** @type {?} */
    const si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ];
    /** @type {?} */
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
        }
    }
    return num.toFixed(digits).replace(rx, '$1');
}
/**
 * Returns a valid URL or falls back to current URL
 * @param {?} url
 * @param {?} fallbackUrl
 * @return {?}
 */
function getValidUrl(url, fallbackUrl) {
    if (url) {
        /** @type {?} */
        const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url))
            return url;
        console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    return fallbackUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareService {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * Global config that applies on all share buttons in the app
         */
        this.config = {
            prop: SHARE_BUTTONS,
            theme: 'default',
            include: [],
            exclude: [],
            size: 0,
            autoSetMeta: true,
            windowWidth: 800,
            windowHeight: 500,
            moreButtonIcon: 'ellipsis-h',
            lessButtonIcon: 'minus'
        };
        /**
         * Stream that emits when config changes
         */
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    /**
     * Share buttons properties, used to get the text, color and icon of each button.
     * @return {?}
     */
    get prop() {
        return this.config.prop;
    }
    /**
     * @return {?}
     */
    get windowSize() {
        return `width=${this.config.windowWidth}, height=${this.config.windowHeight}`;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    }
}
ShareService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ShareService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [SHARE_BUTTONS_CONFIG,] }] }
];
/** @nocollapse */ ShareService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function ShareService_Factory() { return new ShareService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"])(SHARE_BUTTONS_CONFIG, 8)); }, token: ShareService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareDirective {
    /**
     * @param {?} _meta
     * @param {?} _el
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _share
     * @param {?} _document
     */
    constructor(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
        this._meta = _meta;
        this._el = _el;
        this._http = _http;
        this._platform = _platform;
        this._renderer = _renderer;
        this._cd = _cd;
        this._share = _share;
        this._document = _document;
        /**
         * Share window closed event subscription
         */
        this._shareWindowClosed = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Get share count
         */
        this.getCount = false;
        /**
         * Set meta tags from document head, useful when SEO is supported
         */
        this.autoSetMeta = this._share.config.autoSetMeta;
        /**
         * Sharing link
         */
        this.url = this._share.config.url;
        /**
         * Sets the title parameter
         */
        this.title = this._share.config.title;
        /**
         * Sets the description parameter
         */
        this.description = this._share.config.description;
        /**
         * Sets the image parameter for sharing on Pinterest
         */
        this.image = this._share.config.image;
        /**
         * Sets the tags parameter for sharing on Twitter and Tumblr
         */
        this.tags = this._share.config.tags;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * Share the link
     * @return {?}
     */
    share() {
        /** @type {?} */
        const metaTags = this.autoSetMeta ? {
            url: this.url,
            title: this.title || this._getMetaTagContent('og:title'),
            description: this.description || this._getMetaTagContent('og:description'),
            image: this.image || this._getMetaTagContent('og:image'),
            via: this._share.config.twitterAccount,
            tags: this.tags,
        } : {
            url: this.url,
            title: this.title,
            description: this.description,
            image: this.image,
            tags: this.tags,
            via: this._share.config.twitterAccount,
        };
        // Emit when share dialog is opened
        this.opened.emit(this.shareButtonName);
        // Share the link
        this.shareButton.click(metaTags).then((/**
         * @return {?}
         */
        () => 
        // Emit when share dialog is closed
        this.closed.emit(this.shareButtonName)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Avoid SSR error
        if (this._platform.isBrowser) {
            if (this._shareButtonChanged(changes['shareButtonName'])) {
                this._createShareButton();
            }
            if (this._urlChanged(changes['url'])) {
                this.url = getValidUrl(this.autoSetMeta
                    ? this.url || this._getMetaTagContent('og:url')
                    : this.url, this._document.defaultView.location.href);
                if (this.getCount && this.shareButton.supportShareCount) {
                    this.shareButton.shareCount(this.url).subscribe((/**
                     * @param {?} count
                     * @return {?}
                     */
                    (count) => this.count.emit(count)));
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._shareWindowClosed.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _createShareButton() {
        /** @type {?} */
        const shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        const button = shareButtonFactory.create(shareButtonFactory, (
        // Pass the url property as a function, so the button class always gets the recent url value.
        /**
         * @return {?}
         */
        () => this.url), this._http, this._platform, this._document, this._share.windowSize, (
        // This function is meant for the copy button
        /**
         * @param {?} disabled
         * @return {?}
         */
        (disabled) => {
            this.pointerEvents = disabled ? 'none' : 'auto';
            this._cd.markForCheck();
        }), (
        // Logger used for debugging
        /**
         * @param {?} text
         * @return {?}
         */
        (text) => this._share.config.debug ? console.log(text) : null));
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, `sb-${this._buttonClass}`);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, `sb-${this.shareButtonName}`);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`);
        }
    }
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    _getMetaTagContent(key) {
        /** @type {?} */
        const metaUsingProperty = this._meta.getTag(`property="${key}"`);
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        const metaUsingName = this._meta.getTag(`name="${key}"`);
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _shareButtonChanged(change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _urlChanged(change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    }
}
ShareDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                selector: '[shareButton], [share-button]'
            },] }
];
/** @nocollapse */
ShareDirective.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] },
    { type: ShareService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
ShareDirective.propDecorators = {
    shareButtonName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['shareButton',] }],
    getCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    autoSetMeta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['style.pointerEvents',] }],
    share: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareCountPipe {
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    transform(num, digits) {
        return shareCountFormatter(num, digits);
    }
}
ShareCountPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Pipe"], args: [{
                name: 'shareCount'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareModule,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    }
}
ShareModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                imports: [
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"]
                ],
                declarations: [
                    ShareDirective,
                    ShareCountPipe
                ],
                exports: [
                    ShareDirective,
                    ShareCountPipe
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-share-core.js.map

/***/ }),

/***/ "aFsV":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/blog/blog-archive/blog-archive.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid posts-list\">\n  <div class=\"row\">\n    <searcher\n      class=\"col-12 col-md-4\"\n      (search)=\"navigateToArchive($event)\"\n    ></searcher>\n  </div>\n  <div class=\"row\">\n    <span class=\"query\" *ngIf=\"queryBreadcrums\">{{ queryBreadcrums }}</span>\n    <ng-container *ngFor=\"let post of postsList; index as i\">\n      <blog-post-card\n        class=\"col-12 col-md-6 col-xl-4\"\n        [post]=\"post\"\n      ></blog-post-card>\n    </ng-container>\n    <p class=\"empty-data\" *ngIf=\"!postsList.length\">\n      No se encontraron entradas de blog\n    </p>\n    <button\n      class=\"go-back icon-arrow\"\n      *ngIf=\"!postsList.length\"\n      (click)=\"location.back()\"\n    >\n      <fa-icon [icon]=\"leftArrowIcon\"></fa-icon>\n      Ir atrás\n    </button>\n  </div>\n  <div class=\"row\">\n    <div class=\"blog-pagination\">\n      <jw-pagination\n        #pagination\n        [items]=\"postsIndex\"\n        [pageSize]=\"pageSize\"\n        [maxPages]=\"5\"\n        *ngIf=\"postsIndex.length\"\n        (changePage)=\"changePostPage($event)\"\n      >\n      </jw-pagination>\n      <button\n        class=\"icon-back icon-arrow\"\n        *ngIf=\"postsIndex.length\"\n        (click)=\"triggerChangePage(activePage - 1)\"\n        [disabled]=\"activePage <= 1\"\n      >\n        <fa-icon [icon]=\"leftArrowIcon\"></fa-icon>\n      </button>\n      <button\n        class=\"icon-forward icon-arrow\"\n        *ngIf=\"postsIndex.length\"\n        (click)=\"triggerChangePage(activePage + 1)\"\n        [disabled]=\"activePage >= totalPages\"\n      >\n        <fa-icon [icon]=\"rightArrowIcon\"></fa-icon>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "fwKD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/pages/blog/post-card/post-card.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post-card\">\n  <div class=\"image-wrapper\">\n    <img class=\"post-image\" [src]=\"post.mainImage\" [alt]=\"post.title + ' imagen'\" />\n    <span class=\"post-date\">\n      {{ post.date | date: \"mediumDate\":\"-0400\":\"es\" }}\n    </span>\n  </div>\n  <div class=\"post-content\">\n    <h2 #title class=\"post-title\">{{ post.title }}</h2>\n    <p #excerpt class=\"post-excerpt\" [innerHTML]=\"getExcerpt()\"></p>\n    <a class=\"read-more d-flex align-items-center\" [routerLink]=\"['/blog/post', post.slug]\">\n      Leer Más\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "j2zL":
/*!***********************************************************************!*\
  !*** ./src/app/web/pages/blog/blog-archive/blog-archive.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogArchiveComponent", function() { return BlogArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_archive_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-archive.component.html */ "aFsV");
/* harmony import */ var _blog_archive_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-archive.component.scss */ "Znm1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/web/api-web-content.service */ "nWHY");
/* harmony import */ var src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/web/static-web-content.service */ "TdEa");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "EcpT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _blog_static_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blog-static-content */ "Xf10");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../categories */ "07Kd");
/* harmony import */ var src_app_web_web_pages_metadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/web/web-pages-metadata */ "Xkmw");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngxs/store */ "e1JD");
/* harmony import */ var src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/store/actions/web/web.actions */ "LMpb");

















let BlogArchiveComponent = class BlogArchiveComponent {
    constructor(route, router, http, globalService, location, store) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.globalService = globalService;
        this.location = location;
        this.store = store;
        this.postsList = [];
        this.postsIndex = [];
        this.activePage = 1;
        this.pageSize = 8;
        this.totalPages = 1;
        this.queryParams = "";
        this.queryBreadcrums = "";
        this.categories = _categories__WEBPACK_IMPORTED_MODULE_12__["BLOG_CATEGORIES"];
        this.leftArrowIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAngleLeft"];
        this.rightArrowIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAngleRight"];
        this.BLOG_PATH = "webcontent/posts/page/";
        this.globalService.setTitle(src_app_web_web_pages_metadata__WEBPACK_IMPORTED_MODULE_13__["METADATA"].blogPage.title);
        this.globalService.setMetaTags(src_app_web_web_pages_metadata__WEBPACK_IMPORTED_MODULE_13__["METADATA"].blogPage.metatags);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.keys.length) {
                this.queryBreadcrums = this.generateQueryBreadcrums(params);
                this.queryParams = this.generateQueryParams(params);
            }
            //this.setStaticService();
            this.setApiService(this.activePage, this.pageSize, this.queryParams);
            this.getBlogPostsJSON();
        });
    }
    generateQueryParams(params) {
        return params.keys.reduce((prevParam, currentParam, i) => {
            const paramValue = params.get(currentParam);
            if (paramValue) {
                return prevParam + currentParam + "=" + paramValue + "&";
            }
            else {
                return prevParam;
            }
        }, "?");
    }
    generateQueryBreadcrums(params) {
        const translates = { title: "Título", tag: "Etiqueta" };
        return params.keys.reduce((prevParam, currentParam, i) => {
            let paramValue = "";
            if (currentParam == "tag") {
                this.categories.map((category) => {
                    if (params.get(currentParam) == category.id)
                        paramValue = category.name;
                });
            }
            else {
                paramValue = params.get(currentParam);
            }
            if (paramValue) {
                return prevParam + translates[currentParam] + ": " + paramValue + " ";
            }
            else {
                return prevParam;
            }
        }, "");
    }
    setStaticService() {
        this.blogService = new src_app_services_web_static_web_content_service__WEBPACK_IMPORTED_MODULE_7__["StaticWebContentService"]();
        this.blogService.setWebContent(_blog_static_content__WEBPACK_IMPORTED_MODULE_10__["BLOG_CONTENT"]);
    }
    setApiService(page, size, params) {
        const queryParams = params
            ? `${params}&page_size=${size}`
            : `?page_size=${size}`;
        const service = new src_app_services_web_api_web_content_service__WEBPACK_IMPORTED_MODULE_6__["ApiWebContentService"](this.http);
        service.setBaseUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl);
        service.setResourcePath(this.BLOG_PATH + page + queryParams);
        this.blogService = service;
    }
    getBlogPostsJSON() {
        this.blogService.getWebContent().subscribe((data) => {
            this.postsList = this.adaptEndpointResponseToPost(data.records);
            this.updatePostsIndex(data.pagination.total_records);
            this.totalPages = data.pagination.total_pages;
            this.store.dispatch([new src_app_store_actions_web_web_actions__WEBPACK_IMPORTED_MODULE_16__["SetIsLoadingPage"](false)]);
        });
    }
    adaptEndpointResponseToPost(data) {
        return data.map((post) => {
            return {
                mainImage: post.image,
                secondaryImage: post.image2,
                slug: post.id,
                title: post.title,
                content: post.text,
                date: post.createdAt,
                //tags: record.tag,
                status: post.status,
            };
        });
    }
    updatePostsIndex(totalNewPosts) {
        const totalCurrentPosts = this.postsIndex.length;
        if (totalCurrentPosts != totalNewPosts) {
            const postDiff = totalNewPosts - totalCurrentPosts;
            const factor = postDiff / Math.abs(postDiff);
            // If factor is positive add posts indexes, if it's negative remove posts indexes
            for (let i = totalCurrentPosts * factor; i < totalNewPosts * factor; i++) {
                if (factor > 0) {
                    this.postsIndex.push(i + 1);
                }
                else {
                    this.postsIndex.splice(i * factor - 1, 1);
                }
            }
        }
    }
    navigateToArchive(params) {
        this.router.navigate(["/blog", { title: params }]);
    }
    changePostPage(event) {
        const firstPostIndex = event[0] + this.pageSize - 1;
        this.activePage = firstPostIndex / this.pageSize;
        //this.setStaticService();
        this.setApiService(this.activePage, this.pageSize, this.queryParams);
        this.getBlogPostsJSON();
    }
    triggerChangePage(page) {
        if (page >= 1 && page <= this.totalPages)
            this.pagination.setPage(page);
    }
};
BlogArchiveComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_14__["GlobalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_15__["Store"] }
];
BlogArchiveComponent.propDecorators = {
    pagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["pagination", { static: false },] }]
};
BlogArchiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-blog-archive",
        template: _raw_loader_blog_archive_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_archive_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogArchiveComponent);



/***/ }),

/***/ "n/z8":
/*!*************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/categories-list/categories-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _categories_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-list.component.scss */ "U/NW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../categories */ "07Kd");




let CategoriesListComponent = class CategoriesListComponent {
    constructor() {
        this.filterByCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.categories = _categories__WEBPACK_IMPORTED_MODULE_3__["BLOG_CATEGORIES"];
    }
    ngOnInit() { }
    emitFilterByCategory() {
        this.filterByCategory.emit();
    }
};
CategoriesListComponent.ctorParameters = () => [];
CategoriesListComponent.propDecorators = {
    filterByCategory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
CategoriesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "blog-categories-list",
        template: `
    <div class="categories">
      <p class="categories-title">Categorías</p>
      <ul class="categories-list">
        <li class="categories-list-item">
          <a [routerLink]="['/blog']">
            Todas las entradas
          </a>
        </li>
        <li class="categories-list-item" *ngFor="let category of categories">
          <a [routerLink]="['/blog', { tag: category.id }]">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
        styles: [_categories_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], CategoriesListComponent);



/***/ }),

/***/ "nh8s":
/*!***********************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/social-sharing/social-sharing.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SocialSharingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharingComponent", function() { return SocialSharingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _social_sharing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-sharing.component.scss */ "12CM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "SrVf");




let SocialSharingComponent = class SocialSharingComponent {
    constructor() {
        this.facebookIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebookSquare"];
        this.twitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"];
    }
    ngOnInit() { }
};
SocialSharingComponent.ctorParameters = () => [];
SocialSharingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "social-sharing",
        template: `
    <div class="social-sharing">
      <span>Compartir</span>
      <span class="social-buttons">
        <fa-icon mat-fab shareButton="facebook" [title] [icon]="facebookIcon"></fa-icon>
        <fa-icon mat-fab shareButton="twitter" [icon]="twitterIcon"></fa-icon>
      </span>
    </div>
  `,
        styles: [_social_sharing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], SocialSharingComponent);



/***/ }),

/***/ "o04V":
/*!*******************************************************************!*\
  !*** ./src/app/web/pages/blog/post-card/post-card.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.image-wrapper {\n  position: relative;\n}\n.image-wrapper img {\n  width: 100%;\n}\n.image-wrapper .post-date {\n  background-color: #00809a;\n  bottom: 0;\n  color: #fff;\n  font-size: 4vw;\n  left: 0;\n  padding: 2vw;\n  position: absolute;\n  z-index: 10;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .image-wrapper .post-date {\n    font-size: 1.5vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .image-wrapper .post-date {\n    font-size: 1.5vw;\n    padding: 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .image-wrapper .post-date {\n    font-size: 1vw;\n  }\n}\n.post-content {\n  padding: 2vw 0;\n}\n.post-content .post-title {\n  color: darkslategray;\n  font-weight: bold;\n  font-size: 5vw;\n  margin-bottom: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .post-content .post-title {\n    font-size: 1.8vw;\n    margin-bottom: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .post-content .post-title {\n    font-size: 1.8vw;\n    margin-bottom: 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .post-content .post-title {\n    font-size: 1.15vw;\n  }\n}\n.post-content .post-excerpt {\n  color: gray;\n  font-size: 4vw;\n  font-weight: normal;\n  margin-bottom: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .post-content .post-excerpt {\n    font-size: 1.5vw;\n    margin-bottom: 1vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .post-content .post-excerpt {\n    font-size: 1.5vw;\n    margin-bottom: 1vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .post-content .post-excerpt {\n    font-size: 1vw;\n  }\n}\n.post-content .read-more {\n  color: gray;\n  font-size: 4vw;\n  text-transform: uppercase;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .post-content .read-more {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .post-content .read-more {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .post-content .read-more {\n    font-size: 1vw;\n  }\n}\n.post-content .read-more:hover {\n  text-decoration: none;\n}\n.post-content .read-more:hover::before {\n  left: 1vw;\n  transition: 1s left ease;\n}\n.post-content .read-more::before {\n  content: \"→\";\n  font-family: helvetica;\n  font-size: 8vw;\n  margin-right: 1vw;\n  position: relative;\n  left: 0;\n  transition: 0.5s left ease;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .post-content .read-more::before {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .post-content .read-more::before {\n    font-size: 2.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .post-content .read-more::before {\n    font-size: 2vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDU2hCO0VBQ0UseUJBVks7RUFXTCxXQUFBO0VBQ0EseUJBQUE7QURQRjtBQ1NFO0VBQ0Usc0JBQUE7RUFDQSxjQWhCRztBRFNQO0FDV0E7RUFDRSxjQXJCSztBRGFQO0FBVkE7RUFDRSxrQkFBQTtBQWFGO0FBWEU7RUFDRSxXQUFBO0FBYUo7QUFWRTtFQUNFLHlCQ1hHO0VEWUgsU0FBQTtFQUNBLFdDVkk7RURXSixjQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFZSjtBRVVJO0VGOUJGO0lBV0ksZ0JBQUE7SUFDQSxZQUFBO0VBYUo7QUFDRjtBRUlJO0VGOUJGO0lBZ0JJLGdCQUFBO0lBQ0EsWUFBQTtFQWNKO0FBQ0Y7QUVGSTtFRjlCRjtJQXFCSSxjQUFBO0VBZUo7QUFDRjtBQVhBO0VBQ0UsY0FBQTtBQWNGO0FBWkU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBY0o7QUVqQkk7RUZERjtJQU9JLGdCQUFBO0lBQ0Esa0JBQUE7RUFlSjtBQUNGO0FFdkJJO0VGREY7SUFZSSxnQkFBQTtJQUNBLGtCQUFBO0VBZ0JKO0FBQ0Y7QUU3Qkk7RUZERjtJQWlCSSxpQkFBQTtFQWlCSjtBQUNGO0FBZEU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFnQko7QUV4Q0k7RUZvQkY7SUFPSSxnQkFBQTtJQUNBLGtCQUFBO0VBaUJKO0FBQ0Y7QUU5Q0k7RUZvQkY7SUFZSSxnQkFBQTtJQUNBLGtCQUFBO0VBa0JKO0FBQ0Y7QUVwREk7RUZvQkY7SUFpQkksY0FBQTtFQW1CSjtBQUNGO0FBaEJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWtCSjtBRTlESTtFRnlDRjtJQU1JLGdCQUFBO0VBbUJKO0FBQ0Y7QUVuRUk7RUZ5Q0Y7SUFVSSxnQkFBQTtFQW9CSjtBQUNGO0FFeEVJO0VGeUNGO0lBY0ksY0FBQTtFQXFCSjtBQUNGO0FBbkJJO0VBQ0UscUJBQUE7QUFxQk47QUFuQk07RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUFxQlI7QUFqQkk7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtBQW1CTjtBRTdGSTtFRm1FQTtJQVVJLGdCQUFBO0VBb0JOO0FBQ0Y7QUVsR0k7RUZtRUE7SUFjSSxnQkFBQTtFQXFCTjtBQUNGO0FFdkdJO0VGbUVBO0lBa0JJLGNBQUE7RUFzQk47QUFDRiIsImZpbGUiOiJwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzY3NzL3Jlc3BvbnNpdmUnO1xuQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvc3QtZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAydnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgcGFkZGluZzogMXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgcGFkZGluZzogMXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIH1cbiAgfVxufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgcGFkZGluZzogMnZ3IDA7XG5cbiAgLnBvc3QtdGl0bGUge1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDR2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDEuMTV2dztcbiAgICB9XG4gIH1cblxuICAucG9zdC1leGNlcnB0IHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDR2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDF2dztcbiAgICB9XG4gIH1cblxuICAucmVhZC1tb3JlIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAxdnc7XG4gICAgICAgIHRyYW5zaXRpb246IDFzIGxlZnQgZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ+KGkic7XG4gICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgZm9udC1zaXplOiA4dnc7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiAuNXMgbGVmdCBlYXNlO1xuXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtYWxsLCBsYW5kc2NhcGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtZWRpdW0pIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xuICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "oIFJ":
/*!*************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/searcher/searcher.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-blue {\n  background-color: #00809a;\n  color: #fff;\n  border: 1px solid #00809a;\n}\n.btn-blue:hover {\n  background-color: #fff;\n  color: #00809a;\n}\n.primary-color {\n  color: #00809a;\n}\n.searcher {\n  border: 1px solid #909090;\n  border-radius: 6px;\n}\n.searcher .searcher-input {\n  border: none;\n  color: #555;\n  font-size: 4.5vw;\n  margin: 3% 0 3% 5%;\n  width: 80%;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .searcher .searcher-input {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .searcher .searcher-input {\n    font-size: 1.5vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .searcher .searcher-input {\n    font-size: 1vw;\n  }\n}\n.searcher .searcher-input:focus {\n  outline: none;\n}\n.searcher .searcher-button {\n  background: transparent;\n  border: none;\n  padding: 3%;\n  width: 15%;\n  font-size: 4vw;\n}\n@media only screen and (min-width: 320px) and (orientation: landscape) {\n  .searcher .searcher-button {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .searcher .searcher-button {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .searcher .searcher-button {\n    font-size: 1.2vw;\n  }\n}\n.searcher .searcher-button:focus {\n  outline: none;\n}\n.searcher .searcher-icon {\n  color: #909090;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NlYXJjaGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLHlCQVZLO0VBV0wsV0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVRTtFQUNFLHNCQUFBO0VBQ0EsY0FoQkc7QUNRUDtBRFlBO0VBQ0UsY0FyQks7QUNZUDtBQVRBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVlGO0FBVkU7RUFDRSxZQUFBO0VBQ0EsV0RMSTtFQ01KLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBWUo7QUNnQkk7RURqQ0Y7SUFRSSxnQkFBQTtFQWFKO0FBQ0Y7QUNXSTtFRGpDRjtJQVlJLGdCQUFBO0VBY0o7QUFDRjtBQ01JO0VEakNGO0lBZ0JJLGNBQUE7RUFlSjtBQUNGO0FBYkk7RUFDRSxhQUFBO0FBZU47QUFYRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWFKO0FDVEk7RURURjtJQVFJLGdCQUFBO0VBY0o7QUFDRjtBQ2RJO0VEVEY7SUFZSSxnQkFBQTtFQWVKO0FBQ0Y7QUNuQkk7RURURjtJQWdCSSxnQkFBQTtFQWdCSjtBQUNGO0FBZEk7RUFDRSxhQUFBO0FBZ0JOO0FBWkU7RUFDRSxjRG5EUTtBQ2lFWiIsImZpbGUiOiJzZWFyY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDA4MDlhO1xuJGdyZWVuOiAjODFiMDNlO1xuJGRhcmstZ3JlZW46ICMwMDcyMmU7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICM1NTU7XG4kZGFyay1ncmF5OiAjOTA5MDkwO1xuJHJlZDogI2YzNWY1ZjtcbiRjYW5jZWwtZ3JheTogIzlmYTliZDtcblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1jb2xvciB7XG4gIGNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCJzY3NzL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlc1wiO1xuXG4uc2VhcmNoZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyay1ncmF5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgLnNlYXJjaGVyLWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgIG1hcmdpbjogMyUgMCAzJSA1JTtcbiAgICB3aWR0aDogODAlO1xuXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChzbWFsbCwgbGFuZHNjYXBlKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWVkaXVtKSB7XG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoZXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMyU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBmb250LXNpemU6IDR2dztcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc21hbGwsIGxhbmRzY2FwZSkge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1lZGl1bSkge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XG4gICAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoZXItaWNvbiB7XG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gIH1cbn1cbiIsIi8vQHVzZSBcInNhc3M6bWFwXCI7XG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnLFxuICAgICAgICAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcycsXG4gICAgICAgICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgXCJzbWFsbFwiOiAzMjBweCxcbiAgICBcIm1lZGl1bVwiOiA3NjhweCxcbiAgICBcImxhcmdlXCI6IDEwMjRweFxuKTtcblxuJGRpcmVjdGlvbnM6IChcbiAgICBcImRvd25cIjogbWF4LFxuICAgIFwidXBcIjogbWluXG4pO1xuXG4kb3JpZW50YXRpb25zOiAoXG4gICAgXCJsYW5kc2NhcGVcIjogbGFuZHNjYXBlLFxuICAgIFwicG9ydHJhaXRcIjogcG9ydHJhaXRcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsICRkaXJlY3Rpb246IFwidXBcIikge1xuICAgICRtZWRpYS1xdWVyeTogXCJvbmx5IHNjcmVlbiBcIjtcbiAgICAkYnJlYWtwb2ludDogXCJcIjtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkc2l6ZSkge1xuICAgICAgICAkYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKTtcbiAgICB9XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbnMsICRkaXJlY3Rpb24pIHtcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwiZG93blwiIHtcbiAgICAgICAgJGJyZWFrcG9pbnQ6ICRicmVha3BvaW50IC0gMXB4O1xuICAgICAgfVxuICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKCN7bWFwLWdldCgkZGlyZWN0aW9ucywgJGRpcmVjdGlvbil9LXdpZHRoOiAjeyRicmVha3BvaW50fSkgXCI7XG4gICAgfVxuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRvcmllbnRhdGlvbnMsICRvcmllbnRhdGlvbikge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAob3JpZW50YXRpb246ICN7JG9yaWVudGF0aW9ufSlcIjtcbiAgICB9XG5cbiAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29sdW1ucygkbnVtYmVyKSB7XG4gIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDEyKSAqICN7JG51bWJlcn0pO1xufVxuXG5cblxuLy9cbiRicmVha3BvaW50cy1idDogKFxuICAgIFwic21hbGxcIjogc20sXG4gICAgXCJtZWRpdW1cIjogbWQsXG4gICAgXCJsYXJnZVwiOiBsZyxcbiAgICBcImxhcmdlclwiOiB4bCxcbik7XG5cbkBtaXhpbiBtZWRpYWJyZWFrKCRzaXplLCAkb3JpZW50YXRpb246IFwiXCIsJHNwZWNpZmljOiBmYWxzZSwkYnJlYWstbnVtYmVyOiBcIjBweFwiLCAkZGlyZWN0aW9uOiBcInVwXCIpIHtcbiAgICAkbWVkaWEtcXVlcnk6IFwic2NyZWVuIFwiO1xuICAgICRicmVha3BvaW50OiBcIlwiO1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtYnQsICRzaXplKSB7XG4gICAgICAgICRicmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cy1idCwgJHNpemUpO1xuICAgIH1cblxuICAgIEBpZiAkc3BlY2lmaWMge1xuICAgICAgICAkbWVkaWEtcXVlcnk6IFwiI3skbWVkaWEtcXVlcnl9IGFuZCAoI3ttYXAtZ2V0KCRkaXJlY3Rpb25zLCAkZGlyZWN0aW9uKX0td2lkdGg6ICN7JGJyZWFrLW51bWJlcn0pIFwiO1xuICAgIH1cblxuICAgIEBpZiBtYXAtaGFzLWtleSgkb3JpZW50YXRpb25zLCAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgJG1lZGlhLXF1ZXJ5OiBcIiN7JG1lZGlhLXF1ZXJ5fSBhbmQgKG9yaWVudGF0aW9uOiAjeyRvcmllbnRhdGlvbn0pXCI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgI3skbWVkaWEtcXVlcnl9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "q6Vt":
/*!*****************************************************************!*\
  !*** ./src/app/web/pages/blog/post-card/post-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-card.component.html */ "fwKD");
/* harmony import */ var _post_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-card.component.scss */ "o04V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es-VE */ "qRsU");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/js/clamp.min.js */ "BAKs");
/* harmony import */ var src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_7__);







Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5___default.a, "es");

let PostCardComponent = class PostCardComponent {
    constructor(globalService) {
        this.globalService = globalService;
    }
    ngOnInit() {
        if (this.globalService.isBrowser) {
            $clamp(this.title.nativeElement, { clamp: 3 });
            $clamp(this.excerpt.nativeElement, { clamp: 6 });
        }
    }
    getExcerpt() {
        return `${this.post.content.slice(0, 180)}...`;
    }
};
PostCardComponent.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }
];
PostCardComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["title", { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true },] }],
    excerpt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["excerpt", { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true },] }]
};
PostCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "blog-post-card",
        template: _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostCardComponent);



/***/ }),

/***/ "sJZk":
/*!**************************************************!*\
  !*** ./src/app/web/pages/blog/blog.component.ts ***!
  \**************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.component.html */ "CeaF");
/* harmony import */ var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss */ "Hbji");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





let BlogComponent = class BlogComponent {
    constructor(router) {
        this.router = router;
        this.isBlogArchive = true;
        this.coverData = {
            slides: [
                {
                    image: "./assets/images/background-blog2.png",
                },
            ],
        };
    }
    ngOnInit() {
        this.isBlogArchive = this.router.url.includes("/blog") && !this.router.url.includes("/post");
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-blog",
        template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogComponent);



/***/ }),

/***/ "w3M2":
/*!***************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/recent-post-card/recent-post-card.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RecentPostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPostCardComponent", function() { return RecentPostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _recent_post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent-post-card.component.scss */ "J0Ns");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "EcpT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es-VE */ "qRsU");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/js/clamp.min.js */ "BAKs");
/* harmony import */ var src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_clamp_min_js__WEBPACK_IMPORTED_MODULE_6__);






Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_5___default.a, "es");

let RecentPostCardComponent = class RecentPostCardComponent {
    constructor() {
        this.calendarIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
    }
    ngOnInit() {
        $clamp(this.title.nativeElement, { clamp: 4 });
    }
};
RecentPostCardComponent.ctorParameters = () => [];
RecentPostCardComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["recentPostTitle", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true },] }]
};
RecentPostCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "recent-post-card",
        template: `
    <div class="recent-post-card">
      <div class="image-wrapper">
        <img [src]="post.mainImage" [alt]="post.title + ' image'" />
      </div>
      <div #recentPostTitle class="recent-post-title">
        <a [routerLink]="['/blog/post', post.slug]">{{ post.title }}</a>
      </div>
      <div class="recent-post-data">
        <div class="recent-post-date">
          <fa-icon [icon]="calendarIcon"></fa-icon>
          {{ post.date | date: "mediumDate":"-0400":"es" }}
        </div>
      </div>
    </div>
  `,
        styles: [_recent_post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], RecentPostCardComponent);



/***/ }),

/***/ "zmt3":
/*!****************************************************************************************!*\
  !*** ./src/app/web/pages/blog/widgets/recent-post-card/recent-posts-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RecentPostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPostsListComponent", function() { return RecentPostsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _recent_posts_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent-posts-list.component.scss */ "6UNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let RecentPostsListComponent = class RecentPostsListComponent {
    constructor() {
        this.posts = [
            {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
                slug: "",
                image: "./assets/images/background-pillar-matematica.jpg",
                date: new Date(),
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
                slug: "",
                image: "./assets/images/background-pillar-matematica.jpg",
                date: new Date(),
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
                slug: "",
                image: "./assets/images/background-pillar-matematica.jpg",
                date: new Date(),
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
                slug: "",
                image: "./assets/images/background-pillar-matematica.jpg",
                date: new Date(),
            },
        ];
    }
    ngOnInit() { }
};
RecentPostsListComponent.ctorParameters = () => [];
RecentPostsListComponent.propDecorators = {
    posts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
RecentPostsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "recent-posts-list",
        template: `
    <div class="recent-posts">
      <p class="recent-posts-title">Artículos recientes</p>
      <ul class="recent-posts-list">
        <li class="recent-posts-list-item" *ngFor="let post of posts">
          <recent-post-card [post]="post"></recent-post-card>
        </li>
      </ul>
    </div>
  `,
        styles: [_recent_posts_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], RecentPostsListComponent);



/***/ })

}]);
//# sourceMappingURL=pages-blog-blog-module-es2015.js.map