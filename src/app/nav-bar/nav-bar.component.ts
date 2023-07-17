import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {

  @ViewChild('searchIcon') searchIcon!: ElementRef;
  @ViewChild('searchForm') searchForm!: ElementRef;

  ngOnInit() {
    this.searchIcon.nativeElement.addEventListener('click', () => {
      this.searchForm.nativeElement.classList.toggle('d-none');
    });
  }

  isSearchFormHidden:boolean = true;

  toggleSearchForm(): void {
    this.isSearchFormHidden = !this.isSearchFormHidden;
  }

}
