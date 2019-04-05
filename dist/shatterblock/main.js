(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluZGFzaGJvcmQvYWRtaW5kYXNoYm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.html":
/*!************************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-main-nav>\n\n        <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\"> User Table &nbsp;/&nbsp; </a> Panding model application </mat-toolbar>\n\n        <lib-listing *ngIf=\"pendingmodelapplicationarray1!=null && notpendingapplication_view.length>0\"  [datasource]=\"pendingmodelapplicationarray1\" [skip]=\"pendingmodelapplicationarray_skip1\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header1\" ></lib-listing>\n\n\n        <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> User Table &nbsp;/&nbsp; </a> User List</mat-toolbar>\n\n\n        <lib-listing *ngIf=\"pendingmodelapplicationarray!=null && pendingmodelapplicationarray.length>0\"  [datasource]=\"pendingmodelapplicationarray\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" ></lib-listing>\n\n\n        <!--<lib-listing *ngIf=\"brandarray!=null && brandarray.length>0\"  [datasource]=\"brandarray\" [skip]=\"pendingmodelapplicationarray_skip1\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header1\" ></lib-listing>\n\n-->\n\n\n\n</app-main-nav>\n\n\n<!--\n\n&lt;!&ndash;\n<lib-listing *ngIf=\"brandarray!=null && brandarray.length>0\"  [datasource]=\"brandarray\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" ></lib-listing>\n\n\n<lib-listing *ngIf=\"notpendingapplication_view!=null && notpendingapplication_view.length>0\"  [datasource]=\"notpendingapplication_view\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" ></lib-listing>\n&ndash;&gt;\n-->\n"

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.ts ***!
  \**********************************************************/
/*! exports provided: AdmindashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashbordComponent", function() { return AdmindashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var AdmindashbordComponent = /** @class */ (function () {
    function AdmindashbordComponent(router, route, apiservice) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.apiservice = apiservice;
        this.pendingmodelapplicationarray1 = [];
        this.brandarray = [];
        // public endpoint = 'datalist';
        this.pendingmodelapplicationarray = [];
        this.notpendingapplication_view = [];
        this.pendingmodelapplicationarray_skip = ['type', 'password', 'Contracts_Signed', 'created_at', '_id', 'username', 'email', 'status', 'date_iso_dateformat', 'regDate'];
        this.pendingmodelapplicationarray_modify_header = { 'date': 'Date', 'Age': 'Age', 'name': 'Name', 'submissionprocess': 'Submission Process', 'contractssigned': 'Contracts Signed' };
        this.pendingmodelapplicationarray_modify_header1 = { 'dateformat': 'Date', 'username': 'Username', 'status': 'Status', 'email': 'Email' };
        this.pendingmodelapplicationarray_skip1 = ['_id'];
        this.adminlist = [];
        // this.datasource='pendingapplication_view';
        this.apiservice.getData({ 'source': 'model_pending_and_notpending_application_view' }).subscribe(function (res) {
            var result;
            result = res;
            console.log('result');
            console.log(result);
            console.log(result.res);
            _this.pendingmodelapplicationarray = result.res;
            _this.pendingmodelapplicationarray[0].Age = ''; // extera column add in matHeaderCellDef
        });
    }
    AdmindashbordComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('data in oninit');
        this.route.data.forEach(function (data) {
            // PRE LOAD DATA PRIOR
            console.log(data);
            console.log('data from route ... !!!');
            console.log('json', data['results']);
            _this.pendingmodelapplicationarray1 = data['results'].item.pendingapplication_view;
            console.log('this.pendingmodelapplicationarray1');
            console.log(_this.pendingmodelapplicationarray1);
            _this.brandarray = data['results'].item.brand;
            // this.brandarray1=data['results'].item.notpendingapplication_view;
            _this.notpendingapplication_view = data['results'].item.notpendingapplication_view;
        });
    };
    AdmindashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admindashbord',
            template: __webpack_require__(/*! ./admindashbord.component.html */ "./src/app/admindashbord/admindashbord.component.html"),
            styles: [__webpack_require__(/*! ./admindashbord.component.css */ "./src/app/admindashbord/admindashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AdmindashbordComponent);
    return AdmindashbordComponent;
}());



/***/ }),

/***/ "./src/app/adminform/adminform.component.css":
/*!***************************************************!*\
  !*** ./src/app/adminform/adminform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluZm9ybS9hZG1pbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminform/adminform.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminform/adminform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n\n  <mat-toolbar>ShatterBlock Dashboard </mat-toolbar>\n  <mat-divider></mat-divider>\n  <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> Dashboard &nbsp;/&nbsp; </a> Add</mat-toolbar>\n\n  <mat-card class=\"example-card adminform\">\n    <mat-card-header>\n\n      <mat-card-title>Go to Admin Form</mat-card-title>\n\n    </mat-card-header>\n    <mat-card-content>\n      <form #adminForm  class=\"adminform\">\n        <div class=\"example-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Input\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <textarea matInput placeholder=\"Textarea\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Select\">\n              <mat-option value=\"option\">Option</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Textarea\"></textarea>\n        </mat-form-field>\n\n        <button mat-flat-button color=\"primary\">Add </button>\n      </form>\n    </mat-card-content>\n\n  </mat-card>\n\n</app-main-nav>\n\n"

/***/ }),

/***/ "./src/app/adminform/adminform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminform/adminform.component.ts ***!
  \**************************************************/
