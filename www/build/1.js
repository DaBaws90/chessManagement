webpackJsonp([1],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JornadaPageModule", function() { return JornadaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jornada__ = __webpack_require__(737);
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

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__ = __webpack_require__(367);
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
    function JornadaPage(navCtrl, navParams, historialEquipos, viewCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialEquipos = historialEquipos;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.selected = [];
        this.equipos = historialEquipos.cargar_equipos();
    }
    JornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadaPage');
    };
    JornadaPage.prototype.viewResults = function (equipo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__["a" /* ModalJornadaPage */], { "equipo": equipo });
    };
    // addTeam(equipo:Equipo){
    //   if(this.selected.indexOf(equipo) > -1) {
    //     let i = this.selected.indexOf(equipo);
    //     this.selected.splice(i, 1);
    //   } else {
    //     this.selected.push(equipo);
    //   }
    // }
    // save() {
    //   if (this.selected.length != 2) {
    //     this.presentToast();
    //   } else {
    //     console.log(this.selected[0]);
    //     console.log(this.selected[1]);
    //     this.navCtrl.push(ModalJornadaPage, {"local":this.selected[0], "visitante":this.selected[1]});
    //     // let modal = this.modalCtrl.create(ModalJornadaPage, {"local":this.selected[0], "visitante":this.selected[1]});
    //     // modal.present();
    //   }
    // }
    JornadaPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Debes seleccionar 2 equipos',
            duration: 3000
        });
        toast.present();
    };
    JornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornada',template:/*ion-inline-start:"C:\Users\pere_\Desktop\Ionic\ajedrez\src\pages\jornada\jornada.html"*/'<!--\n\n  Generated template for the JornadaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jornada</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let equipo of equipos" (click)="viewResults(equipo)">\n\n      <ion-label>{{ equipo.nombre }}</ion-label>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Desktop\Ionic\ajedrez\src\pages\jornada\jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], JornadaPage);
    return JornadaPage;
}());

//# sourceMappingURL=jornada.js.map

/***/ })

});
//# sourceMappingURL=1.js.map