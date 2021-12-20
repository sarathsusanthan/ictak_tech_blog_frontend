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
import { CategoryComponent } from './category/category.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EditpostComponent } from './editpost/editpost.component';
import { GroupComponent } from './group/group.component';
import { AuthService } from './auth.service';
import { SignupService } from './signup.service';
import { MypostComponent } from './mypost/mypost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    SinglepostComponent,
    NewpostComponent,
    
  
    CategoryComponent,
    SignupComponent,
    LoginComponent,
    EditpostComponent,
    GroupComponent,
    MypostComponent

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
  providers: [PostService,AuthService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
