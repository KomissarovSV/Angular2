import {Component, OnInit, Input} from '@angular/core'
import {CardService} from "../../../services/card/card.service";
import {Oic} from "../oic";

@Component({
    moduleId:module.id,
    selector:'common-table',
    templateUrl:'common-table.component.html',
    providers:[CardService]
})
export class CommonTable implements  OnInit{

    @Input()
    oicList:Oic[];
}