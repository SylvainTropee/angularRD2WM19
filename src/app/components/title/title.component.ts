import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  public title : string

  constructor(private router : Router) {
    this.title = "Super Heroes !"
  }

  public goToHome() {
    this.router.navigate([""])
  }
}
