import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[HttpClient,HttpHandler , MatSnackBar,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

 
  beforeEach(()=>{
   fixture = TestBed.createComponent(LoginComponent);
   component =fixture.componentInstance;
   formBuilder = TestBed.inject(FormBuilder);
   component.loginForm =formBuilder.group({
    recipientTypes: new FormControl(
      {
        value: ["mock"],
        disabled: true
      },
      Validators.required
    )
  });

  fixture.detectChanges();

   })
   it("should create", () => {
    expect(component).toBeTruthy();
  });
    
  })
  
