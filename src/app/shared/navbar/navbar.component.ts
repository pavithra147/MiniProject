import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';
import { LoginService } from 'src/app/service/login.service';
import { productService } from 'src/app/service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public count!: number;
  public totalItem!: any;
  public loginForm: any;
  product: any

  constructor(
    private router: Router,
    public cartService: CartService,
    public loginService: LoginService,
    private productService: productService,
    private commonService:CommonService,
    private snackBar:MatSnackBar
  ) {
    this.productService.obs$.subscribe( {
      next:(x)=>{this.count = x;},
      error:(e)=>{this.snackBar.open('Something went wrong', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });}
    });
  }

  public item: any;
  variable: boolean = false;
  ngOnInit(): void {
    // this.cartService.getProduct().subscribe((res) => {
    //   this.product = res;
    //   this.productService.sendData(this.product.length);
    // });
    this.commonService.count();
    
  }

  showMenu() {
    this.variable = !this.variable;
  }
  move() {
    this.router.navigate(['/home']);
  }
}
