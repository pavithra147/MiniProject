/* tslint:disable:no-unused-variable */


import { TestBed, async, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { LoginService } from './login.service';

describe('Service: Login', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService , MatSnackBar,Overlay]
    });
    
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
  
});
