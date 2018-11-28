import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HistorialEquiposProvider } from '../../providers/historial-equipos/historial-equipos';
import { HistorialProvider } from '../../providers/historial/historial';
import { Jugador } from '../../interfaces/player.interfaces';
import { ModalPage } from '../modal/modal';
import { Calendario } from '../../interfaces/calendario.interfaces';
import { Timestamp } from 'rxjs/operators/timestamp';

/**
 * Generated class for the AddEquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-equipos',
  templateUrl: 'add-equipos.html',
})
export class AddEquiposPage {
  private equipoForm: FormGroup;
  private jugadores: Jugador[] = [];
  private cont: number;
  private selected: Jugador[];
  private d = new Date();
  private offset = new Date().getTimezoneOffset() + 13;
  private myDate: String = new Date().toISOString();
  private myTime: String = new Date(this.d.getTime() + (3600000 * this.offset)).toISOString(); // Necesita revisión
  private calendar: Calendario = <Calendario>{}; // Inicializarlo vacío así o en el constructor
  // private listTeams:Equipo[];

  public event = {
    fecha: this.myDate,
    hora: this.myTime,
    selected: "local"
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historialEquipos: HistorialEquiposProvider, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private historial: HistorialProvider, private modalCtrl: ModalController, private viewCtrl: ViewController) {
    this.equipoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      jugadores: [[]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      local: ['', Validators.required],
    });
    this.jugadores = this.historial.cargar_historial();
    this.cont = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEquiposPage');
  }

  addTeam() {
    this.equipoForm.value["jugadores"] = this.selected;
    this.historialEquipos.agregar_equipo(this.equipoForm);
    this.presentToast(this.equipoForm.value['nombre']);
    this.navCtrl.pop();
    console.log(this.equipoForm.value);
  }

  private presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jornada ' + nombre + ' añadida con éxito',
      duration: 3000
    });
    toast.present();
  }
  
  private presentModal() {
    let modal = this.modalCtrl.create(ModalPage, { "jugadores": this.jugadores });
    modal.present();
    modal.onDidDismiss(data => {
      this.selected = data;
    });
  }
}
