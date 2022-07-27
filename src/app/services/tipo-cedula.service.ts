import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoCedulaService {
  API_ENDPOINT = 'https://apirestvh.herokuapp.com/api';

  constructor(private httpClient:HttpClient) { }

  get() {
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_ENDPOINT + '/tipo_cedula', { headers });
  }
}
