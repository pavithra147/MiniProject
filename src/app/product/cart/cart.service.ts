import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addtocart } from 'src/app/entities';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  getProduct() :Observable<addtocart>{
    const customer = sessionStorage.getItem('emailId');
    return this.http.get<addtocart>('http://localhost:3000/addtocart?emailId=' + customer);
  }

  addToCart(product: any):Observable<addtocart> {
    return this.http.post<addtocart>('http://localhost:3000/addtocart', product);
  }

  removeCart(product: any):Observable<addtocart> {
    return this.http.delete<addtocart>(`http://localhost:3000/addtocart/${product}`);
  }

  
  quantityIncrement(pid: any, product: any):Observable<addtocart> {
    return this.http.put<addtocart>(`http://localhost:3000/addtocart/${pid}`, product);
  }
  quantityDecrement(pid: any, product: any):Observable<addtocart> {
    return this.http.put<addtocart>(`http://localhost:3000/addtocart/${pid}`, product);
  }

  checkOut(product: any) {
    return this.http.post('http://localhost:3000/checkout', product);
  }
}
