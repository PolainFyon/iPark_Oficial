import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { CambiodeclaveComponent } from './cambiodeclave/cambiodeclave.component';
import { RecuperarclaveComponent } from './recuperarclave/recuperarclave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutenticacionComponent,
    CambiodeclaveComponent,
    RecuperarclaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
