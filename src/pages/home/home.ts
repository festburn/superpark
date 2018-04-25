import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FindParkingPage } from '../find-parking/find-parking';
import { BookSpotPage } from '../book-spot/book-spot';
import { PayForSpotPage } from '../pay-for-spot/pay-for-spot';
import { ManageParkingPage } from '../manage-parking/manage-parking';
import { AddParkingPage } from '../add-parking/add-parking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToFindParking(params){
    if (!params) params = {};
    this.navCtrl.push(FindParkingPage);
  }goToBookSpot(params){
    if (!params) params = {};
    this.navCtrl.push(BookSpotPage);
  }goToPayForSpot(params){
    if (!params) params = {};
    this.navCtrl.push(PayForSpotPage);
  }goToManageParking(params){
    if (!params) params = {};
    this.navCtrl.push(ManageParkingPage);
  }goToAddParking(params){
    if (!params) params = {};
    this.navCtrl.push(AddParkingPage);
  }
}
