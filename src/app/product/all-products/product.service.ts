import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { products } from 'src/app/entities';

@Injectable({
  providedIn: 'root',
})
export class productService {
  private subject: BehaviorSubject<any>;
  public obs$: Observable<any>;
  constructor(private http: HttpClient) {
    this.subject = new BehaviorSubject<number>(0);
    this.obs$ = this.subject.asObservable();
  }

  getAllProducts():Observable<products> {
    return this.http.get<products>('http://localhost:3000/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  sendData(data: number) {
    this.subject.next(data);
  }


}
