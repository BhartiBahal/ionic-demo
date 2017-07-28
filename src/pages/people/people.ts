import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PeoplePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.people = this.apiProvider.getPeople();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

  openPersonDetails(person) {
    this.navCtrl.push('PersonDetailsPage', {person:person});
  }

}
