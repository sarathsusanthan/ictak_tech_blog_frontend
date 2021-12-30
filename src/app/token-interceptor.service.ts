import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  
  intercept(req:any,nxt:any)
  {
    let authService = this.injector.get(AuthService)
    //  if(authService.loggedIn()){
    
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  // }

  // if(authService.trainerloggedIn()){
    
  //   let tokenizedReq = req.clone(
  //     {
  //       setHeaders:{
  //         Authorization:`Bearer ${authService. getTrainertoken()}`
  //       }
  //     }
  //   )
  //   return nxt.handle(tokenizedReq)
  // }
  

}



}