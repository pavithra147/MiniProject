import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { productService } from './all-products/product.service';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductRoutingModule } from '../product-routing/product-routing.module';



@NgModule({
  declarations: [AllProductsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[productService,CartService],
  exports:[AllProductsComponent,
    CartComponent,
    CheckoutComponent]
})
export class ProductModule { }
