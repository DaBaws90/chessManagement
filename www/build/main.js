webpackJsonp([8],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(43);
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
 * Generated class for the EditPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPlayerPage = /** @class */ (function () {
    function EditPlayerPage(navCtrl, navParams, formBuilder, toastCtrl, historialProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.historialProvider = historialProvider;
        this.jugador = navParams.get("jugador");
        this.index = this.navParams.get("index");
        this.jugadorForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellidos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            elo: [''],
            jugadas: [''],
            ganadas: [''],
            empatadas: [''],
            perdidas: [''],
            casa: [''],
            fuera: [''],
            puntos: ['']
        });
    }
    EditPlayerPage.prototype.editPlayer = function () {
        console.log(this.jugadorForm);
        this.historialProvider.editar_historial(this.jugadorForm, this.index);
        this.presentToast(this.jugador.nombre);
        this.navCtrl.pop();
    };
    EditPlayerPage.prototype.presentToast = function (nombre) {
        var toast = this.toastCtrl.create({
            message: 'Jugador ' + nombre + ' editado con éxito',
            duration: 3000
        });
        toast.present();
    };
    EditPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-player',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\edit-player\edit-player.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Editar jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jugadorForm" (ngSubmit)="editPlayer()">\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" readonly formControlName="nombre" value="{{jugador.nombre}}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Apellidos</ion-label>\n\n    <ion-input type="text" readonly formControlName="apellidos" value="{{jugador.apellidos}}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Teléfono</ion-label>\n\n    <ion-input type="tel" formControlName="telefono" value="{{jugador.telefono}}"></ion-input>\n\n  </ion-item>\n\n    <ion-input type="hidden" formControlName="elo" value="{{jugador.elo}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="jugadas" value="{{jugador.jugadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="ganadas" value="{{jugador.ganadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="empatadas" value="{{jugador.empatadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="perdidas" value="{{jugador.perdidas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="casa" value="{{jugador.casa}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="fuera" value="{{jugador.fuera}}"></ion-input>\n\n    \n\n    <button class="editPlayer" type="submit" ion-button>Guardar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\edit-player\edit-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]])
    ], EditPlayerPage);
    return EditPlayerPage;
}());

