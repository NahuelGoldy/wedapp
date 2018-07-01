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

  currentPage: number;
  posts: Post[] = [];
  avatars: string[] = [
      'https://image.flaticon.com/icons/svg/206/206853.svg',
      'https://image.flaticon.com/icons/svg/206/206891.svg',
      'https://image.flaticon.com/icons/svg/206/206880.svg',
      'https://image.flaticon.com/icons/svg/219/219969.svg',
      'https://image.flaticon.com/icons/svg/219/219970.svg',
      'https://image.flaticon.com/icons/svg/219/219971.svg',
      'https://image.flaticon.com/icons/svg/219/219961.svg',
      'https://image.flaticon.com/icons/svg/219/219963.svg',
      'https://image.flaticon.com/icons/svg/219/219964.svg',
      'https://image.flaticon.com/icons/svg/219/219968.svg',
      'https://image.flaticon.com/icons/svg/219/219976.svg',
      'https://image.flaticon.com/icons/svg/145/145843.svg'
  ];

  constructor(private apiService: APIService) {
    this.currentPage = 0;
    this.getPosts();
  }

  ngOnInit() {
  }

  public getPosts() {
    this.currentPage++;
    this.apiService.getPostsPaginated(this.currentPage).subscribe((data:  Post[]) => {
      this.posts.push(...data);
      this.setMockRandomAvatars();
    });
  }

  private setMockRandomAvatars() {
    this.posts.forEach(p => {
      p.avatarURL = this.avatars[(Math.round(Math.random() * this.avatars.length))];
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
