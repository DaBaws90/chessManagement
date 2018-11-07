//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from '../../interfaces/player.interfaces';


/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private _historial: Jugador[] = [];
  private jugador1: Jugador;
  private jugador2: Jugador;
  private jugador3: Jugador;

  constructor() {
    this.jugador1 = {
      nombre: "Prueba 1",
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
      nombre: "Prueba 2",
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
      nombre: "Prueba 3",
      apellidos: "Prueba",
      telefono: "123456789",
      elo: 60,
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
      if(a.elo > b.elo) {
        return -1;
      } else if(a.elo < b.elo) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  agregar_historial(jugador: Jugador) {
    this._historial.unshift(jugador);
  }

}
