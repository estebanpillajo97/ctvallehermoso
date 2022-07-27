import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Arreglos } from '../interfaces/arreglos';
@Injectable({
  providedIn: 'root'
})
export class ArreglosService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/arreglos');
  }

  agregarArreglos(arreglos: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/arreglos', arreglos);
  }

  obtenerArreglo(arr_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/arreglos/' + arr_id, { headers: headers });
  }

  editarArreglos(arr_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/arreglos/' + arr_id, data);
  }

  inactivarArreglos(arr_id:Arreglos){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/arreglos/' + arr_id + '/disable', { headers });
  }

  activarArreglos(arr_id:Arreglos){
    const headers = new HttpHeaders();
    return this.httpClient.post(this.API_ENDPOINT + '/arreglos/' + arr_id + '/enable', { headers });
  }

  /*modificarArreglos(arreglo: Arreglos) {

    return this.httpClient.put(this.API_ENDPOINT + '/arreglos/' + arreglo.arr_id, arreglo);
  }*/
}
