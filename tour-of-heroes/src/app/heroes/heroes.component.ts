import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';
import { HeroService } from '../core/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: string = 'Windstorm';

  // hero: Hero = {
  // 	id: 1,
  // 	name: 'Iron Man'
  // };

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })

  }

  ngOnInit() {
    this.getHeroes();
  }

}
