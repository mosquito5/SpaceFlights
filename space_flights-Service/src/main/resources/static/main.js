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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n<div class=\"container-fluid\">\n  <div class=\"col-md-offset-1\">\n  </div>\n  <a routerLink=\"\">Home</a>\n  <a routerLink=\"/flights\"> List Flights</a>\n  <a style=\"margin-left:10px\" routerLink=\"/addFlight\">Add Flight</a>\n<!--  tourist-->\n  <a routerLink=\"/tourists\"> List Tourist</a>\n  <a style=\"margin-left:10px\" routerLink=\"/addTourist\">Add Tourist</a>\n  <br/>\n</div>\n</nav>\n<router-outlet></router-outlet>\n"

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
        this.title = 'client';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _flight_add_flight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flight/add-flight.component */ "./src/app/flight/add-flight.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tourist/tourist.component */ "./src/app/tourist/tourist.component.ts");
/* harmony import */ var _tourist_add_tourist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tourist/add-tourist.component */ "./src/app/tourist/add-tourist.component.ts");
/* harmony import */ var _flight_add_tourist_to_flight_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./flight/add-tourist-to-flight.component */ "./src/app/flight/add-tourist-to-flight.component.ts");
/* harmony import */ var _tourist_add_flight_to_tourist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tourist/add-flight-to-tourist.component */ "./src/app/tourist/add-flight-to-tourist.component.ts");
/* harmony import */ var _tourist_delete_flight_from_tourist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tourist/delete-flight-from-tourist.component */ "./src/app/tourist/delete-flight-from-tourist.component.ts");
/* harmony import */ var _flight_delete_tourist_from_flight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flight/delete-tourist-from-flight.component */ "./src/app/flight/delete-tourist-from-flight.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__["FlightComponent"],
                _flight_add_flight_component__WEBPACK_IMPORTED_MODULE_6__["AddFlightComponent"],
                _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_10__["TouristComponent"],
                _tourist_add_tourist_component__WEBPACK_IMPORTED_MODULE_11__["AddTouristComponent"],
                _flight_add_tourist_to_flight_component__WEBPACK_IMPORTED_MODULE_12__["AddTouristToFlightComponent"],
                _flight_delete_tourist_from_flight_component__WEBPACK_IMPORTED_MODULE_15__["DeleteTouristFromFlightComponent"],
                _tourist_add_flight_to_tourist_component__WEBPACK_IMPORTED_MODULE_13__["AddFlightToTouristComponent"],
                _tourist_delete_flight_from_tourist_component__WEBPACK_IMPORTED_MODULE_14__["DeleteFlightFromTouristComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _flight_add_flight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flight/add-flight.component */ "./src/app/flight/add-flight.component.ts");
/* harmony import */ var _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tourist/tourist.component */ "./src/app/tourist/tourist.component.ts");
/* harmony import */ var _tourist_add_tourist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tourist/add-tourist.component */ "./src/app/tourist/add-tourist.component.ts");
/* harmony import */ var _flight_add_tourist_to_flight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flight/add-tourist-to-flight.component */ "./src/app/flight/add-tourist-to-flight.component.ts");
/* harmony import */ var _tourist_add_flight_to_tourist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tourist/add-flight-to-tourist.component */ "./src/app/tourist/add-flight-to-tourist.component.ts");
/* harmony import */ var _flight_delete_tourist_from_flight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flight/delete-tourist-from-flight.component */ "./src/app/flight/delete-tourist-from-flight.component.ts");
/* harmony import */ var _tourist_delete_flight_from_tourist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tourist/delete-flight-from-tourist.component */ "./src/app/tourist/delete-flight-from-tourist.component.ts");











