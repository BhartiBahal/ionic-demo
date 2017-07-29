import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";
import { AppUi } from "../../providers/app-ui";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
    selector: 'page-characters',
    templateUrl: 'characters.html',
})
export class CharactersPage {
    characters = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public appUi: AppUi) {
        this.appUi.showLoading();
        this.apiProvider.getCharactersData(this.navParams.get('characters')).then(
            (res) => {
                console.log(res);
                this.characters = res;
                this.appUi.dismissLoading();
            },
            (err) => {
                console.log(err);
                this.appUi.dismissLoading();
            }
        );
        console.log('test', this.characters);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CharactersPage');
    }

    showPersonDetails(person)
    {
        this.navCtrl.push('PersonDetailsPage', {person:person});
    }

}
