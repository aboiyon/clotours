import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunction(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[1];
    const product = elm.getElementsByClassName("card");
    if (product.length > 3 || window.innerWidth < 768) {
      elm.append(product[0]);
    }
  }

}
