import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resultado } from '../../interfaces/resultado.interfaces';
import { HistorialProvider } from '../../providers/historial/historial';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private historialProvider: HistorialProvider) {
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

  // addResultado(idx: number, resultado: string) {
  //   console.log("INDEX: " + idx);
  //   console.log("RESULTADO: " + resultado);
  // }


  prueba() {
    console.log(this.navParams.get("datos"));
  }
  // prueba(valor: String, index: number) {
  //   this.resultados.push([valor, index]);
  //   for(let resultado of this.resultados) {
  //     console.log(resultado[1]);
  //     // if(resultado[1] == index) {
  //     //   console.log("Está seleccionado");
  //     // } else {
  //     //   this.resultados.push([valor, index]);
  //     // }
  //   }
  // }
  addResultado(player: Jugador, result: string) {

    this.resultados.forEach(resultado => {
      if (resultado.jugador == player) {
        resultado.resultado = result;
      }
    });

    // console.log(player + ' ' + result);
    //   this.equipo.forEach(element => {
    //   console.log(element.nombre);
    // });
    // this.resultados.forEach(element => {
    //   if(element.jugador == player){
    //     element.resultado = result;
    //   }
    //   // else{
    //   //   let res:Resultado;
    //   //   res.jugador = player;
    //   //   res.resultado = result;
    //   //   this.resultados.push(res);
    //   // }
    // });
    // console.log(this.resultados);



    // if(this.resultados.indexOf(this.res) > -1){
    //   let i = this.resultados.indexOf(this.res);
    //   this.resultados.splice(i, 1);
    //   console.log("Se eliminó el jugador "+this.res.jugador.nombre+" con el resultado "+this.res.resultado);
    //   // this.resultados.push()
    // }
    // else{
    //   this.resultados.push(this.res);
    //   console.log("Se añadió el jugador "+this.res.jugador.nombre+" con el resultado "+this.res.resultado);
    // }
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

  }

}
