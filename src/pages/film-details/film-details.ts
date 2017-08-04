import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUi } from "../../providers/app-ui";

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  film: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  getFilmCharacters()
  {
    //this.characters = this.film.characters;
    console.log('characters', this.film.characters);
    this.navCtrl.push('CharactersPage', {characters: this.film.characters});
  }

  getFilmPlanets()
  {
    this.navCtrl.push('PlanetsPage', {planets: this.film.planets});
  }

}
