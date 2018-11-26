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
  private _jornadasJugadas: Equipo[] = [];
  private jornada:Equipo;

  constructor() {
    console.log('Hello HistorialEquiposProvider Provider');
  }
  cargar_jornadas(){
    return this._jornadas;
  }

  private toTeam(equipoForm: FormGroup) {
    this.jornada = {
      nombre: equipoForm.value['nombre'],
      ciudad: equipoForm.value['ciudad'],
      jugadores: equipoForm.value['jugadores'],
      fecha: equipoForm.value['fecha'],
      hora: equipoForm.value['hora'],
      local: equipoForm.value['local'],
    };
    return this.jornada;
  }

  agregar_equipo(equipoForm: FormGroup){
    this._jornadas.push(this.toTeam(equipoForm));
  }
}