/*! exports provided: AdminformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminformComponent", function() { return AdminformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminformComponent = /** @class */ (function () {
    function AdminformComponent() {
    }
    AdminformComponent.prototype.ngOnInit = function () {
    };
    AdminformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminform',
            template: __webpack_require__(/*! ./adminform.component.html */ "./src/app/adminform/adminform.component.html"),
            styles: [__webpack_require__(/*! ./adminform.component.css */ "./src/app/adminform/adminform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminformComponent);
    return AdminformComponent;
}());



/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGVmdHBhbmVsL2FkbWlubGVmdHBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--*ngIf=\"router.url=='adminform'\"-->\n\n<!--<mat-list role=\"list\" class=\"left_nav\"  >-->\n<!--  <a mat-list-item role=\"listitem\">Dashboard</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n<!--  <a mat-list-item role=\"listitem\"  [routerLink]=\"['/adminlist']\">Admin List</a>-->\n\n<!--  <a mat-list-item role=\"listitem\" [routerLink]=\"['/adminform']\">Add Admin</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n<!--  <a mat-list-item role=\"listitem\">Home</a>-->\n\n<!--</mat-list>-->\n"

/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminleftpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminleftpanelComponent", function() { return AdminleftpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminleftpanelComponent = /** @class */ (function () {
    function AdminleftpanelComponent() {
    }
    AdminleftpanelComponent.prototype.ngOnInit = function () {
    };
    AdminleftpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminleftpanel',
            template: __webpack_require__(/*! ./adminleftpanel.component.html */ "./src/app/adminleftpanel/adminleftpanel.component.html"),
            styles: [__webpack_require__(/*! ./adminleftpanel.component.css */ "./src/app/adminleftpanel/adminleftpanel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminleftpanelComponent);
    return AdminleftpanelComponent;
}());



/***/ }),

/***/ "./src/app/adminlist/adminlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGlzdC9hZG1pbmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminlist/adminlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-drawer-container>\n  <mat-drawer #snav [mode]=\"'side'\" hasbackdrop=\"false\" opened>\n   <app-adminleftpanel></app-adminleftpanel>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <mat-toolbar>ShatterBlock Dashboard </mat-toolbar>\n    <mat-divider></mat-divider>\n    <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> User Table &nbsp;/&nbsp; </a> User List</mat-toolbar>\n\n\n    <!--for filtering-->\n\n\n\n\n    <mat-grid-list cols=\"2\" rowHeight=\"80px\">\n      <mat-grid-tile>\n        <mat-form-field class=\"filter_input\">\n          <input class=\"filter_input\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search By Filter\">\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile class=\"btn_wrapper\">\n        <button mat-raised-button (click)=\"toggle()\" >{{buttonName}}</button>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"['/adminform']\">Add</button>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"openDialog()\">Add with Modal</button>\n\n      </mat-grid-tile>\n    </mat-grid-list>\n\n\n\n<!--class=\"mat-elevation-z8\" for box-shadow-->\n    <ng-container *ngIf=\"show\">\n    <table mat-table [dataSource]=\"dataSource\" >\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> <b>Status</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef><b>Name</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef> <b>Username</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> <b>Description</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> <b>Actions</b> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div class=\"action_button_wrap\">\n            <button mat-flat-button color=\"primary\"> Edit</button>\n            <button mat-flat-button color=\"warn\">Delete</button>\n          </div>\n        </td>\n      </ng-container>\n      <!--<i class=\"material-icons\">  delete_sweep </i>-->\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    </ng-container>\n\n\n\n    <!-- for grid view structure-->\n        <ng-container *ngIf=\"hide\">\n<!--          <div>{{dataSource.length}}</div>-->\n    <mat-grid-list cols=\"4\" rowHeight=\"400px\" class=\"gridview_list\" [gutterSize]=\"'10px'\">\n\n      <mat-grid-tile *ngFor=\"let data of dataSource \">\n          <h5>dvfddf</h5>\n          <h5>Name: {{ data.name}}</h5>\n          <h5>ID: {{ data.status}}</h5>\n          <h5>User Name: {{ data.username}}</h5>\n          <h5>Address: {{ data.description}}</h5>\n        <button mat-raised-button color=\"primary\">View More</button>\n      </mat-grid-tile>\n\n\n\n    </mat-grid-list>\n\n        </ng-container>\n\n\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/adminlist/adminlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.ts ***!
  \**************************************************/
