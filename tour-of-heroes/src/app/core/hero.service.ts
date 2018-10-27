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

  private heroesUrl = 'http://127.0.0.1:8000/heroes/';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
  	// TODO: send message __after__ fetching the heroes
  	// this.messageService.add('HeroService: Fetched Heroes');
  	// return of(HEROES);

    return this.http.get<Hero[]>(this.heroesUrl + 'list')
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
       )
  }

  getHero(id: number): Observable<Hero> {
  	// TODO: send message __after__ fetching the hero
  	// this.messageService.add(`HeroService: Fetched Hero ID=${id}`);
  	// return of(HEROES.find(hero => hero.id === id));

    const detailUrl = this.heroesUrl + `${id}/detail`;
    return this.http.get<Hero>(detailUrl)
      .pipe(
        tap(_ => this.log(`fetched hero: ID=${id}`)),
        catchError(this.handleError<Hero>(`getHero ID=${id}`))
       )
  }

  updateHero(hero: Hero): Observable<any> {
    // http header needed for put requests
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const updateUrl = this.heroesUrl + `${hero.id}/update/`;

    // sending a put request with (url, data, options)
    return this.http.put(updateUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero: ID=${hero.id}`)),
        catchError(this.handleError<any>(`updateHero ID=${hero.id}`))
       )
  }

  //  TODO: POST a new hero to the django server
  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    const addUrl = this.heroesUrl + `create/`;

    return this.http.post<Hero>(addUrl, hero, httpOptions)
     .pipe(
       tap(_ => this.log(`added hero: Name=${hero.name}`)),
       catchError(this.handleError<Hero>('addHero ID=${hero.id}'))
      )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    const id = typeof hero === 'number' ? hero : hero.id;

    const deleteUrl = this.heroesUrl + `${id}/delete/`;

    return this.http.delete<Hero>(deleteUrl, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero: ID=${id}`)),
        catchError(this.handleError<Hero>(`deleteHero ID=${id}`))
      )
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
