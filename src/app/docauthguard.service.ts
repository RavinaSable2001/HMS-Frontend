import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate {

  constructor(private docauthservice:DocauthService,private router:Router) { }

  canActivate()
  {

    if(this.docauthservice.isUserAuthLogin())
    {
      return true;
    }
    else
    {
      this.router.navigate(['doctor_login']);
      return false;
    }


  }
      
  
}
