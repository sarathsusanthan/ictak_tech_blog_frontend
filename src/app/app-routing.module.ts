import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { EditpostComponent } from './editpost/editpost.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewpostComponent } from './newpost/newpost.component';
import { SignupComponent } from './signup/signup.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

import { UsernewpostComponent } from './usernewpost/usernewpost.component';


import { MypostComponent } from './mypost/mypost.component';
import { PendingapprovalComponent } from './pendingapproval/pendingapproval.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'spost',component:SinglepostComponent},
  {path:'newpost',component:NewpostComponent},
  {path:'usernewpost',component:UsernewpostComponent},
  {path:'approval',component:PendingapprovalComponent},
  {path:'mypost',component:MypostComponent},
  {path:'category',component:CategoryComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'edit',component:EditpostComponent},
  {path:'categorywise',component:GroupComponent},
  { path:'contactus',component:ContactFormComponent },
  {path:'aboutus',component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
