webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailsPageModule", function() { return PersonDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_details__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonDetailsPageModule = (function () {
    function PersonDetailsPageModule() {
    }
    return PersonDetailsPageModule;
}());
PersonDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__person_details__["a" /* PersonDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person_details__["a" /* PersonDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__person_details__["a" /* PersonDetailsPage */]
        ]
    })
], PersonDetailsPageModule);

//# sourceMappingURL=person-details.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDetailsPage; });
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
 * Generated class for the PersonDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PersonDetailsPage = (function () {
    function PersonDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.person = this.navParams.get('person');
    }
    PersonDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonDetailsPage');
    };
    PersonDetailsPage.prototype.getPersonFilms = function () {
        this.navCtrl.push('FilmsPage', { films: this.person.films });
    };
    return PersonDetailsPage;
}());
PersonDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-person-details',template:/*ion-inline-start:"/home/bharti/ionicapps/ionic-demo/src/pages/person-details/person-details.html"*/'<!--\n  Generated template for the PersonDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ person.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-row (click)="getPersonFilms(person.films)">\n        <ion-col>Film Count:</ion-col><ion-col> <ion-badge color="primary">{{ person.films.length }} </ion-badge></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Height:</ion-col><ion-col> {{ person.height }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Mass:</ion-col><ion-col> {{ person.mass }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Hair Color:</ion-col><ion-col> {{ person.hair_color }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Skin Color:</ion-col><ion-col> {{ person.skin_color }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Eye Color:</ion-col><ion-col> {{ person.eye_color }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Birth Year:</ion-col><ion-col> {{ person.birth_year }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Gender:</ion-col><ion-col> {{ person.gender }} </ion-col>\n      </ion-row>\n\n      <!--<label>Height: </label>{{person.height}}<br>\n      <label>Mass: </label>{{person.mass}}<br>\n      <label>Hair Color: </label>{{person.hair_color}}<br>\n      <label>Skin Color: </label>{{person.skin_color}}<br>\n      <label>Eye Color: </label>{{person.eye_color}}<br>\n      <label>Birth Year: </label>{{person.birth_year}}<br>\n      <label>Gender: </label>{{person.gender}}<br>-->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/bharti/ionicapps/ionic-demo/src/pages/person-details/person-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PersonDetailsPage);

//# sourceMappingURL=person-details.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map