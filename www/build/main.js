webpackJsonp([12],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(67);
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
    function AddPlayerPage(navCtrl, navParams, formBuilder, toastCtrl, historialProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.historialProvider = historialProvider;
        this.auth = auth;
        this.jugadorForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellidos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            elo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddPlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPlayerPage');
    };
    AddPlayerPage.prototype.addPlayer = function () {
        this.historialProvider.agregar_historial(this.jugadorForm);
        // this.presentToast(this.jugadorForm.value['nombre']);
        this.navCtrl.pop();
    };
    var _a, _b, _c, _d, _e, _f;
    AddPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-player',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\add-player\add-player.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Añadir jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jugadorForm" (ngSubmit)="addPlayer()">\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input formControlName="email" name="email" type="text" autocapitalize="off" required>\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input formControlName="pass" name="pass" type="password" required>\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input type="text" formControlName="nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Apellidos</ion-label>\n\n      <ion-input type="text" formControlName="apellidos"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Teléfono</ion-label>\n\n      <ion-input type="tel" formControlName="telefono"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>ELO</ion-label>\n\n      <ion-input type="number" formControlName="elo"></ion-input>\n\n    </ion-item>\n\n    <div text-center>\n\n      <button ion-button class="addPlayer" type="submit" [disabled]="!jugadorForm.valid">Añadir</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\add-player\add-player.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _f || Object])
    ], AddPlayerPage);
    return AddPlayerPage;
}());

//# sourceMappingURL=add-player.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(41);
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
    var _a, _b, _c, _d, _e;
    EditPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-player',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\edit-player\edit-player.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Editar jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jugadorForm" (ngSubmit)="editPlayer()">\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" formControlName="nombre" value="{{jugador.nombre}}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Apellidos</ion-label>\n\n    <ion-input type="text" formControlName="apellidos" value="{{jugador.apellidos}}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Teléfono</ion-label>\n\n    <ion-input type="tel" formControlName="telefono" value="{{jugador.telefono}}"></ion-input>\n\n  </ion-item>\n\n    <ion-input type="hidden" formControlName="elo" value="{{jugador.elo}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="jugadas" value="{{jugador.jugadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="ganadas" value="{{jugador.ganadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="empatadas" value="{{jugador.empatadas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="perdidas" value="{{jugador.perdidas}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="casa" value="{{jugador.casa}}"></ion-input>\n\n    <ion-input type="hidden" formControlName="fuera" value="{{jugador.fuera}}"></ion-input>\n\n    \n\n    <button class="editPlayer" type="submit" ion-button>Guardar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\edit-player\edit-player.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _e || Object])
    ], EditPlayerPage);
    return EditPlayerPage;
}());

