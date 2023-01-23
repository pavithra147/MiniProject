import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'signUp',component:SignupComponent},
 {path:'men',component:MenComponent},
 {path:'women',component:WomenComponent},
 {path:'kids',component:KidsComponent},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
 {path:'checkout',component:CheckoutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
