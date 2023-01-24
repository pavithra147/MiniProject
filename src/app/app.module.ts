import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { MenService } from './men/men.service';
import { AboutComponent } from './about/about.component';
import { WomenService } from './women/women.service';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartService } from './cart/cart.service';
import { FooterComponent } from './footer/footer.component';
import { CommonService } from './common/common.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TotalPipe } from './total.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterPipe } from './filter.pipe';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    CheckoutComponent,
    TotalPipe,
    FilterPipe,
    AllProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
    
   ],
  providers: [LoginService,MenService,WomenService,CartService,CommonService,AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