var routes = [
    { path: 'flights', component: _flight_flight_component__WEBPACK_IMPORTED_MODULE_3__["FlightComponent"] },
    { path: 'addFlight', component: _flight_add_flight_component__WEBPACK_IMPORTED_MODULE_4__["AddFlightComponent"] },
    { path: 'tourists', component: _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_5__["TouristComponent"] },
    { path: 'addTourist', component: _tourist_add_tourist_component__WEBPACK_IMPORTED_MODULE_6__["AddTouristComponent"] },
    { path: 'AddTouristToFlight', component: _flight_add_tourist_to_flight_component__WEBPACK_IMPORTED_MODULE_7__["AddTouristToFlightComponent"] },
    { path: 'AddFlightToTourist', component: _tourist_add_flight_to_tourist_component__WEBPACK_IMPORTED_MODULE_8__["AddFlightToTouristComponent"] },
    { path: 'DeleteTouristFromFlight', component: _flight_delete_tourist_from_flight_component__WEBPACK_IMPORTED_MODULE_9__["DeleteTouristFromFlightComponent"] },
    { path: 'DeleteFlightFromTourist', component: _tourist_delete_flight_from_tourist_component__WEBPACK_IMPORTED_MODULE_10__["DeleteFlightFromTouristComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/flight/add-flight.component.html":
/*!**************************************************!*\
  !*** ./src/app/flight/add-flight.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Flight</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"departureTime\">Departure time:</label>\n      <input type=\"departureTime\" [(ngModel)]=\"flight.departureTime\" placeholder=\"DepartureTime\" name=\"departureTime\" class=\"form-control\" id=\"departureTime\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"arrivalTime\">Arrival Time:</label>\n      <input [(ngModel)]=\"flight.arrivalTime\" placeholder=\"Arrival Time\" name=\"arrivalTime\" class=\"form-control\" id=\"arrivalTime\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"seats\">Seats:</label>\n      <input [(ngModel)]=\"flight.seats\" placeholder=\"Seats\" name=\"seats\" class=\"form-control\" id=\"seats\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"maxSeats\">Max Seats:</label>\n      <input [(ngModel)]=\"flight.maxSeats\" placeholder=\"maxSeats\" name=\"maxSeats\" class=\"form-control\" id=\"maxSeats\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ticketPrice\">Ticket Price:</label>\n      <input [(ngModel)]=\"flight.ticketPrice\" placeholder=\"ticketPrice\" name=\"ticketPrice\" class=\"form-control\" id=\"ticketPrice\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"createFlight()\">Create</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/flight/add-flight.component.ts":
/*!************************************************!*\
  !*** ./src/app/flight/add-flight.component.ts ***!
  \************************************************/
/*! exports provided: AddFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFlightComponent", function() { return AddFlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight/flight.service.ts");
/* harmony import */ var _flight_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flight.model */ "./src/app/flight/flight.model.ts");





var AddFlightComponent = /** @class */ (function () {
    function AddFlightComponent(router, flightService) {
        this.router = router;
        this.flightService = flightService;
        this.flight = new _flight_model__WEBPACK_IMPORTED_MODULE_4__["Flight"]();
    }
    AddFlightComponent.prototype.createFlight = function () {
        this.flightService.createFlight(this.flight)
            .subscribe(function (data) {
            alert('Flight created successfully.');
        });
        this.router.navigate(['']);
    };
    AddFlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-flight.component.html */ "./src/app/flight/add-flight.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"]])
    ], AddFlightComponent);
    return AddFlightComponent;
}());



/***/ }),

/***/ "./src/app/flight/add-tourist-to-flight.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/flight/add-tourist-to-flight.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTouristToFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTouristToFlightComponent", function() { return AddTouristToFlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight/flight.service.ts");
/* harmony import */ var _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tourist/tourist.service */ "./src/app/tourist/tourist.service.ts");





var AddTouristToFlightComponent = /** @class */ (function () {
    function AddTouristToFlightComponent(router, touristService, flightService) {
        this.router = router;
        this.touristService = touristService;
        this.flightService = flightService;
        this.flightId = router.getCurrentNavigation().extras.state.id;
    }
    AddTouristToFlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.touristService.getTourists().subscribe(function (data) {
            _this.tourists = data;
            // this.flightId = this.router.getCurrentNavigation().extras.state.id;
        });
    };
    AddTouristToFlightComponent.prototype.addTouristToFlight = function (tourist) {
        this.flightService.addTouristToFlight(this.flightId, tourist.id).subscribe(function (data) {
            alert('Tourist added successfully.');
            // this.router.navigate(['/home]']);
        });
    };
    AddTouristToFlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-tourist-to-flight.html */ "./src/app/flight/add-tourist-to-flight.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_4__["TouristService"],
            _flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"]])
    ], AddTouristToFlightComponent);
    return AddTouristToFlightComponent;
}());



