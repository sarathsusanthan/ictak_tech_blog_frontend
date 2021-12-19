import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User={
    uname:'',
    password:''
  }
  constructor( private _auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._auth.loginUser(this.User)
    .subscribe((data)=>{
    if(data.mesg=="notfound"){
      alert("User not found");
      this.router.navigate(['login']);
    }
    else{
      if(data.mesg=="user"){
        alert("User");
        this.router.navigate(['']);
      }
      if(data.mesg=="trainer"){
        alert("trainer");
        this.router.navigate(['']);
      }
      else{
        localStorage.setItem('token',data.mesg)
        this.router.navigate(['admin']);
      }
    }
   
    })
  }
}