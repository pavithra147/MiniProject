import { Injectable } from '@angular/core';
import { productService } from './product.service';
import { CartService } from './cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay'
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  product: any;

  constructor(
    private cartService: CartService,
    private productService: productService,
    private snackBar:MatSnackBar,
    private overlay:Overlay
  ) {}

  count() {
    this.cartService.getProduct().subscribe( {
    next:(res)=>{  this.product = res;

      this.productService.sendData(this.product?.length);
    },error:(e)=>{this.snackBar.open('Something went wrong', '', {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar'],
    });
  }
    });
  }

  
}
