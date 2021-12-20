import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 postdata:any;
  constructor(private post:PostService, private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.post.getpost()
    .subscribe((data)=>{
      this.postdata=JSON.parse(JSON.stringify(data));
      
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
    this.post.deletePost(post._id)
    .subscribe((data)=>{
      this.postdata=this.postdata.filter((p: any)=>p!=post)
    })
  }
}
