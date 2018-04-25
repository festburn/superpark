import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FindParkingPage } from '../pages/find-parking/find-parking';
import { ManageParkingPage } from '../pages/manage-parking/manage-parking';
import { BookSpotPage } from '../pages/book-spot/book-spot';
import { PayForSpotPage } from '../pages/pay-for-spot/pay-for-spot';
import { AddParkingPage } from '../pages/add-parking/add-parking';
import { DriverDetailsPage } from '../pages/driver-details/driver-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FindParkingPage,
    ManageParkingPage,
    BookSpotPage,
    PayForSpotPage,
    AddParkingPage,
    DriverDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FindParkingPage,
    ManageParkingPage,
    BookSpotPage,
    PayForSpotPage,
    AddParkingPage,
    DriverDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}