//# sourceMappingURL=edit-player.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.selected = [];
        this.jugadores = this.navParams.get("jugadores");
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.addPlayer = function (jugador) {
        if (this.selected.indexOf(jugador) > -1) {
            var i = this.selected.indexOf(jugador);
            this.selected.splice(i, 1);
        }
        else {
            this.selected.push(jugador);
        }
    };
    ModalPage.prototype.save = function () {
        if (this.selected.length != 4) {
            this.presentToast();
        }
        else {
            this.viewCtrl.dismiss(this.selected);
        }
    };
    ModalPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Debes seleccionar 4 jugadores',
            duration: 3000
        });
        toast.present();
    };
    var _a, _b, _c, _d;
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\modal\modal.html"*/'<!--\n\n  Generated template for the ModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Modal\n\n      <!-- de {{ jugador.nombre }} -->\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cerrar()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores">\n\n      <ion-label>{{ jugador.nombre }}</ion-label>\n\n      <ion-checkbox (ionChange)="addPlayer(jugador)">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n    <div text-center padding>\n\n      <button ion-button (click)="save()">Guardar</button>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_player_add_player__ = __webpack_require__(157);
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
    function LoginPage(navCtrl, navParams, tCtrl, afAuth, auth, alertCtrl, toastCtrl, fireApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tCtrl = tCtrl;
        this.afAuth = afAuth;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fireApp = fireApp;
        this.user = {
            email: "",
            password: ""
        };
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
    LoginPage.prototype.signin = function () {
        // this.auth.registerUser(this.user.email, this.user.password)
        //   .then((user) => {
        //     let toast = this.toastCtrl.create({
        //       message: 'Usuario ' + this.fireApp.auth().currentUser.uid + ' ha creado su cuenta con éxito',
        //       duration: 3000
        //     });
        //     toast.present();
        //     this.navCtrl.push()
        //   })
        //   .catch(err => {
        //     let alert = this.alertCtrl.create({
        //       title: 'Error',
        //       subTitle: err.message,
        //       buttons: ['Aceptar']
        //     });
        //     alert.present();
        //   })
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_player_add_player__["a" /* AddPlayerPage */]);
    };
    LoginPage.prototype.login = function ( /*email:string, password:string*/) {
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <div text-center>\n\n      <ion-title>Iniciar sesión</ion-title>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <form>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input [(ngModel)]="user.email" name="email" type="text" autocapitalize="off" required>\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input [(ngModel)]="user.password" name="password" type="password" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <div padding>\n\n        <button ion-button (click)="login()" type="submit" color="primary" block>\n\n          Login\n\n        </button>\n\n\n\n        <button ion-button (click)="signin()" color="dark" block>\n\n          Registrarse\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["FirebaseApp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["FirebaseApp"]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-equipos/add-equipos.module": [
		493,
		11
	],
	"../pages/add-player/add-player.module": [
		494,
		10
	],
	"../pages/details/details.module": [
		495,
		9
	],
	"../pages/edit-player/edit-player.module": [
		496,
		8
	],
	"../pages/equipo-detail/equipo-detail.module": [
		497,
		7
	],
	"../pages/equipos/equipos.module": [
		498,
		3
	],
	"../pages/jornada/jornada.module": [
		499,
		0
	],
	"../pages/jugador/jugador.module": [
		500,
		2
	],
	"../pages/login/login.module": [
		501,
		6
	],
	"../pages/modal-jornada/modal-jornada.module": [
		502,
		5
	],
	"../pages/modal/modal.module": [
		503,
		4
	],
	"../pages/resultados/resultados.module": [
		504,
		1
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
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_options__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(71);
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






//import { JugadorPage } from '../jugador/jugador';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth, historialProvider, fbApp) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.historialProvider = historialProvider;
        this.fbApp = fbApp;
        this.options = [];
        this.user = {};
        this.options = __WEBPACK_IMPORTED_MODULE_3__data_data_options__["a" /* OPTIONS */].slice(0);
        this.getAuthUser().then(function (data) {
            // this.user = data
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getAuthUser().then(function (data) {
            // this.user = data
            // console.log("NOW I HAVE A WILLENTER "+this.user.key)
            console.log("NOW I HAVE A DIDLOAD " + data);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getAuthUser().then(function (data) {
            // this.user = data
            // console.log("NOW I HAVE A DIDLOAD "+this.user.key)
            console.log("NOW I HAVE A DIDLOAD " + data);
        });
    };
    HomePage.prototype.ionViewCanEnter = function () {
        this.getAuthUser().then(function (data) {
            // this.user = data
            // console.log("NOW I HAVE A CANENTER "+this.user.key)
            console.log("NOW I HAVE A DIDLOAD " + data);
        });
    };
    HomePage.prototype.logOut = function () {
        this.afAuth.auth.signOut().then(function () {
            console.log("Sesión cerrada con éxito");
        });
    };
    HomePage.prototype.goTo = function (option) {
        var page = option.nombre + "Page";
        console.log("Going to: " + page);
        this.navCtrl.push(page, { 'user': this.user });
    };
    HomePage.prototype.getAuthUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.authState.take(1).subscribe(function (auth) {
                    // this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
                    _this.fbApp.database().ref().child('users').child(auth.uid).once('value', function (LUL) {
                        _this.user = LUL.val();
                    }).then(function () {
                        console.log("THEN");
                        // return this.user
                    }).catch(function (error) {
                        var alert = this.alertCtrl.create({
                            title: 'Error',
                            subTitle: error.message,
                            buttons: ['Aceptar']
                        });
                        alert.present();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      Menú principal\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logOut()" color="light" right>Salir <ion-icon name="exit"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let option of options" (click)="goTo(option)">\n\n      <!--<button block ion-button color="light" (click)="irEquipos()">Equipos</button>-->\n\n      <ion-avatar item-start>\n\n        <img [src]="option.img">\n\n      </ion-avatar>\n\n      <h2>{{ option.nombre }}</h2>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(159);
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
    function AddEquiposPage(navCtrl, navParams, historialEquipos, toastCtrl, formBuilder, historial, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historialEquipos = historialEquipos;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.historial = historial;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.d = new Date();
        this.offset = new Date().getTimezoneOffset() + 13;
        this.myDate = new Date().toISOString();
        this.myTime = new Date(this.d.getTime() + (3600000 * this.offset)).toISOString(); // Necesita revisión
        this.calendar = {}; // Inicializarlo vacío así o en el constructor
        // private listTeams:Equipo[];
        this.event = {
            fecha: this.myDate,
            hora: this.myTime,
            selected: "local"
        };
        this.equipoForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            jugadores: [[]],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            hora: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            local: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.jugadores = this.historial.cargar_historial();
        this.cont = 0;
    }
    AddEquiposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEquiposPage');
    };
    AddEquiposPage.prototype.addTeam = function () {
        this.equipoForm.value["jugadores"] = this.selected;
        this.historialEquipos.agregar_equipo(this.equipoForm);
        this.presentToast(this.equipoForm.value['nombre']);
        this.navCtrl.pop();
        console.log(this.equipoForm.value);
    };
    AddEquiposPage.prototype.presentToast = function (nombre) {
        var toast = this.toastCtrl.create({
            message: 'Jornada ' + nombre + ' añadida con éxito',
            duration: 3000
        });
        toast.present();
    };
    AddEquiposPage.prototype.presentModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */], { "jugadores": this.jugadores });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.selected = data;
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    AddEquiposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-equipos',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\add-equipos\add-equipos.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Añadir jornada</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="equipoForm" (ngSubmit)="addTeam()">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input type="text" formControlName="nombre"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Ciudad</ion-label>\n\n      <ion-input type="text" formControlName="ciudad"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="presentModal()">\n\n      Jugadores\n\n    </ion-item>\n\n\n\n    <ion-list *ngIf="selected">\n\n      <ion-item *ngFor="let jugador of selected">\n\n        {{ jugador.nombre }}\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label>Local o visitante</ion-label>\n\n      <ion-select formControlName="local" [ngModel]="event.selected">\n\n        <ion-option value="local" selected>Local</ion-option>\n\n        <ion-option value="visitante">Visitante</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Fecha de la jornada</ion-label>\n\n      <ion-datetime displayFormat="DD MMM YYYY" min="2010" max="2030-12-31" formControlName="fecha" [ngModel]="event.fecha"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Hora de la partida</ion-label>\n\n      <ion-datetime displayFormat="HH:mm" pickerFormat="h:mm A" formControlName="hora" [ngModel]="event.hora"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <div text-center padding>\n\n      <button ion-button class="addTeam" type="submit" [disabled]="!equipoForm.valid || !selected">Añadir</button>\n\n    </div>\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\add-equipos\add-equipos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _h || Object])
    ], AddEquiposPage);
    return AddEquiposPage;
}());

//# sourceMappingURL=add-equipos.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(70);
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
    var _a, _b, _c;
    EquipoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo-detail',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\equipo-detail\equipo-detail.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Detalles\n\n      <!-- de {{ jugador.nombre }} -->\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cerrar()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/team.png">\n\n      </ion-avatar>\n\n      <h2>{{equipo.nombre}}</h2>\n\n      <p>Ciudad : {{equipo.ciudad}}</p>\n\n    </ion-item>\n\n    <ion-item *ngFor="let jugador of equipo.jugadores; let i = index">\n\n      <h2> {{ jugador.nombre }}</h2>\n\n      <ion-note text-capitalize item-end>\n\n          {{ equipo.resultados[i].resultado}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\equipo-detail\equipo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _c || Object])
    ], EquipoDetailPage);
    return EquipoDetailPage;
}());

