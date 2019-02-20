import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { Observable } from 'rxjs';
import { Jugador } from '../../interfaces/player.interfaces';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public historial: HistorialProvider) {

    this.captains = this.historial.getCaptains()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
  }

}
