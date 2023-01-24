
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { WomenService } from './women.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
   public list:any
details: any;
  constructor(private service: WomenService,private cartService : CartService,private http:HttpClient,
   private snackBar:MatSnackBar) { }

  ngOnInit(): void {
     this.service.getWomen().subscribe(data => {this.list =data
      console.log(this.list);
      this.list.forEach((a:any)=>{
         Object.assign(a,{Quantity:1,Total:a.price});
        });
   
   });
  }
  addToCart(women: any){
   console.log(women);
   this.cartService.addToCart(women).subscribe();
   this.snackBar.open("You Successfully added to the Cart",'',{duration:4000,verticalPosition:'top',panelClass: ['blue-snackbar']});
   //this.cartNumberFunc();
  }

  // public cartNumber:number=0;
  // cartNumberFunc(){
  //   var value=JSON.parse(localStorage.getItem('products')!);
  //  this.cartNumber= value.length;
  //  this.cartService.cartSubject.next(this.cartNumber); 
  //  console.log(this.cartNumber);
  // }
    
  }


