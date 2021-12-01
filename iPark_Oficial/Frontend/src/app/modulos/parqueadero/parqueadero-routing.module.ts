import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionComponent } from './reservacion/reservacion.component';

const routes: Routes = [
  {
    path: 'reservacion',
    component: ReservacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueaderoRoutingModule { }
