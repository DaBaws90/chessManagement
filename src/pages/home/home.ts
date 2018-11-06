import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddPlayerPage } from '../add-player/add-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
  }
  logOut(){
    this.afAuth.auth.signOut().then(()=>{
      console.log("Sesión cerrada con éxito");
    });
  }

  addPlayerPage() {
    this.navCtrl.push(AddPlayerPage);
  }
}
