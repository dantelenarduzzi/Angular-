import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',

})

export class HoverStyleDirective {
  constructor(private elm: ElementRef) {
  }


  @HostListener('mouseover') onMouseOver(): void{
    this.hoverIn();
  }

  @HostListener('mouseout') onMouseOut(): void{
    this.hoverOut();
  }

  hoverIn(): void{

      this.elm.nativeElement.style.textDecoration = "underline";

      this.elm.nativeElement.style.fontWeight = 'bold';

  }

  hoverOut(): void {

      this.elm.nativeElement.style.textDecoration = '';

      this.elm.nativeElement.style.fontWeight = '';

  }
}
