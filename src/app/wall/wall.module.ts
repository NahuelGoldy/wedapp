import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WallComponent } from './wall.component';
import {MatFormFieldModule, MatIconModule, MatProgressSpinnerModule, MatInputModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule
    ],
    declarations: [ WallComponent ],
    exports: [ WallComponent ],
    providers: []
})
export class WallModule { }
