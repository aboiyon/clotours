import { Component, Input } from '@angular/core';
import { Product } from 'src/app/features/models/products.product';

@Component({
  selector: 'app-kid-detail',
  templateUrl: './kid-detail.component.html',
  styleUrls: ['./kid-detail.component.css']
})
export class KidDetailComponent {
  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  buyNow() {
    throw new Error('Method not implemented.');
    }
    addToCart() {
    throw new Error('Method not implemented.');
    }

}
