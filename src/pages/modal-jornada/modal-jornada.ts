import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resultado } from '../../interfaces/resultado.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

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
  // private resultados: FormGroup;
  private selected: boolean;
  private resultados: Resultado[] = [];
  private res: Resultado;
  private jornadas: Equipo[] = [];
  private jugadores: Jugador[] = []


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private historialProvider: HistorialProvider,
    private _jornadas: HistorialEquiposProvider, private toastCtrl: ToastController, private fbApp: FirebaseApp) {
    this.equipo = this.navParams.get('equipo');

    this.equipo.jugadores.forEach(player => {
      this.res = {
        jugador: player,
        resultado: "empata",
      }
      this.resultados.push(this.res);
    });
    
  }

  addResultado(player: Jugador, result: string) {
    this.resultados.forEach(resultado => {
      if (resultado.jugador.key === player.key) {
        resultado.resultado = result;
        console.log("RESULTADO UPDATED")
      }
    });
  }

  guardarResultados() {
    return new Promise((resolve, reject) => {
      this.resultados.forEach(resultado => {
        let user = resultado.jugador;
        user.jugadas += 1;
        switch (resultado.resultado) {
          case "gana":
            user.ganadas += 1;
            user.puntos += 1;
            this.fbApp.database().ref().child('users/' + resultado.jugador.key).set(user);
            break;
          case "empata":
          user.empatadas += 1
          user.puntos += 0.5;
          this.fbApp.database().ref().child('users/' + resultado.jugador.key).set(user);
            break;
          case "pierde":
          user.perdidas += 1
          this.fbApp.database().ref().child('users/' + resultado.jugador.key).set(user);
            break;
        }
        this.jugadores.forEach(player => {
          if(player.key === user.key){
            this.jugadores.slice(this.jugadores.indexOf(player), 1)
          }
        });
        this.jugadores.push(user);
      })
      this.equipo.jugada = true;
      this.equipo.jugadores = this.jugadores
      this.equipo.compound = this.equipo.jugada + '1';
      this.equipo.resultados = this.resultados
      this.fbApp.database().ref().child('jornadas/' + this.equipo.key).set(this.equipo);
      resolve(true)
    })
  }
  
  guardar(){
    this.guardarResultados().then(() => {
      this.navCtrl.pop()
    })
  }
    // updateTask(taskKey, value){
    //   return new Promise<any>((resolve, reject) => {
    //     let currentUser = firebase.auth().currentUser;
    //     this.afs.collection('people').doc(currentUser.uid)
    //     .collection('task').doc(taskKey).set(value)
    //     .then(
    //       res => resolve(res),
    //       err => reject(err)
    //     )
    //   })
    // }

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
