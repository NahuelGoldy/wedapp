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

  public createPost() {

    // TODO delete this mock lines
    const post = new Post();
    post.message = 'ESte es un mensaje del mas alla!';
    post.isPublic = false;
    post.author = 'Post desde Angular6';

    this.apiService.createPost(post).subscribe((createdPost) => {
      console.log(createdPost);
    });
  }

}
