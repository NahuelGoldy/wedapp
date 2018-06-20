import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {WallComponent} from './wall/wall.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
    { path: 'home',         component: LandingComponent },
    { path: 'info',         component: HomeComponent },
    { path: 'wall',         component: WallComponent },
    { path: 'gallery',      component: GalleryComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'signup',       component: SignupComponent },
    { path: 'nucleoicons',  component: NucleoiconsComponent },
    { path: '**',           redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
