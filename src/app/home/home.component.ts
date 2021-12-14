import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PostService } from '../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postdata:any;
  constructor(private post:PostService, private router:Router) { }

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
 check(){
   alert("Thanks for your feedback");
 }
 msg(){
   alert("Thanks for subscribing");
 }
}
