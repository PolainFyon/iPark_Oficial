import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { FormsModule } from '@angular/forms';
import { ReservarDirective } from './reservacion/directivas/reservar.directive';
import { CancelarDirective } from './reservacion/directivas/cancelar.directive';


@NgModule({
  declarations: [
    ReservacionComponent,
    ReservarDirective,
    CancelarDirective
  ],
  imports: [
    CommonModule,
    ParqueaderoRoutingModule,
    FormsModule
  ]
})
export class ParqueaderoModule { }
