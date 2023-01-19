import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
   providedIn:'root'
})
export class LoginService{
   validate!:boolean;
   constructor(private router:Router){}

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
      this.router.navigate(['/home']);
    }
    
    userName=localStorage.getItem('emailId')
      
      
    
}




