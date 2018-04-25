import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FindParkingPage } from '../pages/find-parking/find-parking';
import { BookSpotPage } from '../pages/book-spot/book-spot';
import { PayForSpotPage } from '../pages/pay-for-spot/pay-for-spot';
import { ManageParkingPage } from '../pages/manage-parking/manage-parking';
import { AddParkingPage } from '../pages/add-parking/add-parking';
import { DriverDetailsPage } from '../pages/driver-details/driver-details';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToFindParking(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FindParkingPage);
  }goToBookSpot(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BookSpotPage);
  }goToPayForSpot(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PayForSpotPage);
  }goToManageParking(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ManageParkingPage);
  }goToAddParking(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddParkingPage);
  }goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DriverDetailsPage);
  }
}
