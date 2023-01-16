import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  public grandTotal:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
     this.cartService.getProduct().subscribe(res=>{this.product=res;
    this.grandTotal=this.cartService.getTotalPrice();})
  }
 
  removeProduct(products:any){
    this.cartService.removeCart(products)
  }
  emptyCart(){
  this.cartService.removeAllCart();
  }
}
