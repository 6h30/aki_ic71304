import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { AccountComponent } from './account/account.component';
import { CourseComponent } from './course/course.component';
import { MessagesComponent } from './messages/messages.component';
import { BuycoursesComponent } from './buycourses/buycourses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutsComponent, AccountComponent, CourseComponent, MessagesComponent, BuycoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imageSrc: string = './assets/gyarados.png';
  title = 'aki71304';
}
