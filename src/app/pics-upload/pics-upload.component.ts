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
  selectedFiles: File[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File> event.target.files[0];
    this.selectedFiles.push(<File> event.target.files[0]);
  }

  onUpload() {
    this.selectedFiles.forEach( each => {
      const formdata = new FormData();
      formdata.append('image', each);
      this.createPic(formdata);
    });
    // const fd = new FormData();
    // fd.append('image', this.selectedFile);
    // this.createPic(fd);
  }

  public createPic(fd) {
    this.apiService.createPic(fd).subscribe((res:  Picture) => {
      console.log(res);
    });
  }

}
