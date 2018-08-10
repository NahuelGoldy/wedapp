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

  constructor(private apiService: APIService) {}

  ngOnInit() {
  }

  onFileSelected(event: any) {
    Array.from(event.target.files).forEach((file: any) => {
      this.selectedFile = file;
      this.selectedFile.loadProgressMode = 'determinate';
      this.selectedFile.loadProgressValue = 0;
      this.selectedFile.path = event.target.value;
      this.selectedFiles.push(this.selectedFile);
      this.selectedFile.isPublic = true;

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (e: any) => {
        file.path = e.target.result;
      };
    });
  }

  onUpload() {
    this.selectedFiles.forEach( each => {
      each.loadProgressMode = 'indeterminate';
      const formdata = new FormData();
      formdata.append('image', each);
      formdata.append('isPublic', each.isPublic);

      // API call
      this.apiService.createPic(formdata).subscribe((res:  Picture) => {
        console.log(res);
        each.loadProgressMode = 'determinate';
        each.loadProgressValue = 100;
      });
    });
  }

  removePic(index) {
    this.selectedFiles.splice(index, 1);
  }

}
