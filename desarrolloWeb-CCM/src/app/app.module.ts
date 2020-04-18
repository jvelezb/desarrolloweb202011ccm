import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SubencabezadoComponent } from './subencabezado/subencabezado.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SubencabezadoComponent,
    InformacionUsuarioComponent,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
