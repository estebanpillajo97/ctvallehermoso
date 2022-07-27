import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Eventos } from '../interfaces/eventos';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/eventos');
  }

  agregarEventos(evento: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/eventos', evento);
  }

  activarEvento(eve_id:Eventos){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/eventos/' + eve_id + '/enable', { headers });
  }

  inactivarEvento(eve_id:Eventos){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/eventos/' + eve_id + '/disable', { headers });
  }

  obtenerEvento(eve_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/' + eve_id, { headers: headers });
  }

  editarEventos(eve_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/eventos/' + eve_id, data);
  }
  modificarEventos(evento: Eventos) {

    return this.httpClient.put(this.API_ENDPOINT + '/eventos/' + evento.eve_id, evento);
  }

  getNumAdultos(){
    return this.httpClient.get(this.API_ENDPOINT + '/numAdultos');
  }
  getNumNinios(){
    return this.httpClient.get(this.API_ENDPOINT + '/numNinios');
  }
  getTipoCedula(){
    return this.httpClient.get(this.API_ENDPOINT + '/tipo_cedula');
  }
}
