import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayForSpotPage } from '../pay-for-spot/pay-for-spot';

@Component({
  selector: 'page-book-spot',
  templateUrl: 'book-spot.html'
})
export class BookSpotPage {

  constructor(public navCtrl: NavController) {
  }
  goToPayForSpot(params){
    if (!params) params = {};
    this.navCtrl.push(PayForSpotPage);
  }
}
