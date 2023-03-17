import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/service/common.service';
import { addtocart } from 'src/app/service/dataType';
import { CartService } from '../../service/cart.service';
import { productService } from '../../service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public category: string = '';
  public customer = sessionStorage.getItem('emailId');
  public collectionList!: any;
  constructor(
    private productService: productService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.check();
  }
  addtoCart(collect: any) {
    collect.emailId = this.customer;
    this.cartService.addToCart(collect).subscribe({
      next:(value:any)=>{},
      error:(error:any)=>{
        this.snackBar.open('Something went wrong', '', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
    });
    setTimeout(() => {
      this.check();
    }, 100);
    if (this.customer) {
      this.snackBar.open('You Successfully added to the Cart', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['blue-snackbar'],
      });
    } 
  }

  filter(category: string) {
    this.check(category);
  }

  check(category?: any) {
    this.cartService.getProduct().subscribe({
    next:(res)=>{  this.productService.getAllProducts().subscribe( {
      next:(res1)=>{  this.collectionList = res1;
       if (Array.isArray(res1) && Array.isArray(res)) {
          res1.forEach((a: any, i: any) => {
            res.forEach((b: any) => {
              if (a.pid === b.pid && this.customer === b.emailId) {
                this.collectionList[i].added = true;
              }
            });
          });
       }
        if (category) {
          this.collectionList = this.collectionList.filter((a: any) => {
            if (a.category === category || category === '') {
              return a;
            }
          });
        }
      },
      error:(e:any)=>{
        this.snackBar.open('Something went wrong', '', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar'],
        });
      }
      });
    },
    error:(e:any)=>{
      this.snackBar.open('Something went wrong', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
    }
    });

    this.commonService.count();
  }
  goToTop() {
    window.scroll(0, 0);
  }
}
