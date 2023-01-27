import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonService } from './common/common.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TotalPipe } from './total.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './filter.pipe';
import { LoginModule } from './login-routing/login/login.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';


@NgModule({
    declarations: [
        AppComponent,
        TotalPipe,
        FilterPipe,
        
    ],
    providers: [ CommonService, AuthGuardService, AuthService],
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
    ]
})
export class AppModule { }
