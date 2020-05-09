import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appFuente]'
})
export class FuenteDirective {

  constructor(private elemento: ElementRef) {

   }

  @HostListener('mouseenter') enterMouseEnter(){
      this.cambio('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.cambio('yellow');
  }

  private cambio(color:string){
    this.elemento.nativeElement.style.fontsize = '60px';
    this.elemento.nativeElement.style.backgroundColor = color;
  }

}
