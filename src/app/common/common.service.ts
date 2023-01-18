import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public  disabledButtons=[];
  constructor() { }
  public checkProductInCart(product: any){
      this.disabledButtons.push()
  }
}
