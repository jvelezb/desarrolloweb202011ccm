import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoModule } from './modules/alumno/alumno.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { PaginaPrincipalComponent } from './main-components/pagina-principal/pagina-principal.component';
import { PerfilComponent } from './main-components/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

const rutas: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  {
    path: 'alumnos',
    loadChildren: './modules/alumno/alumno.module#AlumnoModule',
  },
  {
    path: 'profesores',
    loadChildren: './modules/profesores/profesores.module#ProfesoresModule',
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas, { enableTracing: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
