import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CharactersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {
  characters: any;
  characterData:Observable<any>;
  characterName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.characters = this.navParams.get('characters');
    //console.log('characters param', this.characters);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersPage');
  }

  getCharacterName(character)
  {
    console.log('test');
    console.log(character);
    //return 'test';
    //var characterName;
    this.characterData = this.apiProvider.getCharacterData(character);
    //setTimeout(() => {
      this.characterData.subscribe(data => {
        console.log(data);
        this.characterName = data.name;
        //return 'test-data-name';
      });
    //}, 500);
    return this.characterName;
    //console.log(this.characterData);
  }

}
