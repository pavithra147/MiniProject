import { Injectable } from '@angular/core';
import { productService } from './product.service';
import { CartService } from './cart.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  product: any;

  constructor(
    private cartService: CartService,
    private productService: productService,
    private snackBar:MatSnackBar
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
