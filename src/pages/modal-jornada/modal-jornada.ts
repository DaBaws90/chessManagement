import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resultado } from '../../interfaces/resultado.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';

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
  private equipo: Equipo;
  // resultado: {} = {};
  // private resultados: FormGroup;
  private selected: boolean;
  // private datos: [];
  private resultados: Resultado[] = [];
  private res: Resultado;
  private jugadores: Jugador[] = [];
  private jornadas: Equipo[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private historialProvider: HistorialProvider,
    private _jornadas: HistorialEquiposProvider, private toastCtrl: ToastController) {
    this.equipo = this.navParams.get("equipo");
    for (let p of this.equipo.jugadores) {
      this.res = {
        jugador: p,
        resultado: "empata"
      }
      this.resultados.push(this.res);
      this.jugadores = this.historialProvider.cargar_historial();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalJornadaPage');
  }

  addResultado(player: Jugador, result: string) {
    this.resultados.forEach(resultado => {
      if (resultado.jugador == player) {
        resultado.resultado = result;
      }
    });
  }

  guardar() {
    this.historialProvider.cargar_historial().forEach(jugador => {
      this.resultados.forEach(resultado => {
        if ((resultado.jugador.nombre == jugador.nombre) && (resultado.jugador.apellidos == jugador.apellidos)) {
          jugador.jugadas += 1;
          switch (resultado.resultado) {
            case "gana":
              jugador.ganadas += 1;
              jugador.puntos += 1;
              break;
            case "empata":
              jugador.empatadas += 1;
              jugador.puntos += 0.5;
              break;
            case "pierde":
              jugador.perdidas += 1;
              break;
          }
        }
      });
    });
    this.equipo.jugada = true;
    this.equipo.resultados = this.resultados;
    this.presentToast(this.equipo.nombre);
    this.navCtrl.pop();
  }

  private presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Resultados de la jornada ' + nombre + ' añadidos con éxito',
      duration: 3000
    });
    toast.present();
  }

}
