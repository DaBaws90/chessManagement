import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { DetailsPage } from '../details/details';
import { EditPlayerPage } from '../edit-player/edit-player';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
// import * as admin from 'firebase-admin';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the JugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugador',
  templateUrl: 'jugador.html',
})
export class JugadorPage {
  jugadores: Observable<any[]>;
  // user: Jugador = <Jugador>{};
  user: Jugador = <Jugador>{}

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialProvider: HistorialProvider, private afAuth: AngularFireAuth, private afDB: AngularFireDatabase,
    private fbApp: FirebaseApp, private alertCtrl: AlertController) {
      this.jugadores = this.historialProvider.cargar_historial();
      // this.historialProvider.getOne().then((data) => {
      //   this.user = data
      //   console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
      // })
      this.user = this.navParams.get('user');
  }

  ionViewCanEnter(){
    // this.historialProvider.getOne().then((data) => {
    //   this.user = data
    //   console.log("NOW I HAVE A CAN ENTER "+data.email+", "+this.user.key)
    // })
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorPage');
    // this.getOne()
    // this.historialProvider.getOne().then((data) => {
    //   this.user = data
    //   console.log("NOW I HAVE A VALUE "+data.email+", "+this.user.key)
    // })
    this.user = this.navParams.get('user');
  }

  ionViewWillEnter() {
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
    this.user = this.navParams.get('user');
  }

  // async getCurrent(){
  //   this.user = await this.historialProvider.getOne()
  // }

  addPlayerPage() {
    this.navCtrl.push(AddPlayerPage);
  }

  details(jugador: Jugador, index: number) {
    this.navCtrl.push(DetailsPage, { "jugador": jugador, "index": index });
  }

  goEdit(jugador: Jugador, idx: number) {
    this.navCtrl.push(EditPlayerPage, {"jugador": jugador, "index": idx});    
  }

  deleteUser(user:any) {
    this.historialProvider.deleteData(user);
  }

  // getOne(){
  //   this.afAuth.authState.take(1).subscribe(auth => {
  //     // this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
  //     this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
  //       this.user = LUL.val()
  //     }).then(() => {
  //       console.log("CURRENT USER: "+this.user.nombre+" "+this.user.apellidos)
  //     }).catch(function(error) {
  //       let alert = this.alertCtrl.create({
  //         title: 'Error',
  //         subTitle: error.message,
  //         buttons: ['Aceptar']
  //       });
  //       alert.present();
  //     })
  //   })
  // }
  
}
