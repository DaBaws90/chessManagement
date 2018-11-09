//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private _historial: Jugador[] = [];
  private jugador: Jugador;
  private jugador1: Jugador;
  private jugador2: Jugador;
  private jugador3: Jugador;

  constructor() {
    this.jugador1 = {
      nombre: "Jugador 1",
      apellidos: "Prueba",
      telefono: "123456789",
      elo: 50,
      jugadas: 0,
      ganadas: 0,
      empatadas: 0,
      perdidas: 0,
      casa: 0,
      fuera: 0,
      puntos: 0
    };
    this.jugador2 = {
      nombre: "Jugador 2",
      apellidos: "Prueba",
      telefono: "123456789",
      elo: 40,
      jugadas: 0,
      ganadas: 0,
      empatadas: 0,
      perdidas: 0,
      casa: 0,
      fuera: 0,
      puntos: 0
    };
    this.jugador3 = {
      nombre: "Jugador 3",
      apellidos: "Prueba",
      telefono: "123456789",
      elo: 60.5,
      jugadas: 0,
      ganadas: 0,
      empatadas: 0,
      perdidas: 0,
      casa: 0,
      fuera: 0,
      puntos: 0
    };
    this._historial.unshift(this.jugador1, this.jugador2, this.jugador3);
  }

  cargar_historial() {
    return this._historial.sort(function(a, b) {
      if(Number(a.elo) > Number(b.elo)) {
        return -1;
      } else if(Number(a.elo) < Number(b.elo)) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  private toPlayer(jugadorForm: FormGroup) {
    this.jugador = {
      nombre: jugadorForm.value['nombre'],
      apellidos: jugadorForm.value['apellidos'],
      telefono: jugadorForm.value['telefono'],
      elo: jugadorForm.value['elo'],
      jugadas: 0,
      ganadas: 0,
      empatadas: 0,
      perdidas: 0,
      casa: 0,
      fuera: 0,
      puntos: 0
    };
    return this.jugador;
  }

  modifyPlayer(jugadorForm: FormGroup) {
    this.jugador = {
      nombre: jugadorForm.value['nombre'],
      apellidos: jugadorForm.value['apellidos'],
      telefono: jugadorForm.value['telefono'],
      elo: jugadorForm.value['elo'],
      jugadas: jugadorForm.value['jugadas'],
      ganadas: jugadorForm.value['ganadas'],
      empatadas: jugadorForm.value['empatadas'],
      perdidas: jugadorForm.value['perdidas'],
      casa: jugadorForm.value['casa'],
      fuera: jugadorForm.value['fuera'],
      puntos: jugadorForm.value['puntos']
    };
    return this.jugador;

  }

  agregar_historial(jugadorForm: FormGroup) {
    this._historial.unshift(this.toPlayer(jugadorForm));
  }

  editar_historial(jugadorForm: FormGroup, index: number) {
    this._historial[index] = this.modifyPlayer(jugadorForm);
  }

}