//# sourceMappingURL=equipo-detail.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalJornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historial_equipos_historial_equipos__ = __webpack_require__(70);
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
 * Generated class for the ModalJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalJornadaPage = /** @class */ (function () {
    function ModalJornadaPage(navCtrl, navParams, formBuilder, historialProvider, _jornadas, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.historialProvider = historialProvider;
        this._jornadas = _jornadas;
        this.toastCtrl = toastCtrl;
        // private datos: [];
        this.resultados = [];
        this.jornadas = [];
        this.equipo = this.navParams.get("equipo");
        for (var _i = 0, _a = this.equipo.jugadores; _i < _a.length; _i++) {
            var p = _a[_i];
            this.res = {
                jugador: p,
                resultado: "empata"
            };
            this.resultados.push(this.res);
            this.jugadores = this.historialProvider.cargar_historial();
        }
    }
    ModalJornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalJornadaPage');
    };
    ModalJornadaPage.prototype.addResultado = function (player, result) {
        this.resultados.forEach(function (resultado) {
            if (resultado.jugador == player) {
                resultado.resultado = result;
            }
        });
    };
    // guardar() {
    //   this.historialProvider.cargar_historial().forEach(jugador => {
    //     this.resultados.forEach(resultado => {
    //       if ((resultado.jugador.nombre == jugador.nombre) && (resultado.jugador.apellidos == jugador.apellidos)) {
    //         jugador.jugadas += 1;
    //         switch (resultado.resultado) {
    //           case "gana":
    //             jugador.ganadas += 1;
    //             jugador.puntos += 1;
    //             break;
    //           case "empata":
    //             jugador.empatadas += 1;
    //             jugador.puntos += 0.5;
    //             break;
    //           case "pierde":
    //             jugador.perdidas += 1;
    //             break;
    //         }
    //       }
    //     });
    //   });
    //   this.equipo.jugada = true;
    //   this.equipo.resultados = this.resultados;
    //   this.presentToast(this.equipo.nombre);
    //   this.navCtrl.pop();
    // }
    ModalJornadaPage.prototype.presentToast = function (nombre) {
        var toast = this.toastCtrl.create({
            message: 'Resultados de la jornada ' + nombre + ' añadidos con éxito',
            duration: 3000
        });
        toast.present();
    };
    var _a, _b, _c, _d, _e, _f;
    ModalJornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-jornada',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\modal-jornada\modal-jornada.html"*/'<!--\n\n  Generated template for the ModalJornadaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Resultado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor="let player of equipo.jugadores; let i = index">\n\n    <ion-item>\n\n      <ion-label>{{ player.nombre }}</ion-label>\n\n      <ion-select >\n\n        <ion-option (ionSelect)="addResultado(player, \'gana\')">\n\n          Gana\n\n        </ion-option>\n\n        <ion-option selected (ionSelect)="addResultado(player, \'empata\')">\n\n          Empata\n\n        </ion-option>\n\n        <ion-option (ionSelect)="addResultado(player, \'pierde\')">\n\n          Pierde\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div text-center padding>\n\n  <button ion-button (click)="guardar()">Guardar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\modal-jornada\modal-jornada.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _f || Object])
    ], ModalJornadaPage);
    return ModalJornadaPage;
}());

