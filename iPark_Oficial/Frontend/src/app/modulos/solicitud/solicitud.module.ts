import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { RealizarSolicitudComponent } from './realizar-solicitud/realizar-solicitud.component';


@NgModule({
  declarations: [
    RealizarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
