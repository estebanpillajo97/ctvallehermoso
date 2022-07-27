import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menus } from '../interfaces/menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/menus');
  }
  
  getListado() {
    return this.httpClient.get(this.API_ENDPOINT + '/menus/listado');
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/menus', data, { headers: headers });
  }

  obtenerMenu(men_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/menus/' + men_id, { headers: headers });
  }

  editarMenus(men_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/menus/' + men_id, data);
  }

  activarMenus(men_id:Menus){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/menus/' + men_id + '/enable', { headers });
  }

  inactivarMenus(men_id:Menus){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/menus/' + men_id + '/disable', { headers });
  }

  /*modificarMenus(menu: Menus) {

    return this.httpClient.put(this.API_ENDPOINT + '/menus/' + menu.men_id, menu);
  }*/
}
