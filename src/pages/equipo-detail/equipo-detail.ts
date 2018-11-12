import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
/**
 * Generated class for the EquipoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo-detail',
  templateUrl: 'equipo-detail.html',
})
export class EquipoDetailPage {
  equipo: Equipo;
  jugadores: Jugador[] = [];
  idx: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    historialEquipos: HistorialEquiposProvider) {
    this.equipo = this.navParams.get("equipo");
    this.idx = this.navParams.get("idx");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoDetailPage');
  }

  cerrar() {
    this.navCtrl.pop();
  }

}
