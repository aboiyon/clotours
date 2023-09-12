import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  link$: Product[] = [
    {
      id: 0,
      name: 'AirBnB',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/accessories.png',
      price: 70.00
    },
    {
      id: 1,
      name: 'Cottages',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/palm.jpg',
      price: 70.00
    },
    {
      id: 2,
      name: 'Restaurants',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/island-tour.png',
      price: 70.00
    },
    {
      id: 3,
      name: 'Maji Safi',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      id: 4,
      name: 'Mountains',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      id: 5,
      name: 'Game Parks',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
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

  navigateToLinkDetail(link: any) {
    if (!link) {
      throw new Error('The link variable is undefined');
    }
    this.router.navigate(['/link$', link.id]); 
  }

}
