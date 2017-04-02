import {Component, OnInit} from '@angular/core'
import {HttpService} from "../../services/http/http.service";
import {Response} from "@angular/http";

@Component({
    moduleId:module.id,
    selector:'card',
    templateUrl:'card.component.html',
    providers:[HttpService]
})
export class Card implements  OnInit{

    date;

    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.date = this.httpService.getData().subscribe((data: Response) => this.data=data.json());
    }
}