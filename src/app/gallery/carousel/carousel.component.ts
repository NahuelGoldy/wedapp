import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Picture} from '../../shared/domain/picture';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  pics: Picture[] = [];
  currentActive: number;
  serverURL: string;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.pics = data.pics;
    this.currentActive = data.activeId;
    this.serverURL = data.serverURL;
  }

  ngOnInit() {
  }

}
