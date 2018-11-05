import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = { email : "", password: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public tCtrl: ToastController, public afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /*logIn(){
    this.auth.loginUser(this.user.email,this.user.password).then((user) => {
    }
  )
   .catch(err=>{
    let toast = this.tCtrl.create({
      //message: "Email or password incorrect",
      message: err,
      duration: 3000,
      position: 'middle',
    });
    toast.present();
  })*/
  logIn(/*email:string, password:string*/){
    return this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(user=>Promise.resolve(this.user))
      .catch(err=>{
        let toast = this.tCtrl.create({
          message: err,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      })
  }

}
