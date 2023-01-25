import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cart/cart.service';
import { CommonService } from '../common/common.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
[x: string]: any;
  public totalItem:any;
  public loginForm: any;
  constructor(private router:Router,private cartService: CartService,private http: HttpClient,
    private auth:AuthService,public loginService: LoginService,private commonService:CommonService){
     
    }
  move(){
    this.router.navigate(['/home']);
  }
  
  variable:boolean=false;
  ngOnInit(): void {
      this.cartService.getProduct().subscribe((data)=>{this.totalItem=data; });
       
    }
  showMenu(){
    this.variable=!this.variable;
  }
  searchIcon(){
    this.router.navigate(['/search']);
  }
  
 login(){
    this.auth.login()
 }
 logout(){
   this.auth.logout();

 }
 filter(category:any){
   this.commonService.click(category);
 }
 
}
