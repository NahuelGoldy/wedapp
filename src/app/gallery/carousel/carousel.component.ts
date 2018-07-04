import {ChangeDetectorRef, Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Picture} from '../../shared/domain/picture';
import {APIService} from '../../shared/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  pics: Picture[] = [];
  currentActive: string;
  serverURL: string;
  likeBtnClass: string;
  likeBtnIcon: string;
  likeBtnText: string;

  constructor(public dialogRef: MatDialogRef<CarouselComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private apiService: APIService,
              public zone: NgZone,
              public ref: ChangeDetectorRef) {
    this.pics = data.pics;
    this.currentActive = data.activeId;
    this.serverURL = data.serverURL;
    this.likeBtnClass = 'btn-default';
    this.likeBtnIcon = 'nc-tap-01';
    this.likeBtnText = '   LIKE';
    this.dialogRef.backdropClick().subscribe(() => this.close());
  }

  ngOnInit() {
    this.zone.run(() => {
      this.ref.detectChanges();
    });
  }

  public likePic(pic) {
    this.likeBtnIcon = 'nc-satisfied';
    this.likeBtnClass = 'btn-info';
    this.likeBtnText = '   Me gusta!';
    this.apiService.likePic(pic._id).subscribe((res: Picture) => {
      pic.likesCount++;
    });
  }

  close() {
    this.dialogRef.close(this.pics);
  }

}
