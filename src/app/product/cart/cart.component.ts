import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LoginService } from 'src/app/login-routing/login/login.service';
import { productService } from '../all-products/product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  grandtotal!: number;
  public cartItems: any = [];
  constructor(
    public cartService: CartService,
    private commonService:CommonService,
    private http:HttpClient,
    private router:Router
  ) {this.product = this.commonService.product}
  ngOnInit() {
    this.getProduct();
    this.commonService.count();
    
  }
  getProduct(){
    this.cartService.getProduct().subscribe(res=>{
      this.product = res;
    })
  }

  removeProduct(id: any) {
    this.cartService.removeCart(id).subscribe();
    // this.ngOnInit();
    this.getProduct();
    this.commonService
.count();  }

  incrementQuantity(products: any) {
    if (products.Quantity != 10) {
      products.Quantity = products.Quantity + 1;
      this.cartService.quantityIncrement(products.id, products).subscribe();
    }
  }
  decrementQuantity(products: any) {
    if (products.Quantity != 1) {
      products.Quantity = products.Quantity - 1;
      this.cartService.quantityDecrement(products.id, products).subscribe();
    }
  
  }
  emptyCart() {
    const postsIdsArray = this.product.map((post: { id: any }) => post.id);
    console.log(postsIdsArray);
    postsIdsArray.forEach((id: any) =>
    {setTimeout(()=> {this.removeProduct(id);
      this.commonService.count();},10)});
    
  }

  checkOut(){
     this.emptyCart();
     this.router.navigate(['/checkOut']);
     this.commonService.count();
  }
  
  get total() {
    //getter
    return this.product?.reduce(
      (sum: { price: number }, x: { Quantity: number; price: number }) => ({
        price: sum.price + x.Quantity * x.price,
      }),
      { Quantity: 0, price: 0 }
    ).price;
  }
}
