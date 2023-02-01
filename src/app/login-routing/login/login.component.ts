import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
public data:any;


constructor(private form:FormBuilder, private http :HttpClient,private router: Router,private auth:AuthService
    ,private snackBar:MatSnackBar) { }
    ngOnInit(): void {
  this.loginForm=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
     })
   }
   submit(){
        this.http.get<any>("http://localhost:3000/register")
        .subscribe({
         next:(res)=> {console.log("response",res);
          const user= res.find((a:any)=>{
          return ((a.email === this.loginForm.value.email)&& (a.password === this.loginForm.value.password));
          })
          if(user){
             this.snackBar.open("Login Success",'',{duration:3000,
           verticalPosition:'top',panelClass: ['blue-snackbar']});
           this.router.navigate(['/home']);
      localStorage.setItem("emailId",this.loginForm.value.email);
     // sessionStorage.setItem('email',(this.loginForm.value.email))
          
          }else{
            this.snackBar.open("User Not Found!!!",'',{duration:3000,
              verticalPosition:'top',panelClass:['red-snackbar']});
          }}
        ,error:(e)=> this.snackBar.open("Something went wrong",'',{duration:3000,
          verticalPosition:'top',panelClass: ['blue-snackbar']})})

          const postData=this.loginForm.value;
          this.http.post("http://localhost:3000/user",postData).subscribe(data=>{
      console.log(data);})
      // sessionStorage.setItem('email',(this.loginForm.value.email))
 }
 login(){
    this.auth.login();
  
   } 
   
 }






