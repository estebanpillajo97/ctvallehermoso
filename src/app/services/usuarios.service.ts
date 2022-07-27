import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/usuarios', { headers });
  }
  getRoles() {
    return this.httpClient.get(this.API_ENDPOINT + '/roles');
  }
  agregarUsuario(usuario: Usuarios) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/usuarios', usuario, { headers });
  }

  obtenerUsuario(usu_id: any) {
    return this.httpClient.get(this.API_ENDPOINT + '/usuarios/' + usu_id);
  }

  modificarUsuarios(usu_id: any, data: any) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/usuarios/' + usu_id, data, { headers });
  }

  activarUsuario(usu_id:Usuarios){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/usuarios/' + usu_id + '/enable', { headers });
  }

  inactivarUsuario(usu_id:Usuarios){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/usuarios/' + usu_id + '/disable', { headers });
  }

  verificarLogin(credenciales:Usuarios){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT+'/usuarios/verify',credenciales, { headers });
  }

  setUser(usuario:any) {
    // tslint:disable-next-line:prefer-const
    let user = JSON.stringify(usuario);
    sessionStorage.setItem('currentUser', user);
  }
  setToken(id:any) {
    sessionStorage.setItem('accessToken', id);
  }

  setRol(rol:any) {
    sessionStorage.setItem('accessRol', rol);
  }

  logOut(){
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('accessRol');
  }

  getCurrentUser() {
    let user_string:any = sessionStorage.getItem('currentUser');
    if (!(user_string===null || user_string===undefined)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  getRol() {
    let rol_string:any = sessionStorage.getItem('accessRol');
    if (!(rol_string===null || rol_string===undefined)) {
      let rol = JSON.parse(rol_string);
      return rol;
    } else {
      return null;
    }
  }
}
