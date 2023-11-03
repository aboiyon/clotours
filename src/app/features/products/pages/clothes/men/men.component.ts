import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/features/models/products.product';
import { MenService } from 'src/app/features/services/men.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;

  men$: Product[] = [];
  currentMan: Product = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0.00
  }

  currentIndex:  number = -1;
  name: string = '';


constructor(private menService: MenService) {}

ngOnInit(): void {
  this.retrieveMen();
}

  retrieveMen(): void {
    this.menService.getAll().subscribe({
      next: (data) => {
        this.men$ = data;
        console.log("Men", data);
      }
    })
  }

  refreshList(): void {
    this.retrieveMen();
    this.currentMan = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
  }

  setActiveMan(man: Product, index: number): void {
    this.currentMan = man;
    this.currentIndex = index;
  }

  removeAllMen(): void {
    this.menService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      }
    })
  }

  searchName(): void {
    this.currentMan = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
    this.menService.findByName(this.name).subscribe({
      next: (data) => {
        this.men$ = data;
        console.log("Men", data);
      }
    })
  }

scrollRight() {
throw new Error('Method not implemented.');
}
navigateToClotheDetail(_t11: any) {
throw new Error('Method not implemented.');
}

scrollLeft() {
throw new Error('Method not implemented.');
}

}
