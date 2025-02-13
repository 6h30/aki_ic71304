import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageSrc: string = './assets/gyarados.png';

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
