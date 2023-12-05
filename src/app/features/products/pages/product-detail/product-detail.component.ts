import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  quantity: number = 1;
  size: number = 1;

  constructor ( private cartService: CartService) {}

  addToCart(product: Product, quantity: number, size: number) {
    for (let i = 0; i < quantity; i++) {
      this.cartService.addToCart(product);
    }

    for (let i = 0; i < size; i++) {
        this.cartService.addToCart(product);
      }
  
    window.alert(`Added ${quantity} ${product.name}(s) to the cart!`);
  }

}
