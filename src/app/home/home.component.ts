import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})

export class HomeComponent implements OnInit {
    partyDate: Date;
    secondsLeft: number;
    minutesLeft: number;
    hoursLeft: number;
    daysLeft: number;
    timer;
    model = {
        left: true,
        middle: false,
        right: false
    };

    constructor() {
        this.partyDate = new Date('2019-04-06T21:00:00-0300');
    }

    ngOnInit() {
        this.setClock();
    }

    setClock() {
        this.timer = setInterval( () => {
            this.getTimeRemaining(this.partyDate);
        }, 1000);
    }

    getTimeRemaining(endtime) {
        const now = Date.now();
        const distance = endtime - now;
        if (distance > 0) {
            this.secondsLeft = Math.floor((distance / 1000) % 60 );
            this.minutesLeft = Math.floor((distance / 1000 / 60) % 60 );
            this.hoursLeft = Math.floor((distance / (1000 * 60 * 60)) % 24 );
            this.daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        } else {
            clearInterval(this.timer);
            this.secondsLeft = 0;
            this.minutesLeft = 0;
            this.hoursLeft = 0;
            this.daysLeft = 0;
        }
    }

    scrollTo(className: string): void {
        const elementList = document.querySelectorAll('.' + className);
        const element = elementList[0] as HTMLElement;
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}
