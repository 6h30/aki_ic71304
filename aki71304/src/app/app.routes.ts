import { Routes } from '@angular/router';
import { CmsHomeComponent } from './cms-home/cms-home.component';
import { LmsHomeComponent } from './lms-home/lms-home.component';
import { FeProfileComponent } from './fe-profile/fe-profile.component';
import { FeHomeComponent } from './fe-home/fe-home.component';
import { FeContactComponent } from './fe-contact/fe-contact.component';

  export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FeHomeComponent },
    { path: 'courses', component: LmsHomeComponent },
    { path: 'studio', component: CmsHomeComponent },
    { path: 'account', component: FeProfileComponent },
    { path: 'contact', component: FeContactComponent },

  ];
  
  