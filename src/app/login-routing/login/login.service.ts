import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CartService } from "src/app/product/cart/cart.service";
import { filter, fromEvent, map, Observable } from "rxjs";
@Injectable({
   providedIn:'root'
})
export class LoginService{
   validate!:boolean;
   constructor(private router:Router,private snackBar:MatSnackBar,private cartService:CartService){
      // const count$=fromEvent<StorageEvent>(window,"storge").pipe(
      //    filter(event=>event.storageArea === sessionStorage),
      //    filter(event => event.key === "count"),
      //    map(event=>event.newValue)
      // )
   }

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
      //  obs=new Observable(sub=>{
      //    const countItem=JSON.parse(sessionStorage.getItem('count') || '{}');
      //    sub.next(countItem);
      // })
    
      
    
}




