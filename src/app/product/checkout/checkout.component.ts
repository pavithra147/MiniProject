import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/common.service';
import { productService } from '../all-products/product.service';
import { Router } from '@angular/router';

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
  public product:any;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private commonService:CommonService,
    private router:Router
  ) {{this.product = this.commonService.product}}
  ngOnInit() {
    this.checkOutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
    // this.getProduct();
    // this.commonService.count();
  }
  // getProduct(){
  //   this.cartService.getProduct().subscribe(res=>{
  //     this.product = res;
  //   })
  // }


  checkOutDetails() {
    this.user = this.checkOutForm.value;
    this.cartService.checkOut(this.user).subscribe((x) => {
      console.log(x);
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

