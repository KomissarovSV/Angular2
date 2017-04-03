import {Component, OnInit} from '@angular/core'
import {Response} from "@angular/http";
import {CardService} from "../../services/card/card.service";
import {Oic} from "./oic";

@Component({
    moduleId:module.id,
    selector:'card',
    templateUrl:'card.component.html',
    providers:[CardService]
})
export class Card implements  OnInit{

    data:Oic[];

    constructor(private cardService: CardService){}

    ngOnInit(){
        this.cardService.getAllOic().subscribe((data: Response) => this.data=data.json());
    }
}