import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CartService } from "src/app/product/cart/cart.service";
@Injectable({
   providedIn:'root'
})
export class LoginService{
   validate!:boolean;
   constructor(private router:Router,private snackBar:MatSnackBar,private cartService:CartService){}

  getUserName(){
     const userName=sessionStorage.getItem('emailId');
     return userName;
   }

   login=()=>{
      if(this.getUser()){
         return true;
   }
      else{
         return false;
      }
    }
    getUser=()=>{
     return sessionStorage.getItem('emailId')
   }
    logout(){
      sessionStorage.clear();
      this.snackBar.open("Again Visit Our Shoe Website**",'',{duration:3000,verticalPosition:'top',panelClass:['blue-snackbar']});
      this.router.navigate(['/home']);
    }
    
    getCount(){
      const countItem=sessionStorage.getItem('count');
      return countItem;
    }
   
    
}




