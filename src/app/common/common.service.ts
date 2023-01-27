import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from '../product/cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
//   filter(category: any) {
//     throw new Error('Method not implemented.');
//   }
//   public  disabledButtons:any;
//   constructor(private http:HttpClient,private cart:CartService) { }
//   getAddToCart(){
//       this.disabledButtons=localStorage.getItem('cart');
     
//   }
//   public checkProductInCart(product: any):boolean{
   
// let user=this.disabledButtons.find((cart:any)=>{
  
//   console.log(cart);
//    if( (cart.id)===(product.id)){
//          return cart;     
//     }
//         });
//    return user.length>0
//   }

invokeEvent: Subject<any>=new Subject();
click(category:string){
  this.invokeEvent.next(category);
}
getClick(){
  return this.invokeEvent.asObservable();
}

}