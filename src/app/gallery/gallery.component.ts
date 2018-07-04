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
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = {
      activeId: index,
      pics: this.pics,
      serverURL: this.serverURL
    };
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.backdropClass = 'custom-cdk-overlay-dark-backdrop';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.maxWidth = '100vw';

    const dialogRef = this.dialog.open(CarouselComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => this.pics = data
    );
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

}
