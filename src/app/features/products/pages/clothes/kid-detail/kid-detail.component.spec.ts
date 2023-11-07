import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidDetailComponent } from './kid-detail.component';

describe('KidDetailComponent', () => {
  let component: KidDetailComponent;
  let fixture: ComponentFixture<KidDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidDetailComponent]
    });
    fixture = TestBed.createComponent(KidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
