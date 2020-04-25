import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit {

  
  bienvenida = "Saludos a todos los que se quedaron despues de las 11";
  constructor() { }

  ngOnInit(): void {
  }

}
