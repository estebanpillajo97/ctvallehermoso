import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservaciones } from '../interfaces/reservaciones';
@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/reservaciones');
  }

  agregarReservaciones(reservaciones: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/reservaciones', reservaciones);
  }

  activarReservacion(res_id:Reservaciones){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/reservaciones/' + res_id + '/enable', { headers });
  }

  inactivarReservacion(res_id:Reservaciones){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/reservaciones/' + res_id + '/disable', { headers });
  }

  obtenerReservacion(res_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/reservaciones/' + res_id, { headers: headers });
  }

  editarReservacion(res_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/reservaciones/' + res_id, data);
  }

  modificarReservaciones(reservaciones: Reservaciones) {

    return this.httpClient.put(this.API_ENDPOINT + '/reservaciones/' + reservaciones.res_id, reservaciones);
  }

  getNumPersonas(){
    return this.httpClient.get(this.API_ENDPOINT + '/numpersonasres');
  }
  getTipoCedula(){
    return this.httpClient.get(this.API_ENDPOINT + '/tipo_cedula');
  }
}
