import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
