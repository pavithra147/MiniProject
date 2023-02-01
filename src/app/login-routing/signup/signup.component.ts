import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm!:FormGroup
  public address!:FormGroup
  public submitted=false
  constructor(private form:FormBuilder,private http: HttpClient,private router:Router,private SnackBar: MatSnackBar ) { }

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
    this.SnackBar.open("You successfully registered",'',{duration:4000,verticalPosition:'top',panelClass:['blue-snackbar']})

    
  }

  registerDetails(){
    const postData=this.registerForm.value;
    this.http.post("http://localhost:3000/register",postData).subscribe(data=>{
      console.log(data);
      
      this.SnackBar.open("SignUp is Successful",'',{duration:4000,verticalPosition:'top',panelClass:['blue-snackbar']})
      this.router.navigate(['login']);
      this.registerForm.reset();
   })
    }
  }


