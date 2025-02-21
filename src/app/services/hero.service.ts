import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Powerstats} from "../models/powerstats";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly BASE_URL: string = "https://akabab.github.io/superhero-api/api"

  constructor(private http: HttpClient) {

  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`)
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.BASE_URL}/id/${id}.json`)
  }

  public getPowerStatsById(id: number) {
    return this.http.get<{powerstats : Powerstats}>(`${this.BASE_URL}/id/${id}.json`).pipe(
      map(hero => hero.powerstats)
    )
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
