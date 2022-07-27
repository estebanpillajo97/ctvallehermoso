import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../interfaces/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/roles');
  }
  getSinRoles(){
    return this.httpClient.get(this.API_ENDPOINT + '/usuarios_sin_rol');
  }
  agregarRoles(data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/roles', data);
  }

  obtenerRol(rol_id: any) {
    return this.httpClient.get(this.API_ENDPOINT + '/roles/' + rol_id);
  }

  editarRoles(rol_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/roles/' + rol_id, data);
  }
}
