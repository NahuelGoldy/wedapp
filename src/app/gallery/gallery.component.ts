import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {APIService} from '../shared/services/api.service';
import {Picture} from '../shared/domain/picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {

  pics: Picture[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  public getPosts() {
    this.apiService.getPics().subscribe((data:  Array<Picture>) => {
      this.pics  =  data;
      console.log(data);
    });
  }

}
