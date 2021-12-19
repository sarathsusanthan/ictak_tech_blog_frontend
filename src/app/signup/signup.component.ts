import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private signupservice:SignupService, private router:Router) { }
  registerForm= this.fb.group(
    {
      name:['',Validators.required],
      id:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$')]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}')]]
      
    }
  )
  User={
    name:'',
    id:'',
    email:'',
    password:''
  }
  author=['user','trainer'];
    
  

  ngOnInit(): void {
  }
  signup(){
   
    this.signupservice.signupUser(this.User)
    .subscribe((data)=>{
      
      if(data.mesg){
        alert('successfully created an account login to continue.');
        this.router.navigate(['login'])
      }else{
        alert("User Credentials already exist try again")
      }
    });
   
  }

}
