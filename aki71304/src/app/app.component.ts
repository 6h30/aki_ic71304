import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CmsHomeComponent } from './cms-home/cms-home.component';
import { CmsSectionComponent } from './cms-section/cms-section.component';
import { CmsUnitComponent } from './cms-unit/cms-unit.component';
import { FeHomeComponent } from './fe-home/fe-home.component';
import { FeProfileComponent } from './fe-profile/fe-profile.component';
import { FeCoursesComponent } from './fe-courses/fe-courses.component';
import { FeCourseDetailsComponent } from './fe-course-details/fe-course-details.component';
import { FeMessagesComponent } from './fe-messages/fe-messages.component';
import { LmsHomeComponent } from './lms-home/lms-home.component';
import { LmsCourseComponent } from './lms-course/lms-course.component';
import { LmsProgressComponent } from './lms-progress/lms-progress.component';
import { LmsDiscussionComponent } from './lms-discussion/lms-discussion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeHomeComponent, FeProfileComponent, FeCoursesComponent, FeCourseDetailsComponent, FeMessagesComponent, LmsHomeComponent, LmsCourseComponent, LmsProgressComponent, LmsDiscussionComponent, CmsHomeComponent, CmsSectionComponent, CmsUnitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imageSrc: string = './assets/gyarados.png';
  title = 'aki71304';
}
