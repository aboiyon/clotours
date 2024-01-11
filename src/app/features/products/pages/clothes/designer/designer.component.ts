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
    price: 0.00,
    quantity: 0,
    color: ''
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
      price: 0.00,
      quantity: 0,
      color: ''
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
      price: 0.00,
      quantity: 0,
      color: ''
    };
    this.currentIndex = -1;
    this.designersService.findByName(this.name).subscribe({
      next: (data) => {
        this.designers = data;
        console.log("Designers", data);
      }
    })
  }

scrollLeft() {
    if (this.cardsWrapper) {
      const scrollAmount = -400;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 400);
    }
  }

  scrollRight() {
    if (this.cardsWrapper) {
      const scrollAmount = 400;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 400);
    }
  }

  private scrollTo(element: HTMLElement, to: number, duration: number) {
    const start = element.scrollLeft;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  private easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

}
