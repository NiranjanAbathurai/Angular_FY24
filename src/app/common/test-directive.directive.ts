import { Directive, ElementRef , HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = "blue";
  }

  @HostBinding('style.background') color = "green";

  @HostListener('mouseenter') onMouseHover(){
    this.elementRef.nativeElement.style.color='red';
  }

  @HostListener('mouseleave') onMouseleave(){
    this.elementRef.nativeElement.style.color='blue';
  }

  @HostListener('dblclick') ondblclick(){
    this.elementRef.nativeElement.style.color='yellow';
    this.color = "pink";
  }

  @HostListener('drag') drag(){
    this.elementRef.nativeElement.style.color='pink';
    
  }
}
