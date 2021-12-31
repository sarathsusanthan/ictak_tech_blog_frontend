import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
    
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