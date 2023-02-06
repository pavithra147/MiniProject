import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { CartService } from "../cart/cart.service";

@Injectable({
    providedIn:'root'
})
export class productService{
    private subject:BehaviorSubject<any>
    public obs$:Observable<any>
    constructor(private http:HttpClient,private cartService:CartService){
        this.subject=new BehaviorSubject<number>(0);
        this.obs$=this.subject.asObservable();
       
    }
    getProducts(product:{}){
        return this.http.get('http://localhost:3000/products' , product).pipe((map((res:any)=>{return res;})))
    }

    getAllProducts(){
        return this.http.get('http://localhost:3000/products').pipe((map((res:any)=>{return res;})))
       
    }
    sendData(data:number){
       this.subject.next(data);
    }
   
}