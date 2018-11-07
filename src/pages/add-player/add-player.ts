import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the AddPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage {
  private jugadorForm: FormGroup;
  private jugador: Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl: ToastController, private historialProvider: HistorialProvider) {
    this.jugadorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      elo: ['', Validators.required] 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayerPage');
  }

  toPlayer(jugadorForm: FormGroup) {
    this.jugador = {
      nombre: jugadorForm.value['nombre'],
      apellidos: jugadorForm.value['apellidos'],
      telefono: jugadorForm.value['telefono'],
      elo: jugadorForm.value['elo'],
      jugadas: 0,
      ganadas: 0,
      empatadas: 0,
      perdidas: 0,
      casa: 0,
      fuera: 0,
      puntos: 0
    };
    return this.jugador;
    
  }

  addPlayer() {
    this.historialProvider.agregar_historial(this.toPlayer(this.jugadorForm));
    this.presentToast(this.jugadorForm.value['nombre']);
    this.navCtrl.pop();
  }

  presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jugador ' + nombre + ' añadido con éxito',
      duration: 3000
    });
    toast.present();
  }

}
