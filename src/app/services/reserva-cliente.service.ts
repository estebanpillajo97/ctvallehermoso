import { Injectable } from '@angular/core';

import { ReservaClientes } from '../interfaces/reserva_cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservaClienteService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/reservas_cliente');
  }

  agregarReservaCliente(reservacliente: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/reservas_cliente', reservacliente);
  }

  obtenerReservaCliente(rc_id: any) {
    return this.httpClient.get(this.API_ENDPOINT + '/reservas_cliente/' + rc_id);
  }

  editarReservaCliente(rc_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/reservas_cliente/' + rc_id, data);
  }

  activarReservaCliente(rc_id: ReservaClientes) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/reservas_cliente/' + rc_id + '/enable', { headers });
  }

  inactivarReservaCliente(rc_id: ReservaClientes) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/reservas_cliente/' + rc_id + '/disable', { headers });
  }

  filtrarFechas(rc_fechaDesde: any, rc_fechaHasta: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/reservas_cliente_filtrado/' + rc_fechaDesde + '_' + rc_fechaHasta);
  }

  reservasActivas() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/reservas_cliente_activos', { headers });
  }
  reservasInactivas() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/reservas_cliente_inactivos', { headers });
  }
}
