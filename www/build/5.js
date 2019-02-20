webpackJsonp([5],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitanesPageModule", function() { return CapitanesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capitanes__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CapitanesPageModule = /** @class */ (function () {
    function CapitanesPageModule() {
    }
    CapitanesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__capitanes__["a" /* CapitanesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__capitanes__["a" /* CapitanesPage */]),
            ],
        })
    ], CapitanesPageModule);
    return CapitanesPageModule;
}());

//# sourceMappingURL=capitanes.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitanesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_historial__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(290);
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
 * Generated class for the CapitanesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CapitanesPage = /** @class */ (function () {
    function CapitanesPage(navCtrl, navParams, historial, toastCtrl, historialProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historial = historial;
        this.toastCtrl = toastCtrl;
        this.historialProv = historialProv;
        this.captains = this.historial.getCaptains();
    }
    CapitanesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapitanesPage');
    };
    CapitanesPage.prototype.details = function (jugador) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], { "jugador": jugador });
    };
    CapitanesPage.prototype.presentToast = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var toast = _this.toastCtrl.create({
                message: 'El jugador ' + data,
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
            resolve(true);
        });
    };
    CapitanesPage.prototype.deleteCaptain = function (user) {
        var _this = this;
        this.historialProv.deleteCaptain(user).then(function () {
            _this.presentToast(user.nombre + ' dejó de ser capitán');
        });
    };
    CapitanesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-capitanes',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\capitanes\capitanes.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Capitanes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let jugador of captains | async; let i = index">\n\n      <ion-item (click)="details(jugador, i)">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/options/captain.png">\n\n        </ion-avatar>\n\n        <h2>{{ jugador.nombre }} {{ jugador.apellidos }}</h2>\n\n        <p>ELO: {{ jugador.elo }}</p>\n\n        <ion-icon item-right name="ios-arrow-back"></ion-icon>\n\n        <ion-note item-end>Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="deleteCaptain(jugador)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Quitar capitanía\n\n        </button>\n\n        <!-- <button ion-button color="primary" (click)="linkToTeam(jugador, i)">\n\n          <ion-icon name="create"></ion-icon>\n\n          Asignar equipo\n\n        </button> -->\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\capitanes\capitanes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_historial_historial__["a" /* HistorialProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_historial_historial__["a" /* HistorialProvider */]])
    ], CapitanesPage);
    return CapitanesPage;
}());

//# sourceMappingURL=capitanes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map