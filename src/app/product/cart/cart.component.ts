import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login-routing/login/login.service';
import { productService } from '../all-products/product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  grandtotal!: number;
  public cartItems:any=[];
  constructor(public cartService:CartService,private loginService:LoginService,private productService:productService) { 
   // this.productService.obs$.subscribe(x => console.log("from",x));
  }
ngOnInit() {
    this.cartService.getProduct().subscribe(res=>{this.product=res;
      console.log(this.product);
     console.log(this.product.length);
      sessionStorage.setItem('count',JSON.stringify(this.product.length));
       this.productService.sendData(this.product.length);
    });
    
   
    
  }
 
  removeProduct(id:any){
   // console.log(id);
    this.cartService.removeCart(id).subscribe();
    this.ngOnInit();
  }
  
  incrementQuantity(products:any){
    
    console.log(products.Quantity);
    console.log(products.pid);
    if(products.Quantity !=10){
    products.Quantity=products.Quantity +1;
    this.cartService.quantityIncrement(products.pid,products).subscribe();
    }
    
    let increment=this.product.find((a:any)=>{return ((a.id)===(products.id))
    })
    console.log(increment);
  }
  decrementQuantity(products:any){
    console.log(products.Quantity);
    if(products.Quantity !=1){
    products.Quantity=products.Quantity -1;
    this.cartService.quantityDecrement(products.pid,products).subscribe();
    }
  }
  
  emptyCart(){
      const postsIdsArray = this.product.map((post: { id: any; }) => post.id);
      console.log(postsIdsArray);
      postsIdsArray.forEach((id: any) => this.removeProduct(id))
  }

  get total()  //getter
  {
    return this.product.reduce((sum: { price: number; },x: { Quantity: number; price: number; })=>
    ({
      price:sum.price+x.Quantity*x.price}),    
      {Quantity:0,price:0} ).price;
  }
  //   myCart:any=[]
  // idCheck(){
  //   const myCart=this.product.map((post:{userid:any})=>post.userid);
  //   console.log(myCart);
  // }
   
  
     
  }

  

