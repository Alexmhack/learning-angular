import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../core/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
  	private heroService: HeroService,
  	private location: Location,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.getHero();
  }

  getHero(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id)
  		.subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
