import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: string = 'Windstorm';

  hero: Hero = {
  	id: 1,
  	name: 'Iron Man'
  };

  constructor() { }

  ngOnInit() {
  }

}
