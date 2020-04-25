import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionDisplayComponent } from './components/informacion-display/informacion-display.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';


@NgModule({
  declarations: [InformacionDisplayComponent, AddAlumnoComponent, ListaAlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnoModule { }
