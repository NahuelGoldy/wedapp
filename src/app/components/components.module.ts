import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { ComponentsComponent } from './components.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
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
        VerticalTimelineModule
    ],
    declarations: [
        ComponentsComponent,
        NgbdModalComponent,
        NgbdModalContent,
        InformationComponent,
        MyLocaleDatePipe
    ],
    entryComponents: [NgbdModalContent],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
