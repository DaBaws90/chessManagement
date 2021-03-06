import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FirebaseApp } from 'angularfire2';
import { ModalJornadaPage } from '../modal-jornada/modal-jornada';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the PuntuarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntuar',
  templateUrl: 'puntuar.html',
})
export class PuntuarPage {

  equipos: Observable<Equipo[]>;
  equipo: Observable<Jugador[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public _jornadas: HistorialEquiposProvider, public afDB: AngularFireDatabase,
    public fbApp: FirebaseApp) {
    this.equipos = this._jornadas.cargar_pendientes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ResultadosPage');
    this.equipos = this._jornadas.cargar_pendientes();
  }

  details(equipo:Equipo){
    this._jornadas.getJornada(equipo).then(() => {
      this.navCtrl.push(ModalJornadaPage, {"equipo": this._jornadas.jornada});
    })
  }

  goToHome(){
    this.navCtrl.popToRoot();
    console.log("Navigating to: HomePage");
  }

}
