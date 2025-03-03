import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estacionamento } from '../interfaces/Estacionamento';
import { RetornoPaginado } from '../interfaces/RetornoPaginado';

@Injectable({
  providedIn: 'root',
})
export class EstacionamentoService {
  baseApi = environment.baseApiUrl + '/estacionamentos';

  constructor(private httpClient: HttpClient) {}

  getEstacionamentos(): Observable<RetornoPaginado<Estacionamento>> {
    const token = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<RetornoPaginado<Estacionamento>>(this.baseApi, {
      headers,
    });
  }
}
