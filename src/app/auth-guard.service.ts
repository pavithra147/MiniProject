import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LoginService } from "./login/login.service";
@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService,private router:Router,private loginService:LoginService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.loginService.login()){
        return true;
    }
    else{
        alert("You have to login")
        this.router.navigate(['/login']);

    }
    return true
}
  
}
