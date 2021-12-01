import { Component, OnInit, HostListener, ElementRef, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parqueadero } from '../../modelos/parqueadero';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css'],
})

export class ReservacionComponent implements OnInit {

  _parqueadero = new Parqueadero;

  constructor(private el:FormsModule) { }

  ngOnInit(): void {
    
    this._parqueadero.Pointer();

  }
}
