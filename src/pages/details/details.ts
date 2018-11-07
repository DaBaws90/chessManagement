import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  jugador:Jugador;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jugador = this.navParams.get("jugador");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
