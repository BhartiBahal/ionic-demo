webpackJsonp([7],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__characters__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CharactersPageModule = (function () {
    function CharactersPageModule() {
    }
    return CharactersPageModule;
}());
CharactersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__characters__["a" /* CharactersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__characters__["a" /* CharactersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__characters__["a" /* CharactersPage */]
        ]
    })
], CharactersPageModule);

//# sourceMappingURL=characters.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_ui__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharactersPage = (function () {
    function CharactersPage(navCtrl, navParams, apiProvider, appUi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.appUi = appUi;
        this.characters = [];
        this.appUi.showLoading();
        this.apiProvider.getCharactersData(this.navParams.get('characters')).then(function (res) {
            console.log(res);
            _this.characters = res;
            _this.appUi.dismissLoading();
        }, function (err) {
            console.log(err);
            _this.appUi.dismissLoading();
        });
        console.log('test', this.characters);
    }
    CharactersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CharactersPage');
    };
    CharactersPage.prototype.showPersonDetails = function (person) {
        this.navCtrl.push('PersonDetailsPage', { person: person });
    };
    return CharactersPage;
}());
CharactersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-characters',template:/*ion-inline-start:"/home/bharti/ionicapps/ionic-demo/src/pages/characters/characters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Characters</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let character of characters" (click)="showPersonDetails(character)">\n    <ion-card-header>{{ character.name }}</ion-card-header>\n    <!--<ion-card-content>\n      <ion-row>\n        <ion-col>Film Count:</ion-col><ion-col> {{ character.films.length }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Gender:</ion-col><ion-col> {{ character.gender }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Height:</ion-col><ion-col> {{ character.height }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Mass:</ion-col><ion-col> {{ character.mass }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Birth Year:</ion-col><ion-col> {{ character.birth_year }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Eye Color:</ion-col><ion-col> {{ character.eye_color }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Hair Color:</ion-col><ion-col> {{ character.hair_color }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Skin Color:</ion-col><ion-col> {{ character.skin_color }} </ion-col>\n      </ion-row>\n    </ion-card-content>-->\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/bharti/ionicapps/ionic-demo/src/pages/characters/characters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_app_ui__["a" /* AppUi */]])
], CharactersPage);

//# sourceMappingURL=characters.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map