import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBannerImageComponent } from './left-banner-image.component';

describe('LeftBannerImageComponent', () => {
  let component: LeftBannerImageComponent;
  let fixture: ComponentFixture<LeftBannerImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBannerImageComponent]
    });
    fixture = TestBed.createComponent(LeftBannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
