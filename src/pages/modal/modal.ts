import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  jugadores: Jugador[];
  selected: Jugador[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private toastCtrl: ToastController) {
    this.jugadores = this.navParams.get("jugadores");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  addPlayer(jugador: Jugador) {
    if(this.selected.indexOf(jugador) > -1) {
      let i = this.selected.indexOf(jugador);
      this.selected.splice(i, 1);
    } else {
      this.selected.push(jugador);
    }
    
  }

  save() {
    if (this.selected.length != 4) {
      this.presentToast();
    } else {
      this.viewCtrl.dismiss(this.selected);
    }
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

  private presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Debes seleccionar 4 jugadores',
      duration: 3000
    });
    toast.present();
  }

}
