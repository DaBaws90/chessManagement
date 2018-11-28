import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { ModalJornadaPage } from '../modal-jornada/modal-jornada';
import { AddEquiposPage } from '../add-equipos/add-equipos';
import { ResultadosPage } from '../resultados/resultados';

/**
 * Generated class for the JornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornada',
  templateUrl: 'jornada.html',
})
export class JornadaPage {
  equipos:Equipo[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _jornadas:HistorialEquiposProvider) {
      this.equipos = this._jornadas.cargar_pendientes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaPage');
  }

  ionViewWillEnter() {
    this.equipos = this._jornadas.cargar_pendientes();
  }

  addEquiposView(){
    this.navCtrl.push(AddEquiposPage);
    console.log("Navigating to: AddEquiposPage");
  }

  details(equipo:Equipo, idx:number){
    this.navCtrl.push(ModalJornadaPage, {"equipo":equipo, "idx": idx});
  }

  delete(idx: number) {
    console.log(idx);
    this._jornadas.cargar_jornadas().splice(idx, 1);
    this.equipos = this._jornadas.cargar_pendientes();
  }

  goToResultados() {
    this.navCtrl.push(ResultadosPage);
  }

}
