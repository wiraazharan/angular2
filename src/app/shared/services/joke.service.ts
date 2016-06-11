import { Injectable } from '@angular/core';
import { IJoke, IJokeResult } from '../interfaces/index';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()

export class JokeService {

  constructor(private http: Http) {}

  public base_url = 'http://api.icndb.com/';

  public getJokes(category:string) : Observable<IJoke[]>{

    const url = `${this.base_url}jokes/random/5?limitTo=[${category}]`;

    return this.http.get(url).map(response => response.json()).map((result: IJokeResult) => result.value);


  }

  public getCategories(): Observable<string[]> {

  	const url = this.base_url + 'categories';

  	 return this.http.get(url).map(response => response.json()).map((result: IJokeResult) => result.value);


  }


  public getJoke(): Observable<IJoke> {

  const url = this.base_url + 'jokes/random';

   return this.http.get(url).map(response => response.json()).map((result: IJokeResult) => result.value);

  }


}
