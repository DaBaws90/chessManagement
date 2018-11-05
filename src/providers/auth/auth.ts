import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  /*loginUser(email:string, password:string){
    console.log(email+" "+password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
    }*/

  get Session(){
    return this.afAuth.authState;
  }

  /*logOut(){
    this.afAuth.auth.signOut().then(()=>{
      console.log("Sesión cerrada con éxito");
    });
  }*/

}
