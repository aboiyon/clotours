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
    price: 0,
    quantity: 0,
    color: ''
  };

  quantity$: number = 1;

  constructor ( private cartService: CartService) {}

  addToCart(product: Product, quantity$: number) {
        if (product.quantity < quantity$) {
                window.alert(`Sorry, there are only ${product.quantity} ${product.name}(s) in stock.`);
                quantity$ = product.quantity;
        }
    for (let i = 0; i < quantity$; i++) {
//       this.cartService.addToCart(product);
if (product.quantity > 0) {
        this.cartService.addToCart(product);
        product.quantity--;
}
    }
  
    window.alert(`Added ${quantity$} ${product.name}(s) to the cart!`);
  }

}
