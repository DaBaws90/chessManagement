import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HistorialProvider } from '../../providers/historial/historial';
import { AuthProvider } from '../../providers/auth/auth';

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
  // user = {
  //   email: "",
  //   password: ""
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl: ToastController, private historialProvider: HistorialProvider, public auth: AuthProvider) {
    this.jugadorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      elo: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayerPage');
  }

  addPlayer() {
    this.historialProvider.agregar_historial(this.jugadorForm);
    this.presentToast(this.jugadorForm.value['nombre']);
    this.navCtrl.pop();
  }

  private presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jugador ' + nombre + ' añadido con éxito',
      duration: 3000
    });
    toast.present();
  }

}
