import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartImageComponent } from './cart-image.component';

describe('CartImageComponent', () => {
  let component: CartImageComponent;
  let fixture: ComponentFixture<CartImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartImageComponent]
    });
    fixture = TestBed.createComponent(CartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
