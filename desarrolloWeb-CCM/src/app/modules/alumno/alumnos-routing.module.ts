import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InformacionDisplayComponent} from './components/informacion-display/informacion-display.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { PadreAlumnoComponent } from './components/padre-alumno/padre-alumno.component';

const rutas : Routes =[
    {path: 'viewAlumno',component: InformacionDisplayComponent},
    {path: 'addAlumno', component: AddAlumnoComponent},
    {path: 'padre', component:PadreAlumnoComponent},
    {path:'listaAlumnos',component: ListaAlumnosComponent}
];


@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule{}