/***/ }),

/***/ "./src/app/flight/add-tourist-to-flight.html":
/*!***************************************************!*\
  !*** ./src/app/flight/add-tourist-to-flight.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Tourist Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Name</th>\n      <th>Surname</th>\n      <th>Gender</th>\n      <th>Country</th>\n      <th>Notes</th>\n      <th>Date of birth</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let tourist of tourists\">\n      <!--      <td class=\"hidden\"></td>-->\n      <td>{{tourist.id}}</td>\n      <td>{{tourist.name}}</td>\n      <td>{{tourist.surname}}</td>\n      <td>{{tourist.gender}}</td>\n      <td>{{tourist.country}}</td>\n      <td>{{tourist.notes}}</td>\n      <td>{{tourist.dateOfBirth}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"addTouristToFlight(tourist)\"> Add tourist</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/flight/delete-tourist-from-flight.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/flight/delete-tourist-from-flight.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteTouristFromFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTouristFromFlightComponent", function() { return DeleteTouristFromFlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight/flight.service.ts");
/* harmony import */ var _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tourist/tourist.service */ "./src/app/tourist/tourist.service.ts");





var DeleteTouristFromFlightComponent = /** @class */ (function () {
    function DeleteTouristFromFlightComponent(router, touristService, flightService) {
        this.router = router;
        this.touristService = touristService;
        this.flightService = flightService;
        this.flightId = router.getCurrentNavigation().extras.state.id;
    }
    DeleteTouristFromFlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightService.getTouristsBelongToFlights(this.flightId).subscribe(function (data) {
            _this.tourists = data;
            // this.flightId = this.router.getCurrentNavigation().extras.state.id;
        });
    };
    DeleteTouristFromFlightComponent.prototype.deleteTouristFormFlight = function (tourist) {
        this.flightService.deleteTouristFromFlight(this.flightId, tourist.id).subscribe(function (data) {
            alert('Tourist deleted successfully.');
        });
        this.router.navigate(['']);
    };
    DeleteTouristFromFlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./delete-tourist-from-flight.html */ "./src/app/flight/delete-tourist-from-flight.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_4__["TouristService"],
            _flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"]])
    ], DeleteTouristFromFlightComponent);
    return DeleteTouristFromFlightComponent;
}());



/***/ }),

/***/ "./src/app/flight/delete-tourist-from-flight.html":
/*!********************************************************!*\
  !*** ./src/app/flight/delete-tourist-from-flight.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Tourist Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Name</th>\n      <th>Surname</th>\n      <th>Gender</th>\n      <th>Country</th>\n      <th>Notes</th>\n      <th>Date of birth</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let tourist of tourists\">\n      <!--      <td class=\"hidden\"></td>-->\n      <td>{{tourist.id}}</td>\n      <td>{{tourist.name}}</td>\n      <td>{{tourist.surname}}</td>\n      <td>{{tourist.gender}}</td>\n      <td>{{tourist.country}}</td>\n      <td>{{tourist.notes}}</td>\n      <td>{{tourist.dateOfBirth}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteTouristFormFlight(tourist)\"> Delete tourist</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/flight/flight.component.css":
/*!*********************************************!*\
  !*** ./src/app/flight/flight.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodC9mbGlnaHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/flight/flight.component.html":
/*!**********************************************!*\
  !*** ./src/app/flight/flight.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Flight Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n<!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Departure Time</th>\n      <th>Arrival Time</th>\n      <th>Seats</th>\n      <th>Max seats</th>\n      <th>Ticket price</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let flight of flights\">\n<!--      <td class=\"hidden\"></td>-->\n      <td>{{flight.id}}</td>\n      <td>{{flight.departureTime}}</td>\n      <td>{{flight.arrivalTime}}</td>\n      <td>{{flight.seats}}</td>\n      <td>{{flight.maxSeats}}</td>\n      <td>{{flight.ticketPrice}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteFlight(flight)\"> Delete flight</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"routeToAddTouristToFlight(flight)\"> Add tourist</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"routeToDeleteTouristFromFlight(flight)\"> Delete tourist</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/flight/flight.component.ts":
/*!********************************************!*\
  !*** ./src/app/flight/flight.component.ts ***!
  \********************************************/
