import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CardService{

    serverUrl:string = 'http://localhost:8080/';

    constructor(private http: Http){ }

    getAllOic(){
        return this.http.get(this.serverUrl + 'card/oic/all')
    }
    getOicByInnovations(){
        return this.http.get(this.serverUrl + 'card/oic/innovations')
    }
    getOicByPrograms(){
        return this.http.get(this.serverUrl + 'card/oic/programs')
    }
    getOicByKnowHow(){
        return this.http.get(this.serverUrl + 'card/oic/knowhow')
    }
    getOicByBalance(){
        return this.http.get(this.serverUrl + 'card/oic/balance')
    }
    getOicByFonds(){
        return this.http.get(this.serverUrl + 'card/oic/fonds')
    }
    getOicByContracts(){
        return this.http.get(this.serverUrl + 'card/oic/contracts')
    }
    getOicByRnD(){
        return this.http.get(this.serverUrl + 'card/oic/rnd')
    }
    getOicByDepartments(){
        return this.http.get(this.serverUrl + 'card/oic/departments')
    }
    getOicInActive(){
        return this.http.get(this.serverUrl + 'card/oic/inactive')
    }
}