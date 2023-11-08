import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';
import { MenService } from 'src/app/features/services/men.service';

@Component({
  selector: 'app-man-detail',
  templateUrl: './man-detail.component.html',
  styleUrls: ['./man-detail.component.css']
})
export class ManDetailComponent {

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  constructor(private route: ActivatedRoute, private menService: MenService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menService.get(id).subscribe(man => this.product = man);
  }


  buyNow() {
    throw new Error('Method not implemented.');
    }
    addToCart() {
    throw new Error('Method not implemented.');
    }

}
