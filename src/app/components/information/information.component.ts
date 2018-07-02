import {Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  partyDate: Date;
  secondsLeft: number;
  minutesLeft: number;
  hoursLeft: number;
  daysLeft: number;
  timer;

  constructor() {
    this.partyDate = new Date('2019-04-06T21:00:00-0300');
  }

  ngOnInit() {
    this.setClock();
    const mapProp = {
      center: new google.maps.LatLng(-31.9725349, -60.9227361),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    new google.maps.Marker({
      position: new google.maps.LatLng(-31.9725349, -60.9227361),
      map: this.map
    });
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

}
