import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../shared/hero'
import { HEROES } from '../shared/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
  	return of(HEROES);
  }

}
