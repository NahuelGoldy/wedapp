import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { WallComponent } from './wall/wall.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PicsUploadComponent } from './pics-upload/pics-upload.component';

const routes: Routes = [
    { path: '',       component: LandingComponent },
    { path: 'home',         component: HomeComponent },
    { path: 'wall',         component: WallComponent },
    { path: 'gallery',      component: GalleryComponent },
    { path: 'upload',       component: PicsUploadComponent },
    { path: '**',           redirectTo: '', pathMatch: 'full' }
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
