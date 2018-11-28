webpackJsonp([4],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalendarioPageModule = /** @class */ (function () {
    function CalendarioPageModule() {
    }
    CalendarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendario__["a" /* CalendarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendario__["a" /* CalendarioPage */]),
            ],
        })
    ], CalendarioPageModule);
    return CalendarioPageModule;
}());

//# sourceMappingURL=calendario.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__ = __webpack_require__(68);
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
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, navParams, _jornadas) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadas = _jornadas;
        this.myDate = new Date().toISOString();
        this.myTime = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Timestamp"].toString(); // Necesita revisión
        this.calendar = {}; // Inicializarlo vacío así o en el constructor
        this.event = {
            fecha: this.myDate,
            hora: this.myTime,
            nombre: ""
        };
        this.listTeams = _jornadas.cargar_jornadas();
    }
    CalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarioPage');
    };
    CalendarioPage.prototype.isLocal = function (text) {
        this.calendar.local = text;
    };
    CalendarioPage.prototype.selectTeam = function (equipo) {
        this.calendar.equipo = equipo;
    };
    CalendarioPage.prototype.goTo = function () {
        this.calendar.fecha = this.event.fecha;
        this.calendar.hora = this.event.hora;
        this.calendar.nombre = this.event.nombre;
        // this.navCtrl.push(JornadaPage, {"calendar": this.calendar});
        console.log(this.calendar);
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\calendario\calendario.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Añadir jornada</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="event.nombre" name="nombre" placeholder="Nombre"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Equipos</ion-label>\n\n    <ion-select>\n\n      <ion-option *ngFor="let equipo of listTeams" (ionSelect)="selectTeam(equipo)">\n\n        {{equipo.nombre}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Fecha de la jornada</ion-label>\n\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.fecha"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Local o visitante</ion-label>\n\n      <ion-select>\n\n        <ion-option (ionSelect)="isLocal(\'local\')" selected>Local</ion-option>\n\n        <ion-option (ionSelect)="isLocal(\'visitante\')">Visitante</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Hora de la partida</ion-label>\n\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.hora"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <div text-center padding>\n\n      <button ion-button (click)="goTo()">Guardar</button>\n\n    </div>\n\n \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\calendario\calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ })

});
//# sourceMappingURL=4.js.map