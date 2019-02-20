import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup } from '@angular/forms';
import { AuthProvider } from '../auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { ToastController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';

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
  captains: Observable<any[]>
  oneUser: Jugador

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
    this.jugador.elo = Number(this.jugador.elo)
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
    this.jugador.elo = Number(this.jugador.elo)
    this.jugador.jugadas = Number(this.jugador.jugadas)
    this.jugador.ganadas = Number(this.jugador.ganadas)
    this.jugador.empatadas = Number(this.jugador.empatadas)
    this.jugador.perdidas = Number(this.jugador.perdidas)
    this.jugador.casa = Number(this.jugador.casa)
    this.jugador.fuera = Number(this.jugador.fuera)
    this.jugador.puntos = Number(this.jugador.puntos)
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

  // Gets the current logged user
  getOne(){
    return new Promise((resolve, reject) => {
      this.afAuth.authState.take(1).subscribe(auth => {
        this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
          this.user = LUL.val()
        })
      })
    })
  }
  // async getOne() {
  //   this.afAuth.authState.take(1).subscribe(auth => {
  //     this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
  //       this.user = LUL.val()
  //     }).then(() => {
  //       return this.user
  //     }).catch(function(error) {
  //       let alert = this.alertCtrl.create({
  //         title: 'Error',
  //         subTitle: error.message,
  //         buttons: ['Aceptar']
  //       });
  //       alert.present();
  //     })
  //   })
  //   return await this.user;
  // }

  deleteData(user: any) {
    this.afDB.object('/users/' + user.key).remove();
  }

  getCaptains(){
    this.captains = this.afDB.list('/users', ref => ref.orderByChild('rol').equalTo('capitan')).valueChanges();
    return this.captains
  }

  getOneUser(key: string){
    return new Promise((resolve, reject) => {
      this.fbApp.database().ref().child('users').child(key).once('value', LUL => {
        this.oneUser = LUL.val()
      })
      resolve(true)
    })
    
  }

  makeCaptain(player: Jugador){
    return new Promise((resolve, reject) => {
      player.rol = 'capitan'
      this.fbApp.database().ref().child('users/' + player.key).set(player);
      resolve(true)
    })
  }

  deleteCaptain(player: Jugador){
    return new Promise((resolve, reject) => {
      player.rol = 'user'
      this.fbApp.database().ref().child('users/' + player.key).set(player);
      resolve(true)
    })
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
