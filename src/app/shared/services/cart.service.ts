import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/models/products.product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product [] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }

  getShippingCost(items: any[]): Observable<number> {
    // implement your logic to calculate the shipping cost based on the items
    // for example, you can use a fixed rate or a weight-based rate
    // you can also use different rates for different regions or countries
    // you can also use an external API to get the shipping cost from a third-party service
    // here we use a simple example of a fixed rate of 10 for any items
    return this.http.get<number>('/assets/shipping-cost.json');
  }
  
}
