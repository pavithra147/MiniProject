import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public checkOutForm!: FormGroup;
  public user: any;
  public submitted = false;
  public cartList: any;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.checkOutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  checkOutDetails() {
    this.user = this.checkOutForm.value;
    this.cartService.checkOut(this.user).subscribe((x) => {
      console.log(x);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkOutForm.value.email === sessionStorage.getItem('emailId')) {
      this.snackBar.open('Your Order is placed successfully', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['blue-snackbar'],
      });
    } else {
      this.snackBar.open('Enter Correct mail Id', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
    }
    this.checkOutForm.reset();
  }
}
