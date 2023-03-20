import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from './login.service';
import { Overlay } from '@angular/cdk/overlay'

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private  overlay:Overlay
  ) {}
  canActivate(): boolean {
    if (this.loginService.login()) {
      return true;
    } else {
      this.snackBar.open('You have to login', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
      this.router.navigate(['/login']);
    }
    return true;
  }
}
