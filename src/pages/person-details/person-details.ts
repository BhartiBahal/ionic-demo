import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})
export class PersonDetailsPage {
  person: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailsPage');
  }

  getPersonFilms(){
    this.navCtrl.push('FilmsPage', {films: this.person.films});
  }
}
