import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {APIService} from '../shared/services/api.service';
import {Picture} from '../shared/domain/picture';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {

  currentPage: number;
  showSpinner: boolean;
  pics: Picture[] = [];
  serverURL: string;

  constructor(private apiService: APIService, private dialog: MatDialog) {
    this.currentPage = 0;
    this.serverURL = apiService.API_URL;
    this.getPics();
  }

  ngOnInit() {
  }

  openDialog(pic) {
    const dialogConfig = new MatDialogConfig();
    const index = this.pics.indexOf(pic);

    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      activeId: index,
      pics: this.pics,
      serverURL: this.serverURL
    };

    this.dialog.open(CarouselComponent, dialogConfig);
  }

  public getPics() {
    this.showSpinner = true;
    this.currentPage++;
    this.apiService.getPicsPaginated(this.currentPage).subscribe((data:  Picture[]) => {
      this.pics.push(...data);
      this.pics.forEach(pic => {
        this.showSpinner = false;
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
