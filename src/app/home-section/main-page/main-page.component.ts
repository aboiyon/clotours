import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('mainPageContainer') mainPageContainer!: ElementRef;

  ngAfterViewInit(): void {
    // Scroll to the top of the component when it is loaded
    if (this.mainPageContainer) {
      this.mainPageContainer.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
