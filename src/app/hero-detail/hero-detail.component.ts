import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})


export class HeroDetailComponent implements OnInit {


  // hero property, preceded by the @Input() decorator.
  @Input() hero?: Hero;
// This component only receives a hero object through its hero property and displays it.
// The two components have a parent/child relationship. The parent, HeroesComponent, controls the child, HeroDetailComponent by sending it a new hero to display whenever the user selects a hero from the list
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService, 
    private location: Location
    // The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero =>this.hero = hero)
  }
// The JavaScript Number function converts the string to a number, which is what a hero id should be.

goBack(): void {
  this.location.back();
}
}
