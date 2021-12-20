import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserpostService } from '../userpost.service';

@Component({
  selector: 'app-userupdatepost',
  templateUrl: './userupdatepost.component.html',
  styleUrls: ['./userupdatepost.component.css']
})
export class UserupdatepostComponent implements OnInit {
  newpost={
    title:'',
    author:'',
    post:'',
    category:'',
    image:''
   }

  constructor(private postservice:UserpostService, private router:Router) { }

  ngOnInit(): void {
    let postId = localStorage.getItem("editPostId");
    this.postservice.getpost(postId).subscribe((data)=>{
      this.newpost=JSON.parse(JSON.stringify(data));
  })
  }

  editPost()
  {    
    this.postservice.editPost(this.newpost);   
    alert("post updated succesfully.");
    this.router.navigate(['user']);
  }


}
