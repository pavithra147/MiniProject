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
  constructor(
    private productService: productService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
   
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.collection = data;
      this.filterCategory = data;
      this.collection.forEach((a: any) => {
        Object.assign(a, { Quantity: 1, Total: a.price });
      });
    });
  }

  addtoCart(collect: any) {
    console.log(collect);
    sessionStorage.setItem('Quantity', collect.Quantity);
    sessionStorage.setItem('id', JSON.stringify(collect.pid));
    collect.emailId = this.customer;
    this.cartService.addToCart(collect).subscribe((res: any) => {});

    this.snackBar.open('You Successfully added to the Cart', '', {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar'],
    });
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
}
