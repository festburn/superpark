import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookSpotPage } from '../book-spot/book-spot';
import { PayForSpotPage } from '../pay-for-spot/pay-for-spot';

@Component({
  selector: 'page-find-parking',
  templateUrl: 'find-parking.html'
})
export class FindParkingPage {

  constructor(public navCtrl: NavController) {
  }
  goToBookSpot(params){
    if (!params) params = {};
    this.navCtrl.push(BookSpotPage);
  }goToPayForSpot(params){
    if (!params) params = {};
    this.navCtrl.push(PayForSpotPage);
  }
}
