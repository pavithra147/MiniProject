import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public item!:any;
  constructor(private http:HttpClient) { }
  checkProduct(product:any){
      this.item=product.pid;
      return this.http.post('http://localhost:3000/added', product);
 }
 get(){
  return this.http.get('http://localhost:3000/added');
 }
}
