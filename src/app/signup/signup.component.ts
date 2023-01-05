import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordValidator} from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm!:FormGroup
  public address!:FormGroup
  
  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.form.group({
      firstName:['',Validators.required],
      lastName:['' ,Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      postalCode:['',Validators.required]
      },{Validators: PasswordValidator});
    
  }

}
