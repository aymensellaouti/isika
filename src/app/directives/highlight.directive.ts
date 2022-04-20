import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  /* Je voudrais que chaque element tagé par cette directive ait ce comportement 🧮
    Des que j'entre dans l element la couleur du background devient jaune
    Quand je sort ca devienne rouge
  */
  /* L'apparence => quel attribut je gére (backgroundColor) */
  @HostBinding('style.backgroundColor') bgc = 'red';
  constructor() {}
  /* Le comportement => quel événement je gére (mouseenter et mouseleave) */
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = 'red';
  }
}
