import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-display',
  templateUrl: './informacion-display.component.html',
  styleUrls: ['./informacion-display.component.scss']
})
export class InformacionDisplayComponent implements OnInit {

  nombreAlumno: string = "Juan Velez Ballesteros";
  alumnoSeleccion;
  alumnos=[{nombre:"Juan", matricula:"1234",carrera: 'ITC'},{nombre:"Pedro", matricula:"9999",carrera: 'ITC'},{nombre:"Susana", matricula:"5",carrera: 'LIN'}]

  constructor() { }

  ngOnInit(): void {
  }

  cambio(){
    this.nombreAlumno = this.nombreAlumno + " hola";
  }

  onSelect(alumno): void{
    this.nombreAlumno = alumno.nombre;
    this.alumnoSeleccion = alumno;
  }

}