//# sourceMappingURL=edit-player.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, tCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tCtrl = tCtrl;
        this.afAuth = afAuth;
        this.user = { email: "", password: "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /*logIn(){
      this.auth.loginUser(this.user.email,this.user.password).then((user) => {
      }
    )
     .catch(err=>{
      let toast = this.tCtrl.create({
        //message: "Email or password incorrect",
        message: err,
        duration: 3000,
        position: 'middle',
      });
      toast.present();
    })*/
    LoginPage.prototype.logIn = function () {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(function (user) { return Promise.resolve(_this.user); })
            .catch(function (err) {
            var toast = _this.tCtrl.create({
                message: err,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Home</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form>\n\n    <ion-item>\n\n      <ion-label floating>Email/Username</ion-label>\n\n      <ion-input [(ngModel)]="user.email" name="email" type="text" autocapitalize="off" required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="user.password" name="password" type="password" required></ion-input>\n\n    </ion-item>\n\n    <div padding>\n\n      <button ion-button (click)="logIn()" type="submit" full color="light">Log in</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-equipos/add-equipos.module": [
		719,
		7
	],
	"../pages/add-player/add-player.module": [
		720,
		6
	],
	"../pages/details/details.module": [
		721,
		5
	],
	"../pages/edit-player/edit-player.module": [
		722,
		4
	],
	"../pages/equipo-detail/equipo-detail.module": [
		723,
		3
	],
	"../pages/equipos/equipos.module": [
		724,
		1
	],
	"../pages/jugador/jugador.module": [
		725,
		0
	],
	"../pages/login/login.module": [
		726,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_options__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { JugadorPage } from '../jugador/jugador';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.options = [];
        this.options = __WEBPACK_IMPORTED_MODULE_3__data_data_options__["a" /* OPTIONS */].slice(0);
    }
    HomePage.prototype.logOut = function () {
        this.afAuth.auth.signOut().then(function () {
            console.log("Sesión cerrada con éxito");
        });
    };
    HomePage.prototype.goTo = function (option) {
        var page = option.nombre + "Page";
        console.log("Going to: " + page);
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      Menú principal\n\n    </ion-title>\n\n    <ion-item color="dark">\n\n      <button item-end ion-button (click)="logOut()" color="light" right><ion-icon name="exit"></ion-icon></button>\n\n    </ion-item>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let option of options" (click)="goTo(option)">\n\n      <!--<button block ion-button color="light" (click)="irEquipos()">Equipos</button>-->\n\n      <ion-avatar item-start>\n\n        <img [src]="option.img">\n\n      </ion-avatar>\n\n      <h2>{{ option.nombre }}</h2>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    Object.defineProperty(AuthProvider.prototype, "Session", {
        /*loginUser(email:string, password:string){
          console.log(email+" "+password);
          return this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then(user=>Promise.resolve(user))
          .catch(err=>Promise.reject(err))
          }*/
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__ = __webpack_require__(43);
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
 * Generated class for the AddEquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEquiposPage = /** @class */ (function () {
    function AddEquiposPage(navCtrl, navParams, historialEquipos, toastCtrl, formBuilder, historial) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialEquipos = historialEquipos;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.historial = historial;
        this.jugadoresEquipo = [];
        this.equipoForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            jugadores: [[]]
        });
        this.jugadoresEquipo = this.historial.cargar_historial();
        this.cont = 0;
    }
    AddEquiposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEquiposPage');
    };
    AddEquiposPage.prototype.addTeam = function () {
        this.historialEquipos.agregar_equipo(this.equipoForm);
        this.presentToast(this.equipoForm.value['nombre']);
        this.navCtrl.pop();
    };
    AddEquiposPage.prototype.presentToast = function (nombre) {
        var toast = this.toastCtrl.create({
            message: 'Equipo ' + nombre + ' añadido con éxito',
            duration: 3000
        });
        toast.present();
    };
    AddEquiposPage.prototype.select = function () {
        this.cont += 1;
        console.log(this.cont);
    };
    AddEquiposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-equipos',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\add-equipos\add-equipos.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Añadir equipo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="equipoForm" (ngSubmit)="addTeam()">\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input type="text" formControlName="nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Ciudad</ion-label>\n\n      <ion-input type="text" formControlName="ciudad"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Jugadores (ordenados por ELO)</ion-label>\n\n      <ion-select formControlName="jugadores" multiple="true" [(ngModel)]="jugadores">\n\n        <ion-option *ngFor="let jugador of jugadoresEquipo" [value]="jugador" \n\n        (ionSelect)="select()" [disabled]="cont > 3">\n\n          {{jugador.nombre}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <div text-center>\n\n      <button ion-button class="addTeam" type="submit" [disabled]="!equipoForm.valid">Añadir</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\add-equipos\add-equipos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _f || Object])
    ], AddEquiposPage);
    return AddEquiposPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=add-equipos.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(43);
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
 * Generated class for the AddPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPlayerPage = /** @class */ (function () {
    function AddPlayerPage(navCtrl, navParams, formBuilder, toastCtrl, historialProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.historialProvider = historialProvider;
        this.jugadorForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellidos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            elo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddPlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPlayerPage');
    };
    AddPlayerPage.prototype.addPlayer = function () {
        this.historialProvider.agregar_historial(this.jugadorForm);
        this.presentToast(this.jugadorForm.value['nombre']);
        this.navCtrl.pop();
    };
    AddPlayerPage.prototype.presentToast = function (nombre) {
        var toast = this.toastCtrl.create({
            message: 'Jugador ' + nombre + ' añadido con éxito',
            duration: 3000
        });
        toast.present();
    };
    AddPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-player',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\add-player\add-player.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Añadir jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jugadorForm" (ngSubmit)="addPlayer()">\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input type="text" formControlName="nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Apellidos</ion-label>\n\n      <ion-input type="text" formControlName="apellidos"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Teléfono</ion-label>\n\n      <ion-input type="tel" formControlName="telefono"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>ELO</ion-label>\n\n      <ion-input type="number" formControlName="elo"></ion-input>\n\n    </ion-item>\n\n    <div text-center>\n\n      <button ion-button class="addPlayer" type="submit" [disabled]="!jugadorForm.valid">Añadir</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\add-player\add-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]])
    ], AddPlayerPage);
    return AddPlayerPage;
}());

