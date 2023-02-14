import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../product/cart/cart.component';
import { CheckoutComponent } from '../product/checkout/checkout.component';
import { AllProductsComponent } from '../product/all-products/all-products.component';
import { AuthGuardService } from '../service/auth-guard.service';

const routes: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
  { path: 'checkOut', component: CheckoutComponent },
  { path: 'allProduct', component: AllProductsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
