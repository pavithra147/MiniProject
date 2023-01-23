import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { MenService } from './men.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
public details : any;
items: any;

  constructor(private service: MenService, private cartService: CartService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.service.getMen().subscribe(data =>{
       this.details =data;
       this.details.forEach((a:any)=>{
        Object.assign(a,{Quantity:1,Total:a.price});
       });
  })
     
  }
  addToCart(items : any){
    console.log(items);
    this.cartService.addToCart(items).subscribe();
    this.snackBar.open("You Successfully added to the Cart",'',{duration:4000,verticalPosition:'top',panelClass: ['blue-snackbar']})
  }

}
