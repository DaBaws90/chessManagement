import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { ModalJornadaPage } from '../modal-jornada/modal-jornada';

/**
 * Generated class for the JornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornada',
  templateUrl: 'jornada.html',
})
export class JornadaPage {
  equipos:Equipo[];
  selected:Equipo[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private historialEquipos:HistorialEquiposProvider, 
    private viewCtrl:ViewController, private toastCtrl:ToastController, private modalCtrl:ModalController) {
    this.equipos = historialEquipos.cargar_equipos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaPage');
  }

  viewResults(equipo) {
    this.navCtrl.push(ModalJornadaPage, {"equipo": equipo});
  }

  // addTeam(equipo:Equipo){
  //   if(this.selected.indexOf(equipo) > -1) {
  //     let i = this.selected.indexOf(equipo);
  //     this.selected.splice(i, 1);
  //   } else {
  //     this.selected.push(equipo);
  //   }
  // }

  // save() {
  //   if (this.selected.length != 2) {
  //     this.presentToast();
  //   } else {
  //     console.log(this.selected[0]);
  //     console.log(this.selected[1]);
  //     this.navCtrl.push(ModalJornadaPage, {"local":this.selected[0], "visitante":this.selected[1]});
  //     // let modal = this.modalCtrl.create(ModalJornadaPage, {"local":this.selected[0], "visitante":this.selected[1]});
  //     // modal.present();
  //   }
  // }

  private presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Debes seleccionar 2 equipos',
      duration: 3000
    });
    toast.present();
  }
  
}
