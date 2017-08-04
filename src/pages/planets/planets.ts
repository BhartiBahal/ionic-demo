import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AppUi } from '../../providers/app-ui';

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
  private planets = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public appUi: AppUi) {
    this.appUi.showLoading();
    let planetsParams = this.navParams.get('planets');
    if(planetsParams == undefined) {
      this.apiProvider.getPlanets().subscribe(data => {
        console.log('my data : ', data);
        this.planets = data.results;
        this.appUi.dismissLoading();
      }, (err) => {
        console.log(err);
      });
    } else {
      this.apiProvider.getPlanetsData(planetsParams).then(
        (res) => {
          console.log(res);
          this.planets = res;
          this.appUi.dismissLoading();
        },
        (err) => {
          console.log(err);
          this.appUi.dismissLoading();
        }
      );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
  }

  openPlanetDetails(planet) {
    this.navCtrl.push('PlanetDetailsPage', {planet:planet});
  }
}
