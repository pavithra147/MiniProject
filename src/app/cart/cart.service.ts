import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class CartService{
    public cartItem:any=[];
    public productList=new BehaviorSubject<any>([]);
    
    constructor(private http:HttpClient) {}

    getProduct(){  
        this.productList.asObservable();             
        return this.http.get("http://localhost:3000/addtocart");
    }
    setProduct(product:any){
        this.cartItem.push(...product);
        this.productList.next(product);
    }

     addToCart(product:any){
        this.cartItem.push(product);
        this.productList.next(this.cartItem);
        return this.http.post("http://localhost:3000/addtocart",product);
        
    }
   
    
    removeCart(product: any){
        
    return this.http.delete(`http://localhost:3000/addtocart/${product}`);
    }
    removeAllCart(){
        this.cartItem=[];
        this.productList.next(this.cartItem);
    }

     
}