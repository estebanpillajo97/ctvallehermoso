import { Injectable } from '@angular/core';

import { EventoClientes } from '../interfaces/evento_cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventoClienteService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient:HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/eventos_cliente');
  }
  agregarEventoCliente(eventocliente: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/eventos_cliente', eventocliente);
  }
  obtenerEventoCliente(ec_id: any) {
    return this.httpClient.get(this.API_ENDPOINT + '/eventos_cliente/' + ec_id);
  }
  editarEventoCliente(ec_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/eventos_cliente/' + ec_id, data);
  }
  activarEventoCliente(ec_id:EventoClientes){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/eventos_cliente/' + ec_id + '/enable', { headers });
  }
  inactivarEventoCliente(ec_id:EventoClientes){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/eventos_cliente/' + ec_id + '/disable', { headers });
  }
  filtrarFechas(ec_fechaDesde:any, ec_fechaHasta:any){
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT+ '/eventos_cliente_filtrado/'+ ec_fechaDesde+'_'+ec_fechaHasta);
  }
  eventosActivos() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/eventos_cliente_activos', { headers });
  }
  eventosInactivos() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/eventos_cliente_inactivos', { headers });
  }
  inventarioSubmenuAdulto(sm_id:any,ec_fechaDesde:any, ec_fechaHasta:any){
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT+ '/submenu_inventario_adultos/'+sm_id+'_'+ec_fechaDesde+'_'+ec_fechaHasta);
  }
  inventarioSubmenuNinio(sm_id:any,ec_fechaDesde:any, ec_fechaHasta:any){
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT+ '/submenu_inventario_ninios/'+sm_id+'_'+ec_fechaDesde+'_'+ec_fechaHasta);
  }
  inventarioSubmenuTabla(sm_id:any,ec_fechaDesde:any, ec_fechaHasta:any){
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT+ '/submenu_inventario_tabla/'+sm_id+'_'+ec_fechaDesde+'_'+ec_fechaHasta);
  }
}
