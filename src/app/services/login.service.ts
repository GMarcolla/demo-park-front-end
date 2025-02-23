import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/LoginResponse';
import { Response } from '../interfaces/Response';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseApiUrl = environment.baseApiUrl;
  apiUrl: string = '';
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    console.log(username, password);
    return this.httpClient
      .post<LoginResponse>('http://localhost:8080/api/v1/auth', {
        username,
        password,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
        })
      );
  }
}
