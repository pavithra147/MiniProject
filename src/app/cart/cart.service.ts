import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CartService{
    public cartItem:any=[];
    public ItemList=new BehaviorSubject <any>([]);//we have to initialize the data  initially      //we can pass value to it, emit data, it can act as subscriber 
    constructor() {}

    getProduct(){                //getter
        return this.ItemList.asObservable(); //it act observable who use this observable they can subscribe

    }
    setProduct(product:any){
        this.cartItem.push(...product);     //we pushing product inside this cartItem
        this.ItemList.next(product); //emitting product 
    }
    addToCart(product:any){
        this.cartItem.push(product);
        this.ItemList.next(this.cartItem);
         this.getTotalPrice();
        console.log(this.cartItem);
    }
    getTotalPrice():number{
        let grandTotal=0;
        this.cartItem.map((a:any)=>{
            grandTotal += a.total;
        });
        return grandTotal;
    }
    removeCart(product: any){
        this.cartItem.map((item:any,index:any)=>{
            if(product.id ===item.id){
                this.cartItem.splice(index,1);
            }
        })

    }
    removeAllCart(){
        this.cartItem=[]
        this.ItemList.next(this.cartItem);
    }

}