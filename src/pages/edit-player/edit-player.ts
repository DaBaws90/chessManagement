import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HistorialProvider } from '../../providers/historial/historial';
import { JugadorPage } from '../jugador/jugador';

/**
 * Generated class for the EditPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-player',
  templateUrl: 'edit-player.html',
})
export class EditPlayerPage {
  jugador: Jugador;
  jugadorForm: FormGroup;
  index: number;
  index2: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl: ToastController, private historialProvider: HistorialProvider) {
    this.jugador = navParams.get("jugador");
    this.index = this.navParams.get("index");
    this.jugadorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      elo: ['', Validators.required],
      jugadas: ['', Validators.required],
      ganadas: ['', Validators.required],
      empatadas: ['', Validators.required],
      perdidas: ['', Validators.required],
      casa: ['', Validators.required],
      fuera: ['', Validators.required],
      puntos: ['', Validators.required]
    });
  }

  editPlayer() {
    console.log(this.jugadorForm);
    this.historialProvider.editar_historial(this.jugadorForm, this.index);
    this.presentToast(this.jugador.nombre);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.index2 = this.index;
    console.log(this.index2);
  }

  presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jugador ' + nombre + ' editado con éxito',
      duration: 3000
    });
    toast.present();
  }
}
