import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { OPTIONS } from '../../data/data.options';
import { Option } from '../../interfaces/options.interfaces';
/*import { AddPlayerPage } from '../add-player/add-player';*/
//import { JugadorPage } from '../jugador/jugador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options:Option[] = [];
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    this.options = OPTIONS.slice(0);
  }

  logOut(){
    this.afAuth.auth.signOut().then(()=>{
      console.log("Sesión cerrada con éxito");
    });
  }

  goTo(option: Option){
    let page = option.nombre + "Page";
    console.log("Going to: " + page);
    this.navCtrl.push(page);
  }
}
