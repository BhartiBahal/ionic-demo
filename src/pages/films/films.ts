import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the FilmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
    this.films.subscribe(data => {
          console.log('my data : ', data);
        });
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
