import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-edittrainerpost',
  templateUrl: './edittrainerpost.component.html',
  styleUrls: ['./edittrainerpost.component.css']
})
export class EdittrainerpostComponent implements OnInit {

  editpost={
    title:'',
    author:'',
    post:'',
    category:'',
    image:''
   }
  constructor(private trainerservice:TrainerService, private router:Router) { }

  ngOnInit(): void {
    
      let tId = localStorage.getItem("edittrainerId");
      this.trainerservice.getpost(tId).subscribe((data)=>{
        this.editpost=JSON.parse(JSON.stringify(data));
    })
    }
  

  edittrainerpost()
  {    
    this.trainerservice.edittrainerpost(this.editpost);   
    alert("Update Successfully");
    this.router.navigate(['trainer']);
  }

}
