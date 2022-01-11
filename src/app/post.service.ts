import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  server_address: string = 'api';
  constructor(private http:HttpClient) { }
  getpost(){
       return this.http.get(`${this.server_address}/posts`);
  }
  dpost(id:any){
    return this.http.get(`${this.server_address}/posts/`+id);
  }
  addPost(post:any){
       return this.http.post<any>(`${this.server_address}/newpost`,post)
  }
  addtrainerPost(post:any){
    return this.http.post<any>(`${this.server_address}/trainerpost`,post)
  }
  deletePost(id:any){
       return this.http.delete(`${this.server_address}/delete/`+id)
  }
  addCategory(cat:any){
    console.log(cat)
    return this.http.post<any>(`${this.server_address}/categoty`,cat)
  }
  getCat(){
    return this.http.get(`${this.server_address}/cat`);
  }
  editPost(id:any){
      return this.http.get(`${this.server_address}/edit/`+id);
    
  }
  updatepost(post:any){
    return this.http.put(`${this.server_address}/updatepost`,post)
    .subscribe((data)=>{console.log(data)})
  }
  removeCat(id:any){
    return this.http.delete(`${this.server_address}/deletecat/`+id)
  }
  existingcat(cat:any){
    return this.http.post(`${this.server_address}/existing`,cat);
  }
  userComment(comment:any){
    return this.http.post(`${this.server_address}/comment`,comment)
  }
  getComments(){
    
    return this.http.get(`${this.server_address}/getcomment`)
  }
}
