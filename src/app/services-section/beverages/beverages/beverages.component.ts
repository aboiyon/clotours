import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  beverages = [
    {
      name: 'Smoothie',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/smoothie.png',
      price: 70.00
    },
    {
      name: 'Kahawa',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/kahawa.png',
      price: 70.00
    },
    {
      name: 'Mnazi',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/mnazi.png',
      price: 70.00
    },
    {
      name: 'Maji Safi',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/water.png',
      price: 70.00
    },
    {
      name: 'Mango Juice',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/ukwaju.png',
      price: 70.00
    },
    {
      name: 'Ukwaju',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/ukaju.png',
      price: 70.00
    },
  ];

  scrollLeft() {
    if (this.cardsWrapper) {
      const scrollAmount = -300;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 500); // Adjust the value as needed
    }
  }

  scrollRight() {
    if (this.cardsWrapper) {
      const scrollAmount = 300;
      const currentScroll = this.cardsWrapper.nativeElement.scrollLeft;
      this.scrollTo(this.cardsWrapper.nativeElement, currentScroll + scrollAmount, 500);
      // this.cardsWrapper.nativeElement.scrollLeft += scrollAmount; // Adjust the value as needed
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
