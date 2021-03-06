import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ HeroService ]
})
export class CoreModule { }
