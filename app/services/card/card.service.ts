import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CardService{

    constructor(private http: Http){ }

    getAllOic(){
        return this.http.get('http://localhost:8080/card/oic/all')
    }
}