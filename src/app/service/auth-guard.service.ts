import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router, private loginService: LoginService ) {
 
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean| UrlTree {

      if (!this.loginService.getLogInDetails()) {
          alert('Please login to view the pages');
          
          this.router.navigate(["login"],{ queryParams: {} });
          return false;

          //var urlTree = this.router.createUrlTree(['login']);
          //return urlTree;
      } 
      return true;
  }
}
