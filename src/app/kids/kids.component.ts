import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CommonService } from '../common/common.service';
import { KidsService } from './kids.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  public collection: any
  public kids:any
  constructor(private kidsService: KidsService,private activatedRoute: ActivatedRoute,private router:Router,private cartService:CartService, private http:HttpClient,
    public commonService:CommonService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.kidsService.getKids().subscribe(data=>{this.collection=data
    console.log(this.collection);
    this.collection.forEach((a:any)=>{
      Object.assign(a,{Quantity:1,Total:a.price});
     });
    });
    
  }
 
  addtoCart(collect:any){
    console.log(collect);
   this.cartService.addToCart(collect).subscribe();
   localStorage.setItem('cart',JSON.stringify( collect.id));
   this.snackbar.open("You Successfully added to the Cart",'',{duration:4000,verticalPosition:'top',panelClass: ['blue-snackbar']})
  }
//   disableButton(event: any) {
//     event.target.disabled = true;
// }

// disabledButtons=[];
// disabledButton(collect:any){
//    this.disabledButtons.push(collect);
// }

}

