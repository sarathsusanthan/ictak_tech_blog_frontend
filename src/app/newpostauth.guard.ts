
import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewpostauthGuard implements CanActivate {
  constructor(private _auth:AuthService,private router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth. loggedIn() || this._auth. trainerloggedIn()  )
    {
      console.log('true')
      return true

    }
    else{
      this.router.navigate(['/login']);
      return false

    }
  }
  
}