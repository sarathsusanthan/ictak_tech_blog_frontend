import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
 postdata:any;
  constructor(private post:PostService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    this.post.getpost()
    .subscribe((data)=>{
      this.postdata=JSON.parse(JSON.stringify(data));
     
      var post=localStorage.getItem("username");
      this.postdata=this.postdata.filter((p: any)=>p.user===post)
    })
  
  }
  displaypost(post:any){
    localStorage.setItem("singlePostId",post._id.toString());
    this.router.navigate(['spost'])
  }
  editPost(post:any){
    localStorage.setItem("editPostId",post._id.toString());
    this.router.navigate(['edit'])
  }
  deletePost(post:any){
    alert("Post deleted successfully")
    this.post.deletePost(post._id)
    .subscribe((data)=>{
      this.postdata=this.postdata.filter((p: any)=>p!=post)
    })
  }
}
