//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Jugador } from '../../interfaces/player.interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs';

/*
  Generated class for the HistorialEquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialEquiposProvider {
  private _jornadas: Observable<any[]>;
  private _jornadasPendientes: Equipo[] = [];
  private _jornadasJugadas: Equipo[] = [];
  private jornada:Equipo;

  constructor(public afDB: AngularFireDatabase, public fbApp: FirebaseApp) {
    console.log('Hello HistorialEquiposProvider Provider');
  }
  cargar_jornadas(){
    // return this._jornadas;
    return this.afDB.list('jornadas').valueChanges();
  }

  cargar_jugadas() {
    // this._jornadasJugadas = [];
    // this._jornadas.forEach(jornada => {
    //   if(jornada.jugada == true){
    //     this._jornadasJugadas.push(jornada);
    //   }
    // });
    // return this._jornadasJugadas;
  //   firebase.database().ref('request').orderByChild('apply').equalTo('true').once('value', function (snapshot) {
  //     console.log(snapshot.val()) //contains all users that has apply as true
  // })
    this.afDB.database.ref('jornadas').orderByChild('jugada').equalTo('true').once('value', function (snapshot) {
      this._jornadas = snapshot.val() //contains all users that has apply as true
      return this._jornadas
    })
  
    // list('jornadas', ref => ref.child('jugada').equalTo('true')).valueChanges()
  }

  cargar_pendientes() {
    // this._jornadasPendientes = [];
    // this._jornadas.forEach(jornada => {
    //   if(jornada.jugada == false) {
    //     this._jornadasPendientes.push(jornada);
    //   }
    // });
    // return this._jornadasPendientes;
    
    this.afDB.database.ref('jornadas').orderByChild('jugada').equalTo('false').once('value', function (snapshot) {
      this.equipos = snapshot.val() //contains all users that has apply as true
      console.log("TETERINO")
      return this._jornadas
    }).then((data) => {
      console.log(data)
      return this._jornadas
    })
    // return this._jornadas
    
    // return this.afDB.list('jornadas', ref => ref.child('jugada').equalTo('false')).valueChanges()
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
      resultados: []
    };
    return this.jornada;
  }

  agregar_equipo(equipoForm: FormGroup){
    // this._jornadas.push(this.toTeam(equipoForm));
    var equipoTemp = this.fbApp.database().ref().child('jornadas').push(this.toTeam(equipoForm));
    this.fbApp.database().ref().child('jornadas/'+equipoTemp.key).child('key').set(equipoTemp.key);
  }

  // agregar_jugada() {
  //   this._jornadasJugadas.push();
  // }
}
