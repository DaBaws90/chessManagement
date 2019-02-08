import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { OPTIONS } from '../../data/data.options';
import { Option } from '../../interfaces/options.interfaces';
import { AddPlayerPage } from '../add-player/add-player';
import { Jugador } from '../../interfaces/player.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { FirebaseApp } from 'angularfire2';
//import { JugadorPage } from '../jugador/jugador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options:Option[] = [];
  user: Jugador = <Jugador>{};
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public historialProvider: HistorialProvider,
    public fbApp: FirebaseApp) {
    this.options = OPTIONS.slice(0);
    this.getAuthUser().then((data) => {
      // this.user = data
    })
  }

  ionViewWillEnter(){
    this.getAuthUser().then((data) => {
      // this.user = data
      // console.log("NOW I HAVE A WILLENTER "+this.user.key)
      console.log("NOW I HAVE A DIDLOAD "+data)
    })
  }

  ionViewDidLoad() {
    this.getAuthUser().then((data) => {
      // this.user = data
      // console.log("NOW I HAVE A DIDLOAD "+this.user.key)
      console.log("NOW I HAVE A DIDLOAD "+data)
    })
  }

  ionViewCanEnter() {
    this.getAuthUser().then((data) => {
      // this.user = data
      // console.log("NOW I HAVE A CANENTER "+this.user.key)
      console.log("NOW I HAVE A DIDLOAD "+data)
    })
  }

  logOut(){
    this.afAuth.auth.signOut().then(()=>{
      console.log("Sesión cerrada con éxito");
    });
  }

  goTo(option: Option){
    let page = option.nombre + "Page";
    console.log("Going to: " + page);
    this.navCtrl.push(page, {'user':this.user});
  }

  async getAuthUser() {
    this.afAuth.authState.take(1).subscribe(auth => {
      // this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
      this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
        this.user = LUL.val()
      }).then(() => {
        console.log("THEN")
        // return this.user
      }).catch(function(error) {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    })
    // return await this.user;
  }
}
