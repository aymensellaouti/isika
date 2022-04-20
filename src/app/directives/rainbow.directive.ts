import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.backgroundColor') bgc = 'white';
  @HostBinding('style.borderColor') bc = 'white';
  constructor() {}
  @HostListener('keyup') onKeyUp() {
    /*   console.log('keyup'); */

    this.bgc = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
