import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './/mock-heroes';
import { MessageService } from './message.service';

// By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator.
@Injectable({
  providedIn: 'root'
})

//When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.


export class HeroService {

  // get hero data:

  // getHeroes():Hero[] {
  //   return HEROES;
  // }

  // asynchron solution:
  constructor(private messageService: MessageService) { }

  getHeroes():Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('heroService: fetched heroes');
    return heroes;
  }
// of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
}

// service-in-service scenario in which I inject the MessageService into the HeroService which is injected into the HeroesComponent.