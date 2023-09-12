import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  imports: Product[] = [
    {
      id: 0,
      name: 'Hand Made',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/hand-made.png',
      price: 70.00
    },
    {
      id: 1,
      name: 'Dera',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/dera.png',
      price: 70.00
    },
    {
      id: 2,
      name: 'Boots',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/boots.png',
      price: 70.00
    },
    {
      id: 3,
      name: 'Shorts',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/shorts.png',
      price: 70.00
    },
    {
      id: 4,
      name: 'Top\'s',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/top.png',
      price: 70.00
    },
    {
      id: 5,
      name: 'Jeans',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/jeans.png',
      price: 70.00
    },
    {
      id: 6,
      name: 'Blazers',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/blazer.png',
      price: 70.00
    },
    {
      id: 7,
      name: 't-shirts',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/tshirts.png',
      price: 70.00
    },
  ];

  constructor (private route: Router) {}

  navigateToImportedClotheDetail (imports: any) {
    if (!imports) {
      throw new Error ('The imports variable is missing');
    }
    this.route.navigate(['/imports', imports.id])
  }

  scrollLeft() {
    if (this.cardsWrapper) {
      const scrollAmount = -300;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 500);
    }
  }

  scrollRight() {
    if (this.cardsWrapper) {
      const scrollAmount = 300;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 500);
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
