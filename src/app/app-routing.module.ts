import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AuthGuardService } from './auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'signUp',component:SignupComponent},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
 {path:'checkout',component:CheckoutComponent},
 {path:'allProduct',component:AllProductsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
