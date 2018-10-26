import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../shared/hero'
import { HEROES } from '../shared/mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessagesService,
    private http: HttpClient
   ) { }

  private heroesUrl = 'http://127.0.0.1:8000/heroes/list';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
  	// TODO: send message __after__ fetching the heroes
  	// this.messageService.add('HeroService: Fetched Heroes');
  	// return of(HEROES);

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
       )
  }

  getHero(id): Observable<Hero> {
  	// TODO: send message __after__ fetching the hero
  	// this.messageService.add(`HeroService: Fetched Hero ID=${id}`);
  	// return of(HEROES.find(hero => hero.id === id));

    return  // <- implement a rest api for detail view
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
