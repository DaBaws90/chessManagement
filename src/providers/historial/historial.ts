import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup } from '@angular/forms';
import { AuthProvider } from '../auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private _historial: Jugador[] = [];
  private jugador: Jugador;
  users;
  user: Jugador = <Jugador>{};

  constructor(public auth: AuthProvider, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, 
    private fbApp: FirebaseApp, private toastCtrl: ToastController, private alertCtrl: AlertController) {
      
    }

  cargar_historial() {
    return this.afDB.list('/users', ref => ref.orderByChild('elo')).valueChanges();
  }

  private toPlayer(jugadorForm: FormGroup, uid:any) {
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
      puntos: jugadorForm.value['puntos'],
      email: jugadorForm.value['email'],
      key: jugadorForm.value['key'],
      rol: jugadorForm.value['rol'],
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
        this.fbApp.database().ref().child('users').child(uid).set(this.toPlayer(jugadorForm, uid));
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

  async getOne() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
        this.user = LUL.val()
      }).then(() => {
        return this.user
      }).catch(function(error) {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    })
    return await this.user;
  }

  deleteData(user: any) {
    this.afDB.object('/users/' + user.key).remove();
  }

  // getCurrentUser(){
      
      // ER GÜENO ---------------------
      // this.fbApp.database().ref().child('users').child(this.fbApp.auth().currentUser.uid)
      //   .once('value', (LUL) => {
      //     this.allowed = LUL.val().rol
      //   }).then(() => {
      //     console.log("PROVIDER "+this.allowed)
      //     return this.allowed
      //   }).catch(err => {
      //     let alert = this.alertCtrl.create({
      //       title: 'Error',
      //       subTitle: err.message,
      //       buttons: ['Aceptar']
      //     });
      //     alert.present();
      //   })

}
