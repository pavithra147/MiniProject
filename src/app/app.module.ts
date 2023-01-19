import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
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
import { KidDetailsComponent } from './kid-details/kid-details.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartService } from './cart/cart.service';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CommonService } from './common/common.service';
import { CategoriesFilterPipe } from './categories-filter.pipe';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TotalPipe } from './total.pipe';

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
    KidDetailsComponent,
    CartComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CategoriesFilterPipe,
    TotalPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,MenService,WomenService,CartService,CommonService,AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
