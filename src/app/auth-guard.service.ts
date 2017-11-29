import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkAuth(url);
  }

  checkAuth(url: string): boolean {
    if (!this.as.isAuthenticated()) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }

}
