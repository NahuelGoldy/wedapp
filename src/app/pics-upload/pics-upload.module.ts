import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PicsUploadComponent } from './pics-upload.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [ PicsUploadComponent ],
    exports: [ PicsUploadComponent ],
    providers: []
})
export class PicsUploadModule { }
