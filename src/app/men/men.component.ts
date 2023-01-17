import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { MenService } from './men.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
public details : any;
items: any;
  constructor(private service: MenService, private cartService: CartService) { }

  ngOnInit(): void {
    this.service.getMen().subscribe(data =>{
       this.details =data;
       this.details.forEach((a:any)=>{
        Object.assign(a,{Quantity:1,Total:a.price});
       });
  })
     
  }
  addToCart(items : any){
    this.cartService.addToCart(items);
    alert("You Successfully added to the Cart")
  }

}
