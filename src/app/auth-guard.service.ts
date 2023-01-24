import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LoginService } from "./login/login.service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService,private router:Router,private loginService:LoginService,
        private snackBar:MatSnackBar){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.loginService.login()){
        return true;
    }
    else{
        this.snackBar.open("You have to login",'',{duration:4000,verticalPosition:'top',panelClass:['red-snackbar']})
        this.router.navigate(['/login']);

    }
    return true
   }
  
}
