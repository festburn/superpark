import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddParkingPage } from '../add-parking/add-parking';

@Component({
  selector: 'page-manage-parking',
  templateUrl: 'manage-parking.html'
})
export class ManageParkingPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddParking(params){
    if (!params) params = {};
    this.navCtrl.push(AddParkingPage);
  }
}
