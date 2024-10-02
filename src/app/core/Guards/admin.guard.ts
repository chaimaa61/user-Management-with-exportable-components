import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService : AuthService , private router: Router){}

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
    if (this.authService.isAdmin()) {
      return true; // User is an admin, allow access
    } else {
      this.router.navigate(['/not-authorized']); // Redirect to a not authorized page
      return false; // User is not an admin, deny access
    }
  }
}