/*! exports provided: FlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComponent", function() { return FlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight/flight.service.ts");




var FlightComponent = /** @class */ (function () {
    function FlightComponent(router, flightService) {
        this.router = router;
        this.flightService = flightService;
    }
    FlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightService.getFlights().subscribe(function (data) {
            _this.flights = data;
        });
    };
    FlightComponent.prototype.deleteFlight = function (flight) {
        var _this = this;
        this.flightService.deleteFlight(flight).subscribe(function (data) {
            _this.flights = _this.flights.filter(function (u) { return u !== flight; });
        });
    };
    FlightComponent.prototype.routeToAddTouristToFlight = function (flight) {
        this.router.navigate(['/AddTouristToFlight'], { state: flight });
    };
    FlightComponent.prototype.routeToDeleteTouristFromFlight = function (flight) {
        this.router.navigate(['/DeleteTouristFromFlight'], { state: flight });
    };
    FlightComponent.prototype.deleteTouristFormFlight = function (flight, tourist) {
        var _this = this;
        this.flightService.deleteTouristFromFlight(flight, tourist).subscribe(function (data) {
            _this.flights = _this.flights.filter(function (u) { return u !== flight; });
        });
    };
    FlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flight',
            template: __webpack_require__(/*! ./flight.component.html */ "./src/app/flight/flight.component.html"),
            styles: [__webpack_require__(/*! ./flight.component.css */ "./src/app/flight/flight.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"]])
    ], FlightComponent);
    return FlightComponent;
}());



/***/ }),

/***/ "./src/app/flight/flight.model.ts":
/*!****************************************!*\
  !*** ./src/app/flight/flight.model.ts ***!
  \****************************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
var Flight = /** @class */ (function () {
    function Flight() {
    }
    return Flight;
}());



/***/ }),

/***/ "./src/app/flight/flight.service.ts":
/*!******************************************!*\
  !*** ./src/app/flight/flight.service.ts ***!
  \******************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.FLIGHT_API = 'http://localhost:8080/api/flight';
        this.ADD_FLIGHT = this.FLIGHT_API + '/addFlight';
        this.GET_FLIGHTS = this.FLIGHT_API + '/getFlights';
        this.DELETE_FLIGHT = this.FLIGHT_API + '/deleteFlight';
        this.DELETE_TOURIST_FROM_FLIGHT = this.FLIGHT_API + '/delTouFromFlgt';
        this.ADD_TOURIST_TO_FLIGHT = this.FLIGHT_API + '/addTourToFlgt';
        this.GET_FLIGHTS_BELONG_TO_TOURIST = this.FLIGHT_API + '/getTourists';
    }
    FlightService.prototype.getFlights = function () {
        return this.http.get(this.GET_FLIGHTS);
    };
    FlightService.prototype.getTouristsBelongToFlights = function (flightId) {
        return this.http.get(this.GET_FLIGHTS_BELONG_TO_TOURIST + '/' + flightId);
    };
    FlightService.prototype.deleteFlight = function (flight) {
        return this.http.get(this.DELETE_FLIGHT + '/' + flight.id);
    };
    FlightService.prototype.deleteTouristFromFlight = function (flightId, touristId) {
        return this.http.get(this.DELETE_TOURIST_FROM_FLIGHT + '/' + touristId + '/' + flightId);
    };
    FlightService.prototype.addTouristToFlight = function (flightId, touristId) {
        console.log(flightId, touristId);
        return this.http.get(this.ADD_TOURIST_TO_FLIGHT + '/' + touristId + '/' + flightId);
    };
    FlightService.prototype.createFlight = function (flight) {
        return this.http.post(this.ADD_FLIGHT, flight);
    };
    FlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/app/tourist/add-flight-to-tourist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tourist/add-flight-to-tourist.component.ts ***!
  \************************************************************/
