webpackJsonp([2],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadorPageModule", function() { return JugadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugador__ = __webpack_require__(509);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jugador__["a" /* JugadorPage */]),
            ],
        })
    ], JugadorPageModule);
    return JugadorPageModule;
}());

//# sourceMappingURL=jugador.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_add_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
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
    function JugadorPage(navCtrl, navParams, historialProvider, afAuth, afDB, fbApp, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialProvider = historialProvider;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.fbApp = fbApp;
        this.alertCtrl = alertCtrl;
        // user: Jugador = <Jugador>{};
        this.user = {};
        this.jugadores = this.historialProvider.cargar_historial();
        this.user = this.navParams.get('user');
    }
    JugadorPage.prototype.ionViewCanEnter = function () {
        this.user = this.navParams.get('user');
    };
    JugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadorPage');
        this.user = this.navParams.get('user');
    };
    JugadorPage.prototype.ionViewWillEnter = function () {
        this.jugadores = this.historialProvider.cargar_historial();
        this.user = this.navParams.get('user');
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
    JugadorPage.prototype.deleteUser = function (user) {
        this.historialProvider.deleteData(user);
    };
    JugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugador',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\jugador\jugador.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let jugador of (jugadores | async)?.slice().reverse(); let i = index">\n\n      <ion-item (click)="details(jugador, i)">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/options/user.png">\n\n        </ion-avatar>\n\n        <h2>{{ jugador.nombre }} {{ jugador.apellidos }}</h2>\n\n        <p>ELO: {{ jugador.elo }}</p>\n\n        <ion-icon item-right name="ios-arrow-back" *ngIf="user.rol == \'capitan\'"></ion-icon>\n\n        <ion-note item-end *ngIf="user.rol == \'capitan\'">Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right" *ngIf="user.rol == \'capitan\'">\n\n        <button ion-button color="danger" (click)="deleteUser(jugador)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Borrar\n\n        </button>\n\n        <button ion-button color="primary" (click)="goEdit(jugador, i)" *ngIf="user.rol == \'capitan\'">\n\n          <ion-icon name="create"></ion-icon>\n\n          Editar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\jugador\jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["FirebaseApp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], JugadorPage);
    return JugadorPage;
}());

//# sourceMappingURL=jugador.js.map

/***/ })

});
//# sourceMappingURL=2.js.map