/*! exports provided: AdminlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminlistComponent", function() { return AdminlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");






var AdminlistComponent = /** @class */ (function () {
    function AdminlistComponent(dialog, apiservice, router, route) {
        this.dialog = dialog;
        this.apiservice = apiservice;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['status', 'name', 'username', 'description', 'actions'];
        this.endpoint = 'datalist';
        //  toogle views
        this.show = true;
        this.hide = false;
        this.buttonName = 'ListView';
    }
    AdminlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            console.log('data in resolve');
            console.log(data);
            _this.dataSource = data['results'].item.brand;
            console.log('this.dataSource');
            console.log(_this.dataSource);
            console.log(_this.dataSource.length);
            console.log(_this.dataSource[0].name);
            console.log(_this.dataSource);
        });
    };
    AdminlistComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_3__["AdminmodalformComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AdminlistComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.hide = !this.hide;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "GridView";
        else
            this.buttonName = "ListView";
    };
    ;
    AdminlistComponent.prototype.applyFilter = function (filterValue) {
        // this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminlist',
            template: __webpack_require__(/*! ./adminlist.component.html */ "./src/app/adminlist/adminlist.component.html"),
            styles: [__webpack_require__(/*! ./adminlist.component.css */ "./src/app/adminlist/adminlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminlistComponent);
    return AdminlistComponent;
}());



/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubWFuYWdlbWVudC9hZG1pbm1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmanagementComponent", function() { return AdminmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminmanagementComponent = /** @class */ (function () {
    function AdminmanagementComponent() {
    }
    AdminmanagementComponent.prototype.ngOnInit = function () {
    };
    AdminmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminmanagement',
            template: __webpack_require__(/*! ./adminmanagement.component.html */ "./src/app/adminmanagement/adminmanagement.component.html"),
            styles: [__webpack_require__(/*! ./adminmanagement.component.css */ "./src/app/adminmanagement/adminmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminmanagementComponent);
    return AdminmanagementComponent;
}());



/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.css":
/*!*************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubW9kYWxmb3JtL2FkbWlubW9kYWxmb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.html":
/*!**************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card adminmodalform\">\n  <mat-card-header>\n    <mat-card-title>Go to Admin Modal Form</mat-card-title>\n\n  </mat-card-header>\n  <mat-card-content >\n    <form #adminForm  >\n      <div class=\"example-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Input\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <textarea matInput placeholder=\"Textarea\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Select\">\n            <mat-option value=\"option\">Option</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Textarea\"></textarea>\n      </mat-form-field>\n\n      <button mat-flat-button color=\"primary\">Add </button>\n    </form>\n  </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.ts ***!
  \************************************************************/
/*! exports provided: AdminmodalformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmodalformComponent", function() { return AdminmodalformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminmodalformComponent = /** @class */ (function () {
    function AdminmodalformComponent() {
    }
    AdminmodalformComponent.prototype.ngOnInit = function () {
    };
    AdminmodalformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminmodalform',
            template: __webpack_require__(/*! ./adminmodalform.component.html */ "./src/app/adminmodalform/adminmodalform.component.html"),
            styles: [__webpack_require__(/*! ./adminmodalform.component.css */ "./src/app/adminmodalform/adminmodalform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminmodalformComponent);
    return AdminmodalformComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService
    // public jwtHelper: JwtHelperService,
    // private loggedinService: LoggedinService
    ) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["API_URL"];
        this._url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["API_URL"];
        this.resetpassword = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['resetpaswordurl'];
        console.log('this.domain');
        console.log(this.domain);
    }
    ApiService.prototype.isTokenExpired = function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    ApiService.prototype.getclientip = function () {
        console.log('endpoint');
        // this.isTokenExpired()
        var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getEndpoint = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        // this.isTokenExpired()
        var result = this._http.post(this._url + endpoint.source, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        console.log(result);
        return result;
    };
    ApiService.prototype.getData = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('id'));
        console.log(this.cookieService.get('id'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        console.log('httpOptions');
        console.log(httpOptions);
        // this.isTokenExpired()
        var result = this._http.post(this._url + 'datalist', endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    // getData end
    /*
      getData1(endpoint: any) {
        let data={source:"pending_and_notpending_application_view" , token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NTQzNjEzNjQsImlhdCI6MTU1NDI3NDk2NH0.vvJHBuA8AQj5crasnbKAYW9XgRQipeGN-COLpjTnUGk'};
        // this.isTokenExpired()
        var result = this._http.post(this._url + 'datalist', data).pipe(map(res => res));
    
        return result;
      }*/
    ApiService.prototype.postData = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postDatawithoutToken = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postlogin = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    }; // postData end
    /*
      putData(endpoint:any, data, id:any) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.cookieService.get('jwttoken')
          })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log(this.cookieService.get('id'));
        console.log("endpoint");
        console.log(endpoint);
        var result = this._http.put(this.getEndpointUrl(endpoint)+'/'+id, JSON.stringify(data), httpOptions).pipe(map(res => res));
        return result;
      }*/
    ApiService.prototype.putData = function (endpoint, data, id, is_cache_buster) {
        if (is_cache_buster === void 0) { is_cache_buster = true; }
        if (is_cache_buster == true) {
            var ran = Math.floor(Math.random() * 10000) + 1;
            var cache_buster = '?cache=' + ran.toString();
            endpoint = endpoint + cache_buster;
        }
        this.isTokenExpired();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this._http.put(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        return result;
    }; //end putData
    ApiService.prototype.getEndpointUrl = function (endpoint) {
        return this._url + endpoint;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
            // public jwtHelper: JwtHelperService,
            // private loggedinService: LoggedinService
        ])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminmanagement/adminmanagement.component */ "./src/app/adminmanagement/adminmanagement.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brandmanagement/brandmanagement.component */ "./src/app/brandmanagement/brandmanagement.component.ts");
/* harmony import */ var _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./influencersmanagement/influencersmanagement.component */ "./src/app/influencersmanagement/influencersmanagement.component.ts");
/* harmony import */ var _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./influencersdashbord/influencersdashbord.component */ "./src/app/influencersdashbord/influencersdashbord.component.ts");
/* harmony import */ var _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branddashbord/branddashbord.component */ "./src/app/branddashbord/branddashbord.component.ts");
/* harmony import */ var _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admindashbord/admindashbord.component */ "./src/app/admindashbord/admindashbord.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgatepassword/forgatepassword.component */ "./src/app/forgatepassword/forgatepassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adminlist/adminlist.component */ "./src/app/adminlist/adminlist.component.ts");
/* harmony import */ var _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminform/adminform.component */ "./src/app/adminform/adminform.component.ts");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");
/* harmony import */ var _resolveservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolveservice */ "./src/app/resolveservice.ts");
/* harmony import */ var _contract_contract_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contract/contract.component */ "./src/app/contract/contract.component.ts");


















