import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LogoComponent } from '../shared/logo/logo.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [HeaderComponent, LogoComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {
  gyaradosImg: string = '/assets/gyarados2.png';
  raichuImg: string = '/assets/raichu2.png';
  charizardImg: string = '/assets/charizard2.png';
  snorlaxImg: string = '/assets/snorlax2.png';
  mushroomImg: string = '/assets/mushroom.png';
  mouse_scrolldownImg: string = '/assets/mouse_scrolldown.png';
  popsicleImg: string = '/assets/popsicle.png';
  open_browserImg: string = '/assets/open_browser.png';
}
