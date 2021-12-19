import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }
  getpost(id:any){
     return this.http.get("http://localhost:3000/trainerpost/"+id);
   }

  getposts(){
       return this.http.get("http://localhost:3000/trainerposts");
  }
  dpost(id:any){
    return this.http.get("http://localhost:3000/posts/"+id);
  }
  addPost(post:any){
       return this.http.post<any>("http://localhost:3000/trainerpost",post)
  }

  //edit trainer post

  edittrainerpost(editpost:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/edittrainerpost",editpost)
    .subscribe(data =>{console.log(data)})
  }


  deletePost(id:any){
       return this.http.delete("http://localhost:3000/trainerdelete/"+id)
  }

   }

