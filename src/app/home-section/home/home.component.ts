import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hovered:boolean[] = [false, false, false, false];

  mouseEvent: MouseEvent | null = null;

  constructor() {
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
  
}
