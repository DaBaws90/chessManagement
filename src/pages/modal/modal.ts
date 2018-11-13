import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  jugadores:Jugador[];
  selected:Jugador[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jugadores = this.navParams.get("jugadores");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  addPlayer(jugador:Jugador){
    this.selected.push(jugador);
    console.log(jugador);
  }

}
