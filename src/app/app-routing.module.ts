import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { UserComponent } from './user/user.component';
import { UsernewpostComponent } from './usernewpost/usernewpost.component';
import { UserupdatepostComponent } from './userupdatepost/userupdatepost.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'spost',component:SinglepostComponent},
  {path:'newpost',component:NewpostComponent},
  {path:'user',component:UserComponent},
  {path:'usernewpost',component:UsernewpostComponent},
  {path:'userupdatepost',component:UserupdatepostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
