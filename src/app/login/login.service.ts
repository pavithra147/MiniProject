import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
   providedIn:'root'
})
export class LoginService{
   validate!:boolean;
   constructor(private router:Router,private snackBar:MatSnackBar){}

   login=()=>{
      if(this.getUser()){
         return true;
   }
      else{
         return false;
      }
    }
    getUser=()=>{
     return localStorage.getItem('emailId')
   }
    logout(){
      localStorage.clear();
      this.snackBar.open("Again Visit Our Shoe Website**",'',{duration:3000,verticalPosition:'top',panelClass:['blue-snackbar']});
      this.router.navigate(['/home']);
    }
    
    userName=localStorage.getItem('emailId')
      
      
    
}




