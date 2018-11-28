//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Jugador } from '../../interfaces/player.interfaces';

/*
  Generated class for the HistorialEquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialEquiposProvider {
  private _jornadas: Equipo[] = [];
  private _jornadasPendientes: Equipo[] = [];
  private _jornadasJugadas: Equipo[] = [];
  private jornada:Equipo;

  constructor() {
    console.log('Hello HistorialEquiposProvider Provider');
  }
  cargar_jornadas(){
    return this._jornadas;
  }

  // cargar_jugadas() {
  //   this._jornadas.forEach(jornada => {
  //     if(jornada.jugada == true){
  //       this._jornadasJugadas.push(jornada);
  //     }
  //   });
  //   return this._jornadasJugadas;
  // }

  // cargar_pendientes() {
  //   this._jornadas.forEach(jornada => {
  //     if(jornada.jugada == false) {
  //       this._jornadasPendientes.push(jornada);
  //     }
  //   });
  //   return this._jornadasPendientes;
  // }

  private toTeam(equipoForm: FormGroup) {
    this.jornada = {
      nombre: equipoForm.value['nombre'],
      ciudad: equipoForm.value['ciudad'],
      jugadores: equipoForm.value['jugadores'],
      fecha: equipoForm.value['fecha'],
      hora: equipoForm.value['hora'],
      local: equipoForm.value['local'],
      jugada: false,
      resultados: []
    };
    return this.jornada;
  }

  agregar_equipo(equipoForm: FormGroup){
    this._jornadas.push(this.toTeam(equipoForm));
  }

  // agregar_jugada() {
  //   this._jornadasJugadas.push();
  // }
}
