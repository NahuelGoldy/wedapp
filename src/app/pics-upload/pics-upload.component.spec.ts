import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsUploadComponent } from './pics-upload.component';

describe('PicsUploadComponent', () => {
  let component: PicsUploadComponent;
  let fixture: ComponentFixture<PicsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
