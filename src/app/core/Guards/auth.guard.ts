import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private  authService : AuthService , private router :Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authService.isUser()){
      return true;
    }
    else{
      this.router.navigate(['/not-authorized']); // Redirect to a not authorized page
      return false;
    }
  }
}
