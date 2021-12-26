import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  
  constructor( private router:Router ,private fb:FormBuilder,private contactservice:ContactService ) { }

  User={
    name:'',
    email:'',
    message:''
  }
  ngOnInit(): void {}
  
  send(){
    
      this.contactservice.contactUser(this.User)
       
        alert("Message is send successfully");
        this.router.navigate(['home'])
      
    }
    
  }



 


