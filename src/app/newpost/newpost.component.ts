import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
 newpost={
  title:'',
  author:'',
  post:'',
  category:'',
  image:''
 }
  constructor(private postservice:PostService, private router:Router) { }

  ngOnInit(): void {
  }
  newbook(){

    this.postservice.addPost(this.newpost).
    subscribe((data:any)=>{
     
      alert("New Post Added");
      this.router.navigate([''])
    })
  }
}