/*! exports provided: AddFlightToTouristComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFlightToTouristComponent", function() { return AddFlightToTouristComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tourist/tourist.service */ "./src/app/tourist/tourist.service.ts");
/* harmony import */ var _flight_flight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flight/flight.service */ "./src/app/flight/flight.service.ts");





var AddFlightToTouristComponent = /** @class */ (function () {
    function AddFlightToTouristComponent(router, touristService, flightService) {
        this.router = router;
        this.touristService = touristService;
        this.flightService = flightService;
        this.touristId = router.getCurrentNavigation().extras.state.id;
    }
    AddFlightToTouristComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightService.getFlights().subscribe(function (data) {
            _this.flights = data;
        });
    };
    AddFlightToTouristComponent.prototype.addFlightToTourist = function (flight) {
        this.touristService.addFlightToTourist(this.touristId, flight.id).subscribe(function (data) {
            alert('Tourist added successfully.');
        });
        this.router.navigate(['']);
    };
    AddFlightToTouristComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-flight-to-tourist.html */ "./src/app/tourist/add-flight-to-tourist.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_3__["TouristService"],
            _flight_flight_service__WEBPACK_IMPORTED_MODULE_4__["FlightService"]])
    ], AddFlightToTouristComponent);
    return AddFlightToTouristComponent;
}());



/***/ }),

/***/ "./src/app/tourist/add-flight-to-tourist.html":
/*!****************************************************!*\
  !*** ./src/app/tourist/add-flight-to-tourist.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Tourist Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Departure Time</th>\n      <th>Arrival Time</th>\n      <th>seats</th>\n      <th>Max seats</th>\n      <th>Ticket price</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let flight of flights\">\n      <!--      <td class=\"hidden\"></td>-->\n      <td>{{flight.id}}</td>\n      <td>{{flight.departureTime}}</td>\n      <td>{{flight.arrivalTime}}</td>\n      <td>{{flight.seats}}</td>\n      <td>{{flight.maxSeats}}</td>\n      <td>{{flight.ticketPrice}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"addFlightToTourist(flight)\"> Add flight</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/tourist/add-tourist.component.html":
/*!****************************************************!*\
  !*** ./src/app/tourist/add-tourist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Tourist</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input type=\"departureTime\" [(ngModel)]=\"tourist.name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"surname\">Surname:</label>\n      <input [(ngModel)]=\"tourist.surname\" placeholder=\"Surname\" name=\"surname\" class=\"form-control\" id=\"surname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"gender\">Gender:</label>\n<!--      <input [(ngModel)]=\"tourist.gender\" placeholder=\"Gender\" name=\"gender\" class=\"form-control\" id=\"gender\">-->\n      <select [(ngModel)]=\"tourist.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n        <option>MALE</option>\n        <option>FEMALE</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <input [(ngModel)]=\"tourist.country\" placeholder=\"Country\" name=\"country\" class=\"form-control\" id=\"country\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"notes\">Notes:</label>\n      <input [(ngModel)]=\"tourist.notes\" placeholder=\"Notes\" name=\"notes\" class=\"form-control\" id=\"notes\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"dateOfBirth\">Date of birth:</label>\n      <input type=\"date\" [(ngModel)]=\"tourist.dateOfBirth\" placeholder=\"DateOfBirth\" name=\"dateOfBirth\" class=\"form-control\" id=\"dateOfBirth\">\n\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"createTourist()\">Create</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/tourist/add-tourist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tourist/add-tourist.component.ts ***!
  \**************************************************/
/*! exports provided: AddTouristComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTouristComponent", function() { return AddTouristComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tourist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tourist.model */ "./src/app/tourist/tourist.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tourist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tourist.service */ "./src/app/tourist/tourist.service.ts");





