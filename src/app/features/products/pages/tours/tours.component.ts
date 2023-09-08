import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../products.product';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  tours:Product[] = [
    {
      name: 'City Tour',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/city.png',
      price: 70.00
    },
    {
      name: 'Spice Tour',
      description: 'Discover local spices and flavors',
      imageUrl: 'assets/spices.png',
      price: 70.00
    },
    {
      name: 'Island Tour',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/island.png',
      price: 70.00
    },
    {
      name: 'Safari Blue',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      name: 'Mountains',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/kilimanjaro.png',
      price: 70.00
    },
    {
      name: 'Game Parks',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/elephant.png',
      price: 70.00
    },
  ];

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
