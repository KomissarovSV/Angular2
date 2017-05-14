import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import {CardService} from "../../../services/card/card.service";
import {Oic} from "../oic";

@Component({
    moduleId:module.id,
    selector:'common-table',
    templateUrl:'common-table.component.html',
    providers:[CardService]
})
export class CommonTable{

    @Input()
    oicList:Oic[];
    @Output()
    onChanged = new EventEmitter<Number>();

    rowClick(id:number){
        this.onChanged.emit(id);
    }
}