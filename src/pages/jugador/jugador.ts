import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { DetailsPage } from '../details/details';
import { EditPlayerPage } from '../edit-player/edit-player';
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
  jugadores: Jugador[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialProvider: HistorialProvider) {
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

  details(jugador: Jugador, index: number) {
    this.navCtrl.push(DetailsPage, { "jugador": jugador, "index": index });
  }

  goEdit(jugador: Jugador, idx: number) {
    this.navCtrl.push(EditPlayerPage, {"jugador": jugador, "index": idx});    
  }

  delete(idx: number) {
    this.historialProvider.cargar_historial().splice(idx, 1);
  }

}
