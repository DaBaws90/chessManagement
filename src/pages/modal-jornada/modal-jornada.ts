import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Jugador } from '../../interfaces/player.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  private resultados: FormGroup;
  private selected: boolean;
  private datos: [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.equipo = this.navParams.get("equipo")["jugadores"];
    this.resultados = this.formBuilder.group({
      jugadores: [[]],
      resultados: [[]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalJornadaPage');
  }

  addResultado(idx: number, resultado: string) {
    console.log("INDEX: " + idx);
    console.log("RESULTADO: " + resultado);
  }


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

}
