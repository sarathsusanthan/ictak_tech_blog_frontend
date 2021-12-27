import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  server_address:string='api';
  
  constructor(private http:HttpClient) { }
  contactUser(user:any){
    console.log(user)
    return this.http.post<any>("http://localhost:3000/contactus",user)
    .subscribe(data=>{console.log(data)})
    
  }
}
