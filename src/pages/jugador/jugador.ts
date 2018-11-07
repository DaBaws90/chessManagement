import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';

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
  //jugadores:Jugador[] = []; o players, o como esté nombrada la interfaz
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.jugadores = JUGADORES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorPage');
  }

  addPlayerPage() {
    this.navCtrl.push(AddPlayerPage);
  }

}
