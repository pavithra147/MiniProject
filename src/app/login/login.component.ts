import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
        this.http.get<any>("http://localhost:3000/registerDetails")
        .subscribe(res=>{
          console.log("response",res);
          const user=  ((res.email === this.loginForm.value.email)&& (res.password === this.loginForm.value.password));
          
         
          if(user){
             this.snackBar.open("Login Success",'',{duration:3000,
           verticalPosition:'top',panelClass: ['blue-snackbar']});
           this.router.navigate(['/home']);
      localStorage.setItem("emailId",this.loginForm.value.email);
          
          }else{
            this.snackBar.open("User Not Found!!!",'',{duration:3000,
              verticalPosition:'top',panelClass:['red-snackbar']});
          }
        },(error:any)=>{ this.snackBar.open("Something went wrong",'',{duration:3000,
          verticalPosition:'top',panelClass: ['blue-snackbar']});})
 }
 login(){
    this.auth.login();
  
   } 
   
 }






