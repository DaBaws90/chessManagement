import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  equipos: Equipo[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jornadas: HistorialEquiposProvider) {
    this.equipos = this._jornadas.cargar_jornadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

}
