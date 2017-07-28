import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PlanetsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets : Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.planets = this.apiProvider.getPlanets();
    this.planets.subscribe(data => {
      console.log('my data : ', data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
  }

  openPlanetDetails(planet) {
    this.navCtrl.push('PlanetDetailsPage', {planet:planet});
  }
}
