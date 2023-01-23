import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CartService{
    public cartItem:any=[];
    constructor(private http:HttpClient) {}

    getProduct(){               
        return this.http.get("http://localhost:3000/addtocart");
    }
     addToCart(product:any){
        return this.http.post("http://localhost:3000/addtocart",product);
        
    }
    
    removeCart(product: any){
    return this.http.delete(`http://localhost:3000/addtocart/${product}`);
    }
   

}