import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Player } from '../../interfaces/player.interfaces';

/**
 * Generated class for the AddPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage {
  private playerForm: FormGroup;
  private player: Player;
  private players: Player[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl: ToastController) {
    this.playerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      jugadas: [''],
      ganadas: [''],
      empatadas: [''],
      perdidas: [''],
      casa: [''],
      fuera: [''],
      puntos: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayerPage');
  }

  toPlayer(playerForm: FormGroup) {
    this.player = {
      nombre: playerForm.value['nombre'],
      jugadas: playerForm.value['jugadas'],
      ganadas: playerForm.value['ganadas'],
      empatadas: playerForm.value['empatadas'],
      perdidas: playerForm.value['perdidas'],
      casa: playerForm.value['casa'],
      fuera: playerForm.value['fuera'],
      puntos: playerForm.value['puntos']
    };
    return this.player;
    
  }

  addPlayer() {
    this.players.push(this.toPlayer(this.playerForm));
    this.presentToast(this.playerForm.value['nombre']);
    this.navCtrl.popToRoot();
  }

  presentToast(nombre: string) {
    const toast = this.toastCtrl.create({
      message: 'Jugador ' + nombre + ' añadido con éxito',
      duration: 3000
    });
    toast.present();
  }

}
