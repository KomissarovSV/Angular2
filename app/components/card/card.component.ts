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

    oicList:Oic[];
    applyList:Oic[];

    constructor(private cardService: CardService){}

    ngOnInit(){
        this.clickAllOic()
    }

    clickAllOic(){
        this.cardService.getAllOic().subscribe((data: Response) => this.oicList=data.json());
    }

    clickBalanceOic(){
        this.cardService.getOicByBalance().subscribe((data: Response) => this.oicList=data.json());
    }

    clickInActiveOic(){
        this.cardService.getOicInActive().subscribe((data: Response) => this.oicList=data.json());
    }

    clickInnavationsOic(){
        this.cardService.getOicByInnovations().subscribe((data: Response) => this.oicList=data.json());
    }
    clickProgramsOic(){
        this.cardService.getOicByPrograms().subscribe((data: Response) => this.oicList=data.json());
    }
    clickKnowHowOic(){
        this.cardService.getOicByKnowHow().subscribe((data: Response) => this.oicList=data.json());
    }
    clickFondsOic(){
        this.cardService.getOicByFonds().subscribe((data: Response) => this.oicList=data.json());
    }
    clickContractsOic(){
        this.cardService.getOicByContracts().subscribe((data: Response) => this.oicList=data.json());
    }
    clickRnDOic(){
        this.cardService.getOicByRnD().subscribe((data: Response) => this.oicList=data.json());
    }
    clickDepartmentsOic(){
        this.cardService.getOicByDepartments().subscribe((data: Response) => this.oicList=data.json());
    }
}