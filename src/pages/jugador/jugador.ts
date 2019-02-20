import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ViewController } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { DetailsPage } from '../details/details';
import { EditPlayerPage } from '../edit-player/edit-player';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { isPresent } from 'ionic-angular/umd/util/util';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialProvider: HistorialProvider, private afAuth: AngularFireAuth, private afDB: AngularFireDatabase,
    private fbApp: FirebaseApp, private alertCtrl: AlertController, public toastCtrl: ToastController, public viewCtrl : ViewController) {

    this.jugadores = this.historialProvider.cargar_historial();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorPage');
  }

  ionViewWillEnter() {
    this.jugadores = this.historialProvider.cargar_historial();
  }

  addPlayerPage() {
    this.navCtrl.push(AddPlayerPage);
  }

  details(jugador: Jugador) {
    this.navCtrl.push(DetailsPage, { "jugador": jugador });
  }

  goEdit(jugador: Jugador) {
    this.navCtrl.push(EditPlayerPage, {"jugador": jugador});    
  }

  deleteUser(user:any) {
    this.historialProvider.deleteData(user);
  }

  private presentToast(data: any) {
    return new Promise((resolve, reject) => {
      let toast = this.toastCtrl.create({
        message: 'El jugador ' + data,
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
      resolve(true)
    })
  }

  toCaptain(user: Jugador) {
    this.historialProvider.makeCaptain(user).then(() => {
      this.presentToast(user.nombre + ' es ahora capitán')
      // .then(() => {
        // this.navCtrl.push(this.navCtrl.getActive().component).then(() => {
        //   let index = this.viewCtrl.index;
        //   this.navCtrl.remove(index);
        // })
      // })
    })
  }

  deleteCaptain(user: Jugador) {
    this.historialProvider.deleteCaptain(user).then(() => {
      this.presentToast(user.nombre + ' dejó de ser capitán')
    })
  }

}
