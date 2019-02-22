webpackJsonp([0],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JornadaPageModule", function() { return JornadaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jornada__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JornadaPageModule = /** @class */ (function () {
    function JornadaPageModule() {
    }
    JornadaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jornada__["a" /* JornadaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jornada__["a" /* JornadaPage */]),
            ],
        })
    ], JornadaPageModule);
    return JornadaPageModule;
}());

//# sourceMappingURL=jornada.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_detail_equipo_detail__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
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
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosPage = /** @class */ (function () {
    function ResultadosPage(navCtrl, navParams, _jornadas, afDB, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadas = _jornadas;
        this.afDB = afDB;
        this.fbApp = fbApp;
        this.equipos = this._jornadas.cargar_jugadas();
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
    };
    ResultadosPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ResultadosPage');
        this.equipos = this._jornadas.cargar_jugadas();
    };
    ResultadosPage.prototype.details = function (equipo) {
        var _this = this;
        this._jornadas.getJornada(equipo).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__equipo_detail_equipo_detail__["a" /* EquipoDetailPage */], { "equipo": _this._jornadas.jornada });
        });
    };
    ResultadosPage.prototype.goToHome = function () {
        this.navCtrl.popToRoot();
        console.log("Navigating to: HomePage");
    };
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultados',template:/*ion-inline-start:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\resultados\resultados.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Resultados</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="goToHome()">Home <ion-icon name="home"></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let equipo of equipos | async; let i = index" (click)="details(equipo)">\n\n    <ion-item >\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/poll-solid.svg">\n\n      </ion-avatar>\n\n      <h2>{{equipo.nombre}}</h2>\n\n      <ion-note item-end>\n\n        {{equipo.ciudad}} ({{ equipo.local }})\n\n      </ion-note>\n\n      </ion-item>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\resultados\resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"]])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_equipos_add_equipos__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resultados_resultados__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jugadores_to_jornada_jugadores_to_jornada__ = __webpack_require__(293);
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
 * Generated class for the JornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadaPage = /** @class */ (function () {
    function JornadaPage(navCtrl, navParams, _jornadas) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadas = _jornadas;
        this.equipos = this._jornadas.cargar_jornadas();
    }
    JornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadaPage');
    };
    JornadaPage.prototype.ionViewWillEnter = function () {
        this.equipos = this._jornadas.cargar_jornadas();
    };
    JornadaPage.prototype.addEquiposView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_equipos_add_equipos__["a" /* AddEquiposPage */]);
        console.log("Navigating to: AddEquiposPage");
    };
    JornadaPage.prototype.details = function (equipo, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__["a" /* ModalJornadaPage */], { "equipo": equipo, "idx": idx });
    };
    JornadaPage.prototype.addJugadorToJornada = function (equipo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__jugadores_to_jornada_jugadores_to_jornada__["a" /* JugadoresToJornadaPage */], { "equipo": equipo });
    };
    JornadaPage.prototype.delete = function (idx) {
        console.log(idx);
        // this._jornadas.cargar_jornadas().splice(idx, 1);
        this.equipos = this._jornadas.cargar_jornadas();
    };
    JornadaPage.prototype.goToResultados = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__resultados_resultados__["a" /* ResultadosPage */]);
    };
    JornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornada',template:/*ion-inline-start:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\jornada\jornada.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jornada</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="goToResultados()">Ir a resultados</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!--<ion-item *ngIf="equipos.length == " class="mensaje">\n\n    <div text-center padding>\n\n      No hay jornadas pendientes\n\n    </div>\n\n  </ion-item> -->\n\n\n\n  <ion-list>\n\n\n\n    <ion-item-sliding *ngFor="let equipo of equipos | async; let i = index">\n\n      <ion-item (click)="addJugadorToJornada(equipo)" *ngIf="equipo.jugadores == null">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/options/chess-rook-solid.svg">\n\n        </ion-avatar>\n\n        <h2>{{equipo.nombre}}</h2>\n\n        <p>Ciudad: {{equipo.ciudad}}</p>\n\n        <ion-icon item-right name="ios-arrow-back"></ion-icon>\n\n        <ion-note item-end>Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="delete(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Borrar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n  <div text-center padding>\n\n    <button ion-button color="primary" (click)="addEquiposView()">Añadir jornada</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pablo\Documents\DAM\PMDM\App Segundo Trimestre\chessManagement\chessManagement\src\pages\jornada\jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]])
    ], JornadaPage);
    return JornadaPage;
}());

//# sourceMappingURL=jornada.js.map

/***/ })

});
//# sourceMappingURL=0.js.map