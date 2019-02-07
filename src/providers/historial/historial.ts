import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  // users: Observable<any[]>;
  users;
  refCategoria;
  allowed;

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

  deleteData(user: any) {
    this.afDB.object('/users/' + user.key).remove();
  }

  getCurrentUser(){
    if(this.fbApp.auth().currentUser.uid != null){
      // db.database.ref('/User/').orderByChild('uID').equalTo(this.uID).once('value', (snapshot) => {
      // this.fbApp.database().ref('/users/').orderByChild('key').equalTo(currentUser.uid)
      this.fbApp.database().ref().child('users').child(this.fbApp.auth().currentUser.uid)
        .once('value', (LUL) => {
          this.allowed = LUL.val().rol
        })
      // console.log(this.afDB.object(`/users/${this.fbApp.auth().currentUser.uid}`).valueChanges())
      // this.afDB.list('/users').snapshotChanges().subscribe((res) => {
      //   res.forEach((ele:any) => {
      //     if(ele.payload.val().key == this.fbApp.auth().currentUser.uid) {
      //       return ele.payload.val().rol
      //     }
      //   });
      // });
      return this.allowed;
    }
    else{
      return null;
    }
    
  }

  // this.db.object(`leafBox001/${id}`).valueChanges()
//   deleteData(user:any){
//     this.afDB.list('/users').snapshotChanges().subscribe((res) => {
//       res.forEach((ele:any) => {
//         // if(ele.payload.val().email == user.email) {
//         if(ele.key == user.email) {
//           var uid = ele.key;
//           this.afDB.list('/users').remove(ele.key).then(() => {
//             console.log('BORRADO')
//             console.log(uid)
//           })
//         }
//       });
//     });
// }

}
