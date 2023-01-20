import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public  disabledButtons:any;
  constructor(private http:HttpClient,private cart:CartService) { }
  getAddToCart(){
      this.disabledButtons=localStorage.getItem('cart');
     
  }
  public checkProductInCart(product: any):boolean{
   
let user=this.disabledButtons.find((cart:any)=>{
  //console.log(user);
  console.log(cart);
   if( (cart.id)===(product.id)){
         return cart;     
    }
        });
   return user.length>0
  }



}