//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../auth/auth';


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
  private jugador4: Jugador;
  private jugador5: Jugador;
  private jugador6: Jugador;
  private jugador7: Jugador;
  private jugador8: Jugador;
  private jugador9: Jugador;
  private jugador10: Jugador;


  constructor(public auth: AuthProvider) {
    this.jugador1 = {
      nombre: "Pepito",
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
      nombre: "Manolito",
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
      nombre: "Antonio",
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
    this.jugador4 = {
      nombre: "Federico",
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
    this.jugador5 = {
      nombre: "Juan",
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
    this.jugador6 = {
      nombre: "Paco",
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
    this.jugador7 = {
      nombre: "María",
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
    this.jugador8 = {
      nombre: "Ana",
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
    this.jugador9 = {
      nombre: "Lucía",
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
    this.jugador10 = {
      nombre: "Alba",
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
    this._historial.unshift(this.jugador1, this.jugador2, this.jugador3, this.jugador4, this.jugador5, this.jugador6, this.jugador7, this.jugador8, this.jugador9, this.jugador10);
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
    this.auth.registerUser(jugadorForm.value['email'], jugadorForm.value['pass']);
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
