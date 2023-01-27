import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from '../login-routing.module';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [

  LoginComponent,
  SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
