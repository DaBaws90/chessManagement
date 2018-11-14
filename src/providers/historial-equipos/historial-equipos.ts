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
  private _historialEquipos: Equipo[] = [];
  private equipo:Equipo;
  private equipo2:Equipo;
  private equipo3:Equipo;
  private jugador: Jugador;
  private jugador1: Jugador;
  private jugador2: Jugador;
  private jugador3: Jugador;
  private jugador4: Jugador;
  private jugador7: Jugador;
  private jugador8: Jugador;
  private jugador9: Jugador;
  private jugador10: Jugador;

  constructor() {
    this.equipo = {
      nombre:"Equipo A",
      ciudad:"Barcelona",
      jugadores:[
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
        },
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
        },
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
        },
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
        },
      ]
    };
    this.equipo2 = {
      nombre:"Equipo B",
      ciudad:"Valencia",
      jugadores:[
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
        },
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
        },
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
        },
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
        },
      ]
    };
    this.equipo3 = {
      nombre:"Equipo C",
      ciudad:"Madrid",
      jugadores:[]
    };
    this._historialEquipos.unshift(this.equipo,this.equipo2,this.equipo3);
    console.log('Hello HistorialEquiposProvider Provider');
  }
  cargar_equipos(){
    return this._historialEquipos;
  }

  private toTeam(equipoForm: FormGroup) {
    this.equipo = {
      nombre: equipoForm.value['nombre'],
      ciudad: equipoForm.value['ciudad'],
      jugadores: equipoForm.value['jugadores']
    };
    return this.equipo;
  }
  agregar_equipo(equipoForm: FormGroup){
    this._historialEquipos.push(this.toTeam(equipoForm));
  }
}
