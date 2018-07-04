import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import {
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { CarouselComponent } from './carousel/carousel.component';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatBadgeModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    declarations: [
        GalleryComponent,
        CarouselComponent,
        TimeAgoPipe
    ],
    exports: [GalleryComponent],
    providers: []
})
export class GalleryModule { }
