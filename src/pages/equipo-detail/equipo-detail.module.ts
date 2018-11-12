import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipoDetailPage } from './equipo-detail';

@NgModule({
  declarations: [
    EquipoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipoDetailPage),
  ],
})
export class EquipoDetailPageModule {}
