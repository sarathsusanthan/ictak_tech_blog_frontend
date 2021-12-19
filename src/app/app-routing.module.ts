import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerpostComponent } from './trainerpost/trainerpost.component';
import { EdittrainerpostComponent } from './edittrainerpost/edittrainerpost.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'spost',component:SinglepostComponent},
  {path:'newpost',component:NewpostComponent},
  {path:'trainer',component:TrainerComponent},
  {path:'trainerpost',component:TrainerpostComponent},
  {path:'edittrainerpost',component:EdittrainerpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
