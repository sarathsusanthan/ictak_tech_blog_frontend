import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-adminmessage',
  templateUrl: './adminmessage.component.html',
  styleUrls: ['./adminmessage.component.css']
})
export class AdminmessageComponent implements OnInit {
 comment:any;
  constructor(public post:PostService) { }

  ngOnInit(): void {
   
    this.post.getComments()
    .subscribe((data)=>{
      this.comment=JSON.parse(JSON.stringify(data))
      var name=localStorage.getItem("username");
      this.comment=this.comment.filter((p: any)=>p.user===name)
    })
  }

}
