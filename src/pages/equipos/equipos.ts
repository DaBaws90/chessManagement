import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { AddEquiposPage } from '../add-equipos/add-equipos';
import { EquipoDetailPage } from '../equipo-detail/equipo-detail';
import { JornadaPage } from '../jornada/jornada';
import { ModalJornadaPage } from '../modal-jornada/modal-jornada';
import { Observable } from 'rxjs';


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
  equipos: Observable<any[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private historialEquiposProvider:HistorialEquiposProvider) {
      this.equipos = this.historialEquiposProvider.cargar_jornadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

  ionViewWillEnter() {
    this.equipos = this.historialEquiposProvider.cargar_jornadas();
  }

  addEquiposView(){
    this.navCtrl.push(AddEquiposPage);
    console.log("Navigating to: AddEquiposPage");
  }

  details(equipo:Equipo, idx:number){
    this.navCtrl.push(ModalJornadaPage, {"equipo":equipo, "idx": idx});
  }
}
