webpackJsonp([6],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailsPageModule", function() { return FilmDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__film_details__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmDetailsPageModule = (function () {
    function FilmDetailsPageModule() {
    }
    return FilmDetailsPageModule;
}());
FilmDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__film_details__["a" /* FilmDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__film_details__["a" /* FilmDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__film_details__["a" /* FilmDetailsPage */]
        ]
    })
], FilmDetailsPageModule);

//# sourceMappingURL=film-details.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailsPage; });
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


var FilmDetailsPage = (function () {
    function FilmDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.film = this.navParams.get('film');
    }
    FilmDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilmDetailsPage');
    };
    FilmDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FilmDetailsPage.prototype.getFilmCharacters = function () {
        //this.characters = this.film.characters;
        console.log('characters', this.film.characters);
        this.navCtrl.push('CharactersPage', { characters: this.film.characters });
    };
    FilmDetailsPage.prototype.getFilmPlanets = function () {
        this.navCtrl.push('PlanetsPage', { planets: this.film.planets });
    };
    return FilmDetailsPage;
}());
FilmDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-film-details',template:/*ion-inline-start:"/home/bharti/ionicapps/ionic-demo/src/pages/film-details/film-details.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{ film.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      {{film.opening_crawl}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col><ion-note>Directed By :</ion-note></ion-col>\n        <ion-col>{{ film.director }}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col><ion-note>Produced By :</ion-note></ion-col>\n        <ion-col>{{ film.producer }}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color="primary">More Details</ion-card-header>\n    <ion-list>\n      <button ion-item (click)="getFilmCharacters()">Characters <ion-badge item-end>{{ film.characters.length }}</ion-badge></button>\n      <button ion-item (click)="getFilmPlanets()">Planets <ion-badge item-end>{{ film.planets.length }}</ion-badge></button>\n      <button ion-item (click)="getFilmStarships()">Starships <ion-badge item-end>{{ film.starships.length }}</ion-badge></button>\n      <button ion-item (click)="getFilmVehicles()">Vehicles <ion-badge item-end>{{ film.vehicles.length }}</ion-badge></button>\n      <button ion-item (click)="getFilmSpecies()">Species <ion-badge item-end>{{ film.species.length }}</ion-badge></button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/bharti/ionicapps/ionic-demo/src/pages/film-details/film-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FilmDetailsPage);

//# sourceMappingURL=film-details.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map