var AddTouristComponent = /** @class */ (function () {
    function AddTouristComponent(router, touristService) {
        this.router = router;
        this.touristService = touristService;
        this.tourist = new _tourist_model__WEBPACK_IMPORTED_MODULE_2__["Tourist"]();
    }
    AddTouristComponent.prototype.createTourist = function () {
        this.touristService.createTourist(this.tourist)
            .subscribe(function (data) {
            alert('Tourist created successfully.');
        });
        this.router.navigate(['']);
    };
    AddTouristComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add-tourist.component.html */ "./src/app/tourist/add-tourist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _tourist_service__WEBPACK_IMPORTED_MODULE_4__["TouristService"]])
    ], AddTouristComponent);
    return AddTouristComponent;
}());



/***/ }),

/***/ "./src/app/tourist/delete-flight-from-tourist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tourist/delete-flight-from-tourist.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteFlightFromTouristComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFlightFromTouristComponent", function() { return DeleteFlightFromTouristComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tourist/tourist.service */ "./src/app/tourist/tourist.service.ts");
/* harmony import */ var _flight_flight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flight/flight.service */ "./src/app/flight/flight.service.ts");





var DeleteFlightFromTouristComponent = /** @class */ (function () {
    function DeleteFlightFromTouristComponent(router, touristService, flightService) {
        this.router = router;
        this.touristService = touristService;
        this.flightService = flightService;
        this.touristId = router.getCurrentNavigation().extras.state.id;
    }
    DeleteFlightFromTouristComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.touristService.getFlightsBelongToTourists(this.touristId).subscribe(function (data) {
            _this.flights = data;
            // this.flightId = this.router.getCurrentNavigation().extras.state.id;
        });
    };
    DeleteFlightFromTouristComponent.prototype.deleteFlightFormTourist = function (flight) {
        this.touristService.deleteFlightFromTourist(this.touristId, flight.id).subscribe(function (data) {
            alert('Flight deleted successfully.');
        });
        this.router.navigate(['/home]']);
    };
    DeleteFlightFromTouristComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./delete-flight-from-tourist.html */ "./src/app/tourist/delete-flight-from-tourist.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tourist_tourist_service__WEBPACK_IMPORTED_MODULE_3__["TouristService"],
            _flight_flight_service__WEBPACK_IMPORTED_MODULE_4__["FlightService"]])
    ], DeleteFlightFromTouristComponent);
    return DeleteFlightFromTouristComponent;
}());



/***/ }),

/***/ "./src/app/tourist/delete-flight-from-tourist.html":
/*!*********************************************************!*\
  !*** ./src/app/tourist/delete-flight-from-tourist.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Tourist Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Departure Time</th>\n      <th>Arrival Time</th>\n      <th>seats</th>\n      <th>Max seats</th>\n      <th>Ticket price</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let flight of flights\">\n      <!--      <td class=\"hidden\"></td>-->\n      <td>{{flight.id}}</td>\n      <td>{{flight.departureTime}}</td>\n      <td>{{flight.arrivalTime}}</td>\n      <td>{{flight.seats}}</td>\n      <td>{{flight.maxSeats}}</td>\n      <td>{{flight.ticketPrice}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteFlightFormTourist(flight)\"> Delete flight</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/tourist/tourist.component.css":
/*!***********************************************!*\
  !*** ./src/app/tourist/tourist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdXJpc3QvdG91cmlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tourist/tourist.component.html":
/*!************************************************!*\
  !*** ./src/app/tourist/tourist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2>Tourist Details</h2>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <!--      <th class=\"hidden\">Id</th>-->\n      <th>Id</th>\n      <th>Name</th>\n      <th>Surname</th>\n      <th>Gender</th>\n      <th>Country</th>\n      <th>Notes</th>\n      <th>Date of birth</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let tourist of tourists\">\n      <!--      <td class=\"hidden\"></td>-->\n      <td>{{tourist.id}}</td>\n      <td>{{tourist.name}}</td>\n      <td>{{tourist.surname}}</td>\n      <td>{{tourist.gender}}</td>\n      <td>{{tourist.country}}</td>\n      <td>{{tourist.notes}}</td>\n      <td>{{tourist.dateOfBirth}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteTourist(tourist)\"> Delete tourist</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"routeToAddFlightToTourist(tourist)\"> Add flight to tourist</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"routeToDeleteFlightFromTourist(tourist)\"> Delete flight from tourist</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/tourist/tourist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tourist/tourist.component.ts ***!
  \**********************************************/
