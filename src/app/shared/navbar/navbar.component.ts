import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/product/cart/cart.service';
import { LoginService } from 'src/app/login-routing/login/login.service';
import { productService } from 'src/app/product/all-products/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public count!: number;
  public totalItem!: any;
  public loginForm: any;
  count$: any;
  
  
  constructor(
    private router: Router,
    public cartService: CartService,
    public loginService: LoginService,
    private productService: productService
  ) {
    this.productService.obs$.subscribe((x) => {
      this.count = x;
    });
   
    
  }
  move() {
    this.router.navigate(['/home']);
  }
  public item: any;
  variable: boolean = false;
  ngOnInit(): void {}

  showMenu() {
    this.variable = !this.variable;
  }
}
