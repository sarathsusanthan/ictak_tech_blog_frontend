import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
 post:any;
  constructor(private postservice:PostService, private router:Router) { }

  ngOnInit(): void {
    let postId=localStorage.getItem("singlePostId");
    this.postservice.dpost(postId)
    .subscribe((data)=>{
      this.post=JSON.parse(JSON.stringify(data))
    })

  }
  deletePost(post:any){
    this.postservice.deletePost(post._id)
    .subscribe((data)=>{
      console.log(data)
    })
    this.router.navigate(['']);
  }
}
