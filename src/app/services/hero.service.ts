import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly BASE_URL : string = "https://akabab.github.io/superhero-api/api"

  constructor(private http : HttpClient) {

  }

  public getHeroes() {
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`)
  }





  // public getHeroes(): Hero[] {
  //   return this.heroes
  // }
  //
  // public getHeroById(id: number): Hero | undefined {
  //   return this.heroes.find(
  //     (hero: Hero) => hero.id == id
  //   )
  // }

}
