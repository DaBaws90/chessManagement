import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { Observable } from 'rxjs';
import { ModalPage } from '../modal/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';

/**
 * Generated class for the AddTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-team',
  templateUrl: 'add-team.html',
})
export class AddTeamPage {
  private equipoForm: FormGroup
  private selected: Jugador[] = []
  jugadores: Observable<any[]>
  // Controlar que jugadores no estén ya seleccionados en otro equipo

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public modalCtrl: ModalController,
    public historial: HistorialProvider, public historialEquipos: HistorialEquiposProvider) {
    this.equipoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      jugadores: [],
    })
    this.jugadores = this.historial.cargar_historial()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTeamPage');
  }

  private presentModal() {
    let modal = this.modalCtrl.create(ModalPage, {"jugadores": this.jugadores});
    modal.present();
    modal.onDidDismiss(data => {
      this.selected = data;
    });
  }

  private saveJugadores() {
    if(this.selected.length == 4) {
      this.historialEquipos.saveJugadores(this.selected);
      this.navCtrl.pop();
    }


  }


}
