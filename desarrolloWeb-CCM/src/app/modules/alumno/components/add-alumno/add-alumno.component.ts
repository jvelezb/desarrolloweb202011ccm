import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss'],
  providers: [AlumnoService],
})
export class AddAlumnoComponent implements OnInit {
  alumnos: Alumno[];
  constructor(
    public alumnoService: AlumnoService,
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getAlumnos();
    this.localStorageService.storeOnLocalStorage('Juan Velez');
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe((data) => {
      this.alumnos = data;
      console.log('respuesta->' + this.alumnos);
    });
  }

  agregarAlumno(): void {
    // this.alumnoService.addAlumno(new Alumno(4, 'xx', 'ITC'));
  }
}
