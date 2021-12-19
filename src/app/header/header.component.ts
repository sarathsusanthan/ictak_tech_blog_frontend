import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 cat:any;
  constructor( public auth:AuthService ,private router:Router,private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.getCat().subscribe((data)=>{
      this.cat=JSON.parse(JSON.stringify(data))
     
    })
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['']);
  }
  category(cat:any){
    localStorage.setItem("category",cat);
    this.router.navigate(['categorywise'])
  }
}
