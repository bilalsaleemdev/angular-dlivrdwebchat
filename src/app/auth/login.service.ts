import { SuccessResponse } from '../models/succes-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://127.0.0.1:8000/api';  // URL to web api

  constructor(
    private http : HttpClient,
  ) { 
  }

  login(login : Login): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(this.apiUrl+'/login', login)
      .pipe();
  }

  logout(): Observable<SuccessResponse>{
    return this.http.post<SuccessResponse>(this.apiUrl + '/logout',{})
      .pipe();
  }
}
