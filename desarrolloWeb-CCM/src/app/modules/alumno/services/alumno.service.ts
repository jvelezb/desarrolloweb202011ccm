import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos=[new Alumno(1,"Juan","ITC"),new Alumno(2,"Jose","ITC")]

  constructor() { }

  getAlumnos():Alumno[]{
      return this.alumnos;

  }
  addAlumno(al:Alumno):void{
    this.alumnos.push(al);
  }



}
