import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resultado } from '../../interfaces/resultado.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { ParseSourceFile } from '@angular/compiler';

/**
 * Generated class for the ModalJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-jornada',
  templateUrl: 'modal-jornada.html',
})
export class ModalJornadaPage {
  equipo: Equipo
  // equipo: Observable<Jugador[]>;
  // resultado: {} = {};
  // private resultados: FormGroup;
  private selected: boolean;
  private resultados: Resultado[] = [];
  private res: Resultado;
  private jugadores: Observable<any[]>;
  private jornadas: Equipo[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private historialProvider: HistorialProvider,
    private _jornadas: HistorialEquiposProvider, private toastCtrl: ToastController, private fbApp: FirebaseApp) {
    this.equipo = this.navParams.get('equipo');
    console.log(this.equipo)
    // this.equipo.forEach(player => {
    //   console.log("PLAYER "+player)
    // });
    // this.fbApp.database().ref().child('jornadas').child(this.key).once('value', (data) => {
    //   this.equipo = data.val().jugadores
    //   console.log("DATA "+data.val().jugadores)
    // });

    // for (let p of this.equipo) {
    //   console.log("ENTRO ANTES")
    //   this.res = {
    //     jugador: p.key,
    //     resultado: "empata"
    //   }
    //   console.log("ENTRO")
    //   this.resultados.push(this.res);
    //   // this.jugadores = this.historialProvider.cargar_historial();
    // }

    // this.equipo.forEach(player => {
    //   console.log("KEY "+player.key);
    //   this.res = {
    //     jugador: player.key,
    //     resultado: "empata",
    //   }
    //   this.resultados.push(this.res);
    // });
    
  }

  ionViewCanEnter(){
    console.log('ionViewCanEnter ModalJornadaPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalJornadaPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ModalJornadaPage');
  }

  addResultado(player: string, result: string) {
    console.log("ENTRO "+player)
    this.resultados.forEach(resultado => {
      console.log("LUL")
      if (resultado.jugador == player) {
        resultado.resultado = result;
        console.log("RESULTADO JUGADOR: " + resultado.jugador + " PLAYER KEY: " + player);
      }
    });
  }

  guardar() {
    this.resultados.forEach(resultado => {
      switch (resultado.resultado) {
        case "gana":
          this.fbApp.database().ref().child('users/' + resultado.jugador).child('jugadas').update(1);
          this.fbApp.database().ref().child('users/' + resultado.jugador).child('ganadas').update(1);
          break;
        case "empata":
        this.fbApp.database().ref().child('users/' + resultado.jugador).child('jugadas').update(1);
        this.fbApp.database().ref().child('users/' + resultado.jugador).child('empatadas').update(0.5);
          break;
        case "pierde":
        this.fbApp.database().ref().child('users/' + resultado.jugador).child('jugadas').update(1);
          break;
      }

    });
    this.navCtrl.pop();

  }

  // guardar() {
  //   this.historialProvider.cargar_historial().forEach(jugador => {
  //     this.resultados.forEach(resultado => {
  //       if ((resultado.jugador.nombre == jugador.nombre) && (resultado.jugador.apellidos == jugador.apellidos)) {
  //         jugador.jugadas += 1;
  //         switch (resultado.resultado) {
  //           case "gana":
  //             jugador.ganadas += 1;
  //             jugador.puntos += 1;
  //             break;
  //           case "empata":
  //             jugador.empatadas += 1;
  //             jugador.puntos += 0.5;
  //             break;
  //           case "pierde":
  //             jugador.perdidas += 1;
  //             break;
  //         }
  //       }
  //     });
  //   });
  //   this.equipo.jugada = true;
  //   this.equipo.resultados = this.resultados;
  //   this.presentToast(this.equipo.nombre);
  //   this.navCtrl.pop();
  // }

  private presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Resultados de la jornada ' + nombre + ' añadidos con éxito',
      duration: 3000
    });
    toast.present();
  }

}
