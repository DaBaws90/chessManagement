webpackJsonp([2],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadorPageModule", function() { return JugadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugador__ = __webpack_require__(508);
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_add_player__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(44);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// import * as admin from 'firebase-admin';


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
        // this.historialProvider.getOne().then((data) => {
        //   this.user = data
        //   console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
        // })
        this.user = this.navParams.get('user');
    }
    JugadorPage.prototype.ionViewCanEnter = function () {
        // this.historialProvider.getOne().then((data) => {
        //   this.user = data
        //   console.log("NOW I HAVE A CAN ENTER "+data.email+", "+this.user.key)
        // })
        this.user = this.navParams.get('user');
    };
    JugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadorPage');
        // this.getOne()
        // this.historialProvider.getOne().then((data) => {
        //   this.user = data
        //   console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
        // })
        this.user = this.navParams.get('user');
    };
    JugadorPage.prototype.ionViewWillEnter = function () {
        this.jugadores = this.historialProvider.cargar_historial();
        // this.historialProvider.getOne().then((data) => {
        //   this.user = data
        //   // console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
        // })
        // this.historialProvider.getOne().then((data) => {
        //   this.user = data
        //   console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
        // })
        // this.getCurrent().then(() => {
        //   console.log("ENTER "+this.user.key)
        // })
        // console.log("ENTER "+this.user.key)
    };
    JugadorPage.prototype.getCurrent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.historialProvider.getOne()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
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
            selector: 'page-jugador',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\jugador\jugador.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n      <button text-center ion-item block *ngFor="let jugador of jugadores; let i = index" (click)="details(jugador, i)">\n\n        <ion-item>\n\n          {{jugador.nombre}}\n\n          <ion-note item-end>\n\n            {{jugador.elo}}\n\n          </ion-note>\n\n        </ion-item>\n\n        \n\n      </button>\n\n    <ion-item>\n\n      <button ion-button block color="secondary" (click)="addPlayerPage()">Añadir jugador</button>\n\n    </ion-item>\n\n  </ion-list> \n\n</ion-content> -->\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let jugador of jugadores | async; let i = index">\n\n      <ion-item (click)="details(jugador, i)">\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/options/user.png">\n\n        </ion-avatar>\n\n        <h2>{{ jugador.nombre }} {{ jugador.apellidos }}</h2>\n\n        <p>ELO: {{ jugador.elo }}</p>\n\n        <ion-icon item-right name="ios-arrow-back"></ion-icon>\n\n        <ion-note item-end>Deslizar</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="deleteUser(jugador)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Borrar\n\n        </button>\n\n        <button ion-button color="primary" (click)="goEdit(jugador, i)">\n\n          <ion-icon name="create"></ion-icon>\n\n          Editar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    \n\n    <ion-item padding *ngIf="user.rol != \'capitan\'">\n\n      <div text-center>\n\n        <button ion-button color="primary" (click)="addPlayerPage()">Añadir jugador</button>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\jugador\jugador.html"*/,
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