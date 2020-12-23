import { Injectable } from '@angular/core';
import {Formulario} from '../modelo/formulario';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  myApurl = 'http://apibitwanv1.tk/public';
  myApiUrl = '/users/create';
  constructor(private http: HttpClient) { }
  guardarFormulario(formulario:Formulario):Observable<Formulario>{
    return this.http.post<Formulario>(this.myApurl + this.myApiUrl,formulario);
  }
}
