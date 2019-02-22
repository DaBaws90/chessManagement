webpackJsonp([2],{

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuarPageModule", function() { return PuntuarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__puntuar__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PuntuarPageModule = /** @class */ (function () {
    function PuntuarPageModule() {
    }
    PuntuarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__puntuar__["a" /* PuntuarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__puntuar__["a" /* PuntuarPage */]),
            ],
        })
    ], PuntuarPageModule);
    return PuntuarPageModule;
}());

//# sourceMappingURL=puntuar.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntuarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historial_equipos_historial_equipos__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
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
 * Generated class for the PuntuarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PuntuarPage = /** @class */ (function () {
    function PuntuarPage(navCtrl, navParams, _jornadas, afDB, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadas = _jornadas;
        this.afDB = afDB;
        this.fbApp = fbApp;
        this.equipos = this._jornadas.cargar_pendientes();
    }
    PuntuarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
    };
    PuntuarPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ResultadosPage');
        this.equipos = this._jornadas.cargar_pendientes();
    };
    PuntuarPage.prototype.details = function (equipo) {
        var _this = this;
        this._jornadas.getJornada(equipo).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__["a" /* ModalJornadaPage */], { "equipo": _this._jornadas.jornada });
        });
    };
    PuntuarPage.prototype.goToHome = function () {
        this.navCtrl.popToRoot();
        console.log("Navigating to: HomePage");
    };
    PuntuarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-puntuar',template:/*ion-inline-start:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\puntuar\puntuar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Puntuar</ion-title>\n    <ion-buttons end>\n      <button ion-button color="primary" (click)="goToHome()">Home <ion-icon name="home"></ion-icon></button></ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let equipo of equipos | async; let i = index" (click)="details(equipo)">\n    <ion-item >\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/options/poll-solid.svg">\n      </ion-avatar>\n      <h2>{{equipo.nombre}}</h2>\n      <ion-note item-end>\n        {{equipo.ciudad}} ({{ equipo.local }})\n      </ion-note>\n      </ion-item>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\puntuar\puntuar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["FirebaseApp"]])
    ], PuntuarPage);
    return PuntuarPage;
}());

//# sourceMappingURL=puntuar.js.map

/***/ })

});
//# sourceMappingURL=2.js.map