import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 comment={
  
  user:localStorage.getItem("userIdtocomment"),
  title:localStorage.getItem("titleTocomment"),
  message:''
 }
  constructor(public post:PostService, public router:Router) { }

  ngOnInit(): void {
  }
  userComment(){
    console.log(this.comment)
    this.post.userComment(this.comment)
    .subscribe((data)=>{
      alert("message send to user");
      this.router.navigate(['admin'])

    })
  }
}
