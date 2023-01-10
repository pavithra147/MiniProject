import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IMen } from './men';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MenService{
    constructor(private http: HttpClient){}

    // getImage(): Observable<IMen[]>{
    //     return this.http.get<IMen[]>('/app/db.json');
    // }

    getMen(){
        return this.http.get<any>('http://localhost:3000/men').pipe((map((res:any)=>{return res;})))
    }
}
    
