import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/features/models/products.product';
import { DesignersService } from 'src/app/features/services/designers.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements AfterViewInit{

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;
  @ViewChild('designersContainer') designersContainer!: ElementRef;

  designers: Product[] = [];
  currentDesigner: Product = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0.00
  }

  currentIndex:  number = -1;
  name: string = '';


constructor(private designersService: DesignersService) {}

ngOnInit(): void {
  this.retrieveDesigners();
}

ngAfterViewInit(): void {
  // Scroll to the top of the component when it is loaded
  if (this.designersContainer) {
    this.designersContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

  retrieveDesigners(): void {
    this.designersService.getAll().subscribe({
      next: (data) => {
        this.designers = data;
        console.log("Designers", data);
      }
    })
  }

  refreshList(): void {
    this.retrieveDesigners();
    this.currentDesigner = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
  }

  setActiveDesigner(designer: Product, index: number): void {
    this.currentDesigner = designer;
    this.currentIndex = index;
  }

  removeAllDesigners(): void {
    this.designersService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      }
    })
  }

  searchName(): void {
    this.currentDesigner = {
      id: 0,
      name: '',
      description: '',
      imageUrl: '',
      price: 0.00
    };
    this.currentIndex = -1;
    this.designersService.findByName(this.name).subscribe({
      next: (data) => {
        this.designers = data;
        console.log("Designers", data);
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
