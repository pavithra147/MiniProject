import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  // public grandTotal:number=0;
  constructor(private cartService:CartService) { 
    // this.ngOnChanges();
  }

  ngOnInit() {
    this.cartService.getProduct().subscribe(res=>{this.product=res;});
      // this.grandTotal=this.cartService.getTotalPrice()});
    // console.log(this.grandTotal);
    console.log(this.product);
    
  }
 
  removeProduct(id:any){
    console.log(id);
    this.cartService.removeCart(id).subscribe();
    this.ngOnInit();
  }
  // emptyCart(){
  // this.cartService.removeAllCart();
  // }

  
}
