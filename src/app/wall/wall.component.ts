import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {APIService} from '../shared/services/api.service';
import {Post} from '../shared/domain/post';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  animations: [routerTransition()]
})
export class WallComponent implements OnInit {

  posts: Post[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  public getPosts() {
    this.apiService.getPosts().subscribe((data:  Array<Post>) => {
      this.posts  =  data;
      console.log(data);
    });
  }

}
