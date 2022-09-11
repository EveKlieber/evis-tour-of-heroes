import { Component, OnInit } from '@angular/core';
import  { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;  // component property to expose the HEROES array for binding.  (not such good style - better dep. injection)
  
  
  heroes: Hero[] = [];
  
  
  selectedHero?: Hero;
  
  // hero: Hero = {
  //   id: 1,
  //   name:'Windstorm'
  // };  
  
  
  // Inject the HeroService
  constructor(private heroService: HeroService) { }
// The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  ngOnInit(): void {
    this.getHeroes();
  }
// method to retrieve the heroes from the service.
  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
// The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously. The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously. This approach won't work in a real application that uses asynchronous calls. It works now because my service synchronously returns mock heroes. ---> HeroService.getHeroes() must have an asynchronous signature of some kind.  --> observable.subscribe()
// The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.







  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
