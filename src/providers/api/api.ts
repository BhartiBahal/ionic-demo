import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms(films=null) {
    //if(films == null){
      return this.http.get('http://swapi.co/api/films').map(res => res.json());
    //}
  }

  getPeople() {
    return this.http.get('http://swapi.co/api/people').map(res => res.json());
  }

  getPlanets() {
    return this.http.get('http://swapi.co/api/planets').map(res => res.json());
  }

  getCharactersData(apiUrls)  {
    let pros:Array<any> = [];

    for (let apiUrl of apiUrls) {
      pros.push(new Promise((resolve, reject) => {
        this.http.get(apiUrl).subscribe((res) => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
      }));
    }

    return Promise.all(pros);
  }

  getFilmsData(filmUrls) {
    let pros:Array<any> = [];

    for (let filmUrl of filmUrls) {
      pros.push(new Promise((resolve, reject) => {
        this.http.get(filmUrl).subscribe((res) => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
      }));
    }

    return Promise.all(pros);
  }

  getPlanetsData(planetUrls) {
    let pros:Array<any> = [];

    for (let planetUrl of planetUrls) {
      pros.push(new Promise((resolve, reject) => {
        this.http.get(planetUrl).subscribe(
          (res) => {
            resolve(res.json());
          },
          (err) => {
            reject(err);
          }
        );
      }));
    }

    return Promise.all(pros);
  }

}
