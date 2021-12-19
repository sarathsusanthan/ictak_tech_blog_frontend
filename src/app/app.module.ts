import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './post.service';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { NewpostComponent } from './newpost/newpost.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerpostComponent } from './trainerpost/trainerpost.component';
import { EdittrainerpostComponent } from './edittrainerpost/edittrainerpost.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    SinglepostComponent,
    NewpostComponent,
    TrainerComponent,
    TrainerpostComponent,
    EdittrainerpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
