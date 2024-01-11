import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/features/models/products.product';
import { WomenService } from 'src/app/features/services/women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;

  women$: Product[] = [];
  currentWoman: Product = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0.00,
    quantity: 0,
    color: ''
  }

  currentIndex:  number = -1;
  name: string = '';


constructor(private womenService: WomenService) {}

ngOnInit(): void {
  this.retrieveWomen();
}

  retrieveWomen(): void {
    this.womenService.getAll().subscribe({
      next: (data) => {
        this.women$ = data;
        console.log("Women", data);
      }
    })
  }

  refreshList(): void {
    this.retrieveWomen();
    this.currentWoman = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00,
      quantity: 0,
      color: ''
    };
    this.currentIndex = -1;
  }

  setActiveWoman(woman: Product, index: number): void {
    this.currentWoman = woman;
    this.currentIndex = index;
  }

  removeAllWomen(): void {
    this.womenService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      }
    })
  }

  searchName(): void {
    this.currentWoman = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00,
      quantity: 0,
      color: ''
    };
    this.currentIndex = -1;
    this.womenService.findByName(this.name).subscribe({
      next: (data) => {
        this.women$ = data;
        console.log("Women", data);
      }
    })
  }


navigateToClotheDetail(_t11: any) {
throw new Error('Method not implemented.');
}
scrollRight() {
throw new Error('Method not implemented.');
}
scrollLeft() {
throw new Error('Method not implemented.');
}

}
