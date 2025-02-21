import {Component} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink,
    HttpClientModule
  ],
  providers : [HeroService],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Array<Hero>

  constructor(private heroService : HeroService) {
    this.heroes = []
  }

  public getHeroes() {
    this.heroService.getHeroes().subscribe(
      value => this.heroes = value
    )
  }
}







