import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";

@Injectable()
export class CartService{
    constructor(private http:HttpClient) {}

    getProduct(){  
         return this.http.get("http://localhost:3000/addtocart");
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

    getProducts(){
        return this.http.get('http://localhost:3000/addtocart?userid').pipe((map((res:any)=>{return res;})))
    }
    user(){
        return this.http.get('http://localhost:3000/user')
    }
   
}
