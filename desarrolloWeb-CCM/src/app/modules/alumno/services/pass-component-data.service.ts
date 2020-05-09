import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassComponentDataService {
  private dataEnviados = new Subject<string>();
  private dataRecibidos = new Subject<string>();

  datoEnv = this.dataEnviados.asObservable();
  datoRev = this.dataRecibidos.asObservable();

  constructor() { }

  recepcionDeDatos(dato: string){
    this.dataRecibidos.next(dato);
  }

  confirmacionDeDatos(dato:string){
    this.dataEnviados.next(dato);
  }
}
