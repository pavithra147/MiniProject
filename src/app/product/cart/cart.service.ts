import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";

@Injectable()
export class CartService{
    constructor(private http:HttpClient) {}

    getProduct(){  
        const customer = sessionStorage.getItem('emailId')
         return this.http.get("http://localhost:3000/addtocart?emailId=" +customer);
        }
       
     addToCart(product:any){
        // console.log(product);
          return this.http.post("http://localhost:3000/addtocart",product);
        }
   
    removeCart(product: any){
         return this.http.delete(`http://localhost:3000/addtocart/${product}`);
    }
    cart(product:any){
        return this.http.get("http://localhost:3000/addtocart",product);
    }

   quantityIncrement(pid:any,product:any){
    return this.http.put(`http://localhost:3000/addtocart/${pid}`,product);
   }
   quantityDecrement(pid:any,product:any){
    return this.http.put(`http://localhost:3000/addtocart/${pid}`,product);
   }
   
}
