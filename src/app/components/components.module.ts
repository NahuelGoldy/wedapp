import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';

import { ComponentsComponent } from './components.component';
import { InformationComponent } from './information/information.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { MyLocaleDatePipe } from '../shared/pipes/locale-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatStepperModule,
        VerticalTimelineModule
    ],
    declarations: [
        ComponentsComponent,
        InformationComponent,
        MyLocaleDatePipe
    ],
    entryComponents: [],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
