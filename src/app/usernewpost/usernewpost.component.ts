import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserpostService } from '../userpost.service';


@Component({
  selector: 'app-usernewpost',
  templateUrl: './usernewpost.component.html',
  styleUrls: ['./usernewpost.component.css']
})
export class UsernewpostComponent implements OnInit {
  newpost={
    user:localStorage.getItem("username"),
    title:'',
    author:localStorage.getItem("nam"),
    post:'',
    category:'',
    image:''
   }
   cat:any;
  constructor(private userservice:UserpostService, private router:Router, private post:PostService) { }

  ngOnInit(): void {
    this.post.getCat().subscribe((data)=>{
      this.cat=JSON.parse(JSON.stringify(data))
    })
  }
  newbook(){

    this.userservice.addPost(this.newpost).
    subscribe((data:any)=>{
     
      alert("Post send for approval from admin");
      this.router.navigate(['mypost'])
    })
  }
}
