import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Jugador } from '../../interfaces/player.interfaces';
import { Observable } from 'rxjs';
import { HistorialProvider } from '../../providers/historial/historial';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the JugadoresToJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores-to-jornada',
  templateUrl: 'jugadores-to-jornada.html',
})
export class JugadoresToJornadaPage {
  private selected: Jugador[];
  private jugadores: Observable<any[]>;
  private equipo: Equipo;
  private keys: Jugador[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private historial: HistorialProvider,
    private afDB: AngularFireDatabase) {
    this.jugadores = this.historial.cargar_historial();
    this.equipo = this.navParams.get("equipo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresToJornadaPage');
  }

  private presentModal() {
    let modal = this.modalCtrl.create(ModalPage, { "jugadores": this.jugadores });
    modal.present();
    modal.onDidDismiss(data => {
      this.selected = data;
    });
  }

  private saveJugadores() {
    this.selected.forEach(jugador => {
      this.keys.push(jugador);
    });
    this.equipo.jugadores = this.keys;
    this.afDB.database.ref().child('jornadas/' + this.equipo.key).set(this.equipo).then(() => {
      this.navCtrl.pop()
    });
  }

}
