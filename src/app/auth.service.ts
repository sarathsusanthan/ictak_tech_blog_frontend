import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'api';

  constructor( private http:HttpClient) { }
  loginUser(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
    
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  trainerloggedIn(){
    return !!localStorage.getItem('trainertoken');
  }
  userloggedIn(){
    return !!localStorage.getItem('usertoken');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getUsertoken(){
    return localStorage.getItem('usertoken');
  }
  getTrainertoken(){
    
    return localStorage.getItem('trainertoken');
  }
}