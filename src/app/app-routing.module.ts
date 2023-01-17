import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { KidDetailsComponent } from './kid-details/kid-details.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'signUp',component:SignupComponent},
 {path:'men',component:MenComponent},
 {path:'women',component:WomenComponent},
 {path:'kids',component:KidsComponent},
  {path:'kidsDetails',component:KidDetailsComponent},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'cart',component:CartComponent},
 {path:'search',component:SearchComponent},
 {path:' ',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
