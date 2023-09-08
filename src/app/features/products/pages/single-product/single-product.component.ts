import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../products.product';
import { ActivatedRoute } from '@angular/router';
import { ToursComponent } from '../tours/tours.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
buyNow() {
throw new Error('Method not implemented.');
}
addToCart() {
throw new Error('Method not implemented.');
}

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  // product: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // this.product = p.find(product => this.product.id === productIdFromRoute)
  }

}
