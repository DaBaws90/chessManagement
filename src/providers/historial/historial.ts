//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../auth/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { ToastController, AlertController } from 'ionic-angular';
import { Observable, Subject } from 'rxjs';


/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private _historial: Jugador[] = [];
  jugador: Jugador;
  usersRef$: Observable<any[]>;

  constructor(public auth: AuthProvider, public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public fbApp: FirebaseApp,
    private toastCtrl: ToastController, private alertCtrl: AlertController) {
      this.usersRef$ = this.afDB.list('users').valueChanges()
      // .subscribe((datas) => { 
      //   console.log("datas", datas)
      //   },(err)=>{
      //    console.log("probleme : ", err)
      //   });
  }

  cargar_historial() {
    // return this._historial.sort(function(a, b) {
    //   if(Number(a.elo) > Number(b.elo)) {
    //     return -1;
    //   } else if(Number(a.elo) < Number(b.elo)) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    return this.usersRef$;
  }

  private toPlayer(jugadorForm: FormGroup) {
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
  }

  modifyPlayer(jugadorForm: FormGroup) {
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

  }

  agregar_historial(jugadorForm: FormGroup) {
    this.auth.registerUser(jugadorForm.value['email'], jugadorForm.value['pass'])
      .then((user) => {
        let toast = this.toastCtrl.create({
          message: 'Usuario ' + this.fbApp.auth().currentUser.email + ' ha creado su cuenta con éxito',
          duration: 3000
        });
        toast.present();
        var uid = this.fbApp.auth().currentUser.uid;
        this.fbApp.database().ref().child('users').child(uid).set(this.toPlayer(jugadorForm));
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      });
  }

  editar_historial(jugadorForm: FormGroup, index: number) {
    this._historial[index] = this.modifyPlayer(jugadorForm);
  }

}
