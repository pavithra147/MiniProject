
import { HttpClient } from '@angular/common/http';
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
  constructor(private service: WomenService,private cartService : CartService,private http:HttpClient) { }

  ngOnInit(): void {
     this.service.getWomen().subscribe(data => {this.list =data
      console.log(this.list);
      this.list.forEach((a:any)=>{
         Object.assign(a,{Quantity:1,Total:a.price});
        });
   
   });
  }
  addToCart(women: any){
   this.cartService.addToCart(women);
   alert("You Successfully added to the Cart")

  }
    
  }


