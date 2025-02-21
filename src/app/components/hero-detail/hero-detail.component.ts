import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf

  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id: string | null
  public hero : Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    //si c'est null, cela renvoie false
    if(this.id){
      //this.hero = this.heroService.getHeroById(+this.id)
    }

  }




}
