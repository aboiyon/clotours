import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private currentPosition = 0; 
  private totalWidth = 0; // Initialize with 0

  constructor() { }

  setCardWidth(width: number): void {
    this.totalWidth += width;
  }

  setNumCards(num: number): void {
    this.totalWidth = num * this.currentCardWidth();
  }
  currentCardWidth() {
    return this.totalWidth / this.totalNumCards();
  }
  totalNumCards(): number {
    return Math.max(this.totalWidth/ this.currentCardWidth(), 1)
  }

  scrollLeft(element: HTMLElement, duration: number): void {
    const currentScroll = element.scrollLeft;
    const cardWidth = this.currentCardWidth();
    const totalWidth = this.totalWidth;

    let targetScroll = currentScroll - cardWidth;
    
    // If the target scroll position is negative, wrap around to the end
    if (targetScroll < 0) {
      targetScroll = totalWidth - cardWidth;
    }

    this.scrollTo(element, targetScroll, duration);
}

scrollRight(element: HTMLElement, duration: number): void {
    const currentScroll = element.scrollLeft;
    const cardWidth = this.currentCardWidth();
    const totalWidth = this.totalWidth;

    let targetScroll = currentScroll + cardWidth;
    
    // If the target scroll position is greater than the total width, wrap around to the beginning
    if (targetScroll > totalWidth) {
      targetScroll = 0;
    }

    this.scrollTo(element, targetScroll, duration);
}


  scrollToStart(element: HTMLElement, duration: number): void {
    this.scrollTo(element, 0, duration);
  }

  scrollToEnd(element: HTMLElement, duration: number): void {
    const maxScroll = this.totalWidth * this.currentPosition;
    this.scrollTo(element, maxScroll, duration);
  }

  scrollTo(element: HTMLElement, to: number, duration: number): void {
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
      } else {
        // Handle endless scrolling (loop back to the beginning or end)
        if (element.scrollLeft === 0) {
          element.scrollLeft = this.totalWidth * (this.currentPosition - 1);
        } else if (element.scrollLeft >= this.totalWidth * (this.currentPosition - 1)) {
          element.scrollLeft = 0;
        }
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
