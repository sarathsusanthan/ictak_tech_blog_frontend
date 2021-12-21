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
      console.log(data)
    if(data.mesg=="notfound"){
      alert("User not found");
      this.router.navigate(['login']);
    }
    else{
      if(data.role=="user"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('usertoken',data.mesg)
        this.router.navigate(['mypost']);
      }
      if(data.role=="trainer"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('trainertoken',data.mesg)
        this.router.navigate(['mypost']);
      }
      if(data.role=="admin"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('token',data.mesg)
        this.router.navigate(['admin']);
      }
    }
   
    })
  }
}