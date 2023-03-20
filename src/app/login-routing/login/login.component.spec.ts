import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay'
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule],
      providers:[HttpClient,HttpHandler , MatSnackBar,FormBuilder,Overlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

 it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('set value for email validation',()=>{
    let email=component.loginForm.controls['email'];
    email.setValue('pavithra123@gmailcom');
    expect(email.valid).toBeTruthy();
    expect(email.errors).toBeNull();
  });
  it('set value for password validation',()=>{
    let password=component.loginForm.controls['password'];
    password.setValue('Pavi#4567');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeNull();
  });
  it('set value for password validation',()=>{
    let password=component.loginForm.controls['password'];
    password.setValue('pavi@89');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeNull();
  });
 
  })
  
