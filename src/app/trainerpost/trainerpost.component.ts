import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-trainerpost',
  templateUrl: './trainerpost.component.html',
  styleUrls: ['./trainerpost.component.css']
})
export class TrainerpostComponent implements OnInit {

  newpost={
    user:localStorage.getItem("username"),
    title:'',
    author:'',
    post:'',
    category:'',
    image:''
   }
  
   cat:any;
    constructor(private postservice:PostService, private router:Router) { }
  
    ngOnInit(): void {
      this.postservice.getCat().subscribe((data)=>{
        this.cat=JSON.parse(JSON.stringify(data))
      })
    }
    
    newbook(){
      this.postservice.addtrainerPost(this.newpost).
      subscribe((data:any)=>{
       
        alert("New Post Added");
        this.router.navigate([''])
      })
    }

}