var routes = [
    { path: "admin", component: _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_3__["AdminmanagementComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "brand", component: _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__["BrandmanagementComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: "influencers", component: _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_6__["InfluencersmanagementComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: "influencersdashboard", component: _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_7__["InfluencersdashbordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: "contract", component: _contract_contract_component__WEBPACK_IMPORTED_MODULE_17__["ContractComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    // { path: "adminlist", component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'users', condition: {} }},
    { path: "branddashboard", component: _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_8__["BranddashbordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_16__["Resolveservice"] }, data: { source: 'admindashboard' } },
    { path: "admindashboard", component: _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashbordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_16__["Resolveservice"] }, data: { source: 'admindashboard' } },
    { path: 'forgetpassword', component: _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_11__["ForgatepasswordComponent"] },
    { path: 'resetpassword/:token', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_12__["ChangepasswordComponent"] },
    { path: 'adminlist', component: _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_13__["AdminlistComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_16__["Resolveservice"] }, data: { source: 'admindashboard', condition: {} } },
    { path: 'adminform', component: _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_14__["AdminformComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'adminmodalform', component: _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_15__["AdminmodalformComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shatterblock';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material-module */ "./src/material-module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brandmanagement/brandmanagement.component */ "./src/app/brandmanagement/brandmanagement.component.ts");
/* harmony import */ var _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminmanagement/adminmanagement.component */ "./src/app/adminmanagement/adminmanagement.component.ts");
/* harmony import */ var _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./influencersmanagement/influencersmanagement.component */ "./src/app/influencersmanagement/influencersmanagement.component.ts");
/* harmony import */ var _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admindashbord/admindashbord.component */ "./src/app/admindashbord/admindashbord.component.ts");
/* harmony import */ var _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./branddashbord/branddashbord.component */ "./src/app/branddashbord/branddashbord.component.ts");
/* harmony import */ var _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./influencersdashbord/influencersdashbord.component */ "./src/app/influencersdashbord/influencersdashbord.component.ts");
/* harmony import */ var _app_resolveservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/resolveservice */ "./src/app/resolveservice.ts");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgatepassword/forgatepassword.component */ "./src/app/forgatepassword/forgatepassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adminlist/adminlist.component */ "./src/app/adminlist/adminlist.component.ts");
/* harmony import */ var _adminleftpanel_adminleftpanel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./adminleftpanel/adminleftpanel.component */ "./src/app/adminleftpanel/adminleftpanel.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./adminform/adminform.component */ "./src/app/adminform/adminform.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var listing_angular7__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! listing-angular7 */ "./node_modules/listing-angular7/fesm5/listing-angular7.js");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _contract_contract_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./contract/contract.component */ "./src/app/contract/contract.component.ts");






















// import { AmingridlistComponent } from './amingridlist/amingridlist.component';

//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';
//MATERIAL

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_10__["BrandmanagementComponent"],
                _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_11__["AdminmanagementComponent"],
                _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_12__["InfluencersmanagementComponent"],
                _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__["AdmindashbordComponent"],
                _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_14__["BranddashbordComponent"],
                _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_15__["InfluencersdashbordComponent"],
                _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgatepasswordComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__["ChangepasswordComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_38__["ListingComponent"],
                _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_21__["AdminlistComponent"],
                _adminleftpanel_adminleftpanel_component__WEBPACK_IMPORTED_MODULE_22__["AdminleftpanelComponent"],
                _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_28__["AdminformComponent"],
                _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_31__["AdminmodalformComponent"],
                _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__["ResetpasswordComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__["Dialogtest"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_35__["MainNavComponent"], _contract_contract_component__WEBPACK_IMPORTED_MODULE_39__["ContractComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                //MATERIAL
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                listing_angular7__WEBPACK_IMPORTED_MODULE_33__["ListingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_36__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_37__["MatListModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _app_resolveservice__WEBPACK_IMPORTED_MODULE_16__["Resolveservice"], _app_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__["Dialogtest"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



// import { JwtHelperService } from '@auth0/angular-jwt';

// import { tokenNotExpired } from 'angular2-jwt';
// import { LoggedinService } from './loggedin.service';
// import { BusyService } from '../busy.service';


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, _apiService, cookieService
    // private loggedinService: LoggedinService
    ) {
        this.router = router;
        this.http = http;
        this._apiService = _apiService;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('in auth guard');
        console.log(this.cookieService.get('jwttoken'));
        if (this.cookieService.get('jwttoken') == null || this.cookieService.get('jwttoken').length < 10) {
            // alert(7);
            this.router.navigate(['/']);
        }
        else
            return true;
        /*
        private loggedinService: LoggedinService,
         if (tokenNotExpired()) {
           
     
           this.loggedinService.announceLoggedin(true);
           return true;
         }
         */
        //this.loggedinService.announceLoggedin(false);
        //localStorage.removeItem('id_token');
        //this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
            // private loggedinService: LoggedinService
        ])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kZGFzaGJvcmQvYnJhbmRkYXNoYm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.html":
/*!************************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-main-nav>\n\n<!--  <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\"> User Table &nbsp;/&nbsp; </a> Panding model application </mat-toolbar>-->\n\n  <!--<lib-listing *ngIf=\"pendingmodelapplicationarray1!=null && notpendingapplication_view.length>0\"  [datasource]=\"pendingmodelapplicationarray1\" [skip]=\"pendingmodelapplicationarray_skip1\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header1\" ></lib-listing>\n-->\n\n  <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> User Table &nbsp;/&nbsp; </a> User List</mat-toolbar>\n\n\n  <lib-listing *ngIf=\"pendingmodelapplicationarray!=null && pendingmodelapplicationarray.length>0\"  [datasource]=\"pendingmodelapplicationarray\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" ></lib-listing>\n\n\n  <!--<lib-listing *ngIf=\"brandarray!=null && brandarray.length>0\"  [datasource]=\"brandarray\" [skip]=\"pendingmodelapplicationarray_skip1\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header1\" ></lib-listing>\n\n-->\n\n\n\n</app-main-nav>\n"

/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.ts ***!
  \**********************************************************/
/*! exports provided: BranddashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranddashbordComponent", function() { return BranddashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var BranddashbordComponent = /** @class */ (function () {
    function BranddashbordComponent(router, route, apiservice) {
        this.router = router;
        this.route = route;
        this.apiservice = apiservice;
        this.pendingmodelapplicationarray = [];
        this.notpendingapplication_view = [];
        this.pendingmodelapplicationarray_skip = ['type', 'password', 'Contracts_Signed', 'created_at', '_id', 'username', 'email', 'status', 'date_iso_dateformat', 'regDate'];
        this.pendingmodelapplicationarray_modify_header = { 'date': 'Date', 'name': 'Name', 'submissionprocess': 'Submission Process', 'contractssigned': 'Contracts Signed' };
    }
    BranddashbordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            console.log('data');
            console.log(data['results']);
            _this.pendingmodelapplicationarray = data['results'].item.brand;
        });
    };
    BranddashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branddashbord',
            template: __webpack_require__(/*! ./branddashbord.component.html */ "./src/app/branddashbord/branddashbord.component.html"),
            styles: [__webpack_require__(/*! ./branddashbord.component.css */ "./src/app/branddashbord/branddashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BranddashbordComponent);
    return BranddashbordComponent;
}());



/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kbWFuYWdlbWVudC9icmFuZG1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  brandmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: BrandmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandmanagementComponent", function() { return BrandmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrandmanagementComponent = /** @class */ (function () {
    function BrandmanagementComponent() {
    }
    BrandmanagementComponent.prototype.ngOnInit = function () {
    };
    BrandmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brandmanagement',
            template: __webpack_require__(/*! ./brandmanagement.component.html */ "./src/app/brandmanagement/brandmanagement.component.html"),
            styles: [__webpack_require__(/*! ./brandmanagement.component.css */ "./src/app/brandmanagement/brandmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrandmanagementComponent);
    return BrandmanagementComponent;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\" *ngIf=\"show\">\n    <mat-card-subtitle [formGroup]=\"myForm\">\n\n      <h2>Reset Password</h2>\n      <!--<p>welcome back!</p>-->\n      <!--<mat-error class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</mat-error>-->\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\">\n        <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Minimum length for password is 4!</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" [formControl]=\"myForm.controls['confirmpassword']\" >\n        <mat-error *ngIf=\"!myForm.controls['confirmpassword'].valid && myForm.controls['confirmpassword'].touched\">Password does not match </mat-error>\n        <!--<mat-error *ngIf=\"myForm.hasError('machpassword')\">Password don't mach</mat-error>-->\n      </mat-form-field>\n\n      <mat-card-content >\n        <button mat-button [disabled]=\"!myForm.valid\" (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Reset Password</button>\n      </mat-card-content>\n\n      <!--<mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>-->\n\n\n\n\n    </mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent, Dialogtest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogtest", function() { return Dialogtest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");






// import { CookieService } from 'ngx-cookie-service';

var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(_http, fb, router, route, apiService, dialog) {
        var _this = this;
        this._http = _http;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.dialog = dialog;
        this.show = false;
        this.endpoint = 'resetpasswordvalidate';
        this.endpoint1 = 'updatepasswordwhenresetiig';
        this.route.params.subscribe(function (params) {
            _this.accesscode = params['token'];
            console.log(_this.accesscode);
            _this.getuserdetails();
        });
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)])],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: this.machpassword('password', 'confirmpassword') });
    };
    ChangepasswordComponent.prototype.machpassword = function (passwordkye, confirmpasswordkye) {
        return function (group) {
            var passwordInput = group.controls[passwordkye], confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        };
    };
    ChangepasswordComponent.prototype.getuserdetails = function () {
        var _this = this;
        var data = { temp_forgetpass_key: this.accesscode };
        this.result = this.apiService.postDatawithoutToken(this.endpoint, data).subscribe(function (res) {
            var result = {};
            result = res;
            console.log('result.item');
            if (result.status == 'success') {
                _this.show = true;
                _this.id = result.data._id;
                // this.showmessage = 'We’ve sent an email to this address to reset your password.';
            }
            if (result.status == 'error') {
                console.log('open dialog');
                var dialogRef = _this.dialog.open(Dialogtest, {
                    // width: '250px',
                    data: { id: result.msg },
                });
                _this.error = result.msg;
            }
        });
    };
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var x;
        var data = { _id: this.id, password: this.myForm.value.password };
        console.log(data);
        console.log(this.myForm.value.password);
        console.log(this.myForm.value.confirmpassword);
        for (x in this.myForm.value) {
            console.log(this.myForm.controls[x]);
            this.myForm.controls[x].markAsTouched();
        }
        if (this.myForm.valid) {
            this.result = this.apiService.postDatawithoutToken(this.endpoint1, data).subscribe(function (res) {
                var result = {};
                result = res;
                console.log('result.item');
                console.log(result);
                if (result.status == 'success') {
                    _this.router.navigate(['/login']);
                }
                if (result.status == 'error') {
                    var dialogRef = _this.dialog.open(Dialogtest, {});
                    _this.error = result.msg;
                }
                /*    // console.log(result.item);
                    if (result.status == 'error1') {
                      this.errormg = result.msg;
                    }
                    if (result.status == 'error2') {
                      this.errormg = result.msg;
                    }
                    if (result.status == 'success') {
                      this.showmessage = 'We’ve sent an email to this address to reset your password.';
                    }*/
            });
        }
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());

