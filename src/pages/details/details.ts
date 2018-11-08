import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../interfaces/player.interfaces';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { EditPlayerPage } from '../edit-player/edit-player';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  jugador:Jugador;
  editando: boolean;
  index: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private historialProvider: HistorialProvider) {
    this.jugador = this.navParams.get("jugador");
    this.index = this.navParams.get("index");
    console.log(this.index);
    this.editando = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  /*editable(){
    var cont = document.getElementsByClassName("disabled");
    this.editando = true;
    for( var i = 0; i < cont.length; i++){
      cont[i].removeAttribute("disabled");
    }
  }*/

  goEdit() {
    this.navCtrl.push(EditPlayerPage, {"jugador": this.jugador, "index": this.index});
  }
  
  cerrar(){
    this.navCtrl.pop();
    //document.getElementsByClassName("disabled")[0].removeAttribute("disabled");
  }
}
