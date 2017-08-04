webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsPageModule", function() { return PlanetDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planet_details__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanetDetailsPageModule = (function () {
    function PlanetDetailsPageModule() {
    }
    return PlanetDetailsPageModule;
}());
PlanetDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__planet_details__["a" /* PlanetDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__planet_details__["a" /* PlanetDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__planet_details__["a" /* PlanetDetailsPage */]
        ]
    })
], PlanetDetailsPageModule);

//# sourceMappingURL=planet-details.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlanetDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlanetDetailsPage = (function () {
    function PlanetDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.planet = this.navParams.get('planet');
        //console.log(this.planet);
    }
    PlanetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanetDetailsPage');
    };
    return PlanetDetailsPage;
}());
PlanetDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-planet-details',template:/*ion-inline-start:"/home/bharti/ionicapps/ionic-demo/src/pages/planet-details/planet-details.html"*/'<!--\n  Generated template for the PlanetDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{planet.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>Climate: </ion-col>\n        <ion-col>{{planet.climate}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Rotation Period: </ion-col>\n        <ion-col>{{planet.rotation_period}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Orbital Period: </ion-col>\n        <ion-col>{{planet.orbital_period}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Diameter: </ion-col>\n        <ion-col>{{planet.diameter}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Gravity: </ion-col>\n        <ion-col>{{planet.gravity}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Terrain: </ion-col>\n        <ion-col>{{planet.terrain}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Surface Water: </ion-col>\n        <ion-col>{{planet.surface_water}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Population: </ion-col>\n        <ion-col>{{planet.population}}</ion-col>\n      </ion-row>\n      <!--<label>Rotation Period: </label>{{planet.rotation_period}}<br>\n      <label>Orbital Period: </label>{{planet.orbital_period}}<br>\n      <label>Diameter: </label>{{planet.diameter}}<br>\n      <label>Gravity: </label>{{planet.gravity}}<br>\n      <label>Terrain: </label>{{planet.terrain}}<br>\n      <label>Surface Water: </label>{{planet.surface_water}}<br>\n      <label>Population: </label>{{planet.population}}<br>-->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/bharti/ionicapps/ionic-demo/src/pages/planet-details/planet-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PlanetDetailsPage);

//# sourceMappingURL=planet-details.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map