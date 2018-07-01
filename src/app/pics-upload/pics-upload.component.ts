import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import { APIService } from '../shared/services/api.service';
import { Picture } from '../shared/domain/picture';

@Component({
  selector: 'app-pics-upload',
  templateUrl: './pics-upload.component.html',
  styleUrls: ['./pics-upload.component.css'],
  animations: [routerTransition()]
})
export class PicsUploadComponent implements OnInit {

  selectedFile: File = null;

  constructor(private apiService: APIService) { }

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

  public createPic(fd) {
    this.apiService.createPic(fd).subscribe((res:  Picture) => {
      console.log(res);
    });
  }

}
