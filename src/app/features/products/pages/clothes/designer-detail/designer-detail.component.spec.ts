import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDetailComponent } from './designer-detail.component';

describe('DesignerDetailComponent', () => {
  let component: DesignerDetailComponent;
  let fixture: ComponentFixture<DesignerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignerDetailComponent]
    });
    fixture = TestBed.createComponent(DesignerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
