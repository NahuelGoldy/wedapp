import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PicsUploadComponent } from './pics-upload.component';
import {MatProgressBarModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSlideToggleModule
    ],
    declarations: [ PicsUploadComponent ],
    exports: [ PicsUploadComponent ],
    providers: []
})
export class PicsUploadModule { }
