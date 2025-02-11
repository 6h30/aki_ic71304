import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// export const routes: Routes = [];

// export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Trang chủ
//     { path: 'about', component: AboutComponent }, // Trang giới thiệu
//   ];
  
  export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
  ];
  