//# sourceMappingURL=add-player.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_player_edit_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(43);
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, historialProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialProvider = historialProvider;
        this.jugador = this.navParams.get("jugador");
        this.index = this.navParams.get("index");
        this.editando = false;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        this.jugador = this.historialProvider.cargar_historial()[this.index];
    };
    DetailsPage.prototype.goEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_player_edit_player__["a" /* EditPlayerPage */], { "jugador": this.jugador, "index": this.index });
    };
    DetailsPage.prototype.cerrar = function () {
        this.navCtrl.pop();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\details\details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Detalles\n\n      <!-- de {{ jugador.nombre }} -->\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cerrar()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/user.png">\n\n      </ion-avatar>\n\n      <h2>{{jugador.nombre}}</h2>\n\n      <p>ELO : {{jugador.elo}}</p>\n\n      <button *ngIf="!editando" ion-button item-end color="dark" (click)="goEdit()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      Apellidos:\n\n      <ion-note item-end>\n\n        {{jugador.apellidos}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Teléfono:\n\n      <ion-note item-end>\n\n        {{jugador.telefono}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas jugadas:\n\n      <ion-note item-end>\n\n        {{jugador.jugadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas ganadas:\n\n      <ion-note item-end>\n\n        {{jugador.ganadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas empatadas:\n\n      <ion-note item-end>\n\n        {{jugador.empatadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas perdidas:\n\n      <ion-note item-end>\n\n        {{jugador.perdidas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas como local:\n\n      <ion-note item-end>\n\n        {{jugador.casa}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas como visitante:\n\n      <ion-note item-end>\n\n        {{jugador.fuera}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Puntos totales:\n\n      <ion-note item-end>\n\n        {{jugador.puntos}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(91);
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
 * Generated class for the EquipoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipoDetailPage = /** @class */ (function () {
    function EquipoDetailPage(navCtrl, navParams, historialEquipos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = [];
        this.equipo = this.navParams.get("equipo");
        this.idx = this.navParams.get("idx");
    }
    EquipoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoDetailPage');
    };
    EquipoDetailPage.prototype.cerrar = function () {
        this.navCtrl.pop();
    };
    EquipoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo-detail',template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\equipo-detail\equipo-detail.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Detalles\n\n      <!-- de {{ jugador.nombre }} -->\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cerrar()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/team.png">\n\n      </ion-avatar>\n\n      <h2>{{equipo.nombre}}</h2>\n\n      <p>Ciudad : {{equipo.ciudad}}</p>\n\n      <button *ngIf="!editando" ion-button item-end color="dark" (click)="goEdit()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item *ngFor="let jugador of equipo.jugadores; let i = index">\n\n      <h2> Jugador {{ (i + 1) }}</h2>\n\n      <ion-note item-end>\n\n          {{ jugador.nombre }}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\pages\equipo-detail\equipo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _c || Object])
    ], EquipoDetailPage);
    return EquipoDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=equipo-detail.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_player_add_player__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_historial_historial__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_player_edit_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_historial_equipos_historial_equipos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_equipos_add_equipos__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_equipo_detail_equipo_detail__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_player_add_player__["a" /* AddPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_player_edit_player__["a" /* EditPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_equipos_add_equipos__["a" /* AddEquiposPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipo_detail_equipo_detail__["a" /* EquipoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-equipos/add-equipos.module#AddEquiposPageModule', name: 'AddEquiposPage', segment: 'add-equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-player/add-player.module#AddPlayerPageModule', name: 'AddPlayerPage', segment: 'add-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-player/edit-player.module#EditPlayerPageModule', name: 'EditPlayerPage', segment: 'edit-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo-detail/equipo-detail.module#EquipoDetailPageModule', name: 'EquipoDetailPage', segment: 'equipo-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugador/jugador.module#JugadorPageModule', name: 'JugadorPage', segment: 'jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_10__config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_player_add_player__["a" /* AddPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_player_edit_player__["a" /* EditPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_equipos_add_equipos__["a" /* AddEquiposPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipo_detail_equipo_detail__["a" /* EquipoDetailPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_historial_historial__["a" /* HistorialProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistorialProvider = /** @class */ (function () {
    function HistorialProvider() {
        this._historial = [];
        this.jugador1 = {
            nombre: "Jugador 1",
            apellidos: "Prueba",
            telefono: "123456789",
            elo: 50,
            jugadas: 0,
            ganadas: 0,
            empatadas: 0,
            perdidas: 0,
            casa: 0,
            fuera: 0,
            puntos: 0
        };
        this.jugador2 = {
            nombre: "Jugador 2",
            apellidos: "Prueba",
            telefono: "123456789",
            elo: 40,
            jugadas: 0,
            ganadas: 0,
            empatadas: 0,
            perdidas: 0,
            casa: 0,
            fuera: 0,
            puntos: 0
        };
        this.jugador3 = {
            nombre: "Jugador 3",
            apellidos: "Prueba",
            telefono: "123456789",
            elo: 60.5,
            jugadas: 0,
            ganadas: 0,
            empatadas: 0,
            perdidas: 0,
            casa: 0,
            fuera: 0,
            puntos: 0
        };
        this._historial.unshift(this.jugador1, this.jugador2, this.jugador3);
    }
    HistorialProvider.prototype.cargar_historial = function () {
        return this._historial.sort(function (a, b) {
            if (Number(a.elo) > Number(b.elo)) {
                return -1;
            }
            else if (Number(a.elo) < Number(b.elo)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    HistorialProvider.prototype.toPlayer = function (jugadorForm) {
        this.jugador = {
            nombre: jugadorForm.value['nombre'],
            apellidos: jugadorForm.value['apellidos'],
            telefono: jugadorForm.value['telefono'],
            elo: jugadorForm.value['elo'],
            jugadas: 0,
            ganadas: 0,
            empatadas: 0,
            perdidas: 0,
            casa: 0,
            fuera: 0,
            puntos: 0
        };
        return this.jugador;
    };
    HistorialProvider.prototype.modifyPlayer = function (jugadorForm) {
        this.jugador = {
            nombre: jugadorForm.value['nombre'],
            apellidos: jugadorForm.value['apellidos'],
            telefono: jugadorForm.value['telefono'],
            elo: jugadorForm.value['elo'],
            jugadas: jugadorForm.value['jugadas'],
            ganadas: jugadorForm.value['ganadas'],
            empatadas: jugadorForm.value['empatadas'],
            perdidas: jugadorForm.value['perdidas'],
            casa: jugadorForm.value['casa'],
            fuera: jugadorForm.value['fuera'],
            puntos: jugadorForm.value['puntos']
        };
        return this.jugador;
    };
    HistorialProvider.prototype.agregar_historial = function (jugadorForm) {
        this._historial.unshift(this.toPlayer(jugadorForm));
    };
    HistorialProvider.prototype.editar_historial = function (jugadorForm, index) {
        this._historial[index] = this.modifyPlayer(jugadorForm);
    };
    HistorialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HistorialProvider);
    return HistorialProvider;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\DAM\PMDM\App Final Trimestre\ajedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS; });
var OPTIONS = [
    {
        nombre: "Jugador",
        img: "assets/imgs/options/user.png"
    },
    {
        nombre: "Equipos",
        img: "assets/imgs/options/team.png"
    }
];
//# sourceMappingURL=data.options.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyC8zKGQXI8X4O_sePUP9EhhzAaSBjQcQj0",
    authDomain: "ajedrez-53dba.firebaseapp.com",
    databaseURL: "https://ajedrez-53dba.firebaseio.com",
    projectId: "ajedrez-53dba",
    storageBucket: "ajedrez-53dba.appspot.com",
    messagingSenderId: "906297540905"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialEquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the HistorialEquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistorialEquiposProvider = /** @class */ (function () {
    function HistorialEquiposProvider() {
        this._historialEquipos = [];
        this.equipo = {
            nombre: "Equipo A",
            ciudad: "Barcelona",
            jugadores: []
        };
        this.equipo2 = {
            nombre: "Equipo B",
            ciudad: "Valencia",
            jugadores: []
        };
        this.equipo3 = {
            nombre: "Equipo C",
            ciudad: "Madrid",
            jugadores: []
        };
        this._historialEquipos.unshift(this.equipo, this.equipo2, this.equipo3);
        console.log('Hello HistorialEquiposProvider Provider');
    }
    HistorialEquiposProvider.prototype.cargar_equipos = function () {
        return this._historialEquipos;
    };
    HistorialEquiposProvider.prototype.toTeam = function (equipoForm) {
        this.equipo = {
            nombre: equipoForm.value['nombre'],
            ciudad: equipoForm.value['ciudad'],
            jugadores: equipoForm.value['jugadores']
        };
        return this.equipo;
    };
    HistorialEquiposProvider.prototype.agregar_equipo = function (equipoForm) {
        this._historialEquipos.push(this.toTeam(equipoForm));
    };
    HistorialEquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HistorialEquiposProvider);
    return HistorialEquiposProvider;
}());

//# sourceMappingURL=historial-equipos.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map