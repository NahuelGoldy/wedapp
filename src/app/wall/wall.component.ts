import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  animations: [routerTransition()]
})
export class WallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
