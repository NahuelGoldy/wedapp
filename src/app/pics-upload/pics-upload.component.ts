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

  selectedFile: any = null;
  selectedFiles: any[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    console.log(event.target.files);
    Array.from(event.target.files).forEach((file: any) => {
      this.selectedFile = file;
      this.selectedFile.path = event.target.value;
      this.selectedFiles.push(this.selectedFile);

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (e: any) => {
        file.path = e.target.result;
      };
    });
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
