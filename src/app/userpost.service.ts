import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserpostService {

  constructor(private http:HttpClient) { }
  getposts(){
    return this.http.get("http://localhost:3000/userposts");
}

addPost(post:any){
    return this.http.post<any>("http://localhost:3000/usernewpost",post);
}
deletePost(id:any){
  
    return this.http.delete("http://localhost:3000/deleteUserPost/"+id)
}


}
