import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;


  clothes = [
    {
      name: 'Dera',
      description: 'Explore the city\'s landmarks',
      imageUrl: '/assets/beach.jpg',
      price: 70.00
    },
    {
      name: 'Bikini',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/palm.jpg',
      price: 70.00
    },
    {
      name: 'Shorts',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/island-tour.png',
      price: 70.00
    },
    {
      name: 'Top\'s',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      name: 'Jeans',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
      price: 70.00
    },
    {
      name: 'Pajama\'s',
      description: 'Discover local spices and flavors',
      imageUrl: '/assets/travel.jpg',
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
