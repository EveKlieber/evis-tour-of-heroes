import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

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
  constructor() { }

  ngOnInit(): void {
  }

}
