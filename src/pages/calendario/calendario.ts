import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Timestamp } from 'rxjs';
import { Equipo } from '../../interfaces/equipo.interfaces';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { Calendario } from '../../interfaces/calendario.interfaces';
import { JornadaPage } from '../jornada/jornada';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  myDate: String = new Date().toISOString();
  myTime: String = Timestamp.toString(); // Necesita revisión
  private calendar: Calendario = <Calendario>{}; // Inicializarlo vacío así o en el constructor
  private listTeams:Equipo[];

  public event = {
    fecha: this.myDate,
    hora: this.myTime,
    nombre: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private historialEquipos: HistorialEquiposProvider) {
    this.listTeams = historialEquipos.cargar_equipos();
    // this.calendar = {
    //   nombre: "",
    //   fecha: "",
    //   hora: "",
    //   equipo: null,
    //   local: ""
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

  isLocal(text: String){
    this.calendar.local = text;
  }

  selectTeam(equipo: Equipo){
    this.calendar.equipo = equipo;
  }

  goTo(){
    this.calendar.fecha = this.event.fecha;
    this.calendar.hora = this.event.hora;
    this.calendar.nombre = this.event.nombre;
    // this.navCtrl.push(JornadaPage, {"calendar": this.calendar});
    console.log(this.calendar)
  }
}
