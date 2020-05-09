import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InformacionDisplayComponent } from './components/informacion-display/informacion-display.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { DetailAlumnoComponent } from './components/detail-alumno/detail-alumno.component';
import { AlumnoService } from './services/alumno.service';
import {StorageServiceModule}  from 'ngx-webstorage-service';
import { PadreAlumnoComponent } from './components/padre-alumno/padre-alumno.component';
import { Hijo1AlumnoComponent } from './components/hijo1-alumno/hijo1-alumno.component';
import { Hijo2AlumnoComponent } from './components/hijo2-alumno/hijo2-alumno.component';
import { FuenteDirective } from './directives/fuente.directive';
@NgModule({
  declarations: [InformacionDisplayComponent, AddAlumnoComponent, ListaAlumnosComponent, DetailAlumnoComponent, PadreAlumnoComponent, Hijo1AlumnoComponent, Hijo2AlumnoComponent, FuenteDirective],
  imports: [
    CommonModule,
    FormsModule,
    AlumnosRoutingModule,
    StorageServiceModule
  ],
  providers:[]
})
export class AlumnoModule { }
