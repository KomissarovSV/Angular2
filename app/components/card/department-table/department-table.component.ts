import {Component, OnInit, Input} from '@angular/core'
import {CardService} from "../../../services/card/card.service";
import {Oic} from "../oic";

@Component({
    moduleId:module.id,
    selector:'department-table',
    templateUrl:'department-table.component.html',
    providers:[CardService]
})
export class DepartmentTable implements  OnInit{s

    @Input()
    oicList:Oic[];
}