var Dialogtest = /** @class */ (function () {
    function Dialogtest(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.error = data.id;
    }
    Dialogtest.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Dialogtest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialogtest',
            template: __webpack_require__(/*! ./modal.html */ "./src/app/changepassword/modal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], Dialogtest);
    return Dialogtest;
}());



/***/ }),

/***/ "./src/app/changepassword/modal.html":
/*!*******************************************!*\
  !*** ./src/app/changepassword/modal.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom_modal modal_wrapper\">\n    <div mat-dialog-content >\n        <!--    <mat-dialog-content>user can't be verified</mat-dialog-content>-->\n        <mat-dialog-content  class=\"error_msg\" *ngIf=\"error!=''\">{{error}}</mat-dialog-content>\n    </div>\n    <div mat-dialog-actions class=\"action_btn\">\n        <!--    <button mat-button (click)=\"onNoClick()\">No Thanks</button>-->\n        <button class=\"cancel_button\" mat-button [mat-dialog-close] cdkFocusInitial>Ok</button>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/contract/contract.component.css":
/*!*************************************************!*\
  !*** ./src/app/contract/contract.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0L2NvbnRyYWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contract/contract.component.html":
/*!**************************************************!*\
  !*** ./src/app/contract/contract.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [formGroup]=\"myFrom\">\n <!-- <mat-form-field>\n    <input matInput type=\"number\" formControlName=\"fname\" >\n  </mat-form-field>-->\n<!--  <br>-->\n  <mat-form-field>\n    <input matInput type=\"number\" formControlName=\"status\">\n  </mat-form-field>\n  <br>\n  <mat-button-toggle (click)=\"onSubmit()\">\n    submit\n  </mat-button-toggle>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/contract/contract.component.ts":
/*!************************************************!*\
  !*** ./src/app/contract/contract.component.ts ***!
  \************************************************/
