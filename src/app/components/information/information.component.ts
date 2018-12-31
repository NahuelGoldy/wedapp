import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    partyDate: Date;
    weMetDate: Date;
    weMovedTogetherDate: Date;
    proposalDate: Date;

    constructor() {
        this.partyDate = new Date('2019-04-06T21:00:00-0300');
        this.weMetDate = new Date('2009-12-30T22:00:00-0300');
        this.proposalDate = new Date('2018-02-07T14:00:00-0300');
        this.weMovedTogetherDate = new Date('2011-03-15T16:00:00-0300');
    }

    ngOnInit() {
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
}
