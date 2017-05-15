import {Component, Input, EventEmitter,Output} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {Oic} from "../card/oic";

@Component({
    moduleId:module.id,
    selector:'department-table',
    templateUrl:'department-table.component.html',
    providers:[CardService]
})
export class DepartmentTable{

    @Input()
    oicList:Oic[];
    @Output()
    onChanged = new EventEmitter<Number>();

    rowClick(id:number){
        this.onChanged.emit(id);
    }
}
