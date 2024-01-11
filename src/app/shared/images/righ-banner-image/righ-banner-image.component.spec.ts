import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighBannerImageComponent } from './righ-banner-image.component';

describe('RighBannerImageComponent', () => {
  let component: RighBannerImageComponent;
  let fixture: ComponentFixture<RighBannerImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RighBannerImageComponent]
    });
    fixture = TestBed.createComponent(RighBannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
