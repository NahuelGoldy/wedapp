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

  currentPage: number;
  pics: Picture[] = [];
  serverURL: string;

  constructor(private apiService: APIService) {
    this.currentPage = 0;
    this.serverURL = apiService.API_URL;
    this.getPics();
  }

  ngOnInit() {
  }

  public getPics() {
    this.currentPage++;
    this.apiService.getPicsPaginated(this.currentPage).subscribe((data:  Picture[]) => {
      this.pics.push(...data);
      this.pics.forEach(pic => {
        pic.path = pic.path.replace('\\', '/');
      });
    });
  }

  public likePic(id) {
    this.apiService.likePic(id).subscribe((res: Picture) => {
      (this.pics.find(pic => pic._id = id)).likesCount = res.likesCount;
    });
  }

  like() {
    // TODO delete
    this.likePic(this.pics[0]._id);
  }

}
