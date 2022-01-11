import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserpostService {
  server_address: string = 'api';
  constructor(private http:HttpClient) { }
  getposts(){
    return this.http.get(`${this.server_address}/userposts`);
}

addPost(post:any){
    return this.http.post<any>(`${this.server_address}/usernewpost`,post);
}
deletePost(id:any){
  
    return this.http.delete(`${this.server_address}/deleteUserPost/`+id)
}


}
