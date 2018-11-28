import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { EquipoDetailPage } from '../equipo-detail/equipo-detail';
import { JornadaPage } from '../jornada/jornada';

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
    this.equipos = this._jornadas.cargar_jugadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  ionViewWillEnter() {
    this.equipos = this._jornadas.cargar_jugadas();
  }

  details(equipo: Equipo, idx: number) {
    this.navCtrl.push(EquipoDetailPage, {"equipo":equipo, "idx": idx});
  }

  goToHome(){
    this.navCtrl.popToRoot();
    console.log("Navigating to: HomePage");
  }

}
