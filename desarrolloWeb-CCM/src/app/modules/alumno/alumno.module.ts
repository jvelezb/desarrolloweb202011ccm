import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InformacionDisplayComponent } from './components/informacion-display/informacion-display.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { DetailAlumnoComponent } from './components/detail-alumno/detail-alumno.component';

@NgModule({
  declarations: [InformacionDisplayComponent, AddAlumnoComponent, ListaAlumnosComponent, DetailAlumnoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlumnosRoutingModule
  ]
})
export class AlumnoModule { }
