import { Component, OnInit } from '@angular/core';
import { PassComponentDataService } from '../../services/pass-component-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo2-alumno',
  templateUrl: './hijo2-alumno.component.html',
  styleUrls: ['./hijo2-alumno.component.scss']
})
export class Hijo2AlumnoComponent implements OnInit {

  subscripcion: Subscription;
  recepcion;

  constructor(private passComponentDataService: PassComponentDataService) {
    this.subscripcion = passComponentDataService.datoRev.subscribe(datoRev=>
      this.recepcion= datoRev
      );
   }

  ngOnInit(): void {
  }

  confirmacion(){
    this.passComponentDataService.confirmacionDeDatos("Recibido");
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }
}
