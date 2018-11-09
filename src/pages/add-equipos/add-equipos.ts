import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private historialEquipos: HistorialEquiposProvider, private toastCtrl:ToastController,
      private formBuilder:FormBuilder) {
      this.equipoForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        ciudad: ['', Validators.required],
        jugadores: [[], Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEquiposPage');
  }

  addTeam(){
    this.historialEquipos.agregar_equipo(this.equipoForm);
  }
}
