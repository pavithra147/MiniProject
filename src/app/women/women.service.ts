import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()
export class WomenService {
    constructor(private http: HttpClient){}
    
    getWomen(){
       return  this.http.get<any>('http://localhost:3000/women').pipe((map((res:any)=>{return res;})))
    }

} 