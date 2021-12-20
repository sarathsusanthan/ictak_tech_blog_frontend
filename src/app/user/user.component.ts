import { Component, OnInit } from '@angular/core';
import { UserpostService } from '../userpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  posts=[{
    title :'',
    author:'',
    post:'',
    category:'',
    image:'',}]

  constructor(private postservice:UserpostService, private router:Router) { }

  ngOnInit(): void {

    this.postservice.getposts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
  })
  }
  deletePost(post:any)
  {
    this.postservice.deletePost(post._id)
      .subscribe((data) => {
        this.posts = this.posts.filter(p => p !== post);
      })
  

  }

  editPost(post:any)
  {
    localStorage.setItem("editPostId", post._id.toString());
    this.router.navigate(['userupdatepost']);

  }
}
