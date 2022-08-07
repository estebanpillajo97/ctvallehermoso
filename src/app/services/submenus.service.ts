import { Injectable } from '@angular/core';
import { Submenus } from '../interfaces/submenus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubmenusService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/submenus');
  }
  getListadoCompleto(){
    return this.httpClient.get(this.API_ENDPOINT + '/submenus/listado');
  }
  getSelectSubmenu(men_id:any) {
    return this.httpClient.get(this.API_ENDPOINT + '/submenus_select/'+men_id);
  }

  agregarSubmenu(submenus: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/submenus', submenus);
  }

  obtenerSubmenu(sm_id: any) {
    return this.httpClient.get(this.API_ENDPOINT + '/submenus/' + sm_id);
  }

  modificarSubmenu(sm_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/submenus/' + sm_id, data);
  }

  inactivarSubmenus(sm_id:Submenus){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/submenus/' + sm_id + '/disable', { headers });
  }

  activarSubmenus(sm_id:Submenus){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/submenus/' + sm_id + '/enable', { headers });
  }
}
