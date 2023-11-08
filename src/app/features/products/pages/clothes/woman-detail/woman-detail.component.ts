import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';
import { WomenService } from 'src/app/features/services/women.service';

@Component({
  selector: 'app-woman-detail',
  templateUrl: './woman-detail.component.html',
  styleUrls: ['./woman-detail.component.css']
})
export class WomanDetailComponent {

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  constructor(private route: ActivatedRoute, private womenService: WomenService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.womenService.get(id).subscribe(woman => this.product = woman);
  }


  buyNow() {
    throw new Error('Method not implemented.');
    }
    addToCart() {
    throw new Error('Method not implemented.');
    }

}
