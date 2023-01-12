
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { WomenService } from './women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
   public list:any
details: any;
  constructor(private service: WomenService,private cartService : CartService) { }

  ngOnInit(): void {
     this.service.getWomen().subscribe(data => this.list =data);
     console.log(this.list);
  }
  addToCart(details: any){
   this.cartService.addToCart(details);
  }
    
  }


