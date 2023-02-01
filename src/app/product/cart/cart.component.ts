import { Component, OnChanges, OnInit } from '@angular/core';
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
  constructor(public cartService:CartService) { }
ngOnInit() {
    this.cartService.getProduct().subscribe(res=>{this.product=res;});
    console.log(this.product);
    
  }
 
  removeProduct(id:any){
   // console.log(id);
    this.cartService.removeCart(id).subscribe();
    this.ngOnInit();
  }
  
  incrementQuantity(products:any){
    
    console.log(products.Quantity);
    if(products.Quantity !=5){
    products.Quantity=products.Quantity +1;
    }
  
  }
  decrementQuantity(products:any){
    console.log(products.Quantity);
    if(products.Quantity !=1){
    products.Quantity=products.Quantity -1;
    }
  }
  // grandTotal(product:any){
  // this.grandtotal=product.Quantity*product.price;
  // }
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

  

