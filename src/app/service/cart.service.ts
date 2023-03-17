import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addtocart } from 'src/app/service/dataType';
import { environment } from 'src/environments/environment';


@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}
   public baseUrl=environment.apiUrl;
  getProduct() :Observable<addtocart[]>{
    const customer = sessionStorage.getItem('emailId');
    return this.http.get<addtocart[]>(`${this.baseUrl}/addtocart?emailId=` + customer);
  }

  addToCart(product: any):Observable<addtocart[]> {
    return this.http.post<addtocart[]>(`${this.baseUrl}/addtocart`, product);
  }

  removeCart(product: any):Observable<addtocart[]> {
    return this.http.delete<addtocart[]>(`${this.baseUrl}/addtocart/${product}`);
  }
  
  quantityIncrement(pid: any, product: any):Observable<addtocart[]> {
    return this.http.put<addtocart[]>(`${this.baseUrl}/addtocart/${pid}`, product);
  }
  quantityDecrement(pid: any, product: any):Observable<addtocart[]> {
    return this.http.put<addtocart[]>(`${this.baseUrl}/addtocart/${pid}`, product);
  }

}
