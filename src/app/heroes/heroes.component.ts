import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-Herous';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    console.log("selectedHero: ", hero);
    this.selectedHero = hero;
  }

  onClicked(): void {
    alert("Hello, Bro");
  }

  onConsoleLog(): void {
    console.log("I'am working", this.selectedHero);
  }

  deleteBlock(): void {
    this.selectedHero = null;
    console.log("delete selectedHero", this.heroes);
  }
}
