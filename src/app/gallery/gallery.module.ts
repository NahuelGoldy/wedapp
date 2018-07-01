import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule
    ],
    declarations: [ GalleryComponent ],
    exports: [GalleryComponent ],
    providers: []
})
export class GalleryModule { }
