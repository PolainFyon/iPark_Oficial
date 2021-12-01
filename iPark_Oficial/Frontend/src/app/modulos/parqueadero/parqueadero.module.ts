import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { ReservacionComponent } from './reservacion/reservacion.component';


@NgModule({
  declarations: [
    ReservacionComponent
  ],
  imports: [
    CommonModule,
    ParqueaderoRoutingModule
  ]
})
export class ParqueaderoModule { }
