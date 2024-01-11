import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';
import { KidsService } from 'src/app/features/services/kids.service';

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
    price: 0,
    quantity: 0,
    color: ''
  };

  constructor(private route: ActivatedRoute, private kidsService: KidsService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.kidsService.get(id).subscribe(kid => this.product = kid);
  }


  buyNow() {
    throw new Error('Method not implemented.');
    }
    addToCart() {
    throw new Error('Method not implemented.');
    }
    

}
