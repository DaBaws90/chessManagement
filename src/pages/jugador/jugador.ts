import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { DetailsPage } from '../details/details';
import { EditPlayerPage } from '../edit-player/edit-player';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
/**
 * Generated class for the JugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugador',
  templateUrl: 'jugador.html',
})
export class JugadorPage {
  jugadores: Observable<any[]>;
  allowed;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialProvider: HistorialProvider, private fbApp: FirebaseApp, private alertCtrl: AlertController) {
      this.allowed = this.getCurrentUser();
      this.jugadores = this.historialProvider.cargar_historial();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorPage');
  }

  ionViewWillEnter() {
    this.jugadores = this.historialProvider.cargar_historial();
  }

  addPlayerPage() {
    this.navCtrl.push(AddPlayerPage);
  }

  details(jugador: Jugador, index: number) {
    this.navCtrl.push(DetailsPage, { "jugador": jugador, "index": index });
  }

  goEdit(jugador: Jugador, idx: number) {
    this.navCtrl.push(EditPlayerPage, {"jugador": jugador, "index": idx});    
  }

  deleteUser(user:any) {
    this.historialProvider.deleteData(user);
  }

  getCurrentUser(){
    if(this.fbApp.auth().currentUser.uid != null){
      this.fbApp.database().ref().child('users').child(this.fbApp.auth().currentUser.uid)
        .once('value', (LUL) => {
          this.allowed = LUL.val().rol
        }).then(() => {
          console.log("PROVIDER "+this.allowed)
          return this.allowed
        }).catch(err => {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.message,
            buttons: ['Aceptar']
          });
          alert.present();
        })
    }
    else{
      return null;
    }
    
  }
}
