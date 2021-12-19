import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
   
  newpost={
    title:'',
    author:'',
    post:'',
    
    image:''
   }
  constructor(private post:PostService, private router:Router) { }

  ngOnInit(): void {
    let postId=localStorage.getItem("editPostId");
    this.post.editPost(postId)
    .subscribe((data)=>{
      this.newpost=JSON.parse(JSON.stringify(data))
      
    })
  }
  newbook(){
    console.log(this.newpost)
    this.post.updatepost(this.newpost);
    alert("Updated Successfully");
    this.router.navigate(['admin'])
  }
}
