import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 remove={
  category:''
 }
  constructor( private post:PostService, private router:Router) { }
  cat:any;
  ngOnInit(): void {
    this.post.getCat().subscribe((data)=>{
      this.cat=JSON.parse(JSON.stringify(data))
    })
  }
  add(){
   
    this.post.addCategory(this.category).subscribe((data)=>{
      alert("category added successfully");
      this.category.category='';
      this.router.navigate(['admin'])
    })
  }
  removeCat(i:any){
    alert("category deleted successfully");
    this.post.removeCat(i._id).subscribe((data)=>{
      this.cat=this.cat.filter((p: any)=>p!=i)
      this.router.navigate(['admin'])
    })
  }
}
