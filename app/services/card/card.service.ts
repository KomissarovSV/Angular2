import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {OicModal} from "../../components/oic-card/oicModal";

@Injectable()
export class CardService{

    serverUrl:string = 'http://localhost:8080/api/';

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
    getCard(id:number){
        return this.http.get(this.serverUrl + 'card/oic?id=' + id)
    }
    getTypes(){
        return this.http.get(this.serverUrl + 'card/oic/types')
    }
    getOsnov(){
        return this.http.get(this.serverUrl + 'card/oic/osnov')
    }
    updateOic(oicModal:OicModal){
        return this.http.put(this.serverUrl + 'card/oic',oicModal)
    }
    createOic(oicModal:OicModal){
        return this.http.post(this.serverUrl + 'card/oic',oicModal)
    }
    getTree(){
        return this.http.get(this.serverUrl + 'card/oic/tree')
    }
    getNodes(parentId:number){
        return this.http.get(this.serverUrl + 'card/oic/nodes?id=' + parentId)
    }

}