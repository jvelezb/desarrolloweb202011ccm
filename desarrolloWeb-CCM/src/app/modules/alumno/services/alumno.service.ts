import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { map, retry, catchError, tap } from 'rxjs/operators';
import { AlumnosRoutingModule } from '../alumnos-routing.module';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  alumnos;

  endpoint = 'http://localhost:8081/api/alumnos';

  constructor(private http: HttpClient) {}

  private extraData(res: Response) {
    let body = res;

    return body || {};
  }

  getAlumnos(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
