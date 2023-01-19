import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PasswordValidator} from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm!:FormGroup
  public address!:FormGroup
  public submitted=false
  constructor(private form:FormBuilder,private http: HttpClient,private router:Router ) { }

  ngOnInit(): void {
    this.registerForm=this.form.group({
      firstName:['',Validators.required],
      lastName:['' ,Validators.required],
      email:['' ,[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      confirmPassword:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      postalCode:['',Validators.required]
      },{validators: this.misMatch('password','confirmPassword')});
    
  }

  misMatch(password: string, confirmPassword: string){
   return(formgroup: FormGroup)=>{
    const control=formgroup.controls[password];
    const controlname=formgroup.controls[confirmPassword];
    if(control.value !== controlname.value){
      controlname.setErrors({misMatch:true})
    }
    else{
      controlname.setErrors(null);
    }
   }
  }
 
  onSubmit(){
     this.submitted=true;
     if(this.registerForm.invalid){
     return
     }
    alert("You successfully registered")

    
  }

  registerDetails(){
    const postData=this.registerForm.value;
    this.http.post("http://localhost:3000/registerDetails",postData).subscribe(data=>{
      console.log(data);
      localStorage.setItem('emailId',(this.registerForm.value.email))
      localStorage.setItem('name',(this.registerForm.value.firstName))
      alert("SignUp is Successful")
      this.router.navigate(['login']);
      this.registerForm.reset();
   })
    }
  }


