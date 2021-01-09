import { Injectable } from '@angular/core';
import {Formulario} from '../modelo/formulario';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  myApurl = 'http://localhost:8000/api/login';
  miUrl = 'http://localhost:8000/api/create';
  constructor(private http: HttpClient) { }
  // guardarFormulario(formulario:Formulario):Observable<Formulario>{
  //   return this.http.post<Formulario>(this.myApurl + this.myApiUrl,formulario);
  // }
  iniciarSesion(formulario:Formulario):Observable<Formulario>{
    return this.http.post<Formulario>(this.myApurl,formulario);
  }
  Registro(formulario:Formulario):Observable<Formulario>{
    return this.http.post<Formulario>(this.miUrl,formulario);
  }
}
