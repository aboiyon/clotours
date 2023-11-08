import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManDetailComponent } from './man-detail.component';

describe('ManDetailComponent', () => {
  let component: ManDetailComponent;
  let fixture: ComponentFixture<ManDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManDetailComponent]
    });
    fixture = TestBed.createComponent(ManDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
