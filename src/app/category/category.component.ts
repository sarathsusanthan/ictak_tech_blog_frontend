import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 category={
   category:''
 }
  constructor( private post:PostService) { }

  ngOnInit(): void {
  }
  add(){
   
    this.post.addCategory(this.category).subscribe((data)=>{
      alert("category added successfully");
      this.category.category='';
    })
  }
}
