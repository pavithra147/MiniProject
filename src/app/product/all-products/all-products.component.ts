import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/common/common.service';
import { CartService } from '../cart/cart.service';



import { productService } from './product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  public collection:any;
  public filterCategory:any;
  public category:string="";
  
   constructor(private productService: productService,private cartService:CartService, private snackBar:MatSnackBar,public commonService:CommonService,private http:HttpClient) {
    
   } 
   ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{this.collection=data;
      this.filterCategory=data;
     // console.log(this.collection);
      this.collection.forEach((a:any)=>{
        Object.assign(a,{Quantity:1,Total:a.price});
       });
       
      });
  
   }
    
    product:any;
    
  
   addtoCart(collect:any){
    console.log(collect);
   this.cartService.addToCart(collect).subscribe(res=>{console.log(res)});
    delete collect.id;
    this.snackBar.open("You Successfully added to the Cart",'',{duration:4000,verticalPosition:'top',panelClass: ['blue-snackbar']});
 
  }
  
  filter(category:string){
    this.filterCategory =this.collection.filter((a:any)=>{
     // console.log(a.category);
       console.log(category);
      if(a.category === category || category==''){
        console.log(category);
        
       return a;
       
      }
      
    })
  }
  categories(brand:string){
    this.filterCategory=this.collection.filter((a:any)=>{
     if(a.brand === brand ){
        return a;
      }
     })
  }
 
  
}