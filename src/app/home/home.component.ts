import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postdata:any;
  constructor(private post:PostService, private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.post.getpost()
    .subscribe((data)=>{
      this.postdata=JSON.parse(JSON.stringify(data));
      
    })
   Aos.init()
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots:true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
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
 check(){
   alert("Thanks for your feedback");
   this.feedback.first="",
   this.feedback.last="",
   this.feedback.country="",
   this.feedback.sub=""
 }
 msg(){
   alert("Thanks for subscribing");
 }
 feedback={
   first:'',
   last:'',
   country:'',
   sub:''
 }
}
