import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  public totalItem:any;
  public loginForm: any;
  @Output() localStorage:any;
  
  constructor(private router:Router,private cartService: CartService,private http: HttpClient){
    this.ngOnChanges();
    
  }
  move(){
    this.router.navigate(['/home']);
  }

ngOnChanges(): void {
    this.cartService.getProduct().subscribe((data)=>{this.totalItem=data});
    }
  variable:boolean=false;
  showMenu(){
    this.variable=!this.variable;
  }
  searchIcon(){
    this.router.navigate(['/search']);
  }
  
 
  
  
}
