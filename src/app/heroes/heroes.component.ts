import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;  // component property to expose the HEROES array for binding.  (not such good style - better dep. injection)
  selectedHero?: Hero;
   
  heroes: Hero[] = [];
      
  // Inject the HeroService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  // The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
// method to retrieve the heroes from the service.
  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
// The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously. The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously. This approach won't work in a real application that uses asynchronous calls. It works now because my service synchronously returns mock heroes. ---> HeroService.getHeroes() must have an asynchronous signature of some kind.  --> observable.subscribe()
// The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.

}
