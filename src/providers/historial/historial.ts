import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../auth/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { ToastController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
// import * as admin from 'firebase-admin';



/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private _historial: Jugador[] = [];
  private jugador: Jugador;
  // users: Observable<any[]>;
  users;
  refCategoria;
  allowed;
  user: Jugador = <Jugador>{};

  constructor(public auth: AuthProvider, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, 
    private fbApp: FirebaseApp, private toastCtrl: ToastController, private alertCtrl: AlertController) {
      
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
    return this.afDB.list('users').valueChanges();
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

  getUser(){
    return this.user;
  }

  getOne(): any{
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
        this.user.nombre = LUL.val().nombre
        this.user.apellidos = LUL.val().apellidos
        this.user.telefono = LUL.val().telefono
        this.user.elo = LUL.val().elo
        this.user.jugadas = LUL.val().jugadas
        this.user.ganadas = LUL.val().ganadas
        this.user.empatadas = LUL.val().empatadas
        this.user.perdidas = LUL.val().perdidas
        this.user.casa = LUL.val().casa
        this.user.fuera = LUL.val().fuera
        this.user.puntos = LUL.val().puntos
        this.user.email = LUL.val().email
        this.user.key = LUL.val().key
        this.user.rol = LUL.val().rol
      }).then(() => {
        console.log("GETONE "+this.user)
        return this.user
      }).catch(function(error) {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
      console.log("GETONE "+this.user)
    })
    // return this.user
  }

  deleteData(user: any) {
    this.afDB.object('/users/' + user.key).remove();
  }

  // getCurrentUser(){
  //   this.afAuth.authState.take(1).subscribe(auth => {
  //     this.user = this.afDB.object(`users/${auth.uid}`)
  //   })
  //   return this.user
    // if(this.fbApp.auth().currentUser.uid != null){
    //   var uid = this.fbApp.auth().currentUser.uid;
    //   admin.auth().getUser(uid).then(function(user) {
    //     return user;
    //   })
    //   .catch(function(error) {
    //     let alert = this.alertCtrl.create({
    //       title: 'Error',
    //       subTitle: error.message,
    //       buttons: ['Aceptar']
    //     });
    //     alert.present();
    //   })
      // this.allowed = this.fbApp.database().ref().child('users/' + this.fbApp.auth().currentUser.uid).on('value', (data) => {
      //   return data.val()
      // })
      // console.log(this.allowed)
      // return this.allowed
      
      // this.allowed = this.afDB.object('/users/'+ this.fbApp.auth().currentUser.uid)
      //   .snapshotChanges().subscribe(res => {
      //       return res.payload.val();
      //   });
      //   console.log(this.allowed)
      //   return this.allowed
      
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

      // console.log(this.afDB.object(`/users/${this.fbApp.auth().currentUser.uid}`).valueChanges())
      // this.afDB.list('/users').snapshotChanges().subscribe((res) => {
      //   res.forEach((ele:any) => {
      //     if(ele.payload.val().key == this.fbApp.auth().currentUser.uid) {
      //       return ele.payload.val().rol
      //     }
      //   });
      // });
    // }
    // else{
    //   return null;
    // }
    // 
  // }

}
