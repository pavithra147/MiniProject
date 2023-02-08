import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginModule } from './login-routing/login/login.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { productService } from './product/all-products/product.service';

@NgModule({
  declarations: [AppComponent],
  providers: [AuthGuardService, productService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    LoginModule,
    SharedModule,
    ProductModule
    
  ],
})
export class AppModule {}
