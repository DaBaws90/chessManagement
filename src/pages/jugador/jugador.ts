import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
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
  jugadores:Jugador[] = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private historialProvider: HistorialProvider) {
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

}
