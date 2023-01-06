import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'signUp',component:SignupComponent},
 {path:'men',component:MenComponent},
 {path:'women',component:WomenComponent},
 {path:'kids',component:KidsComponent},
 {path:'home',component:HomeComponent},
 {path:'**',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
