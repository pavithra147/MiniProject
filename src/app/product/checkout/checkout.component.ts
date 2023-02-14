import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/service/common.service';


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
  public product: any;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.checkOutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  onSubmit() {
    this.snackBar.open('Your Order is placed successfully', '', {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar'],
    });
    this.commonService.count();
    this.checkOutForm.reset();
  }
}
