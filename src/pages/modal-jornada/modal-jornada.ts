import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resultado } from '../../interfaces/resultado.interfaces';

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
  private equipo:Equipo;
  // resultado: {} = {};
  // private resultados: FormGroup;
  private selected: boolean;
  // private datos: [];
  private resultados: Resultado[] = [];
  private res:Resultado;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.equipo = this.navParams.get("equipo");
    // this.resultados = this.formBuilder.group({
    //   jugadores: [[]],
    //   resultados: [[]]
    // });
    // this.resultados = 
    // this.res.jugador = null;
    // this.res.resultado = "";
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
    addResultado(player:Jugador, result:string){
      // console.log(player + ' ' + result);

      for(let p of this.equipo.jugadores){
        // let res:Resultado;
      this.res.jugador = p;
      this.res.resultado = "";
      this.resultados.push(this.res);
      }
      console.log(this.resultados);
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

}
