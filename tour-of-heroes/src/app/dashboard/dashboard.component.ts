import { Component, OnInit } from '@angular/core';

import { HeroService } from '../core/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.getHeroes();
  }

  getHeroes() : void {
  	this.heroService.getHeroes()
  		.subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  mouseHover(data: Hero) : void {
    this.selectedHero = data;
  }

}
