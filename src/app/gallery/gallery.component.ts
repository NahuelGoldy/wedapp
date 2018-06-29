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
  selectedFile: File = null;

  constructor(private apiService: APIService) {  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File> event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    fd.append('isPublic', 'true'); // TODO refactor (hardcoded)
    this.createPic(fd);
  }

  public getPics() {
    this.apiService.getPics().subscribe((data:  Array<Picture>) => {
      this.pics  =  data;
      console.log(data);
    });
  }

  public createPic(fd) {
    this.apiService.createPic(fd).subscribe(res => {
      console.log(res);
    });
  }

}
