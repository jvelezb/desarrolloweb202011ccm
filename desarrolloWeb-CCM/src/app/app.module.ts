import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { SubencabezadoComponent } from './main-components/subencabezado/subencabezado.component';
import { InformacionUsuarioComponent } from './main-components/informacion-usuario/informacion-usuario.component';
import { Componente2Component } from './main-components/componente2/componente2.component';
import { Componente3Component } from './main-components/componente3/componente3.component';
import { AlumnoModule } from './modules/alumno/alumno.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { PaginaPrincipalComponent } from './main-components/pagina-principal/pagina-principal.component';
import { StorageServiceModule} from 'ngx-webstorage-service';

import {registerLocaleData} from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';
import localeUS from '@angular/common/locales/en';



registerLocaleData(localeMX,'es-MX');
registerLocaleData(localeUS,'en');


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SubencabezadoComponent,
    InformacionUsuarioComponent,
    Componente2Component,
    Componente3Component,
    PageNotFoundComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AlumnoModule,
    ProfesoresModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
