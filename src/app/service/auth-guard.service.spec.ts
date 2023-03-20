/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuardService } from './auth-guard.service';
import { Overlay } from '@angular/cdk/overlay'
import { LoginService } from './login.service';
import { Router } from '@angular/router';
describe('Service: AuthGuard', () => {
  let authGuardService:AuthGuardService;
  let loginService:LoginService;
  let router={navigate: jasmine.createSpy('navigate')};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService , MatSnackBar,Overlay,LoginService,{provide:Router,useValue: router}]
    });
    
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
 it('condition want to be get true',()=>{
 let injector=getTestBed();
  authGuardService=injector.get(AuthGuardService)
  loginService=injector.get(LoginService);
  spyOn(loginService,'login').and.returnValue(true);
  expect(authGuardService.canActivate()).toBe(true);
 });
 it('',()=>{
  let injector=getTestBed();
  authGuardService=injector.get(AuthGuardService)
  loginService=injector.get(LoginService);
  expect(authGuardService.canActivate()).toEqual(false);
  expect(router.navigate).toHaveBeenCalledWith(['/login']);
 })
})
