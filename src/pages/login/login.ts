import {  Component} from '@angular/core';
import {  IonicPage,  NavController,  NavParams,  ToastController,  AlertController} from 'ionic-angular';
import {  AuthProvider} from '../../providers/auth/auth';
import {  AngularFireAuth} from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { AddPlayerPage } from '../add-player/add-player';

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
  user = {
    email: "",
    password: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public tCtrl: ToastController, public afAuth: AngularFireAuth, public auth: AuthProvider,
    public alertCtrl: AlertController, public toastCtrl: ToastController, public fireApp: FirebaseApp) {}

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
  signin() {
    // this.auth.registerUser(this.user.email, this.user.password)
    //   .then((user) => {
    //     let toast = this.toastCtrl.create({
    //       message: 'Usuario ' + this.fireApp.auth().currentUser.uid + ' ha creado su cuenta con éxito',
    //       duration: 3000
    //     });
    //     toast.present();
    //     this.navCtrl.push()
    //   })
    //   .catch(err => {
    //     let alert = this.alertCtrl.create({
    //       title: 'Error',
    //       subTitle: err.message,
    //       buttons: ['Aceptar']
    //     });
    //     alert.present();
    //   })
    this.navCtrl.push(AddPlayerPage);
  }

  login( /*email:string, password:string*/ ) {
    return this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(user => Promise.resolve(this.user))
      .catch(err => {
        let toast = this.tCtrl.create({
          message: err,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      })
  }

}
