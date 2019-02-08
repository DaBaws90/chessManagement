import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { Jugador } from '../interfaces/player.interfaces';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = LoginPage;
  user: Jugador = <Jugador>{};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: AuthProvider,
    public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public fbApp: FirebaseApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session=>{ 
        if(session){
          this.rootPage = HomePage;
        }
        else{
          this.rootPage = LoginPage;
        }
      });
      // this.getOne()
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  // async getOne() {
  //   this.afAuth.authState.take(1).subscribe(auth => {
  //     // this.afDB.object(`/users/${auth.uid}`).query.once('value', (LUL) => {
  //     this.fbApp.database().ref().child('users').child(auth.uid).once('value', (LUL) => {
  //       this.user = LUL.val()
  //     }).then(() => {
  //       console.log("CURRENT USER: "+this.user.nombre+" "+this.user.apellidos)
  //       return this.user
  //     }).catch(function(error) {
  //       let alert = this.alertCtrl.create({
  //         title: 'Error',
  //         subTitle: error.message,
  //         buttons: ['Aceptar']
  //       });
  //       alert.present();
  //     })
  //   })
  //   return this.user;
  // }
}
