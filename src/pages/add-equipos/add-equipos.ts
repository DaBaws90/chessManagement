import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { HistorialProvider } from '../../providers/historial/historial';
import { Jugador } from '../../interfaces/player.interfaces';

/**
 * Generated class for the AddEquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-equipos',
  templateUrl: 'add-equipos.html',
})
export class AddEquiposPage {
  private equipoForm: FormGroup;
  private jugadoresEquipo: Jugador[] = [];
  private cont: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialEquipos: HistorialEquiposProvider, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private historial: HistorialProvider) {
    this.equipoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      jugadores: [[]]
    });
    this.jugadoresEquipo = this.historial.cargar_historial();
    this.cont = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEquiposPage');
  }

  addTeam() {
    this.historialEquipos.agregar_equipo(this.equipoForm);
    this.presentToast(this.equipoForm.value['nombre']);
    this.navCtrl.pop();
  }

  private presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Equipo ' + nombre + ' añadido con éxito',
      duration: 3000
    });
    toast.present();
  }

  select() {
    this.cont += 1;
    console.log(this.cont);
  }
}
