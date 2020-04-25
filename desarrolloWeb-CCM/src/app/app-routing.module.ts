import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlumnoModule} from './modules/alumno/alumno.module';
import {ProfesoresModule} from './modules/profesores/profesores.module';
import {PageNotFoundComponent} from './main-components/page-not-found/page-not-found.component';
import {PaginaPrincipalComponent} from './main-components/pagina-principal/pagina-principal.component';


const rutas : Routes =  [
    {path:'', component: PaginaPrincipalComponent},
    {path:'alumnos',loadChildren:'./modules/alumno/alumno.module#AlumnoModule'},
    {path: 'profesores', loadChildren: './modules/profesores/profesores.module#ProfesoresModule'},
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    imports : [RouterModule.forRoot(rutas,{enableTracing:true})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
