webpackJsonp([2],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JornadaPageModule", function() { return JornadaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jornada__ = __webpack_require__(734);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jornada__["a" /* JornadaPage */]),
            ],
        })
    ], JornadaPageModule);
    return JornadaPageModule;
}());

//# sourceMappingURL=jornada.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_equipos_add_equipos__ = __webpack_require__(363);
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
        this.equipos = [];
        this.equipos = this._jornadas.cargar_pendientes();
    }
    JornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadaPage');
    };
    JornadaPage.prototype.ionViewWillEnter = function () {
        this.equipos = this._jornadas.cargar_pendientes();
    };
    JornadaPage.prototype.addEquiposView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_equipos_add_equipos__["a" /* AddEquiposPage */]);
        console.log("Navigating to: AddEquiposPage");
    };
    JornadaPage.prototype.details = function (equipo, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__["a" /* ModalJornadaPage */], { "equipo": equipo, "idx": idx });
    };
    JornadaPage.prototype.delete = function (idx) {
        console.log(idx);
        this._jornadas.cargar_jornadas().splice(idx, 1);
        this.equipos = this._jornadas.cargar_pendientes();
    };
    JornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornada',template:/*ion-inline-start:"C:\Users\pere_\Desktop\Ionic\ajedrez\src\pages\jornada\jornada.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jornada</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item *ngIf="equipos.length == 0" class="mensaje">\n\n    <div text-center padding>\n\n      No hay jornadas pendientes\n\n    </div>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item-sliding *ngFor="let equipo of equipos; let i = index">\n\n      <ion-item (click)="details(equipo, i)">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/chess-rook-solid.svg">\n\n        </ion-avatar>\n\n        <h2>{{equipo.nombre}}</h2>\n\n        <p>Ciudad: {{equipo.ciudad}}</p>\n\n        <ion-icon item-right name="ios-arrow-back"></ion-icon>\n\n        <ion-note item-end>Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="delete(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Borrar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n  <div text-center padding>\n\n    <button ion-button color="primary" (click)="addEquiposView()">Añadir jornada</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pere_\Desktop\Ionic\ajedrez\src\pages\jornada\jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]])
    ], JornadaPage);
    return JornadaPage;
}());

//# sourceMappingURL=jornada.js.map

/***/ })

});
//# sourceMappingURL=2.js.map