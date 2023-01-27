import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class productService{
    constructor(private http:HttpClient){}

    getAllProducts(){
        return this.http.get('http://localhost:3000/products').pipe((map((res:any)=>{return res;})))
       
    }
    
}