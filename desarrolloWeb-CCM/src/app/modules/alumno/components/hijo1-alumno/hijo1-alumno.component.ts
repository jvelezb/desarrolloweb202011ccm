import { Component, OnInit, Input } from '@angular/core';
import { PassComponentDataService } from '../../services/pass-component-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo1-alumno',
  templateUrl: './hijo1-alumno.component.html',
  styleUrls: ['./hijo1-alumno.component.scss']
})
export class Hijo1AlumnoComponent implements OnInit {

  @Input() nombreHijo:string;
  @Input('lastName') apellido:string;

  subcripcion :Subscription

  hijo1:string;
  constructor(private passComponentDataService:PassComponentDataService) {
     this.subcripcion = passComponentDataService.datoEnv.subscribe(hijo1 =>{
       this.hijo1=hijo1
     });

   }

  ngOnInit(): void {
  }
  enviar(){

    this.passComponentDataService.recepcionDeDatos('342342');
  }
  ngOnDestroy(){
    this.subcripcion.unsubscribe();
  }

}
