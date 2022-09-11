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
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
