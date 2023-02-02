import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CartService } from "../cart/cart.service";

@Injectable({
    providedIn:'root'
})
export class productService{
    constructor(private http:HttpClient,private cartService:CartService){}
    getProducts(product:{}){
        return this.http.get('http://localhost:3000/products' , product).pipe((map((res:any)=>{return res;})))
    }

    getAllProducts(){
        return this.http.get('http://localhost:3000/products').pipe((map((res:any)=>{return res;})))
       
    }
   
}