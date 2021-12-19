import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainerpost',
  templateUrl: './trainerpost.component.html',
  styleUrls: ['./trainerpost.component.css']
})
export class TrainerpostComponent implements OnInit {

    newpost={
     title:'',
     author:'',
     post:'',
     category:'',
     image:''
    }

    constructor(private postservice:TrainerService, private router:Router) { }

    ngOnInit(): void {
    }
    newbook(){
  
      this.postservice.addPost(this.newpost).
      subscribe((data:any)=>{
       
        alert("New Post Added");
        this.router.navigate(['trainer'])
      })
    }

}
