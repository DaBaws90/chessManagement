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

  constructor() {
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
