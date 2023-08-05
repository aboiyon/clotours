import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hovered:boolean[] = [false, false, false, false];

  mouseEvent: MouseEvent | null = null;

  constructor(public router: Router) {
    this.mouseEvent = null;
  }

  ngOnInit() {
  }

  setMouseEvent(event: any) {
    this.mouseEvent = event;
  }


  showDifferentContent(index: number) {
    this.hovered[index] = true;
  }

  hideDifferentContent(index: number) {
    this.hovered[index] = false;
  }

  navigateToTours() {
    this.router.navigate(['/tours']);
  }
  
}