//# sourceMappingURL=modal-jornada.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_player_edit_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__ = __webpack_require__(41);
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
    var _a, _b, _c;
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\details\details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Detalles\n\n      <!-- de {{ jugador.nombre }} -->\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cerrar()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/user.png">\n\n      </ion-avatar>\n\n      <h2>{{jugador.nombre}}</h2>\n\n      <p>ELO : {{jugador.elo}}</p>\n\n      <button *ngIf="!editando" ion-button item-end color="dark" (click)="goEdit()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      Apellidos:\n\n      <ion-note item-end>\n\n        {{jugador.apellidos}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Teléfono:\n\n      <ion-note item-end>\n\n        {{jugador.telefono}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas jugadas:\n\n      <ion-note item-end>\n\n        {{jugador.jugadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas ganadas:\n\n      <ion-note item-end>\n\n        {{jugador.ganadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas empatadas:\n\n      <ion-note item-end>\n\n        {{jugador.empatadas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas perdidas:\n\n      <ion-note item-end>\n\n        {{jugador.perdidas}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas como local:\n\n      <ion-note item-end>\n\n        {{jugador.casa}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Partidas como visitante:\n\n      <ion-note item-end>\n\n        {{jugador.fuera}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      Puntos totales:\n\n      <ion-note item-end>\n\n        {{jugador.puntos}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_historial_historial__["a" /* HistorialProvider */]) === "function" && _c || Object])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
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
/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistorialProvider = /** @class */ (function () {
    function HistorialProvider(auth, afDB, afAuth, fbApp, toastCtrl, alertCtrl) {
        this.auth = auth;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.fbApp = fbApp;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this._historial = [];
        this.user = {};
    }
    HistorialProvider.prototype.cargar_historial = function () {
        // return this._historial.sort(function(a, b) {
        //   if(Number(a.elo) > Number(b.elo)) {
        //     return -1;
        //   } else if(Number(a.elo) < Number(b.elo)) {
        //     return 1;
        //   } else {
        //     return 0;
        //   }
        // });
        return this.afDB.list('users').valueChanges();
    };
    HistorialProvider.prototype.toPlayer = function (jugadorForm, uid) {
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
            puntos: 0,
            email: jugadorForm.value['email'],
            key: uid,
            rol: 'user'
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
            puntos: jugadorForm.value['puntos'],
            email: jugadorForm.value['email'],
            key: jugadorForm.value['key'],
            rol: jugadorForm.value['rol'],
        };
        return this.jugador;
    };
    HistorialProvider.prototype.agregar_historial = function (jugadorForm) {
        var _this = this;
        this.auth.registerUser(jugadorForm.value['email'], jugadorForm.value['pass'])
            .then(function (user) {
            var toast = _this.toastCtrl.create({
                message: 'Usuario ' + _this.fbApp.auth().currentUser.email + ' ha creado su cuenta con éxito',
                duration: 3000
            });
            toast.present();
            var uid = _this.fbApp.auth().currentUser.uid;
            _this.fbApp.database().ref().child('users').child(uid).set(_this.toPlayer(jugadorForm, uid));
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    HistorialProvider.prototype.editar_historial = function (jugadorForm, index) {
        this._historial[index] = this.modifyPlayer(jugadorForm);
    };
    HistorialProvider.prototype.getOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.afAuth.authState.take(1).subscribe(function (auth) {
                            // this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
                            _this.fbApp.database().ref().child('users').child(auth.uid).once('value', function (LUL) {
                                _this.user = LUL.val();
                            }).then(function () {
                                // console.log("CURRENT USER: "+this.user.nombre+" "+this.user.apellidos)
                                return _this.user;
                            }).catch(function (error) {
                                var alert = this.alertCtrl.create({
                                    title: 'Error',
                                    subTitle: error.message,
                                    buttons: ['Aceptar']
                                });
                                alert.present();
                            });
                        });
                        return [4 /*yield*/, this.user];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // getCurrentUser(){
    //   if(this.fbApp.auth().currentUser.uid != null){
    //     this.fbApp.database().ref().child('users').child(this.fbApp.auth().currentUser.uid)
    //       .once('value', (LUL) => {
    //         this.allowed = LUL.val().rol
    //       }).then(() => {
    //         console.log("PROVIDER "+this.allowed)
    //         return this.allowed
    //       }).catch(err => {
    //         let alert = this.alertCtrl.create({
    //           title: 'Error',
    //           subTitle: err.message,
    //           buttons: ['Aceptar']
    //         });
    //         alert.present();
    //       })
    //   }
    //   else{
    //     return null;
    //   }
    // }
    HistorialProvider.prototype.deleteData = function (user) {
        this.afDB.object('/users/' + user.key).remove();
    };
    HistorialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["FirebaseApp"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], HistorialProvider);
    return HistorialProvider;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_player_add_player__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_historial_historial__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_player_edit_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_historial_equipos_historial_equipos__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_equipos_add_equipos__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_equipo_detail_equipo_detail__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modal_modal__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modal_jornada_modal_jornada__ = __webpack_require__(290);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_jornada_modal_jornada__["a" /* ModalJornadaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-equipos/add-equipos.module#AddEquiposPageModule', name: 'AddEquiposPage', segment: 'add-equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-player/add-player.module#AddPlayerPageModule', name: 'AddPlayerPage', segment: 'add-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-player/edit-player.module#EditPlayerPageModule', name: 'EditPlayerPage', segment: 'edit-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo-detail/equipo-detail.module#EquipoDetailPageModule', name: 'EquipoDetailPage', segment: 'equipo-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornada/jornada.module#JornadaPageModule', name: 'JornadaPage', segment: 'jornada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugador/jugador.module#JugadorPageModule', name: 'JugadorPage', segment: 'jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-jornada/modal-jornada.module#ModalJornadaPageModule', name: 'ModalJornadaPage', segment: 'modal-jornada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados/resultados.module#ResultadosPageModule', name: 'ResultadosPage', segment: 'resultados', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_10__config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_player_add_player__["a" /* AddPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_player_edit_player__["a" /* EditPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_equipos_add_equipos__["a" /* AddEquiposPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipo_detail_equipo_detail__["a" /* EquipoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_jornada_modal_jornada__["a" /* ModalJornadaPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_historial_historial__["a" /* HistorialProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
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
    function MyApp(platform, statusBar, splashScreen, auth, afDB, afAuth, fbApp) {
        var _this = this;
        this.auth = auth;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.fbApp = fbApp;
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.user = {};
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
            // this.getOne()
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_9_angularfire2__["FirebaseApp"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS; });
var OPTIONS = [
    {
        nombre: "Jugador",
        img: "assets/imgs/options/user.png"
    },
    {
        nombre: "Jornada",
        img: "assets/imgs/options/chess-rook-solid.svg"
    },
    {
        nombre: "Resultados",
        img: "assets/imgs/options/poll-solid.svg"
    }
];
//# sourceMappingURL=data.options.js.map

/***/ }),

/***/ 489:
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(44);
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
// import { HttpClient } from '@angular/common/http';


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
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            // El usuario se ha creado correctamente.
            console.log(_this.afAuth.auth.currentUser.uid);
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        get: function () {
            // this.afAuth.auth.currentUser.uid;
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    var _a;
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialEquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this._jornadas = [];
        this._jornadasPendientes = [];
        this._jornadasJugadas = [];
        console.log('Hello HistorialEquiposProvider Provider');
    }
    HistorialEquiposProvider.prototype.cargar_jornadas = function () {
        return this._jornadas;
    };
    HistorialEquiposProvider.prototype.cargar_jugadas = function () {
        var _this = this;
        this._jornadasJugadas = [];
        this._jornadas.forEach(function (jornada) {
            if (jornada.jugada == true) {
                _this._jornadasJugadas.push(jornada);
            }
        });
        return this._jornadasJugadas;
    };
    HistorialEquiposProvider.prototype.cargar_pendientes = function () {
        var _this = this;
        this._jornadasPendientes = [];
        this._jornadas.forEach(function (jornada) {
            if (jornada.jugada == false) {
                _this._jornadasPendientes.push(jornada);
            }
        });
        return this._jornadasPendientes;
    };
    HistorialEquiposProvider.prototype.toTeam = function (equipoForm) {
        this.jornada = {
            nombre: equipoForm.value['nombre'],
            ciudad: equipoForm.value['ciudad'],
            jugadores: equipoForm.value['jugadores'],
            fecha: equipoForm.value['fecha'],
            hora: equipoForm.value['hora'],
            local: equipoForm.value['local'],
            jugada: false,
            resultados: []
        };
        return this.jornada;
    };
    HistorialEquiposProvider.prototype.agregar_equipo = function (equipoForm) {
        this._jornadas.push(this.toTeam(equipoForm));
    };
    HistorialEquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HistorialEquiposProvider);
    return HistorialEquiposProvider;
}());

//# sourceMappingURL=historial-equipos.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map