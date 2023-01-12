import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class KidsService{
    constructor(private http:HttpClient){}

    getKids(){
        return this.http.get('http://localhost:3000/kids').pipe((map((res:any)=>{return res;})))
       
    }
    
}