import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/home'])
      return false

    }
  }
   
  }
  

