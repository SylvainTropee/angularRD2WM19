import {Component} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Array<Hero>

  constructor() {
    this.heroes = []
  }

  public addHeroes() {
    this.heroes.push({
      id : 1,
      name: "Hulk",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"
    })
    this.heroes.push({
      id : 2,
      name: "Batman",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg"
    })
    this.heroes.push({
      id : 3,
      name: "Wonder woman",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"
    })
  }
}
