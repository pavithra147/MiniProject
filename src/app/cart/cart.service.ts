import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CartService{
    public cartItem:any=[];
    public ItemList=new BehaviorSubject <any>([]);//we have to initialize the data  initially      //we can pass value to it, emit data, it can act as subscriber 
    constructor(private http:HttpClient) {}

    getProduct(){                //getter
        // return this.ItemList.asObservable(); //it act observable who use this observable they can subscribe
  return this.http.get("http://localhost:3000/addtocart");
  
    }
    // setProduct(product:any){
    //     this.cartItem.push(...product);     //we pushing product inside this cartItem
    //     this.ItemList.next(product); //emitting product 
    // }
    addToCart(product:any){
        // this.cartItem.push(product);
        // this.ItemList.next(this.cartItem);
        // this.getTotalPrice();
        // console.log(this.cartItem);
        return this.http.post("http://localhost:3000/addtocart",product);
        
    }
    
    removeCart(product: any){
    return this.http.delete(`http://localhost:3000/addtocart/${product}`);
    }
   

}