/*! exports provided: TouristComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristComponent", function() { return TouristComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tourist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tourist.service */ "./src/app/tourist/tourist.service.ts");




var TouristComponent = /** @class */ (function () {
    function TouristComponent(router, touristService) {
        this.router = router;
        this.touristService = touristService;
    }
    TouristComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.touristService.getTourists().subscribe(function (data) {
            _this.tourists = data;
        });
    };
    TouristComponent.prototype.deleteTourist = function (tourist) {
        var _this = this;
        this.touristService.deleteTourist(tourist).subscribe(function (data) {
            _this.tourists = _this.tourists.filter(function (u) { return u !== tourist; });
        });
        this.router.navigate(['']);
    };
    TouristComponent.prototype.routeToAddFlightToTourist = function (tourist) {
        this.router.navigate(['/AddFlightToTourist'], { state: tourist });
    };
    TouristComponent.prototype.routeToDeleteFlightFromTourist = function (tourist) {
        this.router.navigate(['/DeleteFlightFromTourist'], { state: tourist });
    };
    TouristComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tourist',
            template: __webpack_require__(/*! ./tourist.component.html */ "./src/app/tourist/tourist.component.html"),
            styles: [__webpack_require__(/*! ./tourist.component.css */ "./src/app/tourist/tourist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tourist_service__WEBPACK_IMPORTED_MODULE_3__["TouristService"]])
    ], TouristComponent);
    return TouristComponent;
}());



/***/ }),

/***/ "./src/app/tourist/tourist.model.ts":
/*!******************************************!*\
  !*** ./src/app/tourist/tourist.model.ts ***!
  \******************************************/
/*! exports provided: Tourist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tourist", function() { return Tourist; });
var Tourist = /** @class */ (function () {
    function Tourist() {
    }
    return Tourist;
}());



/***/ }),

/***/ "./src/app/tourist/tourist.service.ts":
/*!********************************************!*\
  !*** ./src/app/tourist/tourist.service.ts ***!
  \********************************************/
/*! exports provided: TouristService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristService", function() { return TouristService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TouristService = /** @class */ (function () {
    function TouristService(http) {
        this.http = http;
        this.TOURIST_API = 'http://localhost:8080/api/tourist';
        this.ADD_TOURIST = this.TOURIST_API + '/addTourist';
        this.GET_TOURISTS = this.TOURIST_API + '/getTourists';
        this.DELETE_TOURIST = this.TOURIST_API + '/deleteTourist';
        this.DELETE_FLIGHT_FROM_TOURIST = this.TOURIST_API + '/delFlgtFromTour';
        this.ADD_FLIGHT_TO_TOURIST = this.TOURIST_API + '/addTourToFlgt';
        this.GET_FLIGHTS_BELONG_TO_TOURIST = this.TOURIST_API + '/getFlights';
    }
    TouristService.prototype.getTourists = function () {
        return this.http.get(this.GET_TOURISTS);
    };
    TouristService.prototype.getFlightsBelongToTourists = function (touristId) {
        return this.http.get(this.GET_FLIGHTS_BELONG_TO_TOURIST + '/' + touristId);
    };
    TouristService.prototype.deleteFlightFromTourist = function (tourist, flight) {
        return this.http.get(this.DELETE_FLIGHT_FROM_TOURIST + '/' + tourist.id + '/' + flight.id);
    };
    TouristService.prototype.addFlightToTourist = function (touristId, flightId) {
        return this.http.get(this.ADD_FLIGHT_TO_TOURIST + '/' + touristId + '/' + flightId);
    };
    TouristService.prototype.deleteTourist = function (tourist) {
        return this.http.get(this.DELETE_TOURIST + '/' + tourist.id);
    };
    TouristService.prototype.createTourist = function (tourist) {
        return this.http.post(this.ADD_TOURIST, tourist);
    };
    TouristService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TouristService);
    return TouristService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kuba/IdeaProjects/space_flights/space_flights-UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map