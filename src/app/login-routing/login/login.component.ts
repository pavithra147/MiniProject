import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { register } from 'src/app/service/dataType';
import { Overlay } from '@angular/cdk/overlay'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public data: any;
  public able!: boolean;
  public search!: string;
  email: any;
  public submitt =false
  constructor(
    private form: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar,
    private overlay:Overlay
  ) {}
  ngOnInit(): void {
    this.loginForm = this.form.group(
      {
        email: ['', [Validators.required, Validators.email]],
        mobile: [''],
        password: ['', Validators.required],
      },
      { validators: this.disable('email', 'password') }
    );
  }

  disable(email: string, mobile: string) {
    return (form: AbstractControl): { [key: string]: any } | null => {
      const email = form.get('email');
      const mobile = form.get('mobile');

      if (email?.value !== '') {
        mobile?.setErrors({ disable: true });
        return { disable: true };
      }
      if (mobile?.value !== '') {
        email?.setErrors({ disable1: true });
        return { disable1: true };
      }
    

      if (email?.value == '') {
        mobile?.setErrors({ disable: false });
        return { disable: false };
      } 
      if (mobile?.value == '') {
        email?.setErrors({ disable1: false });
        return { disable1: false };
      }
      else {
        return null;
      }
    };
  }
  submit() {
    if((this.loginForm.get('email')?.valid && this.loginForm.get('password')?.valid && this.loginForm.get('mobile')?.invalid) || (this.loginForm.get('email')?.invalid && this.loginForm.get('password')?.valid && this.loginForm.get('mobile')?.valid)){
    this.submitt =true
    this.http.get<register[]>('http://localhost:3000/register').subscribe({
      next: (res) => {
        console.log('response', res);
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });

        if (user) {
          this.snackBar.open('Login Success', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar'],
          });
          this.router.navigate(['/home']);
          sessionStorage.setItem('emailId', this.loginForm.value.email);
        } else {
          this.snackBar.open('User Not Found!!!', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar'],
          });
        }
      },
      error: (e) =>
        this.snackBar.open('Something went wrong', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['blue-snackbar'],
        }),
    });
  }
}
}

