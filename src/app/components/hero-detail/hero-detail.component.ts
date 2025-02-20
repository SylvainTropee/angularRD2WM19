import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id: string | null

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}
