//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { FormGroup } from '@angular/forms';
import { Jugador } from '../../interfaces/player.interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs';
import { Banquillo } from '../../interfaces/banquillo.interfaces';

/*
  Generated class for the HistorialEquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialEquiposProvider {
  private _jornadas: Observable<any[]>;
  private _jornadasPendientes: Observable<any[]>;
  private _jornadasJugadas: Observable<any[]>;
  jornada: Equipo;
  banquillos : Observable<any[]>;

  constructor(public afDB: AngularFireDatabase, public fbApp: FirebaseApp) {
    console.log('Hello HistorialEquiposProvider Provider');
  }

  cargar_jornadas() {
    this._jornadas = this.afDB.list('jornadas', ref => ref.orderByChild('jugadores').equalTo(null)).valueChanges();
    return this._jornadas;
  }

  cargar_jugadas() {
    this._jornadasJugadas = this.afDB.list('jornadas', ref => ref.orderByChild('jugada').equalTo(true)).valueChanges();
    return this._jornadasJugadas;
  }

  cargar_pendientes() {
    this._jornadasPendientes = this.afDB.list('jornadas', ref => ref.orderByChild('compound').equalTo('false1')).valueChanges();
    return this._jornadasPendientes;
  }

  getJornada(equipo: Equipo){
    return new Promise((resolve, reject) => {
      this.jornada = equipo
      resolve(true)
    })
  }
  // return new Promise((resolve, reject) => {
  //   this.afDB.doc(`/usuarios/${clave}`)
  //     .valueChanges().subscribe(data => {
  //       //console.log(data);
  //       if(data){
  //         this.clave = clave;
  //         this.user = data;
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }

  //     })
  // })

  getBanquillos() {
    this.banquillos = this.afDB.list('equipos').valueChanges();
    return this.banquillos
  }

  private toTeam(equipoForm: FormGroup) {
    this.jornada = {
      nombre: equipoForm.value['nombre'],
      ciudad: equipoForm.value['ciudad'],
      jugadores: [],
      fecha: equipoForm.value['fecha'],
      hora: equipoForm.value['hora'],
      local: equipoForm.value['local'],
      jugada: false,
      resultados: [],
      key: '',
      compound: 'false0',
    };
    return this.jornada;
  }

  agregar_equipo(equipoForm: FormGroup) {
    var equipoTemp = this.fbApp.database().ref().child('jornadas').push(this.toTeam(equipoForm));
    this.fbApp.database().ref().child('jornadas/' + equipoTemp.key).child('key').set(equipoTemp.key);
  }

}
