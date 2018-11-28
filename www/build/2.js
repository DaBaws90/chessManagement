webpackJsonp([2],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadorPageModule", function() { return JugadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugador__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JugadorPageModule = /** @class */ (function () {
    function JugadorPageModule() {
    }
    JugadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jugador__["a" /* JugadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jugador__["a" /* JugadorPage */]),
            ],
        })
    ], JugadorPageModule);
    return JugadorPageModule;
}());

//# sourceMappingURL=jugador.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_add_player__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player__ = __webpack_require__(158);
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
 * Generated class for the JugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JugadorPage = /** @class */ (function () {
    function JugadorPage(navCtrl, navParams, historialProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialProvider = historialProvider;
        this.jugadores = [];
    }
    JugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadorPage');
    };
    JugadorPage.prototype.ionViewWillEnter = function () {
        this.jugadores = this.historialProvider.cargar_historial();
    };
    JugadorPage.prototype.addPlayerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_player_add_player__["a" /* AddPlayerPage */]);
    };
    JugadorPage.prototype.details = function (jugador, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { "jugador": jugador, "index": index });
    };
    JugadorPage.prototype.goEdit = function (jugador, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player__["a" /* EditPlayerPage */], { "jugador": jugador, "index": idx });
    };
    JugadorPage.prototype.delete = function (idx) {
        this.historialProvider.cargar_historial().splice(idx, 1);
    };
    JugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugador',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\jugador\jugador.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n      <button text-center ion-item block *ngFor="let jugador of jugadores; let i = index" (click)="details(jugador, i)">\n\n        <ion-item>\n\n          {{jugador.nombre}}\n\n          <ion-note item-end>\n\n            {{jugador.elo}}\n\n          </ion-note>\n\n        </ion-item>\n\n        \n\n      </button>\n\n    <ion-item>\n\n      <button ion-button block color="secondary" (click)="addPlayerPage()">Añadir jugador</button>\n\n    </ion-item>\n\n  </ion-list> \n\n</ion-content> -->\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let jugador of jugadores; let i = index">\n\n      <ion-item (click)="details(jugador, i)">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/options/user.png">\n\n        </ion-avatar>\n\n        <h2>{{ jugador.nombre }} {{ jugador.apellidos }}</h2>\n\n        <p>ELO: {{ jugador.elo }}</p>\n\n        <ion-icon item-right name="ios-arrow-back"></ion-icon>\n\n        <ion-note item-end>Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="delete(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Borrar\n\n        </button>\n\n        <button ion-button color="primary" (click)="goEdit(jugador, i)">\n\n          <ion-icon name="create"></ion-icon>\n\n          Editar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    \n\n    <ion-item padding>\n\n      <div text-center>\n\n        <button ion-button color="primary" (click)="addPlayerPage()">Añadir jugador</button>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\jugador\jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]])
    ], JugadorPage);
    return JugadorPage;
}());

//# sourceMappingURL=jugador.js.map

/***/ })

});
//# sourceMappingURL=2.js.map