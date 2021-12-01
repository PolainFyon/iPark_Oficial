import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReservar]'
})

export class ReservarDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click') Reservar(): void {

    console.log('Hello Wold');
    let answer = window.confirm('¿Está seguro de reservar este espacio?');
    if (answer) {

      let tags: any = document.getElementsByClassName('nav-link');
      let siteNumber = tags[0];
      let rects: any = document.getElementsByTagName('rect');

      for (let rec of rects) {
        if (rec.getAttribute('name') == siteNumber.textContent && rec.style.fill !== 'red') {
          rec.style.fill = 'red';
          tags[2].textContent = 'Reservado'
          let resrve = document.getElementsByTagName('button')[0];
          resrve.disabled = true
          let cancel: any = document.getElementsByName('Cancel')[0];
          cancel.disabled = false;
        }
      }
    }
  }
}
