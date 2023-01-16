import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem:number =0;
  public loginForm: any;
  @Output() localStorage:any;
  constructor(private router:Router,private cartService: CartService){}
  move(){
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.cartService.getProduct().subscribe((data)=>{this.totalItem=data.length;});
  }
  
 
  
  
}
