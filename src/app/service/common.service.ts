import { Injectable } from '@angular/core';
import { productService } from './product.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  product: any;

  constructor(
    private cartService: CartService,
    private productService: productService
  ) {}

  count() {
    this.cartService.getProduct().subscribe((res) => {
      this.product = res;
      console.log(res);

      this.productService.sendData(this.product?.length);
    });
  }
}
