import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { AddPlayerPage } from '../pages/add-player/add-player';
import { HistorialProvider } from '../providers/historial/historial';
import { DetailsPage } from '../pages/details/details';
import { EditPlayerPage } from '../pages/edit-player/edit-player';
import { HistorialEquiposProvider } from '../providers/historial-equipos/historial-equipos';
import { AddEquiposPage } from '../pages/add-equipos/add-equipos';
import { EquipoDetailPage } from '../pages/equipo-detail/equipo-detail';
import { ModalPage } from '../pages/modal/modal';
import { ModalJornadaPage } from '../pages/modal-jornada/modal-jornada';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddPlayerPage,
    EditPlayerPage,
    DetailsPage,
    AddEquiposPage,
    EquipoDetailPage,
    ModalPage,
    ModalJornadaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddPlayerPage,
    EditPlayerPage,
    DetailsPage,
    AddEquiposPage,
    EquipoDetailPage,
    ModalPage,
    ModalJornadaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    HistorialProvider,
    HistorialEquiposProvider,
    AuthProvider
  ]
})
export class AppModule {}
