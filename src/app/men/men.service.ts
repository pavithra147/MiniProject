import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IMen } from './men';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MenService{
    constructor(private http: HttpClient){}

    getImage(): Observable<IMen[]>{
        return this.http.get<IMen[]>('/app/db.json');
    }
}
    
