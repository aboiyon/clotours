import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/products.product';
import { ActivatedRoute } from '@angular/router';
import { ToursComponent } from '../tours/tours.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  formattedPrice: any;

  constructor(private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
      this.formattedPrice = this.currencyPipe.transform(this.product.price);
  }

  buyNow() {
    throw new Error('Method not implemented.');
    }
    addToCart() {
    throw new Error('Method not implemented.');
    }

}
