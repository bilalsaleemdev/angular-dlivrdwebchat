import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(token){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    if(localStorage.getItem('token'))
      return true;
    return false;
  }

  deleteToken(){
    localStorage.removeItem('token');
  }
}
