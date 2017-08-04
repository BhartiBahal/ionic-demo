import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AppUi } from "../../providers/app-ui";

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  private films = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public appUi: AppUi) {
    this.appUi.showLoading();
    let filmsParam = this.navParams.get('films');
    if(filmsParam == undefined) {
      this.apiProvider.getFilms().subscribe(data => {
        this.films = data.results;
        this.appUi.dismissLoading();
      }, (err) => {
        console.log(err);
      });
    } else {
      this.apiProvider.getFilmsData(filmsParam).then(
        (res) => {
          console.log(res);
          this.films = res;
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
    console.log('ionViewDidLoad FilmsPage');
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}
