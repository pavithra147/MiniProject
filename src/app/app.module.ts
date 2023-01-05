import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
