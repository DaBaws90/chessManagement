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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl: ToastController, private historialProvider: HistorialProvider) {
    this.jugador = navParams.get("jugador");
    this.index = this.navParams.get("index");
    this.jugadorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      elo: [''],
      jugadas: [''],
      ganadas: [''],
      empatadas: [''],
      perdidas: [''],
      casa: [''],
      fuera: [''],
      puntos: ['']
    });
  }

  editPlayer() {
    console.log(this.jugadorForm);
    this.historialProvider.editar_historial(this.jugadorForm, this.index);
    this.presentToast(this.jugador.nombre);
    this.navCtrl.pop();
  }

  presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jugador ' + nombre + ' editado con éxito',
      duration: 3000
    });
    toast.present();
  }
}
