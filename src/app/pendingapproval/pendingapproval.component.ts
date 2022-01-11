import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';
import { UserpostService } from '../userpost.service';

@Component({
  selector: 'app-pendingapproval',
  templateUrl: './pendingapproval.component.html',
  styleUrls: ['./pendingapproval.component.css']
})
export class PendingapprovalComponent implements OnInit {
  postdata:any;
  constructor(private userservice:UserpostService, public auth:AuthService, private post:PostService, private router:Router) { }

  ngOnInit(): void {
    this.userservice.getposts()
    .subscribe((data)=>{
      this.postdata=JSON.parse(JSON.stringify(data));
    })
  }
  approve(post:any){
    localStorage.setItem("userIdtocomment",post.user);
    localStorage.setItem("titleTocomment",post.title)
    this.userservice.deletePost(post._id)
    .subscribe()
    this.post.addPost(post).
    subscribe((data:any)=>{
     alert("Post approved");

      this.router.navigate(['comment'])
    })
  }
  reject(post:any){
    localStorage.setItem("userIdtocomment",post.user);
    localStorage.setItem("titleTocomment",post.title)
   alert("post rejected");
    this.userservice.deletePost(post._id)
    .subscribe((data)=>{
    this.router.navigate(['comment'])
    })
  }
}
