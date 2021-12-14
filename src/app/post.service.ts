import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getpost(){
       return this.http.get("http://localhost:3000/posts");
  }
  dpost(id:any){
    return this.http.get("http://localhost:3000/posts/"+id);
  }
  addPost(post:any){
       return this.http.post<any>("http://localhost:3000/newpost",post)
  }
  deletePost(id:any){
       return this.http.delete("http://localhost:3000/delete/"+id)
  }
}
