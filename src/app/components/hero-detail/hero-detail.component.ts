import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HttpClientModule
  ],
  providers : [HeroService],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id: string | null
  public hero$: Observable<Hero> | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    //si c'est null, cela renvoie false
    if (this.id) {
      this.hero$ = this.heroService.getHeroById(+this.id)
    }

  }


}
