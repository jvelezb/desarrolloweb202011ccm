import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-alumno',
  templateUrl: './padre-alumno.component.html',
  styleUrls: ['./padre-alumno.component.scss']
})
export class PadreAlumnoComponent implements OnInit {
  cualquierCosa = "Pedro Luis Juan"
  apellidoHijo = 'Salazar';
  constructor() { }

  ngOnInit(): void {
  }

}
