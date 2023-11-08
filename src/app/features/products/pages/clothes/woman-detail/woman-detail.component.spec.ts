import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanDetailComponent } from './woman-detail.component';

describe('WomanDetailComponent', () => {
  let component: WomanDetailComponent;
  let fixture: ComponentFixture<WomanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomanDetailComponent]
    });
    fixture = TestBed.createComponent(WomanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
