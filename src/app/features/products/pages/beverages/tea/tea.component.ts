import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  tea$: Product[] = [
    {
      id: 0,
      name: 'Smoothie',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/smoothie.png',
      price: 70.00
    },
    {
      id: 1,
      name: 'Kahawa',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/kahawa.png',
      price: 70.00
    },
    {
      id: 2,
      name: 'Mnazi',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/mnazi.png',
      price: 70.00
    },
    {
      id: 3,
      name: 'Maji Safi',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/water.png',
      price: 70.00
    },
    {
      id: 4,
      name: 'Mango Juice',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/ukwaju.png',
      price: 70.00
    },
    {
      id: 5,
      name: 'Ukwaju',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/ukaju.png',
      price: 70.00
    },
  ];

  constructor (private route: Router) {}

  navigateToTeaDetails(tea: any) {
    if (!tea) {
      throw new Error('Tea variable is missing')
      
    }
    this.route.navigate(['/tea$', tea.id])
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



