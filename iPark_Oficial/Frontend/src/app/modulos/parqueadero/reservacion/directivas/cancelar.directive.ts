import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCancelar]'
})

export class CancelarDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click') Cancel(): void {

    let tags: any = document.getElementsByClassName('nav-link');
    let siteNumber = tags[2];

    let answer = window.confirm('¿Está seguro de cancelar la reservar?');
    if (answer) {
      let rects: any = document.getElementsByTagName('rect');
      for (let rec of rects) {
        if (rec.style.fill == 'red') {
          let div: any = document.getElementsByClassName('nav-link')[0];
          if (div.textContent == rec.getAttribute('name')) {
            rec.style.fill = 'rgb(236, 236, 236)';
            let button: any = document.getElementsByName('Reservar')[0];
            button.disabled = false;
            let cancel: any = document.getElementsByName('Cancel')[0];
            cancel.disabled = true;
            tags[2].textContent = 'Disponible'
          }
        }
      }
    }
  }
}
