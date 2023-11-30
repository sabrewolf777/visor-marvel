import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { ExitComponent } from './components/exit/exit.component';

const routes: Routes = [
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
 
  { 
    path: "bitacora", 
    component: BitacoraComponent 
  },
  { 
    path: "salir", 
    component: ExitComponent 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
