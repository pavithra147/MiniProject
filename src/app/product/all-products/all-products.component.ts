import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart/cart.service';
import { productService } from './product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public collection: any;
  public filterCategory: any;
  public category: string = '';
  public customer = sessionStorage.getItem('emailId');
  public product: any;
  public item: any;
  cartlist: any;
 
  constructor(
    private productService: productService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.collection = data;
      console.log(data);
      this.filterCategory = data;
    });
    this.check();
  }

  addtoCart(collect: any) {
    this.snackBar.open('You Successfully added to the Cart', '', {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar'],
    });
    console.log(collect);
    collect.emailId = this.customer;
    this.cartService.addToCart(collect).subscribe();
    setTimeout(() => {
      this.check();
    }, 100);
  }

  filter(category: string) {
    this.filterCategory = this.collection.filter((a: any) => {
      if (a.category === category || category == '') {
        return a;
      }
    });
  }
  categories(brand: string) {
    this.filterCategory = this.collection.filter((a: any) => {
      if (a.brand === brand) {
        return a;
      }
    });
  }

  check() {
    this.cartService.getProduct().subscribe((res) => {
      this.productService.getAllProducts().subscribe((res1) => {
        this.filterCategory = res1;
        if (Array.isArray(res1) && Array.isArray(res)) {
          res1.forEach((a: any, i: any) => {
            res.forEach((b: any) => {
              if (a.pid === b.pid && this.customer === b.emailId) {
                this.filterCategory[i].added = true;
              }
            });
          });
        }
      });
    });
  }
}
