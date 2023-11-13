import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {

  isSearchFormHidden:boolean = true;
  isServicesActive = false;
  isProjectsActive = false;
  isAboutActive = false;

  @ViewChild('searchIcon') searchIcon!: ElementRef;
  @ViewChild('searchForm') searchForm!: ElementRef;
  isSmallScreen = false;

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.searchIcon?.nativeElement) {
      this.searchIcon.nativeElement.addEventListener('click', () => {
        if (this.searchForm?.nativeElement) {
          this.searchForm.nativeElement.classList.toggle('d-none');
        }
      });
    }
  }

  toggleActiveLink(linkName: string) {
    switch (linkName) {
      case 'services':
        this.isServicesActive = !this.isServicesActive;
        break;
      case 'projects':
        this.isProjectsActive = !this.isProjectsActive;
        break;
      case 'about':
        this.isAboutActive = !this.isAboutActive;
        break;
    }
  }
  

  toggleSearchForm(): void {
    this.isSearchFormHidden = !this.isSearchFormHidden;
  }

  closeNavbar() {
    // Close the navbar when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      navbarToggler.dispatchEvent(new Event('click'));
    }
  }

}
