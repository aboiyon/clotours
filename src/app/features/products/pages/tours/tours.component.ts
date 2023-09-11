import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../../models/products.product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  tours:Product[] = [
    {
      id: 0,
      name: 'City Tour',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/city.png',
      price: 70.00
    },
    {
      id: 1,
      name: 'Spice Tour',
      description: 'Discover local spices and flavors',
      imageUrl: 'assets/spices.png',
      price: 70.00
    },
    {
      id: 2,
      name: 'Island Tour',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/island.png',
      price: 70.00
    },
    {
      id: 3,
      name: 'Safari Blue',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      id: 4,
      name: 'Mountains',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/kilimanjaro.png',
      price: 70.00
    },
    {
      id: 5,
      name: 'Game Parks',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/elephant.png',
      price: 70.00
    },
  ];


constructor(private router: Router) {}

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

  navigateToTourDetail(tour: any) {
    if (!tour) {
      throw new Error('The tour variable is undefined');
    }
    this.router.navigate(['/tours', tour.id]); 
  }

}
