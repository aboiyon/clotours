import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunction(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[1];
    const product = elm.getElementsByClassName('card');
    if (product.length > 3 || window.innerWidth < 768) {
      elm.prepend(product[product.length - 1]);
    }
  }

}
