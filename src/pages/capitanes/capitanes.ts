import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { Observable } from 'rxjs';
import { Jugador } from '../../interfaces/player.interfaces';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the CapitanesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {
  captains: Observable<Jugador[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public historial: HistorialProvider, public toastCtrl: ToastController,
    public historialProv: HistorialProvider) {

    this.captains = this.historial.getCaptains()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
  }

  details(jugador: Jugador) {
    this.navCtrl.push(DetailsPage, {"jugador": jugador});
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

  deleteCaptain(user: Jugador) {
    this.historialProv.deleteCaptain(user).then(() => {
      this.presentToast(user.nombre + ' dejó de ser capitán')
    })
  }

  // linkToTeam(user: Jugador) {
  //   // Links to a certain team
  // }

}
