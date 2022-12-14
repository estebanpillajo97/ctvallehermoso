import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salones } from '../interfaces/salones';
@Injectable({
  providedIn: 'root'
})
export class AforoService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/salones');
  }
  agregarSalon(salones:any){
    return this.httpClient.post(this.API_ENDPOINT + '/salones', salones);
  }
  inactivarSalones(sa_id:Salones){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/salones/' + sa_id + '/disable', { headers });
  }
  activarSalones(sa_id:Salones){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/salones/' + sa_id + '/enable', { headers });
  }
  obtenerSalones(sa_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/salones/' + sa_id, { headers: headers });
  }
  editarSalones(sa_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/salones/' + sa_id, data);
  }
  aforoTotal(){
    return this.httpClient.get(this.API_ENDPOINT + '/aforo');
  }
  inventarioAforo(sa_id:any,rc_fechaDesde:any,rc_fechaHasta:any){
    return this.httpClient.get(this.API_ENDPOINT + '/inventario_aforo/'+sa_id+'_'+rc_fechaDesde+'_'+rc_fechaHasta);
  }
}
