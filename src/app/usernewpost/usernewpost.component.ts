import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserpostService } from '../userpost.service';


@Component({
  selector: 'app-usernewpost',
  templateUrl: './usernewpost.component.html',
  styleUrls: ['./usernewpost.component.css']
})
export class UsernewpostComponent implements OnInit {
  newpost={
    title:'',
    author:'',
    post:'',
    category:'',
    image:''
   }
  constructor(private postservice:UserpostService, private router:Router) { }

  ngOnInit(): void {
  }
  newbook(){

    this.postservice.addPost(this.newpost).
    subscribe((data:any)=>{
     
      alert("New Post Added");
      this.router.navigate(['/user'])
    })
  }
}
