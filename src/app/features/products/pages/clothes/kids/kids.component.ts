import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/features/models/products.product';
import { KidsService } from 'src/app/features/services/kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements AfterViewInit{

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;
  @ViewChild('kidsContainer') kidsContainer!: ElementRef;

  kids: Product[] = [];
  currentKid: Product = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0.00
  }

  currentIndex:  number = -1;
  name: string = '';


constructor(private kidsService: KidsService) {}

ngOnInit(): void {
  this.retrieveKids();
}

ngAfterViewInit(): void {
  // Scroll to the top of the component when it is loaded
  if (this.kidsContainer) {
    this.kidsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

  retrieveKids(): void {
    this.kidsService.getAll().subscribe({
      next: (data) => {
        this.kids = data;
        console.log("Kids", data);
      }
    })
  }

  refreshList(): void {
    this.retrieveKids();
    this.currentKid = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
  }

  setActiveKid(kid: Product, index: number): void {
    this.currentKid = kid;
    this.currentIndex = index;
  }

  removeAllKids(): void {
    this.kidsService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      }
    })
  }

  searchName(): void {
    this.currentKid = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
    this.kidsService.findByName(this.name).subscribe({
      next: (data) => {
        this.kids = data;
        console.log("Kids", data);
      }
    })
  }

scrollRight() {
throw new Error('Method not implemented.');
}
navigateToClotheDetail(arg0: any) {
throw new Error('Method not implemented.');
}

scrollLeft() {
throw new Error('Method not implemented.');
}

}
