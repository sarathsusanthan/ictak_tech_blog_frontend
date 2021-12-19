import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

pageTitle:string ='Blogs'
imageWidth: number = 50;
imageMargin: number = 2;
showImage: boolean = false;
trainerdata:any;

posts=[{
  title :'',
  author:'',
  post:'',
  category:'',
  image:'',
}]

  constructor(private trainerservice:TrainerService,private router:Router) { }

  ngOnInit(): void {
    
    this.trainerservice.getposts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
  
  })
  }

  edittrainerpost(post:any)
  {
     localStorage.setItem("edittrainerId", post._id.toString());
    this.router.navigate(['edittrainerpost']);

  }

  deletePost(trainerservice:any){
    this.trainerservice.deletePost(trainerservice._id)
    .subscribe((data)=>{
      this.trainerdata=this.trainerdata.filter((p: any)=>p!=trainerservice)
    })
  }

  }
