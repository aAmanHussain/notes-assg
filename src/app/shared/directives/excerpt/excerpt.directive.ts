import { Directive, ElementRef, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appExcerpt]'
})
export class ExcerptDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.split(' ').slice(0, 11).join(' ');
  }
}
