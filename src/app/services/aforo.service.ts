import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aforo } from '../interfaces/aforo';
@Injectable({
  providedIn: 'root'
})
export class AforoService {

  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient:HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/aforo');
  }
  obtenerAforo(af_id: any) {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/aforo/' + af_id, { headers: headers });
  }
  editarAforo(af_id: any, data: any) {
    return this.httpClient.post(this.API_ENDPOINT + '/aforo/' + af_id, data);
  }
}