/*! exports provided: ContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractComponent", function() { return ContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContractComponent = /** @class */ (function () {
    function ContractComponent(apiservice, router, route, fb) {
        this.apiservice = apiservice;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.endpoint = 'statusupdate';
        this.myFrom = this.fb.group({
            // fname: ['',Validators.required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        // this.apiservice.putData( this.endpoint, {}, i )
    }
    ContractComponent.prototype.ngOnInit = function () {
        this.id = this.apiservice.cookieService.get('id');
        console.log(this.apiservice.cookieService.get('id'));
    };
    ContractComponent.prototype.onSubmit = function () {
        var data = this.myFrom.value;
        console.log(data);
        data.id = this.id;
        console.log(data);
        this.apiservice.putData(this.endpoint, data, this.id, false).subscribe(function (res) {
            var result;
            result = res;
            console.log(result);
        });
        /*this.apiservice.getData(this.endpoint).subscribe( res =>{
          let result: any;
          console.log(result);
        })*/
    };
    ContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract',
            template: __webpack_require__(/*! ./contract.component.html */ "./src/app/contract/contract.component.html"),
            styles: [__webpack_require__(/*! ./contract.component.css */ "./src/app/contract/contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ContractComponent);
    return ContractComponent;
}());



/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.mat-card{\n    display: block;\n    text-align: center;\n    margin-top: 121px;\n    width: auto;\n    border: none;\n    box-shadow: none;\n    overflow: hidden;\n    max-width: 100%;\n    margin: 119px auto;\n    margin-right: 523px;\n    margin-left: 500px;\n    margin-top: 273px;\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2F0ZXBhc3N3b3JkL2ZvcmdhdGVwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQyIsImZpbGUiOiJzcmMvYXBwL2ZvcmdhdGVwYXNzd29yZC9mb3JnYXRlcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4ubWF0LWNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEyMXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTE5cHggYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDUyM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNzNweDtcbn1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card class=\"mat-card\">\n  <mat-card-title>Forgate Password</mat-card-title>\n  &lt;!&ndash;<mat-card-subtitle>Welcome back</mat-card-subtitle>&ndash;&gt;\n\n\n\n  <mat-card-subtitle [formGroup]=\"myForm\" (autocomplete)=\"on\">\n\n    <mat-form-field>\n      <input matInput placeholder=\"Email id\" [formControl]=\"myForm.controls['email']\" >\n      <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Email field can not be blank</span>\n    </mat-form-field>\n    <br>\n    <button mat-button [disabled]=\"!myForm.valid\" (click)=\"forgatPassword()\" color=\"primary\">Forgate Password</button>\n\n\n  </mat-card-subtitle>\n</mat-card>-->\n\n\n\n<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\">\n    <mat-card-subtitle [formGroup]=\"myForm\">\n\n      <h2>Forget Password</h2>\n      <!--<p>welcome back!</p>-->\n      <span class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</span>\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Email\" [formControl]=\"myForm.controls['email']\" >\n        <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Email field can not be blank</span>\n        <span></span>\n      </mat-form-field>\n\n      <!--<mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n        <span  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Password field can not be blank</span>\n      </mat-form-field>-->\n      <mat-card-content >\n        <button mat-button (click)=\"forgetPassword()\" class=\"s_getmyoffer_login_button\"  >Send Email</button>\n      </mat-card-content>\n\n      <!--<mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>-->\n\n\n\n\n    </mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgatepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgatepasswordComponent", function() { return ForgatepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");





// import { CookieService } from 'ngx-cookie-service';

var ForgatepasswordComponent = /** @class */ (function () {
    function ForgatepasswordComponent(_http, fb, router, apiService) {
        this._http = _http;
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.endpoint = 'sendforgotpasswordemail';
        this.endpoint1 = 'resetpassword';
        this.url1 = '';
        this.serverurl = '';
        this.errormg = '';
        this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        this.serverurl = (this.url1 + this.endpoint);
        console.log(this.serverurl);
    }
    ForgatepasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        });
    };
    ForgatepasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        var x;
        var data = this.myForm.value;
        console.log('data');
        console.log(data);
        for (x in this.myForm.value) {
            this.myForm.controls[x].markAsTouched();
        }
        data.websiteurl = this.apiService.resetpassword + this.endpoint1 + '/';
        console.log('data.websiteurl');
        console.log(data.websiteurl);
        this.result = this.apiService.postData(this.endpoint, data).subscribe(function (res) {
            var result = {};
            result = res;
            console.log('result.item');
            // console.log(result.item);
            if (result.status == 'error1') {
                _this.errormg = result.msg;
            }
            if (result.status == 'error2') {
                _this.errormg = result.msg;
            }
        });
        /*
        this._http.post(this.serverurl, data).subscribe(res => {
          let result: any = {};
          result = res;
          console.log('result.item');
          // console.log(result.item);
          if (result.status == 'error1') {
            this.errormg = result.msg;
          }
          if (result.status == 'error2') {
            this.errormg = result.msg;
          }
        });
        */
    };
    ForgatepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgatepassword',
            template: __webpack_require__(/*! ./forgatepassword.component.html */ "./src/app/forgatepassword/forgatepassword.component.html"),
            styles: [__webpack_require__(/*! ./forgatepassword.component.css */ "./src/app/forgatepassword/forgatepassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], ForgatepasswordComponent);
    return ForgatepasswordComponent;
}());



/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZmx1ZW5jZXJzZGFzaGJvcmQvaW5mbHVlbmNlcnNkYXNoYm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.html":
/*!************************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  influencersdashbord works!\n</p>\n"

/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfluencersdashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencersdashbordComponent", function() { return InfluencersdashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfluencersdashbordComponent = /** @class */ (function () {
    function InfluencersdashbordComponent() {
    }
    InfluencersdashbordComponent.prototype.ngOnInit = function () {
    };
    InfluencersdashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-influencersdashbord',
            template: __webpack_require__(/*! ./influencersdashbord.component.html */ "./src/app/influencersdashbord/influencersdashbord.component.html"),
            styles: [__webpack_require__(/*! ./influencersdashbord.component.css */ "./src/app/influencersdashbord/influencersdashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfluencersdashbordComponent);
    return InfluencersdashbordComponent;
}());



/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZmx1ZW5jZXJzbWFuYWdlbWVudC9pbmZsdWVuY2Vyc21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  influencersmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfluencersmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencersmanagementComponent", function() { return InfluencersmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfluencersmanagementComponent = /** @class */ (function () {
    function InfluencersmanagementComponent() {
    }
    InfluencersmanagementComponent.prototype.ngOnInit = function () {
    };
    InfluencersmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-influencersmanagement',
            template: __webpack_require__(/*! ./influencersmanagement.component.html */ "./src/app/influencersmanagement/influencersmanagement.component.html"),
            styles: [__webpack_require__(/*! ./influencersmanagement.component.css */ "./src/app/influencersmanagement/influencersmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfluencersmanagementComponent);
    return InfluencersmanagementComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  kjhkjh\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListingComponent = /** @class */ (function () {
    function ListingComponent() {
    }
    ListingComponent.prototype.ngOnInit = function () {
    };
    ListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.mat-card{\n    display: block;\n    text-align: center;\n    margin-top: 121px;\n    width: auto;\n    border: none;\n    box-shadow: none;\n    overflow: hidden;\n    max-width: 100%;\n    margin: 119px auto;\n}\n\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4ubWF0LWNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEyMXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTE5cHggYXV0bztcbn1cblxuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\n      <h1>Login</h1>\n      <p>welcome back!</p>\n      <span class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</span>\n\n      <mat-form-field class=\"form-group\">\n        <input [class.is-invalid]=\"myForm.controls['email'].invalid && myForm.controls['email'].touched\" matInput placeholder=\"Username\" [formControl]=\"myForm.controls['email']\" (blur)=\"inputblur('email')\" >\n        <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Email field can not be blank</span>\n        <span></span>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-group\">\n        <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n        <span  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Password field can not be blank</span>\n      </mat-form-field>\n<mat-card-content >\n      <button mat-button   class=\"s_getmyoffer_login_button\"  >Login</button>\n</mat-card-content>\n\n      <mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>\n\n\n\n\n    </form>\n  </mat-card-content>\n\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _app_resolveservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/resolveservice */ "./src/app/resolveservice.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, cookieService, http, apiService, router, resolveservice) {
        this.fb = fb;
        this.cookieService = cookieService;
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this.resolveservice = resolveservice;
        // public url = 'http://nodessl.influxiq.com:7012/login';
        this.endpoint = 'login';
        // public url1: any = '';
        // public serverurl: any = '';
        this.errormg = '';
        this.ipinfo = {};
        // this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        // this.serverurl = (this.url1 + this.endpoint);
        // console.log(this.serverurl);
        // console.log('this.serverurl');
        // console.log(this.serverurl);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.apiService.getclientip().subscribe(function (res) {
            console.log('res');
            console.log(res);
            _this.ipinfo = res;
        });
    };
    LoginComponent.prototype.onForgetPassword = function () {
        console.log('ok');
        this.router.navigate((['/forgetpassword']));
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var x;
        this.errormg = '';
        var data = this.myForm.value;
        console.log('data');
        console.log(data);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
        data.ipinfo = this.ipinfo;
        this.result = this.apiService.postData(this.endpoint, data).subscribe(function (res) {
            var result = {};
            result = res;
            if (result.status == 'error') {
                _this.errormg = result.msg;
            }
            // console.log(result.item[0].type);
            console.log('result.item');
            console.log(result.item);
            console.log(result.status);
            // console.log(result.item.type);
            // console.log(result.item[0]);
            if (result.status == 'success') {
                _this.cookieService.set('email', result.item[0].email);
                _this.cookieService.set('password', result.item[0].password);
                _this.cookieService.set('id', result.item[0]._id);
                _this.cookieService.set('jwttoken', result.token);
                if (result.status = 'success') {
                    if (result.status == 'success' && result.item[0].type == 'admin') {
                        _this.router.navigate(['/admindashboard']);
                    }
                    else if (result.status == 'success' && result.item[0].type == 'brand') {
                        // this.myForm.reset();
                        _this.router.navigate(['/branddashboard']);
                    }
                    else if (result.status == 'success' && result.item[0].type == 'influencers') {
                        // this.myForm.reset();
                        _this.router.navigate(['/influencersdashboard']);
                    }
                    _this.myForm.reset();
                }
            }
        }, function (error) {
            console.log('Oooops!');
        });
    };
    LoginComponent.prototype.inputblur = function (val) {
        console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_resolveservice__WEBPACK_IMPORTED_MODULE_7__["Resolveservice"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>\n      <span class=\"s_shatter_logo_wrapper\">\n          <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" >\n      </span>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item role=\"listitem\" [routerLink]=\"['/admindashboard']\">Dashboard</a>\n      <mat-divider></mat-divider>\n      <a mat-list-item role=\"listitem\">Home</a>\n      <mat-divider></mat-divider>\n      <a mat-list-item role=\"listitem\">Home</a>\n      <mat-divider></mat-divider>\n      <a mat-list-item role=\"listitem\">Home</a>\n      <mat-divider></mat-divider>\n      <a mat-list-item role=\"listitem\" [routerLink]=\"['/adminlist']\">Admin List</a>\n\n      <a mat-list-item role=\"listitem\" [routerLink]=\"['/adminform']\">Add Admin</a>\n      <a mat-list-item role=\"listitem\">Home</a>\n      <a mat-list-item role=\"listitem\">Home</a>\n      <a mat-list-item role=\"listitem\">Home</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"topbar\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>shatterblock</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-button color=\"primary\">\n      <span class=\"profile_wrap\">\n        <img src=\"http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg\">\n      </span>\n      </button>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item>Settings</button>\n        <button mat-menu-item>Help</button>\n      </mat-menu>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.html":
/*!************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resetpassword works!\n</p>\n"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent() {
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/resetpassword/resetpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/resolveservice.ts":
/*!***********************************!*\
  !*** ./src/app/resolveservice.ts ***!
  \***********************************/
/*! exports provided: Resolveservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolveservice", function() { return Resolveservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");

/*
export class Resolve {
}
*/



var Resolveservice = /** @class */ (function () {
    function Resolveservice(_apiService, router) {
        this._apiService = _apiService;
        this.router = router;
    }
    Resolveservice.prototype.resolve = function (route, state) {
        var _this = this;
        // let id = route.params['id'];
        console.log('resolve route data');
        console.log(route.data);
        console.log(route.data.source);
        console.log(route);
        console.log(state);
        // let endpoint = route.data.object;
        // console.log('endpoint!!!!!');
        // console.log(endpoint);
        return new Promise(function (resolve) {
            _this._apiService.getEndpoint(route.data).subscribe(function (api_object) {
                console.log('api_object  !!!!');
                console.log(api_object);
                if (api_object) {
                    return resolve(api_object);
                }
                else { // id not found
                    _this.router.navigateByUrl('login');
                    return true;
                }
            });
        });
    };
    Resolveservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Resolveservice);
    return Resolveservice;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * Created by debasiskar on 18/03/19.
 */
var environment = {
    production: false,
    // API_URL: 'http://nodessl.influxiq.com:7012/',
    API_URL: 'http://18.222.26.198:7002/',
    resetpaswordurl: 'http://development.shatterblokbackend.com.s3-website.us-east-2.amazonaws.com/',
    environment: 'development'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/influxiq-4/angular/shatterblock/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map