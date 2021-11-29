import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarPersonaCComponent } from './persona-cliente/borrar-persona-c/borrar-persona-c.component';
import { BuscarPersonaCComponent } from './persona-cliente/buscar-persona-c/buscar-persona-c.component';
import { CrearPersonaCComponent } from './persona-cliente/crear-persona-c/crear-persona-c.component';
import { EditarPersonaCComponent } from './persona-cliente/editar-persona-c/editar-persona-c.component';
import { BorrarPersonaDComponent } from './persona-dueno/borrar-persona-d/borrar-persona-d.component';
import { BuscarPersonaDComponent } from './persona-dueno/buscar-persona-d/buscar-persona-d.component';
import { CrearPersonaDComponent } from './persona-dueno/crear-persona-d/crear-persona-d.component';

const routes: Routes = [
  { 
   path:'crear-personaC', 
   component: CrearPersonaCComponent   
  },
  { 
    path:'crear-personaD', 
    component: CrearPersonaDComponent   
   },
   { 
    path:'editar-personaC', 
    component: EditarPersonaCComponent   
   },
   { 
    path:'editar-personaD', 
    component: CrearPersonaDComponent   
   },
   { 
    path:'buscar-personaC', 
    component: BuscarPersonaCComponent   
   },
   { 
    path:'buscar-personaD', 
    component: BuscarPersonaDComponent   
   },
   { 
    path:'borrar-personaC', 
    component: BorrarPersonaCComponent   
   },
   { 
    path:'borrar-personaD', 
    component: BorrarPersonaDComponent   
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
