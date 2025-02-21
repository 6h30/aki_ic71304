import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  mushroomImg: string = '/assets/mushroom.png';

  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
