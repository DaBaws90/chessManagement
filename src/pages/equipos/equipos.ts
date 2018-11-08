import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';


/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  equipos:Equipo[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private historialEquiposProvider:HistorialEquiposProvider) {
      this.equipos = this.historialEquiposProvider.cargar_equipos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
