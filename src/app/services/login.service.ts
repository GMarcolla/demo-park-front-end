import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseApiUrl = environment.baseApiUrl;
  apiUrl: string = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Response<Login>> {
    this.apiUrl = this.baseApiUrl + '/login';
    return this.http.post<Response<Login>>(this.apiUrl, { username, password });
  }
}
