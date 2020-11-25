import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  hacerPeticion(peticion: string){
    return this.http.get(`https://reqres.in/api/users${peticion}`);
  }

  getAgents(){
    return this.hacerPeticion('?page=1').pipe(map(datos => {
      return datos['data'];
    }));
  }
}
