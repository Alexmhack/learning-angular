import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../shared/hero'
import { HEROES } from '../shared/mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
  	// TODO: send message __after__ fetching the heroes
  	this.messageService.add('HeroService: Fetched Heroes');
  	return of(HEROES);
  }

  getHero(id): Observable<Hero> {
  	// TODO: send message __after__ fetching the hero
  	this.messageService.add(`HeroService: Fetched Hero ID=${id}`);
  	return of(HEROES.find(hero => hero.id === id));
  }

}
