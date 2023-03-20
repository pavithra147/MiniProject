import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { register } from 'src/app/service/dataType';
import { CommonService } from 'src/app/service/common.service';
import { Overlay } from '@angular/cdk/overlay'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private form: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private SnackBar: MatSnackBar,
    private commonService: CommonService,
    private overlay:Overlay
  ) {}

  ngOnInit(): void {
    this.registerForm = this.form.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15),
          ],
        ],
        confirmPassword: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
      },

      { validators: this.misMatch('password', 'confirmPassword') }
    );
  }
  misMatch(password: string, confirmPassword: string) {
    return (formgroup: AbstractControl): { [key: string]: any } | null => {
      const control = formgroup.get('password');
      const controlname = formgroup.get('confirmPassword');
      if (control?.value !== controlname?.value) {
        controlname?.setErrors({ misMatch: true });
        return { misMatch: true };
      } else {
        controlname?.setErrors(null);
        return null;
      }
    };
  }

  onSubmit() {
    this.SnackBar.open('You successfully registered', '', {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar'],
    });
  }

  registerDetails() {
    const postData = this.registerForm.value;
    this.http
      .post<register[]>('http://localhost:3000/register', postData)
      .subscribe( {
     next:(data)=>{   console.log(data);

        this.SnackBar.open('SignUp is Successful', '', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['blue-snackbar'],
        });
        this.router.navigate(['login']);
        this.registerForm.reset();
      },error:(e:any)=>{
        this.SnackBar.open('Something went wrong', '', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
      });
  }
}
