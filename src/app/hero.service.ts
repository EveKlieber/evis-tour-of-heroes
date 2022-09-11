import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './/mock-heroes';


// By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator.
@Injectable({
  providedIn: 'root'
})

//When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.


export class HeroService {

  // get hero data
  getHeroes():Hero[] {
    return HEROES;
  }
  constructor() { }
}
