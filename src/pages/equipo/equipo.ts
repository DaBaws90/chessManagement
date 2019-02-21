import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Banquillo } from '../../interfaces/banquillo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Observable } from 'rxjs';
import { AddTeamPage } from '../add-team/add-team';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  banquillos: Observable<Banquillo[]>
  // jugadores

  constructor(public navCtrl: NavController, public navParams: NavParams, public historialEquipos : HistorialEquiposProvider, 
    public historial :HistorialProvider) {
    this.banquillos = this.historialEquipos.getBanquillos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  private addTeam() {
    this.navCtrl.push(AddTeamPage);
  }

}
