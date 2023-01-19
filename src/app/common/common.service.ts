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
      this.cart.getProduct().subscribe(res=>{
        this.disabledButtons=res;
        console.log(this.disabledButtons);
         })  
  }
  public checkProductInCart(product: any):boolean{
   
    // let check=this.disabledButtons.find((a:any)=>{
    //  if( (a.id)===(product.id)){
        
    //        return a;
    //    }
     
    //  });
      return false;
  }
}
